import { Button, FormGroup, Icon, NumericInput } from '@blueprintjs/core';
import React, { useContext, useState, useEffect } from 'react';
import { UtilContext } from '../contextProviders/util.provider';
import ButtonWhisper from './btnWhisper.component';
import MODAL from './modal.component';
import { PDFDocument } from 'pdf-lib';
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';
import { AuthContext } from '../contextProviders/auth.provider';
import { FlexboxGrid, Message, toaster } from 'rsuite';
import { ALERT_WAIT } from '../utils/notifications.vars';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function VIEWER(props) {
    const { float, filename, path, api, apiID, icon, intent, text } = props;
    const utilities = useContext(UtilContext);
    const auth = useContext(AuthContext);
    const conn = auth.conn ? auth.conn.conn : '';
    const trn = utilities.getTranslation('viewer');
    const theme = utilities.theme;
    const lang = utilities.lang;
    const token = auth.token;

    const [load, setLoad] = useState(0);
    const [scale, setScale] = useState(1);
    const [numPages, setPages] = useState(1);
    const [pageNumber, setPage] = useState(1);
    const [file, setFile] = useState(null);
    const [fimage, setImage] = useState(null);
    const [modal, setModal] = useState(false);
    const [pagesComponent, setPagesC] = useState([]);

    useEffect(() => {
        if (load == 0 && modal && !api) {
            let docExt = getDocExt(filename);
            if (docExt === 'pdf') getPdf();
            if (docExt === 'img') getImage();
        } else if (load == 0 && modal && api && apiID) {
            api(apiID)
                .then(response => {
                    let data = response.data;
                    let type = { type: response.headers['content-type'] }
                    let docType = getDocType(response.headers['content-type']);

                    const blob = new Blob([data], type);
                    const urlBlob = window.URL.createObjectURL(blob);

                    if (docType == 'pdf') setFile(urlBlob)
                    if (docType == 'img') setImage(urlBlob)
                }).catch(e => { console.log(e); setFile(0) }).finally(() => setLoad(1));
        }
    }, [load, modal, scale]);

    function getDocExt(_filename) {
        if (!_filename) return false;
        let docExt = _filename.substring(_filename.lastIndexOf('.'), _filename.length);
        if (docExt === '.pdf') return 'pdf'
        if (docExt === '.jpg' || docExt === '.png' || docExt === '.jpeg') return 'img'
    }
    function getDocType(_type) {
        if (!_type) return false;
        if (_type === 'application/pdf') return 'pdf'
        if (_type === 'image/png' || _type === 'image/jpg' || _type === 'image/jpeg') return 'img'
    }


    let onDocumentLoadSuccess = ({ numPages }) => {
        setPages(numPages);
        setPagesComponent(numPages, scale);
        setPage(1);
    }

    let setPagesComponent = (_numPages, _scale) => {
        let pages = [];
        for (let i = 1; i <= _numPages; i++) {
            pages.push(<div id={"viewer_page_" + i}>
                <Page pageNumber={i} scale={_scale} className="border" />
            </div>)
        }
        setPagesC(pages)
    }

    let HEADER_MODAL = () => {
        return <>
            {trn.view} : <label className='fw-n'>{filename}</label>
            <h6>
                <FlexboxGrid justify="space-between" className='fw-n my-1'>
                    <FlexboxGrid.Item colspan={8}>

                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={8}>
                        <FormGroup inline={true} label={trn.scale} >
                            <div class="bp4-input-group">
                                <span class={"bp4-icon bp4-icon-plus"}></span>
                                <select onChange={(e) => { setScale(e.target.value); setPagesComponent(numPages, e.target.value) }} className={'bp4-input'} >
                                    <option value={1} selected>100%</option>
                                    <option value={1.25}>125%</option>
                                    <option value={1.5}>150%</option>
                                    <option value={2}>200%</option>
                                </select>
                                <span class={"bp4-icon bp4-icon-chevron-down"}></span>
                            </div>
                        </FormGroup>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={8}>
                        {file ?
                            <>
                                <FormGroup inline={true} label={trn.search_page} labelInfo={`(${trn.search_info}: ${numPages})`}>
                                    <NumericInput
                                        leftIcon={'document'}
                                        allowNumericCharactersOnly
                                        buttonPosition='none'
                                        id="page_traveler"
                                        rightElement={<ButtonWhisper whisper={trn.search_go} intent="secondary" icon={'arrow-right'}
                                            onClick={() => {
                                                let page_traveler = document.getElementById('page_traveler').value;
                                                if (document.getElementById("viewer_page_" + page_traveler)) document.getElementById("viewer_page_" + page_traveler).scrollIntoView();
                                            }} />}
                                    />
                                </FormGroup>
                            </>
                            : ''}
                    </FlexboxGrid.Item>
                </FlexboxGrid>

            </h6>
        </>
    }

    async function getPdf() {
        var filePath;
        var formUrl;
        var formPdfBytes;
        if (path) {
            filePath = path.substring(path.lastIndexOf(conn), path.length);
            formUrl = process.env.REACT_APP_API_URL + '/document/' + filePath + '/' + filename;
            formPdfBytes = await loadPdf(formUrl);
        }
        if (formPdfBytes) {
            var pdfDoc = await PDFDocument.load(formPdfBytes);
            const base64String = await pdfDoc.saveAsBase64({ dataUri: true })
            setFile(base64String);
            setLoad(1);
        } else {
            filePath = filename.substring(0, filename.lastIndexOf('.'));
            let urls = filePath.split('_');
            formUrl = process.env.REACT_APP_API_URL + '/document/' + conn + '/' + urls[0] + '/' + urls[1] + '/' + urls[2] + '/' + filename;
            formPdfBytes = await loadPdf(formUrl);
            if (formPdfBytes) {
                var pdfDoc = await PDFDocument.load(formPdfBytes);
                const base64String = await pdfDoc.saveAsBase64({ dataUri: true })
                setFile(base64String);
                setLoad(1);
            } else setFile(0)
        }

    }

    async function loadPdf(_url) {

        return await fetch(_url, { method: "GET", headers: { Authorization: `Bearer ${token}`, dbIndex: conn }, }).then(res => {
            if (res.status == 500) return false;
            else return res.arrayBuffer();
        });
    }

    async function getImage() {
        const filePath = path.substring(path.lastIndexOf(conn), path.length);
        var formUrl = process.env.REACT_APP_API_URL + '/document/' + filePath + '/' + filename;
        setImage(formUrl)
        setLoad(1);
    }

    async function downloadDocment() {
        ALERT_WAIT(lang);
        var filePath = path.substring(path.lastIndexOf(conn), path.length);
        var formUrl = process.env.REACT_APP_API_URL + '/document/' + filePath + '/' + filename;
        var formPdfBytes = await loadPdf(formUrl);
        if (formPdfBytes) window.open(formUrl);
        else {
            filePath = filename.substring(0, filename.lastIndexOf('.'));
            let urls = filePath.split('_');
            formUrl = process.env.REACT_APP_API_URL + '/document/' + conn + '/' + urls[0] + '/' + urls[1] + '/' + urls[2] + '/' + filename;
            formPdfBytes = await loadPdf(formUrl);
            window.open(formUrl);
        }
        toaster.remove()
    }

    return (
        <>
            <ButtonWhisper intent={intent || 'primary'} whisper={text || trn.view} icon={icon || (getDocExt(filename) === 'pdf' ? "document-open" : getDocExt(filename) === 'img' ? 'media' : 'search-template')} float={float} onClick={() => setModal(!modal)} />

            <MODAL
                open={modal}
                setOpen={setModal}
                actionBtn={file !== 0 ? <Button icon="cloud-download" intent="danger" onClick={() => downloadDocment()}>{trn.download}</Button> : false}
                title={HEADER_MODAL()}
                icon={<Icon icon={'document-open'} intent={'primary'} size="25" />}
                size="full"
            >
                <FlexboxGrid justify="center" >
                    {file ?
                        <FlexboxGrid.Item colspan={24}>
                            <div style={{ paddingLeft: `calc((100vw - ${795 * scale}px)/2)`, paddingRight: `calc((100vw - ${795 * scale}px)/2)` }}>
                                <Document file={file} onLoadSuccess={onDocumentLoadSuccess} >
                                    {pagesComponent.map(page => page)}
                                </Document>
                            </div>
                        </FlexboxGrid.Item>
                        : file === 0 ?
                            <Message showIcon type={'error'}
                                header={<label className='fw-b'>{trn.notfound_tite}</label>}>
                                <label>{trn.notfound_body}</label>
                            </Message>
                            : ''}


                    <FlexboxGrid.Item colspan={24}>
                        <img src={fimage} hidden={!fimage} id={'viewer_img'} alt="Image" height={100 * scale + '%'} width={100 * scale + '%'}></img>
                    </FlexboxGrid.Item>


                </FlexboxGrid>

            </MODAL>
        </>
    );
}