import React, { useContext, useEffect, useState } from 'react';
import { Badge, Button, ButtonGroup, Col, Divider, FlexboxGrid, Grid, IconButton, Loader, Message, Panel, PanelGroup, Row } from 'rsuite';
import { Button as ButtonBP } from '@blueprintjs/core';

// ICONS
import { MdHelp } from 'react-icons/md'
import { VscLaw } from 'react-icons/vsc'
import { IoDocumentAttachOutline } from 'react-icons/io5'
import { BiLinkExternal } from 'react-icons/bi'
import { BsSignpost2 } from 'react-icons/bs'
import PeoplesIcon from '@rsuite/icons/Peoples';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import InfoRoundIcon from '@rsuite/icons/InfoRound';
import SearchPeopleIcon from '@rsuite/icons/SearchPeople';
import ToolsIcon from '@rsuite/icons/Tools';
//
import { Tooltip2 } from "@blueprintjs/popover2";
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider'
import AtuhService from '../../../services/apis/auth.service'
import { ALERT_ERROR, ALERT_ERROR_NOACTIVE, ALERT_ERROR_NOACTIVETEAM, ALERT_NO_PERMIT, ALERT_SUCCESS, ALERT_WAIT, ALERT_WARNING_ONTEAM, CONFIRM_INVITATION, CONFIRM_USER } from '../../../resources/customs/utils/notifications.vars';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import { Alert, FormGroup, InputGroup } from '@blueprintjs/core';
import { FIND_PERMIT } from '../../../resources/customs/utils/lamdas.functions';
import NON_IDEAL_STATE from '../../../resources/customs/components/nonideal.component';


