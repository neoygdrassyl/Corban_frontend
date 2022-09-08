import React from 'react'
import { Button, FormGroup, Icon, InputGroup } from '@blueprintjs/core';
import { FaCheck, FaTimes, FaEdit } from 'react-icons/fa'
import { RiDeleteBinLine } from "react-icons/ri";
import { Col, Grid, Panel, PanelGroup, Row } from 'rsuite';
import SELECT from '../resources/customs/components/form.components/select.compontnt';
import { Link } from 'react-router-dom';

// ICONS
import TableIcon from '@rsuite/icons/Table';
import PageIcon from '@rsuite/icons/Page';
import DocPassIcon from '@rsuite/icons/DocPass';
import PeoplesIcon from '@rsuite/icons/Peoples';
import TagIcon from '@rsuite/icons/Tag';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { AiTwotoneStar } from 'react-icons/ai';
import { IoIosSwitch } from 'react-icons/io';
import MemberIcon from '@rsuite/icons/Member';

let _searchBar = (lang, title, items) => {
    let obj = {
        en: {
            title: 'SEARCH BAR',
            content: <>This button allows filtering the <strong>{title}</strong> in order to find one specific entry. To use the search bar, input into the text bar next to the button the value to look for and press the button or press the key Enter.<br />The search patterns can be <strong>{items.join(', ')}</strong>.</>,
            component: <div class="bp4-input-group .modifier">
                <span class="bp4-icon bp4-icon-search"></span>
                <input type="text" class="bp4-input" placeholder={'Search...'} />
                <button class="bp4-button bp4-minimal bp4-intent-primary bp4-icon-arrow-right"></button>
            </div>,
            focus: 'search',
        },
        es: {
            title: 'BARRA DE BUSQUEDA',
            content: <>Este botón permite filtrar las <strong>{title}</strong> para encontrar una entrada específica. Para usar la barra de búsqueda, ingrese en la barra de busqueda el texto a buscar y presione el botón de buscar o presione la tecla Enter.<br />Los patrones de búsqueda pueden ser <strong>{items.join(', ')}</strong>.</>,
            component: <div class="bp4-input-group .modifier">
                <span class="bp4-icon bp4-icon-search"></span>
                <input type="text" class="bp4-input" placeholder={'Buscar...'} />
                <button class="bp4-button bp4-minimal bp4-intent-primary bp4-icon-arrow-right"></button>
            </div>,
            focus: 'search',
        }
    }
    return obj[lang]
}

let _new = (lang, text) => {
    let newText = { en: 'NEW', es: 'NUEVO' }
    return {
        title: newText[lang],
        content: text,
        btn: newText[lang], btnColor: 'success', btnIcon: 'add',
        focus: 'new',
    }
}

