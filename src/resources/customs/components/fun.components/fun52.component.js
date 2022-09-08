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

export default function FUN_52(props) {
    const { data, isEdit, load } = props;

    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('fun52');
    const btn = utilities.getTranslation('btns');
    const lang = utilities.lang;
    const theme = utilities.theme;

    const permits = conn.roles ?? [];
    const canView = FIND_PERMIT(permits, 'fun', 1);
    const canEdit = FIND_PERMIT(permits, 'fun', 2);

    // ************************ DATA CONVERTERS ************************** //

    // ************************** JSX ELEMENTS **************************** //

    // *************************** DATA TABLE **************************** //
    let columns = [
        {
            name: trn.tableHd[0],
            selector: row => row.name + " " + row.surname,
            minWidth: '200px',
            cell: row => row.name + " " + row.surname,
        },
        {
            name: trn.tableHd[1],
            selector: row => row.id_number,
            cell: row => row.id_number,
        },
        {
            name: trn.tableHd[2],
            minWidth: '140px',
            selector: row => row.number,
            cell: row => row.number,
        },
        {
            name: trn.tableHd[3],
            selector: row => row.email,
            minWidth: '200px',
            cell: row => row.email,
        },
        {
            name: trn.tableHd[4],
            selector: row => trn.role[row.role] || '',
            minWidth: '300PX',
            cell: row => trn.role[row.role] || '',
        },
        {
            name: trn.tableHd[5],
            selector: row => row.registration,
            minWidth: '180px',
            cell: row => row.registration,
        },
        {
            name: trn.tableHd[6],
            minWidth: '140px',
            selector: row => row.registration_date,
            cell: row => row.registration_date,
        },
        {
            name: trn.tableHd[7],
            minWidth: '140px',
            selector: row => row.expirience,
            cell: row => Math.trunc(row.expirience / 12) + trn.year,
        },
        {
            name: trn.tableHd[8],
            minWidth: '140px',
            selector: row => row.sanction,
            cell: row => row.sanction ? <label className="text-danger fw-bold">{trn.sanction[1]}</label> : trn.sanction[0],
        },
        {
            name: trn.tableHd[9],
            minWidth: '140px',
            selector: row => trn.supervition[row.supervision] || '',
            cell: row => trn.supervition[row.supervision] || '',
        },
        {
            name: trn.tableHd[10],
            minWidth: '200px',
            cell: row => row.docs.map((doc, i) => doc > 0 ?
                <VIEWER icon={'id-number'} api={loadFun6} apiID={doc} intent={trn.docsColor[i]} text={trn.docs[i]} filename={trn.docs[i]} />
                : ''),
        },
    ];

    let FUN_52_TABLE = () => {
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
                {FUN_52_TABLE()}
            </> : <NON_IDEAL_STATE type="permit" />}
        </>
    );
}