import React, { useContext, useEffect, useState } from 'react';
import { Badge, Button, ButtonGroup, Col, Divider, Grid, IconButton, Loader, Message, Panel, PanelGroup, Row } from 'rsuite';

// ICONS
import { BiBuildingHouse } from 'react-icons/bi'
import { BsBookmarkCheck } from 'react-icons/bs'
import { IoDocumentAttachOutline } from 'react-icons/io5'
import { BiLinkExternal } from 'react-icons/bi'
import { RiBook2Line } from 'react-icons/ri'
import { BiCalculator } from 'react-icons/bi'
import PeoplesIcon from '@rsuite/icons/Peoples';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import InfoRoundIcon from '@rsuite/icons/InfoRound';
import SearchPeopleIcon from '@rsuite/icons/SearchPeople';
import ToolsIcon from '@rsuite/icons/Tools';
import MessageIcon from '@rsuite/icons/Message';

//

import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider'
import AtuhService from '../../../services/apis/auth.service'
import { ALERT_ERROR, ALERT_ERROR_NOACTIVE, ALERT_ERROR_NOACTIVETEAM, ALERT_NO_PERMIT, ALERT_SUCCESS, ALERT_WAIT, ALERT_WARNING_ONTEAM, CONFIRM_INVITATION, CONFIRM_USER } from '../../../resources/customs/utils/notifications.vars';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import { Alert } from '@blueprintjs/core';
import { FIND_PERMIT } from '../../../resources/customs/utils/lamdas.functions';
import PATCH_NOTES from '../../../resources/customs/components/patchnotes.component';


