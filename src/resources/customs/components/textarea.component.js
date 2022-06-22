import React, { useContext, useState } from 'react';
import { UtilContext } from '../contextProviders/util.provider';

export default function TEXTAREA(props) {
    const { fill, length } = props
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('textareaComponent');

    var [strLength, setLength] = useState(length)
    var [strUsed, setUsed] = useState(props.defaultValue ? props.defaultValue.length : 0)

    return (
        <>
            <textarea
                {...props}
                onChange={(e) => setUsed(e.target.value.length)}
                maxLength={length}
                rows={props.rows ?? Math.ceil((strLength / 150) / 2)}
                className={`${props.className} bp4-input resizable ${fill ? 'bp4-fill' : ''}`} dir="auto"
            />
            <label className='mx-2'>{strUsed}/{strLength} {trn.avaiable}</label>
        </>
    );
}