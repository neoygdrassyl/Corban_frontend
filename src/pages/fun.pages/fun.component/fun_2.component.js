import React from 'react';
import { Row, Col, Form, Button, InputGroup, RadioGroup, Radio, Input } from 'rsuite';
import { Edit } from '@rsuite/icons/';
import { FiMapPin } from 'react-icons/fi'

export default function FUN_2_COMPONENT(props) {
    // ************************* DATA GETTERS ***************************** //
    const FUN_2 = props.FUN_2;
    // *************************** BD CONSTS ****************************** //
    // ****************************** CONSTS ****************************** //
    const InputStyle = { margin: 0, padding: 5 };
    const radioNcheckStyle = { height: 25 };

    // ************************* DATA CONVERTERS ************************** //
    // ************************** JSX ELEMENTS **************************** //
    const FUN_211 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_2.direccion} as={"textarea"} />);
    const FUN_212 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_2.direccion_ant} as={"textarea"} />);
    const FUN_22 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_2.catastral} />);
    const FUN_23 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_2.matricula} />);
    const FUN_24 = ( // RAD
        <RadioGroup name="checkboxList3" readOnly={props.readOnly} defaultValue={FUN_2.suelo}>
            <Radio value="A" style={radioNcheckStyle}>A. Urbano</Radio>
            <Radio value="B" style={radioNcheckStyle}>B. Rural</Radio>
            <Radio value="C" style={radioNcheckStyle}>C. De Expansión</Radio>
        </RadioGroup>
    );
    const FUN_25 = ( // RAD + OTHER
        <RadioGroup name="checkboxList3" readOnly={props.readOnly} defaultValue={FUN_2.lote_pla}>
            <Radio value="A" style={radioNcheckStyle}>A. Plano del Lote</Radio>
            <Radio value="B" style={radioNcheckStyle}>B. Plano Topográfico</Radio>
        </RadioGroup>
    );
    const FUN_25_input = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_2.lote_pla > 1 ? FUN_2.lote_pla : ''} />);

    const FUN_261 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_2.barrio} size="xs" />);
    const FUN_262 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_2.estrato} size="xs" />);
    const FUN_263 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_2.vereda} size="xs" />);
    const FUN_264 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_2.comuna} size="xs" />);
    const FUN_265 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_2.sector} size="xs" />);
    const FUN_266 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_2.corregimiento} size="xs" />);
    const FUN_267 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_2.manzana} size="xs" />);
    const FUN_268 = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_2.lote} size="xs" />);
    // ************************* JSX COMPONENTS *************************** //

    const form_211 = <Form.Group controlId="password-7" style={InputStyle}>
        <Form.ControlLabel>2.1 Dirección o Nomenclatura actual</Form.ControlLabel>
        <Form.HelpText tooltip>La o las direcciones del predio de la solicitud</Form.HelpText>
        <Form.Control name="textarea" accepter={FUN_211} rows={2} />
    </Form.Group>

    const form_212 = <Form.Group controlId="password-7" style={InputStyle}>
        <Form.ControlLabel>2.1 Dirección(es) Anterior(es)</Form.ControlLabel>
        <Form.HelpText tooltip>Direcciones anteriores del predio que ya no se encuentren en uso</Form.HelpText>
        <Form.Control name="textarea" accepter={FUN_212} rows={2} />
    </Form.Group>

    const form_23 = <Form.Group controlId="password-7" style={InputStyle}>
        <Form.ControlLabel>2.3 No. Matrícula Inmobiliaria</Form.ControlLabel>
        <Form.HelpText tooltip>El Número de la Matrícula o Predial. Si hay mas separelas por coma (,)</Form.HelpText>
        <InputGroup inside>
            <InputGroup.Addon>
                <Edit />
            </InputGroup.Addon>
            <Form.Control name="id_payment" autoComplete="off" accepter={FUN_23} />
        </InputGroup>
    </Form.Group>

    const form_22 = <Form.Group controlId="password-7" style={InputStyle}>
        <Form.ControlLabel>2.2 Identificación Catastral</Form.ControlLabel>
        <Form.HelpText tooltip>Número catrastral.  Si hay mas separelas por coma (,)</Form.HelpText>
        <InputGroup inside>
            <InputGroup.Addon>
                <Edit />
            </InputGroup.Addon>
            <Form.Control name="id_payment" autoComplete="off" accepter={FUN_22} />
        </InputGroup>
    </Form.Group>

    const form_24 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>2.4 Clasificación del Suelo</Form.ControlLabel>
        <Form.HelpText tooltip>Clasificación del Suelo.</Form.HelpText>
        <Form.Control name="checkbox" accepter={"checkbox"}>
            {FUN_24}
        </Form.Control>
    </Form.Group>

    const form_25 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>2.5 Planimetría del Lote</Form.ControlLabel>
        <Form.HelpText tooltip>Planimetría del Lote.</Form.HelpText>
        <Form.Control name="checkbox" accepter={"checkbox"}>
            {FUN_25}
            <InputGroup inside style={{ marginTop: 10 }}>
                <InputGroup.Addon>
                    <Edit />
                </InputGroup.Addon>
                <Form.Control name="fun_1_12b" autoComplete="off" placeholder="Otro" accepter={FUN_25_input} />
            </InputGroup>
        </Form.Control>
    </Form.Group>

    const form_261 = <Form.Group controlId="password-7" style={InputStyle}>
        <Form.ControlLabel>2.6 Información General</Form.ControlLabel>
        <Form.HelpText tooltip>Información sobre la localización del predio.</Form.HelpText>
        <InputGroup>
            <InputGroup.Addon className="bg-cold text-light">  <FiMapPin />  Barrio o Urbanzación </InputGroup.Addon>
            <Form.Control name="id_payment" autoComplete="off" accepter={FUN_261} />
        </InputGroup>
        <InputGroup style={{ marginTop: 4 }}>
            <InputGroup.Addon className="bg-cold text-light">  <FiMapPin />  Estrato </InputGroup.Addon>
            <Form.Control name="id_payment" autoComplete="off" accepter={FUN_262} />
        </InputGroup>
        <InputGroup style={{ marginTop: 4 }}>
            <InputGroup.Addon className="bg-cold text-light">  <FiMapPin />   Vereda </InputGroup.Addon>
            <Form.Control name="id_payment" autoComplete="off" accepter={FUN_263} />
        </InputGroup>
        <InputGroup style={{ marginTop: 4 }}>
            <InputGroup.Addon className="bg-cold text-light">  <FiMapPin />   Comuna </InputGroup.Addon>
            <Form.Control name="id_payment" autoComplete="off" accepter={FUN_264} />
        </InputGroup>
    </Form.Group>

    const form_262 = <Form.Group controlId="password-7" style={InputStyle}>
        <InputGroup style={{ marginTop: 4 }}>
            <InputGroup.Addon className="bg-cold text-light">  <FiMapPin />   Sector </InputGroup.Addon>
            <Form.Control name="id_payment" autoComplete="off" accepter={FUN_265} />
        </InputGroup>
        <InputGroup style={{ marginTop: 4 }}>
            <InputGroup.Addon className="bg-cold text-light">  <FiMapPin />   Corregimiento </InputGroup.Addon>
            <Form.Control name="id_payment" autoComplete="off" accepter={FUN_266} />
        </InputGroup>
        <InputGroup style={{ marginTop: 4 }}>
            <InputGroup.Addon className="bg-cold text-light">  <FiMapPin />   Manzana </InputGroup.Addon>
            <Form.Control name="id_payment" autoComplete="off" accepter={FUN_267} />
        </InputGroup>
        <InputGroup style={{ marginTop: 4 }}>
            <InputGroup.Addon className="bg-cold text-light">  <FiMapPin />   Lote </InputGroup.Addon>
            <Form.Control name="id_payment" autoComplete="off" accepter={FUN_268} />
        </InputGroup>
    </Form.Group>

    return (<>
        <Form layout='fluid' readOnly={props.readOnly}>
            <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
                    {form_211}
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                    {form_212}
                </Col>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={6}>
                        {form_22}
                        {form_23}
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6}>
                        {form_24}
                        {form_25}
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6}>
                        {form_261}
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6}>
                        <br />
                        {form_262}
                    </Col>
                </Row>
            </Row>
            {!props.readOnly ? <Row className="text-center my-3">
                <Button appearance="primary" color="green">GUARDAR CAMBIOS</Button>
            </Row>
                : ""}

        </Form>
    </>);
}
