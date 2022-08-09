import React, { useContext } from 'react';
import {  NumericInput, } from '@blueprintjs/core';
import { UtilContext } from '../../contextProviders/util.provider';
import { useState } from 'react';


export default function INPUTNUMBER(props) {
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('formComponent');
    const theme = utilities.theme;

    const [currentIntent, setIntent] = useState(false);

    return (

        <NumericInput id={props.id} name={props.name} placeholder={props.placeholder} disabled={props.disabled} value={props.value} defaultValue={props.dv} readOnly={props.readOnly} required={props.req}
                    leftIcon={props.leftIcon}
                    rightElement={props.rightIcon}
                    intent={currentIntent || props.intent}
                    onValueChange={(e) => {
                        let value = e;
                        let lenghText = true;
                        
                        if(props.minLength) lenghText = String(value).length >= props.minLength;
        
                        if(props.minLength){
                            if(lenghText) setIntent('success')
                            else setIntent('danger')
                        }
        
                        if (props.onChange) props.onChange(e)
                    }}
                    onBlur={props.onBlur}
                    min={props.min} max={props.max}
                   
                    buttonPosition={props.btnPos ?? 'right'}
                    allowNumericCharactersOnly={props.rigid ?? true} fill
                />
    );
}