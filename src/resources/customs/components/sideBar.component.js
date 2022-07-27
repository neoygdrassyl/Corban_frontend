import React, { useContext } from 'react';
import { Sidenav, Nav } from 'rsuite';
import { Grid } from '@rsuite/icons/';
import PeoplesIcon from '@rsuite/icons/Peoples';
import DetailIcon from '@rsuite/icons/Detail';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contextProviders/auth.provider';
import { BiChevronRightCircle } from 'react-icons/bi'
import PageEndIcon from '@rsuite/icons/PageEnd';

function SideBarComponent(props) {
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
    
    let workList = user.workList ? user.workList : [];

    return (<>
        <Sidenav.Header className="bg-cold">
            <NavLink to={'/dashboard'} className="text-light">
                <div style={headerStyles}>
                    <Grid style={{ fontSize: 25 }} />
                    {props.expand ?
                        <span style={{ marginLeft: 12 }}> DHASBOARD</span>
                        : ""}

                </div>
            </NavLink>
        </Sidenav.Header>

        <Sidenav expanded={props.expand} defaultOpenKeys={['0']} appearance="primary">
            <Sidenav.Body>
                <Nav>
                    <Nav.Menu
                        eventKey="2"
                        trigger="hover"
                        title="MIS PROYECTOS"
                        icon={<DetailIcon color="red" />}
                        placement="rightStart"
                    >
                        <Nav.Item eventKey="3-1">proyecto 1</Nav.Item>
                    </Nav.Menu>
                    {workList.length > 0 ?
                        <Nav.Menu
                            eventKey="1"
                            trigger="hover"
                            title="MIS EQUIPOS DE TRABAJO"
                            icon={<PeoplesIcon color="blue" />}
                            placement="rightStart"
                        >
                            {workList.map((wl, i) => <Nav.Item eventKey={"3-" + i} onClick={() => navigate("/dashteam/" + wl.id)} 
                             icon={<PageEndIcon color="blue" />}>
                                {wl.name}
                            </Nav.Item>
                            )}

                        </Nav.Menu>
                        : ''}

                </Nav>
            </Sidenav.Body>
        </Sidenav>


    </>);
}

export default SideBarComponent;
