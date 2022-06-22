import React, { useContext } from 'react';
import { Col, Grid, Popover, Row, SelectPicker, Whisper } from 'rsuite';
import { Button, FormGroup, InputGroup, Switch } from '@blueprintjs/core';
import { UtilContext } from '../contextProviders/util.provider';
import TEXTAREA from './textarea.component';


export default function FORM(props) {
    const { form } = props
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('formComponent');
    const theme = utilities.theme;

    const GET_INPUT = (input) => {
        switch (input.type) {
            case 'switch':
                return <Switch id={input.id} name={input.name} label={input.labelSwitch ?? "Text"} disabled={input.disabled} checked={input.checked} defaultChecked={input.dc} readOnly={input.readOnly}
                    onChange={input.onChange} required={input.req} />

            case 'date':
                return <div class="bp4-input-group">
                    <span class={"bp4-icon bp4-icon-" + input.leftIcon}></span>
                    <input type="date" id={input.id} name={input.name} disabled={input.disabled} value={input.value} defaultValue={input.dv} readOnly={input.readOnly} required={input.req}
                        min="1900-01-01" max="2100-01-01" className="bp4-input" style={{ width: '60%' }} />
                    {input.useTime
                        ? <input type="time" id={input.idTime} name={input.nameTime} disabled={input.disabled} value={input.valueTime} defaultValue={input.dvTime} readOnly={input.readOnly} required={input.req}
                            className="bp4-input" style={{ width: '40%', paddingLeft: '4px' }} />
                        : ''}
                </div>

            case 'select':
                return <div class="bp4-input-group">
                    <span class={"bp4-icon bp4-icon-" + input.leftIcon}></span>
                    <select
                        id={input.id} name={input.name} disabled={input.disabled} value={input.value} defaultValue={input.df} readOnly={input.readOnly} required={input.req}
                        onChange={input.onChange}
                        onSelect={input.onSelect}
                        onBlur={input.onBlur}
                        className={'bp4-input'}
                    >
                        {input.placeholder ? <option value={input.placeholder} disabled>{input.placeholder}</option> : ''}
                        {input.selectOptions.map(option => <option value={option.value ?? option.label}>{option.label}</option>)}
                    </select>
                    <span class={"bp4-icon bp4-icon-chevron-down"}></span>
                </div>

            case 'textarea':
                return <TEXTAREA
                    id={input.id} name={input.name} placeholder={input.placeholder} disabled={input.disabled} value={input.value} defaultValue={input.dv} readOnly={input.readOnly} required={input.req}
                    onChange={input.onChange}
                    onBlur={input.onBlur}
                    fill length={input.length ?? 2000} />

            default:
                return <InputGroup id={input.id} name={input.name} placeholder={input.placeholder} disabled={input.disabled} value={input.value} defaultValue={input.dv} readOnly={input.readOnly} required={input.req}
                    leftIcon={input.leftIcon}
                    intent={input.intent}
                    onChange={input.onChange}
                    onBlur={input.onBlur}
                    maxLength={input.length ?? 200}
                    rightElement={input.rightBtn ?
                        <Whisper placement="top" trigger="hover" controlId={input.label + '_hoover_pop'} speaker={<Popover>{input.rightBtn.label}</Popover>}>
                            <Button icon={input.rightBtn.icon} intent={input.rightBtn.intent} onClick={input.rightBtn.onClick} />
                        </Whisper> : false}
                />
        }
    }


    return (
        <form id={props.id} onSubmit={props.onSubmit} >
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
                <Row style={{ width: '100%' }}>
                    <Col xl={24} lg={24} md={24} sm={24} xs={24}>{props.submitBtn}</Col>
                </Row>
            </Grid>
        </form>
    );
}