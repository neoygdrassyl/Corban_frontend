import React, { useContext, useEffect, useState } from 'react';
import { Badge, Button, ButtonGroup, Col, Divider, Grid, IconButton, Message, Panel, PanelGroup, Row } from 'rsuite';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider'
import AtuhService from '../../../services/apis/auth.service'
import { ALERT_ERROR } from '../../../resources/customs/utils/notifications.vars';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import InfoRoundIcon from '@rsuite/icons/InfoRound';

export default function Dashboard() {
    //  CONTEXT INITILIAZATION & CONTROL
    const auth = useContext(AuthContext);
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('submit');
    const lang = utilities.lang;

    const user = auth.user ?? {};
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

    return (
        <div className="my-6 px-0">
            <Grid fluid>
                <Row style={{ width: '100%' }} >
                    <Col xs={24} sm={24} md={8} lg={6} xl={4} xxl={4}>
                        <Message type="info" header={<label className='text-light fw-b'>{<InfoRoundIcon />} GENERAR PRELIQUIDACIÓN</label>} style={{backgroundColor: 'dodgerblue'}}>
                            <label className='text-light'>Generar una Preliquidacion en una Curaduria</label>
                        </Message>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={6} xl={4} xxl={4}>
                    </Col>
                </Row>

            </Grid>
        </div>
    );
}