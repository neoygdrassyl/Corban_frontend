import React, { useContext } from 'react';
import { Popover, Whisper } from 'rsuite';
import { Button, InputGroup, } from '@blueprintjs/core';
import { UtilContext } from '../../contextProviders/util.provider';
import { useState } from 'react';


export default function INPUTTEXT(props) {
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('formComponent');
    const theme = utilities.theme;

    const [currentIntent, setIntent] = useState(false);

    return (
        <InputGroup id={props.id} name={props.name} placeholder={props.placeholder} disabled={props.disabled} value={props.value} defaultValue={props.dv} readOnly={props.readOnly} required={props.req}
            leftIcon={props.leftIcon}
            intent={currentIntent || props.intent}
            onChange={(e) => {
                let value = e.target.value
                let regexTest = true;
                let lenghText = true;

                if(props.regex) regexTest = props.regex.test(value)
                if(props.min) lenghText = value.length >= props.min;

                if(props.regex || props.min){
                    if(regexTest && lenghText) setIntent('success')
                    else setIntent('danger')
                }

                if (props.onChange) props.onChange(e)
            }}
            onBlur={props.onBlur}
            maxLength={props.length ?? 200}
            min={props.min}
            rightElement={props.rightBtn ?
                <Whisper placement="top" trigger="hover" controlId={props.label + '_hoover_pop'} speaker={<Popover>{props.rightBtn.label}</Popover>}>
                    <Button icon={props.rightBtn.icon} intent={props.rightBtn.intent} onClick={props.rightBtn.onClick} />
                </Whisper> : false}
        />
    );
}