import React from 'react'
import { Button, Icon, InputGroup } from '@blueprintjs/core';
import { FaCheck, FaTimes, FaEdit } from 'react-icons/fa'
import { RiDeleteBinLine } from "react-icons/ri";
import { Col, Grid, Panel, PanelGroup, Row } from 'rsuite';


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
        },
        es: {
            btn: 'GENERAR PDF',
        }
    },
    btns: {
        en: {
            save: 'SAVE',
            new: 'NEW',
            edit: 'EDIT',
            delete: 'DELETE',
            add : 'ADD',
            remove: 'REMOVE',
            removelast: 'REMOVE LAST',
            details: 'DETAILS',
            view: 'VIEW',    
        },
        es: {
            save: 'GUARDAR',
            new: 'NUEVO',
            edit: 'EDITAR',
            delete: 'ELIMINAR',
            add : 'AÑADIR',
            remove: 'REMOVER',
            removelast: 'REMOVER ULTIMO',
            details: 'DETALLES',
            view: 'VER',    
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
            uploader: 'Click or drag files to this area to upload',
            limitFile: 'Max files',
            limiSize: 'Max size',
            fileName: 'File name',
        },
        es: {
            req: 'REQUERIDO',
            uploader: 'Click o arrastre archivos a esta area para subirlos',
            limitFile: 'Archivos máximos',
            limiSize: 'Tamaño máximos',
            fileName: 'Nombre archivo',
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
            INFO_CERT_HELP : [
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
                    <p>Once the document is online, use the button <Button icon={'document-open'} intent={'primary'} /> or <Button icon={'media'} intent={'primary' } /> to see more details of the document.</p>
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
            INFO_CERT_HELP : [
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
    }
}