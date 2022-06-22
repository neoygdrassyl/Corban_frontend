import React, { useContext, useEffect } from 'react';
import { Badge, Button, ButtonGroup, Col, Divider, Grid, IconButton, Panel, PanelGroup, Row } from 'rsuite';
import { BiBuildingHouse } from 'react-icons/bi'
import { VscLaw } from 'react-icons/vsc'
import { IoDocumentAttachOutline } from 'react-icons/io5'
import { BsSignpost2 } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../resources/customs/contextProviders/auth.provider'

export default function Dashboard() {
    //  CONTEXT INITILIAZATION & CONTROL
    let auth = useContext(AuthContext);
    let user = auth.user;
    let connections = user ? user.connections : [];
    let companies = user ? user.companies : [];
    let connection = auth.conn ? auth.conn : {};
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
        if (connections.length == 1 && Object.keys(connection).length === 0) { // IF THERE ARE ONLY 1 POSSIBLE DB TO CONNECT, IT WILL DO IT AUTOMATICALLY
            let conn = connections[0];
            let companiyInfo = companies[conn].companiesInfo;
            makeConnection({ conn, companiyInfo });
        }
    });

    // COMPONENT JSX
    let _COMPONENT_SELECT_CONN = () => {
        return <Grid fluid>
            <Row className="text-center">
                <Col xs={24} sm={24} md={16} lg={12} lgOffset={6} mdOffset={4} smOffset={2} xsOffset={0}>
                    <PanelGroup accordion defaultActiveKey={1} className="border">
                        {connections.map((value, index) => {
                            let companiyInfo = companies[value].companiesInfo;
                            return <>

                                <Col xs={20} xsOffset={2}>
                                    <Row className='my-1'>
                                        <Col xs={12} className="text-left">
                                            <label className="fw-b">{companiyInfo.publicName}</label>
                                        </Col>
                                        <Col xs={6}>
                                            {connection.conn == value ? <Badge content="CONTECTADO" color="blue" /> : ""}
                                        </Col>
                                        <Col xs={6}>
                                            <CustomButtonGroup conn={value} companiyInfo={companiyInfo} />
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
    const CustomButtonGroup = ({ conn, companiyInfo }) => (
        <ButtonGroup justified>
            {connection.conn == conn
                ? <Button appearance={'ghost'} color="red" onClick={() => makeConnection(null)}>DESCONECTAR</Button>
                : <Button appearance={'primary'} onClick={() => makeConnection({ conn, companiyInfo })}>CONECTAR</Button>}
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

    return (
        <div className="my-6 px-0">
            <Row className="text-center" style={{width:'100%'}}>
                <h3>CORBAN SOFTWARE</h3>
            </Row>
            {connections.length > 1
                ? <>{_COMPONENT_SELECT_CONN()}</>
                : ""}

            <Divider>MODULOS</Divider>
            {connection.conn
                ? <>
                    <Row className="text-center" style={{width:'100%'}} >
                        <h3>{connection.companiyInfo.publicName}</h3>
                    </Row>
                    <Row style={{width:'100%'}}>
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
                                        <label >CONTACTO: </label>
                                    </Col>
                                    <Col xs={18} className="text-left">
                                        <label className="fw-b">{connection.companiyInfo.number1 + ' ' + connection.companiyInfo.number2 + ' ' + connection.companiyInfo.email1}</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} className="text-right">
                                        <label >LOCALIZACION: </label>
                                    </Col>
                                    <Col xs={18} className="text-left">
                                        <label className="fw-b">{connection.companiyInfo.address + ' ' + connection.companiyInfo.page}</label>
                                    </Col>
                                </Row>
                            </Panel>
                        </Col>
                    </Row>
                    <Row className="my-6" style={{width:'100%'}}>
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