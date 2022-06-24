import React, { useContext, useEffect, useState } from 'react';
import { UtilContext } from '../../resources/customs/contextProviders/util.provider';
import { AuthContext } from '../../resources/customs/contextProviders/auth.provider';

import SERVICE_SUBMIT from '../../services/apis/submit.service';
import { Button, Col, Divider, Grid, Panel, PanelGroup, Row, toaster, Uploader } from 'rsuite';
import { Button as ButtonBP, FormGroup, Icon, InputGroup, NumericInput, Switch } from '@blueprintjs/core';

import { ALERT_EMPTY_LIST, ALERT_ERROR, ALERT_SUCCESS, ALERT_WAIT, CONFIRM_DELETE } from '../../resources/customs/utils/notifications.vars';
import DOC_LIST from '../../resources/jsons/fun6DocsList.json'
import BTN_LIST_DOCS from '../../resources/customs/components/btnListDocs.component';
import ButtonWhisper from '../../resources/customs/components/btnWhisper.component';
import BTN_HELP from '../../resources/customs/components/btnHelp.component';
import { BsFilePdf } from 'react-icons/bs';
import BTN_PDF from '../../resources/customs/components/btnPDF.component';
import FORM from '../../resources/customs/components/form.component';


export default function SUBMIT_PDF(props) {
    const { currentItem } = props;
    const auth = useContext(AuthContext);
    const user = auth.user ?? {};

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('submit');
    const lang = utilities.lang;

    var [load, setLoad] = useState(0);
    useEffect(() => {

    }, [load]);

    // ************************** HELP FUCTIONS **************************** //

    // ************************** JSX ELEMENTS **************************** //
    const FORM_COMPONENT = () => {
        const FORM_INPUTS = [
            { inputs: [{ label: "Subir archivo digitalizado", type: 'uploader', req: true, }] },
            {
                inputs: [{ label: "Codigo Radicación", placeholder: "Consecutivo de radicación", leftIcon: 'selection', req: true, },
                { type: 'number', label: "Número de folios", placeholder: "Número de folios del documento", leftIcon: 'document', req: true, }]
            },
        ]

        return <FORM form={FORM_INPUTS} id="submit_form_anex" onSubmit={(e) => { e.preventDefault(); }} upload
            submitBtn={<ButtonBP type="submit" className='mx-1' icon="floppy-disk" intent="primary" text={'GUARDAR'} style={{ float: 'right' }} />} />
    }
    const BTN_COMPONENT = () => {
        return <>
            <p><label>Generar Certificación</label></p>
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

    return (
        <>
            <Divider>{'GENERAR CERTIFIACION'}  <BTN_HELP
                title={trn.DOCUMENT_LIST_POP[0]}
                text={trn.DOCUMENT_LIST_POP[1]}
                page={trn.DOCUMENT_LIST_INFO} focus="doc_list" /></Divider>
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