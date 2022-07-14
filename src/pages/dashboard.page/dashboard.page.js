import React, { useContext, useEffect, useState } from 'react';
import { Badge, Button, ButtonGroup, Col, Divider, Grid, IconButton, Message, Panel, PanelGroup, Row } from 'rsuite';
import { BiBuildingHouse } from 'react-icons/bi'
import { VscLaw } from 'react-icons/vsc'
import { IoDocumentAttachOutline } from 'react-icons/io5'
import { BiLinkExternal } from 'react-icons/bi'
import { BsSignpost2 } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../resources/customs/contextProviders/auth.provider'
import AtuhService from '../../services/apis/auth.service'
import { ALERT_ERROR } from '../../resources/customs/utils/notifications.vars';
import { UtilContext } from '../../resources/customs/contextProviders/util.provider';
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

    const DASHBOARD_INFO = [
        {
            header: "VENTANILLA ÚNICA",
            icon: <IoDocumentAttachOutline style={{ fontSize: '5em' }} />,
            text: "Gestiona el ingreso de documentos a la ventanilla única y comparte automaticamente la informacion pertinente con los otros modulos. (Licencias y PQRS)",
            color: "violet",
            to: "/submit"
        },
        {
            header: "LICENCIAS Y SOLICITUDES",
            icon: <BiBuildingHouse style={{ fontSize: '5em' }} />,
            text: "Administra las licencias y otras actuaciones de la Organizacion, permite el seguimiento de desistimientos y el analisis mediante graficas.",
            color: "blue",
            to: "/fun"
        },
        {
            header: "PQRS",
            icon: <VscLaw style={{ fontSize: '5em' }} />,
            text: "Administra y gestiona los procesos de Peticioes, Quejas, Reclamos y Soliciudes de la organizacion.",
            color: "red",
            to: "/fun"
        },
        {
            header: "ARCHIVO",
            icon: <BsSignpost2 style={{ fontSize: '5em' }} />,
            text: "Gestiona el proceso de nomenclaturas de la organizacion.",
            color: "green",
            to: "/fun"
        },
        {
            header: "DICCIONARIO",
            icon: <BsSignpost2 style={{ fontSize: '5em' }} />,
            text: "Gestiona el proceso de nomenclaturas de la organizacion.",
            color: "green",
            to: "/fun"
        },
        {
            header: "PUBLICACIONES",
            icon: <BsSignpost2 style={{ fontSize: '5em' }} />,
            text: "Gestiona el proceso de nomenclaturas de la organizacion.",
            color: "green",
            to: "/fun"
        },
    ]

    useEffect(() => {
        if (load == 0) loadCompanies();
    });

    // COMPONENT JSX
    let _COMPONENT_SELECT_CONN = () => {
        return <Grid fluid>
            <Row className="text-center">
                <Col xs={24} sm={24} md={16} lg={12} lgOffset={6} mdOffset={4} smOffset={2} xsOffset={0}>
                    <PanelGroup accordion defaultActiveKey={1} className="border">
                        {companies.map((value, index) => {
                            return <>
                                <Col xs={20} xsOffset={2}>
                                    <Row className='my-1'>
                                        <Col xs={18} className="text-left">
                                            <label className="fw-b">{value.name}</label>
                                        </Col>
                                        <Col xs={6}>
                                            <CustomButtonGroup conn={value} />
                                        </Col>
                                    </Row>
                                </Col>
                            </>
                        }
                        )}
                    </PanelGroup>
                </Col>
            </Row>
            <Row className="text-center">
                {!connection.conn ? <h6 className="text-danger my-4">SELECCIONE UNA ORGANIZACION PARA CONTINUAR</h6> : ""}
            </Row>
        </Grid>
    }
    // SM COMPONENT JSC
    const CustomButtonGroup = ({ conn }) => (
        <ButtonGroup justified>
            {connection.conn == conn.bdname
                ? <Button className='fw-b' appearance={'ghost'} color="green" onClick={() => auth.clearConn(() => { })}>CONECTADO</Button>
                : <Button appearance={'primary'} onClick={() => makeConnection(conn, () => { })} >CONECTAR</Button>}
        </ButtonGroup>
    );
    const Card = props => (
        <Panel {...props} className="border" header={<h5>{props.header}</h5>}>
            <Row className="text-center">
                <Link to={props.to}><IconButton icon={props.icon} circle size="lg" color={props.color} appearance='primary' /></Link>
            </Row>
            <Row className="text-justify">
                {props.text}
            </Row>
            <Row className="text-right">
                <Link to={props.to}><h6 className="text-secondary">Continuar a modulo</h6></Link>
            </Row>
        </Panel>
    );


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


            <Row className="text-center" style={{ width: '100%' }}>
                <h3>CORBAN SOFTWARE</h3>
            </Row>

            <>{_COMPONENT_SELECT_CONN()}</>


            <Divider>MODULOS</Divider>
            {connection.conn
                ? <>
                    <Row className="text-center" style={{ width: '100%' }} >
                        <h3>{connection.companiyInfo.publicName}</h3>
                    </Row>
                    <Row style={{ width: '100%' }}>
                        <Col xs={24} sm={24} md={16} lg={12} lgOffset={6} mdOffset={4} smOffset={2} xsOffset={0}>
                            <Panel className="border">
                                <Row>
                                    <Col xs={6} className="text-right">
                                        <label >DIRECTOR: </label>
                                    </Col>
                                    <Col xs={18} className="text-left">
                                        <label className="fw-b">{connection.companiyInfo.dir_title + ' ' + connection.companiyInfo.director}</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} className="text-right">
                                        <label >UBICACION: </label>
                                    </Col>
                                    <Col xs={18} className="text-left">
                                        <label className="fw-b">{connection.companiyInfo.state + ' - ' + connection.companiyInfo.city}</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} className="text-right">
                                        <label >TELÉFONOS: </label>
                                    </Col>
                                    <Col xs={18} className="text-left">
                                        <label className="fw-b">{connection.companiyInfo.number1 + ' /  ' + connection.companiyInfo.number2}</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} className="text-right">
                                        <label >EMAIL: </label>
                                    </Col>
                                    <Col xs={18} className="text-left">
                                        <label className="fw-b">{connection.companiyInfo.email1}</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} className="text-right">
                                        <label >LOCALIZACION: </label>
                                    </Col>
                                    <Col xs={18} className="text-left">
                                        <label className="fw-b">{connection.companiyInfo.address}</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} className="text-right">
                                        <label >PAGINA WEB: </label>
                                    </Col>
                                    <Col xs={18} className="text-left">
                                        <label className="fw-b"><a href={connection.companiyInfo.page} target="_blank"><BiLinkExternal style={{ paddingTop: '1px' }} />{connection.companiyInfo.page}</a></label>
                                    </Col>
                                </Row>
                            </Panel>
                        </Col>
                    </Row>
                    <Row className="my-6" style={{ width: '100%' }}>
                        {DASHBOARD_INFO.map(it => <Col lg={4} md={6} sm={12} xs={24}>
                            <Card
                                {...it}
                            />
                        </Col>)}
                    </Row>
                </>
                : ""}
        </div>
    );
}