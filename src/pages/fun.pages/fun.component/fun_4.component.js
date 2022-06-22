import React from 'react';
import { Row, Col, Form, Button, InputGroup, Checkbox, CheckboxGroup, RadioGroup, Radio, Input } from 'rsuite';
import { Edit } from '@rsuite/icons/';
import { FiMapPin } from 'react-icons/fi'
import TABLE_COMPONENT from '../../../resources/customs/components/table.component';

export default function FUN_4_COMPONENT(props) {
    // ************************* DATA GETTERS ***************************** //
    const FUN_4 = props.FUN_4;
  
    // *************************** BD CONSTS ****************************** //
    // ****************************** CONSTS ****************************** //
    const HeaderBgColor = '#162e5a';
    // ************************* DATA CONVERTERS ************************** //
    // ************************** JSX ELEMENTS **************************** //
    // ************************* JSX COMPONENTS *************************** //
    // *************************** DATA TABLE  **************************** //

    var columns = [{
        key: 'coord',
        label: 'LINDEROS',
        align: "center",
        fixed: true,
        sortable: true,
        columnSize: 'lg',
        bgColor: HeaderBgColor,
        hint: "Linderos del predio",
        hintTitle: 'LINDEROS',
        cellData: row => <label>{row.coord}</label>
    },
    {
        key: 'longitud',
        label: 'LONGITUD',
        align: "center",
        fixed: false,
        sortable: true,
        columnSize: 'lg',
        bgColor: HeaderBgColor,
        hint: "Distancia el Lindero",
        hintTitle: 'LONGITUD',
        cellData: row => <label>{row.longitud}</label>
    },
    {
        key: 'colinda',
        label: 'COLINDA CON',
        align: "center",
        fixed: false,
        sortable: false,
        columnSize: 'xl',
        bgColor: HeaderBgColor,
        hint: "El vecino con el cual colinda el Predio",
        hintTitle: 'COLINDA CON',
        cellData: row => <label>{row.colinda}</label>
    },]
    const table = <TABLE_COMPONENT data={FUN_4} columns={columns} loadStatus={props.loadStatus != 0 ? false : true} compact
        wordWrap />
    return (<>

        {table}
    </>);
}
