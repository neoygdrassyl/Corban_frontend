import React from 'react';

import { parserReport, _GET_CLOCK_STATE } from '../../utils/fun.loader';
import { regexChecker_isOA, regexChecker_isPh } from '../../utils/funParser.module';
import { UtilContext } from '../../contextProviders/util.provider';
import { useContext } from 'react';

import { DocPass } from '@rsuite/icons/';
import { FaSign } from 'react-icons/fa';
import { VscLaw } from 'react-icons/vsc';
import { BsBuilding } from 'react-icons/bs';
import { Tooltip2 } from '@blueprintjs/popover2';
import CheckOutlineIcon from '@rsuite/icons/CheckOutline';
import TextImageIcon from '@rsuite/icons/TextImage';
import AdminIcon from '@rsuite/icons/Admin';
import PageIcon from '@rsuite/icons/Page';
import GearIcon from '@rsuite/icons/Gear';
import { Icon } from '@blueprintjs/core';
import { Tooltip, Whisper } from 'rsuite';

function PROGRESION_ICONS(row, show) {

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('progress_icons');
    const f1 = row.fun_1s ? row.fun_1s[0] : false;
    const f3 = row.fun_3s ? row.fun_3s : [];
    const flaw = row.fun_law || false;

    const iconSize = '16px'

    const useNeight = row.rules ? row.rules.split(';')[0] != 1 : true;
    const useSign = row.rules ? row.rules.split(';')[0] != 1 : true;;
    const useReport = f1 ? f1.tipo ? f1.tipo.includes('F') : false : false;
    const useEng = row.rules ? row.rules.split(';')[1] != 1 : true;;
    //const isOa = regexChecker_isOA(f1);
    const usePH = regexChecker_isPh(f1, true);

    const payStatus = _GET_CLOCK_STATE(row, 3).date_start ? 'success' : 'start';
    const checkStatus = _GET_CLOCK_STATE(row, 5).date_start ? 'success' : 'start';
    const neightStatus = () => {
        if (f3.length == 0) return 'start';
        let state = f3.every(n => n.state == 1);
        if (state) return 'success';
        state = f3.every(n => n.state == 1 || n.state == 2);
        if (state) return 'success';
        if (!state) return 'warning';
        return 'fail'
    };
    const signStatus = flaw.sign ? flaw.sign.split(',')[1] ? 'success' : 'start' : 'start';
    const reportStatus = () => {
        let sentReport = flaw.report_data ? flaw.report_data.split(',')[2] : false;
        let replyReport = flaw.report_data ? flaw.report_data.split(',')[3] : false;

        if (sentReport && replyReport) return 'success';
        if (sentReport && !replyReport) return 'warning';
        return 'start'
    };
    const actaStatus = () => {
        let rew1 = _GET_CLOCK_STATE(row, 30);
        let rew2 = _GET_CLOCK_STATE(row, 49);
        let con1 = rew1.desc ? rew1.desc.includes('CUMPLE') && !rew1.desc.includes('NO CUMPLE') : false;
        let con2 = rew2.desc ? rew2.desc.includes('CUMPLE') && !rew2.desc.includes('NO CUMPLE') : false;

        let date2 = rew2.date_start;
        if (rew1 == false && rew2 == false) return 'start';
        if (con1 || con2) return 'success';
        if (!con1 && !con2 && date2) return 'fail';
        if (!con1 && !con2) return 'warning';
        return 'start';
    };

    let reportLaw = () => parserReport(row, 11)
    let reportArc = () => parserReport(row, 13)
    let reportEng = () => parserReport(row, 12)
    let reportPh = () => parserReport(row, 14)

    const lawStatus = () => {
        let lastRew = 0;
        let asign = false;

        reportLaw().review.map(r => {
            if (r !== '' || r !== undefined) lastRew = r
        })

        reportLaw().asign.map(r => {
            if (r !== '' || r !== undefined) asign = r
        })
        if (asign == false && lastRew == 0) return 'start';
        if (asign && reportLaw().review.every(r => r !== 0 && r !== 1)) return 'warning';
        if (lastRew == 1) return 'success';
        if (asign && lastRew == 0) return 'fail';
        return 'start'
    };
    const arcStatus = () => {
        let lastRew = 0;
        let asign = false;
        reportArc().review.map(r => {
            if (r !== '' || r !== undefined) lastRew = r
        })
        reportArc().asign.map(r => {
            if (r !== '' || r !== undefined) asign = r
        })
        if (asign == false && lastRew == 0) return 'start';
        if (asign && reportLaw().review.every(r => r !== 0 && r !== 1)) return 'warning';
        if (lastRew == 1) return 'success';
        if (asign && lastRew == 0) return 'fail';
        return 'start'
    };
    const engStatus = () => {
        let lastRew = [0, 0]
        let asign = false;

        reportEng().review.map(r => {
            if (!r) return;
            let rews = r.split(',');
            if (rews[0] !== '' && rews[0] !== undefined && rews[1] !== '' && rews[1] !== undefined) lastRew = rews
        })
        reportEng().asign.map(r => {
            if (r !== '' || r !== undefined) asign = r
        })


        if (asign == false && lastRew[0] == 0) return 'start';
        if (asign && reportEng().review.every(r => !r)) return 'warning';
        if (lastRew[0] == 1) return 'success';
        if (lastRew[0] == 0 && lastRew[1] == 1) return 'success';
        if (lastRew[0] == 0 && lastRew[0] == 0) return 'fail';
        console.log(lastRew)
        return 'start'
    };
    const phStatus = () => {
        let lastRew = 0;
        let asign = false;
        reportPh().review.map(r => {
            if (r !== '' || r !== undefined) lastRew = r
        })
        reportPh().asign.map(r => {
            if (r !== '' || r !== undefined) asign = r
        })
        if (asign == false && lastRew == 0) return 'start';
        if (asign && reportLaw().review.every(r => r !== 0 && r !== 1)) return 'warning';
        if (lastRew == 1) return 'success';
        if (asign && lastRew == 0) return 'fail';
        return 'start'
    };

    const pay2Status = _GET_CLOCK_STATE(row, 69).date_start ? 'success' : 'start';
    const viaStatus = _GET_CLOCK_STATE(row, 61).date_start ? 'success' : 'start';
    const licStatus = _GET_CLOCK_STATE(row, 100).date_start ? 'success' : 'start';


    const conditionColors = { start: 'DimGrey', fail: 'FireBrick', warning: 'Orange', success: 'LimeGreen' };

    let iconsBP = () => {
        return <div>
            {show.pay ? <Tooltip2 content={trn.pay[payStatus]} placement="top" ><Icon icon="dollar" style={{ color: conditionColors[payStatus], fontSize: iconSize, marginLeft: '1px' }} /> </Tooltip2> : ''}
            {show.check ? <Tooltip2 content={trn.check[checkStatus]} placement="top"><CheckOutlineIcon style={{ color: conditionColors[checkStatus], fontSize: iconSize, marginLeft: '1px' }} /> </Tooltip2> : ''}
            {show.neigh && useNeight && !usePH ? <Tooltip2 content={trn.neigh[neightStatus()]} placement="top"><AdminIcon style={{ color: conditionColors[neightStatus()], fontSize: iconSize, marginLeft: '1px' }} /> </Tooltip2> : ''}
            {show.sign && useSign && !usePH ? <Tooltip2 content={trn.sign[signStatus]} placement="top"><FaSign style={{ color: conditionColors[signStatus], fontSize: iconSize, marginLeft: '1px' }} /> </Tooltip2> : ''}
            {show.report && useReport ? <Tooltip2 content={trn.report[reportStatus()]} placement="top"><TextImageIcon style={{ color: conditionColors[reportStatus()], fontSize: iconSize, marginLeft: '1px' }} /> </Tooltip2> : ''}

            {show.law && !usePH ? <Tooltip2 content={trn.law[lawStatus()]} placement="top"><VscLaw style={{ color: conditionColors[lawStatus()], fontSize: iconSize, marginLeft: '1px' }} /> </Tooltip2> : ''}
            {show.arc && !usePH ? <Tooltip2 content={trn.arc[arcStatus()]} placement="top"><BsBuilding style={{ color: conditionColors[arcStatus()], fontSize: iconSize, marginLeft: '1px' }} /> </Tooltip2> : ''}
            {show.eng && useEng && !usePH ? <Tooltip2 content={trn.eng[engStatus()]} placement="top"><GearIcon style={{ color: conditionColors[engStatus()], fontSize: iconSize, marginLeft: '1px' }} /> </Tooltip2> : ''}
            {show.ph && usePH ? <Tooltip2 content={trn.ph[phStatus()]} placement="top"><PageIcon style={{ color: conditionColors[phStatus()], fontSize: iconSize, marginLeft: '1px' }} /> </Tooltip2> : ''}

            {show.acta && !usePH ? <Tooltip2 content={trn.acta[actaStatus()]} placement="top"><DocPass style={{ color: conditionColors[actaStatus()], fontSize: iconSize, marginLeft: '1px' }} /> </Tooltip2> : ''}
            {show.via && !usePH ? <Tooltip2 content={trn.via[viaStatus]} placement="top"><DocPass style={{ color: conditionColors[viaStatus], fontSize: iconSize, marginLeft: '1px' }} /> </Tooltip2> : ''}
            {show.pay2 && !usePH ? <Tooltip2 content={trn.pay2[pay2Status]} placement="top"><Icon icon="dollar" style={{ color: conditionColors[pay2Status], fontSize: iconSize, marginLeft: '1px' }} /> </Tooltip2> : ''}
            {show.lic && !usePH ? <Tooltip2 content={trn.lic[licStatus]} placement="top"><DocPass style={{ color: conditionColors[licStatus], fontSize: iconSize, marginLeft: '1px' }} /> </Tooltip2> : ''}
        </div>
    }

    let iconsRS = () => {
        return <div>
            {show.pay ? <Whisper followCursor placement="auto" speaker={<Tooltip>{trn.pay[payStatus]}</Tooltip>}><Icon icon="dollar" style={{ color: conditionColors[payStatus], fontSize: iconSize, marginLeft: '1px' }} /></Whisper> : ''}
            {show.check ? <Whisper followCursor placement="auto" speaker={<Tooltip>{trn.check[checkStatus]}</Tooltip>}><CheckOutlineIcon style={{ color: conditionColors[checkStatus], fontSize: iconSize, marginLeft: '1px' }} /></Whisper> : ''}
            {show.neigh && useNeight && !usePH ? <Whisper followCursor placement="auto" speaker={<Tooltip>{trn.neigh[neightStatus()]}</Tooltip>}><AdminIcon style={{ color: conditionColors[neightStatus()], fontSize: iconSize, marginLeft: '1px' }} /></Whisper> : ''}
            {show.sign && useSign && !usePH ? <Whisper followCursor placement="auto" speaker={<Tooltip>{trn.sign[signStatus]}</Tooltip>}><Icon  style={{ color: conditionColors[signStatus], fontSize: iconSize, marginLeft: '1px' }} /></Whisper> : ''}
            {show.report && useReport ? <Whisper followCursor placement="auto" speaker={<Tooltip>{trn.report[reportStatus()]}</Tooltip>}><TextImageIcon style={{ color: conditionColors[reportStatus()], fontSize: iconSize, marginLeft: '1px' }} /></Whisper> : ''}
            
            {show.law && !usePH ? <Whisper followCursor placement="auto" speaker={<Tooltip>{trn.law[lawStatus()]}</Tooltip>}><Icon icon="book" style={{ color: conditionColors[lawStatus()], fontSize: iconSize, marginLeft: '1px' }} /></Whisper> : ''}
            {show.arc && !usePH ? <Whisper followCursor placement="auto" speaker={<Tooltip>{trn.arc[arcStatus()]}</Tooltip>}><Icon icon="home" style={{ color: conditionColors[arcStatus()], fontSize: iconSize, marginLeft: '1px' }} /></Whisper> : ''}
            {show.eng && useEng && !usePH ? <Whisper followCursor placement="auto" speaker={<Tooltip>{trn.eng[engStatus()]}</Tooltip>}><GearIcon style={{ color: conditionColors[engStatus()], fontSize: iconSize, marginLeft: '1px' }} /></Whisper> : ''}
            {show.ph && usePH ? <Whisper followCursor placement="auto" speaker={<Tooltip>{trn.ph[phStatus()]}</Tooltip>}><PageIcon style={{ color: conditionColors[phStatus()], fontSize: iconSize, marginLeft: '1px' }} /></Whisper> : ''}
            
            {show.acta && !usePH ? <Whisper followCursor placement="auto" speaker={<Tooltip>{trn.acta[actaStatus()]}</Tooltip>}><DocPass style={{ color: conditionColors[actaStatus()], fontSize: iconSize, marginLeft: '1px' }} /></Whisper> : ''}
            {show.via && !usePH ? <Whisper followCursor placement="auto" speaker={<Tooltip>{trn.via[viaStatus]}</Tooltip>}><DocPass style={{ color: conditionColors[viaStatus], fontSize: iconSize, marginLeft: '1px' }} /></Whisper> : ''}
            {show.pay2 && !usePH ? <Whisper followCursor placement="auto" speaker={<Tooltip>{trn.pay2[pay2Status]}</Tooltip>}><Icon icon="dollar" style={{ color: conditionColors[pay2Status], fontSize: iconSize, marginLeft: '1px' }} /></Whisper> : ''}
            {show.lic && !usePH ? <Whisper followCursor placement="auto" speaker={<Tooltip>{trn.lic[licStatus]}</Tooltip>}><DocPass style={{ color: conditionColors[licStatus], fontSize: iconSize, marginLeft: '1px' }} /></Whisper> : ''}
        </div>
    }

    return iconsRS();
}

export default PROGRESION_ICONS;
