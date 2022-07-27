import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { Col, FlexboxGrid, Form, Message, Panel, toaster } from 'rsuite';
import { Button as ButtonBP } from '@blueprintjs/core';
import FORM from '../../resources/customs/components/form.component';
import { AuthContext } from '../../resources/customs/contextProviders/auth.provider';
import { UtilContext } from '../../resources/customs/contextProviders/util.provider';
import { ALERT_ERROR, ALERT_ERROR_LOGIN, ALERT_ERROR_RESET, ALERT_INACTIVE_LOGIN, ALERT_SENT_RESET, ALERT_WAIT, CONFIRM_EMAIL } from '../../resources/customs/utils/notifications.vars';
import AtuhService from '../../services/apis/auth.service';

function useAuth() {
    return useContext(AuthContext);
}

export default function Login() {
    let navigate = useNavigate();
    let auth = useAuth();
    let from = "/dashboard";
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('login');
    const lang = utilities.lang
    if (auth.user) navigate('/dashboard', { replace: true });


    const FORM_INPUTS = [
        {
            inputs: [
                {
                    label: trn.email, placeholder: trn.emaili, leftIcon: 'envelope', id: 'login_form_email',
                    fname: 'email',
                },
            ],
        },
        {
            inputs: [
                {
                    label: trn.password, placeholder: trn.passwordi, leftIcon: 'key', id: 'login_form_pass_1',
                    type: 'password', fname: 'password',
                },
            ],
        },

    ]

    function loginRequest(_data) {
        if (!_data) return;

        let formData = _data.formData;
        //var formData = new FormData();
        let email = document.getElementById('login_form_email').value
        ALERT_WAIT(lang);
        AtuhService.appLogin(formData)
            .then(response => {
                if (response.data.id > 0) {
                    toaster.remove();
                    auth.updateToken(response.data.token, () => { });
                    auth.signin(response.data, () => {
                        navigate(from, { replace: true });
                    });

                } else if (response.data == 'ERROR_3') ALERT_INACTIVE_LOGIN(lang, email, activateSend);
                else ALERT_ERROR_LOGIN(lang);
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR_LOGIN(lang);
            });
    }

    function activateSend(_email) {
        let formData = new FormData();
        formData.append('email', _email);
        formData.append('lang', lang);
        ALERT_WAIT(lang);
        AtuhService.appVerifyAccountEmail(formData)
            .then(response => {
                if (response.data == 'OK') ALERT_SENT_RESET(lang);
                else ALERT_ERROR(lang);
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang);
            });
    }



    function rememberPass() {
        let emailToSend = document.getElementById('login_form_email').value;
        CONFIRM_EMAIL(lang, trn.reason, emailToSend, acceptSend)

        function acceptSend(_email) {
            let formData = new FormData();
            formData.append('email', _email);
            formData.append('lang', lang);
            ALERT_WAIT(lang);
            AtuhService.appResetEmail(formData)
                .then(response => {
                    if (response.data == 'OK') ALERT_SENT_RESET(lang);
                    else if (response.data == 'NO USER LOGIN') ALERT_ERROR_RESET(lang);
                    else ALERT_ERROR(lang);
                })
                .catch(e => {
                    console.log(e);
                    ALERT_ERROR(lang);
                });
        }
    }

    return (<>
        <FlexboxGrid justify="center" className="my-6" >
            <FlexboxGrid.Item as={Col} colspan={6} xxl={6} xl={8} lg={8} md={12} sm={18} xs={24}>
                <Panel header={<h3>CORBAN - {trn.title}</h3>} bordered className='border'>

                    <FORM form={FORM_INPUTS} id="login_form" onSubmit={loginRequest} btnAlignment='txt-c'
                        submitBtn={<ButtonBP intent="primary" type="submit" text={trn.title} large />} >
                        <>
                            <a onClick={(e) => { e.preventDefault(); rememberPass() }}><label class="bp4-control text-primary">
                                {trn.forgot}
                            </label></a>
                        </>
                    </FORM>
                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    </>

    );
}