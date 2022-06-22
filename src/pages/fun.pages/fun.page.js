import React, { createContext } from 'react';
import { Container, Content } from 'rsuite';
import FUN_LISTS_VIEWS from './lists.pages/funLists.view'
import { ImTable2 } from 'react-icons/im'
import { FcCancel } from 'react-icons/fc'
import { IoDocumentAttachOutline } from 'react-icons/io5'

export let CurrentItemConext = createContext();
export let ItemsContext = createContext();
var moment = require('moment');

export default function FUN() {

    return (
        <Container>
            <ItemsProvider>
                <CurrentITemProvider>
                    <Container>
                        <Content>
                            content
                        </Content>
                    </Container>
                </CurrentITemProvider>
            </ItemsProvider>
        </Container>
    );
}


function CurrentITemProvider({ children }) {
    const default_fun_0s = { id: false, version: 1, state: null, id_public: null, date: null, id_payment: null, type: null, }
    const default_fun_1s = [{
        id: false, version: null, tipo: [], tramite: '', m_urb: '', m_sub: '', m_lic: [], usos: [],
        area: '', vivienda: '', cultural: '', regla_1: '', regla_2: '', description: ''
    }]
    const default_fun_2s = {
        id: false, direccion: '', direccion_ant: '', matricula: '', catastral: '', suelo: '', lote_pla: '', barrio: '',
        vereda: '', comuna: '', sector: '', estrato: '', corregimiento: '', manzana: '', lote: ''
    }
    const default_fun_3s = []
    const default_fun_4s = []
    const default_fun_51s = []
    const default_fun_52s = []
    const default_fun_53s = {
        id: false, version: null, active: 1, name: '', surname: '', id_number: '', role: '', email: '',
        address: '', number: '', docs: [0, 0], check: null
    }
    const default_fun_6s = []
    const default_fun_cs = [{
        id: false, version: null, date: false, condition: null, worker: '', reciever_name: '', reciever_date: false, legal_date:  false,reciever_id: '',
        reciever_actor: '', details: ''
    }]
    const default_fun_rs = [{
        id: false, version: null, checked: [], code: [], review: [], id6: [], check_control: [], check_control_pages: [],
    }]
    const default_fun_laws = {
        id: false, sign: [0, false], new_type: null, publish_neighbour: null, id6payment: 0, planing_data: null, report_data: [],
        report_cub: null
    }
    const default_fun_seal = { id: false, area: '', blueprints: '', drives: '', folders: '', id_public: '' }
    const default_fun_archives = []
    const default_fun_clocks = []

    // ************************* RECORDS ******************************* //

    const default_record_law = { id: false, id_public: '', version: false, worker_name: '', worker_id: '', date_asign: false, worker_prev: '' }
    const default_record_law_11l = []
    const default_record_law_11t = []
    const default_record_law_licence = []
    const default_record_law_step = []
    const default_record_law_review = [{
        id: false, version: false, detail: '', worker_id: '', worker_name: '', date: false, notify_name: '', notify_date: false,
        check: false,
    }]

    const default_record_review = { id: false, id_public: null, check: null, date: false, check_2: null, date_2: false }
    const default_record_arc = { id: false, id_public: null, version: null, worker_name: null, worker_id: null, date_asign: false, worker_prev: null }
    const default_record_eng = { id: false, id_public: null, version: null, worker_name: null, worker_id: null, date_asign: false, worker_prev: null, category: null }
    const default_record_ph = {
        id: false, id_public: null, version: null, check: null, check_law: null, detail: null, detail_2: null,
        detail_3: null, review_check: null, review_gen: null, worker_arc_id: null, worker_arc_name: null, worker_law_id: null, worker_law_name: null
        , date_law_review: false, date_arc_review: false, worker_asign_law_name: null, worker_asign_law_id: null, date_asign_law: false
        , worker_asign_law_prev: null, worker_asign_arc_name: null, worker_asign_arc_id: null, date_asign_arc: false, worker_asign_arc_prev: null
    }


    const defaultLists = [
        { eventKey: 'macro', label: 'MACRO TABLA', icon: <ImTable2 />, close: false, id: null, item: null, to: `fun/macro` },
        { eventKey: 'negatives', label: 'DESISTIMIENTOS', icon: <FcCancel />, close: false, id: null, item: null, to: `fun/negatves` },
        { eventKey: 'submit', label: 'VENTANILLA UNICA', icon: <IoDocumentAttachOutline />, close: false, id: null, item: null, to: `fun/submit` },
    ];

    const [currentItem, setcurrentItem] = React.useState(null);
    const [currentVersion, setcurrentVersion] = React.useState(1);
    const [currentRecord, setcurrentRecord] = React.useState(null);
    const [currentTabs, setCurrentTabs] = React.useState(defaultLists);

    // ************************* FUN ******************************* //

    const [FUN_0, setFUN_0] = React.useState(default_fun_0s);
    const [FUN_1, setFUN_1] = React.useState(default_fun_1s);
    const [FUN_2, setFUN_2] = React.useState(default_fun_2s);
    const [FUN_3, setFUN_3] = React.useState(default_fun_3s);
    const [FUN_4, setFUN_4] = React.useState(default_fun_4s);
    const [FUN_51, setFUN_51] = React.useState(default_fun_51s);
    const [FUN_52, setFUN_52] = React.useState(default_fun_52s);
    const [FUN_53, setFUN_53] = React.useState(default_fun_53s);
    const [FUN_6, setFUN_6] = React.useState(default_fun_6s);
    const [FUN_C, setFUN_C] = React.useState(default_fun_cs);
    const [FUN_R, setFUN_R] = React.useState(default_fun_rs);
    const [FUN_LAW, setFUN_LAW] = React.useState(default_fun_laws);
    const [FUN_SEAL, setFUN_SEAL] = React.useState(default_fun_seal);
    const [FUN_ARCHIVE, setFUN_ARCHIVE] = React.useState(default_fun_archives);
    const [FUN_CLOCKS, setFUN_CLOCKS] = React.useState(default_fun_clocks);

    // ************************* RECORDS ******************************* //

    const [RECORD_LAW, setRECORD_LAW] = React.useState(default_record_law);
    const [RECORD_LAW_11L, setRECORD_LAW_11L] = React.useState(default_record_law_11l);
    const [RECORD_LAW_11T, setRECORD_LAW_11T] = React.useState(default_record_law_11t);
    const [RECORD_LAW_LICENCE, setRECORD_LAW_LICENCE] = React.useState(default_record_law_licence);
    const [RECORD_LAW_STEP, setRECORD_LAW_STEP] = React.useState(default_record_law_step);
    const [RECORD_LAW_REVIEW, setRECORD_LAW_REVIEW] = React.useState(default_record_law_review);

    const [RECORD_ARC, setRECORD_ARC] = React.useState(default_record_law);
    const [RECORD_ENG, setRECORD_ENG] = React.useState(default_record_eng);
    const [RECORD_PH, setRECORD_PH] = React.useState(default_record_ph);
    const [RECORD_R, setRECORD_R] = React.useState(default_record_review);

    let addTab = (newTab) => {
        setCurrentTabs(newTab);
    }

    let removeTab = (tab) => {
        setCurrentTabs(tab);
    }

    // ***************************************************************************************** //
    // ************************************* SETUP LOADESRS ************************************ //
    // ***************************************************************************************** //

    let load_gen = (item, callback) => {
        setcurrentItem(item);
        setcurrentVersion(item.version)
        update_FUN_0(item)
        update_FUN_1(item)
        update_FUN_2(item)
        update_FUN_3(item)
        update_FUN_4(item)
        update_FUN_51(item)
        update_FUN_52(item)
        update_FUN_53(item)
        update_FUN_6(item)
        update_FUN_R(item)
        update_FUN_C(item)
        update_FUN_LAW(item)
        update_FUN_ARCHIVE(item)

        callback();
    };


    // ***************************************************************************************** //
    // ************************************* DATA CONVERTERS *********************************** //
    // ***************************************************************************************** //

    let update_FUN_0 = (item) => {
        let object = {
            id: item.id ?? false,
            version: item.version ?? 1,
            state: item.state ?? null,
            id_public: item.id_public ?? null,
            date: item.date ?? null,
            id_payment: item.id_payment ?? null,
            type: item.type ?? null,
        }
        setFUN_0(object)
    }
    let update_FUN_1 = (item) => {
        let _arrayHelper_usos = ['A,B,C,D', 'A,B,C', 'A,B,D', 'A,C,D', 'A,B', 'A,C', 'A,D', 'B,C', 'B,D', 'C,D', 'A', 'B', 'C', 'D'];
        var objects = item.fun_1s;
        var versions = item.version;
        if (!objects) return setFUN_1(default_fun_1s);
        if (!objects.length) return setFUN_1(default_fun_1s);
        var newObjects = [];
        for (var i = 0; i < versions; i++) {
            if (objects[i]) {
                var addObject = {
                    id: objects[i].id,
                    version: objects[i].version ?? false,
                    tipo: objects[i].tipo ? objects[i].tipo.split(',') : [],
                    tramite: objects[i].tramite ?? '',
                    m_urb: objects[i].m_urb ?? '',
                    m_sub: objects[i].m_sub ?? '',
                    m_lic: objects[i].m_lic ? objects[i].m_lic.split(',') : [],
                    usos: _arrayHelper_usos.includes(objects[i].usos) ? objects[i].usos.split(',') : objects[i].usos,
                    area: objects[i].area ?? '',
                    vivienda: objects[i].vivienda ?? '',
                    cultural: objects[i].cultural ?? '',
                    regla_1: objects[i].regla_1 ?? '',
                    regla_2: objects[i].regla_2 ?? '',
                    description: objects[i].description ?? '',
                }
                newObjects.push(addObject);
            }
            else newObjects.push(default_fun_1s[0]);
        }
        setFUN_1(newObjects)
    }

    let update_FUN_2 = (item) => {
        var objects = item.fun_2s;
        if (!objects) return setFUN_2(default_fun_2s);
        if (!objects.length) return setFUN_2(default_fun_2s);
        var addObject = {
            id: objects[0].id,
            direccion: objects[0].direccion ?? '',
            direccion_ant: objects[0].direccion_ant ?? '',
            matricula: objects[0].matricula ?? '',
            catastral: objects[0].catastral ?? '',
            suelo: objects[0].suelo ?? '',
            lote_pla: objects[0].lote_pla ?? '',
            barrio: objects[0].barrio ?? '',
            estrato: objects[0].estrato ?? '',
            vereda: objects[0].vereda ?? '',
            comuna: objects[0].comuna ?? '',
            sector: objects[0].sector ?? '',
            corregimiento: objects[0].corregimiento ?? '',
            manzana: objects[0].manzana ?? '',
            lote: objects[0].lote ?? '',
        }
        setFUN_2(addObject)
    }

    let update_FUN_3 = (item) => {
        var objects = item.fun_3s;
        if (!objects) return setFUN_3(default_fun_3s);
        if (!objects.length) return setFUN_3(default_fun_3s);
        setFUN_3(objects)
    }

    let update_FUN_4 = (item) => {
        var objects = item.fun_4s;
        if (!objects) return setFUN_4(default_fun_4s);
        if (!objects.length) return setFUN_4(default_fun_4s);
        setFUN_4(objects)
    }

    let update_FUN_51 = (item) => {
        var objects = item.fun_51s;
        if (!objects) return setFUN_51(default_fun_51s);
        if (!objects.length) return setFUN_51(default_fun_51s);
        setFUN_51(objects)
    }

    let update_FUN_52 = (item) => {
        var objects = item.fun_52s;
        if (!objects) return setFUN_52(default_fun_52s);
        if (!objects.length) return setFUN_52(default_fun_52s);
        setFUN_52(objects)
    }

    let update_FUN_53 = (item) => {
        var objects = item.fun_53s;
        var versions = item.version;
        if (!objects) return setFUN_53(default_fun_53s);
        if (!objects.length) return setFUN_53(default_fun_53s);
        var newObjects = [];
        for (var i = 0; i < versions; i++) {
            if (objects[i]) {
                var addObject = {
                    id: objects[i].id,
                    version: objects[i].version ?? false,
                    name: objects[i].name ?? '',
                    surname: objects[i].surname ?? '',
                    id_number: objects[i].id_number ?? '',
                    role: objects[i].role ?? '',
                    address: objects[i].address ?? '',
                    docs: objects[i].docs ? objects[i].docs.split(',') : [0, 0],
                    check: objects[i].check ?? '',
                }
                newObjects.push(addObject);
            }
            else newObjects.push(default_fun_53s[0]);
        }
        setFUN_53(newObjects)
    }

    let update_FUN_6 = (item) => {
        var objects = item.fun_6s;
        if (!objects) return setFUN_6(default_fun_6s);
        if (!objects.length) return setFUN_6(default_fun_6s);
        setFUN_6(objects)
    }

    let update_FUN_C = (item) => {
        var objects = item.fun_cs;
        var versions = item.version;
        if (!objects) return setFUN_C(default_fun_cs);
        if (!objects.length) return setFUN_C(default_fun_cs);
        var newObjects = [];
        for (var i = 0; i < versions; i++) {
            if (objects[i]) {
                var addObject = {
                    id: objects[i].id,
                    version: objects[i].version ?? false,
                    date: objects[i].date ?? false,
                    condition: objects[i].condition ?? null,
                    worker: objects[i].worker ?? '',
                    reciever_name: objects[i].reciever_name ?? '',
                    reciever_date: objects[i].reciever_date ?? false,
                    legal_date: objects[i].legal_date ?? false,
                    reciever_id: objects[i].reciever_id ?? '',
                    reciever_actor: objects[i].reciever_actor ?? '',
                    details: objects[i].details ?? '',
                }
                newObjects.push(addObject);
            }
            else newObjects.push(default_fun_cs[0]);
        }
        setFUN_C(newObjects)
    }

    let update_FUN_R = (item) => {
        var objects = item.fun_rs;
        var versions = item.version;
        if (!objects) return setFUN_R(default_fun_rs);
        if (!objects.length) return setFUN_R(default_fun_rs);
        var newObjects = [];
        for (var i = 0; i < versions; i++) {
            if (objects[i]) {
                var addObject = {
                    id: objects[i].id,
                    version: objects[i].version ?? false,
                    checked: objects[i].checked ? objects[i].checked.split(',') : [],
                    code: objects[i].code ? objects[i].code.split(',') : [],
                    review: objects[i].review ? objects[i].review.split(',').split('&') : [],
                    id6: objects[i].id6 ? objects[i].id6.split(',').split('&') : [],
                    check_control: objects[i].check_control ? objects[i].check_control.split(',') : [],
                    check_control_pages: objects[i].check_control_pages ? objects[i].check_control_pages.split(',') : [],
                }
                newObjects.push(addObject);
            }
            else newObjects.push(default_fun_rs[0]);
        }
        setFUN_R(newObjects)
    }

    let update_FUN_LAW = (item) => {
        var objects = item.fun_laws;
        if (!objects) return setFUN_LAW(default_fun_laws);
        if (!objects.length) return setFUN_LAW(default_fun_laws);
        var addObject = {
            id: objects[0].id,
            sign: objects[0].sign?  objects[0].sign.split(',') : [0, false],
            new_type: objects[0].new_type ?? null,
            publish_neighbour: objects[0].publish_neighbour ?? null,
            id6payment: objects[0].id6payment ?? 0,
            planing_data: objects[0].planing_data ?? null,
            report_data: objects[0].report_data ? objects[0].report_data.split(',') : [],
            report_cub: objects[0].report_cub ?? null,
        }
        setFUN_LAW(addObject)
    }

    let update_FUN_SEAL = (item) => {
        var objects = item.fun_seals;
        if (!objects) return setFUN_SEAL(default_fun_seal);
        if (!objects.length) return setFUN_SEAL(default_fun_seal);
        var addObject = {
            id: objects[0].id,
            area: objects[0].area ?? '',
            blueprints: objects[0].blueprints ?? '',
            drives: objects[0].drives ?? '',
            folders: objects[0].folders ?? '',
            id_public: objects[0].id_public ?? '',
        }
        setFUN_SEAL(addObject)
    }

    let update_FUN_ARCHIVE = (item) => {
        var objects = item.fun_archives;
        if (!objects) return setFUN_ARCHIVE(default_fun_archives);
        if (!objects.length) return setFUN_ARCHIVE(default_fun_archives);
        setFUN_ARCHIVE(objects)
    }

    let update_FUN_CLOCKS = (item) => {
        var objects = item.fun_clocks;
        if (!objects) return setFUN_CLOCKS(default_fun_clocks);
        if (!objects.length) return setFUN_CLOCKS(default_fun_clocks);
        setFUN_CLOCKS(objects)
    }

    let value = {
        currentItem, currentVersion,
        currentTabs, addTab, removeTab,
        load_gen,
        FUN_0, update_FUN_0,
        FUN_1, update_FUN_1,
        FUN_2, update_FUN_2,
        FUN_3, update_FUN_3,
        FUN_4, update_FUN_4,
        FUN_51, update_FUN_51,
        FUN_52, update_FUN_52,
        FUN_53, update_FUN_53,
        FUN_6, update_FUN_6,
        FUN_C, update_FUN_C,
        FUN_R, update_FUN_R,
        FUN_LAW, update_FUN_LAW,
        FUN_ARCHIVE, update_FUN_ARCHIVE,
        FUN_SEAL, update_FUN_SEAL,
        FUN_CLOCKS, update_FUN_CLOCKS,
    };

    return <CurrentItemConext.Provider value={value}>{children}</CurrentItemConext.Provider>;
}

function ItemsProvider({ children }) {
    const [items, setItems] = React.useState([]);
    const [itemsFilter, setItemsFilter] = React.useState([]);
    const [tags, setTags] = React.useState([]);

    const [itemsNegative, setItemsNegative] = React.useState([]);
    const [submit, setSubmit] = React.useState([]);

    const [dates, setDates] = React.useState([null, null]); // DATE FOR MACRO TABLE

    let updateItems = (items, callback) => {
        setItems(items);
        setItemsFilter(items);
        callback();
    };

    let updateItemsFilter = (items, callback) => {
        setItemsFilter(items);
        callback();
    };

    let updateTags = (items, callback) => {
        setTags(items);
        callback();
    };

    let updateItemsNegative = (items, callback) => {
        setItemsNegative(items);
        callback();
    };

    let updateSubmit = (items, callback) => {
        setSubmit(items);
        callback();
    };

    let updateDates = (items, callback) => {
        setDates(items);
        callback();
    };
    let value = {
        items, updateItems,
        itemsNegative, updateItemsNegative,
        itemsFilter, updateItemsFilter,
        tags, updateTags,
        submit, updateSubmit,
        dates, updateDates,
    };

    return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>;
}