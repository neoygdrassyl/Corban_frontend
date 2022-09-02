import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import FunService from '../../../services/apis/fun.service'
import { ALERT_NO_PERMIT } from '../../../resources/customs/utils/notifications.vars';
import NON_IDEAL_STATE from '../../../resources/customs/components/nonideal.component';
import TABLE_COMPONENT from '../../../resources/customs/components/table.component';
import BTN_HELP from '../../../resources/customs/components/btnHelp.component';

import { ImTable2 } from 'react-icons/im'
import { AiOutlineCheckSquare } from 'react-icons/ai'
import { TiFolderOpen } from 'react-icons/ti'
import DocPassIcon from '@rsuite/icons/DocPass';


import { Nav, Progress, Row, Tag, TagGroup } from 'rsuite';
import { Button, Icon } from '@blueprintjs/core';
import { formsParser1, regexChecker_isOA, regexChecker_isOA_2, regexChecker_isOA_3, regexChecker_isPh } from '../../../resources/customs/utils/funParser.module';
import { _GET_CLOCK_STATE } from '../../../resources/customs/utils/fun.loader';
import { dateParser_finalDate, dateParser_timePassed } from '../../../resources/customs/utils/utilsParse.module';
import { FIND_PERMIT, GET_FUN_STATE } from '../../../resources/customs/utils/lamdas.functions';
import PROGRESION_ICONS from './fun.component/progresionIcons.component';
import { Link } from 'react-router-dom';
import PROGRESION_BAR from './fun.component/progressionBar.component';
import MODAL from '../../../resources/customs/components/modal.component';
import FORM from '../../../resources/customs/components/form.component';

var moment = require('moment');

