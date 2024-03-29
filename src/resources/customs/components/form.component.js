import React, { useContext } from 'react';
import { Col, Divider, FlexboxGrid, Grid, Row } from 'rsuite';
import { FormGroup, NumericInput, Switch } from '@blueprintjs/core';
import { UtilContext } from '../contextProviders/util.provider';
import TEXTAREA from './form.components/textarea.component';
import UPLOADER from './form.components/uploader.component';
import PASSWORD from './form.components/password.component';
import INPUTTEXT from './form.components/inputText.component';
import { useState } from 'react';
import INPUTNUMBER from './form.components/inputNumber.component';
import SELECT from './form.components/select.compontnt';


export default function FORM(props) {
    const { form } = props
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('formComponent');
    const theme = utilities.theme;

    var [showValidation, setValidate] = useState(false);
    var [data, setData] = useState([]);

    const GET_INPUT = (input) => {
        switch (input.type) {
            case 'switch':
                return <Switch id={input.id} name={input.name} label={input.labelSwitch ?? "Text"} disabled={input.disabled} checked={input.checked} defaultChecked={input.dc} readOnly={input.readOnly}
                    onChange={input.onChange} required={input.req} />

            case 'date':
                return <div class="bp4-input-group">
                    <span class={"bp4-icon bp4-icon-" + input.leftIcon}></span>
                    <input type="date" id={input.id} name={input.name} disabled={input.disabled} value={input.value} defaultValue={input.dv} readOnly={input.readOnly} required={input.req}
                        min="1900-01-01" max="2100-01-01" className="bp4-input" style={{ width: input.useTime ? '60%': '100%' }} />
                    {input.useTime
                        ? <input type="time" id={input.idTime} name={input.nameTime} disabled={input.disabled} value={input.valueTime} defaultValue={input.dvTime} readOnly={input.readOnly} required={input.req}
                            className="bp4-input" style={{ width: '40%', paddingLeft: '4px' }} />
                        : ''}
                </div>

            case 'select':
                return <SELECT {...input}/>

            case 'textarea':
                return <TEXTAREA {...input} />

            case 'number':
                return <INPUTNUMBER {...input} />

            case 'uploader':
                return <UPLOADER {...input} />

            case 'password':
                return <PASSWORD {...input} />
            default:
                return <INPUTTEXT {...input} />
        }
    }

    function getDataFor() {
        let data = [];
        let isValidForm = true;
        var formData = new FormData();
        form.map(row => {
            row.inputs.map(input => {
                let key = input.id;
                if (!document.getElementById(input.id)) return;
                let value = document.getElementById(input.id).value;
                let item = {};
                item.key = key;
                item.value = value;
                item.name = input.label;
                formData.set(input.fname ?? key, value);

                // ----- FORM VALIDATION ------- 
                item.validated = true;
                item.validation = '';

                let conMin = input.min ? value.length >= input.min : true;
                let conRegex = input.regex ? input.regex.test(value) : true;

                let passWordRegex = true;
                let passwordRepeat = true;
                if (input.type == 'password' && input.passView) {
                    let regex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
                    passWordRegex = regex.test(value);
                    if (!passWordRegex) item.validation += ' pss-';
                    if (input.checkRepeat) {
                        let repeatValue = document.getElementById(input.checkRepeat).value;
                        passwordRepeat = repeatValue == value;
                        if (!passwordRepeat) item.validation += 'rps-';
                    }
                }

                if (input.min && !conMin) item.validation += 'min-';
                if (input.regex && !conRegex) item.validation += 'reg-';

                if (!conMin || !conRegex || !passWordRegex || !passwordRepeat) {
                    item.validated = false;
                    isValidForm = false;
                    item.min = input.min;
                }

                data.push(item);
            })
        })

        if (!isValidForm) {
            setData(data);
            setValidate(true);
            return false;
        } else {
            setValidate(false);
        }
        let object = { data: data, formData: formData }
        return object;
    }

    // ************************* JSX COMPONENTS *************************** //

    let FORM_BODY = () => <>
        <Grid className='py-1' fluid>
            {form.map(row => {
                return <Row style={{ width: '100%' }}>
                    {row.inputs.map(input => {
                        let show = input.show ?? true;
                        let col = 24 / row.inputs.length
                        col *= input.ext ?? 1;
                        return <Col xl={col < 4 ? 4 : col} lg={col < 6 ? 6 : col} md={col < 8 ? 8 : col} sm={12} xs={24}>
                            {show
                                ? <FormGroup
                                    disabled={input.disabled}
                                    inline={input.inline}
                                    intent={input.intent}
                                    labelFor={input.id}

                                    helperText={(input.labelHelpSw ?? true) && input.labelHelp}
                                    label={input.label ?? "Text"}
                                    labelInfo={input.req ? <label style={{ color: 'crimson' }}>({trn.req})</label> : input.labelInfo}
                                    subLabel={input.subLabel}
                                >
                                    {GET_INPUT(input)}
                                </FormGroup>
                                : ''}
                        </Col>
                    }
                    )}
                </Row>
            })}
            {props.children}
        </Grid>
    </>
    let VALIDATE_MESSAGE = () => <>
        {showValidation ?
            <FlexboxGrid className='my-1'>
                <FlexboxGrid.Item colspan={24}>
                    <hr />
                    {data.map(d => {
                        if (!d.validated) {
                            return <>
                                {d.validation.includes('min')
                                    ? <li className='mx-3'><label className='text-danger'>{trn._validate_min(d.name, d.min)}</label></li>
                                    : ''}
                                {d.validation.includes('reg')
                                    ? <li className='mx-3'><label className='text-danger'>{trn._validate_reg(d.name)}</label></li>
                                    : ''}
                                {d.validation.includes('pss')
                                    ? <li className='mx-3'><label className='text-danger'>{trn._validate_pss(d.name)}</label></li>
                                    : ''}
                                {d.validation.includes('rps')
                                    ? <li className='mx-3'><label className='text-danger'>{trn._validate_rps(d.name)}</label></li>
                                    : ''}
                            </>
                        }
                    })}
                    <hr />
                </FlexboxGrid.Item>
            </FlexboxGrid> : ''}
    </>
    let FOOTER_BTNS = () => <>
        <FlexboxGrid className='my-1'>
            <FlexboxGrid.Item colspan={24}>
                <div className={props.btnAlignment ?? 'txt-l'}>
                {props.btns}{props.submitBtn}
                </div>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    </>

    return (
        <form id={props.id} onSubmit={(e) => { e.preventDefault(); props.onSubmit(getDataFor()) }} enctype={props.upload ? "multipart/form-data" : ''}>
            {FORM_BODY()}
            {VALIDATE_MESSAGE()}
            {FOOTER_BTNS()}
        </form>
    );
}