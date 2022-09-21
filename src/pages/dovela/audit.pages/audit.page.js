import React, { useContext, useEffect, useState } from 'react';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider';
import SERVICE_AUTH from '../../../services/apis/auth.service';

// COMPONENTS
import TABLE_COMPONENT from '../../../resources/customs/components/table.component';
import NON_IDEAL_STATE from '../../../resources/customs/components/nonideal.component';
import BTN_HELP from '../../../resources/customs/components/btnHelp.component';
import { ALERT_NO_PERMIT } from '../../../resources/customs/utils/notifications.vars';
import { Row } from 'rsuite';
import { Tooltip2 } from "@blueprintjs/popover2";

// ICONS
import { AiTwotoneStar } from 'react-icons/ai'
import MessageIcon from '@rsuite/icons/Message';

import { GET_JSON_FULL } from '../../../resources/customs/utils/lamdas.functions';
import NAVIGATON from '../../../resources/customs/components/navigation.component';



var moment = require('moment');

export default function AUDITS_DOVELA() {
    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const connID = conn.id ?? '';
    const connName = conn.name ?? '';

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('audits');
    const btn = utilities.getTranslation('btns');
    const lang = utilities.lang;

    const permits = conn.roles ?? [];
    const isAdmin = permits ? permits.some(role => role.priority >= 10) : false;

    var [load, setLoad] = useState(0);
    var [data, setData] = useState([]);
    var [data2, setData2] = useState([]);

    const adminToolTip = <Tooltip2 content={trn.admin_alert}><AiTwotoneStar className='text-paranoia' /> </Tooltip2>

    useEffect(() => {
        if (load == 0 || load == 2) {
            loadDataTeam();
            loadDataApp();
        }
    }, [load]);

    // ************************** HELP FUCTIONS **************************** //
    // *************************** DATA TABLE  **************************** //
    const columns = [
        {
            name: trn.tableCl[0],
            selector: row => row.event,
            minWidth: '150px',
            maxWidth: '200px',
            cell: row => row.event
        },
        {
            name: trn.tableCl[1],
            cell: row => {
                let obj = GET_JSON_FULL(row.auditInfo)
                let text = '';
                for (const key in obj) {
                    if (Object.hasOwnProperty.call(obj, key)) {
                        const value = obj[key];
                        text += `${key} : ${value} | `

                    }
                }
                return text
            }
        },
        {
            name: trn.tableCl[2],
            selector: row => {
                let obj = GET_JSON_FULL(row.userInfo)
                return obj.name + ' ' + obj.surname
            },
            cell: row => {
                let obj = GET_JSON_FULL(row.userInfo)
                return obj.name + ' ' + obj.surname
            }
        },
        {
            name: trn.tableCl[3],
            selector: row => row.createdAt,
            minWidth: '150px',
            maxWidth: '200px',
            cell: row => moment(row.createdAt).format('YYYY-MM-DD HH:mm')
        },
    ]

    let _COMPONENT_TEAM_DATATABLE = () => <TABLE_COMPONENT
        title={trn.tableHdTeam}
        titleIcon={<MessageIcon style={{ fontSize: '24px', color: 'LightSeaGreen' }} />}
        columns={columns}
        data={data}
        load={load == 0}
        search={[]}
    />

    let _COMPONENT_APP_DATATABLE = () => <TABLE_COMPONENT
        title={trn.tableHdApp}
        titleIcon={<MessageIcon style={{ fontSize: '24px', color: 'LightSeaGreen' }} />}
        columns={columns}
        data={data2}
        load={load == 0}
        search={[]}
    />
    // ******************************** APIS ****************************** //
    function loadDataTeam() {
        SERVICE_AUTH.loadAuditTeam()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else setData(response.data)
            })
            .catch(e => {
                console.log(e);
            }).finally(() => setLoad(1));
    }
    function loadDataApp() {
        SERVICE_AUTH.loadAuditApp()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else setData2(response.data)
            })
            .catch(e => {
                console.log(e);
            }).finally(() => setLoad(1));
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

            {isAdmin ? _COMPONENT_TEAM_DATATABLE() : <NON_IDEAL_STATE type="permit" />}
            <hr />
            {isAdmin ? _COMPONENT_APP_DATATABLE() : <NON_IDEAL_STATE type="permit" />}
        </>
    );
}