export default function DashboardTeam() {
    //  CONTEXT INITILIAZATION & CONTROL
    let params = useParams();
    const nagivate = useNavigate();
    const auth = useContext(AuthContext);
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('submit');
    const lang = utilities.lang;
    const theme = utilities.theme;
    const team = params.team;

    const user = auth.user ?? {};
    const conn = auth.conn ?? {};
    var [load, setLoad] = useState(0);
    var [loading, setLoading] = useState(false);
    var [openInvite, setInvite] = useState(false);
    let connection = auth.conn ?? {};

    const isSuperAdmin = connection.roles ? connection.roles.some(role => role.priority >= 10) : false;
    const permits = conn.roles ?? [];
    const canInviteWorker = FIND_PERMIT(permits, 'worker', 1);
    const canVieweWorker = FIND_PERMIT(permits, 'worker', 2);
    const canViewRoles = FIND_PERMIT(permits, 'roles', 1);

    let makeConnection = (_conn) => {
        if (_conn) auth.setConn(_conn, () => setLoad(1))
        else auth.clearConn(() => { });
    }

    // ADMIN : BILLING, DOCUMENTATIO API, TEMPLATES (ARC, RES, TAXES)
    // MODULES:  SUBMIT - FUN RAD - FUN MANAGE - PH - PUBLISH - ARHIVE
    // MODULES OTHER: NOMENCLATURE - URBAN NORM - PQRS
    // TOOLS: DICTIONARY - CALC - DICTIONARY - CERTIFICATIONS
    const DASHBOARD_INFO = [
        {
            header: "VENTANILLA ÚNICA",
            icon: <IoDocumentAttachOutline style={{ fontSize: '5em' }} />,
            text: "Gestiona el ingreso de documentos a la ventanilla única y comparte automaticamente la informacion pertinente con los otros modulos. (Licencias y PQRS)",
            color: "violet",
            to: "/submit"
        },
    ]

    const TOOL_INFO = [
        {
            header: "CALCULADORA",
            icon: <BiCalculator style={{ fontSize: '5em' }} />,
            text: "Calculadora de expensas fijas y varibles, tablas de precios y gestor de costos de impuestos.",
            color: "blue",
            to: "/submit"
        },
        {
            header: "DICCIOARIO",
            icon: <RiBook2Line style={{ fontSize: '5em' }} />,
            text: "Conglomerado de todos los concecutivos de control, de los profesionales y actuadores de las licencias",
            color: "green",
            to: "/submit"
        },
        {
            header: "CERTIFICACION",
            icon: <BsBookmarkCheck style={{ fontSize: '5em' }} />,
            text: "Genera un documento especial de certificacion profesional y de vecinoss.",
            color: "red",
            to: "/submit"
        },
    ]

    useEffect(() => {
        if (load == 0) loadCompanies();
        if (params) { setLoad(0); loadCompanies() };
    }, [params]);

    // ******************** ELEMENT JSX ************************ // 
    const Card = props => (
        <Panel {...props} className="border" header={<h5>{props.header}</h5>}>
            <Row className="text-center">
                <Link to={props.to}><IconButton icon={props.icon} circle size="lg" color={props.color} appearance='primary' /></Link>
            </Row>
            <Row className="text-justify m-1">
                {props.text}
            </Row>
            <Row className="text-right">
                <Link to={props.to}><h6 className="text-secondary">Continuar...</h6></Link>
            </Row>
        </Panel>
    );
    // ******************** COMPONENT JSX ************************ // 
    let _COMPONENT_INFOBOX = () => {
        return <>
            <Row style={{ width: '100%' }}>

                <Col  xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
                    <Panel className="border">
                        <Row className="text-center" style={{ width: '100%' }} >
                            <h5>{connection.name}</h5>
                        </Row>
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
                        <br/>
                        <Row className="text-center" style={{ width: '100%' }} >
                            <h5>INFORMCION DE ROLES</h5>
                        </Row>
                        {connection.active == 0 && !isSuperAdmin?
                            <Row>
                                <Col xs={24} className="text-justify">
                                    <label><label className="fw-b text-danger">TRABAJADOR INHABILIDATO: </label>Este trabajador ha sido deastivado por el administrador y no puede realizar ninguna accion, comuniquese con el director del equipo para mos información.</label>
                                </Col>
                            </Row>
                            : ''}
                        {connection.roles.map(role => <>
                            <Row>
                                <Col xs={6} className="text-right">
                                    <label >ROL: </label>
                                </Col>
                                <Col xs={18} className="text-left">
                                    <label><label className="fw-b">{role.name}:</label> {role.desc}</label>
                                </Col>
                            </Row>
                        </>
                        )}
                        {connection.roles.length == 0 ? <Row>
                            <Col xs={24} className="text-center">
                                <label className='fw-b text-danger'>NO HAY NINGÚN ROL ASIGNADO A ESTE USUARIO</label>
                            </Col>
                            <Col xs={24} className="text-center">
                                <label className=''>COMUNÍQUESE CON EL LÍDER DEL EQUIPO PARA RECIBIR UN NUEVO ROL. </label>
                            </Col>
                        </Row> : ''}

                    </Panel>
                </Col>

                <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16}>
                    <Panel className="border">
                        <Row className="text-center" style={{ width: '100%' }} >
                            <h5>ULTIMAS NOTAS DE PARCHE</h5>
                            <PATCH_NOTES type='dovela' />
                        </Row>
                    </Panel>
                </Col>
            </Row>
        </>
    }
    let _COMPONENT_MODULE_SELECTOR = () => {
        return <>
            <Divider>MODULOS</Divider>
            <Row className="my-6" style={{ width: '100%' }}>
                {DASHBOARD_INFO.map(it => <Col lg={4} md={6} sm={12} xs={24}>
                    <Card
                        {...it}
                    />
                </Col>)}
            </Row>
        </>
    }
    let _COMPONENT_TOOLS_SELECTOR = () => {
        return <>
            <Divider>HERRAMIENTAS</Divider>
            <Row className="my-6" style={{ width: '100%' }}>
                {TOOL_INFO.map(it => <Col lg={4} md={6} sm={12} xs={24}>
                    <Card
                        {...it}
                    />
                </Col>)}
            </Row>
        </>
    }
    let _COMPONENT_MANAGE_COMPANY = () => {
        return <>
            {CONFIRM_INVITATION(lang, theme, openInvite, setInvite, (value) => setInvitation(value), loading)}
            <div className="my-3">
                <Divider>ADMINISTRAR</Divider>
                <Grid fluid>
                    <Row style={{ width: '100%' }} >
                        {canInviteWorker ?
                            <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
                                <Message onClick={() => setInvite(!openInvite)} className="pointer my-1"
                                    header={<label className='text-light fw-b pointer'>{<SearchPeopleIcon style={{ fontSize: '24px' }} />} INVITAR TRABAJADORES</label>} style={{ backgroundColor: 'dodgerblue' }}>
                                    <label className='text-light pointer'>Invita otros usuarios para ser parte de este equipo de trabajo</label>
                                </Message>
                            </Col>
                            : ''}
                        {canViewRoles ?
                            <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
                                <Message className="pointer my-1" onClick={() => nagivate('/roles')}
                                    header={<label className='text-dark fw-b'>{<UserInfoIcon style={{ fontSize: '24px' }} />} CONFIGURACION ROLES</label>} style={{ backgroundColor: 'gold' }}>
                                    <label className='text-dark'>Determina funciones especificas a cada rol y permite asociar un role a cada trabajador</label>
                                </Message>
                            </Col>
                            : ''}
                        {canVieweWorker ?
                            <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
                                <Message className="pointer my-1" onClick={() => nagivate('/workers')}
                                    header={<label className='text-light fw-b'>{<PeoplesIcon style={{ fontSize: '24px' }} />} ADMINISTRAR TRABAADORES</label>} style={{ backgroundColor: 'forestGreen' }}>
                                    <label className='text-light'>Determina funciones especificas a cada rol y permite asociar un role a cada trabajador</label>
                                </Message>
                            </Col>
                            : ''}

                        {isSuperAdmin ?
                            <>
                                <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
                                    <Message className="pointer my-1" onClick={() => nagivate('/dconfig')}
                                        header={<label className='text-light fw-b'>{<ToolsIcon style={{ fontSize: '24px' }} />} CONFIGURACION ORGANIZACION</label>} style={{ backgroundColor: 'crimson' }}>
                                        <label className='text-light'>Determina funciones especificas a cada rol y permite asociar un role a cada trabajador</label>
                                    </Message>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
                                    <Message className="pointer my-1" onClick={() => nagivate('/daudit')}
                                        header={<label className='text-light fw-b'>{<MessageIcon style={{ fontSize: '24px' }} />} AUDITS</label>} style={{ backgroundColor: 'LightSeaGreen' }}>
                                        <label className='text-light'>Determina funciones especificas a cada rol y permite asociar un role a cada trabajador</label>
                                    </Message>
                                </Col>
                            </>

                            : ''}
                    </Row>

                </Grid>
            </div>
        </>
    }
    // ******************** APIS ************************ // 
    function loadCompanies() {
        AtuhService.loadCompanies(user.id, auth.token)
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else {
                    let listConn = response.data ? response.data : [];
                    let newConn = listConn.find(conn => conn.id_public == team);
                    makeConnection(newConn);
                }
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang);
            });
    }

    function setInvitation(loginUser) {
        setLoading(true);
        ALERT_WAIT(lang);
        var formData = new FormData();
        formData.append('email', loginUser);
        formData.append('team', connection.technicalInfo.id);
        formData.append('lang', lang);

        AtuhService.inviteUSer(formData)
            .then(response => {
                if (response.data === 'OK') ALERT_SUCCESS(lang);
                else if (response.data === 'NO PERMIT') ALERT_NO_PERMIT(lang);
                else if (response.data === 'ON TEAM') ALERT_WARNING_ONTEAM(lang);
                else if (response.data === 'NOT ACTIVE') ALERT_ERROR_NOACTIVE(lang);
                else if (response.data === 'NOT ACTIVE TEAM') ALERT_ERROR_NOACTIVETEAM(lang);
                else ALERT_ERROR(lang);
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang);
            }).finally(() => { setLoading(false); setInvite(false) });
    }

    return (
        <div className="my-6 px-0">
            <Row className="text-center" style={{ width: '100%' }}>
                <h3>EQUIPO DE TRABAJO</h3>
            </Row>
            {load === 0 ?
                <div className='txt-c my-3'><Loader size="lg" content={'WAIT A MOMENT PLEASE'} vertical /></div>
                : connection.conn
                    ? <>
                        {_COMPONENT_INFOBOX()}
                        {canInviteWorker || canViewRoles || canVieweWorker || isSuperAdmin ?
                            _COMPONENT_MANAGE_COMPANY() : ''
                        }
                        {_COMPONENT_MODULE_SELECTOR()}
                        {_COMPONENT_TOOLS_SELECTOR()}
                    </>
                    : "NO WORK TEAMS FOUNDS"}
        </div>
    );
}