export let translations = {
    // ******************** LAYOUT ************************ // 

    topBar: {
        en: {
            home: 'HOME',
            bedrock: 'DOVELA',
            lang: 'LANGUAGE',
            log: 'LOG IN',
            sign: 'SIGN IN',
            lout: 'LOG OUT',
            dash: 'DASHBOARD',
            theme: 'MODE',
            t_dark: 'Dark Mode',
            t_light: 'Light Mode',
            t_contrast: 'Hight Constrast Mode',
            bug_title: 'REPORT A BUG',
            bug_body: 'In order to ensure maximum quality for our products and services, it is important to follow a constant process of updates that correct all errors that arise. Use this form to report a bug.',
            FORM: [
                { label: 'Product', ph: 'Product', options: ['Dovela', 'Other'], values: ['dovela', 'other'] },
                { label: 'Information about the bug', ph: `Description of the error:\n\nWhat were you doing?\n\nWhat result did you expect?\n\nWhat actually happened?\n\nCan you reproduce the error? how?\n` }
            ],
            menu: [
                'Notificacions', 'My projects', 'My teams', 'Configuration', 'Help', 'Report bug'
            ],
        },
        es: {
            home: 'INICIO',
            bedrock: 'DOVELA',
            lang: 'IDIOMA',
            log: 'INICIAR SESIÓN',
            sign: 'REGISTRARSE',
            lout: 'CERRAR SESIÓN',
            dash: 'PANEL GENERAL',
            theme: 'TEMAS',
            t_dark: 'Tema Oscuro',
            t_light: 'Tema Claro',
            t_contrast: 'Alto Contraste',
            bug_title: 'REPORTAR UN ERROR',
            bug_body: 'Para poder asegurar un máximo de calidad para nuestros productos y servicios, es impórtate seguir un proceso constante de actualizaciones que corrijan todos los errores que se presenten. Utilice este formulario para reportar un error.',
            FORM: [
                { label: 'Producto', ph: 'Producto', options: ['Dovela', 'Otro'], values: ['dovela', 'other'] },
                { label: 'Información acerca del error', ph: `Descripción del error:\n\n¿Que estaba haciendo?\n\n¿Que resultado esperaba?\n\n¿Que paso en realidad?\n\n¿Puede reproducir el error? ¿como?\n` }
            ],
            menu: [
                'Notificaciones', 'Mis proyectos', 'Mis equipos', 'Configuración', 'Ayuda', 'Reportar error'
            ],
        }
    },
    footer: {
        en: {
            title: 'CORBAN SOFTWARE',
            contact: 'Contact',
            name_1: 'Luis Carlos Parra: luiskparra@gmail.com - (057) 318 2804259',
            name_2: 'Nestor Triana: ing.natriana@gmail.com - (057) 316 3431119',
            about: 'About the Software',
            about_text: 'This is a software designed for all the administrative and urbanistic processes of Colombia.',
            copyright: '© 2021 Corban Software. Developed by ',
        },
        es: {
            title: 'CORBAN SOFTWARE',
            contact: 'Contacto',
            name_1: 'Luis Carlos Parra: luiskparra@gmail.com - (057) 318 2804259',
            name_2: 'Nestor Triana: ing.natriana@gmail.com - (057) 316 3431119',
            about: 'Sobre el Software',
            about_text: 'Este es un software diseñado para la administración de procesos Urbanísticos de Colombia.',
            copyright: '© 2021 Corban Software. Desarrollado por ',
        }
    },

    // ******************** UTILITIES ************************ // 
    btnHelp: {
        en: {
            click: 'Click for more info...',
            close: 'CLOSE',
            about: 'ABOUT: ',
        },
        es: {
            click: 'Dar click para mas información...',
            close: 'CERRAR',
            about: 'ACERCA DE: ',
        }
    },
    btnDocList: {
        en: {
            click: 'Click for more info...',
            close: 'CLOSE',
            about: 'ABOUT: ',
            title: 'COPY DOCUMENT INTO FORM',
            whisper: 'Copy document',
            datatable: 'DOCUMENTS LIST',
            columns: ['CODE', 'DOCUMENT', 'ACTION'],
        },
        es: {
            click: 'Dar click para mas información...',
            close: 'CERRAR',
            about: 'ACERCA DE: ',
            title: 'COPIAR DOCUMENTO A FORMULARIO',
            whisper: 'Copiar documento',
            datatable: 'LISTA DE DOCUMENTOS',
            columns: ['CÓDIGO', 'DOCUMENTO', 'ACCIÓN'],
        }
    },
    btnPdf: {
        en: {
            btn: 'GENERATE PDF',
            btn2: 'GENERATE CSV',
        },
        es: {
            btn: 'GENERAR PDF',
            btn2: 'GENERAR CSV',
        }
    },
    btns: {
        en: {
            save: 'SAVE',
            new: 'NEW',
            edit: 'EDIT',
            delete: 'DELETE',
            add: 'ADD',
            remove: 'REMOVE',
            removelast: 'REMOVE LAST',
            details: 'DETAILS',
            view: 'VIEW',
            cancel: 'CANCEL',
            confirm: 'CONFIRM',
            close: 'CLOSE',
            nopermit: 'THIS USER HAS NO PERMITS',
            send: 'SEND',
            build: 'BUILD',
            calculate: 'CALCULATE',
            download: 'DOWLOAD',
            tut_1: 'How to open a CSV file in Excel',
            tut_2: 'How to open a CSV file in LibreOffice',
            load: 'LOADING...',
            realod: 'RELOAD',
        },
        es: {
            save: 'GUARDAR',
            new: 'NUEVO',
            edit: 'EDITAR',
            delete: 'ELIMINAR',
            add: 'AÑADIR',
            remove: 'REMOVER',
            removelast: 'REMOVER ULTIMO',
            details: 'DETALLES',
            view: 'VER',
            cancel: 'CANCELAR',
            confirm: 'CONFIRMAR',
            close: 'CERRAR',
            nopermit: 'ESTE USUARIO NO TIENE PERMISOS',
            send: 'ENVIAR',
            build: 'COMPILAR',
            calculate: 'CALCULAR',
            download: 'DESCARGAR',
            tut_1: 'Como abrir un archivo CSV en Excel',
            tut_2: 'Como abrir un archivo CSV en LibreOffice',
            load: 'CARGANDO...',
            realod: 'RECARGAR',
        }

    },
    viewer: {
        en: {
            view: 'VIEW DOCUMENT',
            notfound_tite: 'DOCUMENT NOT FOUND',
            notfound_body: 'The requested document can not be found, check the details of the entry or contact with the administrator.',
            scale: 'Document scale',
            search_page: 'Search page',
            search_info: 'Total pages',
            search_go: 'Go to page',
            download: 'DOWNLOAD',

        },
        es: {
            view: 'VER DOCUMENTO',
            notfound_tite: 'DOCUMENTO NO ENCONTRADO',
            notfound_body: 'EL documento solicitado no fue encontrado, revise los detalles de esta entrada o contacte con el administrador.',
            scale: 'Tamaño documento',
            search_page: 'Buscar pagina',
            search_info: 'Paginas totales',
            search_go: 'Ir a pagina',
            download: 'DESCARGAR',
        }
    },
    nonIdealState: {
        en: {
            more_info: 'MORE INFORMATION',
            error_title: 'THERE WAS A MISTAKE',
            error_body: 'An error occurred while loading the information, wait a few minutes before you try again.',
            noload_title: 'UNABLE TO LOAD',
            noload_body: 'The requested information could not be loaded, wait a few minutes before you try again.',
            datatable_title: 'NO DATA FOUND',
            datatable_body: 'The request was successful and no information was found for this query.',
            permit_title: 'UNAUTHORIZED ACCESS',
            permit_body: "The role of this user has no permits for this action, contact the team leader for more information about the user's role",
            nots_title: 'NO NOTIFICATIONS FOUND',
            nots_body: "No unseen notifications had been found, you are up-to-date.",
            template_title: 'NOT A VALID TEMPLATE',
            template_body: "The parser could not build the template properly, check your template model model for more information.",
            no_templates_title: 'NO TEMPLATES FOUND',
            no_templates_body: "No templates found for this query, check your templates for more information.",
            no_config_title: 'NO PROPER CONFIGURATION',
            no_config_body: "The configuration for the variables of the team are not properly set. ",
            find_title: 'NO ITEM SELECTED',
            find_body: "Search the item to display information about it.",
        },
        es: {
            more_info: 'MAS INFORMAIÓN',
            error_title: 'HUBO UN ERROR',
            error_body: 'Ocurrió un error al cargar la información, espera unos minutos antes de volver a intentarlo.',
            noload_title: 'NO SE PUEDE CARGAR',
            noload_body: 'No se pudo cargar la información solicitada, espere unos minutos antes de volver a intentarlo.',
            datatable_title: 'NO SE ENCONTRARON DATOS',
            datatable_body: 'La solicitud fue exitosa y no se encontró información para esta consulta.',
            permit_title: 'ACCESO NO AUTORIZADO',
            permit_body: "El rol de este usuario no tiene permisos para esta acción, comuníquese con el líder del equipo para obtener más información sobre el rol del usuario",
            nots_title: 'NO SE ENCONTRARON NOTIFICACIONES',
            nots_body: "No se han encontrado notificaciones no vistas, estás actualizado.",
            template_title: 'PLANTILLA NO VALIDA',
            template_body: "El sistema no fue capas de compilar la plantilla, revise el modelo de plantilla para mas información.",
            no_templates_title: 'NO SE ENCONTRARON PLANTILLAS',
            no_templates_body: "Ninguna plantilla fue encontrada para esta solicitud, revise sus plantillas para mas informacion.",
            no_config_title: 'CONFIGURACIÓN DE VARIABLES NO VÁLIDAS',
            no_config_body: "La confguración de las variables de etorno no estan debidamente declaradas.",
            find_title: 'NO HAY ITEM SELECCIONADO',
            find_body: "Busque informacion acerca del item para mostrar información de este.",
        }

    },
    fun: {
        en: {
            cubs: {
                rec: 'Acknowledgement report',
                inc: 'Letter incomplete',
                ldf: 'Letter legal and complete',
                lob: 'Letter observations',
                pqr: 'PQRS peticion',
                cvc: 'Adjoining Neighbor Summon',
                via: 'Viability act',
                dut: 'Urban duties',
                res: 'Citation Notification Resolution'
            },
            types: {
                'i': 'Type I',
                'ii': 'Type II',
                'iii': 'Type III',
                'iv': 'Type IV',
                'oa': 'Other Process',
            },
            rules: {
                sign: ['Publicity used', 'Publicity NOT use'],
                eng: ['Estructural report used', 'Estructural repor NOT use'],
            },
        },
        es: {
            cubs: {
                rec: 'Reporte de reconocimiento',
                inc: 'Carta Incompleto',
                ldf: 'Carta LyDF',
                lob: 'Carta Acta Observaciones',
                pqr: 'Peticion PQRS',
                cvc: 'Citacion Vecino Colindante',
                via: 'Acta de Viabilidad',
                dut: 'Deberes Urbanisticos',
                res: 'Citacion Notificación Resolución'
            },
            types: {
                'i': 'Categoria I',
                'ii': 'Categoria II',
                'iii': 'Categoria III',
                'iv': 'Categoria IV',
                'oa': 'Otra Actuación',
            },
            rules: {
                sign: ['Publicidad usada', 'Publicidad NO usada'],
                eng: ['Reporte estructural usado', 'Reporte estructural NO usado'],
            },
        }
    },
    fun3: {
        en: {
            tableTitle: 'Adjacent Neighbors',
            tableHd: ['PROPERTY ADDRESS', 'CORRESPONDENCE ADDRESS', 'DATA ORIGIN', 'WAS PARTY DECLARED?', 'CITATION STATUS', 'OUT CONSECUTIVE', 'CONFIRMATION GUIDE', 'DATE RECEIVED', 'METHODS OF PUBLICATION', 'PUBLICATION SUPPORTS', 'DOCUMENT', 'ACTION'],
            dataOrigin: ['Filled out by the team', 'Filled out by the applicant'],
            citationSattus: ['PENDING', 'POSITIVE CITATION', 'NEGATIVE CITATION'],
            alertMethod: ['Newspaper at', 'Radio at', 'Web page at', 'Physical at'],
            supportMethod: ['Periodic support', 'Radio support', 'Web page support', 'Physical support'],
            support: 'Support document',
        },
        es: {
            tableTitle: 'Vecinos Colindantes',
            tableHd: ['DIRECCION DEL PREDIO', 'DIRECCION DE CORRESPONDENCIA', 'ORIGEN DATO', '¿SE DECLARÓ PARTE?', 'ESTADO CITACIÓN', 'CONSECUTIVO DE SALIDA', 'GUIA DE CONFIRMACION', 'FECHA RECIBIDO', 'METODOS DE PUBLICACION', 'SOPORTES DE PUBLICACION', 'DOCUMENTO', 'ACCIÓN',],
            dataOrigin: ['Diligenciado por el equipo', 'Diligenciado por el solicitante'],
            citationSattus: ['PENDIENTE', 'CITACIÓN POSITIVA', 'CITACIÓN NEGATIVA'],
            alertMethod: ['Periódico el', 'Radio el', 'Pagina web el', 'Físico el'],
            supportMethod: ['Soporte periódico', 'Soporte radio', 'Soporte pagina web', 'Soporte físico'],
            support: 'Documento de soporte',
        },
    },
    fun4: {
        en: {
            tableTitle: 'Boundaries, Dimensions and Areas',
            tableHd: ['BOUNDARIES', 'LENGTH (in m)', 'BORDERS WITH'],
            coord: {
                'NORTE': 'NORTH',
                'SUR': 'SOUTH',
                'ORIENTE': 'EAST',
                'OCCIDENTE': 'WEST',
            }
        },
        es: {
            tableTitle: 'Linderos, Dimensiones y Áreas',
            tableHd: ['LINDEROS', 'LONGITUD (en m)', 'COLINDA CON: '],
            coord: {
                'NORTE': 'NORTE',
                'SUR': 'SUR',
                'ORIENTE': 'ORIENTE',
                'OCCIDENTE': 'OCCIDENTE',
            }
        },
    },
    fun51: {
        en: {
            tableTitle: 'License Holders',
            tableHd: ['PERSON TYPE', 'NAME', 'ID', 'LEGAL REP. ', 'REP ID', 'CONTACT NUMBER', 'MAIL', 'PERSON ROLE', 'DOCUMENTS'],
            docs: ['ID',  'Certificate of Existence and Legal Representation']
        },
        es: {
            tableTitle: 'Titular(es) de la Licencia',
            tableHd: ['TIPO PERSONA', 'NOMBRE', 'DOCUMENTO IDENTIFICACIÓN', 'NOMBRE REP. LEGAL', 'DOCUMENTO IDENTIFICACIÓN REP.', 'NÚMERO DE CONTACTO', 'CORREO', 'TIPO TITULAR', 'DOCUMENTOS'],
            docs: ['Documento Identificador', 'Certificado de Existencia y Representación Legal']
        },
    },
    fun52: {
        en: {
            tableTitle: 'Responsible Professionals',
            tableHd: ['NAME', 'ID', 'CONTACT NUMBER', 'EMAIL', 'ROLE', 'REGISTRATION', 'REGISTRATION DATE', 'EXPERIENCE', 'SANCTIONED?', 'SUPERVISION', 'DOCUMENTS'],
            sanction: ['NO', 'YES'],
            year: ' Year(s)',
            docs: ['ID',  'Registration', 'Registration validity', 'CV & certifications', 'Postgraduate studies'],
            docsColor: ['primary',  'success', 'warning', 'danger', 'info'],
            supervition: { 'NO': 'NO', 'SI': 'YES', 'N/A': 'N/A'},
            role: {
                'URBANIZADOR/PARCELADOR' : 'DEVELOPER/PARCELLER',
                'URBANIZADOR O CONSTRUCTOR RESPONSABLE':'RESPONSIBLE DEVELOPER OR BUILDER',
                'DIRECTOR DE LA CONSTRUCCION':'CONSTRUCTION MANAGER',
                'ARQUITECTO PROYECTISTA':'DESIGNER ARCHITECT',
                'INGENIERO CIVIL DISEÑADOR ESTRUCTURAL':'CIVIL ENGINEER STRUCTURAL DESIGNER',
                'DISEÑADOR DE ELEMENTOS NO ESTRUCTURALES':'DESIGNER OF NON-STRUCTURAL ELEMENTS',
                'INGENIERO CIVIL GEOTECNISTA':'GEOTECHNICAL CIVIL ENGINEER',
                'INGENIERO TOPOGRAFO Y/O TOPÓGRAFO':'TOPOGRAPHER AND/OR TOPOGRAPHER ENGINEER',
                'REVISOR INDEPENDIENTE DE LOS DISEÑOS ESTRUCTURALES':'INDEPENDENT REVIEWER OF STRUCTURAL DESIGNS',
                'OTROS PROFESIONALES ESPECIALISTAS':'OTHER SPECIALIST PROFESSIONALS',
            },
        },
        es: {
            tableTitle: 'Profesionales Responsables',
            tableHd: ['NOMBRE', 'DOCUMENTO IDENTIFICACIÓN', 'NÚMERO DE CONTACTO', 'CORREO', 'ROL', 'MATRÍCULA', 'EXP. MATRÍCULA', 'EXPERIENCIA', '¿SANCIONADO?', 'SUPERVISIÓN', 'DOCUMENTOS'],
            sanction: ['NO', 'SI'],
            year: ' Año(s)',
            docs: ['Documnto identificación',  'Matrícula', 'Vigencia matricular', 'Hoja de vida y certificados', 'Estudios postgrados'],
            docsColor: ['primary',  'success', 'warning', 'danger', 'info'],
            supervition: { 'NO': 'NO', 'SI': 'SI', 'N/A': 'N/A'},
            role: {
                'URBANIZADOR/PARCELADOR' : 'URBANIZADOR/PARCELADOR',
                'URBANIZADOR O CONSTRUCTOR RESPONSABLE':'URBANIZADOR O CONSTRUCTOR RESPONSABLE',
                'DIRECTOR DE LA CONSTRUCCION':'DIRECTOR DE LA CONSTRUCCION',
                'ARQUITECTO PROYECTISTA':'ARQUITECTO PROYECTISTA',
                'INGENIERO CIVIL DISEÑADOR ESTRUCTURAL':'INGENIERO CIVIL DISEÑADOR ESTRUCTURAL',
                'DISEÑADOR DE ELEMENTOS NO ESTRUCTURALES':'DISEÑADOR DE ELEMENTOS NO ESTRUCTURALES',
                'INGENIERO CIVIL GEOTECNISTA':'INGENIERO CIVIL GEOTECNISTA',
                'INGENIERO TOPOGRAFO Y/O TOPÓGRAFO':'INGENIERO TOPOGRAFO Y/O TOPÓGRAFO',
                'REVISOR INDEPENDIENTE DE LOS DISEÑOS ESTRUCTURALES':'REVISOR INDEPENDIENTE DE LOS DISEÑOS ESTRUCTURALES',
                'OTROS PROFESIONALES ESPECIALISTAS':'OTROS PROFESIONALES ESPECIALISTAS',
            },
        },
    },
    progress_icons: {
        en: {
            pay: {
                start: 'Fixed expenses not filled',
                warning: 'Missing data for fixed expenses',
                success: 'Fixed expenses filled',
                fail: 'Fixed expenses not filled',
            },
            check: {
                start: 'Incomplete',
                warning: 'Incomplete',
                success: 'Legally submitted',
                fail: 'Incomplete',
            },
            neigh: {
                start: 'No neighbor informed',
                warning: 'Missing neighbors for informing',
                success: 'All neighbors informed',
                fail: 'No neighbor informed',
            },
            sign: {
                start: 'Sign not filled',
                warning: 'Sign not filled',
                success: 'Sign filled',
                fail: 'Sign not filled',
            },
            report: {
                start: 'Report not sent',
                warning: 'Report sent but no response',
                success: 'Report sent and answered',
                fail: 'Report not sent',
            },
            law: {
                start: 'Not assigned and not reviewed',
                warning: 'Assigned and not reviewed',
                success: 'Assigned and reviewed',
                fail: 'Reviewed as not viable',
            },
            arc: {
                start: 'Not assigned and not reviewed',
                warning: 'Assigned and not reviewed',
                success: 'Assigned and reviewed',
                fail: 'Reviewed as not viable',
            },
            eng: {
                start: 'Not assigned and not reviewed',
                warning: 'Assigned and not reviewed',
                success: 'Assigned and reviewed',
                fail: 'Reviewed as not viable',
            },
            ph: {
                start: 'Not assigned and not reviewed',
                warning: 'Assigned and not reviewed',
                success: 'Assigned and reviewed',
                fail: 'Reviewed as not viable',
            },
            acta: {
                start: 'Not reviewed',
                warning: 'First review not viable, waiting for second review',
                success: 'Reviewed as viable',
                fail: 'Both reviews not viable',
            },
            via: {
                start: 'Not declared as viable',
                warning: 'Not declared as viable',
                success: 'Declared as viable',
                fail: 'Not declared as viable',
            },
            pay2: {
                start: 'Variable expenses not filled',
                warning: 'Missing data for fixed expenses',
                success: 'Variable expenses filled',
                fail: 'Variable expenses not filled',
            },
            lic: {
                start: 'License not issued',
                warning: 'License not issued',
                success: 'License issued',
                fail: 'License not issued',
            },
        },
        es: {
            pay: {
                start: 'Pago fijo no radicado',
                warning: 'Falta información sobre el pago fijo',
                success: 'Pago fijo radicado',
                fail: 'Pago fijo no radicado',
            },
            check: {
                start: 'Incompleto',
                warning: 'Incompleto',
                success: 'Legal y debida forma',
                fail: 'Incompleto',
            },
            neigh: {
                start: 'Sin notificar vecinos',
                warning: 'Faltan vecinos por notificar',
                success: 'Todos los vecinos notificados',
                fail: 'Sin notificar vecinos',
            },
            sign: {
                start: 'Valla sin radicar',
                warning: 'Valla sin radicar',
                success: 'Valla radicada',
                fail: 'Valla sin radicar',
            },
            report: {
                start: 'Reporte sin enviar',
                warning: 'Reporte enviado y sin respuesta de la entidad',
                success: 'Reporte enviado y con respuesta de la entidad',
                fail: 'Reporte sin enviar',
            },
            law: {
                start: 'Sin asignar y sin revisar',
                warning: 'Asignado y sin revisar',
                success: 'Asignado y revisado viable',
                fail: 'Revisado como no viable',
            },
            arc: {
                start: 'Sin asignar y sin revisar',
                warning: 'Asignado y sin revisar',
                success: 'Asignado y revisado viable',
                fail: 'Revisado como no viable',
            },
            eng: {
                start: 'Sin asignar y sin revisar',
                warning: 'Asignado y sin revisar',
                success: 'Asignado y revisado viable',
                fail: 'Revisado como no viable',
            },
            ph: {
                start: 'Sin asignar y sin revisar',
                warning: 'Asignado y sin revisar',
                success: 'Asignado y revisado viable',
                fail: 'Revisado como no viable',
            },
            acta: {
                start: 'Sin revisar',
                warning: 'Primera revision como no viable, esperando segunda revision',
                success: 'Revisado como viable',
                fail: 'Las dos revisiones no son viables',
            },
            via: {
                start: 'Declarado como no viable',
                warning: 'Declarado como no viable',
                success: 'Declarado como viable',
                fail: 'Declarado como no viable',
            },
            pay2: {
                start: 'Pago variable no radicado',
                warning: 'Falta información sobre el pago variable',
                success: 'Pago variable radicado',
                fail: 'Pago variable no radicado',
            },
            lic: {
                start: 'Licencia sin expedir',
                warning: 'Licencia sin expedir',
                success: 'Licencia expedida',
                fail: 'Licencia sin expedir',
            },
        },
    },
    // ******************** COMPONENTS ************************ // 
    tableComponent: {
        en: {
            loading: 'LOADING...',
            nodata: 'NO DATA ENTRIES',
            publish: 'ITEMS PER PAGE',
            of: 'OF',
            search: 'Search...',
        },
        es: {
            loading: 'CARGANDO INFORMACIÓN...',
            nodata: 'NO HAY INFORMACIÓN',
            publish: 'PUBLICACIONES POR PAGINA',
            of: 'DE',
            search: 'Buscar...',
        }
    },
    gridComponent: {
        en: {
            loading: 'LOADING...',
            nodata: 'NO DATA ENTRIES',
            publish: 'ITEMS PER PAGE',
            of: 'OF',
            search: 'Search...',
            pagination: {
                more: 'More',
                prev: 'Prev',
                next: 'Next',
                first: 'First',
                last: 'Last',
                limit: '{0} / page',
                total: 'Total items: {0}',
                skip: 'Go to {0}',
            }
        },
        es: {
            loading: 'CARGANDO INFORMACIÓN...',
            nodata: 'NO HAY INFORMACIÓN',
            publish: 'PUBLICACIONES POR PAGINA',
            of: 'DE',
            search: 'Buscar...',
            pagination: {
                more: 'Mas',
                prev: 'Anterior',
                next: 'Siguiente',
                first: 'Primero',
                last: 'Ultimo',
                limit: '{0} / pagina',
                total: 'Entradas Totales: {0}',
                skip: 'Ir a {0}',
            }
        }
    },
    modalComponent: {
        en: {
            close: 'CLOSE',
        },
        es: {
            close: 'CERRAR',
        }
    },
    textareaComponent: {
        en: {
            avaiable: 'available characters',
        },
        es: {
            avaiable: 'caracteres disponibles',
        }
    },
    formComponent: {
        en: {
            req: 'REQUIRED',
            uploader: 'Click or drag files to this area to upload',
            limitFile: 'Max files',
            limiSize: 'Max size',
            fileName: 'File name',
            passwordSee: 'See password',
            passwordHide: 'Hide password',
            _validate_min: (name, min) => `The field ${name} must have a minimun of ${min} letters.`,
            _validate_reg: (name) => `The field ${name} does not fufill the solicited requiermentes.`,
            _validate_pss: (name) => `The field ${name} does not fufill the miniun security requirements.`,
            _validate_rps: (name) => `The field ${name} must conincide.`,
        },
        es: {
            req: 'REQUERIDO',
            uploader: 'Click o arrastre archivos a esta area para subirlos',
            limitFile: 'Archivos máximos',
            limiSize: 'Tamaño máximos',
            fileName: 'Nombre archivo',
            passwordSee: 'Ver Contraseña',
            passwordHide: 'Ocultar Contraseña',
            _validate_min: (name, min) => `El campo ${name} debe tener un mínimo de ${min} letras.`,
            _validate_reg: (name) => `El campo ${name} no cumple con los requisitos solicitados.`,
            _validate_pss: (name) => `El campo ${name} no cumple con los requisitos mínimos de seguridad.`,
            _validate_rps: (name) => `El campo ${name} debe coincidir.`,
        }
    },
    patchNotes: {
        en: {
            seall: 'See All',
            seallt: 'See all Patch Notes',
            changes: 'CHANGES',
            bugfix: 'BUG FIXES',
        },
        es: {
            seall: 'Ver todos',
            seallt: 'Ver todas las Notas de parches',
            changes: 'CAMBIOS',
            bugfix: 'CORRECIONES DE ERRORES',
        }
    },
    bodyTemplates: {
        en: {
            mult: 'Multiplier',
            round: 'Rounded',
            r1000: 'To 1000 units',
            value: 'Value',
            form_calc: ['Tax', 'Tax specification', 'Area', 'Percentage %']
        },
        es: {
            mult: 'Multipliador',
            round: 'Redondeo',
            r1000: 'A 1000 unidades',
            value: 'Valor',
            form_calc: ['Impuesto', 'Especificación de impuesto', 'Área', 'Porcentaje %']
        }
    },
    tutorial: {
        en: {
            tutorial: 'TUTORIAL',
            csv_note: 'NOTE',
            csv_note_b: 'DOVELA has a preference on how it parses its CSV files, for this case unmark the Comma checkbox and mark the Semicolon checkbox, the character set used is UTF-8',
            csv_body: <>
                <p>Comma Separated Values (CSV) is a text file format that you can use to exchange data from a database or a spreadsheet between applications. Each line in a Text CSV file represents a record in the database, or a row in a spreadsheet. Each field in a database record or cell in a spreadsheet row is usually separated by a comma. However, you can use other characters to delimit a field, such as a tabulator character.</p>
                <p>If the field or cell contains a comma, the field or cell must be enclosed by single quotes (') or double quotes (").</p>
            </>,

            csv_lo_title: 'To Open a Text CSV File in Calc',
            csv_lo_steps: [
                'Choose File - Open.',
                'Locate the CSV file that you want to open. If the file has a *.csv extension, select the file. If the CSV file has another extension, select the file, and then select "Text CSV" in the Filter box',
                'Click Open. The Text Import dialog opens.',
                'Specify the options to divide the text in the file into columns. You can preview the layout of the imported data at the bottom of the Text Import dialog. Right-click a column in the preview to set the format or to hide the column.',
                'Click OK.',
            ],
            csv_lo_link: 'https://help.libreoffice.org/latest/en-US/text/scalc/guide/csv_files.html',
            csv_lo_link_b: 'For more information check the official',
            csv_lo_link_l: 'LibreOffice documentation',

            csv_e_title: 'To Open a Text CSV File in Excel',
            csv_e_steps: [
                'Go to the Data tab and click on “Get External Data”',
                'Then click on “Data from a text file”.',
                <>
                    <p>An explorer window will appear to search and select the CSV file that we want to open. After choosing it, click on “open”.</p>
                    <p>Immediately afterwards, a wizard will pop up to guide us through the process of importing and converting the data to our Excel workbook.</p>
                </>,
                'Most likely our CSV file is comma delimited so we select the “Delimited” option. If the file includes headers or titles for the fields, do not forget to select the option “My data has headers”. Once this is done, click next.',
                'We come to the most important step, where we choose the delimiter, which is usually a comma. When selecting it we will see that it shows us an example of how our data will be selected and finally we can see the columns as they should be.',
                'We arrive at the step where we can indicate what type each column is. Select each column in the preview and indicate the type of data it is. If we leave it in “General” it will take it as a numerical value. We can also select the date format, where DMY stands for day, month and year. Then click on "Finish".',
                'Once this is done, a final window will appear indicating whether we want the data to be imported into the current document or if we want it in a new document. If you have already opened a new document before starting this, the behavior is exactly the same.'


            ],
            csv_e_link: 'https://support.microsoft.com/en-us/office/import-or-export-text-txt-or-csv-files-5250ac4c-663c-47ce-937b-339e391393ba#ID0EBBN=Newer_versions',
            csv_e_link_b: 'For more information check the official',
            csv_e_link_l: 'Microsot Office documentation',
        },
        es: {
            tutorial: 'TUTORIAL',
            csv_note: 'NOTA',
            csv_note_b: 'DOVELA tiene una preferencia en como formatea sus archivos de CSV, para este caso unmarque la casilla de Coma, y marque la casilla de Punto y coma, el conjunto de caracteres a elejir será UTF-8.',
            csv_body: <>
                <p>Los archivos con valores separados por comas (CSV) son archivos de texto que puede utilizar para intercambiar datos entre aplicaciones desde una base de datos u hoja de cálculo. Cada línea de un archivo de texto CSV representa un registro de la base de datos o una fila de la hoja de cálculo. Los campos de un registro de base de datos o las celdas de una fila de hoja de cálculo suelen estar separados por comas. Sin embargo, pueden utilizarse otros caracteres para delimitar los campos, como el tabulador.</p>
                <p>Si el contenido de un campo o una celda incluye una coma, dicho contenido debe estar encerrado entre comillas simples (') o dobles (").</p>
            </>,

            csv_lo_title: 'Como abrir un archivo CSV en Calc',
            csv_lo_steps: [
                'Elija Archivo ▸ Abrir, Busque el archivo CSV que desee abrir. Si el archivo tiene la extensión *.csv, selecciónelo.Si el archivo CSV tiene otra extensión, selecciónelo y, a continuación, elija «Texto CSV» en el cuadro Filtro',
                'Busque el archivo CSV que desee abrir. Si el archivo tiene la extensión *.csv, selecciónelo. Si el archivo CSV tiene otra extensión, selecciónelo y, a continuación, elija «Texto CSV» en el cuadro Filtro',
                'Pulse en Abrir.Se abre el diálogo Importar texto',
                'Especifique las opciones para dividir el texto del archivo en columnas. En la parte inferior del diálogo Importar texto obtendrá una previsualización de la disposición de los datos importados. Con el botón secundario del ratón, pulse en una columna de la previsualización para ajustar su formato u ocultarla.',
                'Pulse en Aceptar.',
            ],
            csv_lo_link: 'https://help.libreoffice.org/latest/es/text/scalc/guide/csv_files.html',
            csv_lo_link_b: 'Para mayor información puede visitar la',
            csv_lo_link_l: 'documentación de LibreOffice',

            csv_e_title: 'Como abrir un archivo CSV en Excel',
            csv_e_steps: [
                'Ve a la pestaña Datos y haz clic sobre “Obtener datos externos”.',
                'Después haz clic sobre “Datos de un archivo de texto”.',
                <>
                    <p>aldrá una ventana de explorador para buscar y seleccionar el archivo CSV que queremos abrir. Tras elegirlo haz clic en “abrir”.</p>
                    <p>Inmediatamente después nos saltará un asistente para guiarnos en el proceso de importación y conversión de los datos a nuestro libro de Excel.</p>
                </>,
                'Lo más probable es que nuestro archivo CSV esté delimitado por comas por lo que seleccionamos la opción “Delimitados”. Si el archivo incluye encabezados o títulos para los campos no olvides seleccionar la opción “Mis datos tienen encabezados”. Hecho esto haz clic en siguiente.',
                'Llegamos al paso más importante, donde elegimos el delimitador, que generalmente suele ser coma. Al seleccionarlo veremos que nos muestra un ejemplo de cómo se van a seleccionar nuestros datos y por fin podemos ver las columnas como deberían ser.',
                'Llegamos al paso donde podemos indicar de qué tipo es cada columna. Selecciona cada columna en la vista previa e indica el tipo de dato que es. Si lo dejamos en “General” lo tomará como un valor numérico. Podemos seleccionar el formato de la fecha también, dónde DMA abrevian día, mes y año. Pulsamos sobre “Finalizar” ',
                'Hecho esto nos saldrá una última ventana indicando si queremos que los datos se importen al documento actual o si los queremos en un documento nuevo. Si has abierto ya un documento nuevo antes de iniciar esto, el comportamiento es exactamente el mismo. '


            ],
            csv_e_link: 'https://support.microsoft.com/es-es/office/importar-o-exportar-archivos-de-texto-txt-o-csv-5250ac4c-663c-47ce-937b-339e391393ba#ID0EBBN=Newer_versions',
            csv_e_link_b: 'FPara mayor información puede visitar la',
            csv_e_link_l: 'documentacion oficial de Microsot Office.',
        }
    },
    dataListAPI: {
        en: {
            loading: 'Loading',
            found: 'Found',
            entry: 'entries',
            label: 'TYPE IN THE SEARCH BAR TO FIND DATA AUTOMATICALLY',
            error: 'Error while loading',
            nodata: 'No data found',
            search: 'Search',
        },
        es: {
            loading: 'Cargando',
            found: 'Encontrados',
            entry: 'elementos',
            label: 'ESCRIBA EN LA BARRA DE BÚSQUEDA PARA ENCONTRAR DATOS AUTOMÁTICAMENTE',
            error: 'Error al cargar',
            nodata: 'No se econtraron datos',
            search: 'Buscar',
        }
    },
    // ******************** PAGES ************************ // 
    login: {
        en: {
            title: 'LOG IN',
            email: 'LOGIN EMAIL',
            emaili: 'Email used to log in into the page',
            password: 'PASSWORD',
            passwordi: 'Password for the account',
            forgot: 'I FORGOT MY PASSWORD',
            reason: 'receive a recovery password email'
        },
        es: {
            title: 'INGRESO',
            email: 'CORREO ELECTRÓNICO DE INGRESO',
            emaili: 'Correo electrónico para iniciar sesión en la página',
            password: 'CONTRASEÑA',
            passwordi: 'Contraseña de la cuenta',
            forgot: 'OLVIDÉ MI CONTRASEÑA',
            reason: 'recibir un email de recuperación de contraseña'
        }
    },
    activate: {
        en: {
            title: 'ACIVATING ACCOUNT...',
            body: 'WAIT A MOMENT PLEASE',
        },
        es: {
            title: 'ACTIVANDO CUENTA...',
            body: 'ESPERE UN MOMENT POR FAVOR',
        }
    },
    invite: {
        en: {
            title: 'ACCEPTING INVITATION...',
            body: 'WAIT A MOMENT PLEASE',
        },
        es: {
            title: 'ACEPTANDO INVITACIÓN...',
            body: 'ESPERE UN MOMENT POR FAVOR',
        }
    },
    signin: {
        en: {
            title: 'SIGN UP',
            email: 'EMAIL',
            emaili: 'Email used to log in into the page',
            password: 'PASSWORD',
            passwordi: 'Password for the account',
            password2: 'REPEAT PASSWORD',
            password2i: 'Repeat the password to verify it',
            passwordReq: ['Miminum of 8 letter.', 'Minimun of 1 capital letter.', 'Minimun of 1 digit', 'Minimun 1 special character: !#$%&?'],
            type: 'USER TYPE',
            typei: 'Type of user',
            typeOptions: ['NATURAL', 'LEGAL'],
            name1: 'FIRST NAME',
            name1i: 'First name',
            name2: 'SECOND NAME',
            name2i: 'Second name',
            surname1: 'FIRST SURNAME',
            surname1i: 'First surname',
            surname2: 'SECOND SURNAME',
            surname2i: 'Second surname',
            surnameE: 'ENTITY NAME',
            surnameEi: 'Entity name',
            surnameR: 'AGENT NAME',
            surnameRi: 'Agent name',
            idNumber: 'ID NUMBER OR NIT',
            idNumberi: 'ID number or NIT',
            number: 'CONTACT NUMBER',
            numberi: 'Contact number',
            conditions: 'I accept all terms and conditions of data treatments based on the Habeas Data Statutory Law (Law 1581 of 2012)'
        },
        es: {
            title: 'REGISTRARSE',
            email: 'CORREO ELECTRÓNICO',
            emaili: 'Correo electrónico para iniciar sesión en la página',
            password: 'CONTRASEÑA',
            passwordi: 'Contraseña de la cuenta',
            password2: 'REPETIR CONTRASEÑA',
            password2i: 'Repite la contraseña para verificarla',
            passwordReq: ['Mínimo de 8 letras.', 'Mínimo de 1 letra mayúscula.', 'Mínimo de 1 dígito', 'Mínimo 1 carácter especial: !#$%&?'],
            type: 'TIPO DE USUARIO',
            typei: 'Tipo de usuario',
            typeOptions: ['NATURAL', 'JURIDICA'],
            name1: 'NOMBRE',
            name1i: 'Nombre',
            name2: 'SEGUNDO NOMBRE',
            name2i: 'Segundo nombre',
            surname1: 'PRIMER APELLIDO',
            surname1i: 'Primer apellido',
            surname2: 'SEGUNDO APELLIDO',
            surname2i: 'Segundo apellido',
            surnameE: 'NOMBRE DE LA ENTIDAD',
            surnameEi: 'Nombre de la entidad',
            surnameR: 'NOMBRE DEL AGENTE',
            surnameRi: 'Nombre del agente',
            idNumber: 'NÚMERO DE DOCUMENTO O NIT',
            idNumberi: 'Número de documento o NIT',
            number: 'NÚMERO DE CONTACTO',
            numberi: 'Número de contacto',
            conditions: 'Acepto todos los términos y condiciones del tratamiento de datos con base en la Ley Estatutaria de Habeas Data (Ley 1581 de 2012)'
        }
    },
    reset: {
        en: {
            passReset: 'PASSWORD RESET',
            passwordReq: ['Miminum of 8 letter.', 'Minimun of 1 capital letter.', 'Minimun of 1 digit', 'Minimun 1 special character: !#$%&?'],
            newPassword: 'NEW PASSWORD',
            repPassword: 'CONFIRM PASSWORD',
            newPasswordLb: 'New password',
            repPasswordLb: 'Confirm password',
            btn: 'RESET PASSWORD',
        },
        es: {
            passReset: 'RESTAURACIÓN DE CONTRASEÑA',
            passwordReq: ['Mínimo de 8 letras.', 'Mínimo de 1 letra mayúscula.', 'Mínimo de 1 dígito', 'Mínimo 1 carácter especial: !#$%&?'],
            newPassword: 'NUEVA CONTRASEÑA',
            repPassword: 'CONFIRMAR CONTRASEÑA',
            newPasswordLb: 'Nueva contraseña',
            repPasswordLb: 'Confirmar contraseña',
            btn: 'RESTAURAR',
        }
    },
    submit: {
        en: {
            HELP_PAGE: [
                {
                    title: 'FILING BOOTH',
                    content: 'This module manages the entry of documents of the organization through the Filing Booth.',
                    focus: 'title',
                },
                {
                    title: 'NEW ENTRY',
                    content: 'This button opens a new subwindow with a filling form which allows the user to create a new entry in the system.',
                    btn: 'NEW ENTRY', btnColor: 'success', btnIcon: 'add',
                    focus: 'new',

                },
                {
                    title: 'SEARCH BAR',
                    content: <>This button allows to filter the VIEW LIST in order to find one specific entry. To use the search bar input into the text bar next to the button the value to look for and press the button or press the key Enter.<br />The search patterns can be Public ID, Associated ID, Type, Date, Owner name, Provider person or Provider person ID</>,
                    component: <div class="bp4-input-group .modifier">
                        <span class="bp4-icon bp4-icon-search"></span>
                        <input type="text" class="bp4-input" placeholder={'Search...'} />
                        <button class="bp4-button bp4-minimal bp4-intent-primary bp4-icon-arrow-right"></button>
                    </div>,
                    focus: 'search',
                },
                {
                    title: 'VIEW LIST',
                    content: 'This list shows all the entries of the module and some basic information about each Item. Each columns contains specific data from the ITem, as follow:',
                    focus: 'list', list: [
                        { subtitle: 'PUBLIC ID', text: 'Rperesent the unique ID of each Item, this number cannot be repeated and its nomenclature is as follows: VRXX-YYYY, where XX is the year it was created and YYYY is the serial number. ' },
                        { subtitle: 'ASSOCIATED ID', text: 'The ID of the associated process to the Item, this value is not mandatory.' },
                        { subtitle: 'TYPE', text: 'The type or a short description of the associated process, this value is not mandaory.' },
                        { subtitle: 'FILLING DATE', text: 'The date in which the item was related, show in the format ISO 8601.' },
                        { subtitle: 'DOCUMENT', text: <>Each items can be associated with a digital anex for control. This columns shows to the user if that document is associated or not, presented as follow: For items that already had an associated document, it shows the symbol <FaCheck className='text-success' /> and for items that do not have an associated document it shows the symbol <FaTimes className='text-danger' />.</> },
                        { subtitle: 'ACTION', text: <>This are special buttons that allows the user to do certain actions onto the Item, presented as follow: <FaEdit className='text-primary' /> Details and  <RiDeleteBinLine className='text-danger' /> Delete.</> },
                    ]
                },
                {
                    title: 'ACTION: DETAILS',
                    content: 'This button opens a new window where the user can update the data and properties of the Item.',
                    focus: 'detail', icon: <FaEdit className='text-primary' size={'24px'} />
                },
                {
                    title: 'ACTION: DELETE',
                    content: <>This button is considered a <label style={{ color: 'red' }}>DANGEROUS ACTION</label>. This buttons allows the user to delete this Item and all its children and dependencies, it does not however, affects the associated processes to the Item.</>,
                    focus: 'delete', icon: <RiDeleteBinLine className='text-danger' size={'24px'} />
                },
            ],
            title: 'FILLING BOOTH MODULE',
            table_title: 'FILING BOOTH LISTING',
            table_columns: ['PUBLIC ID', 'ASSOCIATED ID', 'TYPE', 'FILLING DATE', 'DOCUMENT', 'ACTION'],
            pop_texts: ['DETAILS', 'DELETE'],
            btn_help_texts: ['FILLING BOOTH MODULE', 'This module manages and controls all the flow of documents comming into the organization, it provides them with a unique ID and basic informative information.'],
            new: 'NEW ENTRY',
            edit: 'UPDATE ENTRY',
            new_btn_help_texts: ['FILLING BOOTH', 'This windows allows the creation of a new entry in the Filling Booth module.'],
            categories: ['FILLING BOOTH FORM', 'DOCUMENT LIST', 'DIGITAL ANEX AND RECIPE'],
            NEW_HELP_PAGE: [
                {
                    title: 'FILLING BOOTH : NEW ENTRY',
                    content: 'This window allows you to create a new entry in this module, all the documents that you enter into the entity must be registered in this module, before specifying the documents that will enter, you must create the entry that will contain the initial information of the event.',
                    focus: 'title',
                },
            ],
            EDIT_HELP_PAGE: [
                {
                    title: 'FILLING BOOTH : UPDATE ENTRY',
                    content: 'This window allows you to update the current selected entry, In adition to that, this update window allows to specify the documents that had been given to the organization and to create a Fillig certificate.',
                    focus: 'edit',
                },
            ],
            FORM_INFO_BTN: ['FILLING BOOTH: FORM', 'This form contains all the information needed for an entry to be created'],
            FORM_INFO: [
                {
                    title: 'Public ID',
                    content: <>This is a <label className='fw-b'>REQUIRED</label> value by the system. This is the unique identifier number of this event, it cannot be repeated. Its nomenclature is VRXX-YYYY, where XX is the year issued and YYYY is the consecutive serial. This value can be entered manually or automatically by the system by pressing the button in the text box, the system will generate the next unused consecutive code.</>,
                    lefticon: <Icon icon={'selection'} />,
                    focus: 'id_public',
                },
                {
                    title: 'Associated ID',
                    content: 'When this entry is related to a current process of the entity, that process must be declared in this text box, the value to be entered will be the consecutive identification code of that process. This value is not required. This value can be repeated. It is possible to "Verify" the related process, typing the consecutive code and clicking on the button next to the text box, the system will search for a process that matches the given number and will automatically complete other parts of the form.',
                    lefticon: <Icon icon={'selection'} />,
                    focus: 'id_related',
                },
                {
                    title: 'Pays fixed expenditures',
                    content: <> This option is considered a <label style={{ color: 'red' }}>DANGEROUS ACTION</label>. By enabling this button, the system is informed that this input will start a new Urban Development Action process, creating the new process in the Urban Development Licenses and Actions module. When this occurs, the previous field, "Request Nr." will become a < label className='fw-b text-danger'>REQUIRED FIELD</label> and must be a unique consecutive number. <label className='fw-b'>If the urban development already exists or if you do not want to create it, it is recommended not to activate this button.</label></>,
                    focus: 'cb_fun',
                },
                {
                    title: 'Payment ID',
                    content: 'In case the previous button "Pays fixed expenditures" is activated, this text box determines the consecutive payment of the process to create.',
                    lefticon: <Icon icon={'selection'} />,
                    focus: 'fun_pay',
                },
                {
                    title: 'Type',
                    content: 'Short description of the associated process or its modality in case of being an urban development.',
                    lefticon: <Icon icon={'diagram-tree'} />,
                    focus: 'type',
                },
                {
                    title: 'Owner',
                    content: 'In the event that the process related to this entry is an urban development, this field will identify the owners of the property. Otherwise, this field will identify the main person related to the process.',
                    lefticon: <Icon icon={'inherited-group'} />,
                    focus: 'owner',
                },
                {
                    title: 'State',
                    content: 'This field is completed automatically, when a process is verified, the system will enter this information indicating the current status of the process.',
                    lefticon: <Icon icon={'property'} />,
                    focus: 'state',
                },
                {
                    title: 'Filling Type',
                    content: 'The nature of this input can be defined in the following ways:',
                    lefticon: <Icon icon={'property'} />,
                    focus: 'type_vr', list: [
                        { subtitle: 'RADICACIÓN SOLICITUD', text: 'Applies when there is no related process and the documents provided are intended to initiate a new process.' },
                        { subtitle: 'ASESORÍA TÉCNICA', text: 'Applies when documents are entered into an existing process that requires corrections, but that does NOT have the purpose of giving the final correction of the project.' },
                        { subtitle: 'CORRECCIONES SOLICITUD', text: 'Applies when documents are entered into an existing process that requires corrections, in order to give the final correction of the project.' },
                        { subtitle: 'OTRO', text: 'Applies to all cases outside of the above.' },
                    ],
                },
                {
                    title: 'Recieving Worker',
                    content: 'This field is completed automatically by the system, typing the name of the professional connected in the current session.',
                    lefticon: <Icon icon={'person'} />,
                    focus: 'prof',
                },
                {
                    title: 'Date and hour of entry',
                    content: 'The time at which this entry was made.',
                    lefticon: <Icon icon={'calendar'} />,
                    focus: 'time',
                },
                {
                    title: 'Provider Person',
                    content: 'The name of the person delivering the documents.',
                    lefticon: <Icon icon={'person'} />,
                    focus: 'giver',
                },
                {
                    title: 'Person ID',
                    content: 'The identification document number of the person delivering the documents.',
                    lefticon: <Icon icon={'id-number'} />,
                    focus: 'id_giver',
                },
                {
                    title: 'Details',
                    content: 'Considerations to take into account that are not contemplated in the rest of the form.',
                    focus: 'details',
                },
            ],
            FORM_MANAGE: [
                { label: 'Public ID', placeholder: 'Filling number', rightBtnLabel: 'Generate next entry ID', },
                { label: 'Associated ID', placeholder: 'Process number', rightBtnLabel: ['Verifiy assoiated ID', 'Generate next ID'], },
                { label: 'Pays fixed expenditures', label1: 'Create new process', label2: 'This option will create a new urban development' },
                { label: 'Payment ID', placeholder: 'Payment number' },
                { label: 'Type', placeholder: 'Type, modality or short description of the associaed process' },
                { label: 'Owners', placeholder: 'Owners or related persons to the associated process' },
                { label: 'State', placeholder: 'Current state of the associated process' },
                { label: 'Filling Type', placeholder: 'Select...', labelOptions: ['FILL PROCESS', 'TECHNICAL CONSULTING', 'FILL CORRECTIONS', 'OTHER'] },
                { label: 'Recieving Worker', placeholder: 'Worker that recieves the documents' },
                { label: 'Date and hour of entry', placeholder: 'Time stamp of the event' },
                { label: 'Provider Person', placeholder: 'Person that provides the documents' },
                { label: 'Person ID', placeholder: 'Person ID number' },
                { label: 'Details', placeholder: 'Details not contemplated in the previous form items' },
                { label: ['ID found', 'ID not found', 'Errors were find while searching for the ID', 'A associated ID must be typed'] },
            ],
            FORM_DOCUMENT_TABLE: ['DOCUMENT', 'TIPOLOGY', 'PAGES', 'PROVIDED', 'LIST TITLE: ', 'NEW LIST: ', 'List name', 'Document name',],
            FORM_DOCUMENT_BTNS: ['UPDATE LIST', 'SAVE LIST', 'DELETE LIST', 'REMOVE LAST', 'NEW ITEM', 'NEW LIST', 'ADD LIST'],
            DOCUMENT_LIST_POP: ['DOCUMENT LISTS', 'All documents filled to the organization in physical form. May contain multiple lists related to the process.'],
            DOCUMENT_LIST_INFO: [
                {
                    title: 'LIST OF DOCUMENTS',
                    content: <>This section contains all document lists related to this single window entry. Initially, no visible list will be found, to add a list it must be entered in the <label className='fw-b'>NEW LIST</label> section. Once a list has been added, a table will appear listing the documents with their characteristics; Name, number of pages and its type code.</>,
                    focus: 'doc_list',
                },
                {
                    title: 'Document Characteristics',
                    content: 'The documents associated with each single window entry have 3 characteristics of their own, these are:',
                    focus: 'doc_data', list: [
                        { subtitle: 'DOCUMENT NAME', text: 'A short description or the name of the document. In the case of documents made up of several sheets, all its sheets will be understood as part of the same document.' },
                        { subtitle: 'TYPE', text: 'A unique code and identifier for each document. The system uses this code to identify the documents entered in each process. Not all documents entered may have a typology code.' },
                        { subtitle: 'FOLIOS', text: 'The number of sheets of which the document is made up.' },
                    ],
                },
                {
                    title: 'NEW LIST',
                    content: 'This section allows the creation of new lists of documents and associate them to the process automatically.',
                    component: <PanelGroup accordion bordered className='py-0 mx-1 border-success'>
                        <Panel header={<h6><Icon icon={'add'} intent={'success'} size="18" /> {'NEW LIST'}</h6>}></Panel>
                    </PanelGroup>,
                    focus: 'new_list',
                },
                {
                    title: <label className='text-success'>HOW TO ADD A NEW LIST?</label>,
                    content: <>
                        <p>To add a list of documents click on the <label className='fw-b'>NEW LIST</label> button, a new section will appear, this section is a table with a list of documents. This list is initially the list of <lalbel>DOCUMENTS COMMON TO EVERY REQUEST</lalbel>.</p>
                        <p>
                            <div class="bp4-input-group">
                                <span class={"bp4-icon bp4-icon-add-to-artifact"}></span>
                                <select className={'bp4-input'}>
                                    <option >{'DOCUMENTOS COMUNES A TODA SOLICITUD'}</option>
                                    <option >{'DOCUMENTOS LICENCIA DE URBANIZACION'}</option>
                                    <option >{'DOCUMENTOS LICENCIA DE PARCELACION'}</option>
                                    <option >{'DOCUMENTOS ADICIONALES LICENCIA DE SUBDIVICION'}</option>
                                    <option >{'DOCUMENTOS ADICIONALES DE RECONOCIMIENTO DE EDIFICACIONES'}</option>
                                    <option >{'DOCUMENTOS ADICIONALES LICENCIA DE CONSTRUCCION'}</option>
                                    <option >{'DOCUMENTOS INERVENCION Y OCUPACION ESPACIO PUBLICO'}</option>
                                    <option >{'DOCUMENTOS ADICIONALES OTRAS ACTUACIONES'}</option>
                                    <option >{'DOCUMENTOS EXPENSAS / IMPUESTOS'}</option>
                                    <option >{'NUEVA LISTA'}</option>
                                </select>
                                <span class={"bp4-icon bp4-icon-chevron-down"}></span>
                            </div>
                        </p>
                        <p>To change this list, use the selector and choose the list you want to add. As the selected list is changed, the table below will also change reflecting the change in lists.</p>
                        <p>Once the list has been selected, the table must be filled. To do this, in the <label className='fw-b'>CONTRIBUTION</label> column, select the documents that were delivered to the entity and enter the number of pages of the document.</p>
                        <p>When all the data is duly entered, the next step is to add the list by clicking on the button <Button icon={'add'} intent={'success'} text={'ADD LIST'} /> .</p>
                        <p>If a list does NOT contain all the documents that need to be entered, <label className='fw-b'>it is possible to add several lists.</label> The lists must be added separately, each containing the different required documents.</p>
                        <p className='fw-b'><Icon icon={'chevron-right'} /> CUSTOMIZABLE LISTS</p>
                        <p>In case no list has the required documents, the <label className='fw-b'>NEW LIST</label> option should be used in the list selector. </p>
                        <p>When a NEW LIST is created, the list items must be added one by one, in addition, this list must be given a proper name in the text box <InputGroup placeholder={'List name'} leftIcon={"highlight"} /></p>
                        <p>To add a new Item, click on the button <Button icon={'add'} intent={'success'} text={'NEW ITEM'} />, this will create a new row in the table, In this row, you must specify the properties of the document, its name, its type and the number of pages. To add yet another item, just click the button again. </p>
                        <p className='fw-b'><Icon icon={'chevron-right'} /> SEARCH NAME AND TYPE OF DOCUMENTS</p>
                        <p>When you don't have the name or type code of a document to type, you can click on the <Button icon={'duplicate'} intent={'primary'} /> Copy button document. This button will open a new window with the <label className='fw-b'>LIST OF DOCUMENTS</label> table. Here you must search for the document of interest and click on the button <Button icon={'duplicate'} intent={'primary'} /> Copy document again. The system will copy the name and type of the list creation table.</p>
                        <p>Once all the documents of interest have been added, you must click on the button <Button icon={'add'} intent={'success'} text={'ADD LIST'} /> To add this list .</p>
                    </>,
                    focus: 'new_list_tuto',
                },
                {
                    title: <label className='text-primary'>TABLE: LIST OF DOCUMENTS</label>,
                    content: <>
                        <p>When at least one list of documents has been created, this table will appear indicating the current list of documents present in the entry.</p>
                        <Grid className='my-1' fluid>
                            <Row className='border bg-cold txt-c fw-b py-1' style={{ width: '100%' }}>
                                <Col xl={18} lg={16} md={16} sm={12} xs={8}><label>DOCUMENT</label></Col>
                                <Col xl={3} lg={4} md={4} sm={6} xs={8}><label>TYPOLOGY</label></Col>
                                <Col xl={3} lg={4} md={4} sm={6} xs={8}><label>FOLIOS</label></Col>
                            </Row>
                            <Row className='border bg-cold txt-c fw-b py-1' style={{ width: '100%' }}>
                                <Col xl={24} lg={24} md={24} sm={24} xs={24}><label>LIST TITLE: <label className='text-muted'>LIST NAME</label> </label></Col>
                            </Row>
                            <Row className='border txt -c py-1' style={{ width: '100%' }}>
                                <Col xl={18} lg={16} md={16} sm={12} xs={8}><label className=''>DOCUMENT NAME</label></Col>
                                <Col xl={3} lg={4} md={4} sm={6} xs={8}><label className=''>#</label></Col>
                                <Col xl={3} lg={4} md={4} sm={6} xs={8}><label className=''>#</label></Col>
                            </Row>
                        </Grid>
                        <p>These lists can continue to be modified after their creation, new items can be added, removed and the list can be deleted altogether.</p>
                    </>,
                    list: [
                        { text: <>To alter an already generated list, click on the button <Button icon={'annotation'} intent={'primary'} /> UPDATE LIST, the selected list will change its appearance in order to change the data that are necessary.</> },
                        { text: <>To add an item to the list, click on the button <Button icon={'add'} intent={'primary'} text={'NEW ITEM'} /></> },
                        { text: <>To remove an item from the list, click the button <Button icon={'remove'} intent={'secondary'} text={'REMOVE LAST'} /></> },
                        { text: <>To delete the entire list, click the button <Button icon={'trash'} intent={'danger'} text={'DELETE LIST'} />. This is considered a <label className='text-danger fw-b'>DANGEROUS ACTION</label></> },
                        { text: <>Once you have made all the required changes, save the information by clicking the button <Button icon={'floppy-disk'} intent={'success'} text={'SAVE LIST'} /></> },
                    ],
                    focus: 'edit_list_tuto',
                },
            ],
            title_pdf: 'CERTIFICATIONS',
            FORM_PDF: ['Upload digital document', 'File code', 'Number of pages', 'Number of pages of the document'],
            generate_pdf: 'Generate certificacion',
            INFO_CERT_TITLE: 'CERTIFICATIONS',
            INFO_CERT_BODY: 'The certifications are a document in PDF format that reflects the content of the entry. It can be generated and later saved in the system if necessary.',
            INFO_CERT_HELP: [
                {
                    title: 'Certifications',
                    content: <>The certification is a proof of entry documents. Once the entry is saved, the PDF format is generated, printed and signed and then digitized again with the signature as proof. As a final step it is saved in the system.</>,
                    focus: 'doc_cert',
                },
                {
                    title: 'Generate Certification',
                    content: <>Generates and downloads a document in PDF format with the content of the post.</>,
                    focus: 'doc_gen',
                },
                {
                    title: 'Upload digitized file',
                    content: <><p>Upload a document from the computer to the system to be stored in the cloud.</p>
                        <p>Once the document is online, use the button <Button icon={'document-open'} intent={'primary'} /> or <Button icon={'media'} intent={'primary'} /> to see more details of the document.</p>
                        <p>In order to update the document or delete it Use the button <Button icon={'trash'} intent={'danger'} /> to delete the scanned document and upload the new document. This is considered a <label className='text-danger'>DANGEROUS ACTION</label>.</p></>,
                    lefticon: <Icon icon={'paperclip'} />,
                    focus: 'doc_up',
                },
                {
                    title: 'Filing code',
                    content: <>The identifier code of the post.</>,
                    lefticon: <Icon icon={'selection'} />,
                    focus: 'doc_rad',
                },
                {
                    title: 'Number of pages',
                    content: <>Number of pages of the generated document.</>,
                    lefticon: <Icon icon={'document'} />,
                    focus: 'doc_pages',
                },
            ],
        },
        es: {
            HELP_PAGE: [
                {
                    title: 'VENTANILLA ÚNICA DE RADICACIÓN',
                    content: 'Este modulo gestiona la entrada de documentos a la organizacion a travez de la ventanilla de radicacion única.',
                    focus: 'title',
                },
                {
                    title: 'NUEVA ENTRADA',
                    content: 'Este botón habré una ventana nueva con un formulario para la creación de un nuevo item.',
                    btn: 'NUEVA ENTRADA', btnColor: 'success', btnIcon: 'add',
                    focus: 'new',

                },
                {
                    title: 'BARRA DE BÚSQUEDA',
                    content: <>Este botón permite filtrar el listado general para buscar entradas que coincidan con el valor deseado. Para buscar un entradas, escriba el valor a buscar en la barra de texto ubicada al del botón y después presione el botón o la tecla Enter.<br /> Los parametros de busqueda pueden ser: Nr. Radicacion, Nr. Solicitud, Tipo, Fecha, Propietarios, Persona que entrega o Documento de persona que entrega.</>,
                    component: <div class="bp4-input-group .modifier">
                        <span class="bp4-icon bp4-icon-search"></span>
                        <input type="text" class="bp4-input" placeholder={'Buscar...'} />
                        <button class="bp4-button bp4-minimal bp4-intent-primary bp4-icon-arrow-right"></button>
                    </div>,
                    focus: 'search',
                },
                {
                    title: 'LISTADO GENERAL',
                    content: 'Esta listado contiene todas los entradas de este modulo y muestra parte de la información general de cada item. Cada columna muestras datos del item, definidos asi:',
                    focus: 'list', list: [
                        { subtitle: 'Nr RADICACIÓN', text: 'Representa el consecutivo del item, este numero debe ser único e irrepetible para cada uno, su nomenclatura es VRXX-YYYY, donde XX es el año expedido y YYYY es el consecutivo serial.' },
                        { subtitle: 'RADICADO ASOCIADO', text: 'El radicado del proceso que acompaña el item, no es necesario que cada item tenga un RADICADO ASOCIADO.' },
                        { subtitle: 'TIPO', text: 'El tipo o descripción corta del proceso asociado al item. No es un dato obligatorio.' },
                        { subtitle: 'FECHA RADICACIÓN', text: 'La fecha y hora en la que el item fue generado. Dado en el formato ISO 8601.' },
                        { subtitle: 'DOCUMENTO', text: <>Cada item de radicación puede tener asociado un documento digitalizado, esta columna señala si ya se ha anexado un documento digital o no, representado con <FaCheck className='text-success' /> para entradas que ya tienen un anexo y <FaTimes className='text-danger' /> para entradas que no tienen un anexo.</> },
                        { subtitle: 'ACCIÓN', text: <>Son botones con acciones especiales que alteran las propiedades de cada Item, estos son <FaEdit className='text-primary' /> Detalles y  <RiDeleteBinLine className='text-danger' /> Eliminar.</> },
                    ]
                },
                {
                    title: 'ACCIÓN: DETALLES',
                    content: 'Este botón abre una nueva ventana donde es posible actualizar valores y propiedades del Item.',
                    focus: 'detail', icon: <FaEdit className='text-primary' size={'24px'} />
                },
                {
                    title: 'ACCIÓN: ELIMINAR',
                    content: <>Este botón es considerado una <label style={{ color: 'red' }}>ACCIÓN PELIGROSA</label>. Este botón permite eliminar el item y todas sus dependencias. No altera de ninguna forma los Procesos asociados al Item.</>,
                    focus: 'delete', icon: <RiDeleteBinLine className='text-danger' size={'24px'} />
                },
            ],
            title: 'MODULO DE GESTIÓN DE VENTANILLA ÚNICA DE RADICACIÓN',
            table_title: 'LISTADO DE ENTRADAS EN LA VENTANILLA ÚNICA DE RADICACIÓN',
            table_columns: ['Nr RADICACIÓN', 'RADICADO ASOCIADO', 'TIPO', 'FECHA RADICACIÓN', 'DOCUMENTO', 'ACCIÓN'],
            pop_texts: ['DETALLES', 'ELIMINAR'],
            btn_help_texts: ['MODULO DE GESTIÓN DE VENTANILLA ÚNICA DE RADICACIÓN', 'Este modulo gestiona la entrada de documentos a la organización a través de la ventanilla de radicación única.'],
            new: 'NUEVA ENTRADA',
            edit: 'ACTUALIZAR ENTRADA',
            new_btn_help_texts: ['MODULO DE GESTIÓN DE VENTANILLA ÚNICA DE RADICACIÓN: NUEVA ENTRADA', 'Esta ventana permite crear nuevas entradas para este módulo, todo documento que ingrese a la entidad debe de ser registrado primero.'],
            categories: ['RADICACIÓN VENTANILLA ÚNICA', 'LISTA DE DOCUMENTOS', 'ANEXO DIGITAL Y CERTIFICACIONES DE ENTREGA'],
            NEW_HELP_PAGE: [
                {
                    title: 'MODULO DE GESTIÓN DE VENTANILLA ÚNICA DE RADICACIÓN: NUEVA ENTRADA',
                    content: 'Esta ventana permite crear una nueva entrada en este módulo, todos los documentos que ingreses a la entidad deben ser registrados en este módulo, antes de especificar los documento que ingresaran se debe crear la entrada que contendrá la información inicial del evento de ingreso de documentos.',
                    focus: 'title',
                },
            ],
            EDIT_HELP_PAGE: [
                {
                    title: 'MODULO DE GESTIÓN DE VENTANILLA ÚNICA DE RADICACIÓN: ACTUALIZAR ENTRADA',
                    content: 'Esta ventana permite actualizar los datos del registro realizado, tambien permite la creacion de la lista de documentos entregados a la entidad y la creacion de certificaciones de entrega.',
                    focus: 'edit',
                },
            ],
            FORM_INFO_BTN: ['MODULO DE GESTIÓN DE VENTANILLA ÚNICA DE RADICACIÓN: FORMULARIO', 'Este formulario contiene toda la inforacion necesaria para cada entrada de la ventanilla única.'],
            FORM_INFO: [
                {
                    title: 'Nr Radicación',
                    content: <>Este es un valor <label className='fw-b'>REQUERIDO</label> por el sistema. Este es el número identificador único de este evento, no se puede repetir. Su nomenclatura es VRXX-YYYY, donde XX es el año expedido y YYYY es el consecutivo serial. Este valor puede ser ingresado manualmente o de forma automática por el sistema presionando el botón de la caja de texto, el sistema generará el siguiente condigo consecutivo no usado.</>,
                    lefticon: <Icon icon={'selection'} />,
                    focus: 'id_public',
                },
                {
                    title: 'Nr Solicitud',
                    content: 'Cuando esta entrada esté relacionada con un proceso actual de la entidad, se debe declarar ese proceso en esta caja de texto, el valor a digitar será el código consecutivo identificador de ese proceso. Este valor no es requerido. Este valor puede repetirse. Es posible "Verificar" el proceso relacionado, digitando el consecutivo y dando click en el botón al lado de la caja de texto, el sistema buscará algún proceso que coincida con el número dado y completará automáticamente otras partes del formulario.',
                    lefticon: <Icon icon={'selection'} />,
                    focus: 'id_related',
                },
                {
                    title: 'Pago de expensas fijas',
                    content: <>Esta opción es considerado una <label style={{ color: 'red' }}>ACCIÓN PELIGROSA</label>. Habilitando este botón, se le informa al sistema que esta entrada iniciará un nuevo proceso de Actuación Urbanística, creando el nuevo proceso en el módulo de Licencias y Actuaciones Urbanísticas, cuando esto ocurre el campo anterior, "Nr. Solicitud" pasará a ser un <label className='fw-b text-danger'>CAMPO REQUERIDO</label> y debe ser un número consecutivo sin repetir. <label className='fw-b'>Si la actuación urbanística ya existe o si no se desea crearla, se recomienda no activar este botón.</label> </>,
                    focus: 'cb_fun',
                },
                {
                    title: 'Nr Pago',
                    content: 'En caso de que se active el botón anterior "Pago de expensas fijas", esta caja de texto determina el consecutivo de pago del proceso a crear.',
                    lefticon: <Icon icon={'selection'} />,
                    focus: 'fun_pay',
                },
                {
                    title: 'Tipo',
                    content: 'Descripción corta del proceso asociado o su modalidad en caso de ser una arcuación urbanística.',
                    lefticon: <Icon icon={'diagram-tree'} />,
                    focus: 'type',
                },
                {
                    title: 'Propietarios',
                    content: 'En caso de que el proceso relacionado con esta entrada sea una actuación urbanística, este campo identificará los propietarios del predio. En caso contrario, este campo identificará la persona principal relacionada con el proceso.',
                    lefticon: <Icon icon={'inherited-group'} />,
                    focus: 'owner',
                },
                {
                    title: 'Estado',
                    content: 'Este campo se completa de forma automática, cuando un proceso es verificado, el sistema digitará esta información indicando el estado actual de el proceso.',
                    lefticon: <Icon icon={'property'} />,
                    focus: 'state',
                },
                {
                    title: 'Tipo de radicación',
                    content: 'La naturaleza de esta entrada, puede definirse de las siguientes formas:',
                    lefticon: <Icon icon={'property'} />,
                    focus: 'type_vr', list: [
                        { subtitle: 'RADICACIÓN SOLICITUD', text: 'Aplica cuando no existe un proceso relacionado y los documentos aportados tienen como motivo iniciar un nuevo proceso.' },
                        { subtitle: 'ASESORÍA TÉCNICA', text: 'Aplica cuando se ingresan documentos a un proceso ya existente que requiere correcciones, pero que NO tiene como finalidad dar la corrección final del proyecto.' },
                        { subtitle: 'CORRECCIONES SOLICITUD', text: 'Aplica cuando se ingresan documentos a un proceso ya existente que requiere correcciones, con la finalidad de dar la corrección final del proyecto.' },
                        { subtitle: 'OTRO', text: 'Aplica para todos los casos fuera de los anteriores.' },
                    ],
                },
                {
                    title: 'Funcionario que recibe',
                    content: 'Este campo se completa de forma automática por el sistema, digitando el nombre del profesional conectado en la sesión actual.',
                    lefticon: <Icon icon={'person'} />,
                    focus: 'prof',
                },
                {
                    title: 'Fecha y hora de ingreso',
                    content: 'El momento en el cual se realizó esta entrada al sistema.',
                    lefticon: <Icon icon={'calendar'} />,
                    focus: 'time',
                },
                {
                    title: 'Persona que entrega',
                    content: 'El nombre de la persona que entrega los documentos.',
                    lefticon: <Icon icon={'person'} />,
                    focus: 'giver',
                },
                {
                    title: 'Documento persona',
                    content: 'El número de documento identificador de la persona que entrega los documentos.',
                    lefticon: <Icon icon={'id-number'} />,
                    focus: 'id_giver',
                },
                {
                    title: 'Observaciones y detalles',
                    content: 'Consideraciones a tomar en cuenta que no están contempladas en el resto del formulario.',
                    focus: 'details',
                },
            ],
            FORM_MANAGE: [
                { label: 'Nr Radicación', placeholder: 'Número de Radicación', rightBtnLabel: 'Generar siguiente consecutivo de entrada', },
                { label: 'Nr Solicitud', placeholder: 'Número de Solicitud', rightBtnLabel: ['Verificar solicitud', 'Generar Siguiente censecutivo de licencia'], },
                { label: 'Pago de expensas fijas', label1: 'Crear nueva solicitud', label2: 'Esta opción crerá una actuacion urbanistica' },
                { label: 'Nr Pago', placeholder: 'Consecutivo de Pago' },
                { label: 'Tipo', placeholder: 'Tipo, modalidad o descripción corta de la solicitud' },
                { label: 'Propietarios', placeholder: 'Propietarios o personas relacionadas con el proceso' },
                { label: 'Estado', placeholder: 'Estado actual del proceso asociado' },
                { label: 'Tipo de radicación', placeholder: 'Seleccionar...', labelOptions: ['RADICACIÓN SOLICITUD', 'ASESORÍA TÉCNICA', 'CORRECCIONES SOLICITUD', 'OTRO'] },
                { label: 'Funcionario que recibe', placeholder: 'Funcionario actual conectado' },
                { label: 'Fecha y hora de ingreso', placeholder: 'Momento del evento de radicación' },
                { label: 'Persona que entrega', placeholder: 'Nombre de persona que entrega documentos' },
                { label: 'Documento identificador persona', placeholder: 'Número de documento identificador' },
                { label: 'Observaciones y detalles', placeholder: 'Detalles no contenplados en el resto del formulario' },
                { label: ['Se encontró consecutivo', 'No se encontró consecutivo', 'Se encontraron errores en el Código a buscar', 'Debe especificar un consecutivo de Licencia'] },
            ],
            FORM_DOCUMENT_TABLE: ['DOCUMENTO', 'TIPOLOGÍA', 'FOLIOS', 'APORTO', 'TITULO LISTA: ', 'NUEVA LISTA: ', 'Nombre lista', 'Nombre documento',],
            FORM_DOCUMENT_BTNS: ['ACTUALIZAR LISTA', 'GUARDAR LISTA', 'ELIMINAR LISTA', 'REMOVER ULTIMO', 'NUEVO ITEM', 'NUEVA LISTA', 'AÑADIR LISTA'],
            DOCUMENT_LIST_POP: ['LISTA DE DOCUMENTOS', 'Los documentos entregados en forma fisica a la entidad, puede contenter multiples listas de documentos relacionados con la entrada.'],
            DOCUMENT_LIST_INFO: [
                {
                    title: 'LISTA DE DOCUMENTOS',
                    content: <>Esta sección contiene todas las listas de documentos relacionadas a esta entrada de ventanilla única. Inicialmente, no se encontrarán ninguna lista visible, para añadir una lista se debe ingresar en la sección de <label className='fw-b'>NUEVA LISTA</label>. Una vez se halla añadido una lista, aparecerán una tabla listando los documentos con sus características; Nombre, número de folios y su código de tipología.</>,
                    focus: 'doc_list',
                },
                {
                    title: 'Características de documento',
                    content: 'Los documentos asociados a cada entrada de ventanilla única poseen 3 características propias, estas son:',
                    focus: 'doc_data', list: [
                        { subtitle: 'NOMBRE DE DOCUMENTO', text: 'Una descripción corta o el nombre del documento. En el caso de documentos compuestos por varias hojas, todas sus hojas se comprenderán como parte del mismo documento.' },
                        { subtitle: 'TIPOLOGÍA', text: 'Un código único e identificador de cada documento. El sistema usa ese código para identificar los documentos ingresaos a cada proceso. No todos los documentos ingresados pueden tener un código de tipología.' },
                        { subtitle: 'FOLIOS', text: 'El número de hojas de las cuales el documento esta compuesto.' },
                    ],
                },
                {
                    title: 'NUEVA LISTA',
                    content: 'Esta sección permite la creación de nuevas listas de documentos y asociarlos al proceso de forma automática.',
                    component: <PanelGroup accordion bordered className='py-0 mx-1 border-success'>
                        <Panel header={<h6><Icon icon={'add'} intent={'success'} size="18" /> {'NUEVA LISTA'}</h6>}></Panel>
                    </PanelGroup>,
                    focus: 'new_list',
                },
                {
                    title: <label className='text-success'>¿COMO AÑADIR UNA NUEVA LISTA?</label>,
                    content: <>
                        <p>Para añadir una lista de documentos haga click en el botón de <label className='fw-b'>NUEVA LISTA</label>, una sección nueva aparecerá, esta sección es una tabla con una lista de documentos. Esta lista inicialmente es la lista de <lalbel>DOCUMENTOS COMUNES A TODA SOLICITUD</lalbel>.</p>
                        <p>
                            <div class="bp4-input-group">
                                <span class={"bp4-icon bp4-icon-add-to-artifact"}></span>
                                <select className={'bp4-input'}>
                                    <option >{'DOCUMENTOS COMUNES A TODA SOLICITUD'}</option>
                                    <option >{'DOCUMENTOS LICENCIA DE URBANIZACION'}</option>
                                    <option >{'DOCUMENTOS LICENCIA DE PARCELACION'}</option>
                                    <option >{'DOCUMENTOS ADICIONALES LICENCIA DE SUBDIVICION'}</option>
                                    <option >{'DOCUMENTOS ADICIONALES DE RECONOCIMIENTO DE EDIFICACIONES'}</option>
                                    <option >{'DOCUMENTOS ADICIONALES LICENCIA DE CONSTRUCCION'}</option>
                                    <option >{'DOCUMENTOS INERVENCION Y OCUPACION ESPACIO PUBLICO'}</option>
                                    <option >{'DOCUMENTOS ADICIONALES OTRAS ACTUACIONES'}</option>
                                    <option >{'DOCUMENTOS EXPENSAS / IMPUESTOS'}</option>
                                    <option >{'NUEVA LISTA'}</option>
                                </select>
                                <span class={"bp4-icon bp4-icon-chevron-down"}></span>
                            </div>
                        </p>
                        <p>Para cambiar esta lista, utilice el seleccionador y elija la lista que quiere añadir. A medida que se cambia la lista seleccionada, la tabla de abajo cambiará también reflejando el cambio de listas.</p>
                        <p>Una vez seleccionada la lista se debe proceder a llenar la tabla. Para ello, en la columna de <label className='fw-b'>APORTO</label> seleccione los documentos que SI fueron entregados a la entidad y digite el número de folios del documento.</p>
                        <p>Cuando todos los datos se halla digitado debidamente, el siguiente paso es añadir la lista haciendo click en el boton <Button icon={'add'} intent={'success'} text={'AÑADIR LISTA'} />.</p>
                        <p>Si una lista NO contiene todos los documentos que se necesitan ingresar, <label className='fw-b'>es posible añadir varias listas.</label> Se deben añadir las listas de forma separada, cada una conteniendo los diferentes documentos requeridos.</p>
                        <p className='fw-b'><Icon icon={'chevron-right'} /> LISTAS PERSONALIZABLES</p>
                        <p>En caso tal de que ninguna lista tenga los documentos requeridos, se debe usar la opción de <label className='fw-b'>NUEVA LISTA</label> en el seleccionador de listas. </p>
                        <p>Cuando se crea una NUEVA LISTA, se deben de añadir los items de la lista uno por uno, ademas se debe de darle un nombre propio a esta lista en la caja de texto  <InputGroup placeholder={'Nombre lista'} leftIcon={"highlight"} /></p>
                        <p>Para añadir un nuevo Item, haga click en el boton <Button icon={'add'} intent={'success'} text={'NUEVO ITEM'} />, esto creará una nueva fila en la tabla, en esta fila se deben de especificar las propiedades del documento, su nombre, su tipología y el número de folios. Para añadir otro ítem más, solo haga click en el botón nuevamente. </p>
                        <p className='fw-b'><Icon icon={'chevron-right'} /> BUSCAR NOMBRE Y TIPOLOGÍA DE DOCUMENTOS</p>
                        <p>Cuando no se tenga a la mano el nombre o el codigo de tipologia de un documento a digitar, se puede hacer click en el boton de <Button icon={'duplicate'} intent={'primary'} /> Copiar documento. Este botón abrirá una nueva ventana con la tabla de <label className='fw-b'>LISTA DE DOCUMENTOS</label>. Aquí se debe buscar el documento de interés y hacer click en el botón de <Button icon={'duplicate'} intent={'primary'} /> Copiar documento nuevamente. El sistema copiará el nombre y la tipología de la tabla de creación de lista.</p>
                        <p>Una vez añadidos todos los documento de interes, se debe hacer click en el boton de <Button icon={'add'} intent={'success'} text={'AÑADIR LISTA'} /> Para añadir está lista.</p>
                    </>,
                    focus: 'new_list_tuto',
                },
                {
                    title: <label className='text-primary'>TABLA: LISTADO DE DOCUMENTOS</label>,
                    content: <>
                        <p>Cuando al menos una lista de documentos haya sido creada, esta tabla aparecerá indicando el listado de documentos presentes actual en la entrada.</p>
                        <Grid className='my-1' fluid>
                            <Row className='border bg-cold txt-c fw-b  py-1' style={{ width: '100%' }}>
                                <Col xl={18} lg={16} md={16} sm={12} xs={8}><label>DOCUMENTO</label></Col>
                                <Col xl={3} lg={4} md={4} sm={6} xs={8}><label>TIPOLOGÍA</label></Col>
                                <Col xl={3} lg={4} md={4} sm={6} xs={8}><label>FOLIOS</label></Col>
                            </Row>
                            <Row className='border bg-cold txt-c fw-b  py-1' style={{ width: '100%' }}>
                                <Col xl={24} lg={24} md={24} sm={24} xs={24}><label>TITULO LISTA: <label className='text-muted'>NOMBRE LISTA</label></label></Col>
                            </Row>
                            <Row className='border txt-c py-1' style={{ width: '100%' }}>
                                <Col xl={18} lg={16} md={16} sm={12} xs={8}><label className=''>NOMBRE DOCUMENTO</label></Col>
                                <Col xl={3} lg={4} md={4} sm={6} xs={8}><label className=''>#</label></Col>
                                <Col xl={3} lg={4} md={4} sm={6} xs={8}><label className=''>#</label></Col>
                            </Row>
                        </Grid>
                        <p>Estas listas puede seguir siendo modificadas posterior a su creación, nuevos ítems pueden ser añadidos, removidos y la lista puede ser eliminada del todo.</p>
                    </>,
                    list: [
                        { text: <>Para alterar una lista ya generada, haga click en el botón <Button icon={'annotation'} intent={'primary'} /> ACTUALIZAR LISTA, la lista seleccionada cambiará su apariencia para poder cambiar los datos que sean necesarios.</> },
                        { text: <>Para añadir un ítem a la lista, haga click en el botón <Button icon={'add'} intent={'primary'} text={'NUEVO ITEM'} /></> },
                        { text: <>Para remover un ítem a la lista, haga click en el botón <Button icon={'remove'} intent={'secondary'} text={'REMOVER ULTIMO'} /></> },
                        { text: <>Para eliminar toda la lista, haga click en el botón <Button icon={'trash'} intent={'danger'} text={'ELIMINAR LISTA'} />. Esta es considerado una <label className='text-danger fw-b'>ACCIÓN PELIGROSA</label></> },
                        { text: <>Una vez echo todos los cambios requeridos, guarde la información haciendo click en el botón <Button icon={'floppy-disk'} intent={'success'} text={'GUARDAR LISTA'} /></> }
                    ],
                    focus: 'edit_list_tuto',
                },
            ],
            title_pdf: 'CERTIFICACIÓNES',
            FORM_PDF: ['Subir archivo digitalizado', 'Codido de radicación', 'Número de folios', 'Número de folios del documento'],
            generate_pdf: 'Generar certificación',
            INFO_CERT_TITLE: 'CERTIFICACIÓNES',
            INFO_CERT_BODY: 'Las certificaciones son un documento en formato PDF que refleja el contenido de la entrada. Puede ser generado y posteriormente guardado en el sistema en caso de ser necesario.',
            INFO_CERT_HELP: [
                {
                    title: 'Certificaciones',
                    content: <>La certificación es un documento comprobante de la entrada, que permite guardar en físico el evento de la ventanilla única. Una vez la entrada este hecha, se procede a generar el formato PDF, se imprime y se firma para después ser digitalizada nuevamente con la firma como comprobante. Como paso final se guarda en el sistema.</>,
                    focus: 'doc_cert',
                },
                {
                    title: 'Generar Certificación',
                    content: <>Genera y descarga un documento en formato PDF con el contenido de la entrada.</>,
                    focus: 'doc_gen',
                },
                {
                    title: 'Subir archivo digitalizado',
                    content: <><p>Sube un documento desde el computador al sistema para ser almacenado en la nube.</p>
                        <p>Una vez el documento este en linea, utilize el boton <Button icon={'document-open'} intent={'primary'} /> o <Button icon={'media'} intent={'primary'} /> para ver más detalles del documento.</p>
                        <p>Para poder actualizar el documento o eliminarlo Utilize el boton <Button icon={'trash'} intent={'danger'} /> para eliminar el documento digitalizado y suba el nuevo documento. Esta es considerada una <label className='text-danger'>ACCIÓN PELIGROSA</label>.</p></>,
                    lefticon: <Icon icon={'paperclip'} />,
                    focus: 'doc_up',
                },
                {
                    title: 'Codido de radicación',
                    content: <>El código identificador de la entrada.</>,
                    lefticon: <Icon icon={'selection'} />,
                    focus: 'doc_rad',
                },
                {
                    title: 'Número de folios',
                    content: <>Número de folios del documento generado.</>,
                    lefticon: <Icon icon={'document'} />,
                    focus: 'doc_pages',
                },
            ],
        }
    },
    roles: {
        en: {
            title: 'WORK TEAM ROLES',
            tableHd: 'ROLES LIST',
            tableCl: ['NAME', 'DESCRIPTION', 'ACTION'],
            newtitle: 'CREATE NEW ROLE',
            danger: 'THIS IS A DANGEROUS ACTION',
            form: [
                { label: 'ROLE NAME', ph: 'Name of te role' },
                { label: 'ROLE DESCRIPTION', ph: 'Short description' },
            ],
            confirm: "Are you sure you want to permanently delete this role? the information won't be recoverable.",
            adminRole: 'This role is an administrative role, it overpasses the rules from the Workers and Roles rules and CANNOT be eliminated.',
            btn_help_tile: 'WORK TEAM ROLES',
            btn_help_body: 'The list of roles that can be asigned to the users part of the team.',
            HELP_PAGE: [
                {
                    title: 'WORK TEAM ROLES',
                    content: 'This module manages the different roles of the team, each role can be created and customize to the needs of the organization. Each member of the team can have multiple roles, so it is advised to create a set of various simple roles rather than to create a role specifically made for each team member.',
                    focus: 'title',
                },
                {
                    title: 'NEW',
                    content: 'This button opens a new subwindow with a filling form which allows creation of a new role. The description of the form fields are as follows.',
                    btn: 'NEW', btnColor: 'success', btnIcon: 'add',
                    list: [
                        { subtitle: 'ROLE NAME', text: 'The name of the role' },
                        { subtitle: 'ROLE DESCRIPTION', text: 'A sort description exposing the duties of the role.' },
                    ],
                    focus: 'new',

                },
                {
                    title: 'SEARCH BAR',
                    content: <>This button allows to filter the ROLES LIST in order to find one specific entry. To use the search bar, input into the text bar next to the button the value to look for and press the button or press the key Enter.<br />The search patterns can be NAME and  DESCRIPTION.</>,
                    component: <div class="bp4-input-group .modifier">
                        <span class="bp4-icon bp4-icon-search"></span>
                        <input type="text" class="bp4-input" placeholder={'Search...'} />
                        <button class="bp4-button bp4-minimal bp4-intent-primary bp4-icon-arrow-right"></button>
                    </div>,
                    focus: 'search',
                },
                {
                    title: 'ACTION: EDIT',
                    content: 'This button opens a new window where the user can update the data and properties of the Item.',
                    focus: 'detail', icon: <FaEdit className='text-primary' size={'24px'} />
                },
                {
                    title: 'ACTION: DELETE',
                    content: <>This button is considered a <label style={{ color: 'red' }}>DANGEROUS ACTION</label>. This button allows the user to delete this Item and all its children and dependencies.</>,
                    focus: 'delete', icon: <RiDeleteBinLine className='text-danger' size={'24px'} />
                },
                {
                    title: 'ADMINISTRATIVE ROLE',
                    content: 'This icon marks an administrative role, this is a superior role that always has access and permissions to roles and team members. This role cannot be deleted.',
                    focus: 'admin', icon: <AiTwotoneStar className='text-paranoia' size={'24px'} />
                },
            ],
        },
        es: {
            title: 'ROLES DE EQUIPO DE TRABAJO',
            tableHd: 'LISTA DE ROLES',
            tableCl: ['NOMBRE', 'DESCRIPCIÓN', 'ACCIÓN'],
            newtitle: 'CREAR NUEVO ROL',
            danger: 'ESTA ES UNA ACCIÓN PELIGROSA',
            form: [
                { label: 'NOMBRE DEL ROL', ph: 'Nombre de la función' },
                { label: 'DESCRIPCIÓN DEL ROL', ph: 'Descripción breve' },
            ],
            confirm: "¿Está seguro de que desea eliminar esto rol de forma permanente? la información no será recuperable.",
            adminRole: 'Este es un rol administrador. Este rol sobrepasa los sets de reglas de los Trbajadores y Roles y NO puede ser eliminado.',
            btn_help_tile: 'ROLES DE EQUIPO DE TRABAJO',
            btn_help_body: 'Lista de roles que pueden ser asignados a los usurios que sean parte del equipo de trabajo.',
            HELP_PAGE: [
                {
                    title: 'ROLES DE EQUIPO DE TRABAJO',
                    content: 'Este módulo gestiona los diferentes roles del equipo, cada rol se puede crear y personalizar según las necesidades de la organización. Cada miembro del equipo puede tener varios roles, por lo que se recomienda crear un conjunto de varios roles simples en lugar de crear un rol específico para cada miembro del equipo.',
                    focus: 'title',
                },
                {
                    title: 'nuevo',
                    content: 'Este botón abre una nueva subventana con un formulario de llenado que permite la creación de un nuevo rol. La descripción de los campos del formulario es la siguiente.',
                    btn: 'nuevo', btnColor: 'success', btnIcon: 'add',
                    list: [
                        { subtitle: 'NOMBRE DEL ROL', text: 'El nombre del nuevo rol a crear' },
                        { subtitle: 'DESCRIPCIÓN DEL ROLE', text: 'Una descripción corta que expone las funciones del rol.' },
                    ],
                    focus: 'new',

                },
                {
                    title: 'BARRA DE BUSQUEDA',
                    content: <>Este botón permite filtrar la LISTA DE ROLES para encontrar una entrada específica. Para usar la barra de búsqueda, ingrese en la barra de busqueda el texto a buscar y presione el botón de buscar o presione la tecla Enter.<br />Los patrones de búsqueda pueden ser NOMBRE y DESCRIPCIÓN.</>,
                    component: <div class="bp4-input-group .modifier">
                        <span class="bp4-icon bp4-icon-search"></span>
                        <input type="text" class="bp4-input" placeholder={'Search...'} />
                        <button class="bp4-button bp4-minimal bp4-intent-primary bp4-icon-arrow-right"></button>
                    </div>,
                    focus: 'search',
                },
                {
                    title: 'ACCIÓN: EDITAR',
                    content: 'Este botón abre una nueva ventana donde el usuario puede actualizar los datos y propiedades del artículo.',
                    focus: 'detail', icon: <FaEdit className='text-primary' size={'24px'} />
                },
                {
                    title: 'ACCIÓN: ELIMINAR',
                    content: <>Este botón se considera una <label style={{ color: 'red' }}>ACCIÓN PELIGROSA</label>. Este botón permite al usuario eliminar este elemento y todos sus elementos secundarios y dependencias.</>,
                    focus: 'delete', icon: <RiDeleteBinLine className='text-danger' size={'24px'} />
                },
                {
                    title: 'ROL ADMINISTRATIVO',
                    content: 'Este ícono marca un rol administrativo, este es un rol superior que siempre tiene acceso y permisos para roles y miembros del equipo. Este rol no se puede eliminar.',
                    focus: 'admin', icon: <AiTwotoneStar className='text-paranoia' size={'24px'} />
                },
            ],
        }
    },
    workers: {
        en: {
            title: 'ROLE ASSIGNMENT OF WORKERS',
            tableHd: 'WORKERS LIST',
            tableCl: ['WORKER NAME', 'ROLES OF WORKER', 'ASIGN ROLES', 'ACTIVATE / DEACTIVATE'],
            edit_rw: 'ASIGN ROLES TO WORKER',
            admin_alert: 'This is an ADMIN role.',
            btn_help_tile: 'ROLE ASSIGNMENT OF WORKERS',
            btn_help_body: 'This list allows to asign different roles to each worker.',
            HELP_PAGE: [
                {
                    title: 'ROLE ASSIGNMENT OF WORKERS',
                    content: 'This module manages the assignment of roles to the workers of the team, multiple roles can be assigned to a single worker, additionally, the workers of the team can also be activated / deactivated in order to negate all their functions in the team.',
                    focus: 'title',
                },
                {
                    title: 'SEARCH BAR',
                    content: <>This button allows filtering the <strong>WORKER LIST</strong> in order to find one specific entry. To use the search bar, input into the text bar next to the button the value to look for and press the button or press the key Enter.<br />The search patterns can be <strong>WORKER NAME</strong> and  <strong>ROLES OF WORKERS</strong>.</>,
                    component: <div class="bp4-input-group .modifier">
                        <span class="bp4-icon bp4-icon-search"></span>
                        <input type="text" class="bp4-input" placeholder={'Search...'} />
                        <button class="bp4-button bp4-minimal bp4-intent-primary bp4-icon-arrow-right"></button>
                    </div>,
                    focus: 'search',
                },
                {
                    title: 'ACTION: ASIGN ROLES',
                    content: 'This button opens a new window where the user can set the roles of a worker.',
                    focus: 'detail', icon: <FaEdit className='text-primary' size={'24px'} />
                },
                {
                    title: 'ACTION: ACTIVATE / DEACTIVATE',
                    content: <>This switch changes the state of a worker of the team to "ACTIVE" and "INACTIVE", this is a state that blocks the user of interacting with the team when it is deactivated. Changing this state is considered a <strong className='text-danger'>DANGEROUS ACTION</strong></>,
                    focus: 'active', icon: <IoIosSwitch className='text-primary' size={'24px'} />
                },
                {
                    title: 'ADMINISTRATIVE ROLE',
                    content: 'This icon marks an administrative role, this is a superior role that always has access and permissions to roles and team members. This role cannot be assigned or deactivated unless by another role with the same authority.',
                    focus: 'admin', icon: <AiTwotoneStar className='text-paranoia' size={'24px'} />
                },
            ],

        },
        es: {
            title: 'GESTIÓN DE TRABAJADORES',
            tableHd: 'LISTA DE TRABAJADORES',
            tableCl: ['NOMBRE DEL TRABAJADOR', 'FUNCIONES DEL TRABAJADOR', 'ESTABLECER FUNCIONES', 'HABILITAR / DESHABILITAR'],
            edit_rw: 'ASIGNAR ROLES PARA TRABAJADOR',
            admin_alert: 'Este es un rol de ADMINISTRADOR.',
            btn_help_tile: 'GESTIÓN DE TRABAJADORES',
            btn_help_body: 'Esta lista permite la asignacion de diferentes roles a los mienbros del equipo.',
            HELP_PAGE: [
                {
                    title: 'GESTIÓN DE TRABAJADORES',
                    content: 'Este módulo administra la asignación de roles a los trabajadores del equipo, se pueden asignar múltiples roles a un solo trabajador, adicionalmente, los trabajadores del equipo también se pueden  HABILITAR / DESHABILITAR para negar todas sus funciones en el equipo ',
                    focus: 'title',
                },
                {
                    title: 'BARRA DE BÚSQUEDA',
                    content: <>Este botón permite filtrar la <strong>LISTA DE TRABAJADORES</strong> para encontrar una entrada específica. Para usar la barra de búsqueda, ingrese en la barra de texto al lado del botón el valor a buscar y presione el botón o presione la tecla Enter.<br />Los patrones de búsqueda pueden ser <strong>NOMBRE DEL TRABAJADOR</strong> y < strong>FUNCIONES DEL TRABAJADOR</strong>.</>,
                    component: <div class="bp4-input-group .modifier">
                        <span class="bp4-icon bp4-icon-search"></span>
                        <input type="text" class="bp4-input" placeholder={'Buscar...'} />
                        <button class="bp4-button bp4-minimal bp4-intent-primary bp4-icon-arrow-right"></button>
                    </div>,
                    focus: 'search',
                },
                {
                    title: 'ACCIÓN: ASIGNAR ROLES',
                    content: 'Este botón abre una nueva ventana donde el usuario puede asignar los roles de un trabajador.',
                    focus: 'detail', icon: <FaEdit className='text-primary' size={'24px'} />
                },
                {
                    title: 'ACCIÓN: HABILITAR / DESHABILITAR',
                    content: <>Este interruptor cambia el estado de un trabajador del equipo a "ACTIVO" e "INACTIVO", este es un estado que bloquea al usuario de interactuar con el equipo cuando está desactivado. Cambiar este estado se considera una <strong className='text-danger'>ACCIÓN PELIGROSA</strong></>,
                    focus: 'detail', icon: <IoIosSwitch className='text-primary' size={'24px'} />
                },
                {
                    title: 'ROL ADMINISTRATIVO',
                    content: 'Este ícono marca un rol administrativo, este es un rol superior que siempre tiene acceso y permisos para roles y miembros del equipo. Este rol no se puede asignar ni desactivar a menos que lo haga otro rol con la misma autoridad.',
                    focus: 'admin', icon: <AiTwotoneStar className='text-paranoia' size={'24px'} />
                },
            ],
        }
    },
    audits: {
        en: {
            title: 'TEAM AUDIT',
            tableHdTeam: 'MAIN EVENT AUDIT',
            tableHdApp: 'SPECIAL EVENT AUDIT',
            tableCl: ['EVENT', 'DETAILS', 'PERFORMING USER', 'DATE & TIME'],
            btn_help_tile: 'TEAM AUDIT',
            btn_help_body: 'This module contains an entry of every important actions that has happened in the team, who dit it and when.',
            HELP_PAGE: [
                {
                    title: 'MAIN EVENT AUDIT',
                    content: 'This list tracks all main actions in the team, related directly to the control and flow of processes.',
                    focus: 'title',
                },
                {
                    title: 'SPECIAL EVENT AUDIT',
                    content: 'This list tracks all special actions in the team, related mostly to the control and administration of the team.',
                    focus: 'title2',
                },

                {
                    title: 'TABLE COLUMNS',
                    content: 'Both lists share the same columns but show different data.',
                    focus: 'list', list: [
                        { subtitle: 'EVENT', text: 'The name of the action that happened, divided in type and module, type can be among create, update, delete and others.' },
                        { subtitle: 'DETAILS', text: 'What was modified specifically, the systems saves the target values and not the previous ones.' },
                        { subtitle: 'PERFORMING USER', text: 'Name of the user that performed the action, internally it also saves the ID of the user in case there is an ambiguity issue.' },
                        { subtitle: 'DATE & TIME', text: 'The moment the action was performed, saved in ISO Format 8601 at UTC-05:00.' },
                    ]
                },
                {
                    title: 'SEARCH BAR',
                    content: <>This button allows filtering the <strong>MAIN EVENT AUDIT & SPECIAL EVENT AUDIT</strong> lits in order to find one specific entry. To use the search bar, input into the text bar next to the button the value to look for and press the button or press the key Enter.<br />The search patterns can be <strong>EVENT</strong>, <strong>PERFORMING USER</strong> & <strong>DATE & TIME</strong>.</>,
                    component: <div class="bp4-input-group .modifier">
                        <span class="bp4-icon bp4-icon-search"></span>
                        <input type="text" class="bp4-input" placeholder={'Search...'} />
                        <button class="bp4-button bp4-minimal bp4-intent-primary bp4-icon-arrow-right"></button>
                    </div>,
                    focus: 'search',
                },

            ],
        },
        es: {
            title: 'AUDITORIA DEL EQUIPO',
            tableHdTeam: 'EVENTOS PRINCIPALES',
            tableHdApp: 'EVENTOS ESPECIALES',
            tableCl: ['EVENTO', 'DETALLES', 'USUARIO QUE ACTUÓ', 'FECHA Y HORA'],
            btn_help_tile: 'AUDITORIA DEL EQUIPO',
            btn_help_body: 'Este modulo contiene inforacion sobre las acciones y eventualidades del equipo.',
            HELP_PAGE: [
                {
                    title: 'EVENTOS PRINCIPALES',
                    content: 'Esta lista rastrea todas las acciones principales en el equipo, relacionadas directamente con el control y flujo de procesos.',
                    focus: 'title',
                },
                {
                    title: 'EVENTOS ESPECIALES',
                    content: 'Esta lista rastrea todas las acciones especiales en el equipo, relacionadas principalmente con el control y la administración del equipo.',
                    focus: 'title2',
                },
                {
                    title: 'COLUMNAS DE LAS LISTAS',
                    content: 'Ambas listas comparten las mismas columnas pero muestran datos diferentes.',
                    focus: 'list', list: [
                        { subtitle: 'EVENTO', text: 'El nombre de la acción que sucedió, dividido en tipo y módulo, el tipo puede ser entre crear, actualizar, eliminar y otros.' },
                        { subtitle: 'DETALLES', text: 'Lo que se modificó específicamente, el sistema guarda los valores objetivo y no los anteriores.' },
                        { subtitle: 'USUARIO QUE ACTUÓ', text: 'Nombre del usuario que realizó la acción, internamente también guarda el ID del usuario por si hay algún problema de ambigüedad.' },
                        { subtitle: 'FECHA Y HORA', text: 'El momento en que se realizó la acción, guardado en formato ISO 8601 en UTC-05:00.' },
                    ]
                },
                {
                    title: 'BARRA DE BÚSQUEDA',
                    content: <>Este botón permite filtrar laS listas de  <strong>EVENTOS PRINCIPALES & EVENTOS ESPECIALES</strong> para encontrar una entrada específica. Para usar la barra de búsqueda, ingrese en la barra de texto al lado del botón el valor a buscar y presione el botón o presione la tecla Enter.<br />Los patrones de búsqueda pueden ser <strong>EVENTO</strong>, <strong>USUARIO QUE ACTUÓ</strong> & < strong>FECHA Y HORA</strong>.</>,
                    component: <div class="bp4-input-group .modifier">
                        <span class="bp4-icon bp4-icon-search"></span>
                        <input type="text" class="bp4-input" placeholder={'Buscar...'} />
                        <button class="bp4-button bp4-minimal bp4-intent-primary bp4-icon-arrow-right"></button>
                    </div>,
                    focus: 'search',
                },

            ],
        }
    },
    dashteam: {
        en: {
            title: 'WORK TEAM',
            role_title: 'ROLES INFORMATION',
            team_data: ['LEADER', 'LOCATION', 'NUMBERS', 'EMAILS', 'ADDRESS', 'WEB PAGE'],
            role_data: ['ROLE', 'NO ROLES ASIGNED TO THIS USER', 'COMUNICATE WITH YOUR TEAM LEADER IN ORDER TO BE SET A NEW ROLE', 'DEACTIVATED USER', 'This user has been deactivated and cannot perfom any action, comunicate to your team leader for more information.'],
            patch: 'LAST PATCH NOTES DOVELA',
            admin_title: 'ADMINISTRATE',
            modules_title: 'MODULES',
            tools_title: 'TOOLS',
            continue: 'Continue...',
            wait: 'WAIT A MOMENT PLEASE...',
            admin: [
                { title: 'INVITE WORKER', desc: 'Send and invitation to others users to be part of this team.' },
                { title: 'ROLES MANAGEMENT', desc: 'Creates and sets the different roles of the team, allows setting permits to each role.' },
                { title: 'WORKERS MANAGEMENT', desc: 'Allows to set different roles to each member of the team. At least one role and one member must be associated to the team.' },
                { title: 'VARIABLES CONFIGURATION', desc: 'Configure different variables that Dovela will use. Allows to set public, system and email variables amongst others.' },
                { title: 'AUDITS', desc: 'Shows all the events and updates of the team through all the different modules.' },
                { title: 'BILLING', desc: 'Shows the total usage of storage of the system.' },
                { title: 'DOCUMENTATION API', desc: 'Information and documentation on how to synchronize the data of the system withing your personal web page.' },
                { title: 'TEMPLATES', desc: 'Special templates that Dovela uses in order to create custom Architecture reports, Resolutions and Tax bills.' },
            ],
            modules: [
                { title: 'FILING BOOTH', desc: 'Manages the entry of documents of the organization through the use of an Entry code that is unique for each one.' },
                { title: 'PUBLICATIONS', desc: 'Manages publications of all documents from the organization, in order to be listed publicly' },
                { title: 'FILL LICENSE', desc: 'Manages the creation of new license process, allows the synchronization of these process with the projects generated by users.' },
                { title: 'CONTROL LICENSE', desc: 'Controls the flow and progress of the process, through the used of various charts and tables.' },
                { title: 'HORIZONTAL PROPERTY', desc: 'Manages and controls the PH processes of the organization.' },
                { title: 'ARCHIVE', desc: 'Allows to view all the digitalized documents of all the licenses easily, additionally allows to associate a digital position to a physical one.' },
                { title: 'URBAN NORM', desc: 'Manages and control the Urban Norms processes of the organization.' },
                { title: 'NOMENCLATURES', desc: 'Creates a nomenclature entry in the system.' },
                { title: 'PQRS', desc: 'Creates and manages the process of all the PQRS requests of the organization.' },
            ],
            tools: [
                { title: 'CALCULATOR', desc: 'Useful for generating a quick overview of fixed and variables costs for each type of license.' },
                { title: 'DICTIONARY', desc: 'A ledger containing the lists of all the unique codes and ids generated by Dovela.' },
                { title: 'CERTIFICATIONS', desc: 'Generates and lists special certifications useful for professionals or neighbors that are interested in a license.' },
            ]
        },
        es: {
            title: 'EQUIPO DE TRABAJO',
            role_title: 'NFORMACIÓN DE FUNCIONES',
            team_data: ['LÍDER', 'UBICACIÓN', 'TELEFONOS', 'CORREOS', 'DIRECCIÓN', 'PÁGINA WEB'],
            role_data: ['ROL', 'NO HAY NINGÚN ROL ASIGNADO A ESTE USUARIO', 'COMUNÍQUESE CON EL LÍDER DEL EQUIPO PARA RECIBIR UN NUEVO ROL.', 'TRABAJADOR DESHABILITADO', 'Este trabajador ha sido desactivado por el administrador y no puede realizar ninguna acción, comuníquese con el director del equipo para mos información.'],
            patch: 'ULTIMAS NOTAS DE PARCHE DOVELA',
            admin_title: 'ADMINISTRAR',
            modules_title: 'MÓDULOS',
            tools_title: 'HERRAMIENTAS',
            continue: 'Continuar...',
            wait: 'ESPERE UN MOMENT POR FAVOR...',
            admin: [
                { title: 'INVITAR TRABAJADOR', desc: 'Enviar una invitación a otros usuarios para que formen parte de este equipo.' },
                { title: 'ADMINISTRACIÓN DE ROLES', desc: 'Crea y establece los diferentes roles del equipo, permite configurar permisos para cada rol.' },
                { title: 'GESTIÓN DE TRABAJADORES', desc: 'Permite establecer diferentes roles para cada miembro del equipo. Al menos un rol y un miembro deben estar asociados al equipo.' },
                { title: 'CONFIGURACIÓN DE VARIABLES', desc: 'Configurar diferentes variables que utilizará Dovela. Permite establecer variables públicas, de sistema y de correo electrónico, entre otras.' },
                { title: 'AUDITORIAS', desc: 'Muestra todos los eventos y actualizaciones del equipo a través de todos los diferentes módulos.' },
                { title: 'FACTURACIÓN', desc: 'Muestra el uso total de almacenamiento del sistema.' },
                { title: 'DOCUMENTACIÓN API', desc: 'Información y documentación sobre cómo sincronizar los datos del sistema con su página web personal.' },
                { title: 'PLANTILLAS', desc: 'Plantillas especiales que utiliza Dovela para crear informes de Arquitectura personalizados, Resoluciones y Facturas de Impuestos.' },
            ],
            modules: [
                { title: 'VENTANILLA ÚNICA DE RADICACIÓN', desc: 'Gestiona el ingreso de documentos de la organización mediante el uso de un código de Ingreso único para cada uno.' },
                { title: 'PUBLICACIONES', desc: 'Gestiona las publicaciones de todos los documentos de la organización, con el fin de ser listados públicamente' },
                { title: 'RADICAR LICENCIAS', desc: 'Gestiona el proceso de creación de nuevas licencias, permite sincronizar estos procesos con los proyectos generados por los usuarios.' },
                { title: 'CONTROL LICENCIAS', desc: 'Controla el flujo y el progreso del proceso, mediante el uso de varios gráficos y tablas.' },
                { title: 'PROPIEDAD HORIZONTAL', desc: 'Gestiona y controla los procesos de PH de la organización.' },
                { title: 'ARCHIVO', desc: 'Permite visualizar fácilmente todos los documentos digitalizados de todas las licencias, adicionalmente permite asociar una posición digital a una física.' },
                { title: 'NORMA URBANA', desc: 'Gestiona y controla los procesos de Normas Urbanas de la organización.' },
                { title: 'NOMENCLATURAS', desc: 'Crea una entrada de nomenclatura en el sistema.' },
                { title: 'PQRS', desc: 'Crea y gestiona el proceso de todas las solicitudes PQRS de la organización.' },
            ],
            tools: [
                { title: 'CALCULADORA', desc: 'Útil para generar un resumen rápido de costos fijos y variables para cada tipo de licencia.' },
                { title: 'DICCIONARIOS', desc: 'Un libro de contabilidad que contiene las listas de todos los códigos e identificaciones únicos generados por Dovela.' },
                { title: 'CERTIFICACIONES', desc: 'Genera y enumera certificaciones especiales útiles para profesionales o vecinos que estén interesados en una licencia.' },
            ]
        }
    },
    templates: {
        en: {
            title: 'Templates',
            tableHd: 'TEMPLATE LIST',
            tableCl: ['TEMPLATE NAME', 'TEMPLATE TYPE', 'ACTION'],
            template_types: { calc: 'Tax calculation', tax: 'Tax bill', arc: 'Architecture Stufy', res: 'Resolution' },
            template_types_info: {
                calc: <>This template is use for the calculators, allows creating a customized calculator that will process all tax expenses. <strong>Editing or deleting an existing template will not have major impact in the processes.</strong></>,
                tax: <>This template creates a form that can be filled with variable information to later generate a PDF with a tax bill. <strong>Editing or deleting an existing template will not have major impact in the processes.</strong> </>,
                arc: <>These templates creates a form to control the Architecture study of each license. The system saves both the template and the data it was created with and uses this to generate the final PDF of the study. <strong className='text-danger'>Editing or deleting an existing template WILL have major impact in the license, so it is VERY recommended to instead create a new template and apply that template to the target licenses.</strong></>,
                res: <>This template creates a form to control the resolutions of each license, when saving a resolution, the systems saves both the template and the data it was created with and uses this to generate the final PDF of the resolution. <strong className='text-danger'>Editing or deleting an existing template WILL have major impact in the license, so it is VERY recommended to instead create a new template and apply that template to the target licenses.</strong></>,
            },
            template_model: 'Tempplate model',
            template_body: 'Template output',
            form: ['Template name', 'Template type'],
            btn_help_tile: 'TEMPLATES',
            btn_help_body: 'This module allows the creation of templates, these are usefull tools to process iformation custom tailored for the team processes.',
            HELP_PAGE: [
                {
                    title: 'TEMPLATE LIST',
                    content: 'This list tracks all templates generated in the system.',
                    focus: 'title', list: [
                        { subtitle: 'TEMPLATE NAME', text: 'Name that identified the template.' },
                        { subtitle: 'TEMPLATE TYPE', text: 'The type of the template, there are four different types of templates: Tax calculations, Tax bill, Architecture study and Resolution' },
                        { subtitle: 'ACTION', text: 'Allows editing and deleting the different templates.' },
                        { subtitle: 'EXPANDABLE', text: '(Little arrow at the start of each row) Opens the template model editor, which allows to saves and build the template model, giving a preview how the final product will look.' },
                    ]
                },
                {
                    title: 'NEW',
                    content: 'This button opens a new subwindow with a filling form which allows creation of a new template. The description of the form fields are as follows.',
                    btn: 'NEW', btnColor: 'success', btnIcon: 'add',
                    list: [
                        { subtitle: 'TEMPLATE NAME', text: 'The name of the template, this is a open text input.' },
                        { subtitle: 'TEMPLATE TYPE', text: 'The type of the template, this is a select with four possible options: Tax calculations, Tax bill, Architecture study and Resolution' },
                    ],
                    focus: 'new',
                },
                {
                    title: 'SEARCH BAR',
                    content: <>This button allows filtering the <strong>TEMPLATE LIST</strong> in order to find one specific entry. To use the search bar, input into the text bar next to the button the value to look for and press the button or press the key Enter.<br />The search patterns can be <strong>TEMPLATE NAME</strong> & <strong>TEMPLATE NAME</strong>.</>,
                    component: <div class="bp4-input-group .modifier">
                        <span class="bp4-icon bp4-icon-search"></span>
                        <input type="text" class="bp4-input" placeholder={'Search...'} />
                        <button class="bp4-button bp4-minimal bp4-intent-primary bp4-icon-arrow-right"></button>
                    </div>,
                    focus: 'search',
                },
                {
                    title: 'ACTION: EDIT',
                    content: 'This button opens a new window where the user can update the data and properties of the Item.',
                    focus: 'detail', icon: <FaEdit className='text-primary' size={'24px'} />
                },
                {
                    title: 'ACTION: DELETE',
                    content: <>This button is considered a <label style={{ color: 'red' }}>DANGEROUS ACTION</label>. This button allows the user to delete this Item and all its children and dependencies.</>,
                    focus: 'delete', icon: <RiDeleteBinLine className='text-danger' size={'24px'} />
                },
                {
                    title: 'TEMPLATE TYPES',
                    content: 'There are four different types of templates, each one with a different purpose.',
                    focus: 'tenplate_list', list: [
                        { subtitle: 'Tax calculation', text: <>This template is used for the calculators, allows creating a customized calculator that will process all tax expenses. <strong>Editing or deleting an existing template will not have major impact in the processes.</strong></> },
                        { subtitle: 'Tax bill', text: <>This template creates a form that can be filled with variable information to later generate a PDF with a tax bill. <strong>Editing or deleting an existing template will not have major impact in the processes.</strong> </> },
                        { subtitle: 'Architecture study', text: <>These templates creates a form to control the Architecture study of each license. The system saves both the template and the data it was created with and uses this to generate the final PDF of the study. <strong className='text-danger'>Editing or deleting an existing template WILL have major impact in the license, so it is VERY recommended to instead create a new template and apply that template to the target licenses.</strong></> },
                        { subtitle: 'Resolution', text: <>This template creates a form to control the resolutions of each license, when saving a resolution, the systems saves both the template and the data it was created with and uses this to generate the final PDF of the resolution. <strong className='text-danger'>Editing or deleting an existing template WILL have major impact in the license, so it is VERY recommended to instead create a new template and apply that template to the target licenses.</strong></> },
                    ]
                },
                {
                    title: <label className='text-primary fw-b'>MODELING TEMPLATES</label>,
                    content: 'Each template type has their own model that determines their structure and physical attributes, but in general they all consist in text based models, which the system parsers to create the output product, the syntax and structure to each one of the these models varies from each type. Once modelled, the model can be saved or built to have an overview of the final product.',
                    focus: 'create',
                },
                {
                    title: 'SAVE',
                    content: 'Saves the model of the template.',
                    btn: 'SAVE', btnColor: 'success', btnIcon: 'floppy-disk',
                    focus: 'save',
                },
                {
                    title: 'BUILD',
                    content: 'Compiles the current model and creates a preview of the output product, if the text in the input is not valid, it will inform of a failed build model.',
                    btn: 'BUILD', btnColor: 'warning', btnIcon: 'build',
                    focus: 'build',
                },
                {
                    title: <label className='text-primary fw-b'>MODELING TEMPLATES: TAX CALCULATION</label>,
                    content: <><p>The default model of this template is:</p>
                        <p className='fw-b'>@[PARENT_NAME] : r p <br />
                            #[CHILD_NAME] : mult <br />
                            #[CHILD_NAME] : mult</p>
                        <p>The model consists of an N number of rows, each one containing: [name] : [options]</p>
                        <p>The first line starts with <strong className='fw-b'>@</strong> and determines the name of the tax to calculate, the options for these lines are <strong className='fw-b'>r</strong> for rounded, which rounds the final value to thousands and <strong className='fw-b'>p</strong> for percentage, which allows to calculate a percentage of the total value. </p>
                        <p>After the first line, the children are next, identified with the <strong className='fw-b'>#</strong>, they can be N total and have the option <strong className='fw-b'>mult</strong> which is a numeric value that will calculate the final value (value = mult * area), if mult is not a number the system can determine, it will use the default value 1000.</p>
                    </>,
                    focus: 'create_tc',
                },
            ],
        },
        es: {
            title: 'Plantillas',
            tableHd: 'LISTA DE PLANTILLAS',
            tableCl: ['NOMBRE DE PLANTILLA', 'TIPO DE PLANTILLA', 'ACCIÓN'],
            template_types: { calc: 'Cálculo de impuesto', tax: 'Liquidación de impuesto', arc: 'Estudio arquitectÓnico', res: 'Resolución' },
            template_types_info: {
                calc: <>Esta plantilla se usa para las calculadoras, permite crear una calculadora personalizada que procesará todos los gastos de impuestos. <strong>Editar o eliminar una plantilla existente no tendrá un impacto importante en los procesos.</strong></>,
                tax: <>Esta plantilla crea un formulario que se puede llenar con información variable para luego generar un PDF con una factura de impuestos. <strong>Editar o eliminar una plantilla existente no tendrá mayor impacto en los procesos.</strong></>,
                arc: <>Estas plantillas crean un formulario para controlar el estudio de Arquitectura de cada licencia. El sistema guarda tanto la plantilla como los datos con los que se creó y los utiliza para generar el PDF final del estudio. <strong className='text-danger'>Editar o eliminar una plantilla existente TENDRÁ un gran impacto en la licencia, por lo que se recomienda en su lugar crear una nueva plantilla y aplicarla a las licencias afectadas.</strong></>,
                res: <>Esta plantilla crea un formulario para controlar las resoluciones de cada licencia, al guardar una resolución, el sistema guarda tanto la plantilla como los datos con los que se creó y los usa para generar el PDF final de la resolucion <strong className='text-danger'>Editar o eliminar una plantilla existente TENDRÁ un gran impacto en la licencia, por lo que se recomienda en su lugar crear una nueva plantilla y aplicarla a las licencias afectadas.</strong></>,
            },
            template_model: 'Modelo de plantilla',
            template_body: 'Salidad de plantilla',
            form: ['Nombre de plantilla', 'Tipo de plantilla'],
            btn_help_tile: 'PLANTILLAS',
            btn_help_body: 'Este módulo permite la creación de plantillas, estas son herramientas útiles para procesar información personalizada para los procesos del equipo.',

            HELP_PAGE: [
                {
                    title: 'LISTA DE PLANTILLAS',
                    content: 'Esta lista rastrea todas las plantillas generadas en el sistema.',
                    focus: 'title', list: [
                        { subtitle: 'NOMBRE DE LA PLANTILLA', text: 'Nombre que identificó la plantilla.' },
                        { subtitle: 'TIPO DE PLANTILLA', text: 'El tipo de plantilla, hay cuatro tipos diferentes de plantillas: Cálculo de impuestos, Factura de impuestos, Estudio de arquitectura y Resolución' },
                        { subtitle: 'ACCIÓN', text: 'Permite editar y eliminar las diferentes plantillas.' },
                        { subtitle: 'EXPANDIBLE', text: '(Pequeña flecha al comienzo de cada fila) Abre el editor de modelo de plantilla, que permite guardar y construir el modelo de plantilla, brindando una vista previa de cómo se verá el producto final.' },
                    ]
                },
                {
                    title: 'NUEVO',
                    content: 'Este botón abre una nueva subventana con un formulario de llenado que permite la creación de una nueva plantilla. La descripción de los campos del formulario es la siguiente.',
                    btn: 'NUEVO', btnColor: 'success', btnIcon: 'add',
                    lista: [
                        { subtitle: 'NOMBRE DE LA PLANTILLA', text: 'El nombre de la plantilla, esta es una entrada de texto abierta.' },
                        { subtitle: 'TIPO DE PLANTILLA', text: 'El tipo de plantilla, esta es una selección con cuatro opciones posibles: Cálculo de impuestos, Factura de impuestos, Estudio de arquitectura y Resolución' },
                    ],
                    focus: 'new',
                },
                {
                    title: 'BARRA DE BUSQUEDA',
                    content: <>Este botón permite filtrar las <strong>LISTA DE PLANTILLAS</strong> para encontrar una entrada específica. Para usar la barra de búsqueda, ingrese en la barra de busqueda el texto a buscar y presione el botón de buscar o presione la tecla Enter.<br />Los patrones de búsqueda pueden ser <strong>NOMBRE DE LA PLANTILLA</strong> & <strong>TIPO DE PLANTILLA</strong>.</>,
                    component: <div class="bp4-input-group .modifier">
                        <span class="bp4-icon bp4-icon-search"></span>
                        <input type="text" class="bp4-input" placeholder={'Buscar...'} />
                        <button class="bp4-button bp4-minimal bp4-intent-primary bp4-icon-arrow-right"></button>
                    </div>,
                    focus: 'search',
                },
                {
                    title: 'ACCIÓN: EDITAR',
                    content: 'Este botón abre una nueva ventana donde el usuario puede actualizar los datos y propiedades del artículo.',
                    focus: 'detail', icon: <FaEdit className='text-primary' size={'24px'} />
                },
                {
                    title: 'ACCIÓN: ELIMINAR',
                    content: <>Este botón se considera una <label style={{ color: 'red' }}>ACCIÓN PELIGROSA</label>. Este botón permite al usuario eliminar este elemento y todos sus elementos secundarios y dependencias.</>,
                    focus: 'delete', icon: <RiDeleteBinLine className='text-danger' size={'24px'} />
                },
                {
                    title: 'TTIPOS DE PLANTILLA',
                    content: 'Hay cuatro tipos diferentes de plantillas, cada una con un propósito diferente.',
                    focus: 'tenplate_list', list: [
                        { subtitle: 'Cálculo de impuesto', text: <>Esta plantilla se usa para las calculadoras, permite crear una calculadora personalizada que procesará todos los gastos de impuestos. <strong>Editar o eliminar una plantilla existente no tendrá un impacto importante en los procesos.</strong></> },
                        { subtitle: 'Liquidacion de impuesto', text: <>Esta plantilla crea un formulario que se puede llenar con información variable para luego generar un PDF con una factura de impuestos. <strong>Editar o eliminar una plantilla existente no tendrá mayor impacto en los procesos.</strong> </> },
                        { subtitle: 'Estudio arquitectónico', text: <>Estas plantillas crean un formulario para controlar el estudio de Arquitectura de cada licencia. El sistema guarda tanto la plantilla como los datos con los que se creó y los utiliza para generar el PDF final del estudio. <strong className='text-danger'>Editar o eliminar una plantilla existente TENDRÁ un gran impacto en la licencia, por lo que se recomienda en su lugar crear una nueva plantilla y aplicarla a las licencias afectadas.</strong></ > },
                        { subtitle: 'Resolución', text: <>Esta plantilla crea un formulario para controlar las resoluciones de cada licencia, al guardar una resolución, el sistema guarda tanto la plantilla como los datos con los que se creó y los usa para generar el PDF final de la resolucion <strong className='text-danger'>Editar o eliminar una plantilla existente TENDRÁ un gran impacto en la licencia, por lo que se recomienda en su lugar crear una nueva plantilla y aplicarla a las licencias afectadas.</strong></ > },
                    ]
                },
                {
                    title: <label className='text-primary fw-b'>MODELANDO LAS PLANTILLAS</label>,
                    content: 'Cada tipo de plantilla tiene su propio modelo que determina su estructura y atributos físicos, pero en general todos consisten en modelos basados ​​en texto, que el sistema analiza para crear el producto de salida, la sintaxis y la estructura de cada uno de estos modelos varía de cada tipo. Una vez modelado, el modelo se puede guardar o compilar para tener una visión general del producto final.',
                    focus: 'create',
                },
                {
                    title: 'GUARDAR',
                    content: 'Guarda el modelo de la plantilla.',
                    btn: 'GUARDAR', btnColor: 'success', btnIcon: 'floppy-disk',
                    focus: 'save',
                },
                {
                    title: 'COMPILAR',
                    content: 'Compila el modelo actual y crea una vista previa del producto de salida, si el texto en la entrada no es válido, informará de un modelo de construcción fallido.',
                    btn: 'COMPILAR', btnColor: 'warning', btnIcon: 'build',
                    focus: 'build',
                },
                {
                    title: <label className='text-primary fw-b'>PLANTILLAS: CÁLCULO DE IMPUESTOS</label>,
                    content: <><p>El modelo predeterminado de esta plantilla es:</p>
                        <p className='fw-b'>@[NOMBRE_PADRE] : r p <br />
                            #[NOMBRE_HIJO] : mult <br />
                            #[NOMBRE_HIJO] : mult</p>
                        <p>El modelo consta de un número N de filas, cada una de las cuales contiene: [nombre] : [opciones]</p>
                        <p>La primera línea comienza con <strong className='fw-b'>@</strong> y determina el nombre del impuesto a calcular, las opciones para estas líneas son <strong className='fw-b'>r</strong> para redondeado, que redondea el valor final a miles y <strong className='fw-b'>p</strong> para porcentaje, que permite calcular un porcentaje del valor total. </p>
                        <p>Después de la primera línea, le siguen los hijos, identificados con el <strong className='fw-b'>#</strong>, pueden ser N totales y tienen la opción <strong className='fw-b'>mult</strong> que es un valor numérico que calculará el valor final (valor = mult * área), si mult no es un número que el sistema puede determinar, utilizará el valor predeterminado 1000.</p>
                    </>,
                    focus: 'create_tc',
                },
            ],
        }
    },
    dcalc: {
        en: {
            title: 'DOVELA CALCULATOR',
            infoFixed: ['Calculator model', 'Units', 'Value', 'cvi', 'cfi', 'CV', 'CF', 'AVT'],
            infoVaried: ['TRIBUTARY UNIT VALUE', 'TUV', 'MINIMUM MONTHLY LEGAL WAGE', 'MMLW'],

            calc_title: 'Fixed and variable expenses calculator',
            calc_form: ['Entry data', 'Output data', 'Process type', 'Mode', 'Use', 'Strata', 'Area', 'Multiplier factor m', 'Fixed charge', 'Variable charge', 'Total charge'],
            calc_process_type: ['Construction  or acknowledgment', 'Urbanism', 'Parceling'],
            calc_mod_1: ['New Construction', 'Ampliation', 'Modification', 'Structural reinforcement', 'Adequation (with construction)', 'Adequation (without construction)', 'Total demolition', 'Partial demolition', 'Enclosure', 'Restoration', 'Reconstruction', 'Acknowledgment'],
            calc_mod_2: ['Development', 'Sanitation', 'Reurbanism'],
            calc_mod_3: ['Parceling'],
            cacl_use: ['Residential (NO SIR)', 'Residential (SIR)', 'Residential (PIR)', 'Trade and services', 'Dotational', 'Industrial', 'Multiple'],
            calc_strate: ['Strata 1', 'Strata 2', 'Strata 3', 'Strata 4', 'Strata 5', 'Strata 6'],

            templ_title: 'Tax calculator',
            templ_form: ['Tax calculation template'],

            nis_title: 'NO DATA IN THE BILL',
            nis_body: 'Add at least one value to generate a bill.',

            table_title: 'Expenses that do not authorize constructions',
            table_columns: ['EXPENSES', 'AVT', 'TOTAL'],
            table_body: [
                { title: 'Subdivision license 2.2.6.6.8.10', list: ['Urban and rural, without range m2', 'Rebatching, useful  area to urbanize (0 to 1000 m2)', 'Rebatching, useful  area to urbanize (1001 to 5000 m2)', 'Rebatching, useful  area to urbanize (5001 to 10000 m2)', 'Urban and rural, without range m2', 'Urban and rural, without range m2'] },
                { title: 'License prolongation or revalidation', list: ['Each one', 'Each one (SIR)', 'Second prolongation or second revalidation'] },
                { title: 'Dimension adjustment', list: ['Strata 1 and 2', 'Strata 3 and 4', 'Strata 5 and 6'] },
                { title: 'Certified blueprint copy', list: ['Each one'] },
                { title: 'Blueprint approval of H.P', list: ['Up to 250 m2', 'From 251 to 500 m2', 'From 501 to 1000 m2', 'From 1001 to 5000 m2', 'From 5001 to 10000 m2', 'From 10001 to 20000 m2', 'More than 20000 m2'] },
                { title: 'Ground displacement and swimming pool construction', list: ['Up to 100 m3', 'From 101 to 500 m3', 'From 501 to 1000 m3', 'From 1001 to 5000 m3', 'From 5001 to 10000 m3', 'From 10001 to 20000 m3', 'More than 20000 m3'] },
                { title: 'Urban blueprint modification', list: ['Each one'] },
                { title: 'Urban norm concept', list: ['Each one'] },
                { title: 'Soil use concept', list: ['Each one'] },
            ],
            table_extra: 'Article 2.2.6.6.8.15 Expenses for other actions. Urban curators may charge the following expenses for the other actions referred to in article 2.2.6.1.3.1 of this decree, as long as these are executed independently of the issuance of the license:',

            bill_title: 'Bill preview',
            bill_table: ['ITEM DESCRIPTION', 'VALUES', 'TOTAL'],

            btn_help_tile: 'DOVELA CALCULATOR',
            btn_help_body: 'Dovela calculator is a tool for estimating all kinds of expenses from the organization, from fixed and variable charges, to tax charges and other charges based on the type of process.',
            HELP_PAGE: [
                {
                    title: 'DOVELA CALCULATOR',
                    content: 'This is a tool for estimating all expenses and taxes produced in the processes of the team, this module contains one calculator for fixed and variable charges, another tax calculator that uses the Tax Calculation templates and a table for processes that do not required constructions. Each one of these tools can add their value to a preview bill and create a final estimate.',
                    focus: 'title',
                },
                {
                    title: 'MODEL CALCULATOR',
                    content: 'Due to legal precedents, the base values on which the expenses are calculated change from year to year, this select allows to choose the year from which the estimate is aim at.',
                    focus: 'model',
                    component: <FormGroup label={'Calculator model'} inline>
                        <SELECT selectOptions={[{ value: '2021', label: '2021' }, { value: '2022', label: '2022' }]} leftIcon="calendar" />
                    </FormGroup>
                },
                {
                    title: 'CALCULATOR BASE UNITS',
                    content: 'These are the base values from which the tool calculate the final charge.',
                    focus: 'units', list: [
                        { subtitle: 'Units', text: 'The name of the base unit, define legally as either MINIMUM MONTHLY LEGAL WAGE (MMLW) or TRIBUTARY UNIT VALUE (TUV)' },
                        { subtitle: 'Value', text: 'The value of the base unit, defined legally as 908526 for MMLW or 38004 for TUV' },
                        { subtitle: 'cvi', text: 'The base value of the variable charge.' },
                        { subtitle: 'cfi', text: 'The base value of the fixed charge.' },
                        { subtitle: 'CV', text: 'The product of cvi and value. A base value use in the calculations.' },
                        { subtitle: 'CF', text: 'The product of cfi and value. A base value use in the calculations.' },
                        { subtitle: 'AVT', text: 'The added value tax in added to all expenses, defined as a percentage of the total charge, the tax calculations do not add this value since they are tax themselves.' },
                    ]
                },
                {
                    title: 'CALCULATE',
                    content: 'This button will process the input data from the calculator and set the output values.',
                    btn: 'CALCULATE', btnColor: 'primary', btnIcon: 'calculator',
                    focus: 'calculate',
                },
                {
                    title: 'ADD',
                    content: 'This button will take the output values generate by the calculator and add then to the preview bill.',
                    btn: 'ADD', btnColor: 'warning', btnIcon: 'th',
                    focus: 'add',
                },
                {
                    title: 'FIXED AND VARIABLE EXPENSES CALCULATOR',
                    content: 'This tool allows to estimate the expenses of the most common license processes of the team.',
                    focus: 'calc', list: [
                        { subtitle: 'Process type', text: 'The main processes types derived from the licenses.' },
                        { subtitle: 'Mode', text: 'The mode of the process type,  each process type has their own modes.' },
                        { subtitle: 'Use', text: 'The use destination of the process.' },
                        { subtitle: 'Strata', text: 'The strata in which the building is located.' },
                        { subtitle: 'Area', text: 'Total affected area of the process.' },
                        { subtitle: 'Multiplier factor m', text: <>This is an unique constant present in the calculation of the expense, this value is unique for each team and can be set at the <Link to="/dconfig" target="_blank">Configuration page</Link>.</> },
                        { subtitle: 'Fixed charge', text: 'The final CF value' },
                        { subtitle: 'Variable charge', text: 'The final CV value' },
                        { subtitle: 'Total charge', text: 'The sum of the previous values' },
                    ]
                },
                {
                    title: 'TAX CALCULATOR',
                    content: 'This tool will gather all Tax Calculation templates created by the team and will display them as forms. If no templates are found, it will show a message informing about it.',
                    focus: 'tax', list: [
                        { subtitle: 'Tax calculation template', text: 'This is a list that contains the names of all the tax calculation templates, chancing this select changes the displayed calculator.' },
                        { subtitle: 'Tax ', text: 'The PARENT_NAME of the template.' },
                        { subtitle: 'Tax specification', text: 'The CHILDREN of the template.' },
                        { subtitle: 'Area ', text: 'Affected area to be taxed.' },
                        { subtitle: 'Percentage %', text: 'This is an input data that can appear or not depending on the configuration of the template.' },
                        { subtitle: 'Multiplier', text: 'This is the final value that will calculate the total charge, changes on the configuration of the template.' },
                        { subtitle: 'Rounded ', text: 'A configuration text, that may or not appear depending on the configuration of the template.' },
                        { subtitle: 'Value ', text: 'The final value to be taxed in the bill.' },
                    ]
                },
                {
                    title: 'BILL PREVIEW',
                    content: 'When at least one value has been added to the bill preview, it will display a table adding all expenses in an organized bill, some values can be removed from the bill easily pressing the red button next to each entry.',
                    focus: 'bill', list: [
                        { subtitle: 'Generate CSV', text: 'This button will gather all information in the bill and generate a CSV (Comma separated value) file, that can later be managed with a sheet processor such as Excel or LibreOffice.' },
                        { subtitle: 'Generate PDF', text: 'This button will gather all information in the bill and generate a PDF (Portable document format) file.' },
                    ]
                },
                {
                    title: 'EXPENSES THAT DO NOT AUTHORIZE CONSTRUCTIONS',
                    content: 'This table contains all other processes that are not calculated using an affected area, due to them not having any kind of construction, due to this, the charge for this process is calculated with a sheet. ',
                    focus: 'table',
                },
            ],
        },
        es: {
            title: 'CALCULADORA DOVELA',
            infoFixed: ['Modelo de Calculadora', 'Unidades', 'Valor', 'cvi', 'cfi', 'CV', 'CF', 'IVA'],
            infoVaried: ['UNIDAD DE VALOR TRIBUTARIO', 'UVT', 'SALARIO MINIMO MENSUAL VIGENTE', 'SMLV'],

            calc_title: 'Calculadora de expensas fijas y variables',
            calc_form: ['Entrada de datos', 'Salida de datos', 'Tipo de actuación', 'Modalidad', 'Uso', 'Estrato', 'Área', 'Factor Municipal m', 'Cargo fijo', 'Cargo variable', 'Cobro total'],
            calc_process_type: ['Construcción o reconocimiento', 'Urbanismo', 'Parcelación'],
            calc_mod_1: ['Obra nueva', 'Ampliación', 'Modificación', 'Reforzamiento estructural', 'Adecuación (con obras)', 'Adecuación (sin obras)', 'Demolición total', 'Demolición parcial', 'Cerramiento', 'Restauración', 'Reconstrucción', 'Reconocimiento'],
            calc_mod_2: ['Desarrollo', 'Saneamiento', 'Reurbanización'],
            calc_mod_3: ['Parcelación'],
            cacl_use: ['Residencial (NO VIS)', 'Residencial (VIS)', 'Residencial (VIP)', 'Comercial y de Servicios', 'Dotacional', 'Industrial', 'Multiple'],
            calc_strate: ['Estrato 1', 'Estrato 2', 'Estrato 3', 'Estrato 4', 'Estrato 5', 'Estrato 6'],

            templ_title: 'Calculadora de impuestos',
            templ_form: ['Plantila de calculo de impuesto'],

            nis_title: 'NO HAY DATOS EN LA LIQUIDACIÓN',
            nis_body: 'Añade al menos un valor para generar la liquidación',

            table_title: 'Expensas que no autorizan obras',
            table_columns: ['EXPENSAS', 'IVA', 'TOTAL'],
            table_body: [
                { title: 'Licencia de subdivisión 2.2.6.6.8.10', list: ['Urbana y Rural, Sin rango. m2', 'Reloteo, Área útil urbanizable (0 a 1000 m2)', 'Reloteo, Área útil urbanizable (1001 a 5000 m2)', 'Reloteo, Área útil urbanizable (5001 a 10000 m2)', 'Urbana y Rural, Sin rango. m2', 'Urbana y Rural, Sin rango. m2'] },
                { title: 'Prorroga o revalidación de licencia', list: ['Cada Una', 'Cada Una (VIS)', 'Segunda Prorroga o Segunda revalidación'] },
                { title: 'Ajuste de cotas', list: ['Estrato 1 y 2', 'Estrato 3 y 4', 'Estrato 5 y 6'] },
                { title: 'Copia certificada de Planos', list: ['Por cada plano'] },
                { title: 'Aprovación de planos de P.H.', list: ['Hasta 250 m2', 'De 251 a 500 m2', 'De 501 a 1000 m2', 'De 1001 a 5000 m2', 'De 5001 a 10000 m2', 'De 10001 a 20000 m2', 'Mas de 20000 m2'] },
                { title: 'Movimiento de tierras y construcción de piscinas', list: ['Hasta 100 m3', 'De 101 a 500 m3', 'De 501 a 1000 m3', 'De 1001 a 5000 m3', 'De 5001 a 10000 m3', 'De 10001 a 20000 m3', 'Mas de 20000 m3'] },
                { title: 'Modificación Planos Urbanisticos', list: ['Cada Uno'] },
                { title: 'Concepto Norma Urbanistica', list: ['Cada Uno'] },
                { title: 'Concepto Uso del suelo', list: ['Cada Uno'] },
            ],
            table_extra: 'Articulo 2.2.6.6.8.15 Expensas por otras actuaciones. Los curadores urbanos podrán cobrar las siguientes expensas por las otras actuaciones de que trata el artículo 2.2.6.1.3.1 del presente decreto, siempre y cuando estas se ejecuten de manera independiente a la expedición de la licencia:',

            bill_title: 'Vista previa de liquidación',
            bill_table: ['DESCRIPTICÓN', 'VALOR', 'TOTAL'],

            btn_help_tile: 'CALCULADORA DOVELA',
            btn_help_body: 'La calculadora Dovela es una herramienta para estimar todo tipo de gastos de la organización, desde cargos fijos y variables, hasta cargos por impuestos y otros cargos según el tipo de proceso.',
            HELP_PAGE: [
                {
                    title: 'CALCULADORA DOVELA',
                    content: 'Esta es una herramienta para estimar todos los gastos e impuestos que se producen en los procesos del equipo, este módulo contiene una calculadora para cargos fijos y variables, otra calculadora de impuestos que utiliza las plantillas de Cálculo de Impuestos y una tabla para procesos que no requieren construcciones. Cada una de estas herramientas puede agregar su valor a una liquidación preliminar y crear una estimación final.',
                    focus: 'title',
                },
                {
                    title: 'MODELO DE CALCULADORA',
                    content: 'Debido a la jurisprudencia, los valores base sobre los que se calculan los gastos varían de un año a otro, esta selección permite elegir el año al que se destina la estimación.',
                    focus: 'model',
                    component: <FormGroup label={'Calculator model'} inline>
                        <SELECT selectOptions={[{ value: '2021', label: '2021' }, { value: '2022', label: '2022' }]} leftIcon="calendar" />
                    </FormGroup>
                },
                {
                    title: 'UNIDEADES DE LA CALCULADORA',
                    content: 'Estos son los valores base a partir de los cuales la herramienta calcula el valor final.',
                    focus: 'units', list: [
                        { subtitle: 'Unidades', text: 'El nombre de la unidad base, definida legalmente como SALARIO MÍNIMO MENSUAL VIGENTE (SMMV) o UNIDAD DE VALOR TRIBUTARIA (UVT)' },
                        { subtitle: 'Valor', text: 'TEl valor de la unidad base, definido legalmente como 908526 para SMMV o 38004 para UVT' },
                        { subtitle: 'cvi', text: 'El valor base para el cargo variable.' },
                        { subtitle: 'cfi', text: 'El valor base para el cargo fijo.' },
                        { subtitle: 'CV', text: 'El producto de cvi y Valor. Un valor base utilizado en los cálculos.' },
                        { subtitle: 'CF', text: 'El producto de cfi y valor. Un valor base utilizado en los cálculos.' },
                        { subtitle: 'IVA', text: 'El impuesto al valor agregado se agrega a todos los gastos, definido como un porcentaje del cargo total, los cálculos de impuestos no agregan este valor ya que son impuestos en sí mismos.' },
                    ]
                },
                {
                    title: 'CALCULAR',
                    content: 'Este botón procesará los datos de entrada de la calculadora y establecerá los valores de salida.',
                    btn: 'CALCULAR', btnColor: 'primary', btnIcon: 'calculator',
                    focus: 'calculate',
                },
                {
                    title: 'AÑADIR',
                    content: 'Este botón tomará los valores de salida generados por la calculadora y los agregará a la vista previa de la liquidación.',
                    btn: 'AÑADIR', btnColor: 'warning', btnIcon: 'th',
                    focus: 'add',
                },
                {
                    title: 'CALCULADORA DE EXPENSAS FIJAS Y VARIABLES',
                    content: 'Esta herramienta permite estimar los gastos de los procesos de licencia más comunes del equipo.',
                    focus: 'calc', list: [
                        { subtitle: 'Tipo de actuación', text: 'Los principales tipos de actuación derivados de las licencias.' },
                        { subtitle: 'Modalidad', text: 'La modadlidad del tipo de actuación, cada tipo de actuación tiene sus propias modalidades.' },
                        { subtitle: 'Uso', text: 'El uso destinado de la actuación.' },
                        { subtitle: 'Estrato', text: 'El estrato perteneciente al inmueble.' },
                        { subtitle: 'Área', text: 'Área afectada total de la actuación.' },
                        { subtitle: 'Factor Municipal m', text: <>Esta es una constante única presente en el cálculo de expensas, este valor es único para cada equipo y se puede configurar en la <Link to="/dconfig" target="_blank">pagina de configuración</Link>.</> },
                        { subtitle: 'Cargo fijo', text: 'El valor final de CF.' },
                        { subtitle: 'Cargo variable', text: 'El valor final de CV.' },
                        { subtitle: 'Cobro total', text: 'La sumatoria del cargo fijo y cargo variable.' },
                    ]
                },
                {
                    title: 'CALCULADORA DE IMPUESTOS',
                    content: 'This tool will gather all Tax Calculation templates created by the team and will display them as forms. If no templates are found, it will show a message informing about it.',
                    focus: 'tax', list: [
                        { subtitle: 'Plantila de calculo de impuesto', text: 'Esta es una lista que contiene los nombres de todas las plantillas de cálculo de impuestos, al cambiar esta selección cambia la calculadora mostrada.' },
                        { subtitle: 'Impuesto ', text: 'El NOMBRE_PADRE de la plantilla.' },
                        { subtitle: 'Especificación de impuesto', text: 'Los HIJOS de las plantillas.' },
                        { subtitle: 'Área ', text: 'Área afectada la cual sera cobrada el impuesto.' },
                        { subtitle: 'Porcentaje %', text: 'Este es un dato de entrada que puede aparecer o no dependiendo de la configuración de la plantilla.' },
                        { subtitle: 'Multipliador', text: 'Este es el valor final que calculará el cargo total, cambia dependiendo de la configuración de la plantilla.' },
                        { subtitle: 'Redondeo', text: 'Un texto de información, que puede aparecer o no según la configuración de la plantilla.' },
                        { subtitle: 'Valor', text: 'El valor final a gravar en la liquidación.' },
                    ]
                },
                {
                    title: 'VISTA PREVIA DE LIQUIDACIÓN',
                    content: 'Cuando se haya agregado al menos un valor a la vista previa de la liquidación, se mostrará una tabla que agrega todas las expensas en una factura organizada, algunos valores se pueden eliminar de la factura fácilmente presionando el botón rojo al lado de cada entrada.',
                    focus: 'bill', list: [
                        { subtitle: 'Generar CSV', text: 'Este botón recopilará toda la información de la liquidación y generará un archivo CSV (valores separados por comas), que luego se puede abrir con un procesador de hojas de calculo como Excel o LibreOffice.' },
                        { subtitle: 'Generar PDF', text: 'Este botón recopilará toda la información de la liquidación y generará un archivo PDF (formato de documento portátil).' },
                    ]
                },
                {
                    title: 'EXPENSAS QUE NO AUTORIZAN OBRAS',
                    content: 'Esta tabla contiene todos los demás procesos que no se calculan utilizando un área afectada, debido a que no tienen ningún tipo de construcción, por lo que el cargo de este proceso se calcula con una tabla.',
                    focus: 'table',
                },
            ],
        }
    },
    dictioary: {
        en: {
            title: 'DOVELA DICTIONARY',
            dicts: ['LICENSES', 'OTHER PROCESSES', 'IN IDS', 'OUT IDS', 'RESOLUTION IDS', 'CERTIFICATIONS', 'TITULARS', 'PROFESIONALS', 'BUILDINGS', 'SERIES & SUBSERIES', 'TYPOLOGIES'],
            lic_th: ['ID', 'STATE', 'TYPE'],
            oa_th: ['ID', 'STATE', 'TYPE'],
            in_th: ['RELATED ID', 'DESCRIPTION', 'DATE'],
            out_th: ['RELATED ID', 'RELATED PROCESS'],
            res_th: ['RELATED ID', 'STATE', 'TYPE'],
            cert_th: ['ID', 'TYPE', 'DATE', 'RELATED ID'],
            tit_th: ['NAME', 'ID NUMBER', 'EMAIL', 'CONTACT NUMBER', 'LEGAL REP.', 'RELATED IDS'],
            prof_th: ['NAME', 'ID NUMBER', 'EMAIL', 'CONTACT NUMBER', 'REGISTRATION', 'DOCUMENTS', 'RELATED IDS'],
            prof_docs: ['ID DOCUMENT', 'REGISTRATION DOCUMENT', 'VALIDITY DOCUMENT', 'CV & CERTIFICATIONS', 'POSTGRADUATE STUDIES'],
            prev_th: ['ADDRESS', 'REGISTRATION', 'PREDIAL', 'NEW PREDIAL', 'STRATA', 'LOCATION', 'RELATED IDS'],
            ss_th: ['CODE', 'DESCRIPTION'],
            t_th: ['CODE', 'DESCRIPTION'],
            btn_help_tile: 'DOVELA DICTIONARY',
            btn_help_body: 'Dovela dictionary is a tool that gathers all relevant information about all the processes created in the database and organized them in tables separately for an easy way to consult them. Additionally, some tables can generate CSV files for each one',
            HELP_PAGE: [
                {
                    title: 'DOVELA DICTIONARY',
                    content: 'Dovela dictionary is a tool that gathers all relevant information about all the processes created in the database and organized them in tables separately for an easy way to consult them. Additionally, some tables can generate CSV files for each one',
                    focus: 'title',
                },
                {
                    title: 'LICENSES', lefticon: <PageIcon />,
                    content: 'A lists of all the main processes of the team.',
                    focus: 'lic', list: [
                        { subtitle: 'ID', text: 'The number that identifies the process, this is unique for each one.' },
                        { subtitle: 'STATE', text: 'The current state of the process.' },
                        { subtitle: 'TYPE', text: 'A classification for the general mode of the process.' },
                    ]
                },
                {
                    title: 'OTHER PROCESSES', lefticon: <PageIcon />,
                    content: 'A lists of all other processes of the team.',
                    focus: 'oa', list: [
                        { subtitle: 'ID', text: 'The number that identifies the process, this is unique for each one.' },
                        { subtitle: 'STATE', text: 'The current state of the process.' },
                        { subtitle: 'TYPE', text: 'A classification for the general mode of the process.' },
                    ]
                },
                {
                    title: 'IN IDS', lefticon: <TableIcon />,
                    content: 'All entries generated in the Filling both are marked with an unique ID this list gathers all those entries.',
                    focus: 'in', list: [
                        { subtitle: 'ID', text: 'The number that identifies the process, this is unique for each one.' },
                        { subtitle: 'RELATED ID', text: 'The ID of the process that is associated to this entry.' },
                        { subtitle: 'DESCRIPTION', text: 'A description of the process related to the entry. ' },
                        { subtitle: 'DATE', text: 'The moment the entry was submitted to the team, ISO 8601 format (YYYY-MM-DD HH:mm)' },
                    ]
                },
                {
                    title: 'OUT IDS', lefticon: <TableIcon />,
                    content: 'In the course of any process, the action of such result in the creation of exit documents that have to be saved and controlled, with the use of an exit ID that allows the identification of each document separately',
                    focus: 'out', list: [
                        { subtitle: 'ID', text: 'The number that identifies the process, this is unique for each one.' },
                        { subtitle: 'RELATED ID', text: 'The ID of the process that is associated to this entry.' },
                        { subtitle: 'RELATED PROCESS:', text: 'A description of exit document that was associated to the out ID.' },
                    ]
                },
                {
                    title: 'RESOLUTION IDS', lefticon: <TableIcon />,
                    content: 'The final product of any process is a resolution, each one needs to have an unique ID that identifies each one.',
                    focus: 'res', list: [
                        { subtitle: 'ID', text: 'The number that identifies the resolution, this is unique for each one.' },
                        { subtitle: 'STATE', text: 'The current state of the process.' },
                        { subtitle: 'TYPE', text: 'A classification for the general mode of the process.' },
                    ]
                },
                {
                    title: 'CERTIFICATIONS', lefticon: <DocPassIcon />,
                    content: 'Dovela can generate special documents that certify the actions of certain individuals or the validity of the information of certain processes, each one of this can be issued freely at any moment and are identified by a unique ID.',
                    focus: 'res', list: [
                        { subtitle: 'ID', text: 'The number that identifies the resolution, this is unique for each one.' },
                        { subtitle: 'TYPE', text: 'A short description of the certification' },
                        { subtitle: 'DATE', text: 'The moment the entry was submitted to the team, ISO 8601 format (YYYY-MM-DD HH:mm)' },
                        { subtitle: 'RELATED ID', text: 'The ID of the process that is associated to this entry. This ID may or not be present.' },
                    ]
                },
                {
                    title: 'TITULARS', lefticon: <PeoplesIcon />,
                    content: 'Each process is done by titulars, this lists gathers them all in an individual list',
                    focus: 'tit', list: [
                        { subtitle: 'NAME', text: 'The name of the titular.' },
                        { subtitle: 'ID NUMBER', text: 'The number of the legal identification document of the titular.' },
                        { subtitle: 'EMAIL', text: 'Electronic address of the titular.' },
                        { subtitle: 'CONTACT NUMBER', text: 'Phone or mobile number of the titular.' },
                        { subtitle: 'LEGAL REP.', text: 'In case the titular is a judicial individual, this marks the name of the person that is legally representing the titular.' },
                        { subtitle: 'RELATED IDS', text: 'All the different processes this titular has been part of.' },
                    ]
                },
                {
                    title: 'PROFESSIONALS', lefticon: <PeoplesIcon />,
                    content: 'On each process there are professionals involve, this lists gathers them all in an individual list',
                    focus: 'prof', list: [
                        { subtitle: 'NAME', text: 'The name of the professional.' },
                        { subtitle: 'ID NUMBER', text: 'The number of the legal identification document of the professional.' },
                        { subtitle: 'EMAIL', text: 'Electronic address of the professional.' },
                        { subtitle: 'CONTACT NUMBER', text: 'Phone or mobile number of the professional.' },
                        { subtitle: 'REGISTRATION.', text: 'The identifier of the professional registration of the professional.' },
                        { subtitle: 'DOCUMENTS.', text: 'In case the documents have been uploaded to the system, this shows a quick access to them.' },
                        { subtitle: 'RELATED IDS', text: 'All the different processes this professional has been part of.' },
                    ]
                },
                {
                    title: 'BUILDINGS', lefticon: <HomeIcon />,
                    content: 'On each process there is a building intervened, this lists gathers them all in an individual list',
                    focus: 'prev', list: [
                        { subtitle: 'ADDRESS', text: 'The local address of the building.' },
                        { subtitle: 'REGISTRATION', text: 'The registration number identifier.' },
                        { subtitle: 'PREDIAL', text: 'The predial number identifier.' },
                        { subtitle: 'NEW PREDIAL', text: 'The new version of the predal number identifier.' },
                        { subtitle: 'STRATA.', text: 'The social strata of the building.' },
                        { subtitle: 'LOCATION.', text: 'The neighbor of the building.' },
                        { subtitle: 'RELATED IDS', text: 'All the different processes this building has been part of.' },
                    ]
                },
                {
                    title: 'SERIES & SUBSERIES', lefticon: <TagIcon />,
                    content: 'In order to identified each process, Dovela assigns each one an unique SERIE code and SUBSERIE code. This list gathers them all.',
                    focus: 'ss', list: [
                        { subtitle: 'CODE', text: 'The unique identifier of the SERIES or SUBSERIE.' },
                        { subtitle: 'DESCRIPTION', text: 'The description of what the code identifies.' },

                    ]
                },
                {
                    title: 'TYPOLOGIES', lefticon: <TagIcon />,
                    content: 'In order to properly manage the processes of the team, Dovela needs to identify all incoming documents of each process, it does this by providing each document a TYPOLOGY code, this is the list of all codes.',
                    focus: 't', list: [
                        { subtitle: 'CODE', text: 'The unique identifier of the TYPOLOGY ciode.' },
                        { subtitle: 'DESCRIPTION', text: 'The document of what the code refers to.' },

                    ]
                },
            ],
        },
        es: {
            title: 'DICCIONARIO DE DOVELA',
            dicts: ['LICENCIAS', 'OTRAS ACTUACIONES', 'CONSECUTIVOS DE ENTRADA', 'CONSECUTIVOS DE SALIDA', 'CONSECUTIVOS DE RESOLUCIONES', 'CERTIFICACIONES', 'TITULARES', 'PROFESIONALES', 'PREVIOS', 'SERIES & SUBSERIES', 'TIPOLOGIA DOCUMENTAL'],
            lic_th: ['Nr. RADICADO', 'ESTADO', 'TIPO'],
            oa_th: ['Nr. RADICADO', 'ESTADO', 'TIPO'],
            in_th: ['CONSECUTIVO RELACIONADO', 'DESCRIPCIÓN', 'FECHA'],
            out_th: ['CONSECUTIVO RELACIONADO', 'PROCESO RELACIONADO'],
            res_th: ['CONSECUTIVO RELACIONADO', 'ESTADO', 'TIPO'],
            cert_th: ['CONSECUTIVO', 'TIPO', 'FECHA', 'CONSECUTIVO RELACIONADO'],
            tit_th: ['NOMBRE', 'NÚMERO DOCUMENTO', 'CORREO EKECTRÓNICO', 'NÚMERO DE CONTACTO', 'REPRESENTANTE LEGAL', 'CONSECUTIVOS RELACIONADOS'],
            prof_th: ['NOMBRE', 'NÚMERO DOCUMENTO', 'CORREO EKECTRÓNICO', 'NÚMERO DE CONTACTO', 'MATRÍCULA', 'DOCUMENTOS', 'CONSECUTIVOS RELACIONADOS'],
            prof_docs: ['DOCUMENTO LEGAL DE IDENTIFICACIÓN', 'MATRICULAR', 'VIGENCIA', 'HOJA DE VIDA Y CERTIFICACIONES','ESTUDIOS DE POSTGRADO'],
            prev_th: ['ADDRESS', 'MATRÍCULA', 'NÚMERO PREDIAL', 'NUEVO PREDIAL', 'ESTRATO', 'BARRIO', 'CONSECUTIVOS RELACIONADOS'],
            ss_th: ['CÓDIGO', 'DESCRIPCIÓN'],
            t_th: ['CÓDIGO', 'DESCRIPCIÓN'],
            btn_help_tile: 'DICCIONARIO DE DOVELA',
            btn_help_body: 'El diccionario Dovela es una herramienta que recopila toda la información relevante sobre todos los procesos creados en la base de datos y los organiza en tablas por separado para facilitar su consulta. Además, algunas tablas pueden generar archivos CSV para cada una.',
            HELP_PAGE: [
                {
                    title: 'DICCIONARIO DOVELA', lefticon: <PageIcon />,
                    content: 'El diccionario Dovela es una herramienta que recopila toda la información relevante sobre todos los procesos creados en la base de datos y los organiza en tablas por separado para facilitar su consulta. Además, algunas tablas pueden generar archivos CSV para cada una.',
                    focus: 'title',
                },
                {
                    title: 'LICENCIAS', lefticon: <PageIcon />,
                    content: 'Una lista de todos las actuaciones principales del equipo.',
                    focus: 'lic', list: [
                        { subtitle: 'Nr. RADICADO', text: 'El número que identifica el proceso, este es único para cada uno.' },
                        { subtitle: 'ESTADO', text: 'El estado actual del proceso.' },
                        { subtitle: 'TIPO', text: 'Una clasificación para la modalidad del proceso.' },
                    ]
                },
                {
                    title: 'OTRAS ACTUACIONES', lefticon: <PageIcon />,
                    content: 'Una lista de todos los demás actuacioned del equipo.',
                    focus: 'oa', list: [
                        { subtitle: 'Nr. RADICADO', text: 'El número que identifica el proceso, este es único para cada uno.' },
                        { subtitle: 'ESTADO', text: 'El estado actual del proceso.' },
                        { subtitle: 'TIPO', text: 'Una clasificación para la modalidad del proceso.' },
                    ]
                },
                {
                    title: 'CONSECUTIVOS DE ENTRADA', lefticon: <TableIcon />,
                    content: 'Todas las entradas generadas en la ventanilla única de radicación están marcadas con una identificación única, esta lista reúne todas esas entradas.',
                    focus: 'in', list: [
                        { subtitle: 'Nr. RADICADO', text: 'El número que identifica el proceso, este es único para cada uno.' },
                        { subtitle: 'CONSECUTIVO RELACIONADO', text: 'El consecutivo del proceso que está asociado a esta entrada.' },
                        { subtitle: 'DESCRIPCIÓN', text: 'A description of the process related to the entry. ' },
                        { subtitle: 'FECHA', text: 'El momento en que se envió la entrada al sistema, formato ISO 8601 (AAAA-MM-DD HH:mm)' },
                    ]
                },
                {
                    title: 'CONSECUTIVOS DE SALIDA', lefticon: <TableIcon />,
                    content: 'En el curso de cualquier actuación, la acción de tal resulta en la creación de documentos de salida que deben ser guardados y controlados, con el uso de un consecutivo de salida que permite la identificación de cada documento por separado.',
                    focus: 'out', list: [
                        { subtitle: 'Nr. RADICADO', text: 'El número que identifica el proceso, este es único para cada uno.' },
                        { subtitle: 'CONSECUTIVO RELACIONADO', text: 'El consecutivo del proceso que está asociado a esta entrada.' },
                        { subtitle: 'PROCESO RELACIONADO', text: 'Una descripción del documento de salida que se asoció al consecutivo de salida.' },
                    ]
                },
                {
                    title: 'CONSECUTIVOS DE RESOLUCIONES', lefticon: <TableIcon />,
                    content: 'El producto final de cualquier actuación es una resolución, cada una necesita tener una identificación única que identifique a cada uno.',
                    focus: 'res', list: [
                        { subtitle: 'Nr. RADICADO', text: 'El número que identifica el proceso, este es único para cada uno.' },
                        { subtitle: 'ESTADO', text: 'El estado actual del proceso.' },
                        { subtitle: 'TIPO', text: 'Una clasificación para la modalidad del proceso.' },
                    ]
                },
                {
                    title: 'CERTIFICACIONES', lefticon: <DocPassIcon />,
                    content: 'Dovela puede generar documentos especiales que certifican las actuaciones de determinadas personas o la vigencia de la información de determinadas actuaciones, cada uno de estos puede emitirse libremente en cualquier momento y se identifican mediante una identificación única.',
                    focus: 'res', list: [
                        { subtitle: 'Nr. RADICADO', text: 'El número que identifica el proceso, este es único para cada uno.' },
                        { subtitle: 'TIPO', text: 'Una corta descripción de la certificación.' },
                        { subtitle: 'FECHA', text: 'El momento en que se envió la entrada al sistema, formato ISO 8601 (AAAA-MM-DD HH:mm)' },
                        { subtitle: 'CONSECUTIVO RELACIONADO', text: 'El consecutivo del proceso que está asociado a esta entrada. Este valor puede o no estar presente.' },
                    ]
                },
                {
                    title: 'TITULARES', lefticon: <PeoplesIcon />,
                    content: 'Cada actuación lo hacen los titulares, esta lista los reúne a todos en una lista individual.',
                    focus: 'tit', list: [
                        { subtitle: 'NOMBRE', text: 'El nombre del titular.' },
                        { subtitle: 'NÚMERO DOCUMENTO', text: 'El número del documento legal de identificación del titular.' },
                        { subtitle: 'CORREO EKECTRÓNICO', text: 'Dirección electrónica del titular.' },
                        { subtitle: 'NÚMERO DE CONTACTO', text: 'Número de teléfono o móvil del titular.' },
                        { subtitle: 'REPRESENTANTE LEGAL.', text: 'En caso de que el titular sea persona física jurídica, se marca el nombre de la persona que lo representa legalmente.' },
                        { subtitle: 'CONSECUTIVOS RELACIONADOS', text: 'Los consecutivos del proceso que está asociado a esta entrada.' },
                    ]
                },
                {
                    title: 'PROFESIONALES', lefticon: <PeoplesIcon />,
                    content: 'En cada actuación intervienen profesionales, esta lista los reúne a todos en una lista individual.',
                    focus: 'prof', list: [
                        { subtitle: 'NOMBRE', text: 'El nombre del profesional.' },
                        { subtitle: 'NÚMERO DOCUMENTO', text: 'El número del documento legal de identificación del profesional.' },
                        { subtitle: 'CORREO EKECTRÓNICO', text: 'Dirección electrónica del profesional.' },
                        { subtitle: 'NÚMERO DE CONTACTO', text: 'Número de teléfono o móvil del profesional.' },
                        { subtitle: 'MATRÍCULA.', text: 'El identificador del la matrícula profesional del profesional.' },
                        { subtitle: 'DOCUMENTOS.', text: 'En caso de que los documentos hayan sido subidos al sistema, este muestra un acceso rápido a los mismos.' },
                        { subtitle: 'CONSECUTIVOS RELACIONADOS', text: 'Los consecutivos del proceso que está asociado a esta entrada.' },
                    ]
                },
                {
                    title: 'PREVIOS', lefticon: <HomeIcon />,
                    content: 'En cada actuación hay un inmueble intervenido, esta lista los reúne a todos en una lista individual.',
                    focus: 'prev', list: [
                        { subtitle: 'DIRECCIÓN', text: 'La dirección local del inmueble.' },
                        { subtitle: 'MATRÍCULA', text: 'TEl identificador del número de inmueble.' },
                        { subtitle: 'NÚMERO PREDIAL', text: 'El identificador del número predial.' },
                        { subtitle: 'NUEVO PREDIAL', text: 'La nueva version del número predial.' },
                        { subtitle: 'ESTRATO.', text: 'El estrato del inmueble.' },
                        { subtitle: 'BARRIO.', text: 'El barrio donde se encuentra el inmueble.' },
                        { subtitle: 'CONCECUTIVOS RELACIONADOS', text: 'Los consecutivos del proceso que está asociado a esta entrada.' },
                    ]
                },
                {
                    title: 'SERIES & SUBSERIES', lefticon: <TagIcon />,
                    content: 'Para identificar cada actuación, Dovela asigna a cada una un código único de SERIE y un código SUBSERIE. Esta lista los reúne a todos.',
                    focus: 'ss', list: [
                        { subtitle: 'CÓDIGO', text: 'El identificador único de la SERIE o SUBSERIE.' },
                        { subtitle: 'DESCRIPCIÓN', text: 'La descripción de lo que identifica el código.' },

                    ]
                },
                {
                    title: 'TIPOLOGIA DOCUMENTAL', lefticon: <TagIcon />,
                    content: 'Para administrar adecuadamente las actuaciones del equipo, Dovela necesita identificar todos los documentos entrantes de cada actuación, lo hace proporcionando a cada documento un código de TIPOLOGÍA, esta es la lista de todos los códigos.',
                    focus: 't', list: [
                        { subtitle: 'CÓDIGO', text: 'El identificador único del código de TIPOLOGÍA.' },
                        { subtitle: 'DESCRIPCIÓN', text: 'El documento a que se refiere el código.' },

                    ]
                },
            ],
        }

    },
    dcerts: {
        en: {
            title: 'DOVELA CERTIFICACIONS',
            tableHd: 'CERTIFICACTIONS LIST',
            tableCl: ['ID', 'DESCRIPTION', 'DATE', 'RELATED ID', 'ACTION'],
            certHd_1: ['NAME', 'DOCUMENT ID', 'REGISTRATION'],
            certCl_1: ['RELATED ID', 'MODE', 'START DATE', 'END DATE', 'ROLE'],
            cert_2: ['RELATED ID', 'MODE', 'PROCESS STATE', 'ADDRESS', 'CITY', 'STATE', 'REGISTRATION', 'PREDIAL', 'NEW PREDIAL', 'ANSERABLE', 'DOCUMENT ID', 'ROLE'],
            newCert: 'NEW CERTIFICATION',
            newCertTh: ['PROFFESIOANL CERTIFICATION', 'URBAN PROCESS CERTIFICATION'],
            profInfo: 'To generate a new proffesional certification input the name of the proffesional or their identification number in order to find all information about their works in the team.',
            funInfo: 'To generate an new urban process certification input the full ID of the urban process to find information abot it.',
            btn_help_tile: 'DOVELA CERTIFICACIONS',
            btn_help_body: 'Dovela can generate special documents that certify the actions of certain individuals or the validity of the information of certain processes, each one of this can be issued freely at any moment and are identified by a unique ID. Dovela can generate Professional Certifications, for professionals that have worked in any urban process and Urban Process Certifications for each process.',
            HELP_PAGE: [
                {
                    title: 'CERTIFICACTIONS LIST',
                    content: 'This list tracks all the certifications generated in the system.',
                    focus: 'title', list: [
                        { subtitle: 'ID', text: 'Unique identifier of each certificaction.' },
                        { subtitle: 'DESCRIPTION', text: 'A short description of the certification.' },
                        { subtitle: 'DATE', text: 'Time and moment it was issued, ISO 8601 format (YYYY-MM-DD HH:mm)' },
                        { subtitle: 'RELATED ID', text: 'In case this is a certification of an urban process, this identified the unique ID of the process.' },
                        { subtitle: 'ACTION', text: 'Allows to generate a PDF copy of the certification.' },
                    ]
                },
                _new('en', 'This button opens a new subwindow with a filling form which allows creation of a new certification.'),
                _searchBar('en', 'CERTIFICACTIONS LIST', ['ID', 'DESCRIPTION', 'DATE', 'RELATED ID']),
                {
                    title: 'PROFESSIONAL CERTIFICATION', lefticon: <MemberIcon />,
                    content: 'This is a certification for a professional  that has worked in any urban process. It lists the following:',
                    focus: 'title', list: [
                        { subtitle: 'NAME', text: 'Name of the professional.' },
                        { subtitle: 'DOCUMENT ID', text: 'Number of the identification document.' },
                        { subtitle: 'REGISTRATION', text: 'Number of the professional  registration.' },
                        { subtitle: 'RELATED ID', text: 'A lists of various processes IDS in which the professional  was part of.' },
                        { subtitle: 'MODE', text: 'The type of process.' },
                        { subtitle: 'START DATE', text: 'The moment the process started.' },
                        { subtitle: 'END DATE', text: 'The moment the process finished, if no present may indicate the process is still ongoing.' },
                        { subtitle: 'ROLE', text: 'The role in which the professional acted.' },
                    ]
                },
                {
                    title: 'URBAN PROCESS CERTIFICATION', lefticon: <TagIcon />,
                    content: 'This is a certification for each individual process of the team, it brings basic information about the process and the current state, it lists the following:',
                    focus: 'title', list: [
                        { subtitle: 'RELATED ID', text: 'The identifier ID of the process.' },
                        { subtitle: 'MODE', text: 'The type of process.' },
                        { subtitle: 'PROCESS STATE', text: 'The state in which the process was AT THE MOMENT of issuing the certification.' },
                        { subtitle: 'ADDRESS', text: 'The address of the buildings the process is taking in.' },
                        { subtitle: 'CITY', text: 'The city in which the building is located.' },
                        { subtitle: 'STATE', text: 'The state or county in which the building is located.' },
                        { subtitle: 'REGISTRATION', text: "Number of the building's registration." },
                        { subtitle: 'PREDIAL', text: "Number of the building's predial." },
                        { subtitle: 'NEW PREDIAL', text: 'The new predial number for the building.' },
                        { subtitle: 'ANSERABLE', text: 'The person that is taking responsibility for the process.' },
                        { subtitle: 'DOCUMENT ID', text: 'The number of the identifier document of the  answerable.' },
                        { subtitle: 'ROLE', text: 'The role the  answerable is acting on the process.' },
                    ]
                },
            ],
        },
        es: {
            title: 'CERTIFICACIÓNES DE DOVELA',
            tableHd: 'LISTADO DE CERTIFICACIONES',
            tableCl: ['CONSECUTIVO', 'DESCRIPCCIÓN', 'FECHA', 'CONSECUTIVO RELACIONADO', 'ACCIÓN'],
            certHd_1: ['NOMBRE', 'DOCUMENTO IDENTIFICADOR', 'MATRÍCULA PROFESIONAL'],
            certCl_1: ['CONSECUTIVO RELACIONADO', 'MODALIDAD', 'FECHA RADICACIÓN', 'FECHA EXPEDICIÓN', 'EN CALIDAD DE:'],
            cert_2: ['CONSECUTIVO RELACIONADO', 'MODALIDAD', 'ESTADO', 'DICERCCIÓN', 'CIUDAD', 'DEPARTAMENTO', 'MATRÍCULA', 'PREDIAL', 'NUEVO PREDIAL', 'RESPONSABLE', 'DOCUMENTO IDENTIFICADOR', 'ROL'],
            newCert: 'NUEVA CERTIFICACIÓN',
            newCertTh: ['CERTIFICACIÓN PROFESIONAL', 'CERTIFICACIÓN ACTUACIÓN URBANÍSTICA'],
            profInfo: 'Para generar una nueva certificación profesional ingrese el nombre o el número de documento de identificación del profesional para encontrar información sobre sus actuaciones en la organización.',
            funInfo: 'Para generar ua nueva certificación de actuación urbanística ingrese el número completo de radicado de la actuación urbanística para encontrar información sobre esta.',
            btn_help_tile: 'CERTIFICACIÓNES DE DOVELA',
            btn_help_body: 'Dovela puede generar documentos especiales que certifican las acciones de ciertos individuos o la vigencia de la información de ciertos procesos, cada uno de estos puede ser emitido libremente en cualquier momento y son identificados por una identificación única. Dovela puede generar Certificaciones Profesionales, para profesionales que hayan trabajado en algún proceso urbanístico y Certificaciones de Proceso Urbano para cada proceso.',
            HELP_PAGE: [
                {
                    title: 'LISTADO DE CERTIFICACIONES',
                    content: 'Esta lista rastrea todas las certificaciones generadas en el sistema.',
                    focus: 'title', list: [
                        { subtitle: 'CONSECUTIVO', text: 'Identificador único de la certificación.' },
                        { subtitle: 'DESCRIPCCIÓN', text: 'Descripción corte de la certificación.' },
                        { subtitle: 'FECHA', text: 'Hora y momento en que se emitió, formato ISO 8601  (AAAA-MM-DD HH:mm)' },
                        { subtitle: 'CONSECUTIVO RELACIONADO', text: 'En caso de que se trate de una certificación de la actuación urbanístico, este identificará el ID único de la actuación.' },
                        { subtitle: 'ACCIÓN', text: 'Crea una copia en PDF de la certificación.' },
                    ]
                },
                _new('es', 'Este botón abre una nueva subventana con un formulario de llenado que permite la creación de una nueva certificación.'),
                _searchBar('es', 'LISTADO DE CERTIFICACIONES', ['CONSECUTIVO', 'DESCRIPCCIÓN', 'FECHA', 'CONSECUTIVO RELACIONADO']),
                {
                    title: 'CERTIFICACIÓN PROFESIONAL', lefticon: <MemberIcon />,
                    content: 'This is a certification for a professional  that has worked in any urban process. It lists the following:',
                    focus: 'title', list: [
                        { subtitle: 'NOMBRE', text: 'Nombre del profesional.' },
                        { subtitle: 'DOCUMENTO IDENTIFICADOR', text: 'Número del documento de identificación.' },
                        { subtitle: 'MATRÍCULA PROFESIONAL', text: 'Número de la matrícula profesional.' },
                        { subtitle: 'CONSECUTIVO RELACIONADO', text: 'Una lista de varios radicados de actuaciaciónes urbanisticas en los que el profesional formó parte.' },
                        { subtitle: 'MODALIDAD', text: 'El tipo de la actuación.' },
                        { subtitle: 'FECHA RADICACIÓN', text: 'El momento en que comenzó el proceso.' },
                        { subtitle: 'FECHA EXPEDICIÓN', text: 'El momento en que finalizó el proceso, si no está presente, puede indicar que el proceso aún está en curso.' },
                        { subtitle: 'EN CALIDAD DE', text: 'El rol en el que actuó el profesional.' },
                    ]
                },
                {
                    title: 'CERTIFICACIÓN ACTUACIÓN URBANÍSTICA', lefticon: <TagIcon />,
                    content: 'This is a certification for each individual process of the team, it brings basic information about the process and the current state, it lists the following:',
                    focus: 'title', list: [
                        { subtitle: 'CONSECUTIVO RELACIONADO', text: 'El número de radicado de la actuación.' },
                        { subtitle: 'MODALIDAD', text: 'El tipo de actuación.' },
                        { subtitle: 'ESTADO', text: 'El estado en que se encontraba la actuación AL MOMENTO de emitir la certificación.' },
                        { subtitle: 'DICERCCIÓN', text: 'La dirección de inmueble.' },
                        { subtitle: 'CIUDAD', text: 'La cidad donde se encuentra localizado el inmueble.' },
                        { subtitle: 'DEPARTAMENTO', text: 'El departamento donde se encuentra localizado el inmueble.' },
                        { subtitle: 'MATRÍCULA', text: "Número de matriula del inmueble." },
                        { subtitle: 'PREDIAL', text: "Número predial del inmueble." },
                        { subtitle: 'NUEVO PREDIAL', text: 'El nuevo número de predial del inmueble.' },
                        { subtitle: 'RESPONSABLE', text: 'El responsable de la actuación.' },
                        { subtitle: 'DOCUMENTO IDENTIFICADOR', text: 'El documento identificador del responsable' },
                        { subtitle: 'ROL', text: 'El rol que actual el responsable en la actuaión.' },
                    ]
                },
            ],
        }
    },
    dfun: {
        en: {
            title: 'FILL LIENCESE',
            tabs: ['Incomplete', 'Reviewing', 'Issuing', 'Other processes', 'Desisting', 'Archived'],
            th: ['ID', 'TAGS', 'MODE', 'PROGRESS %', 'ACTION'],
            th_inc: ['FILL DATE', 'LIMITE DATE', 'TIME', 'PROGRESS'],
            th_ldf: ['SUBMIT DATE', 'PROGRESS'],
            th_exp: ['VIABLE DATE', 'PROGRESS'],
            th_oa: ['FILL DATE', 'SUBMIT DATE', 'TIME', 'PROGRESS'],
            th_neg: [],
            th_lic: ['STATE', 'PROGRESS'],
        },
        es: {
            title: 'RADICACIÓN DE LICENCIAS',
            tabs: ['Incompleto', 'Evaluación', 'Expedición', 'Otras actuaciónes', 'Desistiendo', 'Archivado'],
            th: ['CONSECUTIVO', 'TAGS', 'MODALIDAD', 'PROGRECIÓN %', 'ACCIÓN'],
            th_inc: ['FECHA RADICACIÓN', 'FECHA LIMITE LDF', 'TIEMPO', 'PROGRECIÓN'],
            th_ldf: ['FECHA RADICACIÓN', 'PROGRECIÓN'],
            th_exp: ['FECHA VIABILIDAD', 'PROGRECIÓN'],
            th_oa: ['FECHA RADICACIÓN', 'FECHA LDF', 'TIEMPO', 'PROGRECIÓN'],
            th_neg: [],
            th_lic: ['ESTADO', 'PROGRECIÓN'],
        },
    },
}

