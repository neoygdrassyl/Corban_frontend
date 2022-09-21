import React, { useContext, useEffect, useState } from 'react';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider';
import SERVICE_ROLES from '../../../services/apis/roles.services';

// COMPONENTS
import TABLE_COMPONENT from '../../../resources/customs/components/table.component';
import DIALOG from '../../../resources/customs/components/dialog.component';
import ALERT_CONFIRM from '../../../resources/customs/utils/notCofirm.component';
import BTN_HELP from '../../../resources/customs/components/btnHelp.component';
import FORM from '../../../resources/customs/components/form.component';
import { ALERT_ERROR, ALERT_NO_PERMIT, ALERT_SUCCESS, ALERT_WAIT } from '../../../resources/customs/utils/notifications.vars';

// ICONS
import { FaEdit } from 'react-icons/fa'
import UserInfoIcon from '@rsuite/icons/UserInfo';
import { RiDeleteBinLine } from 'react-icons/ri'
import { AiTwotoneStar } from 'react-icons/ai'
import { CgDanger } from 'react-icons/cg'


import { FIND_PERMIT, GET_JSON_FULL } from '../../../resources/customs/utils/lamdas.functions';
import { Col, Grid, Row } from 'rsuite';
import { Button, Button as ButtonBP, Icon, NonIdealState, Switch } from '@blueprintjs/core';
import { Tooltip2 } from "@blueprintjs/popover2";
import NON_IDEAL_STATE from '../../../resources/customs/components/nonideal.component';
import NAVIGATON from '../../../resources/customs/components/navigation.component';

