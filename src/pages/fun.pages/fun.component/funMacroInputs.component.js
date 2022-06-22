import React, { useContext } from 'react';
import { Badge, Col, DatePicker, InputGroup, List, Panel, Row } from 'rsuite';
import { ItemsContext } from '../fun.page'
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { regexChecker_isPh } from '../../../resources/customs/utils/funParser.module';
import { dateParser_timePassed } from '../../../resources/customs/utils/utilsParse.module';
import { formsParser1 } from '../../../resources/customs/utils/funParser.module'
import FUN_CHARTS_COMPONENT from './fun_charts.component';

function useItems() { return useContext(ItemsContext); }


export default function FUN_MACRO_IPUTS_COMPONENT(props) {
    let items = useItems();
    const filterList_func = {
        title: 'FILTROS DE FUNCIONALIDAD',
        color: 'violet',
        filters: [
            {
                title: 'relax'
                , desc: 'Este filtro relaja los criterios de busqueda, filtrando solicitudes que cumplan con almenos una de las condiciciones de los filtros'
                , badge: true
                , color: 'violet'
            },
            {
                title: '!X'
                , desc: '(Exclamacion)X, utlice un signo de exclamacion antes del filtro para invertir la logica donde X es el filtro. (ej: rad -> Busca Solicitudes en radicación, !rad -> busca Solicitudes que NO esten en radicación)'
                , badge: false
                , color: false
            }

        ]
    }

    const filterList_state = {
        title: 'FILTROS DE ESTADO',
        color: 'DodgerBlue',
        filters: [
            {
                title: 'rad'
                , desc: 'En Radicacion, sin estado especificado.'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'inc'
                , desc: 'Incompleto'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'ldf'
                , desc: 'En Legal y Debida Forma'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'exp'
                , desc: 'En expedicion de Licencia'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'des'
                , desc: 'En proceso de desistimiento'
                , badge: true
                , color: 'blue'
            }

        ]
    }
    const filterList_type = {
        title: 'FILTROS DE TIPO DE LICENCIA',
        color: 'DodgerBlue',
        filters: [
            {
                title: 'urb'
                , desc: 'Licencias de Urbanización.'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'par'
                , desc: 'Licencias de Parcelación'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'sub'
                , desc: 'Licencias de Subdivición'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'con'
                , desc: 'Licencias de construcción'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'conre'
                , desc: 'Licencias de construccion y reconocimiento'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'lcoa'
                , desc: 'Licencias de construccion y otras actuaciones'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'rec'
                , desc: 'Licencias de reconocimiento'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'oa'
                , desc: 'Otras actuaciones'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'lic:no'
                , desc: 'Solicitudes sin tipo definido o no valido'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'lic:X'
                , desc: 'Licencia con la Modalidad o Tipo de licencia X.'
                , badge: false
                , color: false
            },
        ]
    }
    const filterList_category = {
        title: 'FILTROS DE CATEGORIA',
        color: 'DodgerBlue',
        filters: [
            {
                title: 'c1'
                , desc: 'Categoria I'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'c2'
                , desc: 'Categoria II'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'c3'
                , desc: 'Categoria III'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'c4'
                , desc: 'Categoria VI'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'coa'
                , desc: 'Categoria Otras Actuaciones'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'nc'
                , desc: 'Sin Categorizar'
                , badge: true
                , color: 'blue'
            },
        ]
    }
    const filterList_report_law = {
        title: 'FILTROS DE INFORMES JURIDICOS',
        color: 'DodgerBlue',
        filters: [
            {
                title: 'jur:si'
                , desc: 'Informe Juridico sin evaluar'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'jur'
                , desc: 'Informe Juridico Evaluado (sin definir viable o no viable)'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'jur:si'
                , desc: 'Informe Juridico declarado viable'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'jur:no'
                , desc: 'Informe Juridico declarado no viable'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'jur:na'
                , desc: 'Informe Juridico sin asignar un profesional'
                , badge: true
                , color: 'blue'
            },
        ]
    }
    const filterList_report_arc = {
        title: 'FILTROS DE INFORMES ARQUITECTONICOS',
        color: 'DodgerBlue',
        filters: [
            {
                title: 'arq:0'
                , desc: 'Informe Arquitectonico sin evaluar'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'arq'
                , desc: 'Informe Arquitectonico Evaluado (sin definir viable o no viable)'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'arq:si'
                , desc: 'Informe Arquitectonico declarado viable'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'arq:no'
                , desc: 'Informe Arquitectonico declarado no viable'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'arq:na'
                , desc: 'Informe Arquitectonico sin asignar profesional'
                , badge: true
                , color: 'blue'
            },
        ]
    }
    const filterList_report_eng = {
        title: 'FILTROS DE INFORMES ESTRUCTURALES',
        color: 'DodgerBlue',
        filters: [
            {
                title: 'est:0'
                , desc: 'Algunos de los informes Estructurales sin evaluar'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'est'
                , desc: 'Todos los informes Estructurales Evaluados (sin definir cumple o no cumple)'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'est:si'
                , desc: 'Todos los informes Estructurales declarado cumple'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'est:no'
                , desc: 'Algunos de los informes Estructurales declarado no cumple'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'est:na'
                , desc: 'Informe Estructural sin asignar un profesional'
                , badge: true
                , color: 'blue'
            },
        ]
    }
    const filterList_acta = {
        title: 'FILTROS DE ACTAS',
        color: 'DodgerBlue',
        filters: [
            {
                title: 'acta:0'
                , desc: 'Sin acta'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'acta'
                , desc: 'Con acta'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'acta:si'
                , desc: 'Con acta (Cumple con todo)'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'acta:no'
                , desc: 'Con acta (No cumple) '
                , badge: true
                , color: 'blue'
            },
            {
                title: 'acta2:no'
                , desc: 'Esperando acta parte 2 (Cuando requiere)'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'acta2:si'
                , desc: 'Con acta de parte 2 (Cuando requiere)'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'acta:not'
                , desc: ' Notificado Acta parte 1 y/o parte 2'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'acta:not1'
                , desc: 'Notificado Acta parte 1'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'acta:not2'
                , desc: 'Notificado Acta parte 2'
                , badge: true
                , color: 'blue'
            },
        ]
    }
    const filterList_misc = {
        title: 'FILTROS VARIOS',
        color: 'DodgerBlue',
        filters: [
            {
                title: 'valla'
                , desc: 'Valla radicada'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'vallano'
                , desc: 'Valla sin radicar'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'sello'
                , desc: 'Sello creado'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'sellono'
                , desc: 'Sello sin crear'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'rep'
                , desc: 'Reporte de Planeacion enviado'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'repno'
                , desc: ' Reporte de planeacion sin enviar'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'vecino'
                , desc: 'Todos los vecinos citados'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'vecinono'
                , desc: 'Con 1 o mas vecinos por citar'
                , badge: true
                , color: 'blue'
            },
            {
                title: 'pqrs'
                , desc: 'Con 1 o mas Peticiones PQRS relacionadas'
                , badge: true
                , color: 'blue'
            },
        ]
    }
    const filterList_property = {
        title: 'FILTROS DE PROPIEDADES',
        color: 'ForestGreen',
        filters: [
            {
                title: 'num:X'
                , desc: 'Solicitud donde X es el numero de radicacion (Para buscar varios se debe usar con el filtro relax, puede usar parte del numero)'
                , badge: false
                , color: 'blue'
            },
            {
                title: 'n:X'
                , desc: 'la misma funcionalidad del filtro anterior.'
                , badge: false
                , color: 'blue'
            },
            {
                title: 'dias>X'
                , desc: 'Solicitudes que esten en proceso por mas (e igual) a X dias'
                , badge: false
                , color: 'blue'
            },
            {
                title: 'dias<X'
                , desc: 'Solicitudes que esten en proceso por menos (e igual) a X dias'
                , badge: false
                , color: 'blue'
            },
            {
                title: 'asig:X'
                , desc: 'Solicitudes que hallan sido asignadas al profesional X'
                , badge: false
                , color: 'blue'
            },
        ]
    }
    const filtersList = [
        filterList_state,
        filterList_category,
        filterList_type,
        filterList_report_law,
        filterList_report_arc,
        filterList_report_eng,
        filterList_acta,
        filterList_misc,
        filterList_property]

    const tagInput = <ReactTagInput
        tags={items.tags}
        onChange={_UPDATE_FILTERS}
        placeholder="Filtros"
        removeOnBackspace={true}
    />

    function _UPDATE_FILTERS(_FILTERS) {
        let NEW_FILTERS = _FILTERS;
        if (!_FILTERS) NEW_FILTERS = [];
        items.updateTags(NEW_FILTERS, () => _FILTER_LIST(NEW_FILTERS))
    }
    function _SET_FILTERS(value, useBadge = true) {
        if (useBadge) {
            let _ARRAY_TAGS = items.tags;
            if (Array.isArray(value)) {
                value.push('relax');
                for (var i = 0; i < value.length; i++) {
                    if (_ARRAY_TAGS.includes(value[i])) _ARRAY_TAGS.splice(_ARRAY_TAGS.indexOf(value[i]), 1);
                    else _ARRAY_TAGS.push(value[i]);
                }
            } else {
                if (_ARRAY_TAGS.includes(value)) _ARRAY_TAGS.splice(_ARRAY_TAGS.indexOf(value), 1);
                else _ARRAY_TAGS.push(value);
            }

            _UPDATE_FILTERS(_ARRAY_TAGS);
        }
    }
    function _FILTER_LIST(newTags) {
        let _FILTERS = newTags;

        if (!_FILTERS) return items.updateItemsFilter(items.items, () => { });
        if (_FILTERS.length == 0) return items.updateItemsFilter(items.items, () => { });
        else if (_FILTERS.length == 1 && _FILTERS[0] == 'relax') return items.updateItemsFilter(items.items, () => { });

        let _FULL_LIST = items.items;
        let _FILTER_LIST = [];
        let meetConditions = 0;
        let forcedConditions = true;

        for (var i = 0; i < _FULL_LIST.length; i++) {
            for (var j = 0; j < _FILTERS.length; j++) {
                if (_FILTERS[j] == 'relax') forcedConditions = false;
            }
            let inverseCondition = false;
            for (var j = 0; j < _FILTERS.length; j++) {
                let _FILTER = _FILTERS[j];
                if (_FILTER[0] == '!') {
                    inverseCondition = true;
                    _FILTER = _FILTER.slice(1);
                }
                let meetCondition = false;
                // STATE AND CATEGORY
                if (_FILTER == 'rad' && _FULL_LIST[i].state == 1 && _FULL_LIST[i].clock_payment) meetCondition = true;
                if (_FILTER == 'ldf' && _FULL_LIST[i].state == 5) meetCondition = true;
                if (_FILTER == 'inc' && _FULL_LIST[i].state == -1) meetCondition = true;
                if (_FILTER == 'exp' && _FULL_LIST[i].state == 30) meetCondition = true;
                if (_FILTER == 'dis' && _FULL_LIST[i].state < -100) meetCondition = true;
                if (_FILTER == 'c1' && _FULL_LIST[i].type == 'i') meetCondition = true;
                if (_FILTER == 'c2' && _FULL_LIST[i].type == 'ii') meetCondition = true;
                if (_FILTER == 'c3' && _FULL_LIST[i].type == 'iii') meetCondition = true;
                if (_FILTER == 'c4' && _FULL_LIST[i].type == 'vi') meetCondition = true;
                if (_FILTER == 'coa' && _FULL_LIST[i].type == 'oa') meetCondition = true;
                if (_FILTER == 'nc' && !_FULL_LIST[i].type) meetCondition = true;
                // REPORTS
                if (_FULL_LIST[i].ph_review != null) { // isPH
                    if (_FILTER == 'jur:0' && _FULL_LIST[i].ph_review_law == null) meetCondition = true;
                    if (_FILTER == 'jur' && _FULL_LIST[i].ph_review_law != null) meetCondition = true;
                    if (_FILTER == 'jur:no' && _FULL_LIST[i].ph_review_law == 0) meetCondition = true;
                    if (_FILTER == 'jur:si' && _FULL_LIST[i].ph_review_law == 1) meetCondition = true;
                    if (_FILTER == 'jur:na' && !_FULL_LIST[i].sign_ph_law_worker_id) meetCondition = true;

                    if (_FILTER == 'arq:no' && _FULL_LIST[i].ph_review == 0) meetCondition = true;
                    if (_FILTER == 'arq' && _FULL_LIST[i].ph_review != null) meetCondition = true;
                    if (_FILTER == 'arq:si' && _FULL_LIST[i].ph_review == 1) meetCondition = true;
                    if (_FILTER == 'arq:na' && !_FULL_LIST[i].sign_ph_arc_worker_id) meetCondition = true;
                } else {
                    if (_FILTER == 'jur:0' && _FULL_LIST[i].jur_review == null) meetCondition = true;
                    if (_FILTER == 'jur' && _FULL_LIST[i].jur_review != null) meetCondition = true;
                    if (_FILTER == 'jur:no' && _FULL_LIST[i].jur_review == 0) meetCondition = true;
                    if (_FILTER == 'jur:si' && _FULL_LIST[i].jur_review == 1) meetCondition = true;
                    if (_FILTER == 'jur:na' && !_FULL_LIST[i].asign_law_worker_id) meetCondition = true;

                    if (_FILTER == 'arq:0' && _FULL_LIST[i].arc_review == null) meetCondition = true;
                    if (_FILTER == 'arq' && _FULL_LIST[i].arc_review != null) meetCondition = true;
                    if (_FILTER == 'arq:no' && _FULL_LIST[i].arc_review == 0) meetCondition = true;
                    if (_FILTER == 'arq:si' && _FULL_LIST[i].arc_review == 1) meetCondition = true;
                    if (_FILTER == 'arq:na' && !_FULL_LIST[i].asign_arc_worker_id) meetCondition = true;
                }
                if (_FILTER == 'est:0' && (_FULL_LIST[i].eng_review == null || _FULL_LIST[i].eng_review_2 == null)) meetCondition = true;
                if (_FILTER == 'est' && (_FULL_LIST[i].eng_review != null && _FULL_LIST[i].eng_review_2 != null)) meetCondition = true;
                if (_FILTER == 'est:no' && (_FULL_LIST[i].eng_review == 0 || _FULL_LIST[i].eng_review_2 == 0)) meetCondition = true;
                if (_FILTER == 'est:si' && (_FULL_LIST[i].eng_review == 1 && _FULL_LIST[i].eng_review_2 == 1)) meetCondition = true;
                if (_FILTER == 'est:na' && !_FULL_LIST[i].asign_eng_worker_id) meetCondition = true;
                // ID
                if (_FILTER.includes('num:')) {
                    let _lookForId = _FILTER.split(':');
                    if (_FULL_LIST[i].id_public.includes(_lookForId[1])) meetCondition = true;
                }
                if (_FILTER.includes('n:')) {
                    let _lookForId = _FILTER.split(':');
                    if (_FULL_LIST[i].id_public.includes(_lookForId[1])) meetCondition = true;
                }
                // DAYS
                if (_FILTER.includes('dias>')) {
                    let _lookForDays = _FILTER.split('>');
                    let _daysPassed = dateParser_timePassed(_FULL_LIST[i].clock_payment);
                    if (_daysPassed > 0 && _daysPassed >= _lookForDays[1]) meetCondition = true;
                }
                if (_FILTER.includes('dias<')) {
                    let _lookForDays = _FILTER.split('<');
                    let _daysPassed = dateParser_timePassed(_FULL_LIST[i].clock_payment);
                    if (_daysPassed > 0 && _daysPassed <= _lookForDays[1]) meetCondition = true;
                }
                // MIX
                // SIGN
                if (_FILTER == 'valla' && _FULL_LIST[i].sign != null) {
                    let sign = [];
                    sign = _FULL_LIST[i].sign.split(',');
                    if (sign[1] != undefined) visualViewport = true;
                }
                if (_FILTER == 'vallano' && _FULL_LIST[i].sign == null) meetCondition = true;
                // SEAL
                if (_FILTER == 'sello' && _FULL_LIST[i].seal != null) meetCondition = true;
                if (_FILTER == 'sellono' && _FULL_LIST[i].seal == null) meetCondition = true;
                // REPORT
                if (_FILTER == 'rep') {
                    if (_FULL_LIST[i].tipo && _FULL_LIST[i].tipo.includes('F')) {
                        if (_FULL_LIST[i].report_cub) meetCondition = true;
                    }
                }
                if (_FILTER == 'repno') {
                    if (_FULL_LIST[i].tipo && _FULL_LIST[i].tipo.includes('F')) {
                        if (!_FULL_LIST[i].report_cub) meetCondition = true;
                    }
                }
                // NEIGHBOOURS
                if (_FILTER == 'vecino') {
                    let ITEM = _FULL_LIST[i];
                    if (ITEM.neighbours > 0 && !regexChecker_isPh(ITEM, true)) {
                        if (ITEM.neighbours == ITEM.alerted) meetCondition = true;
                    }
                }
                if (_FILTER == 'vecinono') {
                    let ITEM = _FULL_LIST[i];
                    if (ITEM.neighbours > 0 && !regexChecker_isPh(ITEM, true)) {
                        if (ITEM.neighbours != ITEM.alerted) meetCondition = true;
                    }
                }
                // TYPE
                if (_FILTER == 'urb' && _FULL_LIST[i].tipo == 'A') meetCondition = true;
                if (_FILTER == 'par' && _FULL_LIST[i].tipo == 'B') meetCondition = true;
                if (_FILTER == 'sub' && _FULL_LIST[i].tipo == 'C') meetCondition = true;
                if (_FILTER == 'con' && _FULL_LIST[i].tipo == 'D') meetCondition = true;
                if (_FILTER == 'conre' && _FULL_LIST[i].tipo == 'D,F') meetCondition = true;
                if (_FILTER == 'lcoa' && _FULL_LIST[i].tipo == 'D,G') meetCondition = true;
                if (_FILTER == 'rec' && _FULL_LIST[i].tipo == 'F') meetCondition = true;
                if (_FILTER == 'oa' && _FULL_LIST[i].tipo == 'G') meetCondition = true;
                if (_FILTER == 'lic:no' && !_FULL_LIST[i].tipo) meetCondition = true;
                if (_FILTER.includes('lic:') && _FILTER != 'lic:no') {
                    let _lookForType = _FILTER.split(':')[1].toLocaleLowerCase();
                    let _currentType = formsParser1(_FULL_LIST[i]).toLocaleLowerCase();
                    if (_currentType.includes(_lookForType)) meetCondition = true;
                }
                // WORKER
                if (_FILTER.includes('asig:') && _FILTER != 'asig:no') {
                    let _lookForName = _FILTER.split(':');
                    let workerName = [];
                    let checkName = _lookForName[1];
                    if (regexChecker_isPh(_FULL_LIST[i], true)) {
                        if (_FULL_LIST[i].asign_ph_law_worker_name) workerName.push(_FULL_LIST[i].asign_ph_law_worker_name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase());
                        if (_FULL_LIST[i].asign_ph_arc_worker_name) workerName.push(_FULL_LIST[i].asign_ph_arc_worker_name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase());
                    } else {
                        if (_FULL_LIST[i].asign_law_worker_name) workerName.push(_FULL_LIST[i].asign_law_worker_name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase());
                        if (_FULL_LIST[i].asign_eng_worker_name) workerName.push(_FULL_LIST[i].asign_eng_worker_name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase());
                        if (_FULL_LIST[i].asign_arc_worker_name) workerName.push(_FULL_LIST[i].asign_arc_worker_name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase());
                    }
                    if (workerName.length) {
                        let name1 = checkName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
                        let name2 = workerName;
                        if (name2.includes(name1)) meetCondition = true;
                    }
                }
                if (_FILTER == 'prof:no') {
                    let workerName = "";
                    if (regexChecker_isPh(_FULL_LIST[i], true)) {
                        if (_FULL_LIST[i].asign_ph_law_worker_name) workerName = _FULL_LIST[i].asign_ph_law_worker_name;
                        if (_FULL_LIST[i].asign_ph_arc_worker_name) workerName = _FULL_LIST[i].asign_ph_arc_worker_name;
                    } else {
                        if (_FULL_LIST[i].asign_law_worker_name) workerName = _FULL_LIST[i].asign_law_worker_name;
                        if (_FULL_LIST[i].asign_eng_worker_name) workerName = _FULL_LIST[i].asign_eng_worker_name;
                        if (_FULL_LIST[i].asign_arc_worker_name) workerName = _FULL_LIST[i].asign_arc_worker_name;
                    }
                    if (workerName.length == 0) meetCondition = true;
                }
                // PAYMENTS
                if (_FILTER == 'pag:f' && _FULL_LIST[i].clock_payment) meetCondition = true;
                if (_FILTER == 'pag:fno' && !_FULL_LIST[i].clock_payment) meetCondition = true;

                // REPORT REVIEW
                if (_FILTER == 'acta:0' && _FULL_LIST[i].rec_review == null && _FULL_LIST[i].rec_review_2 == null) meetCondition = true;
                if (_FILTER == 'acta' && (_FULL_LIST[i].rec_review != null || _FULL_LIST[i].rec_review_2 != null)) meetCondition = true;
                if (_FILTER == 'acta:si' && _FULL_LIST[i].rec_review == 1) meetCondition = true;
                if (_FILTER == 'acta:no' && _FULL_LIST[i].rec_review == 0) meetCondition = true;
                if (_FILTER == 'acta2:no' && _FULL_LIST[i].rec_review == 0 && (_FULL_LIST[i].rec_review_2 == null || _FULL_LIST[i].rec_review_2 == 0)) meetCondition = true;
                if (_FILTER == 'acta2:si' && _FULL_LIST[i].rec_review == 0 && _FULL_LIST[i].rec_review_2 == 1) meetCondition = true;
                if (_FILTER == 'acta:not' && (_FULL_LIST[i].clock_not_1 != null || _FULL_LIST[i].clock_not_2 != null || _FULL_LIST[i].clock_not_3 != null || _FULL_LIST[i].clock_not_4 != null)) meetCondition = true;
                if (_FILTER == 'acta:not1' && (_FULL_LIST[i].clock_not_1 != null || _FULL_LIST[i].clock_not_2 != null)) meetCondition = true;
                if (_FILTER == 'acta:not2' && (_FULL_LIST[i].clock_not_3 != null || _FULL_LIST[i].clock_not_4 != null)) meetCondition = true;

                // PQRS X FUN 
                if (_FILTER == 'pqrs' && _FULL_LIST[i].pqrs > 0) meetCondition = true;

                if (inverseCondition) meetCondition = !meetCondition;
                if (meetCondition) meetConditions++;
            }

            if (forcedConditions) { if (meetConditions >= _FILTERS.length) _FILTER_LIST.push(_FULL_LIST[i]); }
            else { if (meetConditions > 0) _FILTER_LIST.push(_FULL_LIST[i]); }

            meetConditions = 0;
        }
        items.updateItemsFilter(_FILTER_LIST, () => { });
    }

    let _FILTERS_COMPONENT = <Panel header="LISTA DE FITROS" collapsible bordered>
        <List size="sm" hover>
            <List.Item style={{ backgroundColor: filterList_func.color }}>
                <label className="fw-b mx-3 text-light">{filterList_func.title}</label>
            </List.Item>
            {filterList_func.filters.map((item, index) => (
                <List.Item key={index} index={index} onClick={() => _SET_FILTERS(item.title, item.badge)}>
                    <label className="mx-2"> {item.badge ? <Badge color={item.color} content={item.title} /> : <label className="fw-b">{item.title}</label>} <label>{item.desc}</label></label>
                </List.Item>
            ))}
        </List>
        <Row>
            {filtersList.map((item, index) => (
                <Col lg={6} md={12} sm={24} xs={24}>
                    <List size="sm" hover>
                        <List.Item style={{ backgroundColor: item.color }}>
                            <label className="fw-b mx-3 text-light">{item.title}</label>
                        </List.Item>
                        {item.filters.map((itemFilter, indexf) => (
                            <List.Item key={indexf} index={indexf} onClick={() => _SET_FILTERS(itemFilter.title, itemFilter.badge)}>
                                <label className="mx-2"> {itemFilter.badge ? <Badge color={itemFilter.color} content={itemFilter.title} /> : <label className="fw-b">{itemFilter.title}</label>} <label>{itemFilter.desc}</label></label>
                            </List.Item>
                        ))}
                    </List>
                </Col>
            ))}
        </Row>
    </Panel>


    const datePicker = (
        <InputGroup>
            <InputGroup.Addon> RANGO DE FECHAS </InputGroup.Addon>
            <DatePicker format="yyyy-MM-dd" block appearance="subtle"  />
            <InputGroup.Addon> - </InputGroup.Addon>
            <DatePicker format="yyyy-MM-dd" block appearance="subtle"  />
        </InputGroup>
    );
    return (
        <>
            <Row className="my-2">
                <Col lg={8} md={12} sm={24} xs={24}>{datePicker}</Col>
            </Row>
            <Row>
                {tagInput}
            </Row>
            <Row className="my-1">
                {_FILTERS_COMPONENT}
            </Row>
            <Row>
                <FUN_CHARTS_COMPONENT data={items.itemsFilter} _SET_FILTERS={_SET_FILTERS} workers={props.workers} />
            </Row>
        </>);
}
