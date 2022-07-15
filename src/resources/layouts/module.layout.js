import React, { useContext } from 'react';
import { Outlet, } from 'react-router-dom';
import { Container, Content, Divider, Nav, Navbar, Sidebar } from 'rsuite';

import SideBarComponent from '../../resources/customs/components/sideBar.component'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { AuthContext } from '../../resources/customs/contextProviders/auth.provider';

const ModuleLayout = ({ children, ...rest }) => {
    let auth = useContext(AuthContext);
    const [expand, setExpand] = React.useState(true);

    const NavToggle = ({ expand, onChange }) => {
        return (
            <Navbar appearance="primary" className="nav-toggle" >
                <Nav pullRight>
                    <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                        {expand ? <FaAngleLeft /> : <FaAngleRight />}
                    </Nav.Item>
                </Nav>

            </Navbar>
        );
    };
    return (
        <Container>
            <Container>

                <Sidebar className='sideBarMain'
                    width={expand ? 260 : 56}
                    collapsible >
                    <SideBarComponent expand={expand} />
                    <Divider />
                    <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
                </Sidebar>

                <Container>
                    <Content>
                        <Outlet />
                    </Content>
                </Container>
            </Container>
        </Container>
    );
};
export default ModuleLayout;
