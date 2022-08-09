import React, { useContext, useState } from 'react';
import { UtilContext } from '../../contextProviders/util.provider';

export default function SELECT(props) {
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('textareaComponent');

    return (
        <>
            <div class="bp4-input-group">
                    <span class={"bp4-icon bp4-icon-" + (props.leftIcon || 'property')}></span>
                    <select
                        id={props.id} name={props.name} disabled={props.disabled} value={props.value} defaultValue={props.df} readOnly={props.readOnly} required={props.req}
                        onChange={props.onChange}
                        onSelect={props.onSelect}
                        onBlur={props.onBlur}
                        className={'bp4-input'}
                    >
                        {props.placeholder ? <option value={props.placeholder} disabled>{props.placeholder}</option> : ''}
                        {props.selectOptions.map(option => <option value={option.value ?? option.label}> {option.label}</option>)}
                    </select>
                    <span class={"bp4-icon bp4-icon-chevron-down"}></span>
                </div>
        </>
    );
}