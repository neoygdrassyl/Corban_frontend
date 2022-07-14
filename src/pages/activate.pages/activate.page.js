import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Col, FlexboxGrid, Loader, Panel } from 'rsuite';
import { AuthContext } from '../../resources/customs/contextProviders/auth.provider';
import { UtilContext } from '../../resources/customs/contextProviders/util.provider';
import { ALERT_ERROR, ALERT_SUCCESS_ACTIVATE } from '../../resources/customs/utils/notifications.vars';
import AtuhService from '../../services/apis/auth.service';

export default function ACTIVATE() {
    let navigate = useNavigate();
    let params = useParams();
    const auth =  useContext(AuthContext);
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('reset');
    const lang = utilities.lang

    if (auth.user) navigate('/dashboard', { replace: true });

    var [checkedToken, setChecked] = useState(false);

    useEffect(() => {
        if (checkedToken == false) verifyActivateToken(params);
    }, [checkedToken]);

    function verifyActivateToken(_params) {
        let token = _params.jtw;
        let formData = new FormData();

        formData.append('lang', lang);
        formData.append('email', _params.email);

        AtuhService.appVerifyAccount(formData, token)
            .then(response => {
                if (response.data == 'OK' || response.data == 'VERIFIED') {
                    ALERT_SUCCESS_ACTIVATE(lang);
                    navigate('/login', { replace: true });
                } 
                else ALERT_ERROR(lang);
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
                <Panel header={<h3>ACIVATING ACCOUNT...</h3>} bordered className='border txt-c' >

                <Loader size="lg" content={'WAIT A MOMENT PLEASE'} vertical />

                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    </>

    );
}