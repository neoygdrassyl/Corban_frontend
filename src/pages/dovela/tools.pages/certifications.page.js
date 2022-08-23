import React, { useContext, useEffect, useState } from 'react';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider';
import SERVICE_CERTIFICATIONS from '../../../services/apis/dcertification.service';
import SERVICE_FUN from '../../../services/apis/fun.service';

// COMPONENTS
import TABLE_COMPONENT from '../../../resources/customs/components/table.component';
import BTN_HELP from '../../../resources/customs/components/btnHelp.component';
import { ALERT_NO_PERMIT } from '../../../resources/customs/utils/notifications.vars';
import { AutoComplete, Badge, Col, Grid, InputGroup, Loader, Nav, Row } from 'rsuite';
import { GET_FUN_STATE, GET_JSON_FULL } from '../../../resources/customs/utils/lamdas.functions';

// ICONS
import TableIcon from '@rsuite/icons/Table';
import PageIcon from '@rsuite/icons/Page';
import DocPassIcon from '@rsuite/icons/DocPass';
import PeoplesIcon from '@rsuite/icons/Peoples';
import TagIcon from '@rsuite/icons/Tag';
import HomeIcon from '@rsuite/icons/legacy/Home';
import MemberIcon from '@rsuite/icons/Member';


import FUN_SS_CODES from '../../../resources/jsons/funCodes.json'
import FUN_T_CODES from '../../../resources/jsons/fun6DocsList.json'
import GRID from '../../../resources/customs/components/grid.component';
import { formsParser1 } from '../../../resources/customs/utils/funParser.module';
import VIEWER from '../../../resources/customs/components/viewer.component';
import NON_IDEAL_STATE from '../../../resources/customs/components/nonideal.component';
import BTN_DOWNLOAD from '../../../resources/customs/components/btnDownload.component';
import MODAL from '../../../resources/customs/components/modal.component';
import { Button, Icon } from '@blueprintjs/core';
import DATALIST_API from '../../../resources/customs/components/form.components/datalistAPI.component';

var moment = require('moment');

// TRANSLATE PAGE

export default function CERTIFICATIONS() {
    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('dcerts');
    const btn = utilities.getTranslation('btns');
    const lang = utilities.lang;

    var [load, setLoad] = useState(0);
    var [data, setData] = useState([]);
    var [modal, setModal] = useState(false);
    var [active, setActive] = useState('prof');

    useEffect(() => {
        if (load == 0 || load == 2) loadData();
    }, [load]);

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

    const COMPONENT_EXPAND = ({ data }) => {
        let content = GET_JSON_FULL(data.content)
        if (data.id_related) return <>
            <Grid fluid>
                <Row className='txt-c border p-2'>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[0]}: <label className='fw-b'>{content.id_public}</label></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[1]}: <label className='fw-b'>{content.type}</label></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[2]}: <label className='fw-b'>{content.state}</label></Col>
                </Row>
                <Row className='txt-c border p-2'>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[3]}: <label className='fw-b'>{content.address}</label></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[4]}: <label className='fw-b'>{content.city}</label></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[5]}: <label className='fw-b'>{content.county}</label></Col>
                </Row>
                <Row className='txt-c border p-2'>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[6]}: <label className='fw-b'>{content.matricula}</label></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[7]}: <label className='fw-b'>{content.predial}</label></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[8]}: <label className='fw-b'></label></Col>
                </Row>
                <Row className='txt-c border p-2'>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[9]}: <label className='fw-b'>{content.name}</label></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[10]}: <label className='fw-b'>{content.id_number}</label></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>{trn.cert_2[11]}: <label className='fw-b'>{content.role}</label></Col>
                </Row>
            </Grid>
        </>
        if (!data.id_related) return <>
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

    let MODAL_CONTENT = () => {
        return <>
            <Nav activeKey={active} onSelect={setActive} style={{ marginBottom: 50 }} appearance="tabs">
                <Nav.Item eventKey="prof" icon={<DocPassIcon />}>{'profesional cert'}</Nav.Item>
                <Nav.Item eventKey="fun" icon={<DocPassIcon />}>{'process cert'}</Nav.Item>
            </Nav>

            {active == 'prof' ? COMPONENT_PROF() : ''}
            {active == 'fun' ? 'fun!!' : ''}
        </>
    }

    let COMPONENT_PROF = () => {
        return <>
            <DATALIST_API
                api={SERVICE_CERTIFICATIONS.findProfS} icon={<MemberIcon />}
                onSelect={e => console.log(e)}
                filterBy={(str, item) => {
                    let names = str.trim().split(' ').map(name => name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase());
                    let idNormalized = String(str.trim()).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                    return names.some(name => item.label.includes(name)) || idNormalized == item.id;
                }}
                model={{
                    value: d => String(d.name.trim() + ' ' + d.surname.trim()).toUpperCase(),
                    label: d => String(d.name.trim() + ' ' + d.surname.trim()).toUpperCase(),
                    id: d => d.id_number
                }}
            />

        </>
    }
    // ******************************** APIS ****************************** //
    function loadData() {
        SERVICE_CERTIFICATIONS.findAll()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else setData(response.data)
            }).catch(e => console.log(e)).finally(() => setLoad(1));
    }


    function genPDF(data) {
        let formData = new FormData()
        formData.append('oc', data.id_public)
        formData.append('lang', lang)
        formData.append('docname', 'Certification.pdf')

        SERVICE_CERTIFICATIONS.genPDF(formData)
            .then(response => {
                if (response.data.length == 0) return console.log('NO PDF')
                const file = new File([response.data], 'Certs.pdf', { type: response.headers['content-type'] });
                const urlFile = window.URL.createObjectURL(file);
                window.open(urlFile, '_blank');
            }).catch(e => console.log(e));
    }

    return (
        <div className='my-3'>
            <Row className="text-center" style={{ width: '100%' }}>
                <h3>{trn.title} <BTN_HELP title={'btn'} text={'btn2'} page={[]} /></h3>
            </Row>
            <Button icon="add" intent="success" text={btn.new} onClick={() => setModal(!modal)} />

            <MODAL
                open={modal}
                setOpen={setModal}
                title={'new cert'}
                icon={<Icon icon={'add'} intent={'success'} size="25" />}
                size="lg"
            >
                {MODAL_CONTENT()}
            </MODAL>

            {COMPONENT_CERT}
        </div>
    );
}
