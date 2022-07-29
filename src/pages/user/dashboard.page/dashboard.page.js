import React, { useContext, useEffect, useState } from 'react';
import { Badge, Button, ButtonGroup, Col, Divider, FlexboxGrid, Grid, IconButton, Message, Panel, PanelGroup, Row } from 'rsuite';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider'
import AtuhService from '../../../services/apis/auth.service'
import { ALERT_ERROR } from '../../../resources/customs/utils/notifications.vars';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import InfoRoundIcon from '@rsuite/icons/InfoRound';
import InfoOutlineIcon from '@rsuite/icons/InfoOutline';
import { GET_JSON_FULL } from '../../../resources/customs/utils/lamdas.functions';
import moment from 'moment'
import 'moment/locale/es'
import NON_IDEAL_STATE from '../../../resources/customs/components/nonideal.component';

export default function Dashboard() {
    //  CONTEXT INITILIAZATION & CONTROL
    const auth = useContext(AuthContext);
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('submit');
    const lang = utilities.lang;
    const theme = utilities.theme;

    const user = auth.user ?? {};
    const nots = auth.nots ?? [];

    var [companies, setCompanies] = useState([]);
    var [load, setLoad] = useState(0);
    let connection = auth.conn ?? {};


    let makeConnection = (_conn) => {
        auth.setConn(_conn, () => { })
    }

    useEffect(() => {
        if (load == 0) loadCompanies();
    });

    // COMPONENT JSX

    // SM COMPONENT JSC
    let _COMPONENT_NOTS = () => {

        return <>
            {nots.length > 0 ? <>
                <FlexboxGrid justify="space-end">
                    <FlexboxGrid.Item colspan={24}><div className='text-right mx-5'><a onClick={(e) => { e.preventDefault(); markNotSemm(nots.map(not => not.id).join(',')) }}><label className={theme == 'dark' ? 'text-light' : 'text-dark'}>mark all as read</label></a></div></FlexboxGrid.Item>
                </FlexboxGrid>
                {nots.map(not => {
                    moment.locale(lang)
                    let data = GET_JSON_FULL(not.notifInfo)
                    let timeText = moment(not.date).fromNow()
                    let msg = <Message type="info" header={
                        <FlexboxGrid justify="space-between">
                            <FlexboxGrid.Item colspan={12}> <label className={theme == 'dark' ? 'text-light fw-b' : 'text-dark fw-b'}>{<InfoOutlineIcon style={{ fontSize: '20px' }} />} {not.title ?? 'new not!'}</label></FlexboxGrid.Item>
                            <FlexboxGrid.Item colspan={12}><div className='text-right'>
                                <label className={theme == 'dark' ? 'text-light' : 'text-dark'}>{timeText} | </label>
                                <a onClick={(e) => { e.preventDefault(); markNotSemm(not.id) }}><label className={theme == 'dark' ? 'text-light' : 'text-dark'}>{'Marcar como visto'}</label></a></div></FlexboxGrid.Item>
                        </FlexboxGrid>
                    } style={theme == 'dark' ? { backgroundColor: 'dodgerblue' } : {}}>

                        {data.link ?
                            <a target={'_blank'} href={data.link} style={{ textDecoration: 'none' }}><label className={theme == 'dark' ? 'text-light' : 'text-dark'} style={{ cursor: 'pointer' }}>{data.body}</label></a>
                            : <label className={theme == 'dark' ? 'text-light' : 'text-dark'}>{data.body}</label>}
                    </Message>
                    return <div className='my-1 border' >
                        {msg}
                    </div>
                })}
            </> :<NON_IDEAL_STATE type="nots" />}
        </>
    }


    // ******************** APIS ************************ // 
    function loadCompanies() {
        AtuhService.loadCompanies(user.id, auth.token)
            .then(response => {
                setLoad(1);
                setCompanies(response.data)
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang);
            });
    }

    function markNotSemm(id) {
        let formData = new FormData()
        formData.append('ids', id)
        AtuhService.markNots(formData)
            .then(response => {
                if (response.data == 'OK') auth.loadNots(user.email)
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div className="my-6 px-0">
            <Grid fluid>
                <Row style={{ width: '100%' }} >
                    <Col xs={24} sm={24} md={8} lg={6} xl={4} xxl={4}>
                        <Message type="info" header={<label className='text-light fw-b'>{<InfoRoundIcon />} GENERAR PRELIQUIDACIÓN</label>} style={{ backgroundColor: 'dodgerblue' }}>
                            <label className='text-light'>Generar una Preliquidacion en una Curaduria</label>
                        </Message>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={6} xl={4} xxl={4}>
                    </Col>
                </Row>

            </Grid>
            <Divider>{'NOTIFICACIONES'} btn_help</Divider>

            <Grid fluid>
                <Row style={{ width: '100%' }} >
                    {_COMPONENT_NOTS()}
                </Row>

            </Grid>
        </div>
    );
}