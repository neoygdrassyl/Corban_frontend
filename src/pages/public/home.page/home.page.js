import React from 'react';
import styled from 'styled-components'
import { Button, Col, Divider, Grid, Panel, Row } from 'rsuite';
import { BsStar } from 'react-icons/bs'
import { RiTeamFill } from 'react-icons/ri'
import { GiEgyptianBird, GiGems } from 'react-icons/gi'
import { Style } from './homeStyle.js'
import IMG1 from '../../../resources/images/home/home_image_1.png'
import GEM1 from '../../../resources/images/home/gem_blue.png'
import GEM2 from '../../../resources/images/home/gem_red.png'
import GEM3 from '../../../resources/images/home/gem_pink.png'
import { useNavigate } from 'react-router-dom';

const DIV = styled.div`${Style}`;

const LIST_GENERAL = [
  'ALMACENAMIENTO EN LA NUBE',
  'USUARIO Y CORREOS INSTITUCIONALES',
  'PROPIEDAD HORIZONTAL',
  'NORMAS URBANAS',
  'RADICACION DE ACTUACIONES URBANISTICAS'
]
const LIST_SAPHIRE = [
  'ALMACENAMIENTO EN LA NUBE',
  'USUARIO Y CORREOS INSTITUCIONALES',
  'PROPIEDAD HORIZONTAL',
  'NORMAS URBANAS',
  'RADICACION DE ACTUACIONES URBANISTICAS'
]
const LIST_RUBY = [
  'PAQUETE ZAFIRO',
  'GESTION DE ACTUACONES URBANISTICAS',
  'VENTANILLA UNICA DE RADICACION',
  'CONTROL: CREAION DE ROLES Y PERMISOS',
]
const LIST_QUARTZ = [
  'PAQUETE ZAFIRO',
  'PAQUETE RUBY',
  'ARCHIVO',
  'PUBLICACIONES',
  'MODULO DE PQRS',
  'DOCUMENTACION API PARA CONSULTAR, CERTIFICADOS Y PUBLICACIONES'
]
const LIST_TOOLS = [
  'NOMENCLATURAS',
  'CALCULADORA DE EXPENSAS',
  'DICCIONARIO',
  'CERTIFICACIONES',
]
export default function Home() {
  let navigate = useNavigate();
  const Card = props => (
    <Panel className={props.border} shaded bordered bodyFill style={{ display: 'inline-block', borderRadius: '15px' }}>
      <img src={props.img} height="220" className='py-2' />
      <Panel header={<h4>{props.title}</h4>} style={{ fontSize: '18px' }}>
        <p className='py-2'>{props.desc}</p>
        <div style={{minHeight: '180px', verticalAlign: 'middle'}}>
        <ul className='txt-l'>
          {props.list ? props.list.map(li => <li>{li}</li>) : ''}
        </ul>
        </div>
        <Divider />
        <h4>{props.price}</h4>
      </Panel>
    </Panel>
  );

  const HEADER = () => {
    return <header className="header_home text-center py-6" style={{ fontSize: '30px', zIndex: -1 }}>
      <GiEgyptianBird style={{ fontSize: '200px' }} />

      <h1 className="text-uppercase mb-0">CORBAN</h1>

      <div className="divider-custom">
        <div className="divider-custom-line_h"></div>
        <div className="divider-custom-icon" ><BsStar style={{ fontSize: '50px' }} /></div>
        <div className="divider-custom-line_h"></div>
      </div>

      <p className="mb-0" style={{ zIndex: 10 }}>Soluciones - Control - Gestion</p>
    </header>
  }
  const SECTION_BEDROCK = () => {
    return <Row className='p-5'>
      <section class="page-section portfolio" id="portfolio">
        <h2 class="text-center text-uppercase text-secondary">BEDROCK</h2>


        <div class="divider-custom text-secondary">
          <div class="divider-custom-line"></div>
          <div className="divider-custom-icon"><GiGems style={{ fontSize: '50px'}} /></div>
          <div class="divider-custom-line"></div>
        </div>

        <h3 className="py-3 text-secondary">Software de control y gestion de procesos para las curadurias. Actuaciones Urbanisticas, Propiedades Horizontales, Normas Urbanas, Archivo, Ventanilla de Radicacion y mucho mas.</h3>

        <Row>
          <Col md={8} sm={12} xs={24}>
            <Card title="ZAFIRO" price={"$ 1'000.000"} img={GEM1} list={LIST_SAPHIRE} border="border-cold"
              desc="Sencilla, centrada en los procesos mas comunes de la entidad, version ligera para entdades con menos flujo de proesos" />
          </Col>
          <Col md={8} sm={12} xs={24}>
            <Card title="RUBY" price={"$ 2'000.000"} img={GEM2} list={LIST_RUBY} border="border-blood" custom
              desc="verstil, con todas las herramientas necesarias para gestionar de forma completa todos los procesos de la entidad" />
          </Col>
          <Col md={8} sm={12} xs={24}>
            <Card title="QUARZO" price={"$ 3'000.000"} img={GEM3} list={LIST_QUARTZ} border="border-paranoia" custom
              desc="Completa, incluye modulos complemtarios que permiten suplementar las demas funciones de la entidad" />
          </Col>
        </Row>

        <Row className="py-3">
          <Col md={8} sm={12} xs={24} mdOffset={4} smOffset={0} xsOffset={0}>
            <Panel shaded bordered bodyFill style={{ display: 'inline-block', borderRadius: '15px', fontSize: '18px' }} className='border-dark'>
              <Panel header={<h4>PAQUETES ADICIONAES</h4>} >
                <p >Paquete de Herramientas funcionales complementarias para el sottware</p>
                <ul className='txt-l'>{LIST_TOOLS.map(li => <li>{li}</li>)}</ul>
                <Divider />
                <h4>$ 300.000</h4>
              </Panel>
            </Panel>
          </Col>
          <Col md={8} sm={12} xs={24}>
          <Panel shaded bordered bodyFill style={{ display: 'inline-block', borderRadius: '15px', fontSize: '18px' }} className='border-dark'>
              <Panel header={<h4>PERSONALIZACION</h4>} >
                <p  className='txt-j'>Perzonaliacion de los informes arquitectonicos basados en la norma del POT municipal. </p>
                <p  className='txt-j'>Perzonaliacion de las formulas de calculo de radicacion de pagos a entidades municipales </p>
                <p  className='txt-j'>Perzonaliacion de las generacion de sellos de la entidad </p>
              </Panel>
            </Panel>
          </Col>

        </Row>
        <Row className="py-3">
          <Button className='bg-paranoia' size='lg' appearance="primary" onClick={() => navigate('/bedrock')}><h3>CONOCER MAS</h3></Button>
        </Row>
      </section>
    </Row>
  }
  const SECTION_ABOUT = () => {
    return <Row className='p-5'>
      <section class="page-section portfolio" id="portfolio">
        <h2 class="text-center text-uppercase text-secondary mb-0">ACERCA DE NOSOTROS</h2>
        <div class="divider-custom text-secondary">
          <div class="divider-custom-line"></div>
          <div className="divider-custom-icon mb-3"><RiTeamFill style={{ fontSize: '50px' }} /></div>
          <div class="divider-custom-line"></div>
        </div>

        <Row>
          <Col md={12} sm={12} xs={24}>
            <h3 className="py-3 text-secondary">Equipo emprendedor d ela ciudad de Bucaramanga, Santander, inspirados para el desarrollo e impulso tecnologico del sector, mediante el desarrollo de aplicaciones para la gestion y control de proceso administrativos. </h3>
            <Button className='bg-paranoia' size='lg' appearance="primary"><h3>CONOCER MAS</h3></Button>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <img src={IMG1} width="400" className='py-2' />
          </Col>
        </Row>

      </section>
    </Row>
  }

  return (
    <DIV>
      {HEADER()}

      <Grid fluid>
        <Row>
          <Col xs={0} sm={1} md={2} lg={3} xl={6} xxl={8}></Col>
          <Col xs={24} sm={22} md={20} lg={18} xl={12} xxl={8} className="txt-c my-5">
            {SECTION_BEDROCK()}
            {SECTION_ABOUT()}
          </Col>
          <Col xs={0} sm={1} md={2} lg={3} xl={6} xxl={8}></Col>
        </Row>
      </Grid>
    </DIV>
  );
}