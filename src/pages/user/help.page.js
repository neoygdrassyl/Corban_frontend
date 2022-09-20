import React, { useContext, useState } from 'react';
import { useNavigate, } from 'react-router';
import { Col, Divider, FlexboxGrid, Grid, Panel, Row, Stack } from 'rsuite';
import { AuthContext } from '../../resources/customs/contextProviders/auth.provider';
import { UtilContext } from '../../resources/customs/contextProviders/util.provider';

import packageInfo from '../../../package.json'
import AtuhService from '../../services/apis/auth.service'
import NAVIGATON from '../../resources/customs/components/navigation.component';
import MODAL from '../../resources/customs/components/modal.component';
import FORM from '../../resources/customs/components/form.component';
import { Button } from '@blueprintjs/core';
import InfoRoundIcon from '@rsuite/icons/InfoRound';
import { ALERT_ERROR, ALERT_SUCCESS, ALERT_WAIT } from '../../resources/customs/utils/notifications.vars';
import TUTORIAL from '../../resources/customs/components/tutorial.component';


export default function HELP() {
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('help');
    const btn = utilities.getTranslation('btns');
    const theme = utilities.theme;
    const lang = utilities.lang;
    const dateformat = utilities.dateformat;
    const moment = utilities.moment;

    let navigate = useNavigate();
    let auth = useContext(AuthContext);
    let user = auth.user;

    var [modal, setModal] = useState(false);

    const FORM_INPUTS = [
        {
            inputs: [

                {
                    label: trn.FORM[0].label, placeholder: trn.FORM[0].ph, req: true,
                    type: 'select', leftIcon: 'property', id: 'error_form_product', fname: 'product',
                    selectOptions: [
                        { value: trn.FORM[0].values[0], label: trn.FORM[0].options[0], },
                        { value: trn.FORM[0].values[1], label: trn.FORM[0].options[1], },
                    ]
                },
            ],
        },
        {
            inputs: [
                {
                    label: trn.FORM[1].label, placeholder: trn.FORM[1].ph, type: "textarea", length: 4000,
                    id: 'error_form_desc', req: true, dv: trn.FORM[1].ph, fname: 'desc',
                },
            ],
        },
    ]

    function sendBugReport(data) {
        let formData = data.formData;
        let reporter = user.id + ' @ ' + user.name;
        let browser = navigator.userAgent;
        let url = window.location.href;
        let product = document.getElementById('error_form_product').value;
        if (product == 'dovela') {
            formData.delete('product')
            formData.append('product', product + ' : ' + packageInfo.dovela_v)
        }

        formData.append('reporter', reporter)
        formData.append('browser', browser)
        formData.append('url', url)


        ALERT_WAIT(lang);
        AtuhService.reportBug(formData)
            .then(response => {
                if (response.data === 'OK') {
                    ALERT_SUCCESS(lang);
                    setModal(false);
                }
                else ALERT_ERROR(lang);
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang);
            });

    }

    return (<>

        <NAVIGATON nav={trn.nav} />

        <FlexboxGrid justify="center">
            <FlexboxGrid.Item className='bg-dark text-center' as={Col} xs={24} sm={22} md={18} lg={16} xl={14} xxl={12}>
                <Grid fluid>
                    <Row>
                        <Col xs={24}>
                            <h3>{trn.title}</h3>
                        </Col>
                    </Row>
                </Grid>
            </FlexboxGrid.Item>

            <FlexboxGrid.Item className='border py-1' as={Col} xs={24} sm={22} md={18} lg={16} xl={14} xxl={12}>
                <Grid fluid>

                    <Row className='py-1 fw-b mx-3'><label>DOVELA</label></Row>

                    <Row className='py-1 mx-5'>
                        <Col sm={6} xs={12} className="txt-r">Version: </Col>
                        <Col sm={6} xs={12} className="fw-b">v.{packageInfo.version}</Col>
                        <Col sm={6} xs={12} className="txt-r">Desarrolladores:</Col>
                        <Col sm={6} xs={12} className="fw-b">Nestor Triana</Col>
                    </Row>
                    <Row className='py-1 mx-5'>
                        <Col sm={6} xs={12} className="txt-r"></Col>
                        <Col sm={6} xs={12} className="fw-b"></Col>
                        <Col sm={6} xs={12} className="txt-r">Correo:</Col>
                        <Col sm={6} xs={12} className="fw-b">ing.natriana@gmail.com</Col>
                    </Row>
                    <Row className='py-1 mx-5'>
                        <Col sm={6} xs={12} className="txt-r"></Col>
                        <Col sm={6} xs={12} className="fw-b"></Col>
                        <Col sm={6} xs={12} className="txt-r">Numero telefonico:</Col>
                        <Col sm={6} xs={12} className="fw-b">(+57) 316 3431 119</Col>
                    </Row>

                    <Divider className='border' />

                    <Row className='py-1 fw-b mx-3'><label>REPORT A BUG</label></Row>

                    <Row className='py-1 mx-5'> <Button icon="cross" intent="danger" type="submit" text={trn.bug_btn} onClick={() => setModal(!modal)} /></Row>

                    <Divider className='border' />

                    <Row className='py-1 fw-b mx-3'><label>TUTORIALS</label></Row>

                    <Row className='py-1 mx-5'><TUTORIAL text={btn.tut_1} tutorial="csv_e" /></Row>
                    <Row className='py-1 mx-5'><TUTORIAL text={btn.tut_2} tutorial="csv_lo" /></Row>
                </Grid>
            </FlexboxGrid.Item>
        </FlexboxGrid>

        <MODAL
            open={modal}
            setOpen={setModal}
            title={trn.bug_title}
            icon={<InfoRoundIcon />}
            size="md"
        >
            <p>{trn.bug_body}</p>
            <FORM form={FORM_INPUTS} id="error_form" onSubmit={(e) => sendBugReport(e)}
                submitBtn={<Button icon="send-message" intent="success" type="submit" text={btn.send} />} />
        </MODAL>
    </>);
}