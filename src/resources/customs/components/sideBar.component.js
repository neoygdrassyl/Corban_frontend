import React, { useContext, useEffect, useState } from 'react';
import { Sidenav, Nav, Divider, DOMHelper } from 'rsuite';


import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contextProviders/auth.provider';
import PageEndIcon from '@rsuite/icons/PageEnd';
import { UtilContext } from '../contextProviders/util.provider';

import { BiChevronRightCircle } from 'react-icons/bi'
import ExitIcon from '@rsuite/icons/Exit';
import GearIcon from '@rsuite/icons/Gear';
import ExploreIcon from '@rsuite/icons/Explore';
import PeoplesIcon from '@rsuite/icons/Peoples';
import DetailIcon from '@rsuite/icons/Detail';
import HelpOutlineIcon from '@rsuite/icons/HelpOutline';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { Grid } from '@rsuite/icons/';
import SingleSourceIcon from '@rsuite/icons/SingleSource';
import UserInfoIcon from '@rsuite/icons/UserInfo';

const { getHeight, on } = DOMHelper;

function SideBarComponent(props) {
    const { expand } = props;
    let navigate = useNavigate();
    const headerStyles = {
        padding: 15,
        fontSize: 16,
        height: 54,
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    };

    let auth = useContext(AuthContext);
    let user = auth.user ? auth.user : false;
    let conn = auth.conn ? auth.conn : false;

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('sideBar');
    const theme = utilities.theme;
    const lang = utilities.lang;

    const [windowHeight, setWindowHeight] = useState(getHeight(window));

    useEffect(() => {
        setWindowHeight(getHeight(window));
        const resizeListenner = on(window, 'resize', () => setWindowHeight(getHeight(window)));

        return () => {
            resizeListenner.off();
        };
    }, []);

    let connId = conn.id ?? false;

    let workList = user.workList ? user.workList : [];

    let SIDE_BAR_ITEMS = (<>
        <Nav.Item eventKey="2" onClick={() => navigate("/user")} icon={<UserInfoIcon style={{ color: 'forestgreen' }} />}>{String(user.name || 'USER').toUpperCase()}</Nav.Item>
        <Nav.Menu title="POYECTOS" icon={<SingleSourceIcon style={{ color: 'crimson' }} />}>
            <Nav.Item>Proyecto A</Nav.Item>
        </Nav.Menu>
        {workList.length > 0 ?
            <Nav.Menu
                className={theme}
                eventKey="1"
                title="EQUIPOS DE TRABAJO"
                icon={<PeoplesIcon color="blue" />}
                openDirection='right'
            >
                {workList.map((wl, i) => <Nav.Item className={''+theme} style={{ fontSize: '12px', wordBreak: 'break-word' }} eventKey={"1-" + i} onClick={() => navigate("/dashteam/" + wl.id)}
                    icon={<PageEndIcon color={wl.id == connId ? "blue" : 'gray'} />}>
                    <label className={wl.id == connId ? "fw-b" : ''} >{wl.name}</label>
                </Nav.Item>
                )}

            </Nav.Menu>
            : ''}
        <Nav.Item eventKey="7" onClick={() => navigate("/options")} icon={<GearIcon style={{ color: 'darkcyan' }} />}>OPTIONS</Nav.Item>
        <Nav.Item eventKey="8" onClick={() => navigate("/help")} icon={<HelpOutlineIcon style={{ color: 'orange' }} />}>HELP</Nav.Item>
        <Nav.Item eventKey="9" onClick={() => navigate("/home")} icon={<HomeIcon style={{ color: 'purple' }} />}>HOME</Nav.Item>
        <Nav.Item eventKey="10" onClick={() => auth.signout(() => navigate("/"))} icon={<ExitIcon />}>LOG OUT</Nav.Item>

    </>)

    let SIDE_BAR_1 = (
        <>
            <Sidenav.Header className={"bg-cold " + theme}>
                <NavLink to={'/dashboard'} className={"text-light " + theme}>
                    <div style={headerStyles}>
                        <Grid style={{ fontSize: 25 }} />
                        {props.expand ?
                            <span style={{ marginLeft: 12 }}> DHASBOARD</span>
                            : ""}

                    </div>
                </NavLink>
            </Sidenav.Header>

            <Sidenav expanded={props.expand} defaultOpenKeys={['0']} appearance="primary" className={theme} >
                <Sidenav.Body style={
                    expand ? { height: windowHeight - 112, overflow: 'auto' }
                        : {}}
                >
                    <Nav>
                        {SIDE_BAR_ITEMS}
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </>
    )

    let SIDE_BAR_2 = (
        <>
            <div className='bg-light border' style={{
                position: 'fixed',
                height: '100%',
                overflowX: 'hidden',
                overflowY: 'auto',
                zIndex: 2,
                boxShadow: 'black',
                width: '240px'
            }}>
                <Nav vertical activeKey={'news'} style={{ fontSize: '16px' }} appearance="tabs">
                    {SIDE_BAR_ITEMS}
                </Nav>
            </div>
        </>
    )
    return (<>
        {SIDE_BAR_1}
    </>);
}

export default SideBarComponent;
