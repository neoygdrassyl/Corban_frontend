import React, { useContext } from 'react';
import { Button, Dropdown, Popover, Row, Whisper } from 'rsuite';
import { Search, Edit, Attachment, Page, CheckOutline, CloseOutline, Time, Gear, PeopleSpeaker } from '@rsuite/icons/';
import TABLE_COMPONENT from '../../../resources/customs/components/table.component';
import { CATEGORY, CATEGORY_DAYS_ASIGN, CATEGORY_DAYS_REVIEW, formsParser1, regexChecker_isPh, STATE } from '../../../resources/customs/utils/funParser.module';
import { dateParser_finalDate, dateParser_timeLeft } from '../../../resources/customs/utils/utilsParse.module';
import { CurrentItemConext } from '../fun.page'

function useCurrentItems() { return useContext(CurrentItemConext); }

export default function FUN_MACRO_TABLE(props) {
  const CurrentItems = useCurrentItems();
  const tabs = CurrentItems.currentTabs
  const JurBgColor = 'LemonChiffon';
  const ArqBgColor = 'LightCyan';
  const EngBgColor = 'LavenderBlush';
  const HeaderBgColor = '#3498ff';
  const SubModulesNames = { 'gen': "DETALLES", 'edit': 'ACTUALIZAR', 'clock': 'TIEMPOS', 'docs': 'DOCUMENTOS', 'check': 'CHECKEO', 'negative': 'DESISTIMIENTO', 'ph': 'INF. PH.', 'law': 'INF. JUR.', 'arq': 'INF. ARQ.', 'est': 'INF. EST.', 'acta': 'ACTA', 'exp': 'EXPEDICION', 'sign': 'PUBLICIDAD' }
  const SubModulesIcons = { 'gen': <Search />, 'edit': <Edit />, 'clock': <Time />, 'docs': <Attachment />, 'check': <CheckOutline />, 'negative': <CloseOutline />, 'ph': <Page />, 'law': <Page />, 'arq': <Page />, 'est': <Page />, 'acta': <Page />, 'exp': <Page />, 'sign': <PeopleSpeaker/> }
  const speaker = (_string) => (
    <Popover title="TIPO DE SOLICITUD">
      {_string}
    </Popover>
  );
  const subModuleSelect = (row) => {
    const isPH = regexChecker_isPh(row, true)
    const handleSelect = eventKey => {
      const newTab = {
        eventKey: `${eventKey}:${row.id}`,
        label: `${SubModulesNames[eventKey]}: ${row.id_public}`,
        icon: SubModulesIcons[eventKey],
        close: true,
        id: row.id,
        item: row,
        to: `fun/${eventKey}/${row.id}`,
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
    return <Popover full>
      <Dropdown.Menu title="submodules" onSelect={handleSelect} icon={<Page />}>
        <Dropdown.Item icon={<Search />} eventKey={'gen'}> DETALLES</Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item icon={<Edit />} eventKey={'edit'}> ACTUALIZAR</Dropdown.Item>
        <Dropdown.Item icon={<Time />} eventKey={'clock'}> TIEMPOS</Dropdown.Item>
        <Dropdown.Item icon={<Attachment />} eventKey={'docs'}> DOCUMENTOS</Dropdown.Item>
        {isPH
        ? ''
        :  <Dropdown.Item icon={<PeopleSpeaker />} eventKey={'sign'}>  PUBLICIDAD</Dropdown.Item>}
        <Dropdown.Item icon={<CheckOutline />} eventKey={'check'}>  CHECKEO</Dropdown.Item>
        <Dropdown.Item icon={<CloseOutline />} eventKey={'negative'}>   DESISITMIENTOS</Dropdown.Item>
        <Dropdown.Item divider />
        {isPH
          ? <Dropdown.Item icon={<Page />} eventKey={'ph'}> INF. PH.</Dropdown.Item>
          : <>
            <Dropdown.Item icon={<Page />} eventKey={'law'}> INF. JUR.</Dropdown.Item>
            <Dropdown.Item icon={<Page />} eventKey={'arq'}> INF. ARQ.</Dropdown.Item>
            <Dropdown.Item icon={<Page />} eventKey={'est'}> INF. EST.</Dropdown.Item>
            <Dropdown.Item icon={<Page />} eventKey={'acta'}> ACTA</Dropdown.Item>
            <Dropdown.Item icon={<Page />} eventKey={'exp'}> EXPEDICION</Dropdown.Item>
          </>}

      </Dropdown.Menu>
    </Popover>
  };
  //DATA CONVERTERS
  let _GET_REVIEW_LAW = (_REVIEW) => {
    if (_REVIEW == null) return <label className="">SIN EVALUAR</label>
    if (_REVIEW == 0) return <label className="fw-b text-danger">NO VIABLE</label>
    if (_REVIEW == 1) return <label className="fw-b text-success">VIABLE</label>
  }
  let GET_REVIEW_ENG = (_REVIEW) => {
    if (_REVIEW == null) return <label className=""> - </label>
    if (_REVIEW == 0) return <label className="fw-b text-danger">NO</label>
    if (_REVIEW == 1) return <label className="fw-b text-success">SI</label>
    if (_REVIEW == 2) return <label className="fw-b text-warning">N/A</label>
  }
  // COLUMNS FOR TABLES
  var columns = [{
    key: 'id_public',
    label: '# RADICACION',
    align: "center",
    fixed: true,
    sortable: true,
    columnSize: 'lg',
    bgColor: HeaderBgColor,
    hint: "El numero de Radicado o concecutivo de la Solicitud",
    hintTitle: 'NUMERO DE RADICACION',
    cellData: row => <label>{row.id_public}</label>
  },
  {
    key: '',
    label: 'ACCION',
    align: "center",
    fixed: true,
    sortable: false,
    columnSize: 'sm',
    bgColor: HeaderBgColor,
    hint: "Permite acceder a los submodulos de la solicitud",
    hintTitle: 'BOTON DE ACCION',
    cellStyle: { paddingLeft: 1, paddingTop: 5, margin: 0 },
    cellData: row => <Whisper placement="rightStart" trigger="click" speaker={subModuleSelect(row)} >
      <Button size="xs" color="blue" appearance="ghost" >{<Gear />} ACCION</Button>
    </Whisper>
  },
  {
    key: 'tipo',
    label: 'TIPO DE SOLICITUD',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'xl',
    bgColor: HeaderBgColor,
    cellAlign: 'left',
    cellStyle: { textAlign: 'left' },
    hint: "La identificación  del tipo de la solicitud segun el FUN",
    hintTitle: 'MODALIDAD',
    cellData: row => <Whisper placement="top" speaker={speaker(formsParser1(row))}>
      <a>{formsParser1(row)}</a>
    </Whisper>
  },
  {
    key: 'state',
    label: 'ESTADO',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'lg',
    bgColor: HeaderBgColor,
    hint: "El estado actual de la solicitud",
    hintTitle: 'ESTADO',
    cellData: row => <label>{STATE(row.state)}</label>
  },
  {
    key: 'type',
    label: 'CATEGORIA',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'lg',
    bgColor: HeaderBgColor,
    hint: "La categoria daba al la solicitud",
    hintTitle: 'CATEGORIA',
    cellData: row => <label>{CATEGORY[row.type]}</label>
  },
  {
    key: 'clock_payment',
    label: 'FECHA PAGO',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    hint: "La fecha de pago de las expensas fijas",
    hintTitle: 'FECHA DE PAGO',
    cellData: row => <label>{row.clock_payment}</label>
  },
  {
    key: 'clock_payment',
    label: 'FECHA MAX (30d)',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    hint: <div><Row>
      {"La fecha maxima para entregar los documentos requeridos por la licencia, igual a: La fecha de pago + 30 dias habiles."}
    </Row>
    </div>,
    hintTitle: 'FECHA MAXIMA PARA RADICAR',
    cellData: row => <label>{row.state == 1 || row.state == -1 ? dateParser_finalDate(row.clock_payment, 30) : ""}</label>
  },
  {
    key: 'clock_payment',
    label: 'DIAS',
    align: "center",
    fixed: false,
    columnSize: 'sm',
    bgColor: HeaderBgColor,
    hint: <div>
      <Row>
        {"- Cuenta regresiva indicando los dias restantes."}
      </Row>
      <Row>
        {"- El numero comienza partir de los 30 dias, la cuenta regresiva sigue contanto aun en valores negativos."}
      </Row>
      <Row>
        {"- Un valor negativo indica que el valor de espera inicial (30 dias) se ha superado, e indica el numero de dias pasados."}
      </Row>
      <Row>
        <label className="fw-b">{"- Si la solicitud se encuentra en LyDF o un estado mas consecuente, este campo estará vacio."}</label>
      </Row></div>,
    hintTitle: 'DIAS RESTANTES PARA RADICAR',
    cellData: row => <label>{row.state == 1 || row.state == -1 ? dateParser_timeLeft(row.clock_payment, 30) : ""}</label>
  },
  {
    key: 'clock_date',
    label: 'LYDF',
    headerStyle: "text-danger",
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    hint: "La fecha en la cual es declarado como Legal y Debida Forma",
    hintTitle: 'FECHA DE LEGAL Y DEBIDA FORMA',
    cellData: row => <label className="fw-b text-danger">{row.clock_date}</label>
  },
  {
    key: 'clock_date',
    label: 'FECHA MAX ACTA',
    align: "center",
    fixed: false,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    hint: <div>
      <Row>
        {"- La fecha maxima para entregar el Acta, igual a: La fecha de LyDF + X dias hábiles."}
      </Row>
      <Row>
        {"- Donde X es el numero de dias para realizar el acta basada en la Categoria"}
      </Row>
      <Row>
        <label className="fw-b">{"- Si la solicitud no esta categorizada, tomará 45 dias hábiles por defecto"}</label>
      </Row>
      <Row>
        <label className="fw-b">{"- Si la solicitud no se encuentra en LyDF o un estado mas consecuente, este campo estará vacio."}</label>
      </Row>
    </div>,
    hintTitle: 'FECHA MAXIMA DE ACTA',
    cellData: row => <label>{row.state == 5 ? dateParser_finalDate(row.clock_date, CATEGORY_DAYS_REVIEW[row.type] ?? 45) : ""}</label>
  },
  {
    key: 'mod',
    label: 'DIAS',
    align: "center",
    fixed: false,
    columnSize: 'sm',
    bgColor: HeaderBgColor,
    hint: <div>
      <Row>
        {"- Cuenta regresiva indicando los dias restantes."}
      </Row>
      <Row>
        {"- El numero comienza partir de los X dias, la cuenta regresiva sigue contanto aun en valores negativos."}
      </Row>
      <Row>
        {"- Un valor negativo indica que el valor de espera inicial (X dias) se ha superado, e indica el numero de dias pasados."}
      </Row>
      <Row>
        <label className="fw-b">{"- Si la solicitud se encuentra en Expedicion o un estado mas consecuente, este campo estará vacio."}</label>
      </Row>
      <Row>
        <label className="fw-b">{"- Si la solicitud no esta categorizada, tomará 45 dias hábiles por defecto"}</label>
      </Row></div>,
    hintTitle: 'DIAS RESTANTES FECHA MAXIMA DE ACTA',
    cellData: row => <label>{row.state == 5 ? `${dateParser_timeLeft(row.clock_date, CATEGORY_DAYS_REVIEW[row.type] ?? 45)}/${CATEGORY_DAYS_REVIEW[row.type] ?? 45} ` : ""}</label>
  },
  // ***************************************************************************************** //
  // ************************************* JUR COLUMNS *************************************** //
  // ***************************************************************************************** //
  {
    key: 'mod',
    label: 'JUR. PROF. ASIG.',
    align: "center",
    fixed: false,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    cellStyle: { backgroundColor: JurBgColor },
    hint: "El profesional asignado a revisar el informe juridico de la solicitud.",
    hintTitle: 'JURIDCO PROFESIONAL ASIGNADO',
    cellData: row => <label>{regexChecker_isPh(row, true) ? row.asign_ph_law_worker_name : row.asign_law_worker_name}</label>
  },
  {
    key: 'mod',
    label: 'JUR. FECHA. ASIG.',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    cellStyle: { backgroundColor: JurBgColor },
    hint: "La fecha en la cual el profesional fue asignado a revisar el informe",
    hintTitle: 'JURIDCO FECHA DE ASIGNACION',
    cellData: row => <label>{regexChecker_isPh(row, true) ? row.asign_ph_law_date : row.asign_law_date}</label>
  },
  {
    key: 'mod',
    label: 'JUR. FECHA. MAX.',
    align: "center",
    fixed: false,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    cellStyle: { backgroundColor: JurBgColor },
    hint: ", ",
    hint: <div>
      <Row>
        {"- La fecha limite que tiene el profesional para realizar la revision"}
      </Row>
      <Row>
        {"- Igual a: La Fecha de Asignacion + el numero de dias disponibles. (en funcion de la Categoria)."}
      </Row>
      <Row>
        <label className="fw-b">{"- Si la solicitud no esta categorizada, no calculará el valor."}</label>
      </Row></div>,
    hintTitle: 'JURIDCO FECHA MAXIMA',
    cellData: row => <label>{regexChecker_isPh(row, true)
      ? dateParser_finalDate(row.asign_ph_law_date, CATEGORY_DAYS_ASIGN[row.type])
      : dateParser_finalDate(row.asign_law_date, CATEGORY_DAYS_ASIGN[row.type])
    }</label>
  },
  {
    key: 'mod',
    label: 'JUR. FECHA. REV.',
    align: "center",
    fixed: false,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    cellStyle: { backgroundColor: JurBgColor },
    hint: "La fecha en la cual el profesional realizo la revision del informe.",
    hintTitle: 'JURIDCO FECHA DE REVISION',
    cellData: row => <label>{regexChecker_isPh(row, true) ? row.ph_date_law : row.jur_date}</label>
  },
  {
    key: 'mod',
    label: '#',
    align: "center",
    fixed: false,
    columnSize: 'sm',
    bgColor: HeaderBgColor,
    cellStyle: { backgroundColor: JurBgColor },
    hint: "La version de la solicitud, (1 o 2)",
    hintTitle: 'NUMERO DE VERSION/REVISION',
    cellData: row => <label>{regexChecker_isPh(row, true) ? row.ph_version : row.jur_version}</label>
  },
  {
    key: 'mod',
    label: 'JUR. REVISION',
    align: "center",
    fixed: false,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    cellStyle: { backgroundColor: JurBgColor },
    hint: "El resultado del informe, segun por el profesional que realizo la revision.",
    hintTitle: 'JURIDICO REVISION',
    cellData: row => <label>{regexChecker_isPh(row, true) ? _GET_REVIEW_LAW(row.ph_review_law) : _GET_REVIEW_LAW(row.jur_review)}</label>
  },
  // ***************************************************************************************** //
  // ************************************* ARC COLUMNS *************************************** //
  // ***************************************************************************************** //
  {
    key: 'mod',
    label: 'ARQ. PROF. ASIG.',
    align: "center",
    fixed: false,
    columnSize: 'lg',
    bgColor: HeaderBgColor,
    hint: "El profesional asignado a revisar el informe arquitectonico de la solicitud.",
    hintTitle: 'ARQUITECTONICO PROFESIONAL ASIGNADO',
    cellStyle: { backgroundColor: ArqBgColor },
    cellData: row => <label>{regexChecker_isPh(row, true) ? row.asign_ph_arc_worker_name : row.asign_arc_worker_name}</label>
  },
  {
    key: 'mod',
    label: 'ARQ. FECHA. ASIG.',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    cellStyle: { backgroundColor: ArqBgColor },
    hint: "La fecha en la cual el profesional fue asignado a revisar el informe",
    hintTitle: 'ARQUITECTONICO FECHA DE ASIGNACION',
    cellData: row => <label>{regexChecker_isPh(row, true) ? row.asign_ph_arc_date : row.asign_arc_date}</label>
  },
  {
    key: 'mod',
    label: 'ARQ. FECHA. MAX.',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    cellStyle: { backgroundColor: ArqBgColor },
    hint: <div>
      <Row>
        {"- La fecha limite que tiene el profesional para realizar la revision"}
      </Row>
      <Row>
        {"- Igual a: La Fecha de Asignacion + el numero de dias disponibles. (en funcion de la Categoria)."}
      </Row>
      <Row>
        <label className="fw-b">{"- Si la solicitud no esta categorizada, no calculará el valor."}</label>
      </Row></div>,
    hintTitle: 'ARQUITECTONICO FECHA MAXIMA',
    cellData: row => <label>{regexChecker_isPh(row, true)
      ? dateParser_finalDate(row.asign_ph_arc_date, CATEGORY_DAYS_ASIGN[row.type])
      : dateParser_finalDate(row.asign_arc_date, CATEGORY_DAYS_ASIGN[row.type])
    }</label>
  },
  {
    key: 'mod',
    label: 'JUR. FECHA. REV.',
    align: "center",
    fixed: false,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    cellStyle: { backgroundColor: ArqBgColor },
    hint: "La fecha en la cual el profesional realizo la revision del informe.",
    hintTitle: 'ARQUITECTONICO FECHA DE REVISION',
    cellData: row => <label>{regexChecker_isPh(row, true) ? row.ph_date_arc : row.arc_date}</label>
  },
  {
    key: 'mod',
    label: '#',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'sm',
    bgColor: HeaderBgColor,
    cellStyle: { backgroundColor: ArqBgColor },
    hint: "La version de la solicitud, (1 o 2)",
    hintTitle: 'NUMERO DE VERSION/REVISION',
    cellData: row => <label>{regexChecker_isPh(row, true) ? row.ph_version : row.arc_version}</label>
  },
  {
    key: 'mod',
    label: 'ARQ. REVISION',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    cellStyle: { backgroundColor: ArqBgColor },
    hint: "El resultado del informe, segun por el profesional que realizo la revision.",
    hintTitle: 'ARQUITECTONICO REVISION',
    cellData: row => <label>{regexChecker_isPh(row, true) ? _GET_REVIEW_LAW(row.ph_review_law) : _GET_REVIEW_LAW(row.arc_review)}</label>
  },
  // ***************************************************************************************** //
  // ************************************* ENG COLUMNS *************************************** //
  // ***************************************************************************************** //
  {
    key: 'mod',
    label: 'EST. PROF. ASIG.',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'lg',
    bgColor: HeaderBgColor,
    cellStyle: { backgroundColor: EngBgColor },
    hint: "El profesional asignado a revisar el informe estructural de la solicitud.",
    hintTitle: 'ESTRUCTURAL PROFESIONAL ASIGNADO',
    cellData: row => <label>{row.asign_eng_worker_name}</label>
  },
  {
    key: 'mod',
    label: 'EST. FECHA. ASIG.',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    cellStyle: { backgroundColor: EngBgColor },
    hint: "La fecha en la cual el profesional fue asignado a revisar el informe",
    hintTitle: 'ESTRUCTURAL FECHA DE ASIGNACION',
    cellData: row => <label>{row.asign_eng_date}</label>
  },
  {
    key: 'mod',
    label: 'EST. FECHA. MAX.',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    cellStyle: { backgroundColor: EngBgColor },
    hint: <div>
      <Row>
        {"- La fecha limite que tiene el profesional para realizar la revision"}
      </Row>
      <Row>
        {"- Igual a: La Fecha de Asignacion + el numero de dias disponibles. (en funcion de la Categoria)."}
      </Row>
      <Row>
        <label className="fw-b">{"- Si la solicitud no esta categorizada, no calculará el valor."}</label>
      </Row></div>,
    hintTitle: 'ESTRUCTURAL FECHA MAXIMA',
    cellData: row => <label>{dateParser_finalDate(row.asign_eng_date, CATEGORY_DAYS_ASIGN[row.type] ?? false)}</label>
  },
  {
    key: 'mod',
    label: 'EST. FECHA. REV.',
    align: "center",
    fixed: false,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    cellStyle: { backgroundColor: EngBgColor },
    hint: "La fecha en la cual el profesional realizo la revision del informe.",
    hintTitle: 'ESTRUCTURAL FECHA DE REVISION',
    cellData: row => <label>{regexChecker_isPh(row, true) ? '' : row.eng_date}</label>
  },
  {
    key: 'mod',
    label: '#',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'sm',
    bgColor: HeaderBgColor,
    cellStyle: { backgroundColor: EngBgColor },
    hint: "La version de la solicitud, (1 o 2)",
    hintTitle: 'NUMERO DE VERSION/REVISION',
    cellData: row => <label>{regexChecker_isPh(row, true) ? '' : row.eng_version}</label>
  },
  {
    key: 'mod',
    label: 'EST. REVISION',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'lg',
    bgColor: HeaderBgColor,
    cellStyle: { backgroundColor: EngBgColor },
    hint: "El resultado del informe, segun por el profesional que realizo la revision.",
    hintTitle: 'ESTRUCTURAL REVISION',
    cellData: row => regexChecker_isPh(row, true) ? ''
      : <label>R 1: {GET_REVIEW_ENG(row.eng_review)} Re 2: {GET_REVIEW_ENG(row.eng_review_2)}</label>
  },
  // ***************************************************************************************** //
  // ************************************* END COLUMNS *************************************** //
  // ***************************************************************************************** //
  {
    key: 'mod',
    label: 'FECHA ACTA',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    hint: "La fecha en la que se entrego el Acta Parte numero 1.",
    hintTitle: 'FECHA ENTREGA ACTA',
    cellData: row => <label>TODO</label>
  },
  {
    key: 'mod',
    label: '¿CORRECIONES?',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    hint: "Si el acta de la solicitud determina que son requeridas correciones.",
    hintTitle: '¿REQUIERE CORRECIONES?',
    cellData: row => <label>{row.rec_review == 0
      ? <label className="fw-b text-danger">SI</label> : row.rec_review == 1
        ? <label className="fw-b text-success">NO</label> : ""}</label>
  },
  {
    key: 'mod',
    label: 'FECHA NOT. 1',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    hint: "La fecha en la cual la parte numero 1 del acta fue notificada.",
    hintTitle: 'FECHA DE NOTIFICACION NUMERO 1',
    cellData: row => <label>{row.clock_not_1 ?? row.clock_not_2 ?? ''}</label>
  },
  {
    key: 'mod',
    label: 'FECHA NOT. 2',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    hint: "La fecha en la cual la parte numero 2 del acta fue notificada, si fue necesario.",
    hintTitle: 'FECHA DE NOTIFICACION NUMERO 2',
    cellData: row => <label>{row.clock_not_3 ?? row.clock_not_4 ?? ''}</label>
  },
  {
    key: 'mod',
    label: 'FECHA LIMITE',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    hint: "",
    hint: <div>
      <Row>
        {"- Si se llegasen a necesitar correciones, indica la fecha maxima que tiene el solicitante para entregar la correciones."}
      </Row>
      <Row>
        {"- Igual a: La Fecha de notificacion 1 + 30 Dias hábiles."}
      </Row>
      <Row>
        <label className="fw-b">{"- Si no hay fecha de Notificacion 1, no calculará el valor."}</label>
      </Row>
    </div>,
    hintTitle: 'FECHA LIMITE ENTREGA CORRECCIONES',
    cellData: row => <label>{dateParser_finalDate(row.clock_not_1 ?? row.clock_not_2 ?? false, 30)}</label>
  },
  {
    key: 'mod',
    label: 'FECHA + PRORROGA',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    hint: <div>
      <Row>
        {"- Indica el limite para entregar las correciones si el solicitante llegase a solicitar una prorroga."}
      </Row>
      <Row>
        {"- Igual a: La Fecha de notificacion 1 + 30 Dias hábiles + 15 dias hábiles."}
      </Row>
      <Row>
        <label className="fw-b">{"- Si la solicitud no esta categorizada, no calculará el valor."}</label>
      </Row>
      <Row>
        <label className="fw-b">{"- Si no hay fecha de Notificacion 1, no calculará el valor."}</label>
      </Row></div>,
    hintTitle: 'FECHA LIMITE ENTREGA CORRECCIONES',
    cellData: row => <label>{dateParser_finalDate(row.clock_not_1 ?? row.clock_not_2 ?? false, 45)}</label>
  },
  {
    key: 'mod',
    label: 'FECHA CORRECIONES',
    align: "center",
    fixed: false,
    sortable: true,
    columnSize: 'md',
    bgColor: HeaderBgColor,
    hint: "La fecha en la que se entrego el Acta Parte numero 2, si llegase al caso.",
    hintTitle: 'FECHA ENTREGA CORRECIONES',
    cellData: row => <label>{row.clock_corrections}</label>
  },
  ]


  return (
    <>
      <TABLE_COMPONENT data={props.data} columns={columns} loadStatus={props.loadStatus} compact/>
    </>);
}
