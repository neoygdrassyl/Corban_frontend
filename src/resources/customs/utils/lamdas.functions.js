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

    permits.some(permit => {
        let objPermit = GET_JSON_FULL(permit.permits);
        if (id in objPermit) {
            if (objPermit[id].includes(value)) return true;
            else return false;
        }
        return false;
    })

}