import React, { useContext, useEffect, useState } from 'react';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider';
import SERVICE_COMPANY from '../../../services/apis/company.services';

// COMPONENTS
import TABLE_COMPONENT from '../../../resources/customs/components/table.component';
import NON_IDEAL_STATE from '../../../resources/customs/components/nonideal.component';
import BTN_HELP from '../../../resources/customs/components/btnHelp.component';
import { ALERT_ERROR, ALERT_NO_PERMIT, ALERT_WAIT } from '../../../resources/customs/utils/notifications.vars';
import { Col, FlexboxGrid, Grid, IconButton, Nav, Panel, Row, toaster } from 'rsuite';
import { CONVERT_INT_TO_MONEY, GET_FUN_STATE, GET_JSON_FULL } from '../../../resources/customs/utils/lamdas.functions';
import { Button, FormGroup, NonIdealState, NumericInput } from '@blueprintjs/core';
import SELECT from '../../../resources/customs/components/form.components/select.compontnt';
import TEMPLATES_BODY from '../temaplates.pages/body.template';
import BTN_DOWNLOAD from '../../../resources/customs/components/btnDownload.component';
import TUTORIAL from '../../../resources/customs/components/tutorial.component';

// ICONS
import { AiTwotoneStar } from 'react-icons/ai'
import MessageIcon from '@rsuite/icons/Message';
import CloseOutlineIcon from '@rsuite/icons/CloseOutline';
import MinusIcon from '@rsuite/icons/Minus';
import TableIcon from '@rsuite/icons/Table';
import PageIcon from '@rsuite/icons/Page';
import DocPassIcon from '@rsuite/icons/DocPass';
import PeoplesIcon from '@rsuite/icons/Peoples';
import TagIcon from '@rsuite/icons/Tag';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { formsParser1 } from '../../../resources/customs/utils/funParser.module';

import FUN_SS_CODES from '../../../resources/jsons/funCodes.json'
import FUN_T_CODES from '../../../resources/jsons/fun6DocsList.json'
import GRID from '../../../resources/customs/components/grid.component';

var moment = require('moment');

