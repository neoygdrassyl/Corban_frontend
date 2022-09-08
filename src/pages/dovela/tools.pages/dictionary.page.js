import React, { useContext, useEffect, useState } from 'react';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider';
import SERVICE_COMPANY from '../../../services/apis/company.services';
import SERVICE_FUN from '../../../services/apis/fun.service';

// COMPONENTS
import TABLE_COMPONENT from '../../../resources/customs/components/table.component';
import BTN_HELP from '../../../resources/customs/components/btnHelp.component';
import { ALERT_NO_PERMIT } from '../../../resources/customs/utils/notifications.vars';
import { Badge, Col, Nav, Row, Tag, TagGroup } from 'rsuite';
import { GET_FUN_STATE } from '../../../resources/customs/utils/lamdas.functions';

// ICONS
import TableIcon from '@rsuite/icons/Table';
import PageIcon from '@rsuite/icons/Page';
import DocPassIcon from '@rsuite/icons/DocPass';
import PeoplesIcon from '@rsuite/icons/Peoples';
import TagIcon from '@rsuite/icons/Tag';
import HomeIcon from '@rsuite/icons/legacy/Home';


import FUN_SS_CODES from '../../../resources/jsons/funCodes.json'
import FUN_T_CODES from '../../../resources/jsons/fun6DocsList.json'
import GRID from '../../../resources/customs/components/grid.component';
import { formsParser1 } from '../../../resources/customs/utils/funParser.module';
import VIEWER from '../../../resources/customs/components/viewer.component';
import NON_IDEAL_STATE from '../../../resources/customs/components/nonideal.component';
import FUN_GEN from '../../../resources/customs/components/fun.components/funGen.component';

var moment = require('moment');

