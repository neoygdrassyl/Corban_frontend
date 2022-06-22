import React, { useEffect } from 'react';
import styled from 'styled-components'
import { Button, Carousel, Col, Divider, Grid, IconButton, Panel, Row, Table, Tooltip, Whisper, Column, HeaderCell, Cell } from 'rsuite';
import { Style } from './Style.js'
import { FaCheck, FaChartBar } from 'react-icons/fa'
import { VscFilePdf } from 'react-icons/vsc'
import { GoClock } from 'react-icons/go'
import { BsCodeSlash } from 'react-icons/bs'
import IMG1 from '../../resources/images/home/home_image_1.png'
import GEM1 from '../../resources/images/home/gem_blue.png'
import GEM2 from '../../resources/images/home/gem_red.png'
import GEM3 from '../../resources/images/home/gem_pink.png'

const DIV = styled.div`${Style}`;


export default function BEDROCK() {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <DIV id="start_page">

            <Grid fluid>
                <Row>

                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="txt-c p-5">
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan={15}>BEDROCK beta 0.1.X.0</th>
                                </tr>
                                <tr>
                                    <th colSpan={2} rowSpan={2}>MODULOS</th>
                                    <th colSpan={4} rowSpan={2}>DESCRIPCION</th>
                                    <th colSpan={6}>UTILIDADES</th>
                                    <th rowSpan={2} style={{ backgroundColor: 'lightblue' }}>
                                        <img src={GEM1} height="40" /><br />ZAFIRO
                                    </th>
                                    <th rowSpan={2} style={{ backgroundColor: 'LightCoral' }}>
                                        <img src={GEM2} height="40" /><br />RUBY
                                    </th>
                                    <th rowSpan={2} style={{ backgroundColor: 'Violet' }}>
                                        <img src={GEM3} height="40" /><br />QUARTZ
                                    </th>
                                </tr>
                                <tr>
                                    <th >Listado</th>
                                    <th >Gestion</th>
                                    <th >Consulta</th>
                                    <th colSpan={2}>Otros</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td rowSpan={15}>Procesamiento Actuaciones Urbanisticas</td>
                                    <td rowSpan={5}> Radicacion</td>
                                    <td colSpan={4} >Informacion General, listado y consulta de todas las Acutaiones Urbanisticas </td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td colSpan={3}>Metadatos Proceso, <FaChartBar className='text-success' /> grafica de tiempos</td>
                                    <td rowSpan={15}><FaCheck className='text-success' /></td>
                                    <td rowSpan={15}><FaCheck className='text-success' /></td>
                                    <td rowSpan={15}><FaCheck className='text-success' /></td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>Radicación FUN</td>
                                    <td ></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ></td>
                                    <td colSpan={3}><VscFilePdf className='text-danger' /> PDF FUN</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>Lista de Checkeo</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ></td>
                                    <td colSpan={3}><VscFilePdf className='text-danger' /> PDF CHECKEO</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>Publicidad</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ></td>
                                    <td colSpan={3}><VscFilePdf className='text-danger' /> PDF Citacion a vecinos, Valla informativa</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>Control Documental</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td colSpan={3}><VscFilePdf className='text-danger' /> PDF (Incompleto, LyDF, Control Documental, Documento de Reconocimiento, Certificacion)</td>
                                </tr>
                                <tr>
                                    <td rowSpan={8}>Evaluacion</td>
                                    <td rowSpan={4}>Acta Observaciones y Correciones</td>
                                    <td colSpan={3}>Informe Juridico</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td colSpan={3}><VscFilePdf className='text-danger' /> PDF (Informe Juridico)</td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>Informe Arquitectonico </td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td colSpan={3}><VscFilePdf className='text-danger' /> PDF (Informe Arquitectonico)</td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>Informe Estructural </td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td colSpan={3}><VscFilePdf className='text-danger' /> PDF (Informe Estructural)</td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>Acta e integración de los Informes en un solo Documento </td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td colSpan={3}><VscFilePdf className='text-danger' /> PDF (Acta Observaciones y Correciones),<br /><GoClock className='text-primary' /> Control timepos y notificaciones</td>
                                </tr>

                                <tr>
                                    <td rowSpan={4}>Resolucion</td>
                                    <td colSpan={3}>Resolucion: Otorgada</td>
                                    <td ></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ></td>
                                    <td colSpan={3}><VscFilePdf className='text-danger' /> PDF (Resolucion: Otorgada), <GoClock className='text-primary' /> Control de tiempos y notificaciones</td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>Resolucion: Negada</td>
                                    <td ></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ></td>
                                    <td colSpan={3}><VscFilePdf className='text-danger' /> PDF (Negada), <GoClock className='text-primary' /> Control de tiempos y notificaciones</td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>Resolucion: Desistida</td>
                                    <td ></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ></td>
                                    <td colSpan={3}><VscFilePdf className='text-danger' /> PDF (Desistida), <GoClock className='text-primary' /> Control de tiempos y notificaciones</td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>Resolucion: Renuncia</td>
                                    <td ></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ></td>
                                    <td colSpan={3}><VscFilePdf className='text-danger' /> PDF (Renunciada), <GoClock className='text-primary' /> Control de tiempos y notificaciones</td>
                                </tr>

                                <tr>
                                    <td rowSpan={1}>Expedicion</td>
                                    <td colSpan={4} >Liquidacion y Control de pagos</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ></td>
                                    <td colSpan={3}>Metadatos Proceso, <FaChartBar className='text-success' /> grafica de tiempos</td>
                                </tr>
                                <tr>
                                    <td rowSpan={1}>Desistimientos</td>
                                    <td colSpan={4} >Control y Seguimientos de los distintos desistimientos que pueden presentarse en un proceso (Radicacion Incompleta, No entrega Correciones, Falta de Pagos, Voluntario )</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td colSpan={3}><GoClock className='text-primary' /> Control de tiempos y notificaciones</td>
                                </tr>

                               

                                <tr>
                                    <td rowSpan={6}>Gestion y control Actuaciones Urbanisticas </td>
                                    <td>Asignacion de Profesional</td>
                                    <td colSpan={4}>Asignacion de procesos a los diferentes usuarios de la entidad (Abodago, Arquitecto, Ingeniero )</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ></td>
                                    <td ></td>
                                    <td colSpan={3}></td>
                                    <td rowSpan={6}><FaCheck className='text-success' /></td>
                                    <td rowSpan={6}><FaCheck className='text-success' /></td>
                                    <td rowSpan={6}><FaCheck className='text-success' /></td>
                                </tr>
                                <tr>
                                    <td>Carga Profesional</td>
                                    <td colSpan={4}>Analisis de la carga de cada profeional y sus procesos asignados</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ></td>
                                    <td ></td>
                                    <td colSpan={3}><FaChartBar className='text-success' /> Grafica de carga profesional</td>
                                </tr>
                                <tr>
                                    <td>Tabla de seguimiento Diario</td>
                                    <td colSpan={4}>Componente grafico de seguimiento diarios de cada actuacion en estado activo</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ></td>
                                    <td ></td>
                                    <td colSpan={3}><FaChartBar className='text-success' /> Tabla y Grafica de proyeccion diaria de la entidad</td>
                                </tr>
                                <tr>
                                    <td>Macro Tabla</td>
                                    <td colSpan={4}>Tabla resumen de todas las actuaciones</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ></td>
                                    <td ></td>
                                    <td colSpan={3}><FaChartBar className='text-success' /> Macro Tabla</td>
                                </tr>
                                <tr>
                                    <td>Graficas</td>
                                    <td colSpan={4}>Graficas informativas, analisis y de resumen de las actuaciones de la entidad</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ></td>
                                    <td ></td>
                                    <td colSpan={3}><FaChartBar className='text-success' /> Graficas de actuaciones</td>
                                </tr>
                                <tr>
                                    <td>Repoortes a Entidades</td>
                                    <td colSpan={4}>Generacion Automatica de documentos CVS para las entidades superiores (Cotraloria, Camacol Dane, Oficina de Planeacion, Ministerio de Vivienda)</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ></td>
                                    <td ></td>
                                    <td colSpan={3}><VscFilePdf className='text-danger' /> Documentos CVS a entidades</td>
                                </tr>

                                <tr>
                                    <td colSpan={2}>Publicaciones</td>
                                    <td colSpan={4}>Publicaciones de todos los documentos expedidos por la entidad</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td colSpan={3}></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                </tr>


                                <tr>
                                    <td colSpan={2}>Ventanilla Unica de Radicacion</td>
                                    <td colSpan={4}>Tabla de control de acceso de documentos a la entidad</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td colSpan={3}><VscFilePdf className='text-danger' /> PDF Ventanilla Unica</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                </tr>

                                <tr>
                                    <td colSpan={2}>Propiedad Horizontal</td>
                                    <td colSpan={4}>Control y seguimiento e las Propiedades Horizontales</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td colSpan={3}><VscFilePdf className='text-danger' /> PDF PH</td>
                                    <td ></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Norma Urbana</td>
                                    <td colSpan={4}>Control y seguimiento e las Normas Urbanas</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td colSpan={3}><VscFilePdf className='text-danger' /> PDF Norma Urbana</td>
                                    <td ></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                </tr>

                                <tr>
                                    <td rowSpan={2}>Control Software</td>
                                    <td>Roles y Permisos para usuarios</td>
                                    <td colSpan={4}>La posibilidad de crear varios roles con permisos y accesos y asignarlos a cada usuario</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td colSpan={3}></td>
                                    <td rowSpan={1}></td>
                                    <td rowSpan={1}><FaCheck className='text-success' /></td>
                                    <td rowSpan={1}><FaCheck className='text-success' /></td>
                                </tr>
                                <tr>
                                    <td>Documentacion API</td>
                                    <td colSpan={4}>Documentacion para integrar los servicios del software con paginas personales</td>
                                    <td ></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ></td>
                                    <td colSpan={3}><BsCodeSlash /> Gestion de APIS, generacion de API Keys</td>
                                    <td rowSpan={1}></td>
                                    <td rowSpan={1}></td>
                                    <td rowSpan={1}><FaCheck className='text-success' /></td>
                                </tr>

                                <tr>
                                    <td colSpan={2}>Archivo</td>
                                    <td colSpan={4}>Control virtual del archivo de la entidad</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td colSpan={3}></td>
                                    <td ></td>
                                    <td ></td>
                                    <td ><FaCheck className='text-success' /></td>
                                </tr>

                                <tr>
                                    <td colSpan={2}>PQRS</td>
                                    <td colSpan={4}>Gestion de procesos PQRS de la entidad, con integracion de las Actuaciones Urbanisticas</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td colSpan={3}></td>
                                    <td ></td>
                                    <td ></td>
                                    <td ><FaCheck className='text-success' /></td>
                                </tr>

                                <tr>
                                    <td rowSpan={4}>Herramientas</td>
                                    <td>Nomenclatura</td>
                                    <td colSpan={4}>Modulo para Nomenclaturas</td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td colSpan={3}></td>
                                    <td rowSpan={4} colSpan={3}>ADICIONAL</td>
                                </tr>
                                <tr>
                                    <td>Calculadora</td>
                                    <td colSpan={4}>Herramienta para el calculo de pagos de expensas de la entidad</td>
                                    <td ></td>
                                    <td ></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td colSpan={3}></td>
                                </tr>
                                <tr>
                                    <td>Diccionario</td>
                                    <td colSpan={4}>Registro general de todos los consecutivos y procesos generados en la entidad </td>
                                    <td ></td>
                                    <td ></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td colSpan={3}></td>
                                </tr>
                                <tr>
                                    <td>Certificaciones</td>
                                    <td colSpan={4}>Generación de certificaciones para los profesionales y las actuaciones </td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td ><FaCheck className='text-success' /></td>
                                    <td colSpan={3}><VscFilePdf className='text-danger' /> PDF certificacion profesional y de actuacion urbanistica, <BsCodeSlash /> Soporte API para implemntacion en paginas web</td>
                                </tr>

                                <tr>
                                    <td colSpan={2}>Perzonaliacion</td>
                                    <td colSpan={10}>Personalizacion de los Modulos de Informe Arquitectonico en cumplimiento con el POT municipal, personalizacion de la calculadora de expensas y radicacion de pagos en relacion a las entidades municipales, perzonalicacion de los sellos</td>
                                    <td colSpan={3}>ADICIONAL</td>
                                </tr>

                                <tr>
                                    <td colSpan={2}>Carga Masiva Inicial</td>
                                    <td colSpan={10}>Carga de datos ya existentes a la base de datos de la enidad, ecompasa todo el proceso, analisis, conversion y cargue de datos para un inicio forma fluida y rapida</td>
                                    <td colSpan={3} >ADICIONAL</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Grid>
        </DIV>
    );
}