import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../contextProviders/auth.provider';
import { UtilContext } from '../../contextProviders/util.provider';
import FunService from '../../../../services/apis/fun.service'
import { ALERT_ERROR, ALERT_ERROR_DUPLICATE, ALERT_NO_PERMIT, ALERT_SUCCESS, ALERT_WAIT } from '../../utils/notifications.vars';
import NON_IDEAL_STATE from '../nonideal.component';
import TABLE_COMPONENT from '../table.component';
import BTN_HELP from '../btnHelp.component';

import { ImTable2 } from 'react-icons/im'
import { AiOutlineCheckSquare } from 'react-icons/ai'
import { TiFolderOpen } from 'react-icons/ti'
import DocPassIcon from '@rsuite/icons/DocPass';


import { Drawer, FlexboxGrid, Nav, Placeholder, Progress, Row, Tag, TagGroup, TagInput, Tooltip, Whisper } from 'rsuite';
import { Button, Icon } from '@blueprintjs/core';
import { formsParser1, regexChecker_isOA, regexChecker_isOA_2, regexChecker_isOA_3, regexChecker_isPh } from '../../utils/funParser.module';
import { _GET_CLOCK_STATE } from '../../utils/fun.loader';
import { dateParser_finalDate, dateParser_timePassed } from '../../utils/utilsParse.module';
import { FIND_PERMIT, GET_FUN_STATE, GET_LAST_ID_PUBLIC, GET_LAST_VR } from '../../utils/lamdas.functions';
import PROGRESION_ICONS from './progresionIcons.component';
import { Link } from 'react-router-dom';
import PROGRESION_BAR from './progressionBar.component';
import MODAL from '../modal.component';
import FORM from '../form.component';
import { Tooltip2 } from '@blueprintjs/popover2';

var moment = require('moment');

export default function FUN_GEN(props) {
    const { id, id_public, type } = props;

    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const dvSerial = conn.technicalInfo.serials ? conn.technicalInfo.serials.process : false;

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('fun');
    const btn = utilities.getTranslation('btns');
    const lang = utilities.lang;
    const theme = utilities.theme;

    const permits = conn.roles ?? [];
    const canView = FIND_PERMIT(permits, 'fun', 1);
    const cancreate = FIND_PERMIT(permits, 'fun', 2);
    //const canEdit = FIND_PERMIT(permits, 'fun', 3);
    const canDelete = FIND_PERMIT(permits, 'fun', 4);

    var [load, setLoad] = useState(0);
    var [data, setData] = useState(null);
    var [drawer, setDrawer] = useState(false);

    useEffect(() => {
        if (drawer == true && canView) loadData();
    }, [drawer]);

    // model, date, type, desc, rules


    // ************************ DATA CONVERTERS ************************** //

    // ************************** JSX ELEMENTS **************************** //

    // *************************** DATA TABLE **************************** //

    // ******************************** APIS ****************************** //
    function loadData() {
        FunService.get_fun_IdPublic(id_public)
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else setData(response.data);
            })
            .catch(e => console.log(e)).finally(() => setLoad(1));
    }



    return (
        <>
            {canView ? <>
                {type == 'btn' ? <Tooltip2 content={'gen data'} placement="top"><Button intent='primary' icon="label" onClick={() => setDrawer(true)}></Button></Tooltip2> : ''}

                <Drawer size={'lg'} open={drawer} onClose={() => setDrawer(false)}>
                    <Drawer.Header className={utilities ? utilities.theme : 'light'}>
                        <Drawer.Title>
                            <FlexboxGrid justify="center">
                                <FlexboxGrid.Item colspan={8}><label className='fw-b'>Actuacion: {id_public}</label></FlexboxGrid.Item>
                                <FlexboxGrid.Item colspan={8}>{PROGRESION_ICONS(data ?? {}, { pay: true, check: true, neigh: true, sign: true, report: true, ph: true, law: true, arch: true, eng: true, acta: true, pay2: true, via: true, lic: true })}</FlexboxGrid.Item>
                                <FlexboxGrid.Item colspan={8}><PROGRESION_BAR row={data ?? {}} /></FlexboxGrid.Item>
                            </FlexboxGrid>
                        </Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Body className={utilities ? utilities.theme : 'light'}>
                        <Whisper followCursor placement="top" speaker={<Tooltip>This is a Tooltip that follow cursor</Tooltip>}>
                        <Button>Hover me</Button>
                        </Whisper>
                        <Placeholder.Paragraph rows={8} />
                    </Drawer.Body>
                </Drawer>

            </> : <NON_IDEAL_STATE type="permit" />}
        </>
    );

}

