import React from 'react';
import { Row, Col, Form, Button, InputGroup, Input } from 'rsuite';
import { Edit, Attachment } from '@rsuite/icons/';

export default function FUN_53_COMPONENT(props) {
    // ************************* DATA GETTERS ***************************** //
    const FUN_53 = props.FUN_53[props.currentVersion - 1];

    // *************************** BD CONSTS ****************************** //
    // ****************************** CONSTS ****************************** //
    const InputStyle = { margin: 0, padding: 3 };

    // ************************* DATA CONVERTERS ************************** //
    // ************************** JSX ELEMENTS **************************** //
    const FUN_531 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_53.name} />);
    const FUN_532 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_53.surname} />);
    const FUN_533 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_53.id_number} />);
    const FUN_534 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_53.role} />);
    const FUN_535 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_53.number} />);
    const FUN_536 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_53.email} />);
    const FUN_537 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_53.address} />);
    const FUN_5381 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_53.docs[0]} />);
    const FUN_5382 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_53.docs[1]} />);

    // ************************* JSX COMPONENTS *************************** //
    const form_531 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>5.3.1 Nombre</Form.ControlLabel>
        <Form.HelpText tooltip>Nombre del responsable de la solicitud</Form.HelpText>
        <InputGroup inside style={{ marginTop: 5 }}>
            <InputGroup.Addon>
                <Edit />
            </InputGroup.Addon>
            <Form.Control name="fun_1_12b" autoComplete="off" accepter={FUN_531} />
        </InputGroup>
    </Form.Group>

    const form_532 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>5.3.2 Apellido(s)</Form.ControlLabel>
        <Form.HelpText tooltip>Apellido(s) del responsable de la solicitud</Form.HelpText>
        <InputGroup inside style={{ marginTop: 5 }}>
            <InputGroup.Addon>
                <Edit />
            </InputGroup.Addon>
            <Form.Control name="fun_1_12b" autoComplete="off" accepter={FUN_532} />
        </InputGroup>
    </Form.Group>

    const form_533 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>5.3.3 Número de Identificación</Form.ControlLabel>
        <Form.HelpText tooltip>Número identificador del documento del responsable</Form.HelpText>
        <InputGroup inside style={{ marginTop: 5 }}>
            <InputGroup.Addon>
                <Edit />
            </InputGroup.Addon>
            <Form.Control name="fun_1_12b" autoComplete="off" accepter={FUN_533} />
        </InputGroup>
    </Form.Group>

    const form_534 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>5.3.4 En calidad de</Form.ControlLabel>
        <Form.HelpText tooltip>Rol o cualidad que ubica al responsble frente a la solicitud</Form.HelpText>
        <InputGroup inside style={{ marginTop: 5 }}>
            <InputGroup.Addon>
                <Edit />
            </InputGroup.Addon>
            <Form.Control name="fun_1_12b" autoComplete="off" accepter={FUN_534} />
        </InputGroup>
    </Form.Group>

    const form_535 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>5.3.5 Teléfono de Contacto</Form.ControlLabel>
        <Form.HelpText tooltip>Teléfono de contacto del responsable</Form.HelpText>
        <InputGroup inside style={{ marginTop: 5 }}>
            <InputGroup.Addon>
                <Edit />
            </InputGroup.Addon>
            <Form.Control name="fun_1_12b" autoComplete="off" accepter={FUN_535} />
        </InputGroup>
    </Form.Group>

    const form_536 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>5.3.6 Correo Electrónico</Form.ControlLabel>
        <Form.HelpText tooltip>Correo de contacto del responsable</Form.HelpText>
        <InputGroup inside style={{ marginTop: 5 }}>
            <InputGroup.Addon>
                <Edit />
            </InputGroup.Addon>
            <Form.Control name="fun_1_12b" autoComplete="off" accepter={FUN_536} />
        </InputGroup>
    </Form.Group>

    const form_537 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>5.3.7 Dirección para correspondencia</Form.ControlLabel>
        <Form.HelpText tooltip>Dirección de contacto del responsable</Form.HelpText>
        <InputGroup inside style={{ marginTop: 5 }}>
            <InputGroup.Addon>
                <Edit />
            </InputGroup.Addon>
            <Form.Control name="fun_1_12b" autoComplete="off" accepter={FUN_537} />
        </InputGroup>
    </Form.Group>

    const form_5381 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>5.3.8.1 Anexo: Documento de Identidad</Form.ControlLabel>
        <Form.HelpText tooltip>Documento anexado</Form.HelpText>
        <InputGroup inside style={{ marginTop: 5 }}>
            <InputGroup.Addon>
                <Attachment />
            </InputGroup.Addon>
            <Form.Control name="fun_1_12b" autoComplete="off" accepter={FUN_5381} />
        </InputGroup>
    </Form.Group>

    const fomr_5382 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>5.3.8.1 Anexo: Poder, mandato o autorización debidamente otorgado</Form.ControlLabel>
        <Form.HelpText tooltip>Documento anexado</Form.HelpText>
        <InputGroup inside style={{ marginTop: 5 }}>
            <InputGroup.Addon>
                <Attachment />
            </InputGroup.Addon>
            <Form.Control name="fun_1_12b" autoComplete="off" accepter={FUN_5382} />
        </InputGroup>
    </Form.Group>

    return (<>
        <Form layout='fluid' readOnly={props.readOnly}>
            <Row>
                <Col xs={24} sm={24} md={12} lg={8}>
                    {form_531}
                    {form_532}
                    {form_533}
                </Col >
                <Col xs={24} sm={24} md={12} lg={8}>
                    {form_534}
                    {form_535}
                    {form_536}
                </Col>

                <Col xs={24} sm={24} md={12} lg={8}>
                    {form_537}
                    {form_5381}
                    {fomr_5382}
                </Col>
            </Row>
            {!props.readOnly ? <Row className="text-center my-3">
                <Button appearance="primary" color="green">GUARDAR CAMBIOS</Button>
            </Row>
                : ""}

        </Form>
    </>);
}
