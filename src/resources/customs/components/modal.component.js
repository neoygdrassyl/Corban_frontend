import React, { useContext } from 'react';
import { UtilContext } from '../contextProviders/util.provider';
import { Divider, Modal } from 'rsuite';
import { Button } from '@blueprintjs/core';

export default function MODAL(props) {
    const { size, open, setOpen, title, content, icon, actionBtn, helpBtn } = props
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('modalComponent');
    const theme = utilities.theme;

    return (
        <Modal size={size ?? 'md'} open={open} onClose={() => setOpen(false)} dialogClassName={theme + " modal-container"}>
            <Modal.Header>
                <Modal.Title><h4>{icon} {title} {helpBtn}</h4></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
                <Divider />
            </Modal.Body>
            <Modal.Footer className='py-1'>
                {actionBtn}
                <Button icon="cross" intent="primary" text={trn.close} onClick={() => setOpen(false)} className="mx-1" />
            </Modal.Footer>
        </Modal>
    );
}