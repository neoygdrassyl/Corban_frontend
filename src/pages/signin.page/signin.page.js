import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, ButtonToolbar, Col, Divider, FlexboxGrid, Form, InputGroup, Panel, Schema, toaster } from 'rsuite';
import { AuthContext } from '../../resources/customs/contextProviders/auth.provider';
import { UtilContext } from '../../resources/customs/contextProviders/util.provider';
import { Button as ButtonBP, Icon } from '@blueprintjs/core';
import { ALERT_ERROR_LOGIN, ALERT_WAIT } from '../../resources/customs/utils/notifications.vars';
import AtuhService from '../../services/apis/auth.service';
import FORM from '../../resources/customs/components/form.component';
import ReCAPTCHA from 'react-google-recaptcha';

function useAuth() {
    return useContext(AuthContext);
}
const recaptchaRef = React.createRef();

export default function SIGN_IN() {
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('signin');
    const lang = utilities.lang

    var [pass1, setPass1] = useState(false);
    var [pass2, setPass2] = useState(false);
    var [userType, setUserype] = useState('0');

    var [sharePass, setShare] = useState('');

    const FORM_INPUTS = [
        {
            inputs: [
                {
                    label: trn.email, placeholder: trn.emaili, leftIcon: 'envelope', id: 'sigin_form_email', req: true, min: 8,
                    regex:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ ,
                },
            ],
        },
        {
            inputs: [
                {
                    label: trn.password, placeholder: trn.passwordi, leftIcon: 'key', id: 'sigin_form_pass_1', req: true,
                    type: 'password', passView: pass1, passCB: setPass1, shareSet: setShare, labelHelp: <ul>
                        <li>{trn.passwordReq[0]}</li>
                        <li>{trn.passwordReq[1]}</li>
                        <li>{trn.passwordReq[2]}</li>
                        <li>{trn.passwordReq[3]}</li>
                    </ul>
                },
                {
                    label: trn.password2, placeholder: trn.password2i, leftIcon: 'key', id: 'sigin_form_pass_2', req: true,
                    type: 'password', passView: pass2, passCB: setPass2, checkRepeat: 'sigin_form_pass_1', shareGet: sharePass,
                },
            ],
        },
        {
            inputs: [
                {
                    label: trn.type, placeholder: trn.typei, leftIcon: 'bookmark', id: 'sigin_form_type',
                    type: 'select', onChange: (e) => setUserype(e.target.value), selectOptions: [
                        { value: 0, label: trn.typeOptions[0], },
                        { value: 1, label: trn.typeOptions[1], },
                    ]
                },
            ],
        },
        {
            inputs: [
                {
                    label: trn.surnameE, placeholder: trn.surnameEi, leftIcon: 'person', id: 'sigin_form_namee', req: true, min: 8, show: userType === '1',
                },
                {
                    label: trn.surnameR, placeholder: trn.surnameRi, leftIcon: 'person', id: 'sigin_form_namer',  req: true, min: 2, show: userType === '1',
                },
            ],
        },
        {
            inputs: [
                {
                    label: trn.name1, placeholder: trn.name1i, leftIcon: 'person', id: 'sigin_form_name1', req: true, min: 2, show: userType === '0',
                },
                {
                    label: trn.name2, placeholder: trn.name2i, leftIcon: 'person', id: 'sigin_form_name2', show: userType === '0',
                },
            ],
        },
        {
            inputs: [
                {
                    label: trn.surname1, placeholder:trn.surname1i, leftIcon: 'person', id: 'sigin_form_surname1', req: true, show: userType === '0', min: 2
                },
                {
                    label: trn.surname2, placeholder: trn.surname2i, leftIcon: 'person', id: 'sigin_form_surname2', show: userType === '0',
                },
            ],
        },
        {
            inputs: [
                {
                    label: trn.idNumber, placeholder: trn.idNumberi, leftIcon: 'id-number', id: 'sigin_form_idnumber',
                },
                {
                    label: trn.number, placeholder: trn.numberi, leftIcon: 'mobile-phone', id: 'sigin_form_id',
                },
               
            ],
        },
    ]

    return (
        <FlexboxGrid justify="center" align="middle" className="my-6" >
            <FlexboxGrid.Item as={Col} colspan={6} xxl={6} xl={8} lg={8} md={12} sm={18} xs={24}>
                <Panel header={<h3>CORBAN - {trn.title}</h3>} bordered className='border'>

                    <FORM form={FORM_INPUTS} id="submit_form" onSubmit={(e) => { }}
                        submitBtn={<ButtonBP intent="success" type="submit" text={trn.title} large />} >
                        <>

                            <label class="bp4-control bp4-checkbox .modifier">
                                <input type="checkbox" id="sigin_form_check" required />
                                <span class="bp4-control-indicator"></span>
                                {trn.conditions}
                            </label>

                            <div style={{ paddingLeft: `25%` }}>
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_HTML}
                                />
                            </div>
                        </>
                    </FORM>

                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    );
}