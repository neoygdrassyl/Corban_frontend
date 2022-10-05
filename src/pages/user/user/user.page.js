import React, { useContext, useState } from 'react';
import { useNavigate, } from 'react-router';
import { Col, Divider, FlexboxGrid, Grid, Panel, Row, Stack } from 'rsuite';

import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import NAVIGATON from '../../../resources/customs/components/navigation.component';

export default function USER() {
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('help');
    const btn = utilities.getTranslation('btns');
    const theme = utilities.theme;
    const lang = utilities.lang;
    const dateformat = utilities.dateformat;
    const moment = utilities.moment;

    let navigate = useNavigate();
    let auth = useContext(AuthContext);
    let user = auth.user;


    return (<>

        <NAVIGATON nav={[]} />

        gen CONFIG

        profesional CONFIG

        enterprise CONFIG

        projects general info
        
        teams info (roles...)

    </>);
}