import React, { useContext, useState } from 'react';
import { useNavigate, } from 'react-router';
import { Col, Divider, FlexboxGrid, Grid, Panel, Row, Stack } from 'rsuite';

import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import NAVIGATON from '../../../resources/customs/components/navigation.component';
import SERVICE_USERS from '../../../services/apis/user.services'

export default function USER() {
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

    useEffect(() => {
        SERVICE_USERS.getAll_profesionals().then(data => console.log(data))
    });




    return (<>

        <NAVIGATON nav={[]} />

        <FlexboxGrid justify="center">
            <FlexboxGrid.Item className='bg-dark text-center' as={Col} xs={24} sm={22} md={18} lg={16} xl={14} xxl={12}>
                <Grid fluid>
                    <Row>
                        <Col xs={24}>
                            <h3>USER CONFIGURATION</h3>
                        </Col>
                    </Row>
                </Grid>
            </FlexboxGrid.Item>

            <FlexboxGrid.Item className='border py-1' as={Col} xs={24} sm={22} md={18} lg={16} xl={14} xxl={12}>
                <Grid fluid>

                    <Row className='py-1 fw-b mx-3'><label>gen CONFIG</label></Row>

                    <Row className='py-1 mx-5'>
                        <Col sm={6} xs={12} className="txt-r">cONTENT </Col>
                    </Row>

                    <Divider className='border' />

                    <Row className='py-1 fw-b mx-3'><label> profesional CONFIG</label></Row>

                    <Row className='py-1 mx-5'>
                        <Col sm={6} xs={12} className="txt-r">cONTENT </Col>
                    </Row>

                    <Divider className='border' />

                    <Row className='py-1 fw-b mx-3'><label>  enterprise CONFIG</label></Row>

                    <Row className='py-1 mx-5'>
                        <Col sm={6} xs={12} className="txt-r">cONTENT </Col>
                    </Row>

                    <Divider className='border' />

                    <Row className='py-1 fw-b mx-3'><label>  projects general info</label></Row>

                    <Row className='py-1 mx-5'>
                        <Col sm={6} xs={12} className="txt-r">cONTENT </Col>
                    </Row>

                    <Divider className='border' />

                    <Row className='py-1 fw-b mx-3'><label>       teams info (roles...)</label></Row>

                    <Row className='py-1 mx-5'>
                        <Col sm={6} xs={12} className="txt-r">cONTENT </Col>
                    </Row>

                    <Divider className='border' />

                </Grid>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    </>);
}