export default function DICTIONARY() {
    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const serial = conn.technicalInfo.serials ? conn.technicalInfo.serials.process : false;

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('dictioary');
    const btn = utilities.getTranslation('btns');
    const funt = utilities.getTranslation('fun');
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
                name: trn.lic_th[0],
                minWidth: '30%',
                width: '15%',
                selector: row => row.id_public,
                cell: row => <FUN_GEN id_public={row.id_public} type='tag' tagText={row.id_public.substr(-7)}/>,
            },
            {
                name: trn.lic_th[1],
                minWidth: '30%',
                width: '15%',
                selector: row => GET_FUN_STATE(row.state, lang, true),
                cell: row => GET_FUN_STATE(row.state, lang, false),
            },
            {
                name: trn.lic_th[2],
                minWidth: '40%',
                width: '70%',
                selector: row => formsParser1(row.fun_1s[0], lang),
                cell: row => formsParser1(row.fun_1s[0], lang),
            },
        ]

        if (dataLic === -1) return <NON_IDEAL_STATE type="no_config" link="/dconfig" />
        return <TABLE_COMPONENT
            title={trn.dicts[0]}
            titleIcon={<PageIcon style={{ fontSize: '24px' }} className="text-success" />}
            columns={columns}
            data={dataLic}
            load={loadLic == 0}
            search={[]}
            headerColor={'LightGreen'}
            csv
        />
    }
    let COMPONENT_OA = () => {
        const columns = [
            {
                name: trn.oa_th[0],
                selector: row => row.id_public,
                cell: row => <FUN_GEN id_public={row.id_public} type='tag' tagColor="violet" tagText={row.id_public}/>,
            },
            {
                name: trn.oa_th[1],
                selector: row => GET_FUN_STATE(row.state, lang, true),
                cell: row => GET_FUN_STATE(row.state, lang, false),
            },
            {
                name: trn.oa_th[2],
                minWidth: '40%',
                width: '70%',
                selector: row => formsParser1(row.fun_1s[0], lang),
                cell: row => formsParser1(row.fun_1s[0], lang),
            },
        ]

        if (loadOa === -1) return <NON_IDEAL_STATE type="no_config" link="/dconfig" />
        return <TABLE_COMPONENT
            title={trn.dicts[1]}
            titleIcon={<PageIcon style={{ fontSize: '24px' }} className="text-primary" />}
            columns={columns}
            data={dataOa}
            load={loadOa == 0}
            search={[]}
            headerColor={'lightblue'}
            csv
        />
    }
    let COMPONENT_IN = () => {
        const columns = [
            {
                name: trn.in_th[0],
                selector: row => row.id_related,
                cell: row => row.id_related,
            },
            {
                name: trn.in_th[1],
                selector: row => row.type,
                cell: row => row.type,
            },
            {
                name: trn.in_th[2],
                selector: row => row.date + ' ' + (row.time || ''),
                cell: row => row.date + ' ' + (row.time || ''),
            },
        ]

        if (dataIn === -1) return <NON_IDEAL_STATE type="no_config" link="/dconfig" />
        return <GRID
            title={trn.dicts[2]}
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
                name: trn.out_th[0],
                selector: row => row.id,
                cell: row => row.id,
            },
            {
                name: trn.out_th[1],
                selector: row => funt.cubs[row.res] || '',
                cell: row => funt.cubs[row.res] || '',
            },
        ]

        if (dataOut === -1) return <NON_IDEAL_STATE type="no_config" link="/dconfig" />
        return <GRID
            title={trn.dicts[3]}
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
                name: trn.res_th[0],
                selector: row => row.fun_0.id_public,
                cell: row => row.fun_0.id_public,
            },
            {
                name: trn.res_th[1],
                selector: row => GET_FUN_STATE(row.fun_0.state, lang, true),
                cell: row => GET_FUN_STATE(row.fun_0.state, lang, false),
            },
            {
                name: trn.res_th[2],
                selector: row => formsParser1(row.fun_0.fun_1s[0] || {}, lang),
                cell: row => formsParser1(row.fun_0.fun_1s[0] || {}, lang),
            },
        ]

        if (dataRes === -1) return <NON_IDEAL_STATE type="no_config" link="/dconfig" />
        return <GRID
            title={trn.dicts[4]}
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
                name: trn.cert_th[0],
                selector: row => row.id_public,
                cell: row => row.id_public,
            },
            {
                name: trn.cert_th[1],
                minWidth: '40%',
                width: '60%',
                selector: row => row.description,
                cell: row => row.description,
            },
            {
                name: trn.cert_th[2],
                selector: row => moment(row.createdAt).format('YYYY-MM-DD HH:mm'),
                cell: row => moment(row.createdAt).format('YYYY-MM-DD HH:mm'),
            },
            {
                name: trn.cert_th[3],
                selector: row => row.id_related || '',
                ignoreCSV: true,
                cell: row => row.id_related,
            },
        ]

        if (dataCert === -1) return <NON_IDEAL_STATE type="no_config" link="/dconfig" />
        return <TABLE_COMPONENT
            title={trn.dicts[5]}
            titleIcon={<DocPassIcon style={{ fontSize: '24px' }} className="text-warning" />}
            columns={columns}
            data={dataCert}
            load={loadCert == 0}
            search={[]}
            headerColor={'lightyellow'}
            csv
        />
    }
    let COMPONENT_TIT = () => {
        const columns = [
            {
                name: trn.tit_th[0],
                selector: row => row.name + ' ' + row.surname,
                cell: row => row.name + ' ' + row.surname,
            },
            {
                name: trn.tit_th[1],
                width: '10%',
                selector: row => row.id_number,
                cell: row => row.id_number,
            },
            {
                name: trn.tit_th[2],
                selector: row => row.email,
                cell: row => row.email,
            },
            {
                name: trn.tit_th[3],
                width: '10%',
                selector: row => row.nunber,
                cell: row => row.nunber,
            },
            {
                name: trn.tit_th[4],
                selector: row => row.rep_name,
                cell: row => row.rep_name,
            },
            {
                name: trn.tit_th[5],
                selector: row => row.id_related,
                cell: row => {
                    if (!row.id_related) return ''
                    let array = row.id_related.split(', ')
                    return <TagGroup className='fw-b'>
                        {array.map(a => {
                            let text = a;
                            if (serial && a.includes(serial)) return <FUN_GEN id_public={text} type='tag' tagText={text.substr(-7)}/>
                            return  <FUN_GEN  id_public={text} type='tag' tagText={text} tagColor="violet"/>
                        })}
                    </TagGroup>
                },
            },
        ]

        if (dataTit === -1) return <NON_IDEAL_STATE type="no_config" link="/dconfig" />
        return <TABLE_COMPONENT
            title={trn.dicts[6]}
            titleIcon={<PeoplesIcon style={{ fontSize: '24px' }} className="text-info" />}
            columns={columns}
            data={dataTit}
            load={loadTit == 0}
            search={[]}
            headerColor={'lightcyan'}
            csv desc
        />
    }
    let COMPONENT_PROF = () => {
        const columns = [
            {
                name: trn.prof_th[0],
                selector: row => row.name + ' ' + row.surname,
                cell: row => row.name + ' ' + row.surname,
            },
            {
                name: trn.prof_th[1],
                width: '10%',
                selector: row => row.id_number,
                cell: row => row.id_number,
            },
            {
                name: trn.prof_th[2],
                selector: row => row.email,
                cell: row => row.email,
            },
            {
                name: trn.prof_th[3],
                width: '10%',
                selector: row => row.number,
                cell: row => row.number,
            },
            {
                name: trn.prof_th[4],
                selector: row => row.registration,
                cell: row => row.registration,
            },
            {
                name: trn.prof_th[5],
                width: '10%',
                cell: row => {
                    if (!row.docs) return ''
                    let ids = row.docs.split(',');
                    let intents = ['primary', 'success', 'warning', 'danger', 'primary'];
                    let docNames = trn.prof_docs
                    return <>{ids.map((id, i) => {
                        if (id > 0) return <VIEWER icon="id-number" api={loadFun6} apiID={id} intent={intents[i]} text={docNames[i]} filename={docNames[i]} />
                        else return '';
                    }

                    )}</>
                },

            },
            {
                name: trn.prof_th[6],
                selector: row => row.id_related,
                cell: row => {
                    if (!row.id_related) return ''
                    let array = row.id_related.split(', ')
                    return <TagGroup className='fw-b'>
                        {array.map(a => {
                            let text = a;
                            if (serial && a.includes(serial)) return <FUN_GEN id_public={text} type='tag' tagText={text.substr(-7)}/>
                            return  <FUN_GEN  id_public={text} type='tag' tagText={text} tagColor="violet"/>
                        })}
                    </TagGroup>
                },
            },
        ]

        if (dataProf === -1) return <NON_IDEAL_STATE type="no_config" link="/dconfig" />
        return <TABLE_COMPONENT
            title={trn.dicts[7]}
            titleIcon={<PeoplesIcon style={{ fontSize: '24px' }} className="text-danger" />}
            columns={columns}
            data={dataProf}
            load={loadProf == 0}
            search={[]}
            headerColor={'LightPink'}
            csv desc
        />
    }
    let COMPONENT_PREV = () => {
        const columns = [
            {
                name: trn.prev_th[0],
                width: '30%',
                selector: row => row.direccion,
                cell: row => row.direccion,
            },
            {
                name: trn.prev_th[1],
                selector: row => row.matricula,
                cell: row => row.matricula,
            },
            {
                name: trn.prev_th[2],
                selector: row => row.catastral,
                cell: row => row.catastral,
            },
            {
                name: trn.prev_th[3],
                selector: row => row.catastral_2,
                cell: row => row.catastral_2,
            },
            {
                name: trn.prev_th[4],
                width: '10%',
                selector: row => trn.prev_th[4] + ' ' + row.estrato,
                cell: row => row.estrato,
            },
            {
                name: trn.prev_th[5],
                selector: row => row.barrio,
                cell: row => row.barrio,
            },
            {
                name: trn.prev_th[6],
                selector: row => row.id_related,
                cell: row => {
                    if (!row.id_related) return ''
                    let array = row.id_related.split(', ')
                    return <TagGroup className='fw-b'>
                        {array.map(a => {
                            let text = a;
                            if (serial && a.includes(serial)) return <FUN_GEN id_public={text} type='tag' tagText={text.substr(-7)}/>
                            return  <FUN_GEN  id_public={text} type='tag' tagText={text} tagColor="violet"/>
                        })}
                    </TagGroup>
                },
            },
        ]

        if (dataPrev === -1) return <NON_IDEAL_STATE type="no_config" link="/dconfig" />
        return <TABLE_COMPONENT
            title={trn.dicts[8]}
            titleIcon={<HomeIcon style={{ fontSize: '24px' }} className="text-paranoia" />}
            columns={columns}
            data={dataPrev}
            load={loadPrev == 0}
            search={[]}
            headerColor={'Plum'}
            csv desc
        />
    }
    let COMPONENT_SS = () => {
        const columns = [
            {
                name: trn.ss_th[0],
                selector: row => row.code,
                cell: row => row.code,
            },
            {
                name: trn.ss_th[1],
                minWidth: '50%',
                width: '80%',
                selector: row => row.name,
                cell: row => row.name,
            },
        ]

        return <TABLE_COMPONENT
            title={trn.dicts[9]}
            titleIcon={<TagIcon style={{ fontSize: '24px' }} className="text-cold" />}
            columns={columns}
            data={dataCodesSS}
            load={load == 0}
            search={[]}
            headerColor={'PowderBlue'}
            csv desc
        />
    }
    let COMPONENT_T = () => {
        const columns = [
            {
                name: trn.t_th[0],
                selector: row => row.code,
                cell: row => row.code,
            },
            {
                name: trn.t_th[1],
                minWidth: '50%',
                width: '80%',
                selector: row => row.name,
                cell: row => row.name,
            },
        ]

        return <TABLE_COMPONENT
            title={trn.dicts[10]}
            titleIcon={<TagIcon style={{ fontSize: '24px' }} className="text-blood" />}
            columns={columns}
            data={dataCodesT}
            load={load == 0}
            search={[]}
            headerColor={'LightCoral'}
            csv desc
        />
    }
    // ******************************** APIS ****************************** //
    function loadDataLic() {
        SERVICE_COMPANY.get_dic_lic()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else if (response.data == 'NO CONFIG') setDataLic(-1)
                else setDataLic(response.data)
            }).catch(e => console.log(e)).finally(() => setLoadLic(1));
    }
    function loadDataOa() {
        SERVICE_COMPANY.get_dic_oa()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else if (response.data == 'NO CONFIG') setDataOa(-1)
                else setDataOa(response.data)
            }).catch(e => console.log(e)).finally(() => setLoadOa(1));
    }
    function loadDataIn() {
        SERVICE_COMPANY.get_dic_in()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else if (response.data == 'NO CONFIG') setDataIn(-1)
                else setDataIn(response.data)
            }).catch(e => console.log(e)).finally(() => setLoadIn(1));
    }
    function loadDataOut() {
        SERVICE_COMPANY.get_dic_out()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else if (response.data == 'NO CONFIG') setDataOut(-1)
                else setDataOut(response.data)
            }).catch(e => console.log(e)).finally(() => setLoadOut(1));
    }
    function loadDataRes() {
        SERVICE_COMPANY.get_dic_res()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else if (response.data == 'NO CONFIG') setDataRes(-1)
                else setDataRes(response.data)
            }).catch(e => console.log(e)).finally(() => setLoadRes(1));
    }
    function loadDataCert() {
        SERVICE_COMPANY.get_dic_cert()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else if (response.data == 'NO CONFIG') setDataCert(-1)
                else setDataCert(response.data)
            }).catch(e => console.log(e)).finally(() => setLoadCert(1));
    }
    function loadDataTit() {
        SERVICE_COMPANY.get_dic_tit()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else if (response.data == 'NO CONFIG') setDataTit(-1)
                else setDataTit(response.data)
            }).catch(e => console.log(e)).finally(() => setLoadTit(1));
    }
    function loadDataProf() {
        SERVICE_COMPANY.get_dic_prof()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else if (response.data == 'NO CONFIG') setDataProf(-1)
                else setDataProf(response.data)
            }).catch(e => console.log(e)).finally(() => setLoadProf(1));
    }
    function loadDataPrev() {
        SERVICE_COMPANY.get_dic_prev()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else if (response.data == 'NO CONFIG') setDataPrev(-1)
                else setDataPrev(response.data)
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

    function loadFun6(id) {
        return SERVICE_FUN.loadFun6(id)
    }

    return (
        <div className='my-3'>

            <Row className="text-center" style={{ width: '100%' }}>
                <h3>{trn.title} <BTN_HELP title={trn.btn_help_tile} text={trn.btn_help_body} page={trn.HELP_PAGE} /></h3>
            </Row>

            <Row >
                <Col xs={24} sm={24} md={4} lg={3} xl={3} xxl={2}>
                    <Nav activeKey={active} onSelect={setActive} style={{ marginBottom: 50 }} appearance="tabs" vertical>
                        <Nav.Item eventKey="lic" icon={<PageIcon />}>{trn.dicts[0]}</Nav.Item>
                        <Nav.Item eventKey="oa" icon={<PageIcon />}>{trn.dicts[1]}</Nav.Item>
                        <Nav.Item eventKey="in" icon={<TableIcon />}>{trn.dicts[2]}</Nav.Item>
                        <Nav.Item eventKey="out" icon={<TableIcon />}>{trn.dicts[3]}</Nav.Item>
                        <Nav.Item eventKey="res" icon={<TableIcon />}>{trn.dicts[4]}</Nav.Item>
                        <Nav.Item eventKey="cert" icon={<DocPassIcon />}>{trn.dicts[5]}</Nav.Item>
                        <Nav.Item eventKey="tit" icon={<PeoplesIcon />}>{trn.dicts[6]}</Nav.Item>
                        <Nav.Item eventKey="prof" icon={<PeoplesIcon />}>{trn.dicts[7]}</Nav.Item>
                        <Nav.Item eventKey="prev" icon={<HomeIcon />}>{trn.dicts[8]}</Nav.Item>
                        <Nav.Item eventKey="ss" icon={<TagIcon />}>{trn.dicts[9]}</Nav.Item>
                        <Nav.Item eventKey="tip" icon={<TagIcon />}>{trn.dicts[10]}</Nav.Item>
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
