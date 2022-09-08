import React, { useContext } from 'react';

import { AuthContext } from '../../contextProviders/auth.provider';
import { UtilContext } from '../../contextProviders/util.provider';
import NON_IDEAL_STATE from '../nonideal.component';
import TABLE_COMPONENT from '../table.component';

import { Icon } from '@blueprintjs/core';
import { _FUN_101_PARSER, _FUN_102_PARSER, _FUN_1_PARSER, _FUN_24_PARSER, _FUN_25_PARSER, _FUN_2_PARSER, _FUN_3_PARSER, _FUN_4_PARSER, _FUN_5_PARSER, _FUN_6_PARSER, _FUN_7_PARSER, _FUN_8_PARSER, _FUN_9_PARSER } from '../../utils/funParser.module';
import { _GET_CLOCK_STATE, _GET_FUN_0, _GET_FUN_1, _GET_FUN_2, _GET_FUN_3 } from '../../utils/fun.loader';
import { FIND_PERMIT } from '../../utils/lamdas.functions';

export default function FUN_4(props) {
    const { data, isEdit, load } = props;

    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('fun4');
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
            selector: row => trn.coord[row.coord] || '',
            cell: row => trn.coord[row.coord] || '',
        },
        {
            name: trn.tableHd[1],
            selector: row => row.longitud,
            cell: row => row.longitud,
        },
        {
            name: trn.tableHd[2],
            selector: row => row.colinda,
            cell: row => row.colinda,
        },
    ];

    let FUN_4_TABLE = () => {
        return <TABLE_COMPONENT
            title={trn.tableTitle}
            titleIcon={<Icon icon={'inheritance'} size="24" className="text-primary" />}
            columns={columns}
            data={data}
            load={load == 0}
            pagination={false}
            search={[]}
        />
    }
    // ******************************** APIS ****************************** //

    return (
        <>
            {canView ? <>
                {FUN_4_TABLE()}
            </> : <NON_IDEAL_STATE type="permit" />}
        </>
    );
}