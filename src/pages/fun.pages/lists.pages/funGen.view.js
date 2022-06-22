import React, { useContext, useEffect, useState } from 'react';
import { Affix, Button, Col, Container, Content, Divider, Loader, Message, Nav, Row, Sidebar } from 'rsuite';
import { CurrentItemConext } from '../fun.page'
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider'
import FunService from '../../../services/apis/fun.service';
import { Link, NavLink, useLocation } from "react-router-dom";
import FUN_0_COMPONENT from '../fun.component/fun_0.component';
import FUN_1_COMPONENT from '../fun.component/fun_1.component';
import FUN_2_COMPONENT from '../fun.component/fun_2.component';
import FUN_3_COMPONENT from '../fun.component/fun_3.component';
import FUN_4_COMPONENT from '../fun.component/fun_4.component';
import FUN_51_COMPONENT from '../fun.component/fun_51.component';
import FUN_52_COMPONENT from '../fun.component/fun_52.component';
import FUN_53_COMPONENT from '../fun.component/fun_53.component';
import FUN_C_COMPONENT from '../fun.component/fun_c.component';

function useCurrentItem() { return useContext(CurrentItemConext); }
function useAuth() { return useContext(AuthContext); }


export default function FUN_GEN_VIEW() {
    let location = useLocation();
    let id = location.pathname.split('/')[3];

    const [active, setActive] = React.useState('home');
    let auth = useAuth();
    let connection = auth.connection ? auth.connection : false;
    let currentItem = useCurrentItem();
    let [loadStatus, setLoadStatus] = useState(0) // 0 - not loeaded yet, 1 - successfully loaded, 2 - server returned error
    const tabs = currentItem.currentTabs;
    const activeKey = 'gen:' + currentItem.id;
    const getCurrentTabItem = (activeKey) => {
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].eventKey.includes(activeKey)) return tabs[i].item;
        }
        return [];
    }


    useEffect(() => {
        setLoadStatus(0)
        loadItems(id, connection.conn);
    }, [id]);


    function loadItems(id, dbIndex) {
        if (!dbIndex) currentItem.load_gen([], () => { })
        FunService.getGeneral(id, dbIndex, auth.token)
            .then(response => {
                currentItem.load_gen(response.data, () => { });
                setLoadStatus(1);
            })
            .catch(e => {
                console.log(e);
                currentItem.load_gen([], () => { });
                setLoadStatus(2);
            });
    }
    const LocalNav = ({ active, onSelect, ...props }) => {
        return (
            <Nav {...props} vertical activeKey={active} onSelect={onSelect}>
                <Nav.Item eventKey="fun0"><a href="#fun_0_g">0. METADATA</a></Nav.Item>
                <Nav.Item eventKey="fun1">1. IDENTIFICACION DE LA SOLICITUD</Nav.Item>
                <Nav.Item eventKey="fun2">2. INFORMAION DEL PREDIO</Nav.Item>
                <Nav.Item eventKey="fun3">3. INFORMACION DE VECINOS COLINDANTES</Nav.Item>
                <Nav.Item eventKey="fun4">4. LINDEORS, DIMENSIONES Y ÁREAS</Nav.Item>
                <Nav.Item eventKey="fun5">5. TITULARES Y PROFESIONALES RESPONSABLES</Nav.Item>
                <Nav.Item eventKey="fun51"> 5.1. TITULAR(ES) DE LA SOLICITUD</Nav.Item>
                <Nav.Item eventKey="fun52"> 5.1. TITULAR(ES) DE LA SOLICITUD</Nav.Item>
                <Nav.Item eventKey="fun53"> 5.3. RESPONSABLE DE LA SOLICITUD</Nav.Item>
                <Nav.Item eventKey="func">6. LISTA DE CHECKEO</Nav.Item>
                <Nav.Item eventKey="funr">6.1. CHECKEO DE DOCUMENTOS</Nav.Item>
                <Nav.Item eventKey="funa">6.2. DOCUMENTOS ANEXOS</Nav.Item>
                <Nav.Item eventKey="funO">7. OTROS DATOS</Nav.Item>
                <Nav.Item eventKey="fun_report">8. INFORMES</Nav.Item>
                <Nav.Item eventKey="fun_law">8.1. INFORME JURIDICO</Nav.Item>
                <Nav.Item eventKey="fun_arc">8.2. INFORME ARQUITECTONICO</Nav.Item>
                <Nav.Item eventKey="fun_eng">8.3. INFORME ESTRUCTURAL</Nav.Item>
                <Nav.Item eventKey="fun_acta">9. ACTA</Nav.Item>
                <Nav.Item eventKey="fun_exp">10. EXPEDICION</Nav.Item>
            </Nav>
        );
    };

    const _COMPONENT_FUN_0 = <>
        <Row className="mx-2">
            {!getCurrentTabItem(activeKey).clock_payment ? <Message showIcon type="error">
                <label className="fw-b">NO HAY FECHA DE PAGO</label>: No se ha especificado la fecha de pago, se debe de establecer esta fecha para que el sistema pueda calcular los tiempos de la solicitud.
            </Message> : ""}
            {currentItem.FUN_0.type == 0 || !currentItem.FUN_0.type ? <Message showIcon type="warning">
                <label className="fw-b">NO ESTA CATEGORIZADO</label>: Categorize esta soliciud para que el sistema pueda calcular las fechas limites de informes mas precisamente.
            </Message> : ""}
        </Row>
        <Row className="mx-2">
            <FUN_0_COMPONENT readOnly={'readonly'} currentVersion={currentItem.currentVersion}
                FUN_0={currentItem.FUN_0} FUN_1={currentItem.FUN_1} />
        </Row>
    </>
    const _COMPONENT_FUN_1 = <>
        <Row className="px-2">
            <FUN_1_COMPONENT readOnly={'readOnly'} currentVersion={currentItem.currentVersion}
                FUN_1={currentItem.FUN_1} />
        </Row>
    </>

    const _COMPONENT_FUN_2 = <>
        <Row className="px-2">
            <FUN_2_COMPONENT readOnly={'readOnly'} currentVersion={currentItem.currentVersion}
                FUN_2={currentItem.FUN_2} />
        </Row>
    </>

    const _COMPONENT_FUN_3 = <>
        <Row className="px-2">
            <FUN_3_COMPONENT readOnly={'readOnly'} loadStatus={loadStatus}
                FUN_3={currentItem.FUN_3} />
        </Row>
    </>

    const _COMPONENT_FUN_4 = <>
        <Row className="px-2">
            <FUN_4_COMPONENT readOnly={'readOnly'} loadStatus={loadStatus}
                FUN_4={currentItem.FUN_4} />
        </Row>
    </>

    const _COMPONENT_FUN_51 = <>
        <Row className="px-2">
            <FUN_51_COMPONENT readOnly={'readOnly'} loadStatus={loadStatus}
                FUN_51={currentItem.FUN_51} />
        </Row>
    </>

    const _COMPONENT_FUN_52 = <>
        <Row className="px-2">
            <FUN_52_COMPONENT readOnly={'readOnly'} loadStatus={loadStatus}
                FUN_52={currentItem.FUN_52} />
        </Row>
    </>

