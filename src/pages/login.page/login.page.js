import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Button, ButtonToolbar, FlexboxGrid, Form, Panel, Schema, toaster } from 'rsuite';
import { AuthContext } from '../../resources/customs/contextProviders/auth.provider';
import { UtilContext } from '../../resources/customs/contextProviders/util.provider';
import { ALERT_ERROR_LOGIN, ALERT_WAIT } from '../../resources/customs/utils/notifications.vars';
import AtuhService from '../../services/apis/auth.service';

function useAuth() {
    return useContext(AuthContext);
}

export default function Login() {
    let navigate = useNavigate();
    let auth = useAuth();

    let from =  "/dashboard";

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('submit');
    const lang = utilities.lang

    const model = Schema.Model({
        password: Schema.Types.StringType().isRequired('Este campo es obligatorio.'),
        email: Schema.Types.StringType().isEmail('Ingrese una direccion de correo valida.')
    });
    const formRef = React.useRef();
    const [formValue, setFormValue] = React.useState({});

    function loginRequest() {
        if (!formRef.current.check()) {
            console.error('Form Error');
            return;
        }
        let formData = new FormData();

        formData.set('email', formValue.email)
        formData.set('password', formValue.password)

        ALERT_WAIT(lang);
        AtuhService.appLogin(formData)
            .then(response => {
                if (response.data.id > 0) {
                    toaster.remove();
                    auth.updateToken(response.data.token, () => {});
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

    return (
        <FlexboxGrid justify="center" align="middle" className="my-6" >
            <FlexboxGrid.Item colspan={12}>
                <h3>CORBAN SOFTWARE - LOGIN DE APLICACIÓN</h3>
                <Panel header={<h3>Login</h3>} bordered >
                    <Form fluid model={model} ref={formRef} formValue={formValue} onChange={setFormValue}>
                        <Form.Group>
                            <Form.ControlLabel>Email institucional o de Login</Form.ControlLabel>
                            <Form.Control name="email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Contraseña</Form.ControlLabel>
                            <Form.Control name="password" type="password" autoComplete="off" />
                        </Form.Group>
                        <Form.Group>
                            <ButtonToolbar>
                                <Button appearance="primary" onClick={loginRequest}>Log in</Button>
                            </ButtonToolbar>
                        </Form.Group>
                    </Form>
                </Panel>

            </FlexboxGrid.Item>
        </FlexboxGrid>
    );
}