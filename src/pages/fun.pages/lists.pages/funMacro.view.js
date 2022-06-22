import React, { useContext, useEffect, useState } from 'react';
import { Row } from 'rsuite';
import { ItemsContext } from '../fun.page'
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider'
import FUN_MACRO_TABLE from '../fun.component/funMacroTable.component';
import FunService from '../../../services/apis/fun.service';
import AuthService from '../../../services/apis/auth.service';
import FUN_MACRO_IPUTS_COMPONENT from '../fun.component/funMacroInputs.component';

var moment = require('moment');

function useItems() { return useContext(ItemsContext); }
function useAuth() { return useContext(AuthContext); }


export default function FUN_MACRO_VIEW() {
    let auth = useAuth();
    let connection = auth.connection ?? false;
    let items = useItems();
    let [loadStatus, setLoadStatus] = useState(0) // 0 - not loeaded yet, 1 - successfully loaded, 2 - server returned error
    let [workers, setWorkers] = useState([]);
    let [loadWorkers, setLoadWorkers] = useState(false);
    let dates = items.dates;
    

    useEffect(() => {
        if (items.items.length == 0 && loadStatus == 0) {
            loadItems(connection.conn, moment().subtract(1, 'years').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD'));
        } else if (items.items.length > 0) setLoadStatus(1);
    }, [items]);

    useEffect(() => {
        if (workers.length == 0 && loadWorkers == 0) {
            loadWorker(connection.conn);
        } else if (workers.length > 0) setLoadWorkers(true);
    }, [workers]);

    function loadItems(dbIndex, dateStart, dateEnd) {
        if (!dbIndex) items.updateItems([], () => { })
        FunService.getAll(dateStart, dateEnd, dbIndex, auth.token)
            .then(response => {
                items.updateItems(response.data, () => { });
                setLoadStatus(1);
            })
            .catch(e => {
                //console.log(e);
                items.updateItems([], () => { });
                setLoadStatus(2);
            });
    }

    function loadWorker(dbIndex) {
        if (!dbIndex) items.updateItems([])
        AuthService.loadWorkers(dbIndex, auth.token)
            .then(response => {
                setWorkers(response.data);
                setLoadWorkers(true);
            })
            .catch(e => {
                //console.log(e);
                setWorkers([]);
                setLoadWorkers(true);
            });
    }

    return (
        <Row >
            <Row className="mx-3">
                <FUN_MACRO_IPUTS_COMPONENT workers={workers} />
            </Row>
            <Row>
                <FUN_MACRO_TABLE data={items.itemsFilter} loadStatus={loadStatus == 0 ? true : false} />
            </Row>
        </Row>);
}

