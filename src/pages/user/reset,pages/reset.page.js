import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Col, FlexboxGrid, Form, Message, Panel, toaster } from 'rsuite';
import { Button as ButtonBP } from '@blueprintjs/core';
import FORM from '../../../resources/customs/components/form.component';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import { ALERT_ERROR, ALERT_EXPIRED_RESET, ALERT_SUCCESS_RESET, ALERT_WAIT } from '../../../resources/customs/utils/notifications.vars';
import AtuhService from '../../../services/apis/auth.service';

export default function RESET() {
    let navigate = useNavigate();
    let params = useParams();
    const auth =  useContext(AuthContext);
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('reset');
    const lang = utilities.lang

    if (auth.user) navigate('/dashboard', { replace: true });

    var [pass1, setPass1] = useState(false);
    var [pass2, setPass2] = useState(false);
    var [sharePass, setShare] = useState('');
    var [checkedToken, setChecked] = useState(false);

    useEffect(() => {
        if (checkedToken == false) verifyResetToken(params);
    }, [checkedToken]);

    const FORM_INPUTS = [
        {
            inputs: [
                {
                    label: trn.newPassword, placeholder: trn.newPasswordLb, leftIcon: 'key', id: 'reset_form_email',
                    type: 'password', fname: 'password', req: true, seePass: true,
                    passView: pass1, passCB: setPass1, shareSet: setShare, labelHelp: <ul>
                        <li>{trn.passwordReq[0]}</li>
                        <li>{trn.passwordReq[1]}</li>
                        <li>{trn.passwordReq[2]}</li>
                        <li>{trn.passwordReq[3]}</li>
                    </ul>
                },
            ],
        },
        {
            inputs: [
                {
                    label: trn.repPassword, placeholder: trn.repPasswordLb, leftIcon: 'key', id: 'reset_form_pass_1',
                    type: 'password', fname: 'password2', req: true, seePass: true,
                    passView: pass2, passCB: setPass2, checkRepeat: 'reset_form_email', shareGet: sharePass,
                },
            ],
        },

    ]

    function resetPassword(_data) {
        if (!_data) return;

        let token = params.jtw;
        let formData = _data.formData;
        formData.append('email', params.email);
        formData.append('lang', lang);
        ALERT_WAIT(lang);
        AtuhService.appResetPassword(formData, token)
            .then(response => {
                if (response.data == 'OK') {
                    ALERT_SUCCESS_RESET(lang)
                    navigate('/login', { replace: true });

                } else if (response.data.message == 'EXPIRED') ALERT_EXPIRED_RESET(lang);
                else ALERT_ERROR(lang);
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang);
            });

    }

    function verifyResetToken(_params) {
        let token = _params.jtw;
        AtuhService.appResetVerify(token)
            .then(response => {
                if (response.data != 'OK') {
                    ALERT_EXPIRED_RESET(lang);
                    navigate('/home', { replace: true });
                }
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang);
            })
            .finally(e => setChecked(true));

    }

    return (<>
        <FlexboxGrid justify="center" className="my-6" >
            <FlexboxGrid.Item as={Col} colspan={6} xxl={6} xl={8} lg={8} md={12} sm={18} xs={24}>
                <Panel header={<h3>CORBAN - {trn.passReset}</h3>} bordered className='border'>

                    <FORM form={FORM_INPUTS} id="login_form" onSubmit={resetPassword} btnAlignment='txt-c'
                        submitBtn={<ButtonBP intent="primary" type="submit" text={trn.btn} large />} >
                    </FORM>
                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    </>

    );
}