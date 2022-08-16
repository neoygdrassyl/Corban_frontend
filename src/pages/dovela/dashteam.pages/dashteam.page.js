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
import ViewsAuthorizeIcon from '@rsuite/icons/ViewsAuthorize';

//

import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider'
import AtuhService from '../../../services/apis/auth.service'
import { ALERT_ERROR, ALERT_ERROR_NOACTIVE, ALERT_ERROR_NOACTIVETEAM, ALERT_NO_PERMIT, ALERT_SUCCESS, ALERT_WAIT, ALERT_WARNING_ONTEAM, CONFIRM_INVITATION, CONFIRM_USER } from '../../../resources/customs/utils/notifications.vars';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import { Alert } from '@blueprintjs/core';
import { FIND_PERMIT } from '../../../resources/customs/utils/lamdas.functions';
import PATCH_NOTES from '../../../resources/customs/components/patchnotes.component';
import NON_IDEAL_STATE from '../../../resources/customs/components/nonideal.component';


export default function DashboardTeam() {
    let params = useParams();
    const nagivate = useNavigate();
    const auth = useContext(AuthContext);
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('dashteam');
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
    const canViewTemplates = FIND_PERMIT(permits, 'templates', 1);

    let makeConnection = (_conn) => {
        if (_conn) auth.setConn(_conn, () => setLoad(1))
        else auth.clearConn(() => { });
    }

    // ADMIN : BILLING, DOCUMENTATIO API, TEMPLATES (ARC, RES, TAXES) - MASS UPLOAD
    // MODULES:  SUBMIT - PUBLISH - FUN RAD - FUN MANAGE - PH -  ARHIVE
    // MODULES OTHER: NOMENCLATURE - URBAN NORM - PQRS
    // TOOLS: DICTIONARY - CALC - CERTIFICATIONS 
    // PUBLIC PAGE:  HOME PAGE - DOVELA PAGE (SPECS, PRICING) - PUBLICATIONS - NEWS
    // USER: CREATE NEW PROJECT - SEE PROJECTS - PAY PROJECT - UPLOAD DOCUMENTOS TO PROJECT - DONWLOAD REPORTS 
    // USER PROFESIONAL: UPDATE PROFESIONAL PROFILE
    // USER CONFIG: 
    // HELP PAGE: 
    const DASHBOARD_INFO = [
        {
            header: trn.modules[0].title,
            icon: <IoDocumentAttachOutline style={{ fontSize: '5em' }} />,
            text: trn.modules[0].desc,
            color: "violet",
            to: "/submit"
        },
    ]

    const TOOL_INFO = [
        {
            header: trn.tools[0].title,
            icon: <BiCalculator style={{ fontSize: '5em' }} />,
            text: trn.tools[0].desc,
            color: "blue",
            to: "/dcalc"
        },
        {
            header: trn.tools[1].title,
            icon: <RiBook2Line style={{ fontSize: '5em' }} />,
            text: trn.tools[1].desc,
            color: "green",
            to: "/dictionary"
        },
        {
            header: trn.tools[2].title,
            icon: <BsBookmarkCheck style={{ fontSize: '5em' }} />,
            text: trn.tools[2].desc,
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
                <Link to={props.to}><h6 className="text-secondary">{trn.continue}</h6></Link>
            </Row>
        </Panel>
    );
    // ******************** COMPONENT JSX ************************ // 
    let _COMPONENT_INFOBOX = () => {
        return <>
            <Row style={{ width: '100%' }}>

                <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
                    <Panel className="border">
                        <Row className="text-center" style={{ width: '100%' }} >
                            <h5>{connection.name}</h5>
                        </Row>
                        <Row>
                            <Col xs={6} className="text-right">
                                <label >{trn.team_data[0]}: </label>
                            </Col>
                            <Col xs={18} className="text-left">
                                <label className="fw-b">{connection.companiyInfo.dir_title + ' ' + connection.companiyInfo.director}</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} className="text-right">
                                <label >{trn.team_data[1]}: </label>
                            </Col>
                            <Col xs={18} className="text-left">
                                <label className="fw-b">{connection.companiyInfo.state + ' - ' + connection.companiyInfo.city}</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} className="text-right">
                                <label >{trn.team_data[2]}: </label>
                            </Col>
                            <Col xs={18} className="text-left">
                                <label className="fw-b">{connection.companiyInfo.number1 + ' /  ' + connection.companiyInfo.number2}</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} className="text-right">
                                <label >{trn.team_data[3]}: </label>
                            </Col>
                            <Col xs={18} className="text-left">
                                <label className="fw-b">{connection.companiyInfo.email1}</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} className="text-right">
                                <label >{trn.team_data[4]}: </label>
                            </Col>
                            <Col xs={18} className="text-left">
                                <label className="fw-b">{connection.companiyInfo.address}</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} className="text-right">
                                <label >{trn.team_data[5]}: </label>
                            </Col>
                            <Col xs={18} className="text-left">
                                <label className="fw-b"><a href={connection.companiyInfo.page} target="_blank"><BiLinkExternal style={{ paddingTop: '1px' }} />{connection.companiyInfo.page}</a></label>
                            </Col>
                        </Row>
                        <br />
                        <Row className="text-center" style={{ width: '100%' }} >
                            <h5>{trn.role_title}</h5>
                        </Row>
                        {connection.active == 0 && !isSuperAdmin ?
                            <Row>
                                <Col xs={24} className="text-justify">
                                    <label><label className="fw-b text-danger">{trn.role_data[3]}: </label>{trn.role_data[4]}</label>
                                </Col>
                            </Row>
                            : ''}
                        {connection.roles.map(role => <>
                            <Row>
                                <Col xs={6} className="text-right">
                                    <label >{trn.role_data[0]}: </label>
                                </Col>
                                <Col xs={18} className="text-left">
                                    <label><label className="fw-b">{role.name}:</label> {role.desc}</label>
                                </Col>
                            </Row>
                        </>
                        )}
                        {connection.roles.length == 0 ? <Row>
                            <Col xs={24} className="text-center">
                                <label className='fw-b text-danger'>{trn.role_data[1]}</label>
                            </Col>
                            <Col xs={24} className="text-center">
                                <label className=''>{trn.role_data[2]}</label>
                            </Col>
                        </Row> : ''}

                    </Panel>
                </Col>

                <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16}>
                    <Panel className="border">
                        <Row className="text-center" style={{ width: '100%' }} >
                            <h5>{trn.patch}</h5>
                            <PATCH_NOTES type='dovela' />
                        </Row>
                    </Panel>
                </Col>
            </Row>
        </>
    }
    let _COMPONENT_MODULE_SELECTOR = () => {
        return <>
            <Divider>{trn.modules_title}</Divider>
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
            <Divider>{trn.tools_title}</Divider>
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
                <Divider>{trn.admin_title}</Divider>
                <Grid fluid>
                    <Row style={{ width: '100%' }} >
                        {canInviteWorker ?
                            <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
                                <Message onClick={() => setInvite(!openInvite)} className="pointer my-1"
                                    header={<label className='text-light fw-b pointer'>{<SearchPeopleIcon style={{ fontSize: '24px' }} />} {trn.admin[0].title}</label>} style={{ backgroundColor: 'dodgerblue' }}>
                                    <label className='text-light pointer'>{trn.admin[0].desc}</label>
                                </Message>
                            </Col>
                            : ''}
                        {canViewRoles ?
                            <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
                                <Message className="pointer my-1" onClick={() => nagivate('/roles')}
                                    header={<label className='text-dark fw-b'>{<UserInfoIcon style={{ fontSize: '24px' }} />} {trn.admin[1].title}</label>} style={{ backgroundColor: 'gold' }}>
                                    <label className='text-dark'>{trn.admin[1].desc}</label>
                                </Message>
                            </Col>
                            : ''}
                        {canVieweWorker ?
                            <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
                                <Message className="pointer my-1" onClick={() => nagivate('/workers')}
                                    header={<label className='text-light fw-b'>{<PeoplesIcon style={{ fontSize: '24px' }} />} {trn.admin[2].title}</label>} style={{ backgroundColor: 'forestGreen' }}>
                                    <label className='text-light'>{trn.admin[2].desc}</label>
                                </Message>
                            </Col>
                            : ''}
                        {canViewTemplates ? <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
                            <Message className="pointer my-1" onClick={() => nagivate('/dtemplates')}
                                header={<label className='text-light fw-b'>{<ViewsAuthorizeIcon style={{ fontSize: '24px' }} />} {trn.admin[7].title}</label>} style={{ backgroundColor: 'DarkOrchid' }}>
                                <label className='text-light'>{trn.admin[7].desc}</label>
                            </Message>
                        </Col> : ''}

                        {isSuperAdmin ?
                            <>
                                <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
                                    <Message className="pointer my-1" onClick={() => nagivate('/dconfig')}
                                        header={<label className='text-light fw-b'>{<ToolsIcon style={{ fontSize: '24px' }} />} {trn.admin[3].title}</label>} style={{ backgroundColor: 'crimson' }}>
                                        <label className='text-light'>{trn.admin[3].desc}</label>
                                    </Message>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
                                    <Message className="pointer my-1" onClick={() => nagivate('/daudit')}
                                        header={<label className='text-light fw-b'>{<MessageIcon style={{ fontSize: '24px' }} />} {trn.admin[4].title}</label>} style={{ backgroundColor: 'LightSeaGreen' }}>
                                        <label className='text-light'>{trn.admin[4].desc}</label>
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
                <h3>{trn.title}</h3>
            </Row>
            {load === 0 ?
                <div className='txt-c my-3'><Loader size="lg" content={trn.wait} vertical /></div>
                : connection.conn
                    ? <>
                        {_COMPONENT_INFOBOX()}
                        {canInviteWorker || canViewRoles || canVieweWorker || isSuperAdmin ?
                            _COMPONENT_MANAGE_COMPANY() : ''
                        }
                        {_COMPONENT_MODULE_SELECTOR()}
                        {_COMPONENT_TOOLS_SELECTOR()}
                    </>
                    : <NON_IDEAL_STATE type="permit" />}
        </div>
    );
}