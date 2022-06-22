import React, { useContext } from 'react';
import { Button, Popover, Whisper } from 'rsuite';
import { UtilContext } from '../contextProviders/util.provider';
import { Button as ButtonPB } from "@blueprintjs/core";

export default function ButtonWhisper(props) {
    const { placement, hover, controlId, subtle, onClick, icon, intent, whisper, title } = props

    const utilities = useContext(UtilContext);

    const speaker = <Popover title={title} className={utilities ? utilities.theme : 'light'}>
        <p className='text-left'>{whisper}</p>
    </Popover>


    return <>
        <Whisper placement={placement ?? "top"} trigger={hover ?? "hover"} controlId={controlId ?? "control-id-hover"} speaker={speaker}>
            {subtle ?
                <Button size='sm' appearance='subtle' onClick={onClick}>
                    {props.children}
                </Button>
                :
                <ButtonPB icon={icon} intent={intent ?? 'primary'} onClick={onClick} >
                    {props.children}
                </ButtonPB>
            }
        </Whisper>
    </>
}