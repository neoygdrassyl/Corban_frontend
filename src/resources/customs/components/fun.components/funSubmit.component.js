import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../contextProviders/auth.provider';
import { UtilContext } from '../../contextProviders/util.provider';
import SERVICE_SUBMIT from '../../../../services/apis/submit.service'
import NON_IDEAL_STATE from '../nonideal.component';
import TABLE_COMPONENT from '../table.component';

import { Icon } from '@blueprintjs/core';
import { _FUN_101_PARSER, _FUN_102_PARSER, _FUN_1_PARSER, _FUN_24_PARSER, _FUN_25_PARSER, _FUN_2_PARSER, _FUN_3_PARSER, _FUN_4_PARSER, _FUN_5_PARSER, _FUN_6_PARSER, _FUN_7_PARSER, _FUN_8_PARSER, _FUN_9_PARSER } from '../../utils/funParser.module';
import { _GET_CLOCK_STATE, _GET_FUN_0, _GET_FUN_1, _GET_FUN_2, _GET_FUN_3 } from '../../utils/fun.loader';
import { FIND_PERMIT } from '../../utils/lamdas.functions';
import { ALERT_NO_PERMIT } from '../../utils/notifications.vars';
import FUN_DOCS from '../../../jsons/fun6DocsList.json'

export default function FUN_SUBMIT(props) {
    const { id } = props;

    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('funSubmit');
    const btn = utilities.getTranslation('btns');
    const lang = utilities.lang;
    const theme = utilities.theme;

    const permits = conn.roles ?? [];
    const canView = FIND_PERMIT(permits, 'fun', 1);

    var [load, setLoad] = useState(0);
    var [dataVR, setData] = useState([]);

    useEffect(() => {
        if (load == 0 || load == 2 && id != false) loadData();
    }, [load]);

    // ************************ DATA CONVERTERS ************************** //

    // ************************** JSX ELEMENTS **************************** //

    // *************************** DATA TABLE **************************** //
    let columns = [
        {
            name: trn.tableHd[0],
            minWidth: '300px',
            selector: row => row.document,
            cell: row => row.noTrn ?  <label className='text-info'>{row.document}</label> : row.document,
        },
        {
            name: trn.tableHd[1],
            selector: row => row.code,
            cell: row => row.code,
        },
        {
            name: trn.tableHd[2],
            omit: true,
            selector: row => row.pages,
            cell: row => row.pages,
        },
        {
            name: trn.tableHd[3],
            selector: row => row.id_public,
            cell: row => row.id_public,
        },
        {
            name: trn.tableHd[4],
            selector: row => row.date,
            cell: row => row.date,
        },
        {
            name: trn.tableHd[5],
            selector: row => row.time,
            cell: row => row.time,
        },

    ];

    let FUN_VR_TABLE = () => {
        return <TABLE_COMPONENT
            title={trn.tableTitle}
            titleIcon={<Icon icon={'paperclip'} size="24" className="text-success" />}
            columns={columns}
            data={dataVR}
            load={load == 0}
            search={[]}
            sort={2}
            desc
        />
    }
    // ******************************** APIS ****************************** //

    function loadData() {
        SERVICE_SUBMIT.getIdRelated(id)
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else {
                    let docs = [];

                    response.data.map(vr => {
                        let id = vr.id_public;
                        let date = vr.date;
                        let time = vr.time;
                        let docLists = vr.sub_lists;
                        docLists.map(list => {
                            let names = list.list_name.split(';');
                            let codes = list.list_code.split(',');
                            let pages = list.list_pages.split(',');
                            let reviews = list.list_review.split(',');

                            reviews.map((r, i) => {
                                if (r == 'SI') docs.push({
                                    id_public: id,
                                    date: date,
                                    time: time,
                                    code: codes[i],
                                    pages: pages[i],
                                    document: FUN_DOCS[lang][codes[i]] || names[i],
                                    noTrn: FUN_DOCS[lang][codes[i]] ? false : true,
                                })
                            })

                        })

                        setData(docs)
                    })
                }
            })
            .catch(e => console.log(e)).finally(() => setLoad(1));
    }


    return (
        <>
            {canView ? <>
                {FUN_VR_TABLE()}
            </> : <NON_IDEAL_STATE type="permit" />}
        </>
    );
}