export default function DOVELA_CONFIG() {
    //  CONTEXT INITILIAZATION & CONTROL
    let params = useParams();
    const nagivate = useNavigate();
    const auth = useContext(AuthContext);
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('submit');
    const lang = utilities.lang;
    const theme = utilities.theme;
    const team = params.team;

    const user = auth.user ?? {};
    const conn = auth.conn ?? {};
    var [load, setLoad] = useState(0);
    var [loading, setLoading] = useState(false);
    var [openInvite, setInvite] = useState(false);
    let connection = auth.conn ?? {};

    const isSuperAdmin = connection.roles ? connection.roles.some(role => role.priority >= 10) : false;
    useEffect(() => {
        if (load == 0) { }
    }, [params]);

    const PUBLIC_CONFIG_VARS = [
        { id: 'publicName', name: 'Nombre Organización', ph: 'CUADURIA 1 DE BUCARAMANGA', dv: conn.name, 
        help: 'Nombre que identifica el equipo de trabajo y el cual se reconoce publicamente' },
        { id: 'director', name: 'Nombre del director', ph: 'LUIS CARLOS PARRA SALAZAR', dv: conn.companiyInfo.director,
        help: 'Nombre del profesional director del equipo de trabajo' },
        { id: 'dir_title', name: 'Titulo dle director', ph: 'ARQUITECTO', dv: conn.companiyInfo.dir_title,
        help: 'Titulo profesional del director del equipo de trabajo' },
        { id: 'dir_tiShort', name: 'Diminutivo del titulo', ph: 'ARQ.', dv: conn.companiyInfo.dir_tiShort,
        help: 'Titulo acortado del profesional director del equipo.' },
        { id: 'city', name: 'Ciudad', ph: 'BUCARAMANGA', dv: conn.companiyInfo.city,
        help: 'Ciudad de localizacion de las instalaciones del equipo.' },
        { id: 'state', name: 'Departamento', ph: 'SANTANDER', dv: conn.companiyInfo.state,
        help: 'Localizacion departamental de las instalaciones del equipo.' },
        { id: 'nomenclature', name: 'Nomenclatura', ph: '1', dv: conn.companiyInfo.nomenclature,
        help: 'Numeracion del equipo en formato numerico.' },
        { id: 'address', name: 'Dirección', ph: 'Calle 36 # 31-39', dv: conn.companiyInfo.address,
        help: 'Direccion y las instalaciones del equipo.' },
        { id: 'page', name: 'Pagina Web', ph: 'https://www.curaduria1bucaramanga.com/', dv: conn.companiyInfo.page,
        help: 'Pagina web de consulta del equipo de trabajo.' },
        { id: 'number1', name: 'Número de Contacto 1', ph: '(+57) 316 279 5010', dv: conn.companiyInfo.number1,
        help: 'Número de contacto del equipo.' },
        { id: 'number2', name: 'Número de contacto 2', ph: '(607) 680 3596', dv: conn.companiyInfo.number2,
        help: 'Número de contacto alternativo del equipo.' },
        { id: 'email1', name: 'Correo de contacto 1', ph: 'curaduriaurbana1@gmail.com', dv: conn.companiyInfo.email1,
        help: 'Correo electrónico de contacto del equipo.' },
        { id: 'email2', name: 'Correo de contacto 2', ph: '', dv: conn.companiyInfo.email2,
        help: 'Correo electrónico alternativo de contacto del equipo.' },
        { id: 'nit', name: 'Número NIT', ph: '', dv: conn.companiyInfo.nit,
        help: 'Número de NIT del equipo.' },
    ]

    const SYSTEM_CONFIG_VARS = [
        { id: 'law', name: 'Nombre Subdirector', ph: 'DRA. MARÍA MARGARITA JEREZ', dv: conn.technicalInfo.law,
        help: 'Profesional adicional que puede firmar los documentos expedidos.' },
        { id: 'lawt', name: 'Titulo Subdirector', ph: 'Asesora Jurídica', dv: conn.technicalInfo.lawt, 
        help: 'Ttulo del profesional.'},
        { id: 'serials.process', name: 'Codigo de Nomenclatura', ph: '68001-1-', dv: conn.technicalInfo.serials ? conn.technicalInfo.serials.process : '',
        help: 'Nomenclatura de los documentos oficiales del equipo de trabajo.' },
        { id: 'serials.start', name: 'Codigo de entrada', ph: 'VR', dv: conn.technicalInfo.serials ? conn.technicalInfo.serials.start : '',
        help: 'Codigo identificador de todos los documentos de entrada del equipo.' },
        { id: 'serials.end', name: 'Codigo de salida', ph: 'CUB', dv: conn.technicalInfo.serials ? conn.technicalInfo.serials.end : '',
        help: 'Codigo identificado de todos los documentos expedids del equipo.' },
        { id: 'pot.yy', name: 'Año acuerdo POT', ph: '2014', dv: conn.technicalInfo.pot ? conn.technicalInfo.pot.yy : '',
        help: 'Año del POT con el cual se rigen los estudios de las licencias.' },
        { id: 'pot.mm', name: 'Mes acuerdo POT', ph: '11', dv: conn.technicalInfo.pot ? conn.technicalInfo.pot.mm : '',
        help: 'Mes del POT con el cual se rigen los estudios de las liecencias.' },
        { id: 'imgs.icon', name: 'Icono organización', ph: 'icon', dv: conn.technicalInfo.imgs ? conn.technicalInfo.imgs.icon : '',
        help: 'Icono del equipo, recomendado de 96x96 px con fondo transparente.' },
        
        { id: 'email.user', name: 'Correo automático', ph: 'user', dv: conn.technicalInfo.email ? conn.technicalInfo.email.user : '',
        help: 'Direccion de correo que será usada por el sistema para enviar emails automaticamente.' },
        { id: 'email.pass', name: 'Contraseña de aplicación', ph: 'user', dv: conn.technicalInfo.email ? conn.technicalInfo.email.user : '', 
        help: 'Contraseña de aplicacion del correo, esta es una contraseña diferente a la normal, utlizada unicamente para correos automaticos, comuniquese con su ingeniero de sistemas para mas informacion.' },
        { id: 'email.server', name: 'Servidor', ph: 'mail.curaduria1bucaramanga.com ', dv: conn.technicalInfo.email ? conn.technicalInfo.email.server : '',
        help: 'Servidor del correo automatico.' },
        { id: 'email.protocol', name: 'Protocolo', ph: 'SMTP', dv: conn.technicalInfo.email ? conn.technicalInfo.email.protocol : '', 
        help: 'Protocolo del correo automatico.' },
        { id: 'email.port', name: 'Puerto', ph: '465', dv: conn.technicalInfo.email ? conn.technicalInfo.email.port : '',
        help: 'Puerto del correo automatico.' },
        { id: 'email.cc', name: 'Correos CC', ph: '', dv: conn.technicalInfo.email ? conn.technicalInfo.email.cc : '',
        help: 'Listas de correos para la Copia de Carbon, coloque aqui los correos a los que quiere tener Copia de Carbon.' },
        { id: 'email.bcc', name: 'Correos BCC', ph: '', dv: conn.technicalInfo.email ? conn.technicalInfo.email.bcc : '',
        help: 'Listas de correos para la Copia de Carbon oculta, coloque aqui los correos a los que quiere tener Copia de Carbon oculta'  },
        { id: 'email.bounce', name: 'Correos de rebote', ph: '', dv: conn.technicalInfo.email ? conn.technicalInfo.email.bounce : '',
        help: 'En caso tal de que un correo rebotase, coloque aqui una lista de correos que recibiran ese correo rebotado con su informacion.' },
    ]

    // ******************** ELEMENT JSX ************************ // 
    let helpTollTip = (msg) => <Tooltip2 content={msg}><MdHelp className='text-paranoia' /> </Tooltip2>
    // ******************** COMPONENT JSX ************************ // 

    // ******************** APIS ************************ // 
    function onSubmit() {
        const formData = new FormData()

        formData.append('id_public', conn.id);
        formData.append('name', document.getElementById('publicName').value);

        let companyInfo = {};

        companyInfo.director = document.getElementById('director').value;
        companyInfo.dir_title = document.getElementById('dir_title').value;
        companyInfo.dir_tiShort = document.getElementById('dir_tiShort').value;
        companyInfo.city = document.getElementById('city').value;
        companyInfo.state = document.getElementById('state').value;
        companyInfo.nomenclature = document.getElementById('nomenclature').value;
        companyInfo.address = document.getElementById('address').value;
        companyInfo.page = document.getElementById('page').value;
        companyInfo.number1 = document.getElementById('number1').value;
        companyInfo.number2 = document.getElementById('number2').value;
        companyInfo.email1 = document.getElementById('email1').value;
        companyInfo.email2 = document.getElementById('email2').value;
        companyInfo.nit = document.getElementById('nit').value;

        formData.append('companyInfo', JSON.stringify(companyInfo));

        let technicalInfo = {};
        technicalInfo.serials = {}
        technicalInfo.pot = {}
        technicalInfo.imgs = {}
        technicalInfo.email = {}

        technicalInfo.law = document.getElementById('law').value;
        technicalInfo.lawt = document.getElementById('lawt').value;
        //technicalInfo.concent = document.getElementById('concent').value;

        technicalInfo.serials.process = document.getElementById('serials.process').value;
        technicalInfo.serials.start = document.getElementById('serials.start').value;
        technicalInfo.serials.end = document.getElementById('serials.end').value;

        technicalInfo.pot.yy = document.getElementById('pot.yy').value;
        technicalInfo.pot.mm = document.getElementById('pot.mm').value;

        technicalInfo.imgs.icon = document.getElementById('imgs.icon').value;
        //technicalInfo.imgs.signature = document.getElementById('imgs.signature').value;

        technicalInfo.email.user = document.getElementById('email.user').value;
        technicalInfo.email.pass = document.getElementById('email.pass').value;
        technicalInfo.email.server = document.getElementById('email.server').value;
        technicalInfo.email.protocol = document.getElementById('email.protocol').value;
        technicalInfo.email.port = document.getElementById('email.port').value;
        technicalInfo.email.cc = document.getElementById('email.cc').value;
        technicalInfo.email.bcc = document.getElementById('email.bcc').value;
        technicalInfo.email.bounce = document.getElementById('email.bounce').value;

        formData.append('technicalInfo', JSON.stringify(technicalInfo));

        ALERT_WAIT(lang)
        AtuhService.saveCompany(formData)
            .then(response => {
                if (response.data == 'OK') ALERT_SUCCESS(lang)
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang)
            }).finally(() => setLoad(2));

    }

    return (
        <div className="my-6 px-0">
            {isSuperAdmin ?
                <>
                    <form id="dovela_vars_config_form" enctype={"multipart/form-data"} onSubmit={(e) => { e.preventDefault(); onSubmit() }}>
                        <FlexboxGrid justify="center">
                            <FlexboxGrid.Item className='border py-1 bg-dark' as={Col} xs={24} sm={22} md={18} lg={16} xl={14} xxl={12}>
                                <Grid fluid>
                                    <Row style={{ width: '100%' }} className="text-center">
                                        <Col xs={24}>
                                            <h2>THIS IS THE CONFIG PAGE!</h2>
                                        </Col>
                                    </Row>
                                </Grid>
                            </FlexboxGrid.Item>

                            <FlexboxGrid.Item className='border' as={Col} xs={24} sm={22} md={18} lg={16} xl={14} xxl={12}>
                                <Grid fluid>
                                    <Row style={{ width: '100%' }} className="text-center my-2">
                                        <Col sm={24} className="text-center">
                                            <Row style={{ width: '100%' }} className="text-center my-2">
                                                <Col sm={24} md={12} className="text-center">

                                                    <Row style={{ width: '100%' }} className="text-center my-2">
                                                        <Col sm={24} className="text-center">
                                                            <label><strong>VARIABLES PUBLICAS</strong> </label>
                                                        </Col>
                                                    </Row>
                                                    <hr />
                                                    {PUBLIC_CONFIG_VARS.map((public_var, i) => {
                                                        return <Row style={{ width: '100%' }} className="text-center my-1">
                                                            <Col sm={24} md={12} className="text-left">
                                                                <label><strong>{i + 1}. {public_var.name}</strong> {helpTollTip(public_var.help || '')}</label>
                                                            </Col>
                                                            <Col sm={24} md={12}>
                                                                <InputGroup id={public_var.id} placeholder={public_var.ph} defaultValue={public_var.dv} />
                                                            </Col>
                                                        </Row>
                                                    })}
                                                </Col>

                                                <Col sm={24} md={12} className="text-center">

                                                    <Row style={{ width: '100%' }} className="text-center my-2">
                                                        <Col sm={24} >
                                                            <label><strong>VARIABLES FUNCIONALES</strong> </label>
                                                        </Col>
                                                    </Row>
                                                    <hr />
                                                    {SYSTEM_CONFIG_VARS.map((public_var, i) => {
                                                        return <Row style={{ width: '100%' }} className="text-center my-1">
                                                            <Col sm={24} md={12} className="text-left">
                                                                <label><strong>{i + 1}. {public_var.name}</strong> {helpTollTip(public_var.help || '')}</label>
                                                            </Col>
                                                            <Col sm={24} md={12}>
                                                                <InputGroup id={public_var.id} placeholder={public_var.ph} defaultValue={public_var.dv} />
                                                            </Col>
                                                        </Row>
                                                    })}
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Grid>
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item className='border py-1 bg-dark' as={Col} xs={24} sm={22} md={18} lg={16} xl={14} xxl={12}>
                                <Grid fluid>
                                    <Row style={{ width: '100%' }} className="text-center">
                                        <Col xs={24}>
                                            <ButtonBP icon="floppy-disk" intent='success' type='submit'>SAVE</ButtonBP>
                                        </Col>
                                    </Row>
                                </Grid>
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                    </form>

                </> : <NON_IDEAL_STATE type="permit" />}
        </div>
    );
}