export default function DICTIONARY() {
    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('dcalc');
    const btn = utilities.getTranslation('btns');
    const lang = utilities.lang;


    var [active, setActive] = React.useState('lic');
    var [load, setLoad] = useState(0);

    var [dataLic, setDataLic] = useState([]);
    var [loadLic, setLoadLic] = useState(0);

    var [dataOa, setDataOa] = useState([]);
    var [loadOa, setLoadOa] = useState(0);

    var [dataIn, setDataIn] = useState([]);
    var [loadIn, setLoadIn] = useState(0);

    var [dataOut, setDataOut] = useState([]);
    var [loadOut, setLoadOut] = useState(0);

    var [dataRes, setDataRes] = useState([]);
    var [loadRes, setLoadRes] = useState(0);

    var [dataCert, setDataCert] = useState([]);
    var [loadCert, setLoadCert] = useState(0);

    var [dataTit, setDataTit] = useState([]);
    var [loadTit, setLoadTit] = useState(0);

    var [dataProf, setDataProf] = useState([]);
    var [loadProf, setLoadProf] = useState(0);

    var [dataPrev, setDataPrev] = useState([]);
    var [loadPrev, setLoadPrev] = useState(0);

    var [dataCodesSS, setDataCodesSS] = useState([]);
    var [dataCodesT, setDataCodesT] = useState([]);


    useEffect(() => {
        if (load == 0 || load == 2) {
            loadDataLic();
            loadDataOa();
            loadDataIn();
            loadDataOut();
            loadDataRes();
            loadDataCert();
            loadDataTit();
            loadDataProf();
            loadDataPrev();
            coverCodes();
            setLoad(1);
        }
    }, [load]);

    // *************************** FUNCTIONS **************************** //

    // *************************** JXS ELEMENTS **************************** //
    let COMPONENT_LIC = () => {
        const columns = [
            {
                name: 'LIC_0',
                minWidth: '30%',
                width: '15%',
                selector: row => row.id_public,
                cell: row => row.id_public,
            },
            {
                name: 'LIC_01',
                minWidth: '30%',
                width: '15%',
                selector: row => GET_FUN_STATE(row.state, lang, true),
                cell: row => GET_FUN_STATE(row.state, lang, false),
            },
            {
                name: 'LIC_02',
                minWidth: '40%',
                width: '70%',
                selector: row => formsParser1(row.fun_1s[0]),
                cell: row => formsParser1(row.fun_1s[0]),
            },
        ]

        return <TABLE_COMPONENT
            title={'LICENCIAS'}
            titleIcon={<PageIcon style={{ fontSize: '24px' }} className="text-success" />}
            columns={columns}
            data={dataLic}
            load={loadLic == 0}
            search={[]}
            headerColor={'LightGreen'}
        />
    }
    let COMPONENT_OA = () => {
        const columns = [
            {
                name: 'LIC_0',
                selector: row => row.id_public,
                cell: row => row.id_public,
            },
            {
                name: 'LIC_01',
                selector: row => GET_FUN_STATE(row.state, lang, true),
                cell: row => GET_FUN_STATE(row.state, lang, false),
            },
            {
                name: 'LIC_02',
                minWidth: '40%',
                width: '70%',
                selector: row => formsParser1(row.fun_1s[0]),
                cell: row => formsParser1(row.fun_1s[0]),
            },
        ]

        return <TABLE_COMPONENT
            title={'OTRAS ACTUACIONES'}
            titleIcon={<PageIcon style={{ fontSize: '24px' }} className="text-primary" />}
            columns={columns}
            data={dataOa}
            load={loadOa == 0}
            search={[]}
            headerColor={'lightblue'}
        />
    }
    let COMPONENT_IN = () => {
        const columns = [
            {
                name: '01',
                selector: row => row.id_related,
                cell: row => row.id_related,
            },
            {
                name: '02',
                selector: row => row.type,
                cell: row => row.type,
            },
            {
                name: '03',
                selector: row => row.date + ' ' + (row.time || ''),
                cell: row => row.date + ' ' + (row.time || ''),
            },
        ]

        return <GRID
            title={'CONCECUTIVOS DE ENTRADA'}
            cellText={'id_public'}
            titleIcon={<TableIcon style={{ fontSize: '24px' }} />}
            data={dataIn}
            columns={columns}
            search={[]}
            headerColor={'PeachPuff'} />
    }
    let COMPONENT_OUT = () => {
        const columns = [
            {
                name: '01',
                selector: row => row.id,
                cell: row => row.id,
            },
            {
                name: '02',
                selector: row => row.res,
                cell: row => row.res,
            },
        ]

        return <GRID
            title={'CONCECUTIVOS DE SALIDA'}
            cellText={'cub'}
            titleIcon={<TableIcon style={{ fontSize: '24px' }} />}
            data={dataOut}
            columns={columns}
            search={[]}
            headerColor={'DarkSeaGreen'} />
    }
    let COMPONENT_RES = () => {
        const columns = [
            {
                name: '01',
                selector: row =>row.fun_0.id_public,
                cell: row => row.fun_0.id_public,
            },
            {
                name: '02',
                selector: row => GET_FUN_STATE(row.fun_0.state, lang, true),
                cell: row => GET_FUN_STATE(row.fun_0.state, lang, false),
            },
            {
                name: '03',
                selector: row => formsParser1(row.fun_0.fun_1s[0] || {}),
                cell: row => formsParser1(row.fun_0.fun_1s[0] || {}),
            },
        ]

        return <GRID
            title={'CONCECUTIVOS DE RESOLUCIONES'}
            cellText={'id_public'}
            titleIcon={<TableIcon style={{ fontSize: '24px' }} />}
            data={dataRes.filter(d => d.id_public.length > 0)}
            columns={columns}
            search={[]}
            headerColor={'Lavender'} />
    }
    let COMPONENT_CERT = () => {
        const columns = [
            {
                name: 'LIC_0',
                selector: row => row.id_public,
                cell: row => row.id_public,
            },
            {
                name: 'LIC_01',
                minWidth: '40%',
                width: '70%',
                selector: row => row.description,
                cell: row => row.description,
            },
            {
                name: 'LIC_02',
                selector: row => row.id_related || '',
                cell: row => row.id_related,
            },
        ]

        return <TABLE_COMPONENT
            title={'CERTIFICACIONES'}
            titleIcon={<DocPassIcon style={{ fontSize: '24px' }} className="text-warning" />}
            columns={columns}
            data={dataCert}
            load={loadCert == 0}
            search={[]}
            headerColor={'lightyellow'}
        />
    }
    let COMPONENT_TIT = () => {
        const columns = [
            {
                name: '00',
                selector: row => row.name + ' ' + row.surname,
                cell: row => row.name + ' ' + row.surname,
            },
            {
                name: '01',
                selector: row => row.id_number,
                cell: row => row.id_number,
            },
            {
                name: '02',
                selector: row => row.email,
                cell: row => row.email,
            },
            {
                name: '03',
                selector: row => row.nunber,
                cell: row => row.nunber,
            },
            {
                name: '04',
                selector: row => row.rep_name,
                cell: row => row.rep_name,
            },
        ]

        return <TABLE_COMPONENT
            title={'TITULARES'}
            titleIcon={<PeoplesIcon style={{ fontSize: '24px' }} className="text-info" />}
            columns={columns}
            data={dataTit}
            load={loadTit == 0}
            search={[]}
            headerColor={'lightcyan'}
        />
    }
    let COMPONENT_PROF = () => {
        const columns = [
            {
                name: '00',
                selector: row => row.name + ' ' + row.surname,
                cell: row => row.name + ' ' + row.surname,
            },
            {
                name: '01',
                selector: row => row.id_number,
                cell: row => row.id_number,
            },
            {
                name: '02',
                selector: row => row.email,
                cell: row => row.email,
            },
            {
                name: '03',
                selector: row => row.number,
                cell: row => row.number,
            },
            {
                name: '04',
                selector: row => row.registration,
                cell: row => row.registration,
            },
            {
                name: '05',
                cell: row => row.docs,
            },
        ]

        return <TABLE_COMPONENT
            title={'PROFESIONALES'}
            titleIcon={<PeoplesIcon style={{ fontSize: '24px' }} className="text-danger" />}
            columns={columns}
            data={dataProf}
            load={loadProf == 0}
            search={[]}
            headerColor={'LightPink'}
        />
    }
    let COMPONENT_PREV = () => {
        const columns = [
            {
                name: '00',
                selector: row => row.direccion,
                cell: row => row.direccion,
            },
            {
                name: '01',
                selector: row => row.matricula,
                cell: row => row.matricula,
            },
            {
                name: '02',
                selector: row => row.catastral,
                cell: row => row.catastral,
            },
            {
                name: '03',
                selector: row => row.catastral_2,
                cell: row => row.catastral_2,
            },
            {
                name: '04',
                selector: row => row.estrato,
                cell: row => row.estrato,
            },
            {
                name: '05',
                selector: row => row.barrio,
                cell: row => row.barrio,
            },
        ]

        return <TABLE_COMPONENT
            title={'PREVIOS'}
            titleIcon={<HomeIcon style={{ fontSize: '24px' }} className="text-paranoia" />}
            columns={columns}
            data={dataPrev}
            load={loadPrev == 0}
            search={[]}
            headerColor={'Plum'}
        />
    }
    let COMPONENT_SS = () => {
        const columns = [
            {
                name: '00',
                selector: row => row.code,
                cell: row => row.code,
            },
            {
                name: '01',
                minWidth: '50%',
                width: '80%',
                selector: row => row.name,
                cell: row => row.name,
            },
        ]

        return <TABLE_COMPONENT
            title={'SERIES Y SUBSERIES'}
            titleIcon={<TagIcon style={{ fontSize: '24px' }} className="text-cold" />}
            columns={columns}
            data={dataCodesSS}
            load={load == 0}
            search={[]}
            headerColor={'PowderBlue'}
        />
    }
    let COMPONENT_T = () => {
        const columns = [
            {
                name: '00',
                selector: row => row.code,
                cell: row => row.code,
            },
            {
                name: '01',
                minWidth: '50%',
                width: '80%',
                selector: row => row.name,
                cell: row => row.name,
            },
        ]

        return <TABLE_COMPONENT
            title={'TIPOLOGIA DOCUMENTAL'}
            titleIcon={<TagIcon style={{ fontSize: '24px' }} className="text-blood" />}
            columns={columns}
            data={dataCodesT}
            load={load == 0}
            search={[]}
            headerColor={'LightCoral'}
        />
    }
    // ******************************** APIS ****************************** //
    function loadDataLic() {
        SERVICE_COMPANY.get_dic_lic()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else {
                    setDataLic(response.data)
                }
            }).catch(e => console.log(e)).finally(() => setLoadLic(1));
    }
    function loadDataOa() {
        SERVICE_COMPANY.get_dic_oa()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else {
                    setDataOa(response.data)
                }
            }).catch(e => console.log(e)).finally(() => setLoadOa(1));
    }
    function loadDataIn() {
        SERVICE_COMPANY.get_dic_in()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else {
                    setDataIn(response.data)
                }
            }).catch(e => console.log(e)).finally(() => setLoadIn(1));
    }
    function loadDataOut() {
        SERVICE_COMPANY.get_dic_out()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else {
                    setDataOut(response.data)
                }
            }).catch(e => console.log(e)).finally(() => setLoadOut(1));
    }
    function loadDataRes() {
        SERVICE_COMPANY.get_dic_res()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else {
                    setDataRes(response.data)
                }
            }).catch(e => console.log(e)).finally(() => setLoadRes(1));
    }
    function loadDataCert() {
        SERVICE_COMPANY.get_dic_cert()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else {
                    setDataCert(response.data)
                }
            }).catch(e => console.log(e)).finally(() => setLoadCert(1));
    }
    function loadDataTit() {
        SERVICE_COMPANY.get_dic_tit()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else {
                    setDataTit(response.data)
                }
            }).catch(e => console.log(e)).finally(() => setLoadTit(1));
    }
    function loadDataProf() {
        SERVICE_COMPANY.get_dic_prof()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else {
                    setDataProf(response.data)
                }
            }).catch(e => console.log(e)).finally(() => setLoadProf(1));
    }
    function loadDataPrev() {
        SERVICE_COMPANY.get_dic_prev()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else {
                    setDataPrev(response.data)
                }
            }).catch(e => console.log(e)).finally(() => setLoadPrev(1));
    }
    function coverCodes() {
        let codes_ss = [];
        let codes_t = [];

        for (const key in FUN_SS_CODES) {
            if (Object.hasOwnProperty.call(FUN_SS_CODES, key)) {
                const element = FUN_SS_CODES[key];
                codes_ss.push({ code: key, name: element })
            }
        }

        for (const key in FUN_T_CODES) {
            if (Object.hasOwnProperty.call(FUN_T_CODES, key)) {
                const element = FUN_T_CODES[key];
                codes_t.push({ code: key, name: element })
            }
        }
        setDataCodesSS(codes_ss);
        setDataCodesT(codes_t);
    }

    return (
        <div className='my-3'>

            <Row className="text-center" style={{ width: '100%' }}>
                <h3>{'THIS IS THE DICTIONARY!'} <BTN_HELP title={'TITLE'} text={'BODY'} page={[]} /></h3>
            </Row>

            <Row >
                <Col xs={24} sm={24} md={4} lg={3} xl={3} xxl={2}>
                    <Nav activeKey={active} onSelect={setActive} style={{ marginBottom: 50 }} appearance="tabs" vertical>
                        <Nav.Item eventKey="lic" icon={<PageIcon />}>LICENCIAS</Nav.Item>
                        <Nav.Item eventKey="oa" icon={<PageIcon />}>OTRAS ACTUACIONES</Nav.Item>
                        <Nav.Item eventKey="in" icon={<TableIcon />}>CONCECUTIVOS ENTRADA</Nav.Item>
                        <Nav.Item eventKey="out" icon={<TableIcon />}>CONCECUTIVOS SALIDA</Nav.Item>
                        <Nav.Item eventKey="res" icon={<TableIcon />}>CONSECUTIVOS RESOLUCION</Nav.Item>
                        <Nav.Item eventKey="cert" icon={<DocPassIcon />}>CERTIFICACIONES</Nav.Item>
                        <Nav.Item eventKey="tit" icon={<PeoplesIcon />}>TITULARES</Nav.Item>
                        <Nav.Item eventKey="prof" icon={<PeoplesIcon />}>PROFESIONALES</Nav.Item>
                        <Nav.Item eventKey="prev" icon={<HomeIcon />}>PREVIOS</Nav.Item>
                        <Nav.Item eventKey="ss" icon={<TagIcon />}>SERIES & SUBSERIES</Nav.Item>
                        <Nav.Item eventKey="tip" icon={<TagIcon />}>TIPOLOGIAS</Nav.Item>
                    </Nav>
                </Col>

                <Col xs={24} sm={24} md={20} lg={21} xl={21} xxl={22}>
                    {active == 'lic' ? COMPONENT_LIC() : ''}
                    {active == 'oa' ? COMPONENT_OA() : ''}
                    {active == 'in' ? COMPONENT_IN() : ''}
                    {active == 'out' ? COMPONENT_OUT() : ''}
                    {active == 'res' ? COMPONENT_RES() : ''}
                    {active == 'cert' ? COMPONENT_CERT() : ''}
                    {active == 'tit' ? COMPONENT_TIT() : ''}
                    {active == 'prof' ? COMPONENT_PROF() : ''}
                    {active == 'prev' ? COMPONENT_PREV() : ''}
                    {active == 'ss' ? COMPONENT_SS() : ''}
                    {active == 'tip' ? COMPONENT_T() : ''}
                </Col>
            </Row>

        </div>
    );
}
