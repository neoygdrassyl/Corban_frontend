import React from 'react'
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
        msg_signup_title: 'USER CREATED SUCCESSFULLY',
        msg_signup_body: 'The user creation has been successful, you will receive en email verifying the information. You may Log In into your account now.',
        msg_error_signup_title: 'SIGN UP REGISTRATION FAILED',
        msg_error_signup_body: 'This email or ID Number or NIT are already on use, verify the input values.',


        msg_error_title: 'PROCESS FAILED',
        msg_error_body: 'Failed to process the action, please try again later or contact administrator.',
        msg_error_duplicate_title: 'DUPLICATE ERROR',
        msg_error_duplicate_body: 'The string entered is already in use, make sure to use a unique string.',
        msg_nolist_title: 'NO ITEMS ON LIST',
        msg_nolist_body: 'There are not items created on the document list.',

        msg_noupload_title: 'UNABLE TO UPLOAD FILE',
        msg_noupload_body: 'The selected file or files surpass the max size limit.',

        msg_success_title: 'SUCCESSFUL ACTION',
        msg_success_body: 'This action has been processed successfully by the system.',

        confirm_delete_title: 'ARE YOU SURE ABOUT THIS ACTION?',
        confirm_delete_body: 'Are you sure about permanently deleting this item from the system? The deleted data will not be salvage.',
        confirm_delete_body2: 'The next Item will be deleted: ',
        confirm_delete_btn1: 'DELETE',
        confirm_delete_btn2: 'CANCEL',

        confirm_email_title: 'SEND EMAIL AUTOMATICALLY?',
        confirm_email_body: (_detail) => <>Do you want to send an email to the address in order to <label className='fw-b'>{_detail}</label>?</>,
        confirm_email_btn: 'SEND',
        confirm_email_ph: 'Send remember email...',

        msg_error_reset_title: 'NOT POSSIBLE TO SEN EMAIL',
        msg_error_reset_body: 'This email does not belong to a user, check the email or create a new user.',

        msg_sent_reset_title: 'EMAIL SENT',
        msg_sent_reset_body: 'An email has been sent to the address providing a recovery link. You may check your inbox in the next minutes.',
       
        msg_expired_reset_title: 'EXPIRED LINK',
        msg_expired_reset_body: 'This link has expired, make a new link request in order to continue.',

        msg_success_reset_title: 'PASSWORD RESET SUCCESS',
        msg_success_reset_body: 'The password has been reseted successfuly.',
       
    },
    es: {
        msg_wait_title: 'PROCESANDO FORMULARIO',
        msg_wait_body: 'El sistema está procesando los datos, un momento por favor.',

        msg_error_login_title: 'AUTENTIFICACIÓN FALLIDA',
        msg_error_login_body: 'Esta combinación de email y contraseña no son valida, asegúrese de que las credenciales de autentificación sean correctas.',
        msg_signup_title: 'USUARIO CREADO CON ÉXITO',
        msg_signup_body: 'La creación del usuario ha sido exitosa, recibirá un correo electrónico verificando la información. Puede iniciar sesión en su cuenta ahora.',
        msg_error_signup_title: 'REGISTRO FALLIDO',
        msg_error_signup_body: 'El Correo electrónico o numero de documento dados ya se encuentran en uso, verifique los datos.',

        msg_error_title: 'FALLA DE PROCESO',
        msg_error_body: 'No fue posible realizar la acción solicitada, inténtelo de nuevo mas tarde o comuníquese con el administrador.',
        msg_error_duplicate_title: 'ERROR DE DUPLICIDAD',
        msg_error_duplicate_body: 'El consecutivo ingresado ya se encuentra en uso, asegúrese de usar un consecutivo único.',
        msg_nolist_title: 'NO HAY ITEMS EN LISTA',
        msg_nolist_body: 'No hay items de documentos en la lista, se debe crear al menos un item para crear una lista.',

        msg_noupload_title: 'NO ES POSIBLE SUBIR EL ARCHIVO',
        msg_noupload_body: 'El archivo o archivos seleccionados superan el limite de subida máximo.',

        msg_success_title: 'ACCIÓN PROCESADA',
        msg_success_body: 'Esta acción se ha realizado de forma exitosa por el sistema.',

        confirm_delete_title: '¿ESTA SEGURO DE ESTA ACCIÓN?',
        confirm_delete_body: '¿Está seguro de eliminar permanentemente este elemento del sistema? Los datos eliminados no se podrán recuperar.',
        confirm_delete_body2: 'Se eliminará la siguiente entrada: ',
        confirm_delete_btn1: 'ELIMINAR',
        confirm_delete_btn2: 'CANCELAR',

        confirm_email_title: '¿ESTA SEGURO DE ESTA ACCIÓN?',
        confirm_email_body: '¿Está seguro de eliminar permanentemente este elemento del sistema? Los datos eliminados no se podrán recuperar.',

        confirm_email_title: '¿ENVIAR UN CORREO ELECTRÓNICO AUTOMÁTICAMENTE?',
        confirm_email_body: (_detail) => <>¿Desea enviar un correo electrónico a la dirección para <label className='fw-b' >{_detail}</label>?</>,
        confirm_email_btn: 'ENVIAR',
        confirm_email_ph: 'Enviar email de recuperación...',

        msg_error_reset_title: 'NO FUE POSIBLE ENVIAR EL CORREO',
        msg_error_reset_body: 'El correo electrónico diligenciado no corresponde con ningún usuario, revise el correo o cree un nuevo usuario.',

        msg_sent_reset_title: 'CORREO ENVIADO',
        msg_sent_reset_body: 'Se ha enviado un correo electrónico a la dirección proporcionada con un enlace de recuperación. Revisa tu bandeja de entrada en los próximos minutos.',
       
        msg_expired_reset_title: 'LINK CADUCADO',
        msg_expired_reset_body: 'Este link ha expirado su tiempo de disponibilidad, realicé una nueva solicitud del link para continuar.',
     
        msg_success_reset_title: 'CONTRASEÑA RESTAURADA',
        msg_success_reset_body: 'La contraseña ha sido restaurada exitosamente.',
       
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

const signup = lg => {
    return <Message showIcon type={'success'} closable style={{ maxWidth: WIDTH }} duration={-1}
        header={<label className='fw-b'>{trn[lg].msg_signup_title}</label>}>
        <p className='txt-j'>{trn[lg].msg_signup_body}</p>
    </Message>
}

const error_signup = lg => {
    return <Message showIcon type={'error'} closable style={{ maxWidth: WIDTH }}
        header={<label className='fw-b'>{trn[lg].msg_error_signup_title}</label>}>
        <p className='txt-j'>{trn[lg].msg_error_signup_body}</p>
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
    <Message showIcon type={'warning'} style={{ maxWidth: '450px' }}
        header={<label className='fw-b'>{trn[lg].confirm_delete_title}</label>} duration={-1}>
        <div style={{ wordBreak: 'break-all' }}>
            <label>{trn[lg].confirm_delete_body}</label>
            <br />
            <label>{trn[lg].confirm_delete_body2} <label className='fw-b'>{id}</label></label>
            <hr />

            <div style={{ float: 'right' }}>
                <Button className='mx-1' intent='danger' icon="trash" text={trn[lg].confirm_delete_btn1} onClick={cb} />
                <Button intent='secondary' icon="cross" text={trn[lg].confirm_delete_btn2} onClick={() => toaster.remove()} />
            </div>
        </div>
    </Message>
);

const noupload = lg => (
    <Message showIcon closable duration={DURATION} type={'warning'} style={{ maxWidth: WIDTH }}
        header={<label className='fw-b'>{trn[lg].msg_noupload_title}</label>}>
        <label>{trn[lg].msg_noupload_body}</label>
    </Message>
);

const message_email = (lg, detail, email, cb) => (
    <Message showIcon type={'info'} style={{ maxWidth: '450px' }}
        header={<label className='fw-b'>{trn[lg].confirm_email_title}</label>} duration={-1}>
        <div style={{ wordBreak: 'break-all' }}>
            <label>{trn[lg].confirm_email_body(detail)}</label>

            <div class="bp4-input-group my-1">
                <span class="bp4-icon bp4-icon-envelope"></span>
                <input type="text" class="bp4-input bp4-fill" placeholder={trn[lg].confirm_email_ph} defaultValue={email} id="message_email_input"/>
            </div>

            <div style={{ float: 'right' }}>
                <Button className='mx-1' intent='primary' icon="envelope" text={trn[lg].confirm_email_btn} onClick={() => { toaster.remove(); cb(document.getElementById("message_email_input").value)}} />
                <Button intent='secondary' icon="cross" text={trn[lg].confirm_delete_btn2} onClick={() => toaster.remove()} />
            </div>
        </div>
    </Message>
);

const error_reset = lg => {
    return <Message showIcon type={'error'} closable duration={DURATION} style={{ maxWidth: WIDTH }}
        header={<label className='fw-b'>{trn[lg].msg_error_reset_title}</label>}>
        <p className='txt-j'>{trn[lg].msg_error_reset_body}</p>
    </Message>
}

const sent_reset = lg => {
    return <Message showIcon type={'success'} closable duration={DURATION} style={{ maxWidth: WIDTH }}
        header={<label className='fw-b'>{trn[lg].msg_sent_reset_title}</label>}>
        <p className='txt-j'>{trn[lg].msg_sent_reset_body}</p>
    </Message>
}

const expired_reset = lg => {
    return <Message showIcon type={'warning'} closable duration={-1} style={{ maxWidth: WIDTH }}
        header={<label className='fw-b'>{trn[lg].msg_expired_reset_title}</label>}>
        <p className='txt-j'>{trn[lg].msg_expired_reset_body}</p>
    </Message>
}

const success_reset = lg => {
    return <Message showIcon type={'success'} closable duration={-1} style={{ maxWidth: WIDTH }}
        header={<label className='fw-b'>{trn[lg].msg_success_reset_title}</label>}>
        <p className='txt-j'>{trn[lg].msg_success_reset_body}</p>
    </Message>
}

export const ALERT_WAIT = (lg) => toaster.push(wait(lg), { placement: 'topEnd' })
export const ALERT_ERROR = (lg) => { toaster.push(message_noLoad(lg), { placement: 'topEnd' }); }
export const ALERT_ERROR_LOGIN = (lg) => { toaster.push(error_login(lg), { placement: 'topEnd' }); }

export const ALERT_ERROR_RESET = (lg) => { toaster.push(error_reset(lg), { placement: 'topEnd' }); }
export const ALERT_SENT_RESET = (lg) => { toaster.push(sent_reset(lg), { placement: 'topEnd' }); }
export const ALERT_EXPIRED_RESET = (lg) => { toaster.push(expired_reset(lg), { placement: 'topEnd' }); }
export const ALERT_SUCCESS_RESET = (lg) => { toaster.push(success_reset(lg), { placement: 'topEnd' }); }

export const ALERT_SIGNUP = (lg) => toaster.push(signup(lg), { placement: 'topEnd' })
export const ALERT_ERROR_SIGNUP = (lg) => { toaster.push(error_signup(lg), { placement: 'topEnd' }); }

export const ALERT_ERROR_DUPLICATE = (lg) => { toaster.push(error_duplicate(lg), { placement: 'topEnd' }); }
export const ALERT_NOUPLOAD = (lg) => toaster.push(noupload(lg), { placement: 'topEnd' })

export const ALERT_SUCCESS = (lg) => { toaster.push(message_success(lg), { placement: 'topEnd' }); }
export const ALERT_EMPTY_LIST = (lg) => toaster.push(message_noList(lg), { placement: 'topEnd' })

export const CONFIRM_DELETE = (lg, id, cb) => { toaster.push(message_confirm(lg, id, cb), { placement: 'topCenter' }); }
export const CONFIRM_EMAIL = (lg, detail, email, cb) => { toaster.push(message_email(lg, detail, email, cb), { placement: 'topCenter' }); }

