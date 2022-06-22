import React, { createContext, useContext } from 'react';
import { Affix, Container, Content, Nav, Navbar, Sidebar } from 'rsuite';
import { FaAngleLeft, FaAngleRight, FaTimes } from 'react-icons/fa'
import FUN_MACRO_VIEW from './funMacro.view';
import SideBarFunSubModules from '../fun.component/sidebarSubModules.compoennt';
import { CurrentItemConext } from '../fun.page'
import FUN_GEN_VIEW from './funGen.view';
import { Outlet, Link, NavLink } from 'react-router-dom';


export let FunViewContext = createContext();
function useCurrentItems() { return useContext(CurrentItemConext); }

export default function FUN_LISTS_VIEWS() {
    const CurrentItems = useCurrentItems();
    const tabs = CurrentItems.currentTabs
    const [activeKey, setActiveKey] = React.useState('macro');

    const MyLink = React.forwardRef((props, ref) => {
        const { to, as, ...rest } = props;
        return (
            <Link to={to} as={as} style={{ textDecoration: 'none' }}>
                <label ref={ref} {...rest} />
            </Link>
        );
    });

    const TabsNav = ({ active, onSelect, ...props }) => {
        return (
            <Nav {...props} activeKey={active} onSelect={onSelect} style={{ marginBottom: 0 }} className="bg-cold py-2">
                {tabs.map((value, index) =>
                    <Nav.Item eventKey={value.eventKey} icon={value.icon} className="text-light"
                        as={MyLink} to={value.to} > {value.label}
                        {value.close ? <FaTimes onClick={(eventKey = value.eventKey) => {
                            const newTabs = [...tabs];
                            newTabs.splice(newTabs.map(item => item.eventKey).indexOf(eventKey), 1);
                            CurrentItems.removeTab(newTabs);
                            setActiveKey('macro');
                        }} /> : ""}
                    </Nav.Item>
                )}
            </Nav>
        );
    };

    // SUBMODULE SIDE BAR
    const [expand, setExpand] = React.useState(true);
    const NavToggle = ({ expand, onChange }) => {
        return (
            <Navbar appearance="subtle" className="nav-toggle" >
                <Nav pullRight>
                    <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                        {expand ? <FaAngleLeft /> : <FaAngleRight />}
                    </Nav.Item>
                </Nav>

            </Navbar>
        );
    };
    const getCurrentTabItem = (activeKey) => {
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].eventKey.includes(activeKey)) return tabs[i].item;
        }
        return null;
    }
    const subModuleNav = <>
        {getCurrentTabItem(activeKey) ?
            <Sidebar style={{ display: 'flex', flexDirection: 'column' }}
                width={expand ? 260 : 56}
                collapsible>
                <SideBarFunSubModules expand={expand} item={getCurrentTabItem(activeKey)} />
                <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
            </Sidebar>
            : ""}
    </>

    return (
        <FunViewProvider>
            <Affix><TabsNav appearance="tabs" active={activeKey} onSelect={setActiveKey} /></Affix>
            <Container>
                {activeKey != 'macro' && activeKey != 'negatives' && activeKey != 'submit' ? subModuleNav : ''}
                <Content>
                    <Outlet />
                </Content>
            </Container>

        </FunViewProvider>
    );
}

function FunViewProvider({ children }) {
    const [limit, setLimit] = React.useState(20);
    const [page, setPage] = React.useState(1);

    let updateLimit = (value) => {
        setLimit(value);

    };

    let updatePage = (value) => {
        setPage(value);
    };

    let value = {
        limit, updateLimit,
        page, updatePage,
    };

    return <FunViewContext.Provider value={value}>{children}</FunViewContext.Provider>;
}

