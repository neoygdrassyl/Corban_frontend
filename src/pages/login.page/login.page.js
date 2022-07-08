import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { Col, FlexboxGrid, Form, Message, Panel, toaster } from 'rsuite';
import { Button as ButtonBP } from '@blueprintjs/core';
import FORM from '../../resources/customs/components/form.component';
import { AuthContext } from '../../resources/customs/contextProviders/auth.provider';
import { UtilContext } from '../../resources/customs/contextProviders/util.provider';
import { ALERT_ERROR_LOGIN, ALERT_WAIT, CONFIRM_EMAIL } from '../../resources/customs/utils/notifications.vars';
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
        ALERT_WAIT(lang);
        AtuhService.appLogin(formData)
            .then(response => {
                if (response.data.id > 0) {
                    toaster.remove();
                    auth.updateToken(response.data.token, () => { });
                    auth.signin(response.data, () => {
                        navigate(from, { replace: true });
                    });

                } else {
                    ALERT_ERROR_LOGIN(lang);
                }
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR_LOGIN(lang);
            });

    }

    function rememberPass() {
        let emailToSend = document.getElementById('login_form_email').value;

        CONFIRM_EMAIL(lang, trn.reason, emailToSend, acceptSend)

        function acceptSend() {
            toaster.remove();
            console.log('hello there!')
        }
    }

    return (<>
        <FlexboxGrid justify="center" className="my-6" >
            <FlexboxGrid.Item as={Col} colspan={6} xxl={6} xl={8} lg={8} md={12} sm={18} xs={24}>
                <Panel header={<h3>CORBAN - {trn.title}</h3>} bordered className='border'>

                    <FORM form={FORM_INPUTS} id="login_form" onSubmit={loginRequest} btnAlignment='center'
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