export default function FUN() {
    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const dvSerial = conn.technicalInfo.serials ? conn.technicalInfo.serials.process : false;

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('fun');
    const btn = utilities.getTranslation('btns');
    const lang = utilities.lang;

    const permits = conn.roles ?? [];
    const canView = FIND_PERMIT(permits, 'fun', 1);
    const cancreate = FIND_PERMIT(permits, 'fun', 2);
    //const canEdit = FIND_PERMIT(permits, 'fun', 3);
    const canDelete = FIND_PERMIT(permits, 'fun', 4);

    var [load, setLoad] = useState(0);
    var [data, setData] = useState([]);
    var [active, setActive] = useState('inc');
    var [modal, setModal] = useState(false);

    useEffect(() => {
        if (load == 0 || load == 2) loadData();
    }, [load]);
    // model, date, type, desc, rules
    let FORM_INPUTS = [
        {
            inputs: [
                {
                    label: 'id', placeholder: 'id', leftIcon: 'selection', fname: 'id', min: 3,
                    id: 'fun_form_id', req: true, dv: dvSerial,
                },
                {
                    label: 'type', placeholder: 'type', leftIcon: 'saved', fname: 'type',
                    id: 'fun_form_type', dv: 'iii', type: 'select', req: true,
                    selectOptions: [
                        { value: 'i', label: 'type I', },
                        { value: 'ii', label: 'type II', },
                        { value: 'iii', label: 'type III', },
                        { value: 'iv', label: 'type IV', },
                        { value: 'oa', label: 'type OA', },
                    ]
                },
                {
                    label: 'model', placeholder: 'model', leftIcon: 'calendar', fname: 'type',
                    id: 'fun_form_model', dv: moment().format('YYYY'), type: 'select', req: true,
                    selectOptions: [
                        { value: '2021', label: '2021', },
                        { value: '2022', label: '2022', },
                    ]
                },
                {
                    label: 'date', placeholder: 'date', type: 'date', req: true,  id: 'fun_form_date',  fname: 'date',
                    dv: moment().format('YYYY-MM-DD'), useTime: false, leftIcon: 'calendar',
                },

            ],
        },
        {
            inputs: [
                {
                    label: 'desc', placeholder: 'desc', leftIcon: 'selection', fname: 'desc', min: 3,
                    id: 'fun_form_desc', req: true, type: 'textarea'
                },
               
            ],
        },
    ]

    // ************************ DATA CONVERTERS ************************** //
    let fiter_inc = (row) => {
        let f1 = row.fun_1s[0];
        if (!f1) return true;
        let isPro = regexChecker_isOA(f1) || regexChecker_isPh(f1, true);
        let state = row.state >= -1 && row.state < 5;
        return !isPro && state
    }

    let fiter_ldf = (row) => {
        let f1 = row.fun_1s[0];
        if (!f1) return false;
        let isPro = regexChecker_isOA(f1) || regexChecker_isPh(f1, true);
        let state = row.state == 5;
        return !isPro && state
    }

    let fiter_exp = (row) => {
        let f1 = row.fun_1s[0];
        if (!f1) return false;
        let isPro = regexChecker_isOA(f1) || regexChecker_isPh(f1, true);
        let state = row.state == 50;
        return !isPro && state
    }

    let fiter_oa = (row) => {
        let f1 = row.fun_1s[0];
        if (!f1) return false;
        let isPro = regexChecker_isOA(f1) || regexChecker_isPh(f1, true);
        let state = row.state < 100;
        return isPro && state
    }

    let fiter_neg = (row) => {
        let f1 = row.fun_1s[0];
        if (!f1) return false;
        let isPro = regexChecker_isOA(f1) || regexChecker_isPh(f1, true);
        let state = row.state < -1;
        return !isPro && state
    }

    let fiter_arch = (row) => {
        let f1 = row.fun_1s[0];
        if (!f1) return false;
        let state = row.state >= 100;
        return state
    }
    // ************************** JSX ELEMENTS **************************** //

    // *************************** DATA TABLE **************************** //
    const cl_inc = [
        {
            name: trn.th_inc[0],
            selector: row => _GET_CLOCK_STATE(row, 3).date_start,
            cell: row => _GET_CLOCK_STATE(row, 3).date_start,
        },
        {
            name: trn.th_inc[1],
            selector: row => {
                let date = _GET_CLOCK_STATE(row, 3).date_start;
                let limit = dateParser_finalDate(date, 30);
                return limit;
            },
            cell: row => {
                let date = _GET_CLOCK_STATE(row, 3).date_start;
                let limit = dateParser_finalDate(date, 30);
                return limit;
            },
        },
        {
            name: trn.th_inc[2],
            cell: row => {
                let date = _GET_CLOCK_STATE(row, 3).date_start;
                let timePassed = dateParser_timePassed(date);
                return `${30 - timePassed} / 30 d`
            },
        },
        {
            name: trn.th_inc[3],
            cell: row => PROGRESION_ICONS(row, { pay: true, neigh: true, sign: true, report: true, check: true }),
        },
    ]

    const cl_ldf = [
        {
            name: trn.th_ldf[0],
            selector: row => _GET_CLOCK_STATE(row, 5).date_start,
            cell: row => _GET_CLOCK_STATE(row, 5).date_start,
        },
        {
            name: trn.th_ldf[1],
            cell: row => PROGRESION_ICONS(row, { check: true, neigh: true, sign: true, report: true, law: true, arc: true, eng: true, acta: true }),
        },
    ]

    const cl_exp = [
        {
            name: trn.th_exp[0],
            selector: row => _GET_CLOCK_STATE(row, 61).date_start,
            cell: row => _GET_CLOCK_STATE(row, 61).date_start,
        },
        {
            name: trn.th_exp[1],
            cell: row => PROGRESION_ICONS(row, { via: true, pay2: true, lic: true }),
        },
    ]

    const cl_oa = [
        {
            name: trn.th_oa[0],
            selector: row => _GET_CLOCK_STATE(row, 3).date_start,
            cell: row => _GET_CLOCK_STATE(row, 3).date_start,
        },
        {
            name: trn.th_oa[1],
            selector: row => {
                let date = _GET_CLOCK_STATE(row, 3).date_start;
                let limit = dateParser_finalDate(date, 30);
                return limit;
            },
            cell: row => {
                let date = _GET_CLOCK_STATE(row, 3).date_start;
                let limit = dateParser_finalDate(date, 30);
                return limit;
            },
        },
        {
            name: trn.th_oa[2],
            cell: row => {
                let date = _GET_CLOCK_STATE(row, 3).date_start;
                let timePassed = dateParser_timePassed(date);
                return `${30 - timePassed} / 30 d`
            },
        },
        {
            name: trn.th_oa[3],
            cell: row => PROGRESION_ICONS(row, { pay: true, check: true, neigh: true, sign: true, report: true, ph: true, law: true, lic: true }),
        },
    ]

    const cl_arch = [
        {
            name: trn.th_oa[0],
            selector: row => GET_FUN_STATE(row.state, lang, true),
            cell: row => GET_FUN_STATE(row.state, lang, false),
        },
        {
            name: trn.th_oa[1],
            cell: row => PROGRESION_ICONS(row, { pay: true, check: true, neigh: true, sign: true, report: true, ph: true, law: true, arch: true, eng: true, acta: true, pay2: true, via: true, lic: true }),
        },
    ]

    let columns = (extraColumns) => [
        {
            name: trn.th[0],
            selector: row => row.id_public,
            cell: row => row.id_public,
        },
        {
            name: trn.th[1],
            selector: row => row.tags,
            cell: row => {
                let tags = row.tags ? row.tags.split(',') : [];
                return <TagGroup>{tags.map(tag => <Tag size="sm" color="blue">{tag}</Tag>)}</TagGroup>

            },
        },
        {
            name: trn.th[2],
            minWidth: '30%',
            width: '30%',
            selector: row => formsParser1(row.fun_1s[0], lang),
            cell: row => formsParser1(row.fun_1s[0], lang),
        },
        ...extraColumns,

        {
            name: trn.th[3],
            cell: row => <PROGRESION_BAR row={row} />,
        },
        {
            name: trn.th[4],
            cell: row => '',
        },
    ];


    let COMPONENT_CERT = (filter, extraColumns, tableTitle, icon) => <TABLE_COMPONENT
        title={tableTitle}
        titleIcon={icon}
        columns={columns(extraColumns)}
        data={data.filter(filter)}
        load={load == 0}
        search={[]}
    />
    // ******************************** APIS ****************************** //
    function loadData() {
        FunService.getAll()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else setData(response.data);
            })
            .catch(e => console.log(e)).finally(() => setLoad(1));
    }

    function newFun(data) {

    }

    return (
        <>
            <div className='my-3'>
                <Row className="text-center" style={{ width: '100%' }}>
                    <h3>{trn.title} <BTN_HELP title={'lic'} text={'lic'} page={[]} /></h3>
                </Row>

                {cancreate ? <>
                    <Button intent='success' icon="add" onClick={() => setModal(true)}>{btn.new}</Button>
                    <hr />

                    <MODAL
                        open={modal}
                        setOpen={setModal}
                        title={'new'}
                        icon={<Icon icon={'add'} intent={'success'} size="25" />}
                        size="lg"
                        helpBtn={false}
                    >
                        <FORM form={FORM_INPUTS} id="fun_form" onSubmit={(e) => newFun(e)}
                            btnAlignment="txt-l" submitBtn={<Button icon="add" intent="success" type="submit" text={btn.add} />}
                        />
                    </MODAL>

                </> : ''}

                {canView ? <>
                    <Nav activeKey={active} onSelect={setActive} style={{ marginBottom: 20 }} appearance="tabs">
                        <Nav.Item eventKey="inc" icon={<Icon icon={'exclude-row'} />}>{<label className='fw-b'>{trn.tabs[0]} ({data.filter(fiter_inc).length})</label>}</Nav.Item>
                        <Nav.Item eventKey="ldf" icon={<Icon icon={'saved'} />}>{<label className='fw-b'>{trn.tabs[1]} ({data.filter(fiter_ldf).length})</label>}</Nav.Item>
                        <Nav.Item eventKey="exp" icon={<Icon icon={'book'} />}>{<label className='fw-b'>{trn.tabs[2]} ({data.filter(fiter_exp).length})</label>}</Nav.Item>
                        <Nav.Item eventKey="oa" icon={<Icon icon={'book'} />}>{<label className='fw-b'>{trn.tabs[3]} ({data.filter(fiter_oa).length})</label>}</Nav.Item>
                        <Nav.Item eventKey="neg" icon={<Icon icon={'disable'} intent="danger" />}>{<label className='text-danger fw-b'>{trn.tabs[4]} ({data.filter(fiter_neg).length})</label>}</Nav.Item>
                        <Nav.Item eventKey="arch" icon={<Icon icon={'box'} />}>{<label className='fw-b'>{trn.tabs[5]} ({data.filter(fiter_arch).length})</label>}</Nav.Item>
                        <Button intent='primary' icon="updated" onClick={() => setLoad(0)}>{btn.realod}</Button>
                    </Nav>

                    {active == 'inc' ? COMPONENT_CERT(fiter_inc, cl_inc, trn.tabs[0], <Icon icon={'exclude-row'} size="24" className="text-primary" />) : ''}
                    {active == 'ldf' ? COMPONENT_CERT(fiter_ldf, cl_ldf, trn.tabs[1], <Icon icon={'saved'} size="24" className="text-primary" />) : ''}
                    {active == 'exp' ? COMPONENT_CERT(fiter_exp, cl_exp, trn.tabs[2], <Icon icon={'book'} size="24" className="text-primary" />) : ''}
                    {active == 'oa' ? COMPONENT_CERT(fiter_oa, cl_oa, trn.tabs[3], <Icon icon={'book'} size="24" className="text-primary" />) : ''}
                    {active == 'neg' ? COMPONENT_CERT(fiter_neg, [], trn.tabs[4], <Icon icon={'disable'} size="24" className="text-danger" />) : ''}
                    {active == 'arch' ? COMPONENT_CERT(fiter_arch, cl_arch, trn.tabs[5], <Icon icon={'box'} size="24" className="text-primary" />) : ''}

                </> : <NON_IDEAL_STATE type="permit" />}
            </div>
        </>
    );

}

