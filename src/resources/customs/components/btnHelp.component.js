import React, { useContext, useEffect, useState } from 'react';
import { FiHelpCircle, FiHash } from 'react-icons/fi'
import { Divider, Drawer, IconButton, Popover, Whisper } from 'rsuite';
import { UtilContext } from '../contextProviders/util.provider';
import { Button as ButtonPB, Drawer as DrawerBP } from "@blueprintjs/core";
import HelpOutlineIcon from '@rsuite/icons/HelpOutline';

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
        <p className='text-left'><label>{text}</label></p>
        {page ? <p className='text-right fw-b'>{trn.click}</p> : ''}
    </Popover>

    const drawer = <Drawer open={open} onClose={() => setOpen(false)} size="sm" className={utilities ? utilities.theme : 'light'}>
        <Drawer.Header className={utilities ? utilities.theme : 'light'}>
            <div className='py-1'><HelpOutlineIcon style={{fontSize: '20px'}} className="text-paranoia"/> <label>{trn.about}</label> <label className='fw-b'>{title}</label></div>
        </Drawer.Header>
        <Drawer.Body className={utilities ? utilities.theme : 'light'}>
            {page ? page.map(it => {
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

                    <hr className='border'/>
                </>
            }) : ''}
        </Drawer.Body>
    </Drawer>

    const drawer_bp = <DrawerBP
        className={utilities ? utilities.theme : 'light'}
        icon="info-sign"
        onClose={() => setOpen(false)}
        isOpen={open}
        size="30%"
        title={<><label>{trn.about}</label> <label className='fw-b'>{title}</label></>}
    >
        <div className='p-3' style={{ overflowY: 'auto' }}>
            {page ? page.map(it => {
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

                    <hr />
                </>
            }) : ''}
        </div>
    </DrawerBP>

    return <>
        <Whisper placement="auto" trigger="hover" controlId="control-id-hover" speaker={speaker}>
            <IconButton icon={<FiHelpCircle className='text-paranoia' />} circle size="lg" appearance='subtle' onClick={() => setOpen(page ? true : false)} />
        </Whisper>

        {drawer}
    </>
}