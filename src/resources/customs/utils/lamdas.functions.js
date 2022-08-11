import SERVICE_SUBMIT from '../../../services/apis/submit.service';
import SERVICE_FUN from '../../../services/apis/fun.service';
import { ALERT_ERROR } from './notifications.vars';
import moment from 'moment';

export function GET_LAST_VR(_htmlId, _lang) {
    let new_id = "";
    let htmlId = _htmlId ?? 'submit_1';
    SERVICE_SUBMIT.getlastid()
        .then(response => {
            if (response.data.length) {
                new_id = response.data[0].vr;
                if (new_id) {
                    let concecutive = new_id.split('-')[1];
                    concecutive = Number(concecutive) + 1
                    if (concecutive < 1000) concecutive = "0" + concecutive
                    if (concecutive < 100) concecutive = "0" + concecutive
                    if (concecutive < 10) concecutive = "0" + concecutive
                    new_id = new_id.split('-')[0] + "-" + concecutive
                    document.getElementById(htmlId).value = new_id;
                } else document.getElementById(htmlId).value = "VR" + moment().format('YY') + "-0001";
            } else document.getElementById(htmlId).value = "VR" + moment().format('YY') + "-0001";
        })
        .catch(e => {
            console.log(e);
            ALERT_ERROR(_lang);
        });

}

export function GET_LAST_ID_PUBLIC(_htmlId, _lang) {
    let new_id = "";
    let _user = GET_JSON_FULL(localStorage.getItem('corban_user'));
    let _conn = GET_JSON_FULL(localStorage.getItem('corban_conn')).conn;
    let nomens = _user.companies[_conn].technicalInfo.serials.process

    SERVICE_FUN.getLastIdPublic()
        .then(response => {
            if (response.data.length) {
                new_id = response.data[0].id;
                if (new_id) {
                    let _id = new_id.split('-')
                    let concecutive = _id[3];
                    concecutive = Number(concecutive) + 1
                    if (concecutive < 1000) concecutive = "0" + concecutive
                    if (concecutive < 100) concecutive = "0" + concecutive
                    if (concecutive < 10) concecutive = "0" + concecutive
                    new_id = `${_id[0]}-${_id[1]}-${_id[2]}-${concecutive}`
                    document.getElementById(_htmlId).value = new_id;
                } else document.getElementById(_htmlId).value = nomens + moment().format('YY') + "-0001";
            } else document.getElementById(_htmlId).value = nomens + moment().format('YY') + "-0001";
        })
        .catch(e => {
            console.log(e);
            ALERT_ERROR(_lang);
        });

}

export function GET_JSON_FIELD(objec, field) {
    if (!objec) return false;
    let json = objec;
    let whileSafeBreaker = 0;
    while (!json[field]) {
        try {
            json = JSON.parse(json)
        } catch (error) {
            return false;
        }
        whileSafeBreaker++
        if (whileSafeBreaker == 10) return false;
    }
    return json[field]
}

export function GET_JSON_FULL(objec) {
    if (!objec) return {};
    let json = objec;
    let whileSafeBreaker = 0;
    while (typeof json !== 'object') {
        try {
            json = JSON.parse(json)
        } catch (error) {
            return false;
        }
        whileSafeBreaker++
        if (whileSafeBreaker == 10) return false;
    }
    return json
}

export function FIND_PERMIT(permits, id, value) {
    if (permits.some(permit => permit.priority == 11)) return true;
    return permits.some(permit => {
        let objPermit = GET_JSON_FULL(permit.permits);

        if (id in objPermit) return objPermit[id].includes(value)
        return false;
    })
}

export function CONVERT_INT_TO_MONEY(money) {
    var moneyDots = String(Math.round(money)).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    return `$${moneyDots}`
}

export function GET_FUN_STATE(state, _lang, inString) {
    let lang = _lang || 'en';
    let trn = {
        en: {
            desj: 'WITHDRAWAL (Execution)',
            inc: 'INCOPLETE',
            ldf: 'LEGALLY SUBMITTED',
            exp: 'ISSUING',
            close: 'CLOSED',
            arch: 'ARCHIVED',
            close0: 'CLOSED (Withdrawal)',
            close1: 'WITHDRAWAL (Incomplete)',
            close2: 'WITHDRAWAL (Not present sign)',
            close3: 'WITHDRAWAL (Not corrected act)',
            close4: 'WITHDRAWAL (Not payed)',
            close5: 'WITHDRAWAL (Voluntary)',
        },
        es: {
            desj: 'DESISTIDO (Ejecución)',
            inc: 'INCOMPLETO',
            ldf: 'LYDF',
            exp: 'EXPEDICIÓN',
            close: 'CERRADO',
            arch: 'ARCHIVADO',
            close0: 'CERRADO (Desistido)',
            close1: 'DESISTIDO (Incompleto)',
            close2: 'DESISTIDO (No radicó valla)',
            close3: 'DESISTIDO (No subsanó Acta)',
            close4: 'DESISTIDO (No radicó pagos)',
            close5: 'DESISTIDO (Voluntario)',
        }
    }

    if (state < '-1') return inString ? trn[lang].desj : <label className='text-danger text-center'>{trn[lang].desj}</label>
    if (state == '-1') return trn[lang].inc
    if (state == '1') return trn[lang].inc
    if (state == '5') return trn[lang].ldf
    if (state == '50') return trn[lang].exp
    if (state == '100') return inString ? trn[lang].close : <label className='fw-bold'>{trn[lang].close}</label>
    if (state == '101') return inString ? trn[lang].arch : <label className='fw-bold text-primary'>{trn[lang].arch}</label>
    if (state == '200') return inString ? trn[lang].close0 : <label className='fw-bold text-center'>{trn[lang].close0}</label>
    if (state == '201') return inString ? trn[lang].close1 : <label className='text-danger text-center'>{trn[lang].close1}</label>
    if (state == '202') return inString ? trn[lang].close2 : <label className='text-danger text-center'>{trn[lang].close2}</label>
    if (state == '203') return inString ? trn[lang].close3 : <label className='text-danger text-center'>{trn[lang].close3}</label>
    if (state == '204') return inString ? trn[lang].close4 : <label className='text-danger text-center'>{trn[lang].close4}</label>
    if (state == '205') return inString ? trn[lang].close5 : <label className='text-danger text-center'>{trn[lang].close5}</label>
    return ''
}