import React, { useContext } from 'react';
import { Button, Popover, Whisper } from 'rsuite';
import { UtilContext } from '../contextProviders/util.provider';
import { Button as ButtonPB } from "@blueprintjs/core";

export default function ButtonWhisper(props) {
    const { placement, hover, controlId, subtle, onClick, icon, intent, whisper, title, float } = props

    const utilities = useContext(UtilContext);

    const speaker = <Popover title={title} className={utilities ? utilities.theme : 'light'}>
        <p className='text-left'>{whisper}</p>
    </Popover>

    let color = ''
    if(intent == 'info') color = 'LightSeaGreen' 
    if(intent == 'paranoia') color = 'Purple' 
    
    return <>
        <Whisper  placement={placement ?? "top"} trigger={hover ?? "hover"} controlId={controlId ?? "control-id-hover"} speaker={speaker}>
            {subtle ?
                <Button size='sm' appearance='subtle' onClick={onClick} className={props.className} style={{float: float}}>
                    {props.children}
                </Button>
                :
                <ButtonPB icon={icon} intent={intent ?? 'primary'} onClick={onClick} className={props.className} style={{float: float, backgroundColor: color}}>
                    {props.children}
                </ButtonPB>
            }
        </Whisper>
    </>
}