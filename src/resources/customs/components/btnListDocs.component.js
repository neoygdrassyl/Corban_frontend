import React, { useContext, useEffect, useState } from 'react';
import { FiHelpCircle, FiHash } from 'react-icons/fi'
import { Divider, Drawer, IconButton, Popover, Whisper } from 'rsuite';
import { UtilContext } from '../contextProviders/util.provider';
import { Button as ButtonPB, Icon } from "@blueprintjs/core";
import TABLE_COMPONENT from './table.component';
import DOC_LIST from '../../jsons/fun6DocsList.json'

export default function BTN_LIST_DOCS(props) {
    const { idName, idCode } = props
    const [open, setOpen] = React.useState(false);

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('btnDocList');
    const FUN_DOCS = () => {
        let ARRAY = [];
        for (const key in DOC_LIST) {
            if (Object.hasOwnProperty.call(DOC_LIST, key)) {
                const element = DOC_LIST[key];
                ARRAY.push({ code: key, name: element })
            }
        }
        return ARRAY;
    }
    const speaker = <Popover className={utilities ? utilities.theme : 'light'}>
        <p className='text-left'>{trn.whisper}</p>
    </Popover>
    const columns = [
        {
            name: trn.columns[0],
            selector: row => row.code,
            minWidth: '120px',
            maxWidth: '120px',
            cell: row => <label>{row.code}</label>
        },
        {
            name: trn.columns[1],
            selector: row => row.name,
            cell: row => <label>{row.name}</label>
        },
        {
            name: trn.columns[2],
            selector: row => row.code,
            minWidth: '120px',
            maxWidth: '120px',
            cell: row => <Whisper placement="top" trigger="hover" controlId="control-id-hover" speaker={speaker}>
                <ButtonPB icon={"duplicate"} intent={'primary'} onClick={() => { document.getElementById(idName).value = row.name; document.getElementById(idCode).value = row.code; setOpen(false) }} />
            </Whisper>
        },
    ]

    const drawer = <Drawer size={'md'} placement={'right'} open={open} onClose={() => setOpen(false)}>
        <Drawer.Header className={utilities ? utilities.theme : 'light'}>
            <Drawer.Title><label className='fw-b'>{trn.title}</label></Drawer.Title>
            <Drawer.Actions>
                <ButtonPB icon="cross" intent="primary" text={trn.close} onClick={() => setOpen(false)} />
            </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body className={utilities ? utilities.theme : 'light'} >
            <TABLE_COMPONENT
                data={FUN_DOCS()}
                title={trn.datatable}
                titleIcon={<Icon icon={'duplicate'} intent={'primary'} size="24" />}
                columns={columns}
                load={false}
                search={['code', 'name']}
            />
        </Drawer.Body>
    </Drawer>

    return <>
        <Whisper placement="top" trigger="hover" controlId="control-id-hover" speaker={speaker}>
            <ButtonPB icon={"duplicate"} intent={'primary'} onClick={() => setOpen(true)} />
        </Whisper>

        {drawer}
    </>
}