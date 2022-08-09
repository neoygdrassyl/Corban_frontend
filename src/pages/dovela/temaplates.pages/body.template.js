import React, { useContext, useEffect, useState } from 'react';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider';
import SERVICE_TEMPLATES from '../../../services/apis/templates.service';

// COMPONENTS
import TABLE_COMPONENT from '../../../resources/customs/components/table.component';
import DIALOG from '../../../resources/customs/components/dialog.component';
import ALERT_CONFIRM from '../../../resources/customs/utils/notCofirm.component';
import BTN_HELP from '../../../resources/customs/components/btnHelp.component';
import FORM from '../../../resources/customs/components/form.component';
import { ALERT_ERROR, ALERT_NO_PERMIT, ALERT_SUCCESS, ALERT_WAIT } from '../../../resources/customs/utils/notifications.vars';

// ICONS
import { FaEdit } from 'react-icons/fa'
import UserInfoIcon from '@rsuite/icons/UserInfo';
import { RiDeleteBinLine } from 'react-icons/ri'
import { AiTwotoneStar } from 'react-icons/ai'
import { CgDanger } from 'react-icons/cg'
import ViewsAuthorizeIcon from '@rsuite/icons/ViewsAuthorize';


import { CONVERT_INT_TO_MONEY, FIND_PERMIT, GET_JSON_FULL } from '../../../resources/customs/utils/lamdas.functions';
import { Col, Grid, Panel, Row } from 'rsuite';
import { Button, Button as ButtonBP, FormGroup, Icon, NonIdealState, Switch } from '@blueprintjs/core';
import { Tooltip2 } from "@blueprintjs/popover2";
import NON_IDEAL_STATE from '../../../resources/customs/components/nonideal.component';
import TEXTAREA from '../../../resources/customs/components/form.components/textarea.component';
import SELECT from '../../../resources/customs/components/form.components/select.compontnt';
import INPUTTEXT from '../../../resources/customs/components/form.components/inputText.component';
import INPUTNUMBER from '../../../resources/customs/components/form.components/inputNumber.component';

export default function TEMPLATES_BODY(props) {
    const { type, data, id, add } = props;
    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('bodyTemplates');
    const btn = utilities.getTranslation('btns');
    const lang = utilities.lang;

    var [mult, setMult] = useState(null);
    var [valueCalc, setValueCalc] = useState(0);


    // ************************** HELP FUCTIONS **************************** //
    function setMultFrame(value, _child_strs, _child_mults) {
        let index = 0;

        _child_strs.map((c, i) => {
            if (c.value == value) index = i
        })

        let newMult = _child_mults[index];
        setMult(newMult)
    }
    function getSelectedChild(){
        let child = document.getElementById('parser_cacl_child');
        let text= child.options[child.selectedIndex].text;
        return text
    }

    function CALCULATE_CACL() {

        let area = Number(document.getElementById('parser_cacl_area_' + id).value || 0)

        let title_data = data.substring(data.search('@'), data.search('#'));
        let title_opts = title_data.substring(data.search(':') + 1).replace(/[\n\r]+ */g, ' ').trim().split(' ');
        let round = title_opts.includes('r')
        let perc = title_opts.includes('p')
        let percN = perc ? Number(document.getElementById('parser_cacl_perc_' + id).value || 100) : 100
        percN = percN / 100

        let child_data = data.substring(data.search('#') + 1).split(('#'));
        let child_mults = child_data.map(child => {
            let str = Number(child.split(':')[1]) || 1000
            return str
        })

        let newValue = area * (mult || child_mults[0]);

        newValue = perc ? newValue * percN : newValue

        newValue = round ? Math.round(newValue / 1000) * 1000 : newValue
        newValue = Math.round(newValue)
        setValueCalc(newValue)
    }

    let PARSER_CACL = () => {
        let isValid = data[0] == '@' && data.search('#') > 0;
        let title_data = data.substring(data.search('@'), data.search('#'));
        let title_str = title_data.substring(data.search('@') + 1, data.search(':')).replace(/[\n\r]+ */g, ' ').trim();
        let title_opts = title_data.substring(data.search(':') + 1).replace(/[\n\r]+ */g, ' ').trim().split(' ');

        let child_data = data.substring(data.search('#') + 1).split(('#'));
        let child_strs = child_data.map(child => {
            let str = child.split(':')[0].trim()
            return { value: str, label: str }
        })
        let child_mults = child_data.map(child => {
            let str = Number(child.split(':')[1]) || 1000
            return str
        })

        let currentMult = mult || child_mults[0]
        return <>

            <Grid fluid>
                {isValid ? <><Row style={{ width: '100%' }}>

                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <FormGroup label={trn.form_calc[0]} >
                            <INPUTTEXT value={title_str} readOnly leftIcon='bookmark' />
                        </FormGroup>
                        <FormGroup label={trn.form_calc[1]}>
                            <SELECT selectOptions={child_strs} id={'parser_cacl_child'} onChange={(e) => setMultFrame(e.target.value, child_strs, child_mults)} />
                        </FormGroup>
                        <FormGroup label={trn.form_calc[2]}>
                            <INPUTNUMBER leftIcon='square' dv={0} id={'parser_cacl_area_' + id} />
                        </FormGroup>
                        {title_opts.includes('p') ? <FormGroup label={trn.form_calc[3]}>
                            <INPUTNUMBER leftIcon='percentage' btnPos={'none'} dv={100} min={0} id={'parser_cacl_perc_' + id} />
                        </FormGroup> : ''}

                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className="p-3">
                        <Row className='p-1'><label>{trn.mult}: <label className='fw-b'>{currentMult}</label></label></Row>
                        <Row className='p-1'>{title_opts.includes('r') ? <label>{trn.round}: <label className='fw-b'>{trn.r1000}</label></label> : ''}</Row>
                        <Row className='p-1'><label>{trn.value}:  <label className='fw-b'>{CONVERT_INT_TO_MONEY(valueCalc)}</label></label></Row>
                        <hr className='border'/>
                        <Row>
                            <Button className='my-1' icon="calculator" onClick={() => CALCULATE_CACL()} intent="primary">{btn.calculate}</Button>
                            {add ? <Button className='mx-1 my-1' icon="th" onClick={() => add({value: valueCalc, name: `${title_str} - ${getSelectedChild()}`})} intent="warning">{btn.add}</Button> : ''}
                        </Row>

                    </Col>

                </Row></>
                    : <Row style={{ width: '100%' }}>
                        <NON_IDEAL_STATE type="template" />
                    </Row>}

            </Grid>

        </>

    }

    return (
        <>
            {type == 'calc' ? PARSER_CACL() : ''}
        </>
    );
}
