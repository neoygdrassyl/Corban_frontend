import React from 'react';
import { Row, Col, Form, Button, InputGroup, Checkbox, CheckboxGroup, RadioGroup, Radio, Input } from 'rsuite';
import { Edit } from '@rsuite/icons/';
import { FiMapPin } from 'react-icons/fi'
import TABLE_COMPONENT from '../../../resources/customs/components/table.component';

export default function FUN_52_COMPONENT(props) {
    // ************************* DATA GETTERS ***************************** //
    const FUN_52 = props.FUN_52;
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
        hint: "Nombre del profesional",
        hintTitle: 'NOMBRE TITULAR',
        cellData: row => <label>{row.name + " " + row.surname}</label>
    },
    {
        key: 'id_number',
        label: 'DOCUMENTO',
        align: "center",
        fixed: false,
        sortable: true,
        columnSize: 'md',
        bgColor: HeaderBgColor,
        hint: "El número identificador del documento del titular",
        hintTitle: 'DOCUMENTO',
        cellData: row => <label>{row.id_number}</label>
    },
    {
        key: 'number',
        label: 'TELEFONO',
        align: "center",
        fixed: false,
        sortable: true,
        columnSize: 'md',
        bgColor: HeaderBgColor,
        hint: "Telefono o número de contacto del profesional",
        hintTitle: 'NUMERO DE TELEFONO',
        cellData: row => <label>{row.number}</label>
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
        label: 'PROFESION',
        align: "center",
        fixed: false,
        sortable: true,
        columnSize: 'xl',
        bgColor: HeaderBgColor,
        hint: "La profesion que desempeña el profesional al momento de actuar en esta solicitud",
        hintTitle: 'PROFESION',
        cellData: row => <label>{row.role}</label>
    },
    {
        key: 'registration',
        label: 'MATRICULA',
        align: "center",
        fixed: false,
        sortable: true,
        columnSize: 'md',
        bgColor: HeaderBgColor,
        hint: "El identificador de la matrícula profesional",
        hintTitle: 'MATRICULA',
        cellData: row => <label>{row.registration}</label>
    },
    {
        key: 'registration_date',
        label: 'EXP. MATRICULA',
        align: "center",
        fixed: false,
        sortable: true,
        columnSize: 'md',
        bgColor: HeaderBgColor,
        hint: "La fecha en la cual fue expedida la matricular",
        hintTitle: 'EXPEDICION DE LA MATRICULA',
        cellData: row => <label>{row.registration_date}</label>
    },
    {
        key: 'expirience',
        label: 'EXPERIENCIA',
        align: "center",
        fixed: false,
        sortable: true,
        columnSize: 'md',
        bgColor: HeaderBgColor,
        hint: "La experiencia del profesional contada en meses",
        hintTitle: 'EXPERIENCIA',
        cellData: row => <label>{row.expirience} Meses</label>
    },
    {
        key: 'sanction',
        label: 'SANCION',
        align: "center",
        fixed: false,
        sortable: false,
        columnSize: 'md',
        bgColor: HeaderBgColor,
        hint: "¿El profesional esta actualmente sancionado?",
        hintTitle: 'SANCION',
        cellData: row => <label>{row.sanction ? <label className="text-danger fw-bold">SI</label> : "NO"}</label>
    },
    {
        key: 'supervision',
        label: 'SUPERVISION',
        align: "center",
        fixed: false,
        sortable: false,
        columnSize: 'md',
        bgColor: HeaderBgColor,
        hint: "¿El profesional necesita supervisión en esta solicitud?",
        hintTitle: 'SUPERVISION',
        cellData: row => <label>{row.supervision}</label>
    },]
    const table = <TABLE_COMPONENT data={FUN_52} columns={columns} loadStatus={props.loadStatus != 0 ? false : true} compact
        wordWrap />
    return (<>
        {table}
    </>);
}
