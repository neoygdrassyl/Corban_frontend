import { GET_JSON_FULL } from "./lamdas.functions";

function _GET_CHILD_CLOCK(fun) {
    var _CHILD = fun.fun_clocks;
    var _LIST = [];
    if (_CHILD) {
        _LIST = _CHILD;
    }
    return _LIST;
}

export function _GET_CLOCK_STATE_VERSION(_fun, _state, _version) {
    var _CLOCK = _GET_CHILD_CLOCK(_fun);
    if (_state == null) return false;
    for (var i = 0; i < _CLOCK.length; i++) {
        if (_CLOCK[i].state == _state && _CLOCK[i].version == _version) return _CLOCK[i];
    }
    return false;
}
export function _GET_CLOCK_STATE(_fun, _state) {
    var _CLOCK = _GET_CHILD_CLOCK(_fun);
    if (_state == null) return false;
    for (var i = 0; i < _CLOCK.length; i++) {
        if (_CLOCK[i].state == _state) return _CLOCK[i];
    }
    return false;
}

export function _GET_FUN_0(_data) {
    // fun_0, + fun_law
    var _CHILD = _data ? _data.fun_law ?? {} : {};
    var _CHILD_VARS = {
        id: _data.id ?? false,
        id_pqrs: _data.id_pqrs ?? false,
        id_payment: _data.id_payment ?? false,
        date_payment: _data.date ?? false,
        id6payment: _CHILD.id6payment ?? false,
        state: _data.state ?? false,
        type: _data.type ?? false,
        model: _data.model ?? false,
        tags: _data.tags ?? '',
        rules: _data.rules ? _data.rules.split(';') : [0, 0],
        sign_id: _CHILD.sign ? _CHILD.sign.split(',')[0] : 0,
        sign_date: _CHILD.sign ? _CHILD.sign.split(',')[1] : '',
        report_data: {
            inform: _CHILD.report_data ? _CHILD.report_data.split(',')[0] : 0,
            id_cub: _CHILD.report_cub ?? false,
            date: _CHILD.report_data ? _CHILD.report_data.split(',')[2] : '',
            reply: _CHILD.report_data ? _CHILD.report_data.split(',')[3] : '',
            id_reply: _CHILD.report_data ? _CHILD.report_data.split(',')[5] : '',
            id6: _CHILD.report_data ? _CHILD.report_data.split(',')[6] : 0,
        },
        report_data_pdf: GET_JSON_FULL(_CHILD.report_data_pdf),
        report_cub: _CHILD.report_cub ?? false,
        cub_inc: _CHILD.cub_inc ?? false,
        cub_ldf: _CHILD.cub_ldf ?? false,
        cub_act: _CHILD.cub_act ?? false,
        cub_inc_json: GET_JSON_FULL(_CHILD.cub_inc_json),
        cub_ldf_json: GET_JSON_FULL(_CHILD.cub_ldf_json),
        cub_act_json: GET_JSON_FULL(_CHILD.cub_act_json),
    }
    return _CHILD_VARS;
}
export function _GET_FUN_1(_data, asArray) {
    var _CHILD = _data ? _data.fun_1s ? _data.fun_1s[0] ?? {} : {} : {};
    var _CHILD_VARS = {
        id: _CHILD ? _CHILD.id ?? false : false,
        tipo: asArray ? (_CHILD.tipo ? _CHILD.tipo.split(',') : []) : _CHILD ? _CHILD.tipo ?? '' : '',
        tramite: asArray ? (_CHILD.tramite ? _CHILD.tramite.split(',') : []) : _CHILD ? _CHILD.tramite ?? '' : '',
        m_urb: asArray ? (_CHILD.m_urb ? _CHILD.m_urb.split(',') : []) : _CHILD ? _CHILD.m_urb ?? '' : '',
        m_sub: asArray ? (_CHILD.m_sub ? _CHILD.m_sub.split(',') : []) : _CHILD ? _CHILD.m_sub ?? '' : '',
        m_lic: asArray ? (_CHILD.m_lic ? _CHILD.m_lic.split(',') : []) : _CHILD ? _CHILD.m_lic ?? '' : '',
        usos: asArray ? (_CHILD.usos ? _CHILD.usos.split(',') : []) : _CHILD ? _CHILD.usos ?? '' : '',
        area: asArray ? (_CHILD.area ? _CHILD.area.split(',') : []) : _CHILD ? _CHILD.area ?? '' : '',
        vivienda: asArray ? (_CHILD.vivienda ? _CHILD.vivienda.split(',') : []) : _CHILD ? _CHILD.vivienda ?? '' : '',
        cultural: asArray ? (_CHILD.cultural ? _CHILD.cultural.split(',') : []) : _CHILD ? _CHILD.cultural ?? '' : '',
        regla_1: asArray ? (_CHILD.regla_1 ? _CHILD.regla_1.split(',') : []) : _CHILD ? _CHILD.regla_1 ?? '' : '',
        regla_2: asArray ? (_CHILD.regla_2 ? _CHILD.regla_2.split(',') : []) : _CHILD ? _CHILD.regla_2 ?? '' : '',
        anex_1: asArray ? (_CHILD.anex1 ? _CHILD.anex1.split(';') : []) : _CHILD ? _CHILD.anex1 ?? '' : '',
        anex_2: GET_JSON_FULL(_CHILD ? _CHILD.anex2 : false),
        anex_3: asArray ? (_CHILD.anex3 ? _CHILD.anex3.split(';') : []) : _CHILD ? _CHILD.anex3 ?? '' : '',
        description: _CHILD ? _CHILD.description ?? '' : '',
    }

    return _CHILD_VARS;
}
export function _GET_FUN_2(_data) {
    var _CHILD = _data ? _data.fun_2 ?? {} : {};
    var _CHILD_VARS = {
        direccion: _CHILD.direccion ?? '',
        direccion_ant: _CHILD.direccion_ant ?? '',
        matricula: _CHILD.matricula ?? '',
        catastral: _CHILD.catastral ?? '',
        catastral_2: _CHILD.catastral_2 ?? '',
        suelo: [_CHILD.suelo] ?? [''],
        lote_pla: [_CHILD.lote_pla] ?? [''],
        barrio: _CHILD.barrio ?? '',
        vereda: _CHILD.vereda ?? '',
        comuna: _CHILD.comuna ?? '',
        sector: _CHILD.sector ?? '',
        estrato: _CHILD.estrato ?? '',
        corregimiento: _CHILD.corregimiento ?? '',
        manzana: _CHILD.manzana ?? '',
        lote: _CHILD.lote ?? '',
    }
    return _CHILD_VARS;
}
export function _GET_FUN_3(_data) {
    var _CHILDREN = _data ? _data.fun_3s ?? [] : [];
    var _VAR = _CHILDREN.map(item => {
        return { ...item }
    })

    return _VAR;
}
export function _GET_FUN_4(_data) {
    var _CHILDREN = _data ? _data.fun_4s ?? [] : [];
    var _VAR = _CHILDREN.map(item => {
        return { ...item }
    })

    return _VAR;
}
export function _GET_FUN_51(_data) {
    var _CHILDREN = _data ? _data.fun_51s ?? [] : [];
    var _VAR = _CHILDREN.map(item => {
        return {
            ...item,
            docs: item.docs ? item.docs.split(',') : [],
        }
    })

    return _VAR;
}
export function _GET_FUN_52(_data) {
    var _CHILDREN = _data ? _data.fun_52s ?? [] : [];
    var _VAR = _CHILDREN.map(item => {
        return {
            ...item,
            docs: item.docs ? item.docs.split(',') : [],
        }
    })

    return _VAR;
}
export function _GET_FUN_53(_data) {
    var _CHILD = _data ? _data.fun_53s ? _data.fun_53s[0] ?? {} : {} : {};
    var _CHILD_VARS = {
        id: _CHILD.id ?? false,
        name: _CHILD.name ?? '',
        surname: _CHILD.surname ?? '',
        id_number: _CHILD.id_number ?? '',
        role: _CHILD.role ?? '',
        number: _CHILD.number ?? '',
        email: _CHILD.email ?? '',
        address: _CHILD.address ?? '',
        docs: _CHILD.docs ? _CHILD.docs.split(',') : [],
    }

    return _CHILD_VARS;
}
export function _GET_FUN_6(_data) {
    var _CHILDREN = _data ? _data.fun_6s ?? [] : [];
    var _VAR = _CHILDREN.map(item => {
        return {
            ...item,
        }
    })

    return _VAR;
}
export function _GET_FUN_C(_data) {
    var _CHILD = _data ? _data.fun_cs ? _data.fun_cs[0] ?? {} : {} : {};
    var _CHILD_VARS = {
        id: _CHILD.id ?? false,
        worker: _CHILD.worker ?? '',
        date: _CHILD.date ?? '',
        condition: _CHILD.condition ?? null,
        details: _CHILD.details ?? '',
        reciever_name: _CHILD.reciever_name ?? '',
        reciever_date: _CHILD.reciever_date ?? '',
        reciever_id: _CHILD.reciever_id ?? '',
        reciever_actor: _CHILD.reciever_actor ?? '',
        legal_date: _CHILD.legal_date ?? '',
    }
    return _CHILD_VARS;
}
export function _GET_FUN_REVIEW(_data) {
    var _CHILD = _data ? _data.fun_rs ? _data.fun_rs[0] ?? {} : {} : {};
    var _CHILD_VARS = {
        ..._CHILD,
        code: _CHILD.code ? _CHILD.code.split(',') : [],
        checked: _CHILD.checked ? _CHILD.checked.split(',') : [],
        review: _CHILD.review ? _CHILD.review.split(',') : [],
        id6: _CHILD.id6 ? _CHILD.id6.split(',') : [],
    }

    return _CHILD_VARS;
}

