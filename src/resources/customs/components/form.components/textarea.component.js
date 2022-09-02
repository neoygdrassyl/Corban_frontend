import React, { useContext, useState } from 'react';
import { UtilContext } from '../../contextProviders/util.provider';

export default function TEXTAREA(props) {
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('textareaComponent');

    var [strLength, setLength] = useState(props.length || 2000)
    var [strUsed, setUsed] = useState(props.dv ? props.dv.length : 0)

    return (
        <>
            <textarea
                id={props.id} name={props.name} placeholder={props.placeholder} disabled={props.disabled} value={props.value} defaultValue={props.dv} readOnly={props.readOnly} required={props.req}
                onBlur={props.onBlur}
                onChange={(e) => setUsed(e.target.value.length)}
                maxLength={props.length ?? 2000}
                rows={props.rows ?? Math.ceil((strLength / 150) / 2)}
                className={`${props.className} bp4-input resizable ${props.fill === false ? '' : 'bp4-fill'}`} dir="auto"
            />
            <label className='mx-2'>{strUsed}/{strLength} {trn.avaiable}</label>
        </>
    );
}