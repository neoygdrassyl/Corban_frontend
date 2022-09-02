
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


export function parserReport(_fun, _state) {
    let clock_1 = _GET_CLOCK_STATE_VERSION(_fun, _state, 1); // FIRST REVIEW
    let clock_100 = _GET_CLOCK_STATE_VERSION(_fun, _state, 100); // ASIGN
    let clock_200 = _GET_CLOCK_STATE_VERSION(_fun, _state, 200); // REVIEWS
    let clock_300 = _GET_CLOCK_STATE_VERSION(_fun, _state, 300); // NOTIFICATIONS
    let rew;
    let rew_date;
    let asign;
    let not;

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
        not: not
    }

    return report

}