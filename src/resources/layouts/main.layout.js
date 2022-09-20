import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Content, Footer, Header } from 'rsuite';
import FooterComponent from '../../resources/customs/components/footer.component';
import TopBarComponent from '../../resources/customs/components/topBar.component';
import { UtilContext } from '../../resources/customs/contextProviders/util.provider';

const MainLayout = ({ children, ...rest }) => {
    const utilities = React.useContext(UtilContext);

    return (
        <div className={utilities ? utilities.theme : 'light'}>
            <Outlet />
        </div>
    );
};
export default MainLayout;