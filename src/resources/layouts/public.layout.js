import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Content, Footer, Header } from 'rsuite';
import FooterComponent from '../customs/components/footer.component';
import TopBarComponent from '../customs/components/topBar.component';

const PublicLayout = () => (
  <Container>
    <Header><TopBarComponent /></Header>
    <Content><Outlet /></Content>
    <Footer><FooterComponent /></Footer>
  </Container>
);

export default PublicLayout;