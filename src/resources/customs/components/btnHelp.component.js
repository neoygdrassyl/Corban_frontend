import React, { useContext, useEffect, useState } from 'react';
import { FiHelpCircle, FiHash } from 'react-icons/fi'
import { Divider, Drawer, IconButton, Popover, Whisper } from 'rsuite';
import { UtilContext } from '../contextProviders/util.provider';
import { Button as ButtonPB } from "@blueprintjs/core";

export default function BTN_HELP(props) {
    const { title, text, page, focus } = props
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('btnHelp');

    const [open, setOpen] = React.useState(false);
    const [focused, setFocus] = React.useState(focus);

    useEffect(() => {
        if (document.getElementById(focused)) document.getElementById(focused).scrollIntoView();
    });

    const speaker = <Popover title={title} className={utilities ? utilities.theme : 'light'} style={{ width: '400px' }}>
        <p className='text-left'>{text}</p>
        {page ? <p className='text-right fw-b'>{trn.click}</p> : ''}
    </Popover>

    const drawer = <Drawer size={'sm'} placement={'right'} open={open} onClose={() => setOpen(false)}>
        <Drawer.Header className={utilities ? utilities.theme : 'light'}>
            <Drawer.Title><label>{trn.about}</label> <label className='fw-b'>{title}</label></Drawer.Title>
            <Drawer.Actions>
                <ButtonPB icon="cross" intent="primary" text={trn.close} onClick={() => setOpen(false)} />
            </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body className={utilities ? utilities.theme : 'light'} >
            {page.map(it => {
                return <>
                    <p className='fw-b text-uppercase'>{it.lefticon} {it.title}
                        <IconButton autoFocus={it.focus == focused} circle size='xs' appearance='subtle' id={it.focus} icon={<FiHash />}
                            onClick={() => { setFocus(it.focus) }} style={it.focus == focused ? { color: 'violet' } : {}} />
                    </p>

                    {it.component ? it.component : ''}
                    {it.icon ? it.icon : ''}
                    {it.btn ? <ButtonPB icon={it.btnIcon} intent={it.btnColor} text={it.btn} /> : ''}
                    <p className='text-justify' style={{ paddingTop: '16px' }}>{it.content}</p>
                    {it.list ? <ul>{it.list.map(l => <li>
                        <label className='fw-b'>{l.subtitle}{l.subtitle ? ':' : ''}</label> <label>{l.text}</label>
                    </li>)}</ul> : ''}

                    <Divider />
                </>
            })}
        </Drawer.Body>
    </Drawer>

    return <>
        <Whisper placement="auto" trigger="hover" controlId="control-id-hover" speaker={speaker}>
            <IconButton icon={<FiHelpCircle className='text-paranoia' />} circle size="lg" appearance='subtle' onClick={() => setOpen(page ? true : false)} />
        </Whisper>

        {drawer}
    </>
}