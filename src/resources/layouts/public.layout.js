import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Content } from 'rsuite';

const PublicLayout = () => (
  <Container>
    <Content><Outlet/></Content>
  </Container>
);

export default PublicLayout;