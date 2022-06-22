import React from 'react';
import { Row, Col, Form, Button, InputGroup, Checkbox, CheckboxGroup, RadioGroup, Radio, Input } from 'rsuite';
import { Edit } from '@rsuite/icons/';
import { FiMapPin } from 'react-icons/fi'
import TABLE_COMPONENT from '../../../resources/customs/components/table.component';

export default function FUN_51_COMPONENT(props) {
    // ************************* DATA GETTERS ***************************** //
    const FUN_51 = props.FUN_51;
    
    // *************************** BD CONSTS ****************************** //
    // ****************************** CONSTS ****************************** //
    const HeaderBgColor = '#162e5a';
    // ************************* DATA CONVERTERS ************************** //
    // ************************** JSX ELEMENTS **************************** //
    // ************************* JSX COMPONENTS *************************** //
    // *************************** DATA TABLE  **************************** //
    var columns = [{
        key: 'name',
        label: 'NOMBRE',
        align: "center",
        fixed: true,
        sortable: true,
        columnSize: 'lg',
        bgColor: HeaderBgColor,
        hint: "Nombre de la persona Titular de la solicitud",
        hintTitle: 'NOMBRE TITULAR',
        cellData: row => <label>{row.name + " " + row.surname}</label>
    },
    {
        key: 'type',
        label: 'TIPO PERSONA',
        align: "center",
        fixed: false,
        sortable: true,
        columnSize: 'lg',
        bgColor: HeaderBgColor,
        hint: "El tipo de persona que hace de titular, Natural o Juridca",
        hintTitle: 'TIPO PERSONA',
        cellData: row => <label>{row.type}</label>
    },
    {
        key: 'id_number',
        label: 'DOCUMENTO',
        align: "center",
        fixed: false,
        sortable: true,
        columnSize: 'lg',
        bgColor: HeaderBgColor,
        hint: "El número identificador del documento del titular",
        hintTitle: 'NUMERO DE DOCUMENTO',
        cellData: row => <label>{row.id_number}</label>
    },
    {
        key: 'rep_name',
        label: 'REP. LEGAL',
        align: "center",
        fixed: false,
        sortable: true,
        columnSize: 'lg',
        bgColor: HeaderBgColor,
        hint: "Nombre del Representante legal del titular, cuando sea el caso",
        hintTitle: 'REPRESENTANTE LEGAL',
        cellData: row => <label>{row.rep_name}</label>
    },
    {
        key: 'rep_id_number',
        label: 'REP. LEGAL DOC.',
        align: "center",
        fixed: false,
        sortable: true,
        columnSize: 'lg',
        bgColor: HeaderBgColor,
        hint: "El número identificador del documento del Representante legal del titular, cuando sea el caso",
        hintTitle: 'DOCUMENTO REPRESENTANTE LEGAL',
        cellData: row => <label>{row.rep_id_number}</label>
    },
    {
        key: 'nunber',
        label: 'TELEFONO',
        align: "center",
        fixed: false,
        sortable: true,
        columnSize: 'lg',
        bgColor: HeaderBgColor,
        hint: "Telefono o número de contacto del titular",
        hintTitle: 'TELEFONO',
        cellData: row => <label>{row.nunber}</label>
    },
    {
        key: 'email',
        label: 'CORREO',
        align: "center",
        fixed: false,
        sortable: true,
        columnSize: 'lg',
        bgColor: HeaderBgColor,
        hint: "Correo eletrónico del titular",
        hintTitle: 'CORREO',
        cellData: row => <label>{row.email}</label>
    },
    {
        key: 'role',
        label: 'ROL',
        align: "center",
        fixed: false,
        sortable: true,
        columnSize: 'lg',
        bgColor: HeaderBgColor,
        hint: "El rol que desempeña el titular frente a esta solicitud",
        hintTitle: 'ROL DEL TITULAR',
        cellData: row => <label>{row.role}</label>
    },
    {
        key: 'docs',
        label: 'DOCUMENTOS',
        align: "center",
        fixed: false,
        sortable: false,
        columnSize: 'lg',
        bgColor: HeaderBgColor,
        hint: "Hiper vinculos de los documentos del titular",
        hintTitle: 'DOCUMENTOS',
        cellData: row => <label>{row.docs}</label>
    },]
    const table = <TABLE_COMPONENT data={FUN_51} columns={columns} loadStatus={props.loadStatus != 0 ? false : true} compact
        wordWrap />
    return (<>
        {table}
    </>);
}
