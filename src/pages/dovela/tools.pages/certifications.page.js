import React, { useContext, useEffect, useState } from 'react';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider';
import SERVICE_CERTIFICATIONS from '../../../services/apis/dcertification.service';

// COMPONENTS
import TABLE_COMPONENT from '../../../resources/customs/components/table.component';
import BTN_HELP from '../../../resources/customs/components/btnHelp.component';
import { ALERT_ERROR, ALERT_NO_PERMIT, ALERT_SUCCESS, ALERT_WAIT } from '../../../resources/customs/utils/notifications.vars';
import { Col, Grid, Nav, Row } from 'rsuite';
import { GET_FUN_STATE, GET_JSON_FULL } from '../../../resources/customs/utils/lamdas.functions';
import { formsParser1 } from '../../../resources/customs/utils/funParser.module';
import NON_IDEAL_STATE from '../../../resources/customs/components/nonideal.component';
import BTN_DOWNLOAD from '../../../resources/customs/components/btnDownload.component';
import MODAL from '../../../resources/customs/components/modal.component';
import { Button, Icon } from '@blueprintjs/core';
import DATALIST_API from '../../../resources/customs/components/form.components/datalistAPI.component';

// ICONS
import DocPassIcon from '@rsuite/icons/DocPass';
import TagIcon from '@rsuite/icons/Tag';
import MemberIcon from '@rsuite/icons/Member';

var moment = require('moment');

