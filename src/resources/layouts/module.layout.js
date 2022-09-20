import React, { useContext } from 'react';
import { Outlet, } from 'react-router-dom';
import { Container, Content, Divider, Footer, Nav, Navbar, Sidebar } from 'rsuite';

import SideBarComponent from '../../resources/customs/components/sideBar.component'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { AuthContext } from '../../resources/customs/contextProviders/auth.provider';
import { UtilContext } from '../customs/contextProviders/util.provider';



const ModuleLayout = ({ children, ...rest }) => {
    let auth = useContext(AuthContext);
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('sideBar');
    const theme = utilities.theme;
    const lang = utilities.lang;
    const fontScale = utilities.fontScale;
    const fontFamily = utilities.fontFamily;

    const [expand, setExpand] = React.useState(true);

    const containerClasses = expand ? 'page-container': 'container-full';
      
    const NavToggle = ({ expand, onChange }) => {
        return (
            <Navbar appearance="subtle" className={"nav-toggle "+theme} >
                <Nav pullRight>
                    <Nav.Item onClick={onChange} 
                    style={{ textAlign: 'center' }}
                    icon={expand ? <FaAngleLeft /> : <FaAngleRight />}
                    />
                </Nav>
            </Navbar>
        );
    };

    let SIDE_BAR_2 = (<SideBarComponent />)

    let SIDE_BAR_1 = (
        <Sidebar className={'border bg-mist '+theme}
            width={expand ? 240 : 56}
            style={{ display: 'flex', flexDirection: 'column', position:'fixed', zIndex: 2, height: '100%', }}
            collapsible >
            <SideBarComponent expand={expand}/> 
            <NavToggle expand={expand} onChange={() => setExpand(!expand)}  />
        </Sidebar>
    )
    return (
        <Container className={"frame "+theme}>

            {SIDE_BAR_1}

            <Container style={{ zIndex: 1, fontSize: `${fontScale}em`, fontFamily: fontFamily }} className={containerClasses}>
                <Content className="m-1" style={{ marginLeft: expand ? 240 : 56 }}>
                    <Outlet />
                </Content>
                <Footer> <div className="footer" style={{ height: '100%' }}></div></Footer>
            </Container>
        </Container>

    );
};
export default ModuleLayout;
