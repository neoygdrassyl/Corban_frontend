import React from 'react';

import { parserReport, _GET_CLOCK_STATE } from '../../../../resources/customs/utils/fun.loader';
import { regexChecker_isPh } from '../../../../resources/customs/utils/funParser.module';
import { Progress } from 'rsuite';

function PROGRESION_BAR(props) {
    const { row } = props;
    var progress = 0;
    var status = 'active';

    if (row.state >= 100 && row.state < 200) {
        progress = 100;
        status = ('success')
    }
    else if (row.state >= 200) {
        progress = (100);
        status = ('fail')
    } else {

        let items = []
        const f1 = row.fun_1s ? row.fun_1s[0] : false;
        const f3 = row.fun_3s ? row.fun_3s : [];
        const flaw = row.fun_law || false;

        const useNeight = row.rules ? row.rules.split(';')[0] != 1 : true;
        const useSign = row.rules ? row.rules.split(';')[0] != 1 : true;;
        const useReport = f1 ? f1.tipo ? f1.tipo.includes('F') : false : false;
        const useEng = row.rules ? row.rules.split(';')[1] != 1 : true;;
        //const isOa = regexChecker_isOA(f1);
        const usePH = regexChecker_isPh(f1, true);

        const payStatus = _GET_CLOCK_STATE(row, 3).date_start ? 'success' : 'fail';
        const checkStatus = _GET_CLOCK_STATE(row, 5).date_start ? 'success' : 'fail';
        const neightStatus = () => {
            let state = f3.every(n => n.status == 1);
            if (state) return 'success';
            state = f3.every(n => n.status == 1 || n.status == 2);
            if (state) return 'warning';
            return 'fail'
        };
        const signStatus = flaw.sign ? flaw.sign.split(',')[1] ? 'success' : 'fail' : 'fail';
        const reportStatus = () => {
            let sentReport = flaw.report_data ? flaw.report_data.split(',')[2] : false;
            let replyReport = flaw.report_data ? flaw.report_data.split(',')[3] : false;

            if (sentReport && replyReport) return 'success';
            if (sentReport && !replyReport) return 'warning';
            return 'fail'
        };
        const actaStatus = () => {
            let rew1 = _GET_CLOCK_STATE(row, 30);
            let rew2 = _GET_CLOCK_STATE(row, 49);
            let con1 = rew1.desc ? rew1.desc.includes('CUMPLE') && !rew1.desc.includes('NO CUMPLE') : false;
            let con2 = rew2.desc ? rew2.desc.includes('CUMPLE') && !rew2.desc.includes('NO CUMPLE') : false;
            if (con1 || con2) return 'success';
            if (!con1 && !con2) return 'fail';
            return 'fail';
        };

        let reportLaw = () => parserReport(row, 11)
        let reportArc = () => parserReport(row, 13)
        let reportEng = () => parserReport(row, 12)
        let reportPh = () => parserReport(row, 14)



        const lawStatus = () => {
            let lastRew = 0;
            reportLaw().review.map(r => {
                if (r !== '' || r !== undefined) lastRew = r
            })
            if (lastRew == 1) return 'success';
            if (lastRew == 0) return 'fail';
            return 'start'
        };
        const arcStatus = () => {
            let lastRew = 0;
            reportArc().review.map(r => {
                if (r !== '' || r !== undefined) lastRew = r
            })
            if (lastRew == 1) return 'success';
            if (lastRew == 0) return 'fail';
            return 'start'
        };
        const engStatus = () => {
            let lastRew = [0, 0]
            reportEng().review.map(r => {
                if (!r) return;
                let rews = r.split(',');
                if (rews[0] !== '' && rews[0] !== undefined && rews[1] !== '' && rews[1] !== undefined) lastRew = rews
            })
            if (lastRew[0] == 1) return 'success';
            if (lastRew[0] == 0 && lastRew[1] == 1) return 'success';
            if (lastRew[0] == 0 && lastRew[0] == 0) return 'fail';
            console.log(lastRew)
            return 'start'
        };
        const phStatus = () => {
            let lastRew = 0;
            reportPh().review.map(r => {
                if (r !== '' || r !== undefined) lastRew = r
            })
            if (lastRew == 1) return 'success';
            if (lastRew == 0) return 'fail';
            return 'start'
        };

        const pay2Status = _GET_CLOCK_STATE(row, 69).date_start ? 'success' : 'start';
        const viaStatus = _GET_CLOCK_STATE(row, 61).date_start ? 'success' : 'start';
        const licStatus = _GET_CLOCK_STATE(row, 100).date_start ? 'success' : 'start';

        payStatus == 'success' ? items.push(1) : items.push(0);
        checkStatus == 'success' ? items.push(1) : items.push(0);
        if (useNeight && !usePH) neightStatus() == 'success' ? items.push(1) : items.push(0);
        if (useSign && !usePH) signStatus == 'success' ? items.push(1) : items.push(0);
        if (useReport) reportStatus() == 'success' ? items.push(1) : items.push(0);

        if (!usePH) lawStatus() == 'success' ? items.push(1) : items.push(0);
        if (!usePH) arcStatus() == 'success' ? items.push(1) : items.push(0);
        if (useEng && !usePH) engStatus() == 'success' ? items.push(1) : items.push(0);
        if (usePH) phStatus() == 'success' ? items.push(1) : items.push(0);

        if (!usePH) actaStatus() == 'success' ? items.push(1) : items.push(0);
        if (!usePH) viaStatus == 'success' ? items.push(1) : items.push(0);
        if (!usePH) pay2Status == 'success' ? items.push(1) : items.push(0);
        if (!usePH) licStatus == 'success' ? items.push(1) : items.push(0);

        let _progress = Math.round(Number(items.filter(i => i == 1).length / items.length * 100))
        progress = (_progress);
    }
    return (
        <Progress.Line percent={progress} status={status} />
    );
}

export default PROGRESION_BAR;
