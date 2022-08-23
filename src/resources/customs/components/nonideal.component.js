import React, { useContext } from 'react';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider';

import { NonIdealState } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

export default function NON_IDEAL_STATE(props) {
    var { type, link } = props;
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
    let types = ['datatable', 'permit', 'noload', 'error', 'nots', 'template', 'no_templates', 'no_config', ]
    if (!types.includes(type)) type = 'error'

    let icon = 'cross'
    if(type == 'error') icon = 'error'
    if(type == 'noload') icon = 'cross'
    if(type == 'permit') icon = 'blocked-person'
    if(type == 'datatable') icon = 'database'
    if(type == 'nots') icon = 'inbox'
    if(type == 'template') icon = 'exclude-row'
    if(type == 'no_templates') icon = 'exclude-row'
    if(type == 'no_config') icon = 'error'
    
    return (
        <>
            <NonIdealState
                className='my-3'
                icon={icon}

                title={trn[type+'_title']}
                description={trn[type+'_body']}
                action={link ? <Link to={link}>{trn.more_info}</Link>: false}
                layout={"vertical"}
            />
        </>
    );
}
