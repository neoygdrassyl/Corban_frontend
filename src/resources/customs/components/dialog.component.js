import React, { useContext, useEffect, useState } from 'react';
import { Button, Dialog, Icon, Switch } from '@blueprintjs/core';
import { UtilContext } from '../contextProviders/util.provider';
import ButtonWhisper from './btnWhisper.component';



export default function DIALOG(props) {
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('btns');
    const lang = utilities.lang;
    const theme = utilities.theme;

    var [showDialog, setDialog] = useState(false);

    useEffect(() => {
        if (props.forceClose) setDialog(false);
    }, [props.forceClose]);

    return (
        <>
            {props.btn ? <Button {...props.btn} onClick={() => setDialog(true)} /> : ''}
            {props.btnWhisper ?
                <ButtonWhisper whisper={props.btnWhisper.text} subtle onClick={() => setDialog(true)}>
                    {props.btnWhisper.icon}
                </ButtonWhisper>
                : ''}

            <Dialog isOpen={showDialog} canOutsideClickClose canEscapeKeyClose isCloseButtonShown className={theme}
                title={<div className='text-dark'>{props.title}</div>} icon={props.icon} onClose={() => setDialog(false)}>
                <div className='p-3'>
                    {props.children}
                </div>
                {!props.hideClose || props.btnAction ?
                    <div className='px-2 txt-r'>
                        {props.hideClose ? '' : <Button onClick={() => setDialog(false)} className="mx-1">{trn.close}</Button>}
                        {props.btnAction}
                    </div>
                    : ''}

            </Dialog>
        </>
    );
}