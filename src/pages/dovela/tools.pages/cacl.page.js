import React, { useContext, useEffect, useState } from 'react';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider';
import SERVICE_TEMPLATES from '../../../services/apis/templates.service';

// COMPONENTS
import TABLE_COMPONENT from '../../../resources/customs/components/table.component';
import NON_IDEAL_STATE from '../../../resources/customs/components/nonideal.component';
import BTN_HELP from '../../../resources/customs/components/btnHelp.component';
import { ALERT_ERROR, ALERT_NO_PERMIT, ALERT_WAIT } from '../../../resources/customs/utils/notifications.vars';
import { Col, FlexboxGrid, Grid, IconButton, Panel, Row, toaster } from 'rsuite';
import { CONVERT_INT_TO_MONEY, OPEN_FILE } from '../../../resources/customs/utils/lamdas.functions';
import { Button, FormGroup, NonIdealState, NumericInput } from '@blueprintjs/core';
import SELECT from '../../../resources/customs/components/form.components/select.compontnt';
import TEMPLATES_BODY from '../temaplates.pages/body.template';
import BTN_DOWNLOAD from '../../../resources/customs/components/btnDownload.component';

// ICONS
import MinusIcon from '@rsuite/icons/Minus';
import TUTORIAL from '../../../resources/customs/components/tutorial.component';
import NAVIGATON from '../../../resources/customs/components/navigation.component';

var moment = require('moment');

