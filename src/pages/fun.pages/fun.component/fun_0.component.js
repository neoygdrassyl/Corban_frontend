import React, { useContext } from 'react';
import { Row, Col, Form, Button, Input, InputGroup, DatePicker, SelectPicker } from 'rsuite';
import { CheckOutline, Edit } from '@rsuite/icons/';

import { CurrentItemConext } from '../fun.page';


function useCurrentItems() { return useContext(CurrentItemConext); }

export default function FUN_0_COMPONENT(props) {
    // ************************* DATA GETTERS ***************************** //
    const CurrentItems = useCurrentItems();
    const FUN_0 = props.FUN_0;
    const FUN_1 = props.FUN_1[props.currentVersion - 1];
    const tabs = CurrentItems.currentTabs;
    const activeKey = 'gen:' + FUN_0.id;
    // *************************** BD CONSTS ****************************** //
    // ****************************** CONSTS ****************************** //
    const InputStyle = { margin: 0, padding: 0 }
    const CATEGORY_data = [
        { label: "SIN CATEGORIZAR", value: "0" },
        { label: "CATEGORIA I", value: "i" },
        { label: "CATEGORIA II", value: "ii" },
        { label: "CATEGORIA III", value: "iii" },
        { label: "CATEGORIA IV", value: "iv" },
        { label: "OTRAS ACTUACIONES", value: "oa" },
    ]
    // ************************* DATA CONVERTERS ************************** //
    const getCurrentTabItem = (activeKey) => {
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].eventKey.includes(activeKey)) return tabs[i].item;
        }
        return null;
    }
    const defaultValue_Select = FUN_0.type ?? '0';
    const defaultValue_Date = getCurrentTabItem(activeKey).clock_payment ? new Date(getCurrentTabItem(activeKey).clock_payment) : false;
    const defaultValue_IdPayment = FUN_0.id_payment ?? '';;
    const defaultValue_Desc = FUN_1.description ?? '';
    // ************************** JSX ELEMENTS **************************** //
    const Textarea = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={defaultValue_Desc} as={"textarea"} />);
    const PaymentID = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={defaultValue_IdPayment} />);
    const Select = React.forwardRef((props, ref) => <SelectPicker  {...props} ref={ref} defaultValue={defaultValue_Select} />);
    const Datepicker = React.forwardRef((props, ref) => <DatePicker  {...props} ref={ref} defaultValue={defaultValue_Date} format={"yyyy-MM-dd"} />);
    // ************************* JSX COMPONENTS *************************** //

    const form_payment_date = <Form.Group controlId="username-7" style={InputStyle}>
        <Form.ControlLabel>Fecha de Pago:</Form.ControlLabel>
        <Form.HelpText tooltip>Fecha en la cual se realiza el Pago Fijo</Form.HelpText>
        <Form.Control name="date_payment" accepter={Datepicker} block isoWeek />
    </Form.Group>

    const form_payment_id = <Form.Group controlId="password-7" style={InputStyle}>
        <Form.ControlLabel>Codigo de Pago:</Form.ControlLabel>
        <Form.HelpText tooltip>Concecutivo o serial de la factura del Pago Fijo.</Form.HelpText>
        <InputGroup inside>
            <InputGroup.Addon>
                <Edit />
            </InputGroup.Addon>
            <Form.Control name="id_payment" autoComplete="off" accepter={PaymentID} />
        </InputGroup>
    </Form.Group>

    const form_category = <Form.Group controlId="password-7" style={InputStyle}>
        <Form.ControlLabel>Categorización de la Solicitud:</Form.ControlLabel>
        <Form.HelpText tooltip>Categoria de la solictud, puede ser: I, II, III, IV</Form.HelpText>
        <InputGroup inside>
            <InputGroup.Addon>
                <CheckOutline />
            </InputGroup.Addon>
            <Form.Control name="type" accepter={Select} block data={CATEGORY_data} searchable={false} />
        </InputGroup>
    </Form.Group>

    const form_details = <Form.Group controlId="textarea-1">
        <Form.ControlLabel>Descripcion de la Solicitud:</Form.ControlLabel>
        <Form.HelpText tooltip>Descripcón general de la solicitud</Form.HelpText>
        <Form.Control name="textarea" accepter={Textarea} rows={7} />
    </Form.Group>

    return (<>
        <Form layout='fluid' readOnly={props.readOnly} >
            <Row>
                <Col xs={24} sm={24} md={24} lg={6}>
                    {form_payment_date}
                    {form_payment_id}
                    {form_category}
                </Col>
                <Col xs={24} sm={24} md={24} lg={18}>
                    {form_details}
                </Col>
            </Row>
            {!props.readOnly ? <Row className="text-center my-3">
                <Button appearance="primary" color="green">GUARDAR CAMBIOS</Button>
            </Row>
                : ""}

        </Form>
    </>);
}
