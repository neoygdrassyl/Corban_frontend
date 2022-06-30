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
    const { float, filename, path } = props;
    const utilities = useContext(UtilContext);
    const auth = useContext(AuthContext);
    const conn = auth.conn ? auth.conn.conn : '';
    const trn = utilities.getTranslation('formComponent');
    const theme = utilities.theme;
    const lang = utilities.lang;

    const [load, setLoad] = useState(0);
    const [scale, setScale] = useState(1);
    const [numPages, setPages] = useState(1);
    const [pageNumber, setPage] = useState(1);
    const [file, setFile] = useState(null);
    const [fimage, setImage] = useState(null);
    const [modal, setModal] = useState(false);
    const [pagesComponent, setPagesC] = useState([]);

    useEffect(() => {
        if (load == 0 && modal) {
            let docExt = getDocExt(filename);
            if (docExt === 'pdf') getPdf();
            if (docExt === 'img') getImage();
        }
    }, [load, modal, scale]);

    function getDocExt(_filename) {
        if(!_filename) return false;
        let docExt = _filename.substring(_filename.lastIndexOf('.'), _filename.length);
        if (docExt === '.pdf') return 'pdf'
        if (docExt === '.jpg' || docExt === '.png' || docExt === '.jpeg') return 'img'
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
            VER DOCUMENTO : <label className='fw-n'>{filename}</label>
            <h6>
                <FlexboxGrid justify="space-between" className='fw-n my-1'>
                    <FlexboxGrid.Item colspan={8}>

                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={8}>
                        <FormGroup inline={true} label={"Escala documento"} >
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
                                <FormGroup inline={true} label={"Buscar pagina"} labelInfo={'(Paginas totales: ' + numPages + ')'}>
                                    <NumericInput
                                        leftIcon={'document'}
                                        allowNumericCharactersOnly
                                        buttonPosition='none'
                                        id="page_traveler"
                                        rightElement={<ButtonWhisper whisper={'IR A PAGINA'} intent="secondary" icon={'arrow-right'}
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
        if(path){
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
        return await fetch(_url).then(res => {
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
        if(formPdfBytes) window.open(formUrl);
        else{
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
            <ButtonWhisper whisper={'VIEW DOCUMENT'} icon={getDocExt(filename) === 'pdf' ? "document-open" : getDocExt(filename) === 'img' ? 'media' : 'search-template'} float={float} onClick={() => setModal(!modal)} />

            <MODAL
                open={modal}
                setOpen={setModal}
                actionBtn={<Button icon="cloud-download" intent="danger" onClick={() => downloadDocment()}>DESCARGAR</Button>}
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
                                header={<label className='fw-b'>{'DOCUMENT NOT FOUND'}</label>}>
                                <label>{'The document solicited cannot be found, check the detais of the entry or contact with the administrator.'}</label>
                            </Message>
                            : ''}

                    {fimage ?
                        <FlexboxGrid.Item colspan={24}>
                            <img src={fimage} alt="Image" height={100 * scale + '%'} width={100 * scale + '%'}></img>
                        </FlexboxGrid.Item>
                        : ''}

                </FlexboxGrid>

            </MODAL>
        </>
    );
}