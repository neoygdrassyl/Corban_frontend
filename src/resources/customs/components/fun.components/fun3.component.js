import React, { useContext } from 'react';

import { AuthContext } from '../../contextProviders/auth.provider';
import { UtilContext } from '../../contextProviders/util.provider';
import FunService from '../../../../services/apis/fun.service'
import NON_IDEAL_STATE from '../nonideal.component';
import TABLE_COMPONENT from '../table.component';

import { Icon } from '@blueprintjs/core';
import { _FUN_101_PARSER, _FUN_102_PARSER, _FUN_1_PARSER, _FUN_24_PARSER, _FUN_25_PARSER, _FUN_2_PARSER, _FUN_3_PARSER, _FUN_4_PARSER, _FUN_5_PARSER, _FUN_6_PARSER, _FUN_7_PARSER, _FUN_8_PARSER, _FUN_9_PARSER } from '../../utils/funParser.module';
import { _GET_CLOCK_STATE, _GET_FUN_0, _GET_FUN_1, _GET_FUN_2, _GET_FUN_3 } from '../../utils/fun.loader';
import { FIND_PERMIT } from '../../utils/lamdas.functions';
import VIEWER from '../viewer.component';

export default function FUN_3(props) {
    const { data, isEdit, load } = props;

    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('fun3');
    const btn = utilities.getTranslation('btns');
    const lang = utilities.lang;
    const theme = utilities.theme;

    const permits = conn.roles ?? [];
    const canView = FIND_PERMIT(permits, 'fun', 1);
    const canEdit = FIND_PERMIT(permits, 'fun', 2);

    // ************************ DATA CONVERTERS ************************** //
    let _GET_NEIGHBOUR_STATE = (_state) => {
        if (!_state) return <label className="fw-bold text-danger">{trn.citationSattus[0]}</label>
        else if (_state == 1) return <label className="fw-bold text-success">{trn.citationSattus[1]}</label>
        else if (_state == 2) return <label className="fw-bold text-warning">{trn.citationSattus[2]}</label>
    }
    let _GET_NEIGHBOUR_ALERTS = (_alerts_info) => {
        if (!_alerts_info) return "";
        let _alerts_array = _alerts_info;
        _alerts_array = _alerts_array.split(',');
        let _ALERT = [];
        for (var i = 0; i < _alerts_array.length; i++) {
            if (_alerts_array[i].includes("ALERT_1"))
                if (_alerts_array[i].split('&')[1]) _ALERT.push(<><label>{trn.alertMethod[0]} {_alerts_array[i].split('&')[1]}</label><br /></>);
            if (_alerts_array[i].includes("ALERT_2"))
                if (_alerts_array[i].split('&')[1]) _ALERT.push(<><label>{trn.alertMethod[1]} {_alerts_array[i].split('&')[1]}</label><br /></>);
            if (_alerts_array[i].includes("ALERT_3"))
                if (_alerts_array[i].split('&')[1]) _ALERT.push(<><label>{trn.alertMethod[2]} {_alerts_array[i].split('&')[1]}</label><br /></>);
            if (_alerts_array[i].includes("ALERT_4"))
                if (_alerts_array[i].split('&')[1]) _ALERT.push(<><label>{trn.alertMethod[3]} {_alerts_array[i].split('&')[1]}</label><br /></>);
        }
        return <>{_ALERT}</>
    }
    let _GET_NEIGHBOUR_ALERTS_ID6 = (_alerts_info) => {
        if (!_alerts_info) return "";
        let _alerts_array = _alerts_info;
        _alerts_array = _alerts_array.split(',');
        let _ALERT = [];
        for (var i = 0; i < _alerts_array.length; i++) {
            if (_alerts_array[i].includes("ALERT_1")) {
                if (_alerts_array[i].split('&')[2] > 0) _ALERT.push({ title: trn.supportMethod[0], id_6: _alerts_array[i].split('&')[2], intent: 'primary' });
            }
            if (_alerts_array[i].includes("ALERT_2")) {
                if (_alerts_array[i].split('&')[2] > 0) _ALERT.push({ title: trn.supportMethod[1], id_6: _alerts_array[i].split('&')[2], intent: 'success' });
            }
            if (_alerts_array[i].includes("ALERT_3")) {
                if (_alerts_array[i].split('&')[2] > 0) _ALERT.push({ title: trn.supportMethod[2], id_6: _alerts_array[i].split('&')[2], intent: 'warning' });
            }
            if (_alerts_array[i].includes("ALERT_4")) {
                if (_alerts_array[i].split('&')[2] > 0) _ALERT.push({ title: trn.supportMethod[3], id_6: _alerts_array[i].split('&')[2], intent: 'danger' });
            }
        }
        return _ALERT.map(alert => <VIEWER icon="id-number" api={loadFun6} apiID={alert.id_6} intent={alert.intent} text={alert.title} filename={alert.title} />)
    }
    // ************************** JSX ELEMENTS **************************** //

    // *************************** DATA TABLE **************************** //
    let columns = [
        {
            name: trn.tableHd[0],
            selector: row => row.direccion_1,
            minWidth: '200px',
            cell: row => row.direccion_1,
        },
        {
            name: trn.tableHd[1],
            selector: row => row.direccion_2,
            minWidth: '200px',
            cell: row => row.direccion_2,
        },
        {
            name: trn.tableHd[2],
            minWidth: '250px',
            cell: row => <label>{row.extra ? <label className="text-warning fw-bold">{trn.dataOrigin[0]}</label> : trn.dataOrigin[1]}</label>
        },
        {
            name: trn.tableHd[3],
            minWidth: '160px',
            cell: row => <label>{row.part} - {row.part_id}</label>
        },
        {
            name: trn.tableHd[4],
            selector: row => row.state,
            minWidth: '120px',
            cell: row => <label>{_GET_NEIGHBOUR_STATE(row.state)}</label>
        },
        {
            name: trn.tableHd[5],
            selector: row => row.id_cub,
            minWidth: '160px',
            cell: row => <label>{row.id_cub}</label>
        },
        {
            name: trn.tableHd[6],
            selector: row => row.id_alerted,
            minWidth: '160px',
            cell: row => <label>{row.id_alerted == "-1"
                ? ""
                : row.id_alerted}</label>
        },
        {
            name: trn.tableHd[7],
            selector: row => row.state == 1 ? row.alerted : "",
            cell: row => <label>{row.state == 1 ? row.alerted : ""}</label>
        },
        {
            name: trn.tableHd[8],
            minWidth: '250px',
            cell: row => <label>{_GET_NEIGHBOUR_ALERTS(row.alters_info)}</label>
        },
        {
            name: trn.tableHd[9],
            minWidth: '250px',
            cell: row => <label>{_GET_NEIGHBOUR_ALERTS_ID6(row.alters_info)}</label>
        },
        {
            name: trn.tableHd[10],
            minWidth: '120px',
            cell: row => <label>{row.id_6 > 0 ?
                <VIEWER icon="id-number" api={loadFun6} apiID={row.id_6} intent={'primary'} text={trn.support} filename={trn.support} />
                : ''}</label>
        },
    ];

    let FUN_3_TABLE = () => {
        return <TABLE_COMPONENT
            title={trn.tableTitle}
            titleIcon={<Icon icon={'people'} size="24" className="text-primary" />}
            columns={columns}
            data={data}
            load={load == 0}
            pagination={false}
            search={[]}
        />
    }
    // ******************************** APIS ****************************** //

    function loadFun6(id) {
        return FunService.loadFun6(id)
    }


    return (
        <>
            {canView ? <>
                {FUN_3_TABLE()}
            </> : <NON_IDEAL_STATE type="permit" />}
        </>
    );
}