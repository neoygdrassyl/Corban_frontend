import { Icon } from '@blueprintjs/core';
import { FaCheck, FaTimes, FaEdit } from 'react-icons/fa'
import { RiDeleteBinLine } from "react-icons/ri";


export let translations = {
    // ******************** LAYOUT ************************ // 

    topBar: {
        en: {
            home: 'HOME',
            bedrock: 'BEDROCK',
            lang: 'LANGUAGE',
            log: 'LOG IN',
            lout: 'LOG OUT',
            dash: 'DASHBOARD',
            theme: 'MODE',
            t_dark: 'Dark Mode',
            t_light: 'Light Mode',
            t_contrast: 'Hight Constrast Mode',
        },
        es: {
            home: 'INICIO',
            bedrock: 'BEDROCK',
            lang: 'IDIOMA',
            log: 'INICIAR SESIÓN',
            lout: 'CERRAR SESIÓN',
            dash: 'PANEL GENERAL',
            theme: 'TEMAS',
            t_dark: 'Tema Oscuro',
            t_light: 'Tema Claro',
            t_contrast: 'Alto Contraste',
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
            columns:[ 'CODE', 'DOCUMENT', 'ACTION'],
        },
        es: {
            click: 'Dar click para mas información...',
            close: 'CERRAR',
            about: 'ACERCA DE: ',
            title: 'COPIAR DOCUMENTO A FORMULARIO',
            whisper: 'Copiar documento',
            datatable: 'LISTA DE DOCUMENTOS',
            columns:[ 'CÓDIGO', 'DOCUMENTO', 'ACCIÓN'],
        }
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
        },
        es: {
            req: 'REQUERIDO',
        }
    },


    // ******************** PAGES ************************ // 
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
            categories : ['FILLING BOOTH FORM', 'DOCUMENT LIST', 'DIGITAL ANEX AND RECIPE'],
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
            FORM_INFO_BTN : ['FILLING BOOTH: FORM', 'This form contains all the information needed for an entry to be created'],
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
                { label: 'Associated ID', placeholder: 'Process number', rightBtnLabel:[ 'Verifiy assoiated ID', 'Generate next ID'], },
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
            FORM_DOCUMENT_TABLE : ['DOCUMENT', 'TIPOLOGY', 'PAGES', 'PROVIDED', 'LIST TITLE: ', 'NEW LIST: ', 'List name', 'Document name',  ],
            FORM_DOCUMENT_BTNS : ['UPDATE LIST', 'SAVE LIST', 'DELETE LIST', 'REMOVE LAST', 'NEW ITEM', 'NEW LIST', 'ADD LIST' ],
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
            categories : ['RADICACIÓN VENTANILLA ÚNICA', 'LISTA DE DOCUMENTOS', 'ANEXO DIGITAL Y CERTIFICACIONES DE ENTREGA'],
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
            FORM_INFO_BTN : ['MODULO DE GESTIÓN DE VENTANILLA ÚNICA DE RADICACIÓN: FORMULARIO', 'Este formulario contiene toda la inforacion necesaria para cada entrada de la ventanilla única.'],
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
            FORM_DOCUMENT_TABLE : ['DOCUMENTO', 'TIPOLOGÍA', 'FOLIOS', 'APORTO', 'TITULO LISTA: ', 'NUEVA LISTA: ', 'Nombre lista', 'Nombre documento', ],
            FORM_DOCUMENT_BTNS : ['ACTUALIZAR LISTA', 'GUARDAR LISTA', 'ELIMINAR LISTA', 'REMOVER ULTIMO', 'NUEVO ITEM', 'NUEVA LISTA', 'AÑADIR LISTA' ],
            LIST_HELP: [
                {
                    title: 'MODULO DE GESTIÓN DE VENTANILLA ÚNICA DE RADICACIÓN: NUEVA ENTRADA',
                    content: 'Esta ventana permite crear una nueva entrada en este módulo, todos los documentos que ingreses a la entidad deben ser registrados en este módulo, antes de especificar los documento que ingresaran se debe crear la entrada que contendrá la información inicial del evento de ingreso de documentos.',
                    focus: 'title',
                },
            ],
        }
    }
}