export default function CALCULATOR_DOVELA() {
    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const connID = conn.id ?? '';
    const connName = conn.name ?? '';

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('dcalc');
    const btn = utilities.getTranslation('btns');
    const lang = utilities.lang;

    const m = conn.technicalInfo ? (Number(conn.technicalInfo.m ?? 0.760)) : 0.760;
    const IVA = 0.16;

    const CUR_USES = [
        trn.cacl_use[0],
        trn.cacl_use[1],
        trn.cacl_use[2],
        trn.cacl_use[3],
        trn.cacl_use[4],
        trn.cacl_use[5],
        trn.cacl_use[6]
    ]
    const CUR_MATRIX = [
        {
            name: trn.calc_process_type[0], value: 'conrec',
            subrules: [
                { name: trn.calc_mod_1[0], value: 'on', },
                { name: trn.calc_mod_1[1], value: 'amp', },
                { name: trn.calc_mod_1[2], value: 'mod', },
                { name: trn.calc_mod_1[3], value: 'ref', },
                { name: trn.calc_mod_1[4], value: 'adec', },
                { name: trn.calc_mod_1[5], value: 'ades', },
                { name: trn.calc_mod_1[6], value: 'dt', },
                { name: trn.calc_mod_1[7], value: 'dp', },
                { name: trn.calc_mod_1[8], value: 'cer', },
                { name: trn.calc_mod_1[9], value: 'res', },
                { name: trn.calc_mod_1[10], value: 'rec', },
                { name: trn.calc_mod_1[11], value: 'rcn', },
            ]
        },
        {
            name: trn.calc_process_type[1], value: 'urb',
            subrules: [
                { name: trn.calc_mod_2[0], value: 'des', },
                { name: trn.calc_mod_2[1], value: 'san', },
                { name: trn.calc_mod_2[2], value: 'reu', },
            ]
        },
        {
            name: trn.calc_process_type[2], value: 'par',
            subrules: [
                { name: trn.calc_mod_3[0], value: 'par', },
            ]
        },

    ]
    const CALC_YEARS = [{ value: '2021', label: '2021' }, { value: '2022', label: '2022' }]
    const MULTS = {
        '2021': { mult: 908526, units: trn.infoVaried[3], name: trn.infoVaried[2], cfi: 0.4, cvi: 0.8 },
        '2022': { mult: 38004, units: trn.infoVaried[1], name: trn.infoVaried[0], cfi: 10.01, cvi: 20.02 },
    }
    const model2TableStr1 = trn.table_extra;

    const model2Table = [
        {
            title: trn.table_body[0].title, list: [
                { name: trn.table_body[0].list[0], const: { '2021': [1], '2022': [25.02] } },
                { name: trn.table_body[0].list[1], const: { '2021': [2 / 30, 'SMLD', 2], '2022': [1.67] } },
                { name: trn.table_body[0].list[2], const: { '2021': [0.5], '2022': [12.51] } },
                { name: trn.table_body[0].list[3], const: { '2021': [1], '2022': [25.02] } },
                { name: trn.table_body[0].list[4], const: { '2021': [1.5], '2022': [37.53] } },
                { name: trn.table_body[0].list[5], const: { '2021': [2], '2022': [50.05] } },
            ]
        },
        {
            title: trn.table_body[1].title, list: [
                { name: trn.table_body[1].list[0], const: { '2021': [1], '2022': [25.02] } },
                { name: trn.table_body[1].list[1], const: { '2021': false, '2022': [1.67] } },
                { name: trn.table_body[1].list[2], const: { '2021': false, '2022': [50.05] } },
            ]
        },
        {
            title: trn.table_body[2].title, list: [
                { name: trn.table_body[2].list[0], const: { '2021': [4 * 1 / 30, 'SMLD', 4], '2022': [3.34] } },
                { name: trn.table_body[2].list[1], const: { '2021': [8 * 1 / 30, 'SMLD', 8], '2022': [6.67] } },
                { name: trn.table_body[2].list[2], const: { '2021': [1], '2022': [10.01] } },
            ]
        },
        {
            title: trn.table_body[3].title, list: [
                { name: trn.table_body[3].list[0], const: { '2021': [1 * 1 / 30, 'SMLD', 1], '2022': [0.834] } },
            ]
        },
        {
            title: trn.table_body[4].title, list: [
                { name: trn.table_body[4].list[0], const: { '2021': [0.25], '2022': [6.26] } },
                { name: trn.table_body[4].list[1], const: { '2021': [0.5], '2022': [12.51] } },
                { name: trn.table_body[4].list[2], const: { '2021': [1], '2022': [25.02] } },
                { name: trn.table_body[4].list[3], const: { '2021': [2], '2022': [50.05] } },
                { name: trn.table_body[4].list[4], const: { '2021': [3], '2022': [75.07] } },
                { name: trn.table_body[4].list[5], const: { '2021': [4], '2022': [100.09] } },
                { name: trn.table_body[4].list[6], const: { '2021': [5], '2022': [125.11] } },
            ]
        },
        {
            title: trn.table_body[5].title, list: [
                { name: trn.table_body[5].list[0], const: { '2021': [2 * 1 / 30, 'SMLD', 2], '2022': [1.67] } },
                { name: trn.table_body[5].list[1], const: { '2021': [4 * 1 / 30, 'SMLD', 4], '2022': [3.34] } },
                { name: trn.table_body[5].list[2], const: { '2021': [1], '2022': [25.02] } },
                { name: trn.table_body[5].list[3], const: { '2021': [2], '2022': [50.05] } },
                { name: trn.table_body[5].list[4], const: { '2021': [3], '2022': [75.07] } },
                { name: trn.table_body[5].list[5], const: { '2021': [4], '2022': [100.09] } },
                { name: trn.table_body[5].list[6], const: { '2021': [5], '2022': [125.11] } },
            ]
        },
        {
            title: trn.table_body[6].title, list: [
                { name: trn.table_body[6].list[0], const: { '2021': [1], '2022': [25.02] } },
            ]
        },
        {
            title: trn.table_body[7].title, list: [
                { name: trn.table_body[7].list[0], const: { '2021': [10 * 1 / 30, 'SMLD', 10], '2022': [8.34] } },
            ]
        },
        {
            title: trn.table_body[8].title, list: [
                { name: trn.table_body[8].list[0], const: { '2021': [2 * 1 / 30, 'SMLD', 2], '2022': [1.67] } },
            ]
        },
    ]

    var [load, setLoad] = useState(0);
    var [data, setData] = useState([]);
    var [currentCalc, setCalc] = useState(null)
    var [bill, setBill] = useState([]);
    var [year, setYear] = useState(moment().format('YYYY'));

    var [str_m2, setM2] = useState('0');
    var [str_mf, setMf] = useState('0');
    var [str_mv, setMv] = useState('0');
    var [str_mt, setMt] = useState('0');

    var [mods, setMods] = useState(CUR_MATRIX[0].subrules);

    useEffect(() => {
        if (load == 0 || load == 2) loadData();
    }, [load, bill]);

    // *************************** FUNCTIONS **************************** //
    function CALCULATE_VALUE_CUR() {
        var rule = document.getElementById("calc_rule").value;
        var subrule = document.getElementById("calc_subrule").value;
        var use = document.getElementById("calc_use").value;
        var st = document.getElementById("calc_strata").value;
        var Q = document.getElementById("calc_area").value;

        if (!rule) return;
        if (!subrule) return;
        if (use.includes('Seleccione')) return;
        if (st.includes('Seleccione')) st = 0;;
        if (!Q) return;


        var i;
        var j;
        var q_strata = [0.5, 0.5, 1, 1.5, 2, 2.5]; // base on strata
        //var q_use = [2.9, 3.2, 4]; // base on use
        var UVT = MULTS[year].mult;
        var cfi = MULTS[year].cfi;
        var cvi = MULTS[year].cvi;
        var cf = UVT * cfi;
        var cv = UVT * cvi;

        let h = use == 1 ? 2 : 1;
        let r1 = subrule == 'mod' || subrule == 'ref' || subrule == 'res' ? 0.3 : 1;
        let r2 = subrule == 'adec' ? 0.5 : 1;
        let r21 = subrule == 'ades' ? 0 : 1;


        /*    
            e = (cf * i x m) + (cv * i * j * m)
            Q is the area express in m2
            Q < 100                   -> j = 0.45
            100 < Q < 11.000          -> j = (3.8/(0.12+(800/Q))) 
            Q > 11.000                -> j = (2.2/(0.018+(800/Q))) 
            Uranismo and Parcelacion  -> j = (4/(0.025+(2000/Q)))
        */

        // i
        if (use >= 3) {
            if (Q <= 300) i = 2.9;
            if (Q > 300 && Q <= 1000) i = 3.2;
            if (Q > 1000) i = 4;
        }
        else i = q_strata[st];

        // j
        if (rule == 'urb' || rule == 'par') j = 4 / (0.025 + (2000 / Q));
        else if (Q <= 100) j = 0.45;
        else if (Q > 100 && Q < 11000) j = j = (3.8 / (0.12 + (800 / Q)))
        else if (Q >= 11000) j = j = (2.2 / (0.018 + (800 / Q)))

        let _subtotal_cf = Math.round((cf * r1 * r2) * i * m);
        let _subtotal_cv = Math.round(((cv * r1 * r21) / h * i * j * m));

        setMf(_subtotal_cf);
        setMv(_subtotal_cv);
        setMt(_subtotal_cf + _subtotal_cv);
    }
    function SET_CUR_MODS(value) {
        let newMods = CUR_MATRIX.find(data => data.value == value).subrules;
        setMods(newMods)
    }
    function ADD_TO_BILL(newBills) {
        let bills = Array.from(bill);
        newBills.map(b => bills.push(b))
        setBill(bills)
    }
    function REMOVE_TO_BILL(index) {
        let bills = Array.from(bill);
        bills.splice(index, 1)
        setBill(bills)
    }
    function GET_SELECT_tEXT(id) {
        let child = document.getElementById(id);
        let text = child.options[child.selectedIndex].text;
        return text
    }
    function getExpenses_m(number, returnInt) {
        let value = MULTS[year].mult * number;
        if (returnInt) return value
        return CONVERT_INT_TO_MONEY(value)
    }
    function getIva_m(number, returnInt) {
        let value = MULTS[year].mult * number * IVA;
        if (returnInt) return value
        return CONVERT_INT_TO_MONEY(value)
    }
    function getTotal_m(number, returnInt) {
        let value = MULTS[year].mult * number + MULTS[year].mult * number * IVA;
        if (returnInt) return value
        return CONVERT_INT_TO_MONEY(value)
    }
    // *************************** JXS ELEMENTS **************************** //
    let COMPONENT_CALC_CUR = () => {
        return <Row>
            <Row className='p-1 text-center fw-b'><h5 className='fw-bold'>{trn.calc_title}</h5></Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <Row className='p-1'><label className='fw-bold'>{trn.calc_form[0]}</label></Row>
                <Row className='px-1'>
                    <FormGroup label={trn.calc_form[2]}>
                        <div class="bp4-input-group">
                            <span class={"bp4-icon bp4-icon-book"}></span>
                            <select id={'calc_rule'} onChange={(e) => SET_CUR_MODS(e.target.value)}
                                className={'bp4-input'}
                            >
                                {CUR_MATRIX.map(op => <option value={op.value}> {op.name}</option>)}
                            </select>
                            <span class={"bp4-icon bp4-icon-chevron-down"}></span>
                        </div>
                    </FormGroup>
                </Row>
                <Row className='px-1 '>
                    <FormGroup label={trn.calc_form[3]}>
                        <div class="bp4-input-group">
                            <span class={"bp4-icon bp4-icon-book"}></span>
                            <select id={'calc_subrule'}
                                className={'bp4-input'}
                            >
                                {mods.map(op => <option value={op.value}> {op.name}</option>)}
                            </select>
                            <span class={"bp4-icon bp4-icon-chevron-down"}></span>
                        </div>
                    </FormGroup>
                </Row>
                <Row className='px-1'>
                    <FormGroup label={trn.calc_form[4]}>
                        <div class="bp4-input-group">
                            <span class={"bp4-icon bp4-icon-home"}></span>
                            <select id={'calc_use'}
                                className={'bp4-input'}
                            >
                                {CUR_USES.map((op, i) => <option value={i}> {op}</option>)}
                            </select>
                            <span class={"bp4-icon bp4-icon-chevron-down"}></span>
                        </div>
                    </FormGroup>
                </Row>
                <Row className='px-1'>
                    <FormGroup label={trn.calc_form[5]}>
                        <div class="bp4-input-group">
                            <span class={"bp4-icon bp4-icon-home"}></span>
                            <select id={'calc_strata'}
                                className={'bp4-input'}
                            >
                                <option value={0}>{trn.calc_strate[0]}</option>
                                <option value={1}>{trn.calc_strate[1]}</option>
                                <option value={2}>{trn.calc_strate[2]}</option>
                                <option value={3}>{trn.calc_strate[3]}</option>
                                <option value={4}>{trn.calc_strate[4]}</option>
                                <option value={5}>{trn.calc_strate[5]}</option>
                            </select>
                            <span class={"bp4-icon bp4-icon-chevron-down"}></span>
                        </div>
                    </FormGroup>
                </Row>
                <Row className='px-1'>
                    <FormGroup label={trn.calc_form[6]}>
                        <NumericInput
                            leftIcon={'rectangle'} id={'calc_area'}
                            step={0.01}
                            min={0}
                            allowNumericCharactersOnly={true} fill
                            defaultValue={0}
                        />
                    </FormGroup>
                </Row>

            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <Row className='p-1'><label className='fw-bold'>{trn.calc_form[1]}</label></Row>
                <Row className='p-1'><label className='fw-normal'> {trn.calc_form[7]}:  <label className='fw-bold'>{m}</label></label></Row>
                <Row className='p-1'><label className='fw-normal'> {trn.calc_form[8]}:  <label className='fw-bold'>{CONVERT_INT_TO_MONEY(str_mf)}</label></label></Row>
                <Row className='p-1'><label className='fw-normal'> {trn.calc_form[9]}:  <label className='fw-bold'>{CONVERT_INT_TO_MONEY(str_mv)}</label></label></Row>
                <Row className='p-1'><label className='fw-normal'> {trn.calc_form[10]}:  <label className='fw-bold'>{CONVERT_INT_TO_MONEY(str_mt)}</label></label></Row>
                <hr className='border' />
                <Button className='mx-1 my-1' icon="calculator" onClick={() => CALCULATE_VALUE_CUR()} intent="primary">{btn.calculate}</Button>
                <Button className='mx-1 my-1' icon="th" onClick={() => {
                    let lic = `${GET_SELECT_tEXT('calc_rule')} - ${GET_SELECT_tEXT('calc_subrule')}`;
                    let cf = { value: str_mf, name: 'Cargo Fijo ' + lic, year: year }
                    let cv = { value: str_mv, name: 'Cargo Variable ' + lic, year: year }
                    let ivaf = { value: (Number(str_mf)) * IVA, name: 'IVA Cargo Fijo ' + lic, year: year }
                    let ivav = { value: (Number(str_mv)) * IVA, name: 'IVA Cargo Varbiale ' + lic, year: year }
                    ADD_TO_BILL([cv, ivav, cf, ivaf])
                }} intent="warning">{btn.add}</Button>
            </Col>
        </Row>
    }
    let COMPONENT_CALC_TAX = () => {
        return <>
            <FormGroup label={trn.templ_form[0]}>
                <SELECT selectOptions={data.map(t => { return { value: t.template_data, label: t.template_name } })}
                    id={'template_choose'} onChange={(e) => setCalc(e.target.value)} />
            </FormGroup>
            {currentCalc ? <TEMPLATES_BODY data={currentCalc} type={'calc'} id={'0'} add={(billTax) => ADD_TO_BILL([billTax])} /> : ''}
        </>
    }
    let COMPONENT_BILL = () => {
        return <> <Grid fluid>
            <Row className='text-center fw-b'><h5 className='fw-bold'>{trn.bill_title}</h5></Row>
            <Row justify="center" className='fw-b'>
                <FlexboxGrid.Item xs={2} sm={2} md={2} lg={2} xl={2} xxl={2} as={Col}>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item xs={18} sm={18} md={18} lg={18} xl={18} xxl={18} as={Col}>
                    {trn.bill_table[0]}
                </FlexboxGrid.Item>
                <FlexboxGrid.Item xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} as={Col}>
                    {trn.bill_table[1]}
                </FlexboxGrid.Item>

            </Row>
            <Row justify="center" ><hr className='border' /></Row>
            {bill.map((b, i) => <Row justify="center" className='py-1'>
                <FlexboxGrid.Item xs={2} sm={2} md={2} lg={2} xl={2} xxl={2} as={Col}>
                    <IconButton icon={<MinusIcon />} circle size="xs" color="red" appearance='primary' onClick={() => REMOVE_TO_BILL(i)} />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item xs={18} sm={18} md={18} lg={18} xl={18} xxl={18} as={Col}>
                    {b.name}
                </FlexboxGrid.Item>
                <FlexboxGrid.Item xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} as={Col}>
                    {CONVERT_INT_TO_MONEY(b.value)}
                </FlexboxGrid.Item>
            </Row>)}
            <Row justify="center" ><hr className='border' /></Row>
            <Row justify="center" className='py-1 fw-b'>
                <FlexboxGrid.Item xs={2} sm={2} md={2} lg={2} xl={2} xxl={2} as={Col}>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item xs={18} sm={18} md={18} lg={18} xl={18} xxl={18} as={Col} className="txt-r">
                    <label >{trn.bill_table[2]}: </label>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} as={Col}>
                    {CONVERT_INT_TO_MONEY(bill.reduce((total, curr) => Number(total) + Number(curr.value), 0))}
                </FlexboxGrid.Item>

            </Row>
            <Row justify="center" ><hr className='border' /></Row>
            <Row className='txt-r' >
                <FlexboxGrid.Item xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} as={Col}>
                    <Row className='txt-l p-1' >
                        <TUTORIAL text={btn.tut_1} tutorial="csv_e" />
                    </Row>
                    <Row className='txt-l p-1' >
                        <TUTORIAL text={btn.tut_2} tutorial="csv_lo" />
                    </Row>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} as={Col}>
                    <BTN_DOWNLOAD csv color='green' onClick={() => genCSV()} />
                    <BTN_DOWNLOAD pdf onClick={() => genPDF()} />
                </FlexboxGrid.Item>
            </Row>

        </Grid>
        </>
    }
    let COMPONENT_TABLE_2 = () => {
        return <>
            {model2Table.map(row => {
                if (row.list) return <>
                    <Row justify="center" className='fw-b bg-dark text-light'>
                        <FlexboxGrid.Item xs={24} sm={24} md={16} lg={12} xl={12} xxl={12} as={Col}>
                            {row.title}
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item xs={8} sm={8} md={2} lg={3} xl={3} xxl={3} as={Col} className="txt-c">
                            {'EXPENSAS'}
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item xs={8} sm={8} md={2} lg={3} xl={3} xxl={3} as={Col} className="txt-c">
                            {'IVA'}
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item xs={8} sm={8} md={2} lg={3} xl={3} xxl={3} as={Col} className="txt-c">
                            {'TOTAL'}
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item xs={8} sm={8} md={2} lg={3} xl={3} xxl={3} as={Col} className="txt-c">
                            {''}
                        </FlexboxGrid.Item>
                    </Row>
                    {row.list.map(it => {
                        if (it.const[year]) return <>
                            <Row justify="center" className='border'>
                                <FlexboxGrid.Item xs={12} sm={12} md={13} lg={9} xl={9} xxl={9} as={Col}>
                                    {it.name}
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item xs={12} sm={12} md={3} lg={3} xl={3} xxl={3} as={Col}>
                                    {it.const[year][1]
                                        ? `(${it.const[year][2]}) ${it.const[year][1]}`
                                        : `(${it.const[year][0]}) ${MULTS[year].units} `
                                    }
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item xs={8} sm={8} md={2} lg={3} xl={3} xxl={3} as={Col} className="txt-c">
                                    {getExpenses_m(it.const[year][0])}
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item xs={8} sm={8} md={2} lg={3} xl={3} xxl={3} as={Col} className="txt-c">
                                    {getIva_m(it.const[year][0])}
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item xs={8} sm={8} md={2} lg={3} xl={3} xxl={3} as={Col} className="txt-c">
                                    {getTotal_m(it.const[year][0])}
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item xs={8} sm={8} md={2} lg={3} xl={3} xxl={3} as={Col} className="txt-c">
                                    <Button small icon="th" onClick={() => {
                                        let newBill = { value: getExpenses_m(it.const[year][0], true), name: `${row.title} - ${it.name}`, year: year }
                                        let newBill2 = { value: getIva_m(it.const[year][0], true), name: `IVA - ${row.title} - ${it.name}`, year: year }
                                        ADD_TO_BILL([newBill, newBill2])
                                    }} intent="warning">{btn.add}</Button>
                                </FlexboxGrid.Item>
                            </Row>
                        </>
                    })}
                </>
                else return <>
                    <Row className='text-left fw-n py-1'><h6>{row.title}</h6></Row>
                </>
            })}
        </>
    }
    // ******************************** APIS ****************************** //
    function loadData() {
        SERVICE_TEMPLATES.getAllbyType('calc')
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else {
                    setData(response.data)
                    if (response.data.length > 0) setCalc(response.data[0].template_data)
                }
            })
            .catch(e => {
                console.log(e);
            }).finally(() => setLoad(1));
    }
    function genCSV() {
        const headers = 'DESCRIPCION;VALOR\n'

        let csvContent = "data:text/csv;charset=utf-8," + headers
            + bill.map(e => e.name + ';' + CONVERT_INT_TO_MONEY(e.value)).join("\n");

        csvContent += `\nTOTAL;${CONVERT_INT_TO_MONEY(bill.reduce((total, curr) => Number(total) + Number(curr.value), 0))}`

        var encodedUri = encodeURI(csvContent);
        const fixedEncodedURI = encodedUri.replaceAll('#', '%23').replaceAll('°', 'r');

        var link = document.createElement("a");
        link.setAttribute("href", fixedEncodedURI);
        link.setAttribute("download", `${'LIQUIDACION PREVIA'}.csv`);
        document.body.appendChild(link); // Required for FF

        link.click();
    }
    function genPDF() {
        var formData = new FormData();

        let descs = bill.map(b => b.name).join(';')
        let values = bill.map(b => CONVERT_INT_TO_MONEY(b.value)).join(';')
        let total = CONVERT_INT_TO_MONEY(bill.reduce((total, sum) => total + Number(sum.value), 0))

        formData.append('descs', descs)
        formData.append('values', values)
        formData.append('total', total)
        formData.append('lang', lang)

        ALERT_WAIT(lang)
        SERVICE_TEMPLATES.genPDF_TaxCalculation(formData)
            .then(response => OPEN_FILE('TAX.pdf', response, ALERT_ERROR(lang)))
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang)
            });
    }
    return (<>

        <NAVIGATON nav={trn.nav({ name: connName, id: connID })} />

        <div className='my-2'>

            <Row className="text-center" style={{ width: '100%' }}>
                <h3>{trn.title} <BTN_HELP title={trn.btn_help_tile} text={trn.btn_help_body} page={trn.HELP_PAGE} /></h3>
            </Row>

            <Grid fluid className='py-2'>
                <Row style={{ width: '100%' }}>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item xs={24} sm={24} md={20} lg={16} xl={12} xxl={12} as={Col}>
                            <FormGroup label={trn.infoFixed[0]} inline>
                                <SELECT selectOptions={CALC_YEARS} df={year} id={'template_year'} onChange={(e) => setYear(e.target.value)} leftIcon="calendar" />
                            </FormGroup>
                            <Row><label className='mx-1'>{trn.infoFixed[1]}: <label className='fw-b'>{MULTS[year].name} ({MULTS[year].units})</label></label>
                                <label className='mx-1'>{trn.infoFixed[2]}: <label className='fw-b'>{MULTS[year].mult}</label></label>
                                <label className='mx-1'>{trn.infoFixed[3]}: <label className='fw-b'>{MULTS[year].cvi}</label></label>
                                <label className='mx-1'>{trn.infoFixed[4]}: <label className='fw-b'>{MULTS[year].cfi}</label></label>
                                <label className='mx-1'>{'CV'}: <label className='fw-b'>{Math.round(MULTS[year].cvi * MULTS[year].mult)}</label></label>
                                <label className='mx-1'>{'CF'}: <label className='fw-b'>{Math.round(MULTS[year].cfi * MULTS[year].mult)}</label></label>
                                <label className='mx-1'>{trn.infoFixed[7]}: <label className='fw-b'>{IVA * 100}%</label></label>
                            </Row>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Row>
            </Grid>

            <Grid fluid>
                <Row style={{ width: '100%' }}>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item xs={24} sm={24} md={10} lg={8} xl={8} xxl={8} as={Col}>
                            <Panel className="border">
                                {COMPONENT_CALC_CUR()}
                            </Panel>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item xs={24} sm={24} md={10} lg={8} xl={8} xxl={8} as={Col}>
                            <Panel className="border">
                                <Row className='text-center fw-b'><h5 className='fw-bold'>{trn.templ_title}</h5></Row>
                                <Row className='py-1'>
                                    {data.length > 0 ?
                                        COMPONENT_CALC_TAX()
                                        : <NON_IDEAL_STATE type="no_templates" link={'/dtemplates'} />}
                                </Row>
                            </Panel>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Row>
            </Grid>


            <Grid fluid className='py-2'>
                <Row style={{ width: '100%' }}>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item xs={24} sm={24} md={20} lg={16} xl={12} xxl={12} as={Col}>
                            <Panel className="border">
                                {bill.length > 0 ?
                                    COMPONENT_BILL()
                                    : <NonIdealState
                                        className='py-2'
                                        icon={'dollar'}
                                        title={trn.nis_title}
                                        description={trn.nis_body}
                                        action={false}
                                        layout={"vertical"}
                                    />}
                            </Panel>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Row>
            </Grid>

            <Grid fluid className='py-2'>
                <Row style={{ width: '100%' }}>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item xs={24} sm={24} md={20} lg={16} xl={12} xxl={12} as={Col}>
                            <Panel className="border">
                                <Row className='text-center fw-b'><h5 className='fw-bold'>{trn.table_title}</h5></Row>
                                {COMPONENT_TABLE_2()}
                            </Panel>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Row>
            </Grid>

        </div>

    </>
    );
}
