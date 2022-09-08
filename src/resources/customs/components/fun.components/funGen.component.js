import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../contextProviders/auth.provider';
import { UtilContext } from '../../contextProviders/util.provider';
import FunService from '../../../../services/apis/fun.service'
import { ALERT_ERROR, ALERT_ERROR_DUPLICATE, ALERT_NO_PERMIT, ALERT_SUCCESS, ALERT_WAIT } from '../../utils/notifications.vars';
import NON_IDEAL_STATE from '../nonideal.component';
import TABLE_COMPONENT from '../table.component';
import BTN_HELP from '../btnHelp.component';

import { ImTable2 } from 'react-icons/im'
import { AiOutlineCheckSquare } from 'react-icons/ai'
import { TiFolderOpen } from 'react-icons/ti'
import DocPassIcon from '@rsuite/icons/DocPass';


import { Col, Divider, Drawer, FlexboxGrid, Grid, Loader, Nav, Panel, PanelGroup, Placeholder, Progress, Row, Tag, TagGroup, TagInput, Tooltip, Whisper } from 'rsuite';
import { Button, Icon } from '@blueprintjs/core';
import { formsParser1, regexChecker_isOA, regexChecker_isOA_2, regexChecker_isOA_3, regexChecker_isPh, _FUN_101_PARSER, _FUN_102_PARSER, _FUN_1_PARSER, _FUN_24_PARSER, _FUN_25_PARSER, _FUN_2_PARSER, _FUN_3_PARSER, _FUN_4_PARSER, _FUN_5_PARSER, _FUN_6_PARSER, _FUN_7_PARSER, _FUN_8_PARSER, _FUN_9_PARSER, _FUN_A_PARSER } from '../../utils/funParser.module';
import { _GET_CLOCK_STATE, _GET_FUN_0, _GET_FUN_1, _GET_FUN_2, _GET_FUN_3, _GET_FUN_4, _GET_FUN_51, _GET_FUN_52, _GET_FUN_53 } from '../../utils/fun.loader';
import { dateParser_finalDate, dateParser_timePassed } from '../../utils/utilsParse.module';
import { FIND_PERMIT, GET_FUN_STATE, GET_JSON_FULL, GET_LAST_ID_PUBLIC, GET_LAST_VR } from '../../utils/lamdas.functions';
import PROGRESION_ICONS from './progresionIcons.component';
import { Link } from 'react-router-dom';
import PROGRESION_BAR from './progressionBar.component';
import MODAL from '../modal.component';
import FORM from '../form.component';
import { Tooltip2 } from '@blueprintjs/popover2';
import VIEWER from '../viewer.component';
import FUN_3 from './fun3.component';
import FUN_4 from './fun4.component';
import FUN_51 from './fun51.component';
import FUN_52 from './fun52.component';

var moment = require('moment');

