import React, { useContext, useState } from 'react';
import { Nav, Navbar, InputGroup, Input, Dropdown, Divider, Badge } from 'rsuite';
import { Gear, Dashboard, Search, Icon } from '@rsuite/icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsMoonStars, BsSun } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import { FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md"
import GridIcon from '@rsuite/icons/Grid';
import DetailIcon from '@rsuite/icons/Detail';
import PeoplesIcon from '@rsuite/icons/Peoples';
import GearIcon from '@rsuite/icons/Gear';
import NoticeIcon from '@rsuite/icons/Notice';
import HelpOutlineIcon from '@rsuite/icons/HelpOutline';
import { AuthContext } from '../contextProviders/auth.provider'
import { UtilContext } from '../contextProviders/util.provider';
import AtuhService from '../../../services/apis/auth.service'
import InfoRoundIcon from '@rsuite/icons/InfoRound';

// FLAGS FOR LANGAUGE SELECT
import FLAG_ES from '../../images/flags/ES.png'
import FLAG_US from '../../images/flags/US.png'
import MODAL from './modal.component';
import FORM from './form.component';
import { Button } from '@blueprintjs/core';

function TopBarComponent() {
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('topBar');
    const btn = utilities.getTranslation('btns');
    const theme = utilities.theme;

    let navigate = useNavigate();
    let params = useParams();
    let auth = useContext(AuthContext);
    let user = auth.user;
    const nots = auth.nots ?? [];

    var [modal, setModal] = useState(false);

    React.useEffect(() => {
        if (user) {
            loadNotifications(user.email)
        }
    }, [params]);


    const FORM_INPUTS = [

        {
            inputs: [

                {
                    label: 'product', placeholder: 'product', req: true,
                    type: 'select', leftIcon: 'property', id: 'error_form_product',
                    selectOptions: [
                        { value: 'dovela', label: 'Dovela', },
                        { value: 'other', label: 'Otros', },
                    ]
                },
            ],
        },
        {
            inputs: [
                {
                    label: 'desc', placeholder: 'desc', type: "textarea", length: 4000,
                    id: 'error_form_desc', req: true, dv: `Descripción del error:\n\n¿Que estaba haciendo?\n\n¿Que resultado esperaba?\n\n¿Que paso en realidad?\n\n¿Puede reproducir el error? ¿como?\n`
                },
            ],
        },
    ]



    const MyLink = React.forwardRef((props, ref) => {
        const { to, as, ...rest } = props;
        return (
            <Link to={to} as={as} className="pointer">
                <a ref={ref} {...rest} />
            </Link>
        );
    });

    function loadNotifications(email) {
        AtuhService.loadAllNots(email).then(response => {
            auth.setNots(response.data)
        })

    }

    function sendBugReport(data) {
        let formData = data.formData;
        let reporter = user.id + ' @ ' + user.name;
        let browser = navigator.userAgent;
        let url = window.location.href;

        formData.append('reporter', reporter)
        formData.append('browser', browser)
        formData.append('url', url)


        console.log(reporter)

    }

    return <>
        <Navbar className={'bg-dark app_nav ' + theme}>
            <Navbar.Brand as={MyLink} to="/home"><label className="pointer">CORBAN</label></Navbar.Brand>
            <Nav >
                <Nav.Item as={MyLink} to="/home"><label className="pointer">{trn.home}</label></Nav.Item>
                <Nav.Item as={MyLink} to="/bedrock"><label className="pointer">{trn.bedrock}</label></Nav.Item>
            </Nav>
            <Nav pullRight >
                {auth.user
                    ?
                    <Nav.Menu
                        icon={nots.length > 0 ? <Badge color="blue"> <FaRegUser className="text-icon" style={{ fontSize: '1.5em' }} /></Badge> : <FaRegUser className="text-icon" style={{ fontSize: '1.5em' }} />}
                        title={<label className="pointer text-uppercase">{user.name}</label>} >
                        <Nav.Item icon={<GridIcon color="dark" />} onClick={() => navigate("/dashboard")}> {trn.dash}</Nav.Item>
                        <Nav.Item icon={<NoticeIcon color="orange" />} onClick={() => navigate("/dashboard")}> {'notificaciones'} {nots.length > 0 ? <Badge color="blue" content={nots.length} /> : ''}</Nav.Item>
                        <Nav.Item icon={<DetailIcon color="red" />} onClick={() => navigate("/dashboard")}> {'mis proyectos'}</Nav.Item>
                        <Nav.Item icon={<PeoplesIcon color="blue" />} onClick={() => navigate("/dashboard")}> {'mis equipos'}</Nav.Item>
                        <Nav.Item icon={<GearIcon color="green" />} onClick={() => navigate("/dashboard")}> {'Configuracion'}</Nav.Item>
                        <Nav.Item icon={<HelpOutlineIcon color="violet" />} onClick={() => navigate("/dashboard")}> {'Ayuda'}</Nav.Item>
                        <Nav.Item icon={<InfoRoundIcon color="red" />} onClick={() => setModal(!modal)}> <strong className='text-danger'>{'Reportar Error'}</strong></Nav.Item>
                        {<hr />}
                        <Nav.Item icon={<FaSignOutAlt style={{ fontSize: '1.2em' }} />} onClick={() => auth.signout(() => navigate("/"))}> {trn.lout}</Nav.Item>
                    </Nav.Menu>

                    : <>

                        <Nav.Item as={MyLink} to="/signin" >
                            <label className="pointer"><FaRegUser className="text-icon" />{trn.sign}</label>
                        </Nav.Item>
                        <Nav.Item as={MyLink} to="/login" className='bg-light'>
                            <label className="pointer text-dark"><FaRegUser className="text-icon" />{trn.log}</label>
                        </Nav.Item>
                    </>

                }

            </Nav>

            <Nav pullRight appearance='primary'>

                <Nav.Menu
                    title={<label className="pointer">{trn.theme}</label>}
                    icon={theme == 'light' ? <BsSun style={{ fontSize: '1.8em' }} /> : <BsMoonStars style={{ fontSize: '1.5em' }} />} >
                    <Nav.Item onClick={() => utilities.changeTheme('light')}><BsSun /> {trn.t_light}</Nav.Item>
                    <Nav.Item onClick={() => utilities.changeTheme('dark')}><BsMoonStars /> {trn.t_dark}</Nav.Item>
                </Nav.Menu>

                <Nav.Menu
                    title={<label className="pointer">{trn.lang}</label>}
                    icon={<IoLanguage style={{ fontSize: '1.5em' }} />} >
                    <Nav.Item onClick={() => utilities.changeLang('es')}><img src={FLAG_ES} height="20px" /> Español</Nav.Item>
                    <Nav.Item onClick={() => utilities.changeLang('en')}><img src={FLAG_US} height="20px" /> English</Nav.Item>
                </Nav.Menu>
            </Nav>


        </Navbar>

        <MODAL
            open={modal}
            setOpen={setModal}
            title={'REPORT AN ERROR'}
            icon={<InfoRoundIcon />}
            size="md"
        >
            <FORM form={FORM_INPUTS} id="error_form" onSubmit={(e) => sendBugReport(e)}
                submitBtn={<Button icon="add" intent="success" type="submit" text={btn.new} />} />
        </MODAL>
    </>;

}

export default TopBarComponent;
