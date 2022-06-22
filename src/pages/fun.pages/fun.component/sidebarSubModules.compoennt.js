import React, { useContext } from 'react';
import { Sidenav, Nav, Dropdown, Row, Col, Divider } from 'rsuite';
import { Search, InfoOutline, Attachment, Page, CheckOutline, Edit, Time, CloseOutline, PeopleSpeaker } from '@rsuite/icons/';
import { CATEGORY, formsParser1, regexChecker_isPh, STATE } from '../../../resources/customs/utils/funParser.module';
import { CurrentItemConext } from '../fun.page';
import PROGRESION_ICONS from './progresionIcons.component';

function useCurrentItems() { return useContext(CurrentItemConext); }

function SideBarFunSubModules(props) {
    const CurrentItems = useCurrentItems();
    const tabs = CurrentItems.currentTabs;
    const SubModulesNames = { 'gen': "DETALLES", 'edit': 'ACTUALIZAR', 'clock': 'TIEMPOS', 'docs': 'DOCUMENTOS', 'check': 'CHECKEO', 'negative': 'DESISTIMIENTO', 'ph': 'INF. PH.', 'law': 'INF. JUR.', 'arq': 'INF. ARQ.', 'est': 'INF. EST.', 'acta': 'ACTA', 'exp': 'EXPEDICION', 'sign': 'PUBLICIDAD' }
    const SubModulesIcons = { 'gen': <Search />, 'edit': <Edit />, 'clock': <Time />, 'docs': <Attachment />, 'check': <CheckOutline />, 'negative': <CloseOutline />, 'ph': <Page />, 'law': <Page />, 'arq': <Page />, 'est': <Page />, 'acta': <Page />, 'exp': <Page />, 'sign': <PeopleSpeaker /> }

    let currentItem = props.item;
    const cols2Ratio = [10, 14];
    const handleSelect = eventKey => {
        const newTab = {
            eventKey: `${eventKey}:${currentItem.id}`,
            label: `${SubModulesNames[eventKey]}: ${currentItem.id_public}`,
            icon: SubModulesIcons[eventKey],
            close: true,
            id: currentItem.id,
            item: currentItem,
            to: `fun/${eventKey}/${currentItem.id}`,
        }
        var isNew = true;
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].eventKey.includes(newTab.eventKey)) isNew = false;
        }
        if (isNew) {
            const nextItems = [
                ...tabs,
                newTab
            ];
            CurrentItems.addTab(nextItems);
        }


    };
    return (<>
        {currentItem ?
            <>
                <Sidenav.Header className="bg-secondary">
                    <Row className="my-2">
                        {props.expand ?
                            <>

                                <Row className="text-light">
                                    <Col xs={24} className="text-center">
                                        <label >TIPO DE SOLICITUD: </label>
                                    </Col>
                                </Row>
                                <Row className="text-light">
                                    <Col xs={22} className="text-left" style={{ marginLeft: 10 }}>
                                        <label className="fw-b">{formsParser1(currentItem)}</label>
                                    </Col>
                                </Row>
                                <Divider />
                                <Row className="text-light">
                                    <Col xs={cols2Ratio[0]} className="text-right">
                                        <label >NUMERO: </label>
                                    </Col>
                                    <Col xs={cols2Ratio[1]} className="text-left">
                                        <label className="fw-b">{currentItem.id_public}</label>
                                    </Col>
                                </Row>
                                <Row className="text-light">
                                    <Col xs={cols2Ratio[0]} className="text-right">
                                        <label >ESTADO: </label>
                                    </Col>
                                    <Col xs={cols2Ratio[1]} className="text-left">
                                        <label className="fw-b">{STATE(currentItem.state)}</label>
                                    </Col>
                                </Row>
                                <Row className="text-light">
                                    <Col xs={cols2Ratio[0]} className="text-right">
                                        <label >CATEGORIA: </label>
                                    </Col>
                                    <Col xs={cols2Ratio[1]} className="text-left">
                                        <label className="fw-b">{CATEGORY[currentItem.type]}</label>
                                    </Col>
                                </Row>
                                <Row className="text-light">
                                    <Col xs={cols2Ratio[0]} className="text-right">
                                        <label >REVISION: </label>
                                    </Col>
                                    <Col xs={cols2Ratio[1]} className="text-left">
                                        <label className="fw-b">{currentItem.version}</label>
                                    </Col>
                                </Row>
                                <Row className="text-light">
                                    <Col xs={cols2Ratio[0]} className="text-right">
                                        <label >FECHA PAGO: </label>
                                    </Col>
                                    <Col xs={cols2Ratio[1]} className="text-left">
                                        <label className="fw-b">{currentItem.clock_payment}</label>
                                    </Col>
                                </Row>
                                <Row className="text-light">
                                    <Col xs={cols2Ratio[0]} className="text-right">
                                        <label >FECHA LDF: </label>
                                    </Col>
                                    <Col xs={cols2Ratio[1]} className="text-left">
                                        <label className="fw-b">{currentItem.clock_date}</label>
                                    </Col>
                                </Row>
                                <Row className="text-light">
                                    <Col xs={cols2Ratio[0]} className="text-right">
                                        <label >FECHA ACTA: </label>
                                    </Col>
                                    <Col xs={cols2Ratio[1]} className="text-left">
                                        <label className="fw-b">TODO</label>
                                    </Col>
                                </Row>
                                <Row className="text-light">
                                    <Col xs={24} className="text-center">
                                        <label className="py-2">PROGRESION: </label>
                                    </Col>
                                </Row>
                                <Row className="text-light">
                                    <Col xs={24} className="text-center">
                                        <PROGRESION_ICONS currentItem={currentItem} />
                                    </Col>
                                </Row>
                            </> : <InfoOutline style={{ fontSize: 30, marginLeft: 16, color: 'white' }} />}
                    </Row>

                </Sidenav.Header>
                <Sidenav expanded={props.expand} defaultOpenKeys={['gen']} appearance="subtle">
                    <Sidenav.Body>
                        <Nav onSelect={handleSelect} >
                            <Nav.Item eventKey="gen" icon={<Search />}>
                                DETALLES
                            </Nav.Item>
                            <Dropdown.Item divider />
                            <Nav.Item eventKey="edit" icon={<Edit />}>
                                ACTUALIZAR
                            </Nav.Item>
                            <Nav.Item eventKey="clock" icon={<Time />}>
                                TIEMPOS
                            </Nav.Item>
                            <Nav.Item eventKey="docs" icon={<Attachment />}>
                                DOCUMENTOS
                            </Nav.Item>
                            {!regexChecker_isPh(currentItem, true)
                                ? <Nav.Item eventKey="sign" icon={<PeopleSpeaker />}>
                                    PUBLICIDAD
                                </Nav.Item>
                                : ""}
                            <Nav.Item eventKey="check" icon={<CheckOutline />}>
                                CHECKEO
                            </Nav.Item>
                            <Nav.Item eventKey="negative" icon={<CloseOutline />}>
                                DESISTIMIENTO
                            </Nav.Item>
                            <Dropdown.Item divider />
                            {regexChecker_isPh(currentItem, true)
                                ? <Nav.Item eventKey="ph" icon={<Page />}>INF. PH.</Nav.Item>
                                : <>
                                    <Nav.Item eventKey="law" icon={<Page />}>
                                        INF. JUR.
                                    </Nav.Item>
                                    <Nav.Item eventKey="arq" icon={<Page />}>
                                        INF. ARQ.
                                    </Nav.Item>
                                    <Nav.Item eventKey="est" icon={<Page />}>
                                        INF. EST.
                                    </Nav.Item>
                                    <Nav.Item eventKey="acta" icon={<Page />}>
                                        ACTA
                                    </Nav.Item>
                                    <Nav.Item eventKey="exp" icon={<Page />}>
                                        EXPEDICION
                                    </Nav.Item>
                                </>}

                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </> : ""}
    </>);
}

export default SideBarFunSubModules;