export function _GET_RECORD_REVIEW(_data){
    var _CHILD = _data ? _data.record_review ?? {} : {};
    var _CHILD_VARS = {
        ..._CHILD,
    }

    return _CHILD_VARS;
}

export function parserReport(_fun, _state, _asArray) {
    let clock_1 = _GET_CLOCK_STATE_VERSION(_fun, _state, 1); // FIRST REVIEW
    let clock_100 = _GET_CLOCK_STATE_VERSION(_fun, _state, 100); // ASIGN
    let clock_200 = _GET_CLOCK_STATE_VERSION(_fun, _state, 200); // REVIEWS
    let clock_300 = _GET_CLOCK_STATE_VERSION(_fun, _state, 300); // NOTIFICATIONS
    let rew;
    let rew_date;
    let asign;
    let not;
    let type = '';

    if(_state == 11) type = 'law'
    if(_state == 12) type = 'eng'
    if(_state == 13) type = 'arc'
    if(_state == 14) type = 'ph'

    if (!clock_100.date_start) asign = [];
    else asign = clock_100.date_start.split(';')

    if (!clock_200.resolver_context) {
        if (_state == 12) {
            let rews = clock_1.desc ? clock_1.desc.split(',') : ['NO', 'NO'];
            rew = clock_1.desc ? [(!rews[0].includes('NO') ? 1 : 0) + ',' + (!rews[1].includes('NO') ? 1 : 0)] : []
        }
        if (_state == 14) {
            let rews = clock_1.desc ? clock_1.desc.split(',') : ['NO'];
            rew = clock_1.desc ? [!rews[0].includes('NO') ? 1 : 0] : []
        }
        else {
            rew = clock_1.desc ? [clock_1.desc.includes('SI') ? 1 : 0] : [];
        }
    }
    else rew = clock_200.resolver_context.split(';')

    if (!clock_200.date_start) rew_date = [clock_1.date_start];
    else rew_date = clock_200.date_start.split(';')

    if (!clock_300.date_start) not = [];
    else not = clock_300.date_start.split(';')

    let report = {
        asign: asign,
        review: rew,
        rew_date: rew_date,
        not: not,
        type: type,
    }
    if(_asArray){
        let reportArray = [];
        rew.map((a, i) => reportArray.push({
            asign: asign[i],
            review: rew[i],
            rew_date: rew_date[i],
            not: not[i],
            type: type,
        }))
        return reportArray;
    }
    return report

}