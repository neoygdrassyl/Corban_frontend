import React, { useContext, useEffect, useState } from 'react';
import { Alert, Button, Dialog, Icon, Switch } from '@blueprintjs/core';
import { UtilContext } from '../contextProviders/util.provider';
import ButtonWhisper from '../components/btnWhisper.component';




export default function ALERT_CONFIRM(props) {
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('btns');
    const lang = utilities.lang;
    const theme = utilities.theme;

    var [showAtert, setAltert] = useState(false);

    useEffect(() => {
        if (props.forceClose) setAltert(false);
    }, [props.forceClose]);

    return (
        <>
            {props.btn ? <Button {...props.btn} onClick={() => setAltert(true)} /> : ''}
            {props.btnWhisper ?
                <ButtonWhisper whisper={props.btnWhisper.text} subtle onClick={() => setAltert(true)}>
                    {props.btnWhisper.icon}
                </ButtonWhisper>
                : ''}

            <Alert
                canEscapeKeyCancel canOutsideClickCancel
                className={theme}
                cancelButtonText={trn.cancel}
                confirmButtonText={props.cnfText ?? trn.confirm}
                icon={props.icon}
                intent={props.intent}
                isOpen={showAtert}
                onCancel={() => setAltert(false)}
                onConfirm={(e) => { setAltert(false); props.onConfirm(e) }}
            >
                <h5>{props.title}</h5>
                {props.children}
            </Alert>
        </>
    );
}