export default function CERTIFICATIONS() {
    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const dvSerial = conn.technicalInfo.serials ? conn.technicalInfo.serials.process : false;

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('dcerts');
    const btn = utilities.getTranslation('btns');
    const lang = utilities.lang;

    var [load, setLoad] = useState(0);
    var [data, setData] = useState([]);
    var [modal, setModal] = useState(false);
    var [active, setActive] = useState('prof');

    var [dataProf, setDataProf] = useState(null);

    var [loadProf, setLoadProf] = useState(-1);
    var [dataProfContent, setDataProfContent] = useState(null);

    var [loadFun, setLoadFun] = useState(-1);
    var [dataFunContent, setDataFunContent] = useState(null);

    useEffect(() => {
        if (load == 0 || load == 2) loadData();
        if (loadProf == 0 || loadProf == 2) loadDataProfContent();
        if (loadFun == 0 || loadFun == 2) loadDataFunContent();
    }, [load, loadProf, loadFun]);

    // *************************** FUNCTIONS **************************** //
    let getFun1 = (element) => {
        var type = element ? element.split('&') : [];
        var suType = type[type.length - 1] ? type[type.length - 1].split(';') : [];
        var typeObject = {
            tipo: suType[0],
            tramite: suType[1],
            m_urb: suType[2],
            m_sub: suType[3],
            m_lic: suType[4]
        }
        return formsParser1(typeObject, lang);
    }

    let getDates = (element) => {
        var state = element.states ? element.states.split(',') : [];
        var date = element.dates ? element.dates.split(',') : [];
        var date_start = '';
        var date_end = '';
        if (state.length) {
            if (state.includes('-1')) {
                var indexOf = state.indexOf('-1');
                date_start = date[indexOf];
            }
            if (state.includes('3')) {
                var indexOf = state.indexOf('3');
                date_start = date[indexOf];
            }
            if (state.includes('5')) {
                var indexOf = state.indexOf('5');
                date_start = date[indexOf];
            }
            if (state.includes('100')) {
                var indexOf = state.indexOf('100');
                date_end = date[indexOf]
            }
        }
        return [date_start, date_end]
    }
    // *************************** JXS ELEMENTS **************************** //
    let MODAL_CONTENT = () => {
        return <>
            <Nav activeKey={active} onSelect={setActive} style={{ marginBottom: 20 }} appearance="tabs">
                <Nav.Item eventKey="prof" icon={<DocPassIcon />}>{trn.newCertTh[0]}</Nav.Item>
                <Nav.Item eventKey="fun" icon={<DocPassIcon />}>{trn.newCertTh[1]}</Nav.Item>
            </Nav>

            {active == 'prof' ? COMPONENT_PROF() : ''}
            {active == 'fun' ? COMPONENT_FUN() : ''}
        </>
    }

    let COMPONENT_PROF = () => {
        return <>
            <p className='m-2'>{trn.profInfo}</p>
            <DATALIST_API
                api={SERVICE_CERTIFICATIONS.findProfS} icon={<MemberIcon />}
                onSelect={e => { setDataProf(e.data); setLoadProf(0) }}
                filterBy={(str, item) => {
                    let names = str.trim().split(' ').map(name => name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase());
                    let idNormalized = String(str.trim()).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                    if (item.label == undefined) return false
                    return names.some(name => item.label.includes(name)) || idNormalized == item.id;
                }}
                model={{
                    value: d => String(d.name.trim() + ' ' + d.surname.trim()).toUpperCase(),
                    label: d => String(d.name.trim() + ' ' + d.surname.trim()).toUpperCase(),
                    id: d => d.id_number
                }}
            />
            {dataProfContent ? <div className='my-2'>
                {COMPONENT_EXPAND({ data: { content: dataProfContent } }, false, 'prof')}
                <div className='my-1'><Button intent='success' icon="add" onClick={() => createProf(dataProfContent)}>{btn.add}</Button></div>
            </div>
                : <NON_IDEAL_STATE type="find" />}
        </>
    }

    let COMPONENT_FUN = () => {
        return <>
            <p className='m-2'>{trn.funInfo}</p>
            <DATALIST_API
                api={SERVICE_CERTIFICATIONS.findFun} icon={<TagIcon />} dv={dvSerial}
                onSelect={e => { setDataFunContent(e.data); setLoadFun(0) }}
                filterBy={(str, item) => {
                    if (item.label == undefined) return false;
                    return item.label.includes(str)
                }}
                model={{
                    value: d => d.id_public,
                    label: d => d.id_public,
                    id: d => d.id_public,
                }}
            />
            {dataFunContent ? <div className='my-2'>
                {COMPONENT_EXPAND({ data: { content: dataFunContent } }, false, 'fun')}
                <div className='my-1'><Button intent='success' icon="add" onClick={() => createFun(dataFunContent)}>{btn.add}</Button></div>
            </div>
                : <NON_IDEAL_STATE type="find" />}
        </>

    }

    // *************************** DATA TABLE **************************** //
    const columns = [
        {
            name: trn.tableCl[0],
            selector: row => row.id_public,
            cell: row => row.id_public,
        },
        {
            name: trn.tableCl[1],
            minWidth: '30%',
            width: '50%',
            selector: row => row.description,
            cell: row => row.description,
        },
        {
            name: trn.tableCl[2],
            selector: row => moment(row.createdAt).format('YYYY-MM-DD HH:mm'),
            cell: row => moment(row.createdAt).format('YYYY-MM-DD HH:mm'),
        },
        {
            name: trn.tableCl[3],
            selector: row => row.id_related || '',
            ignoreCSV: true,
            cell: row => row.id_related,
        },
        {
            name: trn.tableCl[4],
            cell: row => <BTN_DOWNLOAD onClick={() => genPDF(row)} sm />,
        },
    ];

    const COMPONENT_EXPAND = ({ data }, convert = true, type = 'prof') => {
        let content = convert ? GET_JSON_FULL(data.content) : data.content
        if (data.related == 'fun' || type == 'fun') return <>
            <Grid fluid>
                <Row className='txt-c border p-2'>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[0]}: <label className='fw-b'>{content.id_public}</label></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[1]}: <label className='fw-b'>{getFun1(content.type)}</label></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[2]}: <label className='fw-b'>{GET_FUN_STATE(content.state, lang, true)}</label></Col>
                </Row>
                <Row className='txt-c border p-2'>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[3]}: <label className='fw-b'>{content.address}</label></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[4]}: <label className='fw-b'>{content.city}</label></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[5]}: <label className='fw-b'>{content.county}</label></Col>
                </Row>
                <Row className='txt-c border p-2'>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[6]}: <label className='fw-b'>{content.matricula}</label></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[7]}: <label className='fw-b'>{content.catastral}</label></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[8]}: <label className='fw-b'>{content.catastral_2}</label></Col>
                </Row>
                <Row className='txt-c border p-2'>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[9]}: <label className='fw-b'>{content.name}</label></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[10]}: <label className='fw-b'>{content.id_number}</label></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[11]}: <label className='fw-b'>{content.role}</label></Col>
                </Row>
            </Grid>
        </>
        if (data.related == 'prof' || type == 'prof' || !data.related) return <>
            <Grid fluid>
                <Row className='txt-c border p-2'>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}><h5 className='fw-n'>{trn.certHd_1[0]}: <label className='fw-b'>{content[0].name} {content[0].surname}</label></h5></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}><h5 className='fw-n'>{trn.certHd_1[1]}: <label className='fw-b'>{content[0].id_number}</label></h5></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}><h5 className='fw-n'>{trn.certHd_1[2]}: <label className='fw-b'>{content[0].registration}</label></h5></Col>
                </Row>
                <Row className='txt-c border p-1 fw-b bg-cold'>
                    <Col xs={24} sm={8} md={4} lg={3} xl={3} xxl={3}>{trn.certCl_1[0]}</Col>
                    <Col xs={24} sm={16} md={6} lg={8} xl={8} xxl={9}>{trn.certCl_1[1]}</Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={2}>{trn.certCl_1[2]}</Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={2}>{trn.certCl_1[3]}</Col>
                    <Col xs={24} sm={24} md={6} lg={7} xl={7} xxl={8}>{trn.certCl_1[4]}</Col>
                </Row>
                {content.map(cnt => <Row className='txt-c border p-1'>
                    <Col xs={24} sm={8} md={4} lg={3} xl={3} xxl={3}>{cnt.id_public}</Col>
                    <Col xs={24} sm={16} md={6} lg={8} xl={8} xxl={9}>{getFun1(cnt.fun_1)}</Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={2}>{getDates(cnt)[0]}</Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={2}>{getDates(cnt)[1]}</Col>
                    <Col xs={24} sm={24} md={6} lg={7} xl={7} xxl={8}>{cnt.roles}</Col>
                </Row>)}
            </Grid>
        </>
    };

    let COMPONENT_CERT = <TABLE_COMPONENT
        title={trn.tableHd}
        titleIcon={<DocPassIcon style={{ fontSize: '24px' }} className="text-warning" />}
        columns={columns}
        data={data}
        load={load == 0}
        search={[]}
        expand={COMPONENT_EXPAND}
    />
    // ******************************** APIS ****************************** //
    function loadData() {
        SERVICE_CERTIFICATIONS.findAll()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else setData(response.data)
            }).catch(e => console.log(e)).finally(() => setLoad(1));
    }
    function loadDataProfContent() {
        SERVICE_CERTIFICATIONS.findProf(dataProf.id_number)
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else if (response.data.length == 0) setDataProfContent(null)
                else setDataProfContent(response.data)
            }).catch(e => console.log(e)).finally(() => setLoadProf(1));
    }

    function loadDataFunContent() {
        SERVICE_CERTIFICATIONS.findFun(dataFunContent.id_public)
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else if (response.data.length == 0) setDataFunContent(null)
                else setDataFunContent(response.data)
            }).catch(e => console.log(e)).finally(() => setLoadFun(1));
    }

    function createProf(prof) {
        let formData = new FormData();
        formData.append('lang', lang);
        formData.append('id', prof[0].id_number);
        formData.append('related', 'prof');
        ALERT_WAIT(lang);
        SERVICE_CERTIFICATIONS.create(formData)
            .then(response => {
                if (response.data === 'OK') ALERT_SUCCESS(lang);
                else if (response.data === 'NO PERMIT') ALERT_NO_PERMIT(lang);
                else ALERT_ERROR(lang);
            }).catch(e => console.log(e)).finally(() => { setLoad(0); setModal(false); setDataProfContent(null) });
    }

    function createFun(fun) {
        let formData = new FormData();
        formData.append('lang', lang);
        formData.append('id', fun.id_public);
        formData.append('related', 'fun');
        formData.append('id_related', fun.id_public);
        ALERT_WAIT(lang);
        SERVICE_CERTIFICATIONS.create(formData)
            .then(response => {
                if (response.data === 'OK') ALERT_SUCCESS(lang);
                else if (response.data === 'NO PERMIT') ALERT_NO_PERMIT(lang);
                else ALERT_ERROR(lang);
            }).catch(e => console.log(e)).finally(() => { setLoad(0); setModal(false); setDataFunContent(null) });
    }

    function genPDF(data) {
        let formData = new FormData()
        formData.append('oc', data.id_public)
        formData.append('lang', lang)
        formData.append('docname', 'Certification.pdf')
        ALERT_WAIT(lang);
        SERVICE_CERTIFICATIONS.genPDF(formData)
            .then(response => {
                if (response.data.length == 0) return ALERT_ERROR(lang)
                const file = new File([response.data], 'Certs.pdf', { type: response.headers['content-type'] });
                const urlFile = window.URL.createObjectURL(file);
                window.open(urlFile, '_blank');
            }).catch(e => console.log(e));
    }

    return (
        <div className='my-3'>
            <Row className="text-center" style={{ width: '100%' }}>
                <h3>{trn.title} <BTN_HELP title={trn.btn_help_tile} text={trn.btn_help_body} page={trn.HELP_PAGE} /></h3>
            </Row>
            <Button icon="add" intent="success" text={btn.new} onClick={() => setModal(!modal)} />

            <MODAL
                open={modal}
                setOpen={setModal}
                title={trn.newCert}
                icon={<Icon icon={'add'} intent={'success'} size="25" />}
                size="lg"
            >
                {MODAL_CONTENT()}
            </MODAL>

            {COMPONENT_CERT}
        </div>
    );
}
