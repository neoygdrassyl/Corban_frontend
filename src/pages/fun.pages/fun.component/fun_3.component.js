import React from 'react';
import { Row, Col, Form, Button, InputGroup, Checkbox, CheckboxGroup, RadioGroup, Radio, Input } from 'rsuite';
import { Edit } from '@rsuite/icons/';
import { FiMapPin } from 'react-icons/fi'
import TABLE_COMPONENT from '../../../resources/customs/components/table.component';

export default function FUN_3_COMPONENT(props) {
    // ************************* DATA GETTERS ***************************** //
    const FUN_3 = props.FUN_3;
    
    // *************************** BD CONSTS ****************************** //
    // ****************************** CONSTS ****************************** //
    const HeaderBgColor = '#162e5a';
    // ************************* DATA CONVERTERS ************************** //
    let _GET_NEIGHBOUR_STATE = (_state) => {
        if (!_state) return <label className="fw-b text-danger">PENDIENTE</label>
        else if (_state == 1) return <label className="fw-b text-success">CITACION POSITIVA</label>
        else if (_state == 2) return <label className="fw-b text-warning">CITACION NEGATIVA</label>
    }
    // ************************** JSX ELEMENTS **************************** //
    // ************************* JSX COMPONENTS *************************** //
    // *************************** DATA TABLE  **************************** //
    var columns = [{
        key: 'direccion_1',
        label: 'DIR. PREDIO',
        align: "center",
        fixed: true,
        sortable: true,
        columnSize: 'lg',
        bgColor: HeaderBgColor,
        hint: "Direccion fisica del vecino colindante o interesado",
        hintTitle: 'DIRECCION DEL PREDIO',
        cellData: row => <label>{row.direccion_1}</label>
    },
    {
        key: 'direccion_2',
        label: 'DIR. CORRES.',
        align: "center",
        fixed: false,
        sortable: true,
        columnSize: 'lg',
        bgColor: HeaderBgColor,
        hint: "Direccion a la cual será notificada el vecino",
        hintTitle: 'DIRECCION DE CORRESPONDENCIA',
        cellData: row => <label>{row.direccion_2}</label>
    },
    {
        key: 'id_public',
        label: 'ORIGEN.',
        align: "center",
        fixed: false,
        sortable: false,
        columnSize: 'md',
        bgColor: HeaderBgColor,
        hint: "La procedencia de este vecino, 1. Diligenciado por el solicitante o 2. Añadido por la curaduria a discrecion de la entidad",
        hintTitle: 'ORIGEN DEL DATO',
        cellData: row => <label>{row.extra ? <label className="text-warning fw-bold">Añadido por la Curaduria</label> : "Diligenciado por el solicitante"}</label>
    },
    {
        key: 'id_public',
        label: '¿HIZO PARTE?',
        align: "center",
        fixed: false,
        sortable: false,
        columnSize: 'md',
        bgColor: HeaderBgColor,
        hint: "Si el vecino hizo parte en la solicitud",
        hintTitle: 'EL VECINO HIZO PARTE',
        cellData: row => <label>{row.part} - {row.part_id}</label>
    },
    {
        key: 'id_public',
        label: 'ESTADO CITACIÓN',
        align: "center",
        fixed: false,
        sortable: false,
        columnSize: 'lg',
        bgColor: HeaderBgColor,
        hint: "El estado actual de la citación o notificación del vecino",
        hintTitle: 'ESTADO CITACIÓN',
        cellData: row => <label>{_GET_NEIGHBOUR_STATE(row.state)}</label>
    },
    {
        key: 'id_public',
        label: 'CONSECUTIVO',
        align: "center",
        fixed: false,
        sortable: false,
        columnSize: 'md',
        bgColor: HeaderBgColor,
        hint: "El numero consecutivo relacionado al documento de citacion",
        hintTitle: 'CONSECUTIVO RELACIONADO',
        cellData: row => <label>{row.id_cub}</label>
    },
    {
        key: 'id_public',
        label: 'GUIA CONDIGO',
        align: "center",
        fixed: false,
        sortable: false,
        columnSize: 'md',
        bgColor: HeaderBgColor,
        hint: "El numero consecutivo relacionado al documento de mensajeria de citacion",
        hintTitle: 'GUIA CONDIGO DE CONFIRMACION',
        cellData: row => <label>{row.id_alerted == "-1"
        ? ""
        : row.id_alerted}</label>
    },
    {
        key: 'id_public',
        label: 'FECHA RECIBIDO',
        align: "center",
        fixed: false,
        sortable: false,
        columnSize: 'md',
        bgColor: HeaderBgColor,
        hint: "La feche en la cual el vecino fue notificado",
        hintTitle: 'FECHA DE RECIBIDO',
        cellData: row => <label>{row.state == 1 ? row.alerted : ""}</label>
    },
    {
        key: 'id_public',
        label: 'METODOS DE PUBLICACION',
        align: "center",
        fixed: false,
        sortable: false,
        columnSize: 'xl',
        bgColor: HeaderBgColor,
        hint: "Si el vecino no pudo ser notificado, indica el metodo por el cual se hizo la publicacion",
        hintTitle: 'METODOS DE PUBLICACION',
        cellData: row => <label>{row.alters_info}</label>
    },
    {
        key: 'id_public',
        label: 'SOPORTES DE PUBLICACION',
        align: "center",
        fixed: false,
        sortable: false,
        columnSize: 'xl',
        bgColor: HeaderBgColor,
        hint: "El soporte sobre el cual fue echa la publicación",
        hintTitle: 'SOPORTES DE PUBLICACION',
        cellData: row => <label>{row.alters_info}</label>
    },]
    const table = <TABLE_COMPONENT data={FUN_3} columns={columns} loadStatus={props.loadStatus != 0 ? false : true} compact
        wordWrap />
    return (<>
        {table}
    </>);
}
