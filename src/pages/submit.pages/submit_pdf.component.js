import React, { useContext } from 'react';
import { UtilContext } from '../../resources/customs/contextProviders/util.provider';

import SERVICE_SUBMIT from '../../services/apis/submit.service';
import { Col, Divider, Grid, Row, toaster } from 'rsuite';
import { Button as ButtonBP } from '@blueprintjs/core';

import { ALERT_ERROR, ALERT_SUCCESS, ALERT_WAIT, CONFIRM_DELETE } from '../../resources/customs/utils/notifications.vars';
import BTN_HELP from '../../resources/customs/components/btnHelp.component';
import BTN_PDF from '../../resources/customs/components/btnPDF.component';
import FORM from '../../resources/customs/components/form.component';
import moment from 'moment';


export default function SUBMIT_PDF(props) {
    const { currentItem } = props;
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('submit');
    const btrn = utilities.getTranslation('btns');
    const lang = utilities.lang;
    const files = utilities.files;

    // ************************** HELP FUCTIONS **************************** //
    let _GET_DOC = () => {
        var _CHILD = currentItem.sub_doc;
        var _VARS = {
            id: _CHILD ? _CHILD.id : 0,
            id_public: _CHILD ? _CHILD.id_public : null,
            pages: _CHILD ? _CHILD.pages : null,
            filename: _CHILD ? _CHILD.filename : null,
            path: _CHILD ? _CHILD.path : null,
        }
        return _VARS
    }
    // ************************** JSX ELEMENTS **************************** //
    const FORM_COMPONENT = () => {
        const docData = _GET_DOC();
        const fileList = docData.filename || docData.path ? [{ name: docData.filename, fileKey: 1, path: docData.path }] : false;
        const FORM_INPUTS = [
            {
                inputs: [{
                    id: 'submit_pdf_anex_3', label: trn.FORM_PDF[0], type: 'uploader', req: true, fileList: fileList,
                    onClick: (cb) => CONFIRM_DELETE(lang, docData.filename, () => { removeDocument(docData.id, cb) })
                }]
            },
            {
                inputs: [
                    { id: 'submit_pdf_anex_1', label: trn.FORM_PDF[1], placeholder: trn.FORM_PDF[1], leftIcon: 'selection', req: true, dv: docData.id_public ?? currentItem.id_public ?? '' },
                    { id: 'submit_pdf_anex_2', type: 'number', label: trn.FORM_PDF[2], placeholder: trn.FORM_PDF[3], leftIcon: 'document', req: true, dv: docData.pages ?? '' }
                ]
            },
        ]

        return <FORM form={FORM_INPUTS} id="submit_form_anex" onSubmit={(e) => { e.preventDefault(); addDocument() }} upload
            submitBtn={<ButtonBP type="submit" className='mx-1' icon="floppy-disk" intent="success" text={btrn.save}/>}  btnAlignment='txt-r' 
        />
    }
    const BTN_COMPONENT = () => {
        return <>
            <p><label>{trn.generate_pdf}</label></p>
            <BTN_PDF onClick={() => pdf_gen()} />
        </>
    }
    // *************************** DATA TABLE  **************************** //

    // ******************************** APIS ****************************** //
    let pdf_gen = () => {
        var formData = new FormData();

        formData.set('id', currentItem.id);

        ALERT_WAIT(lang)
        SERVICE_SUBMIT.gen_doc_submit(formData)
            .then(response => {
                if (response.data === 'OK') {
                    toaster.remove()
                    window.open(process.env.REACT_APP_API_URL + "/pdf/submit/" + "Control Ingreso Documentos " + currentItem.id_public + ".pdf");
                } else ALERT_ERROR(lang)
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang)
            });

    }

    let addDocument = () => {
        var formData = new FormData();

        if (files.length) {
            let _homepath = 'submit'
            let _creationYear = moment(currentItem.createdAt).format('YY');
            let _folder = currentItem.id_public;
            let _name = files[0].name.replace(/\_/g, "");
            formData.append('file', files[0].blobFile, `${_homepath}_${_creationYear}_${_folder}_${_name}`)
        }


        let id_public = document.getElementById("submit_pdf_anex_1").value;
        formData.set('id_public', id_public);
        let pages = document.getElementById("submit_pdf_anex_2").value;
        formData.set('pages', pages);

        manageDocument(formData);
    }

    let manageDocument = (formData) => {
        ALERT_WAIT(lang)
        if (_GET_DOC().id) {
            SERVICE_SUBMIT.update_anex(_GET_DOC().id, formData)
                .then(response => {
                    if (response.data === 'OK') {
                        ALERT_SUCCESS(lang);
                        utilities.setFiles(new Array());
                        props.reload();
                    }
                    else ALERT_ERROR(lang);
                })
                .catch(e => {
                    console.log(e);
                    ALERT_ERROR(lang);
                });
        } else {
            formData.set('submitId', currentItem.id);
            SERVICE_SUBMIT.create_anex(formData)
                .then(response => {
                    if (response.data === 'OK') {
                        ALERT_SUCCESS(lang);
                        utilities.setFiles(new Array());
                        props.reload();
                    } else ALERT_ERROR(lang);
                })
                .catch(e => {
                    console.log(e);
                    ALERT_ERROR(lang);
                });
        }
    }

    let removeDocument = (id, cb) => {
        toaster.remove();
        ALERT_WAIT(lang)
        SERVICE_SUBMIT.delete_anex(id)
            .then(response => {
                if (response.data === 'OK') {
                    ALERT_SUCCESS(lang);
                    utilities.setFiles(new Array());
                    cb(new Array());
                    props.reload();
                }
                else ALERT_ERROR(lang);
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang);
            });
    }

    return (
        <>
            <Divider>{trn.title_pdf}  <BTN_HELP
                title={trn.INFO_CERT_TITLE}
                text={trn.INFO_CERT_BODY}
                page={trn.INFO_CERT_HELP} focus="doc_cert" /></Divider>
            <Grid className='my-1' fluid>
                <Row style={{ width: '100%' }}>
                    <Col xl={4} lg={6} md={8} sm={12} xs={24}>
                        {BTN_COMPONENT()}
                    </Col>
                    <Col xl={20} lg={18} md={16} sm={12} xs={24}>
                        {FORM_COMPONENT()}
                    </Col>
                </Row>
            </Grid>
        </>
    );
}