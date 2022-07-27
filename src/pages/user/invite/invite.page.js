import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Col, FlexboxGrid, Loader, Panel } from 'rsuite';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import { ALERT_ERROR, ALERT_ERROR_NOACTIVE, ALERT_ERROR_NOACTIVETEAM,  ALERT_SUCCESS_JOIN, ALERT_WARNING_EXPIRED, ALERT_WARNING_NOTVERIFIED, ALERT_WARNING_ONTEAM } from '../../../resources/customs/utils/notifications.vars';
import AtuhService from '../../../services/apis/auth.service';

export default function INVITE() {
    let navigate = useNavigate();
    let params = useParams();
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('invite');
    const lang = utilities.lang

    var [checkedToken, setChecked] = useState(false);

    useEffect(() => {
        if (checkedToken == false) setTimeout(verifyActivateToken(params), 10000);
    }, [checkedToken]);

    function verifyActivateToken(_params) {
        let token = _params.jtw;
        let formData = new FormData();

        formData.append('lang', lang);

        AtuhService.acceptUSer(formData, token)
            .then(response => {
                console.log(response.data)
                if (response.data == 'OK') {
                    ALERT_SUCCESS_JOIN(lang);
                    navigate('/login', { replace: true });
                } else {
                    // WARNINGS
                    if (response.data == 'EXPIRED') ALERT_WARNING_EXPIRED(lang);
                    else if (response.data == 'NOT VERIFIED') ALERT_WARNING_NOTVERIFIED(lang);
                    else if (response.data == 'ON TEAM') ALERT_WARNING_ONTEAM(lang);

                    // ERRORS
                    else if (response.data == 'NOT ACTIVE') ALERT_ERROR_NOACTIVE(lang);
                    else if (response.data == 'NOT ACTIVE TEAM') ALERT_ERROR_NOACTIVETEAM(lang);

                    else ALERT_ERROR(lang);
                    navigate('/home')
                }

            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang);
                navigate('/home')
            })
            .finally(e => { setChecked(true)});

    }

    return (<>
        <FlexboxGrid justify="center" className="my-6" >
            <FlexboxGrid.Item as={Col} colspan={6} xxl={6} xl={8} lg={8} md={12} sm={18} xs={24}>
                <Panel header={<h3>{trn.title}</h3>} bordered className='border txt-c' >

                    <Loader size="lg" content={trn.body} vertical />

                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    </>

    );
}