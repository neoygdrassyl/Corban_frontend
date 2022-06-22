import React from 'react';
import { Row, Col, Form, Button, InputGroup, Checkbox, CheckboxGroup, RadioGroup, Radio, Input, Divider } from 'rsuite';
import { Edit } from '@rsuite/icons/';

export default function FUN_1_COMPONENT(props) {
    // ************************* DATA GETTERS ***************************** //
    const FUN_1 = props.FUN_1[props.currentVersion - 1];

    // *************************** BD CONSTS ****************************** //
    // ****************************** CONSTS ****************************** //
    const InputStyle = { margin: 0, padding: 5 };
    const radioNcheckStyle = { height: 27 };
    const dividerStyle = { margin: 5 };

    // ************************* DATA CONVERTERS ************************** //
    // ************************** JSX ELEMENTS **************************** //
    const FUN_11 = ( // cb
        <CheckboxGroup name="checkboxList1" readOnly={props.readOnly} defaultValue={FUN_1.tipo}  >
            <Checkbox value="A" style={radioNcheckStyle}>A. Licencia de Urbanización</Checkbox>
            <Checkbox value="B" style={radioNcheckStyle}>B. Licencia de Parcelación</Checkbox>
            <Checkbox value="C" style={radioNcheckStyle}>C. Licencia de Subdivisión</Checkbox>
            <Checkbox value="D" style={radioNcheckStyle}>D. Licencia de Construcción</Checkbox>
            <Checkbox value="E" style={radioNcheckStyle}>E. Intervención y ocupación del espacio Público</Checkbox>
            <Checkbox value="F" style={radioNcheckStyle}>F. Reconocimiento de la existencia de una edificación</Checkbox>
            <Checkbox value="G" style={radioNcheckStyle}>G. Otras Actuaciones</Checkbox>
        </CheckboxGroup>
    );
    const FUN_12 = ( //  RAD + OTHER
        <RadioGroup name="checkboxList2" readOnly={props.readOnly} defaultValue={FUN_1.tramite.length == 1 ? FUN_1.tramite : false}>
            <Radio value="A" style={radioNcheckStyle}>A. Inicial</Radio>
            <Radio value="B" style={radioNcheckStyle}>B. Prórroga</Radio>
            <Radio value="C" style={radioNcheckStyle}>C. Modificación de Licencia Vigente</Radio>
            <Radio value="D" style={radioNcheckStyle}>D. Revalidación</Radio>
        </RadioGroup>
    );
    const FUN_12_input = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_1.tramite.length > 1 ? FUN_1.tramite : ''} />);
    const FUN_13 = ( // RAD
        <RadioGroup name="checkboxList3" readOnly={props.readOnly} defaultValue={FUN_1.m_urb}>
            <Radio value="A" style={radioNcheckStyle}>A. Desarrollo</Radio>
            <Radio value="B" style={radioNcheckStyle}>B. Saneamiento</Radio>
            <Radio value="C" style={radioNcheckStyle}>C. Reurbanización</Radio>
        </RadioGroup>
    );

    const FUN_14 = ( // RAD
        <RadioGroup name="checkboxList4" readOnly={props.readOnly} defaultValue={FUN_1.m_sub}>
            <Radio value="A" style={radioNcheckStyle}>A. Subdivisión rural</Radio>
            <Radio value="B" style={radioNcheckStyle}>B. Subdivisión urbana</Radio>
            <Radio value="C" style={radioNcheckStyle}>C. Reloteo</Radio>
        </RadioGroup>
    );
    const FUN_15 = ( // CB
        <CheckboxGroup name="checkboxList4" readOnly={props.readOnly} defaultValue={FUN_1.m_lic}>
            <Checkbox value="A" style={radioNcheckStyle}>A. Obra Nueva</Checkbox>
            <Checkbox value="B" style={radioNcheckStyle}>B. Ampliación</Checkbox>
            <Checkbox value="C" style={radioNcheckStyle}>C. Adecuación</Checkbox>
            <Checkbox value="D" style={radioNcheckStyle}>D. Modificación</Checkbox>
            <Checkbox value="E" style={radioNcheckStyle}>E. Restauración</Checkbox>
            <Checkbox value="F" style={radioNcheckStyle}>F. Reforzamiento Estructural</Checkbox>
            <Checkbox value="G" style={radioNcheckStyle}>G.1 Demolición: Total</Checkbox>
            <Checkbox value="g" style={radioNcheckStyle}>G.2 Demolición Parcial</Checkbox>
            <Checkbox value="H" style={radioNcheckStyle}>H. Reconstrucción</Checkbox>
            <Checkbox value="I" style={radioNcheckStyle}>I. Cerramiento</Checkbox>
        </CheckboxGroup>
    );
    const FUN_16 = ( // CB + OTHER
        <CheckboxGroup name="checkboxList4" readOnly={props.readOnly} defaultValue={Array.isArray(FUN_1.usos) ? FUN_1.usos : []}>
            <Checkbox value="A" style={radioNcheckStyle}>A. Vivienda</Checkbox>
            <Checkbox value="B" style={radioNcheckStyle}>B. Comercio y/o Servicios</Checkbox>
            <Checkbox value="C" style={radioNcheckStyle}>C. Institucional</Checkbox>
            <Checkbox value="D" style={radioNcheckStyle}>D. Industrial</Checkbox>
        </CheckboxGroup>
    );
    const FUN_16_input = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={!Array.isArray(FUN_1.usos) ? FUN_1.usos : ''} />);


    const FUN_17 = ( // RAD 
        <RadioGroup name="checkboxList4" readOnly={props.readOnly} defaultValue={FUN_1.area}>
            <Radio value="A" style={radioNcheckStyle}>A. Menor a 2000 m2</Radio>
            <Radio value="B" style={radioNcheckStyle}>B. Igual o Mayor a 2000 m2</Radio>
            <Radio value="C" style={radioNcheckStyle}>C. Alcanza o supera mediante ampliación los 2000 m2</Radio>
        </RadioGroup>
    );


    const FUN_18 = ( // RAD 
        <RadioGroup name="checkboxList4" readOnly={props.readOnly} defaultValue={FUN_1.vivienda}>
            <Radio value="A" style={radioNcheckStyle}>A. VIP</Radio>
            <Radio value="B" style={radioNcheckStyle}>B. VIS</Radio>
            <Radio value="C" style={radioNcheckStyle}>C. NO VIS</Radio>
        </RadioGroup>
    );

    const FUN_19 = ( // RAD 
        <RadioGroup name="checkboxList4" readOnly={props.readOnly} defaultValue={FUN_1.cultural}>
            <Radio value="A" style={radioNcheckStyle}>A. SI</Radio>
            <Radio value="B" style={radioNcheckStyle}>B. NO</Radio>
        </RadioGroup>
    );

    const FUN_1101 = ( // RAD 
        <RadioGroup name="checkboxList4" readOnly={props.readOnly} defaultValue={FUN_1.regla_1}>
            <Radio value="A" style={radioNcheckStyle}>A. Medidas Pasivas</Radio>
            <Radio value="B" style={radioNcheckStyle}>B. Medidas Activas</Radio>
            <Radio value="C" style={radioNcheckStyle}>C. Medidas Activas y Pasivas</Radio>
        </RadioGroup>
    );

    const FUN_1102 = ( // RAD + OTHERS
        <RadioGroup name="checkboxList4" readOnly={props.readOnly} defaultValue={FUN_1.regla_2.length == 1 ? FUN_1.regla_2 : ''}>
            <Radio value="A" style={radioNcheckStyle}>A. Frío</Radio>
            <Radio value="B" style={radioNcheckStyle}>B. Templado</Radio>
            <Radio value="C" style={radioNcheckStyle}>C. Cálido Seco</Radio>
            <Radio value="D" style={radioNcheckStyle}>D. Cálido Húmedo</Radio>
        </RadioGroup>
    );
    const FUN_1102_input = React.forwardRef((props, ref) => <Input {...props} ref={ref} defaultValue={FUN_1.regla_2.length > 1 ? FUN_1.regla_2 : ''} />);

    // ************************* JSX COMPONENTS *************************** //
    const form_11 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>1.1 Tipo de Solicitud</Form.ControlLabel>
        <Form.HelpText tooltip>El tipo de solicitud basado en el numeral 1.1 del Formulario Unico Nacional</Form.HelpText>
        <Form.Control name="checkbox" accepter={"checkbox"} inline>
            {FUN_11}
        </Form.Control>
    </Form.Group>

    const form_12 = <Form.Group controlId="username-7" style={InputStyle}>
        <Form.ControlLabel>1.2 Objeto del Tramite</Form.ControlLabel>
        <Form.HelpText tooltip>El objecto u motivo de la solicitud basado en el numeral 1.2 del Formulario Unico Nacional</Form.HelpText>
        <Form.Control name="checkbox" accepter={"checkbox"}>
            {FUN_12}
            <InputGroup inside style={{ marginTop: 10 }}>
                <InputGroup.Addon>
                    <Edit />
                </InputGroup.Addon>
                <Form.Control name="fun_1_12b" autoComplete="off" placeholder="Otro" accepter={FUN_12_input} />
            </InputGroup>
        </Form.Control>
    </Form.Group>

    const form_13 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>1.3 Modalidad Licencia de Urbanización</Form.ControlLabel>
        <Form.HelpText tooltip>Basado en el numeral 1.3 del Formulario Unico Naciona, Si en el punto 1.1 se ha seleccionado A. Licencia de Urbanización, se debe de especifica este punto.</Form.HelpText>
        <Form.Control name="checkbox" accepter={"checkbox"}>
            {FUN_13}
        </Form.Control>
    </Form.Group>

    const form_14 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>1.4 Modalidad Licencia de Subdivisión</Form.ControlLabel>
        <Form.HelpText tooltip>Basado en el numeral 1.4 del Formulario Unico Naciona, Si en el punto 1.1 se ha seleccionado C. Licencia de Urbanización, se debe de especifica este punto.</Form.HelpText>
        <Form.Control name="checkbox" accepter={"checkbox"}>
            {FUN_14}
        </Form.Control>
    </Form.Group>

    const form_15 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>1.5 Modalidad Licencia de Construcción</Form.ControlLabel>
        <Form.HelpText tooltip>Basado en el numeral 1.5 del Formulario Unico Naciona, Si en el punto 1.1 se ha seleccionado D. Licencia de Construcción ó F. Reconocimiento de la existencia de una edificación , se debe de especifica este punto.</Form.HelpText>
        <Form.Control name="checkbox" accepter={"checkbox"}>
            {FUN_15}
        </Form.Control>
    </Form.Group>

    const form_16 = <Form.Group controlId="checkbox-7" style={InputStyle} >
        <Form.ControlLabel>1.6 Usos</Form.ControlLabel>
        <Form.HelpText tooltip>Basado en el numeral 1.6 del Formulario Unico Naciona, seleccione el uso destinado para esta solicitud.</Form.HelpText>
        <Form.Control name="checkbox" accepter={"checkbox"}>
            {FUN_16}
            <InputGroup inside style={{ marginTop: 10 }}>
                <InputGroup.Addon>
                    <Edit />
                </InputGroup.Addon>
                <Form.Control name="fun_1_12b" autoComplete="off" placeholder="Otro" accepter={FUN_16_input} />
            </InputGroup>
        </Form.Control>
    </Form.Group>

    const form_17 = <Form.Group controlId="checkbox-7" style={InputStyle} >
        <Form.ControlLabel>1.7 Área Construida</Form.ControlLabel>
        <Form.HelpText tooltip>La aproximacion del área construida.</Form.HelpText>
        <Form.Control name="checkbox" accepter={"checkbox"}>
            {FUN_17}
        </Form.Control>
    </Form.Group>

    const form_18 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>1.8 Tipo de Vivienda</Form.ControlLabel>
        <Form.HelpText tooltip>Tipo de vivienda, VIP, Vivienda de Interes Social o No Vivienda de Interes Social.</Form.HelpText>
        <Form.Control name="checkbox" accepter={"checkbox"}>
            {FUN_18}
        </Form.Control>
    </Form.Group>

    const form_19 = <Form.Group controlId="checkbox-7" style={InputStyle}>
        <Form.ControlLabel>1.9 Bien de Interés Cultural</Form.ControlLabel>
        <Form.HelpText tooltip>Determina si la solicitud es de Interes Cultural o no.</Form.HelpText>
        <Form.Control name="checkbox" accepter={"checkbox"}>
            {FUN_19}
        </Form.Control>
    </Form.Group>

    const form_101 = <Form.Group controlId="checkbox-7" style={InputStyle} >
        <Form.ControlLabel>1.10.1 Declaración sobre medidas de construcción sostenible</Form.ControlLabel>
        <Form.HelpText tooltip>Medidas a tomar en la solicitud, si no se es determinada, la curaduria puede decidir a discreción.</Form.HelpText>
        <Form.Control name="checkbox" accepter={"checkbox"}>
            {FUN_1101}
        </Form.Control>
    </Form.Group>

    const form_102 = <Form.Group controlId="checkbox-7" style={InputStyle} >
        <Form.ControlLabel>1.10.2 Zónificacion Climática</Form.ControlLabel>
        <Form.HelpText tooltip>Zona climática de la solicitud.</Form.HelpText>
        <Form.Control name="checkbox" accepter={"checkbox"}>
            {FUN_1102}
            <InputGroup inside style={{ marginTop: 10 }}>
                <InputGroup.Addon>
                    <Edit />
                </InputGroup.Addon>
                <Form.Control name="fun_1_12b" autoComplete="off" placeholder="Otro" accepter={FUN_1102_input} />
            </InputGroup>
        </Form.Control>
    </Form.Group>

    return (<>
        <Form layout='fluid' readOnly={props.readOnly}>
            <Row>
                <Col xs={24} sm={24} md={12} lg={8}>
                    {form_11}
                    <Divider style={dividerStyle} />
                    {form_12}
                    <Divider style={dividerStyle} />
                    {form_13}
                    <Divider style={dividerStyle} />
                    {form_14}
                </Col>

                <Col xs={24} sm={24} md={12} lg={8}>
                    {form_15}
                    <Divider style={dividerStyle} />
                    {form_16}
                    <Divider style={dividerStyle} />
                    {form_17}
                </Col>

                <Col xs={24} sm={24} md={12} lg={8}>
                    {form_18}
                    <Divider style={dividerStyle} />
                    {form_19}
                    <Divider style={dividerStyle} />
                    {form_101}
                    <Divider style={dividerStyle} />
                    {form_102}
                </Col>
            </Row>
            {!props.readOnly ? <Row className="text-center my-3">
                <Button appearance="primary" color="green">GUARDAR CAMBIOS</Button>
            </Row>
                : ""}

        </Form>
    </>);
}
