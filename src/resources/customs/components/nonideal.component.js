import React, { useContext } from 'react';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider';

import { NonIdealState } from '@blueprintjs/core';

export default function NON_IDEAL_STATE(props) {
    var { type } = props;
    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('nonIdealState');
    const lang = utilities.lang;


    // ************************** HELP FUCTIONS **************************** //


    // ************************** JSX ELEMENTS **************************** //


    // *************************** DATA TABLE  **************************** //

    // ******************************** APIS ****************************** //
    let types = ['datatable', 'permit', 'noload', 'error']
    if (!types.includes(type)) type = 'error'

    let icon = 'cross'
    if(type == 'error') icon = 'error'
    if(type == 'noload') icon = 'cross'
    if(type == 'permit') icon = 'blocked-person'
    if(type == 'datatable') icon = 'database'
    
    return (
        <>
            <NonIdealState
                icon={icon}

                title={trn[type+'_title']}
                description={trn[type+'_body']}

                action={undefined}
                layout={"vertical"}
            />
        </>
    );
}