const _COMPONENT_FUN_53 = <>
<Row className="px-2">
    <FUN_53_COMPONENT readOnly={'readOnly'} currentVersion={currentItem.currentVersion}
        FUN_53={currentItem.FUN_53} />
</Row>
</>

const _COMPONENT_FUN_C = <>
<Row className="px-2">
    <FUN_C_COMPONENT readOnly={'readOnly'} currentVersion={currentItem.currentVersion}
        FUN_C={currentItem.FUN_C} />
</Row>
</>

    const page_view = <>
        <div id="fun_0_g"><Divider><label className="fw-b">0. METADATA</label></Divider></div>
        {_COMPONENT_FUN_0}
        <Divider><label className="fw-b">1. IDENTIFICACION DE LA SOLICITUD</label></Divider>
        {_COMPONENT_FUN_1}
        <Divider><label className="fw-b">2. INFORMACION DEL PREDIO</label></Divider>
        {_COMPONENT_FUN_2}
        <Divider><label className="fw-b">3. INFORMACION DE VECINOS COLINDANTES</label></Divider>
        {_COMPONENT_FUN_3}
        <Divider><label className="fw-b">4. LINDEORS, DIMENSIONES Y ÁREAS</label></Divider>
        {_COMPONENT_FUN_4}
        <Divider><label className="fw-b">5. TITULARES Y PROFESIONALES RESPONSABLES</label></Divider>

        <Divider><label className="fw-b">5.1. TITULAR(ES) DE LA SOLICITUD</label></Divider>
        {_COMPONENT_FUN_51}
        <Divider><label className="fw-b">5.2. PROFESIONAL(ES) RESPONSABLES DE LA SOLICITUD</label></Divider>
        {_COMPONENT_FUN_52}
        <Divider><label className="fw-b">5.3. RESPONSABLE DE LA SOLICITUD</label></Divider>
        {_COMPONENT_FUN_53}
        <Divider><label className="fw-b">6. LISTA DE CHECKEO</label></Divider>

        <Divider><label className="fw-b">6.1. CONDICION DE LA RADICACION</label></Divider>
        {_COMPONENT_FUN_C}
        <Divider><label className="fw-b">6.2. CHECKEO DE DOCUMENTOS</label></Divider>

        <Divider><label className="fw-b">6.3. DOCUMENTOS ANEXOS</label></Divider>
    </>
    return (<Container className="px-2">
        <Content>
            {loadStatus == 0 ? <Row className="my-6 text-center"><Loader size="lg" content="CARGANDO INFORMACION..." /></Row> : ""}
            {loadStatus == 2 ? <Row className="mx-2">{''}</Row> : ""}
            {loadStatus == 1 ? page_view : ""}
        </Content>
        <Sidebar><Affix top={50}><LocalNav appearance="subtle" reversed active={active} onSelect={setActive} /></Affix></Sidebar>
    </Container>
    );
}
