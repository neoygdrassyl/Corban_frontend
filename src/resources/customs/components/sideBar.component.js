import React from 'react';
import { Sidenav, Nav } from 'rsuite';
import { Grid, Attachment, Page, CheckOutline, Task } from '@rsuite/icons/';
import { NavLink, useNavigate } from 'react-router-dom';

function SideBarComponent(props) {
    let navigate = useNavigate();
    const headerStyles = {
        padding: 15,
        fontSize: 16,
        height: 54,
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    };
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
                    <Nav.Item eventKey="3" icon={<Attachment color="violet" />} onClick={() => navigate("/submit")}>
                        VENTANILLA UNICA
                    </Nav.Item>
                    <Nav.Item eventKey="1" icon={<Task color="blue" />} onClick={() => navigate("/fun")}>
                        LICENCIAS Y SOLICITUDES
                    </Nav.Item>
                    <Nav.Item eventKey="2" icon={<CheckOutline color="red" />}>
                        PQRS
                    </Nav.Item>
                    <Nav.Item eventKey="4" icon={<Page color="green" />}>
                        ARCHIVO
                    </Nav.Item>
                </Nav>
            </Sidenav.Body>
        </Sidenav>


    </>);
}

export default SideBarComponent;
