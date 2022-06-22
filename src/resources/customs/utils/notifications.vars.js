import { Button } from '@blueprintjs/core';
import { Message, Notification, toaster } from 'rsuite';

const DURATION = 10000;
const WIDTH = '400px'
const trn = {
    en: {
        msg_wait_title: 'PROCESSING FORM',
        msg_wait_body: 'The system is processing the data, one moment please.',

        msg_error_login_title: 'AUTHENTICATION FAILED',
        msg_error_login_body: 'This email and password combination is not valid, please make sure the authentication credentials are correct.',
        msg_error_title: 'PROCESS FAILED',
        msg_error_body: 'Failed to process the action, please try again later or contact administrator.',
        msg_error_duplicate_title: 'DUPLICATE ERROR',
        msg_error_duplicate_body: 'The string entered is already in use, make sure to use a unique string.',
        msg_nolist_title: 'NO ITEMS ON LIST',
        msg_nolist_body: 'There are not items created on the document list.',

        msg_success_title: 'SUCCESSFUL ACTION',
        msg_success_body: 'This action has been processed successfully by the system.',

        confirm_delete_title: 'ARE YOU SURE ABOUT THIS ACTION?',
        confirm_delete_body: 'Are you sure about permanently deleting this item from the list? The deleted data will not be salvage.',
        confirm_delete_body2: 'The next Item will be deleted: ',
        confirm_delete_btn1: 'DELETE',
        confirm_delete_btn2: 'CANCEL',


    },
    es: {
        msg_wait_title: 'PROCESANDO FORMULARIO',
        msg_wait_body: 'El sistema está procesando los datos, un momento por favor.',

        msg_error_login_title: 'AUTENTIFICACIÓN FALLIDA',
        msg_error_login_body: 'Esta combinación de email y contraseña no son valida, asegúrese de que las credenciales de autentificación sean correctas.',
        msg_error_title: 'FALLA DE PROCESO',
        msg_error_body: 'No fue posible realizar la acción solicitada, inténtelo de nuevo mas tarde o comuníquese con el administrador.',
        msg_error_duplicate_title: 'ERROR DE DUPLICIDAD',
        msg_error_duplicate_body: 'El consecutivo ingresado ya se encuentra en uso, asegúrese de usar un consecutivo único.',
        msg_nolist_title: 'NO HAY ITEMS EN LISTA',
        msg_nolist_body: 'No hay items de documentos en la lista, se debe crear al menos un item para crear una lista.',

        msg_success_title: 'ACCIÓN PROCESADA',
        msg_success_body: 'Esta acción se ha realizado de forma exitosa por el sistema.',

        confirm_delete_title: '¿ESTA SEGURO DE ESTA ACCIÓN?',
        confirm_delete_body: '¿Está seguro de eliminar permanentemente este elemento de la lista? Los datos eliminados no se podrán recuperar.',
        confirm_delete_body2: 'Se eliminará la siguiente entrada: ',
        confirm_delete_btn1: 'ELIMINAR',
        confirm_delete_btn2: 'CANCELAR',
    }
};

const wait = lg => {
    return <Message showIcon type={'info'} closable style={{ maxWidth: WIDTH }}
        header={<label className='fw-b'>{trn[lg].msg_wait_title}</label>}>
        <p className='txt-j'>{trn[lg].msg_wait_body}</p>
    </Message>
}

const error_login = lg => {
    return <Message showIcon type={'error'} closable duration={DURATION} style={{ maxWidth: WIDTH }}
        header={<label className='fw-b'>{trn[lg].msg_error_login_title}</label>}>
        <p className='txt-j'>{trn[lg].msg_error_login_body}</p>
    </Message>
}

const error_duplicate = lg => {
    return <Message showIcon type={'error'} closable duration={DURATION} style={{ maxWidth: WIDTH }}
        header={<label className='fw-b'>{trn[lg].msg_error_duplicate_title}</label>}>
        <p className='txt-j'>{trn[lg].msg_error_duplicate_body}</p>
    </Message>
}

const message_noLoad = lg => {
    return <Message showIcon type="error" closable duration={DURATION} style={{ maxWidth: WIDTH }}
        header={<label className='fw-b'>{trn[lg].msg_error_title}</label>}>
        <p className='txt-j'>{trn[lg].msg_error_body}</p>
    </Message>
}

const message_noList = lg => {
    return <Message showIcon type="error" closable duration={DURATION} style={{ maxWidth: WIDTH }}
        header={<label className='fw-b'>{trn[lg].msg_nolist_title}</label>}>
        <p className='txt-j'>{trn[lg].msg_nolist_body}</p>
    </Message>
}

const message_success = lg => {
    return <Message showIcon type="success" closable duration={DURATION} style={{ maxWidth: WIDTH }}
        header={<label className='fw-b'>{trn[lg].msg_success_title}</label>}>
        <p className='txt-j'>{trn[lg].msg_success_body}</p>
    </Message>
}

const message_confirm = (lg, id, cb) => (
    <Message showIcon type={'warning'} style={{ maxWidth: WIDTH }}
        header={<label className='fw-b'>{trn[lg].confirm_delete_title}</label>} duration={-1}>
        <label>{trn[lg].confirm_delete_body}</label>
        <br/>
        <label>{trn[lg].confirm_delete_body2} <label className='fw-b'>{id}</label></label>
        <hr />
        <div style={{float: 'right'}}>
            <Button className='mx-1' intent='danger' icon="trash" text={trn[lg].confirm_delete_btn1} onClick={cb} />
            <Button intent='secondary' icon="cross" text={trn[lg].confirm_delete_btn2} onClick={() => toaster.remove()} />
        </div>
    </Message>
);


export const ALERT_WAIT = (lg) => toaster.push(wait(lg), { placement: 'topEnd' })
export const ALERT_ERROR = (lg) => { toaster.push(message_noLoad(lg), { placement: 'topEnd' }); }
export const ALERT_ERROR_LOGIN = (lg) => { toaster.push(error_login(lg), { placement: 'topEnd' }); }
export const ALERT_ERROR_DUPLICATE = (lg) => { toaster.push(error_duplicate(lg), { placement: 'topEnd' }); }
export const ALERT_SUCCESS = (lg) => { toaster.push(message_success(lg), { placement: 'topEnd' }); }
export const ALERT_EMPTY_LIST = (lg) => toaster.push(message_noList(lg), { placement: 'topEnd' })
export const CONFIRM_DELETE = (lg, id, cb) => { toaster.push(message_confirm(lg, id, cb), { placement: 'topCenter' }); }

