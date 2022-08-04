import React, { useContext, useEffect, useState } from 'react';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider';
import SERVICE_WORKERS from '../../../services/apis/workers.service';
import SERVICE_ROLES from '../../../services/apis/roles.services';

// COMPONENTS
import TABLE_COMPONENT from '../../../resources/customs/components/table.component';
import DIALOG from '../../../resources/customs/components/dialog.component';
import BTN_HELP from '../../../resources/customs/components/btnHelp.component';
import { ALERT_ERROR, ALERT_NO_PERMIT, ALERT_SUCCESS, ALERT_WAIT } from '../../../resources/customs/utils/notifications.vars';

// ICONS
import { FaEdit } from 'react-icons/fa'
import { AiTwotoneStar } from 'react-icons/ai'
import { MdWork } from 'react-icons/md'
import PeoplesIcon from '@rsuite/icons/Peoples';


import { FIND_PERMIT } from '../../../resources/customs/utils/lamdas.functions';
import { Row } from 'rsuite';
import { Button as ButtonBP, Switch } from '@blueprintjs/core';
import { Tooltip2 } from "@blueprintjs/popover2";
import NON_IDEAL_STATE from '../../../resources/customs/components/nonideal.component';

export default function WORKERS() {
    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('workers');
    const btn = utilities.getTranslation('btns');
    const lang = utilities.lang;

    const permits = conn.roles ?? [];
    const isAdmin = permits ? permits.some(role => role.priority >= 10) : false;
    //const canView = FIND_PERMIT(permits, 'worker', 1); // this is invite
    const canEdit = FIND_PERMIT(permits, 'worker', 2); // this is edit ,create, delete
    const canDelete = FIND_PERMIT(permits, 'worker', 3); // this is set activo 1 | 0

    var [load, setLoad] = useState(0);
    var [data, setData] = useState([]);
    var [roles, setRoles] = useState([]);

    const adminToolTip = <Tooltip2 content={trn.admin_alert}><AiTwotoneStar className='text-paranoia' /> </Tooltip2>

    useEffect(() => {
        if (load == 0 || load == 2) {
            loadData();
            loadRoles();
        }
    }, [load]);

    // ************************** HELP FUCTIONS **************************** //


    // ************************** JSX ELEMENTS **************************** //
    let _COMPONENET_MANAGE = (edit) => {
        let user_roles = edit.roles_workers
        return <>
            <DIALOG title={trn.edit_rw}
                icon={<MdWork size={'20px'} className="mx-1 text-primary"/>}
                hideClose forceClose={load == 0}
                btn={false}
                btnWhisper={{ icon: <FaEdit className='text-primary' />, text: btn.edit }} >
                {roles.map(role => {
                    let defaultChecked = user_roles.some(ur => ur.role.name == role.name)
                    let rxwId = user_roles.find(ur => ur.role.name == role.name)
                    let role_id = role.id
                    let worker_id = edit.id
                    let role_is_admin = role.priority == 10
                    return <Switch disabled={role_is_admin && !isAdmin} onChange={(e) => manage_role_x_worker(rxwId ? rxwId.id : null, role_id, worker_id, e.target.checked)}
                        defaultChecked={defaultChecked} labelElement={<label>{role_is_admin ? adminToolTip : ''}<strong>{role.name}: </strong>{role.roleInfo}</label>} />
                })}
            </DIALOG>
        </>
    }

    let _COMPONENT_DELETE = (row) => {
        let roles = row.roles_workers ?? [];
        let one_role_is_admin = roles.some(r => r.role.priority >= 10)
        return <>
            <Switch disabled={one_role_is_admin && !isAdmin} onChange={(e) => activa_workers(row.id, e.target.checked)}
                defaultChecked={row.active} large />
        </>
    }

    // *************************** DATA TABLE  **************************** //
    const columns = [
        {
            name: trn.tableCl[0],
            selector: row => row.user.name + ' ' + row.user.surname,
            minWidth: '150px',
            maxWidth: '200px',
            cell: row => row.user.name + ' ' + row.user.surname
        },
        {
            name: trn.tableCl[1],
            selector: row => {
                let roles = row.roles_workers ?? [];
                let name_roles = roles.map(r => r.role.name)
                return name_roles.join(', ')
            },
            cell: row => {
                let roles = row.roles_workers ?? [];
                return roles.map(r => {return r.role.priority >= 10 ? <>| {r.role.name}{adminToolTip} | </> :<>| {r.role.name} | </>}) }
        },
        {
            name: trn.tableCl[2],
            button: true,
            minWidth: '100px',
            maxWidth: '150px',
            cell: row => <>
                {canEdit ? _COMPONENET_MANAGE(row) : ''}
            </>,
        },
        {
            name: trn.tableCl[3],
            button: true,
            minWidth: '100px',
            maxWidth: '150px',
            cell: row => <>
                {canDelete ? _COMPONENT_DELETE(row) : ''}
            </>,
        },
    ]

    let _COMPONENT_ROLES_DATATABLE = () => <TABLE_COMPONENT
        title={trn.tableHd}
        titleIcon={<PeoplesIcon style={{ fontSize: '24px' }} className="text-success" />}
        columns={columns}
        data={data}
        load={load == 0}
        search={[]}
    />
    // ******************************** APIS ****************************** //
    function loadData() {
        SERVICE_WORKERS.getAll(conn.id)
            .then(response => {
                if(response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else setData(response.data)
            })
            .catch(e => {
                console.log(e);
            }).finally(() => setLoad(1));
    }
    function loadRoles() {
        SERVICE_ROLES.getAllCompany(conn.id)
            .then(response => {
                if(response.data == 'NO PERMIT'){}
                else setRoles(response.data)
            })
            .catch(e => {
                console.log(e);
            }).finally(() => setLoad(1));
    }

    function manage_role_x_worker(rwId, role_id, worker_id, action) {
        let formData = new FormData()
        formData.append('roleId', role_id);
        formData.append('workerId', worker_id)
        ALERT_WAIT(lang)
        if (action) {
            if (rwId) {
                SERVICE_WORKERS.update(rwId, formData)
                    .then(response => {
                        if (response.data == 'OK') ALERT_SUCCESS(lang)
                    })
                    .catch(e => {
                        console.log(e);
                        ALERT_ERROR(lang)
                    }).finally(() => setLoad(2));
            } else {
                SERVICE_WORKERS.create(formData)
                    .then(response => {
                        if (response.data == 'OK') ALERT_SUCCESS(lang)
                    })
                    .catch(e => {
                        console.log(e);
                        ALERT_ERROR(lang)
                    }).finally(() => setLoad(2));
            }
        } else {
            if (rwId) {
                SERVICE_WORKERS.delete(rwId)
                    .then(response => {
                        if (response.data == 'OK') ALERT_SUCCESS(lang)
                    })
                    .catch(e => {
                        console.log(e);
                        ALERT_ERROR(lang)
                    }).finally(() => setLoad(2));
            }
        }

    }

    function activa_workers(id, active) {
        let formData = new FormData()
        formData.append('active', active ? 1 : 0)
        ALERT_WAIT(lang)
        SERVICE_WORKERS.active(id, formData)
            .then(response => {
                if (response.data == 'OK') ALERT_SUCCESS(lang)
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang)
            }).finally(() => setLoad(2));
    }

    return (
        <>
            <Row className="text-center" style={{ width: '100%' }}>
                <h3>{trn.title} <BTN_HELP
                    title={trn.btn_help_tile}
                    text={trn.btn_help_body}
                    page={trn.HELP_PAGE} focus="title" /></h3>
            </Row>

            {canEdit ? _COMPONENT_ROLES_DATATABLE() : <NON_IDEAL_STATE type="permit" />}
        </>
    );
}
