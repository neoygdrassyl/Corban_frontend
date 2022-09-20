import React, { useContext } from 'react';

import { AuthContext } from '../../contextProviders/auth.provider';
import { UtilContext } from '../../contextProviders/util.provider';
import FunService from '../../../../services/apis/fun.service'
import NON_IDEAL_STATE from '../nonideal.component';
import TABLE_COMPONENT from '../table.component';
import FUN_DOCS from '../../../jsons/fun6DocsList.json'

import { Icon } from '@blueprintjs/core';
import { _FUN_101_PARSER, _FUN_102_PARSER, _FUN_1_PARSER, _FUN_24_PARSER, _FUN_25_PARSER, _FUN_2_PARSER, _FUN_3_PARSER, _FUN_4_PARSER, _FUN_5_PARSER, _FUN_6_PARSER, _FUN_7_PARSER, _FUN_8_PARSER, _FUN_9_PARSER } from '../../utils/funParser.module';
import { _GET_CLOCK_STATE, _GET_FUN_0, _GET_FUN_1, _GET_FUN_2, _GET_FUN_3 } from '../../utils/fun.loader';
import { FIND_PERMIT } from '../../utils/lamdas.functions';
import VIEWER from '../viewer.component';

export default function FUN_R(props) {
    const { data, isEdit, load } = props;

    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('fun6');
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
            minWidth: '300px',
            selector: row => row.description,
            cell: row => FUN_DOCS[lang][row.id_public] || <label className='text-info'>{row.description}</label> ,
        },
        {
            name: trn.tableHd[1],
            selector:row => row.id_public,
            cell: row => row.id_public,
        },
        {
            name:trn.tableHd[2],
            cell: row => row.pages,
        },
        {
            name: trn.tableHd[3],
            selector:row => row.date,
            cell: row => row.date,
        },
        {
            name: trn.tableHd[4],
            minWidth: '100px',
            cell: row => <VIEWER icon={'search'} api={loadFun6} apiID={row.id} intent={'primary'} text={btn.document} filename={btn.document} />,
        },
    ];

    let FUN_R_TABLE = () => {
        return <TABLE_COMPONENT
            title={trn.tableTitle}
            titleIcon={<Icon icon={'cloud-upload'} size="24" className="text-success" />}
            columns={columns}
            data={data}
            load={load == 0}
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
                {FUN_R_TABLE()}
            </> : <NON_IDEAL_STATE type="permit" />}
        </>
    );
}