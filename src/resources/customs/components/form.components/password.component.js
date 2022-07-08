import React, { useContext } from 'react';
import { Popover, Whisper } from 'rsuite';
import { Button, InputGroup } from '@blueprintjs/core';
import { UtilContext } from '../../contextProviders/util.provider';
import { useState } from 'react';
import { useEffect } from 'react';


export default function PASSWORD(props) {
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('formComponent');
    const theme = utilities.theme;

    const [currentIntent, setIntent] = useState(false);

    useEffect(() => {
        let value = document.getElementById(props.id).value;
        if (value.length > 0) {
            let regex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
            let checkRepeat = props.shareGet;
            let repeatedPass = true;
            if (checkRepeat) repeatedPass = checkRepeat == value;
            if (regex.test(value) && repeatedPass) setIntent('success')
            else setIntent('danger')
        }
    }, [props.shareGet]);

    return (
        <InputGroup id={props.id} name={props.name} placeholder={props.placeholder} disabled={props.disabled} value={props.value} defaultValue={props.dv} readOnly={props.readOnly} required={props.req}
            leftIcon={props.leftIcon}
            intent={currentIntent || props.intent}
            onChange={(e) => {
                if(props.passView){
                    let value = e.target.value;
                    let regex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
                    let checkRepeat = props.checkRepeat ? document.getElementById(props.checkRepeat).value : false;
                    let repeatedPass = true;
                    if (checkRepeat) repeatedPass = checkRepeat == value;
                    if (regex.test(value) && repeatedPass) setIntent('success')
                    else setIntent('danger')
                    if (props.shareSet) props.shareSet(value)
                }
                if (props.onChange) props.onChange(e);
            }}
            onBlur={props.onBlur}
            maxLength={props.length ?? 200}
            type={props.passView ? "text" : 'password'}
            helper
            min={props.min}
            rightElement={ props.passView ?
                <Whisper placement="top" trigger="hover" controlId={props.label + '_hoover_pop'} speaker={<Popover>{props.passView ? trn.passwordHide : trn.passwordSee}</Popover>}>
                    <Button minimal={true} icon={props.passView ? 'unlock' : 'lock'} onClick={() => props.passCB(!props.passView)} />
                </Whisper> : false}
        />
    );
}