export default function FUN_GEN(props) {
    const { id, id_public, type, tagColor, tagText } = props;

    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('fun');
    const btn = utilities.getTranslation('btns');
    const lang = utilities.lang;
    const theme = utilities.theme;

    const permits = conn.roles ?? [];
    const canView = FIND_PERMIT(permits, 'fun', 1);

    var [load, setLoad] = useState(0);
    var [data, setData] = useState(null);
    var [drawer, setDrawer] = useState(false);

    useEffect(() => {
        if (drawer == true && canView) loadData();
    }, [drawer]);

    // ************************ DATA CONVERTERS ************************** //

    // ************************** JSX ELEMENTS **************************** //
    let BODY = () => {
        let f3 = _GET_FUN_3(data);
        let f4 = _GET_FUN_4(data);
        let f51 = _GET_FUN_51(data);
        let f52 = _GET_FUN_52(data);
        return <>
            <PanelGroup accordion bordered defaultActiveKey={1} className='border'>
                <Panel header={<label className='fw-b txt-up'>0. Meta datos de la Actuación - <Icon intent='primary' icon="label" /></label>} defaultExpanded eventKey={1}>
                    {FUN_0()}
                </Panel>
                <Panel header={<label className='fw-b txt-up'>1. Identificación de la Actuación - <Icon intent='primary' icon="form" /></label>} eventKey={2}>
                    {FUN_1()}
                </Panel>
                <Panel header={<label className='fw-b txt-up'>2. Informacion del Predio - <Icon intent='primary' icon="home" /></label>} eventKey={3}>
                    {FUN_2()}
                </Panel>
                <Panel header={<label className='fw-b txt-up'> 3. Información de Vecinos Colindantes - <Icon intent='primary' icon="people" /></label>} eventKey={4}>
                    <FUN_3 data={f3} load={load} />
                </Panel>
                <Panel header={<label className='fw-b txt-up'>4. Linderos, Dimensiones y Áreas - <Icon intent='primary' icon="inheritance" /></label>} eventKey={5}>
                    <FUN_4 data={f4} load={load} />
                </Panel>

                <Divider className='txt-up'>5. Titulares y profesionales responsables</Divider>

                <Panel header={<label className='fw-b txt-up'>5.1 Titular(es) de la Licencia - <Icon intent='primary' icon="people" /></label>} eventKey={6}>
                    <FUN_51 data={f51} load={load} />
                </Panel>
                <Panel header={<label className='fw-b txt-up'>5.2 Profesionales Responsables - <Icon intent='primary' icon="people" /></label>} eventKey={7}>
                    <FUN_52 data={f52} load={load} />
                </Panel>
                <Panel header={<label className='fw-b txt-up'>5.3 Responsable de la Solicitud - <Icon intent='primary' icon="people" /></label>} eventKey={8}>
                    {FUN_53()}
                </Panel>
                <Panel header={<label className='fw-b txt-up'>6. ANEXO DE CONSTRUCCIÓN SOSTENIBLE - <Icon intent='primary' icon="form" /></label>} eventKey={9}>
                    {FUN_ANEX()}
                </Panel>
                <Panel header={<label className='fw-b txt-up'>7. Checkeo - <Icon intent='primary' icon="endorsed" /></label>} eventKey={10}>
                    Content
                </Panel>

                <Divider lassName='txt-up' >8. DOCUMENTOS</Divider>

                <Panel header={<label className='fw-b txt-up'>8.1 Estudio de documentos - <Icon intent='success' icon="document" /></label>} eventKey={11}>
                    Content
                </Panel>
                <Panel header={<label className='fw-b txt-up'>8.2 Documentos digitalizados - <Icon intent='success' icon="document" /></label>} eventKey={12}>
                    Content
                </Panel>
                <Panel header={<label className='fw-b txt-up'>8.3 Documentos de ventanilla unica - <Icon intent='success' icon="document" /></label>} eventKey={13}>
                    Content
                </Panel>
                <Panel header={<label className='fw-b txt-up'>9. Publicidad - <Icon intent='warning' icon="media" /></label>} eventKey={14}>
                    Content
                </Panel>
                <Panel header={<label className='fw-b txt-up'>9.2 Reporte a planeacion - <Icon intent='warning' icon="envelope" /></label>} eventKey={15}>
                    Content
                </Panel>
                <Panel header={<label className='fw-b txt-up'>10. Informes - <Icon intent='danger' icon="panel-table" /></label>} eventKey={16}>
                    Content
                </Panel>
                <Panel header={<label className='fw-b txt-up'>11. Acta Observaciones y Correciones - <Icon intent='danger' icon="book" /></label>} eventKey={17}>
                    Content
                </Panel>
                <Panel header={<label className='fw-b txt-up'>12. Acta de Viabilidad - <Icon intent='danger' icon="book" /></label>} eventKey={18}>
                    Content
                </Panel>
            </PanelGroup>
        </>
    }
    let FUN_0 = () => {
        let f0 = _GET_FUN_0(data);
        let f1 = _GET_FUN_1(data);

        return <>
            <Grid fluid>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">0.1 Tipo de Actuacion: </Col>
                    <Col xs={18} className="fw-b">{formsParser1(f1)}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">0.2 Descripción: </Col>
                    <Col xs={18} className="">{f1.description}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={4} className="txt-r">0.3 Estado: </Col>
                    <Col xs={4} className="fw-b">{GET_FUN_STATE(f0.state, lang)}</Col>
                    <Col xs={4} className="txt-r">0.4 Categoria: </Col>
                    <Col xs={4} className="fw-b">{f0.type ? trn.types[f0.type] : ''}</Col>
                    <Col xs={4} className="txt-r">0.5 Modelo: </Col>
                    <Col xs={4} className="fw-b">{f0.model}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={4} className="txt-r">0.6 Consecutivo de Pago: </Col>
                    <Col xs={4} className="fw-b">{f0.id_payment}</Col>
                    <Col xs={4} className="txt-r">0.7 Fecha Pago: </Col>
                    <Col xs={4} className="fw-b">{f0.date_payment}</Col>
                    <Col xs={4} className="txt-r">0.8 Documento de pago: </Col>
                    <Col xs={4} className="fw-b">{
                        f0.id6payment > 0 ?
                            <VIEWER icon="id-number" api={loadFun6} apiID={f0.id6payment} intent={'primary'} text={'documento de pago'} filename={'document de pago'} />
                            : ''}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">0.9 Reglas especiales: </Col>
                    <Col xs={18} className="fw-b">{trn.rules.sign[f0.rules[0]]}, {trn.rules.eng[f0.rules[1]]}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">0.10 Archivo: </Col>
                    <Col xs={18} className="fw-b">TODO... </Col>
                </Row>
            </Grid>
        </>
    }
    let FUN_1 = () => {
        let f1 = _GET_FUN_1(data, true);
        let model = _GET_FUN_0(data).model;
        return <>
            <Grid fluid>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">1.1 Tipo de Solicitud: </Col>
                    <Col xs={6} className="fw-b">{_FUN_1_PARSER(f1.tipo, false, lang)}</Col>
                    <Col xs={6} className="txt-r">1.2 Objeto del Tramite: </Col>
                    <Col xs={6} className="fw-b">{_FUN_2_PARSER(f1.tramite, false, lang)}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">1.3 Modalidad Licencia de Urbanización: </Col>
                    <Col xs={6} className="fw-b">{_FUN_3_PARSER(f1.m_urb, false, lang)}</Col>
                    <Col xs={6} className="txt-r">1.4 Modalidad Licencia de Subdivisión: </Col>
                    <Col xs={6} className="fw-b">{_FUN_4_PARSER(f1.m_sub, false, lang)}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">1.5 Modalidad Licencia de Construcción: </Col>
                    <Col xs={6} className="fw-b">{_FUN_5_PARSER(f1.m_lic, false, lang)}</Col>
                    <Col xs={6} className="txt-r">1.6 Usos: </Col>
                    <Col xs={6} className="fw-b">{_FUN_6_PARSER(f1.usos, false, lang)}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">1.7 Área Construida: </Col>
                    <Col xs={6} className="fw-b">{_FUN_7_PARSER(f1.area, false, lang)}</Col>
                    <Col xs={6} className="txt-r">1.8 Tipo de Vivienda: </Col>
                    <Col xs={6} className="fw-b">{_FUN_8_PARSER(f1.vivienda, false, lang)}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">1.9 Bien de Interés Cultural: </Col>
                    <Col xs={6} className="fw-b">{_FUN_9_PARSER(f1.cultural, false, lang)}</Col>
                    {model == '2021' ?
                        <>
                            <Col xs={6} className="txt-r">1.10.1 Declaración sobre medidas de construcción sostenible: </Col>
                            <Col xs={6} className="fw-b">{_FUN_101_PARSER(f1.regla_1, false, lang)}</Col>
                        </>
                        : ''}
                </Row>
                <Row className='py-1'>
                    {model == '2021' ?
                        <>
                            <Col xs={6} className="txt-r">1.10.2 Zónificacion Climática: </Col>
                            <Col xs={6} className="fw-b">{_FUN_102_PARSER(f1.regla_2, false, lang)}</Col>
                        </>
                        : ''}
                </Row>
            </Grid>
        </>
    }
    let FUN_2 = () => {
        let f2 = _GET_FUN_2(data);
        return <>
            <Grid fluid>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">2.1 Dirección o Nomenclatura actual: </Col>
                    <Col xs={6} className="fw-b">{f2.direccion}</Col>
                    <Col xs={6} className="txt-r">2.1 Dirección(es) Anterior(es): </Col>
                    <Col xs={6} className="fw-b">{f2.direccion_ant}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">2.2 No. Matrícula Inmobiliaria: </Col>
                    <Col xs={18} className="fw-b">{f2.matricula}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">2.3.1 Identificación Catastral (Viejo): </Col>
                    <Col xs={6} className="fw-b">{f2.catastral}</Col>
                    <Col xs={6} className="txt-r">2.3.2 Identificación Catastral (Nuevo, 30 dígitos): </Col>
                    <Col xs={6} className="fw-b">{f2.catastral_2}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">2.4 Clasificación del Suelo: </Col>
                    <Col xs={6} className="fw-b">{_FUN_24_PARSER(f2.suelo, false, lang)}</Col>
                    <Col xs={6} className="txt-r">2.5 Planimetría del Lote: </Col>
                    <Col xs={6} className="fw-b">{_FUN_25_PARSER(f2.lote_pla, false, lang)}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={4} className="txt-r">2.6.1 Barrio o Urbanzación: </Col>
                    <Col xs={4} className="fw-b">{f2.barrio}</Col>
                    <Col xs={4} className="txt-r">2.6.2 Vereda: </Col>
                    <Col xs={4} className="fw-b">{f2.vereda}</Col>
                    <Col xs={4} className="txt-r">2.6.3 Comuna: </Col>
                    <Col xs={4} className="fw-b">{f2.comuna}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={4} className="txt-r">2.6.4 Sector: </Col>
                    <Col xs={4} className="fw-b">{f2.sector}</Col>
                    <Col xs={4} className="txt-r">2.6.5 Estrato: </Col>
                    <Col xs={3} className="fw-b">{f2.estrato}</Col>
                    <Col xs={5} className="txt-r">2.6.6 Corregimiento: </Col>
                    <Col xs={4} className="fw-b">{f2.corregimiento}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={4} className="txt-r">2.6.4 Manzana No.: </Col>
                    <Col xs={4} className="fw-b">{f2.manzana}</Col>
                    <Col xs={4} className="txt-r">2.6.5 Lote No.: </Col>
                    <Col xs={4} className="fw-b">{f2.lote}</Col>
                </Row>
            </Grid>
        </>
    }
    let FUN_53 = () => {
        let f53 = _GET_FUN_53(data);
        return <>
            <Grid fluid>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">5.3.1 Nombre: </Col>
                    <Col xs={6} className="fw-b">{f53.name + ' ' + f53.surname}</Col>
                    <Col xs={6} className="txt-r">5.3.2 Documento Identificador: </Col>
                    <Col xs={6} className="fw-b">{f53.id_number}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">5.3.3 En calidad de: </Col>
                    <Col xs={6} className="fw-b">{f53.role}</Col>
                    <Col xs={6} className="txt-r">5.3.4 Número de contacto: </Col>
                    <Col xs={6} className="fw-b">{f53.number}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">5.3.5 Correo de contacto: </Col>
                    <Col xs={6} className="fw-b">{f53.email}</Col>
                    <Col xs={6} className="txt-r">5.3.6 Dirección de correspondencia: </Col>
                    <Col xs={6} className="fw-b">{f53.address}</Col>
                </Row>
                <Row className='py-1'>

                    <Col xs={6} className="txt-r">5.3.7 Documentos: </Col>
                    <Col xs={18} className="fw-b">{
                        f53.docs.map(doc => doc > 0 ?
                            <VIEWER icon="id-number" api={loadFun6} apiID={doc} intent={'primary'} text={'documento de pago'} filename={'document de pago'} />
                            : '')
                    }</Col>
                </Row>


            </Grid>
        </>
    }
    let FUN_ANEX = () => {
        let f1 = _GET_FUN_1(data, true);
        let a1 = f1.anex_1;
        let a2 = f1.anex_2;
        let a211 = a2.a211 ? a2.a211.split(';') : [];
        let a212 = a2.a212 ? a2.a212.split(';') : [];
        let a22 = a2.a22 ? a2.a22.split(';') : [];
        let a23 = a2.a23 ? a2.a23.split(';') : [];
        let a24 = a2.a24 ? a2.a24.split(';') : [];
        let a25 = a2.a25 ? a2.a25.split(';') : [];
        let a26 = a2.a26 ? a2.a26.split(';') : [];
        let a27 = a2.a27 ? a2.a27.split(';') : [];
        let a28 = a2.a28 ?? '';
        let a29 = a2.a29 ?? '';


        let a3 = f1.anex_3;
        return <>
            <Grid fluid>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">6.1 Tipo de uso: </Col>
                    <Col xs={18} className="fw-b">{_FUN_A_PARSER(a1, false, lang, 'a1')}</Col>
                </Row>

                <Divider lassName='txt-up' >6.2 Reglamento de construcción sostenible</Divider>

                <Row className='py-1'>
                    <Col xs={6} className="txt-r">6.2.1.1 Medidas Pasivas: </Col>
                    <Col xs={6} className="fw-b">{_FUN_A_PARSER(a211, false, lang, 'a211')}</Col>
                    <Col xs={6} className="txt-r">6.2.1.2  Medidas Activa: </Col>
                    <Col xs={6} className="fw-b">{_FUN_A_PARSER(a212, false, lang, 'a212')}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">6.2.2 Materialidad muro interno: </Col>
                    <Col xs={6} className="fw-b">{_FUN_A_PARSER(a22, false, lang, 'a22')}</Col>
                    <Col xs={6} className="txt-r">6.2.3  Medidas Activa: </Col>
                    <Col xs={6} className="fw-b">{_FUN_A_PARSER(a23, false, lang, 'a23')}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">6.2.4 Materialidad de cubierta: </Col>
                    <Col xs={6} className="fw-b">{_FUN_A_PARSER(a24, false, lang, 'a24')}</Col>
                    <Col xs={6} className="txt-r">6.2.4  Relación muro ventana y altura piso a techo: </Col>
                    <Col xs={6} className="fw-b">
                        <Row>Rango( 0% - 100%)</Row>
                        <Row>Norte: {a25[0]}</Row>
                        <Row>Sur: {a25[1]}</Row>
                        <Row>Oriente: {a25[2]}</Row>
                        <Row>Occidente: {a25[3]}</Row>
                    </Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">6.2.6 Declaración sobre medidas de ahorro en agua: </Col>
                    <Col xs={6} className="fw-b">{_FUN_A_PARSER(a26, false, lang, 'a26')}</Col>
                    <Col xs={6} className="txt-r">6.2.7 Zonificación Climática: </Col>
                    <Col xs={6} className="fw-b">{_FUN_A_PARSER(a27, false, lang, 'a27')}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={6} className="txt-r">6.2.8 Ahorro de esperado de agua: </Col>
                    <Col xs={6} className="fw-b">{a28}</Col>
                    <Col xs={6} className="txt-r">6.2.9 Ahorro esperado en energía: </Col>
                    <Col xs={6} className="fw-b">{a29}</Col>
                </Row>

                <Divider lassName='txt-up' >6.3  Área del proyecto</Divider>

                <Row className='py-1'>
                    <Col xs={12} className="txt">6.3.1 Área neta de urbanismo y paisajismo (si aplica): </Col>
                    <Col xs={12} className="fw-b">{a3[0]}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={12} className="txt">6.3.2 Área neta de zonas comunes (si aplica): </Col>
                    <Col xs={12} className="fw-b">{a3[0]}</Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={12} className="txt">6.3.3 Área neta de parqueaderos (si aplica): </Col>
                    <Col xs={12} className="fw-b">{a3[0]}</Col>
                </Row>

            </Grid>
        </>
    }
    // *************************** DATA TABLE **************************** //

    // ******************************** APIS ****************************** //
    function loadData() {
        FunService.get_fun_IdPublic(id_public)
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else setData(response.data);
            })
            .catch(e => console.log(e)).finally(() => setLoad(1));
    }
    function loadFun6(id) {
        return FunService.loadFun6(id)
    }


    return (
        <>
            {canView ? <>
                {type == 'btn' ? <Tooltip2 content={'gen data'} placement="top"><Button intent='primary' icon="label" onClick={() => setDrawer(true)}></Button></Tooltip2> : ''}
                {type == 'tag' ? <Tooltip2 content={'gen data'} placement="top"><Tag className='pointer fw-b text-light' style={{ marginRight: '1px', marginBottom: '1px' }} color={tagColor ?? "blue"} size="sm" ton onClick={() => setDrawer(true)}>{tagText ?? id_public}</Tag></Tooltip2> : ''}
                {type == 'icon' ? <Tooltip2 content={'gen data'} placement="top"><Icon className='pointer' intent='primary' icon="label" onClick={() => setDrawer(true)}></Icon></Tooltip2> : ''}

                <Drawer size={'lg'} open={drawer} onClose={() => setDrawer(false)}>
                    {load == 0 ?
                        <Drawer.Body className={utilities ? utilities.theme : 'light'}>
                            <div className='txt-c my-3'><Loader size="lg" content={btn.load} vertical /></div>
                        </Drawer.Body>
                        : <>
                            <Drawer.Header className={utilities ? utilities.theme : 'light'}>
                                <Drawer.Title>
                                    <FlexboxGrid justify="center">
                                        <FlexboxGrid.Item colspan={6}><label className='fw-b'>Actuacion: {id_public}</label></FlexboxGrid.Item>
                                        <FlexboxGrid.Item colspan={6}><label className='fw-b'> - {data ? GET_FUN_STATE(data.state, lang) : ''}</label></FlexboxGrid.Item>
                                        <FlexboxGrid.Item colspan={6}>{PROGRESION_ICONS(data ?? {}, { pay: true, check: true, neigh: true, sign: true, report: true, ph: true, law: true, arc: true, eng: true, acta: true, pay2: true, via: true, lic: true })}</FlexboxGrid.Item>
                                        <FlexboxGrid.Item colspan={6}><PROGRESION_BAR row={data ?? {}} /></FlexboxGrid.Item>
                                    </FlexboxGrid>
                                </Drawer.Title>
                            </Drawer.Header>
                            <Drawer.Body className={utilities ? utilities.theme : 'light'}>
                                {BODY()}
                            </Drawer.Body>
                        </>}
                </Drawer>

            </> : <NON_IDEAL_STATE type="permit" />}
        </>
    );

}

