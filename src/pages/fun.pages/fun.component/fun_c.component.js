import React from 'react';
import { Row, Col, Form, Button, InputGroup, RadioGroup, Radio, Input, DatePicker } from 'rsuite';
import { Edit } from '@rsuite/icons/';

export default function FUN_C_COMPONENT(props) {
    // ************************* DATA GETTERS ***************************** //
    const FUN_C = props.FUN_C[props.currentVersion - 1];
    const currentItem = props.currentItem

    // *************************** BD CONSTS ****************************** //
    // ****************************** CONSTS ****************************** //
    const InputStyle = { margin: 0, padding: 3 };
    const radioNcheckStyle = { height: 27 };
    const dividerStyle = { margin: 5 };
    // ************************* DATA CONVERTERS ************************** //
    let validateDate = (date) => {
        if (date) return new Date(date)
        else return false;
    }
    // ************************** JSX ELEMENTS **************************** //
    const FUN_611 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_C.worker} />);
    const FUN_612 = React.forwardRef((props, ref) => <DatePicker {...props} ref={ref} defaultValue={validateDate(FUN_C.date)} format={"yyyy-MM-dd"} />);
    const FUN_613 = ( // RAD 
        <RadioGroup name="checkboxList4" readOnly={props.readOnly} defaultValue={FUN_C.condition}>
            <Radio value="1" style={radioNcheckStyle}>A. RADICACIÓN EN LEGAL Y DEBIDA FORMA</Radio>
            <Radio value="0" style={radioNcheckStyle}>B. RADICACIÓN INCOMPLETA</Radio>
        </RadioGroup>
    );
    const FUN_614 = ( // RAD 
        <RadioGroup name="checkboxList4" readOnly={props.readOnly} defaultValue={FUN_C.reciever_actor}>
            <Radio value="A" style={radioNcheckStyle}>A. TITULAR</Radio>
            <Radio value="B" style={radioNcheckStyle}>B. APODERADO</Radio>
            <Radio value="C" style={radioNcheckStyle}>C. MANDATARIO</Radio>
        </RadioGroup>
    );
    const FUN_615 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_C.reciever_name} />);
    const FUN_617 = React.forwardRef((props, ref) => <DatePicker {...props} ref={ref} defaultValue={validateDate(FUN_C.legal_date)} format={"yyyy-MM-dd"} />);
    const FUN_616 = React.forwardRef((props, ref) => <DatePicker {...props} ref={ref} defaultValue={validateDate(FUN_C.reciever_date)} format={"yyyy-MM-dd"} />);
    const FUN_618 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_C.reciever_id} />);
    const FUN_619 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_C.details} />);
    // ************************* JSX COMPONENTS *************************** //

    const form_611 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>6.1.1 Nombre Encargado de Revisión</Form.ControlLabel>
        <Form.HelpText tooltip>Nombre del profesional que realiza la revision inicial de la solicitud</Form.HelpText>
        <InputGroup inside style={{ marginTop: 5 }}>
            <InputGroup.Addon>
                <Edit />
            </InputGroup.Addon>
            <Form.Control name="fun_1_12b" autoComplete="off" accepter={FUN_611} />
        </InputGroup>
    </Form.Group>

    const form_612 = <Form.Group controlId="username-7" style={InputStyle}>
        <Form.ControlLabel>6.1.2 Fecha de Revisión</Form.ControlLabel>
        <Form.HelpText tooltip>Fecha en la cual el profesioal realizó la revisión</Form.HelpText>
        <Form.Control name="date_payment" accepter={FUN_612} block isoWeek />
    </Form.Group>

    const form_613 = <Form.Group controlId="username-7" style={InputStyle}>
        <Form.ControlLabel>6.1.6 Condicion de la Revisión</Form.ControlLabel>
        <Form.HelpText tooltip className="text-danger">El resultado y declaracion de la solicitud, ESTE CAMPO DEBE DE ACTUALIZARSE CUANDO LA SOLICITUD ESTE EN LEGAL Y DEBIDA FORMA.</Form.HelpText>
        <Form.Control name="checkbox" accepter={"checkbox"}>
            {FUN_613}
        </Form.Control>
    </Form.Group>

    const form_614 = <Form.Group controlId="username-7" style={InputStyle}>
        <Form.ControlLabel>6.1.5 Rol quien recibe</Form.ControlLabel>
        <Form.HelpText tooltip>El rol que desempeña la persona quien recibe frente a la solicitud</Form.HelpText>
        <Form.Control name="checkbox" accepter={"checkbox"}>
            {FUN_614}
        </Form.Control>
    </Form.Group>

    const form_615 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>6.1.3 Nombre quien recibe</Form.ControlLabel>
        <Form.HelpText tooltip>Nombre de la persona que recibe la notificacion de esta revision</Form.HelpText>
        <InputGroup inside style={{ marginTop: 5 }}>
            <InputGroup.Addon>
                <Edit />
            </InputGroup.Addon>
            <Form.Control name="fun_1_12b" autoComplete="off" accepter={FUN_615} />
        </InputGroup>
    </Form.Group>

    const form_616 = <Form.Group controlId="username-7" style={InputStyle}>
        <Form.ControlLabel>6.1.7 Fecha de Incompleto</Form.ControlLabel>
        <Form.HelpText tooltip>La fecha en la cual fue declarado como Incompleto, si ocurrió</Form.HelpText>
        <Form.Control name="date_payment" accepter={FUN_616} block isoWeek />
    </Form.Group>

    const form_617 = <Form.Group controlId="username-7" style={InputStyle}>
        <Form.ControlLabel>6.1.8 Fecha de Legal y Debida Forma</Form.ControlLabel>
        <Form.HelpText tooltip>La fecha en la ual fue declarad como legal y debida forma.</Form.HelpText>
        <Form.Control name="date_payment" accepter={FUN_617} block isoWeek />
    </Form.Group>

    const form_618 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>6.1.4 Documento quien recibe</Form.ControlLabel>
        <Form.HelpText tooltip>Documento identificador de la persona que recibe la notificacion de esta revision</Form.HelpText>
        <InputGroup inside style={{ marginTop: 5 }}>
            <InputGroup.Addon>
                <Edit />
            </InputGroup.Addon>
            <Form.Control name="fun_1_12b" autoComplete="off" accepter={FUN_618} />
        </InputGroup>
    </Form.Group>

    // ******************************** APIS ****************************** //
    // *************************** DATA TABLE  **************************** //



    return (<>
        <Form layout='fluid' readOnly={props.readOnly}>
            <Row>
                <Col xs={24} sm={24} md={12} lg={6}>
                    {form_611}
                    {form_612}
                </Col>

                <Col xs={24} sm={24} md={12} lg={6}>
                    {form_615}
                    {form_618}
                </Col>

                <Col xs={24} sm={24} md={12} lg={6}>
                    {form_614}
                </Col>

                <Col xs={24} sm={24} md={12} lg={6}>
                    {form_613}
                    {form_616}
                    {form_617}
                </Col>
            </Row>
            {!props.readOnly ? <Row className="text-center my-3">
                <Button appearance="primary" color="green">GUARDAR CAMBIOS</Button>
            </Row>
                : ""}

        </Form>
    </>);
}