export default function ROLES() {
    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const connID = conn.id ?? '';
    const connName = conn.name ?? '';

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('roles');
    const btn = utilities.getTranslation('btns');
    const lang = utilities.lang;

    const permits = conn.roles ?? [];


    const hasPriority = permits.some(permit => permit.priority == 11);

    const canView = FIND_PERMIT(permits, 'roles', 1);
    const cancreate = FIND_PERMIT(permits, 'roles', 2);
    const canEdit = FIND_PERMIT(permits, 'roles', 3);
    const canDelete = FIND_PERMIT(permits, 'roles', 4);

    const dangerous = <Tooltip2 content={trn.danger}><CgDanger className='text-danger' /> </Tooltip2>

    var [load, setLoad] = useState(0);
    var [data, setData] = useState([]);

    useEffect(() => {
        if (load == 0) loadData();
    }, [load]);

    const ROLES_PERMITS = [
        {
            id: 'worker', isAdmin: true, name: 'TRABAJADORES', permits: [
                { name: 'INVITAR TRABAJADORES', value: 1 }, { name: 'ASIGNAR ROLES', value: 2 }, { name: 'HABILITAR/INHABILITAR TRABAJADORES', value: 3, danger: true, },
            ]
        },
        {
            id: 'roles', isAdmin: true, name: 'ROLES', permits: [
                { name: 'VER', value: 1 }, { name: 'CREAR', value: 2 }, { name: 'EDITAR', value: 3 }, { name: 'ELIMINAR', value: 4, intent: 'danger', danger: true, },
            ]
        },
        {
            id: 'templates', name: 'PLANTILLAS', permits: [
                { name: 'VER', value: 1 }, { name: 'CREAR', value: 2 }, { name: 'EDITAR', value: 3 }, { name: 'ELIMINAR', value: 4, intent: 'danger', danger: true, }
            ]
        },

        {
            id: 'submit', name: 'VENTANILLA ÚNICA DE RADICACIÓN', permits: [
                { name: 'VER', value: 1 }, { name: 'CREAR', value: 2 }, { name: 'EDITAR', value: 3 }, { name: 'ELIMINAR', value: 4, intent: 'danger', danger: true, }, { name: 'SUBIR ARCHIVOS', value: 5 }, { name: 'GENERAR ARCHIVOS', value: 6 },
            ]
        },

        {
            id: 'fun', name: 'LICENCIAS URBANISTICAS', permits: [
                { name: 'VER', value: 1 }, { name: 'CREAR', value: 2 }, { name: 'ELIMINAR', value: 4, intent: 'danger', danger: true, },
            ]
        },
        {
            id: 'fun_doc', name: 'LICENCIAS URBANISTICAS - DOCUMENTOS', permits: [
                { name: 'VER', value: 1 }, { name: 'EDITAR', value: 3 }, { name: 'SUBIR ARCHIVOS', value: 5 }, { name: 'GENERAR ARCHIVOS', value: 6 },
            ]
        },
        {
            id: 'fun_check', name: 'LICENCIAS URBANISTICAS - CHECKEO', permits: [
                { name: 'VER', value: 1 }, { name: 'EDITAR', value: 3 }, 
            ]
        },
        {
            id: 'fun_neg', name: 'LICENCIAS URBANISTICAS - DESESTIMIENTOS', permits: [
                { name: 'VER', value: 1 }, { name: 'EDITAR', value: 3 },
            ]
        },
        {
            id: 'fun_sign', name: 'LICENCIAS URBANISTICAS - PUBLICIDAD', permits: [
                { name: 'VER', value: 1 }, { name: 'EDITAR', value: 3 },
            ]
        },
        {
            id: 'fun_law', name: 'LICENCIAS URBANISTICAS - INFORME JURIDICO', permits: [
                { name: 'VER', value: 1 }, { name: 'EDITAR', value: 3 }, { name: 'DAR VIAVILIDAD', value: 7 },
            ]
        },
        {
            id: 'fun_arc', name: 'LICENCIAS URBANISTICAS - INFORME ARQUITECTONICO', permits: [
                { name: 'VER', value: 1 }, { name: 'EDITAR', value: 3 }, { name: 'DAR VIAVILIDAD', value: 7 },
            ]
        },
        {
            id: 'fun_eng', name: 'LICENCIAS URBANISTICAS - INFORME ESTRUCTURAL', permits: [
                { name: 'VER', value: 1 }, { name: 'EDITAR', value: 3 }, { name: 'DAR VIAVILIDAD', value: 7 },
            ]
        },
        {
            id: 'fun_acta', name: 'LICENCIAS URBANISTICAS - ACTA OBSERVACIONES Y CORRECIONES', permits: [
                { name: 'VER', value: 1 }, { name: 'EDITAR', value: 3 }, { name: 'DAR VIAVILIDAD', value: 7 },
            ]
        },
        {
            id: 'fun_pay', name: 'LICENCIAS URBANISTICAS - LIQUIDACIONES', permits: [
                { name: 'VER', value: 1 }, { name: 'EDITAR', value: 3 },
            ]
        },
        {
            id: 'fun_res', name: 'LICENCIAS URBANISTICAS - RESOLUCION', permits: [
                { name: 'VER', value: 1 }, { name: 'EDITAR', value: 3 },
            ]
        },

    ]

    let FORM_INPUTS = (edit) => [
        {
            inputs: [
                {
                    label: trn.form[0].label, placeholder: trn.form[0].ph, leftIcon: 'selection', fname: 'name', min: 3,
                    id: 'roles_form_name', req: true, dv: edit.name ?? '',
                },
                {
                    label: trn.form[1].label, placeholder: trn.form[1].ph, leftIcon: 'selection', fname: 'roleInfo', min: 3,
                    id: 'roles_form_roleInfo', dv: edit.roleInfo ?? '',
                },

            ],
        },
        {
            inputs: [
                {
                    label: 'THIS ROLE IS ADMIN', type: 'switch', labelSwitch: "If you see this an are not SUPER ADMIN, your are not allowed",
                    id: 'roles_form_priority', dc: edit.priority == 10, show: hasPriority,
                },
            ],

        }
    ]

    // ************************** HELP FUCTIONS **************************** //


    // ************************** JSX ELEMENTS **************************** //
    let _COMPONENET_MANAGE = (edit) => {
        return <>
            <DIALOG title={edit ? btn.edit + ': ' + edit.name : btn.new}
                icon={edit ? 'annotation' : "add"}
                hideClose forceClose={load == 0}
                btn={!edit ? { text: btn.new, icon: 'add', intent: 'success' } : false}
                btnWhisper={edit ? { icon: <FaEdit className='text-primary' />, text: btn.edit } : false} >

                <FORM form={FORM_INPUTS(edit)} id="roles_form" onSubmit={(e) => manage(e, edit)}
                    btnAlignment="txt-r" submitBtn={edit.id
                        ? <ButtonBP icon="annotation" intent="success" type="submit" text={btn.edit} />
                        : <ButtonBP icon="add" intent="success" type="submit" text={btn.add} />}
                />
            </DIALOG>
        </>
    }

    let _COMPONENT_DELETE = (row) => {
        return <>
            <ALERT_CONFIRM title={btn.delete + ': ' + row.name} icon={'trash'} intent="danger" cnfText={btn.delete}
                onConfirm={() => destroy(row.id)}
                btnWhisper={{ icon: <RiDeleteBinLine className='text-danger' />, text: btn.delete }} >
                {trn.confirm}
            </ALERT_CONFIRM>
        </>
    }

    // *************************** DATA TABLE  **************************** //
    const columns = [
        {
            name: trn.tableCl[0],
            selector: row => row.name,
            minWidth: '150px',
            maxWidth: '200px',
            cell: row => <label>{row.name} {row.priority == 10 ?
                <Tooltip2 content={trn.adminRole}><AiTwotoneStar className='text-paranoia' /></Tooltip2>
                : ''}</label>
        },
        {
            name: trn.tableCl[1],
            selector: row => row.roleInfo,
            cell: row => <label>{row.roleInfo}</label>
        },
        {
            name: trn.tableCl[2],
            button: true,
            minWidth: '100px',
            maxWidth: '150px',
            cell: row => <>
                {canEdit ? _COMPONENET_MANAGE(row) : ''}
                {canDelete && row.priority < 10 ? _COMPONENT_DELETE(row) : ''}
            </>,
        },
    ]
    const ExpandedComponent = ({ data }) => {
        let rowPermits = GET_JSON_FULL(data.permits);
        let isAdmin = data.priority == 10;
        return <>
            <Grid fluid>
                {ROLES_PERMITS.map(role => <Row style={{ width: '100%' }} >
                    <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4} className="txt-r"><label className='fw-b'>{role.name}: </label></Col>
                    <Col xs={24} sm={12} md={16} lg={16} xl={16} xxl={16}>
                        {role.permits.map(permit => {
                            let rowPermit = rowPermits[role.id] ?? [];
                            let adminRole = isAdmin && role.isAdmin;
                            return <Switch name={'swtchs_' + data.id + '_' + role.id} defaultChecked={adminRole ? true : rowPermit.includes(permit.value)}
                                onChange={() => { }} inline alignIndicator="right" disabled={adminRole}
                                label={permit.danger ?
                                    <strong>{permit.name} {dangerous}</strong> 
                                    : permit.name} />
                        })}
                    </Col>
                </Row>)}
                <Row style={{ width: '100%' }} >
                    <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4} className="txt-r my-1">
                        <Button intent="success" icon="floppy-disk" onClick={() => saveRoles(data.id)} >{btn.save}</Button>
                    </Col>
                </Row>
            </Grid>
        </>
    };

    let _COMPONENT_ROLES_DATATABLE = () => <TABLE_COMPONENT
        title={trn.tableHd}
        titleIcon={<UserInfoIcon style={{ fontSize: '24px' }} className="text-warning" />}
        columns={columns}
        data={data}
        load={load == 0}
        expand={ExpandedComponent}
        search={['name', 'roleInfo']}
    />
    // ******************************** APIS ****************************** //
    function loadData() {
        SERVICE_ROLES.getAll(conn.id, user.id)
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else setData(response.data)
            })
            .catch(e => {
                console.log(e);
            }).finally(() => setLoad(1));
    }

    function manage(data, object) {
        if (!data) return;

        let formData = data.formData;

        if (document.getElementById('roles_form_priority')) formData.append('priority', document.getElementById('roles_form_priority').checked ? 10 : 1);

        ALERT_WAIT(lang);
        if (object.id) {
            SERVICE_ROLES.update(object.id, formData)
                .then(response => {
                    if (response.data === 'OK') ALERT_SUCCESS(lang);
                    else if (response.data === 'NO PERMIT') ALERT_NO_PERMIT(lang);
                    else ALERT_ERROR(lang);
                })
                .catch(e => {
                    console.log(e);
                    ALERT_ERROR(lang);
                }).finally(() => setLoad(0));
        }
        else {
            SERVICE_ROLES.create(formData)
                .then(response => {
                    if (response.data === 'OK') ALERT_SUCCESS(lang);
                    else if (response.data === 'NO PERMIT') ALERT_NO_PERMIT(lang);
                    else ALERT_ERROR(lang);
                })
                .catch(e => {
                    console.log(e);
                    ALERT_ERROR(lang);
                }).finally(() => setLoad(0));
        }
    }

    function destroy(id) {
        ALERT_WAIT(lang);

        SERVICE_ROLES.delete(id)
            .then(response => {
                if (response.data === 'OK') ALERT_SUCCESS(lang);
                else if (response.data === 'NO PERMIT') ALERT_NO_PERMIT(lang);
                else ALERT_ERROR(lang);
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang);
            }).finally(() => setLoad(0));

    }

    function saveRoles(id) {
        var formData = new FormData();

        var permits = {};
        ROLES_PERMITS.map(role => {
            var htlms;
            htlms = document.getElementsByName('swtchs_' + id + '_' + role.id);
            permits[role.id] = [];
            for (let i = 0; i < htlms.length; i++) {
                const element = htlms[i];
                if (element.checked) permits[role.id].push(role.permits[i].value);
            }
        })

        formData.append('permits', JSON.stringify(permits))

        ALERT_WAIT(lang);
        SERVICE_ROLES.update(id, formData)
            .then(response => {
                if (response.data === 'OK') ALERT_SUCCESS(lang);
                else if (response.data === 'NO PERMIT') ALERT_NO_PERMIT(lang);
                else ALERT_ERROR(lang);
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang);
            }).finally(() => setLoad(0));
    }

    return (
        <>
            <NAVIGATON nav={trn.nav({ name: connName, id: connID })} />

            <Row className="text-center" style={{ width: '100%' }}>
                <h3>{trn.title} <BTN_HELP
                    title={trn.btn_help_tile}
                    text={trn.btn_help_body}
                    page={trn.HELP_PAGE} focus="title" /></h3>
            </Row>

            {cancreate ? _COMPONENET_MANAGE(false) : ''}
            {canView ? _COMPONENT_ROLES_DATATABLE() : <NON_IDEAL_STATE type="permit" />}
        </>
    );
}
