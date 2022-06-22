import React from 'react';
import { Whisper, Popover, IconButton } from 'rsuite';
import { DocPass } from '@rsuite/icons/';
import { regexChecker_isPh } from '../../../resources/customs/utils/funParser.module';
import { RiMoneyDollarCircleLine, RiPencilRuler2Line } from 'react-icons/ri';
import { FaRegCheckSquare, FaSign, FaMoneyCheckAlt } from 'react-icons/fa';
import { ImUserCheck } from 'react-icons/im';
import { GiPostStamp } from 'react-icons/gi';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { VscLaw } from 'react-icons/vsc';
import { BsBuilding, BsGear } from 'react-icons/bs';

function PROGRESION_ICONS(props) {
    let currentItem = props.currentItem;
    const speaker = (title, text) => (
        <Popover title={title}>
            <p>{text}</p>
        </Popover>
    );
    const conditionColors = { black: '#000000', red: '#DC143C', yellow: '#FFD700', green: '#008000' };
    const paymentConditions = (row) => {
        if (row.clock_payment) return { color: conditionColors.green, text: 'Se ha echo el pago fijo.' }
        else return { color: conditionColors.red, text: 'Falta el pago fijo.' }
    }
    const stateConditions = (row) => {
        if (row.state == -1) return { color: conditionColors.red, text: 'Se encuentra Incompleto' }
        if (row.state < -1) return { color: conditionColors.red, text: 'En desitimiento' }
        if (row.state == 1) return { color: conditionColors.yellow, text: 'Falta declarar en LyDF' }
        if (row.state >= 5) return { color: conditionColors.green, text: 'En Legal y Devida Forma' }
    }
    const neighboursConditions = (row) => {
        if (row.neighbours == 0) return { color: conditionColors.black, text: 'No hay vecinos definidos' };
        if (row.neighbours > 0 && row.neighbours > row.alerted) return { color: conditionColors.red, text: 'Faltan vecinos por notificar' };
        if (row.neighbours > 0 && row.neighbours == row.alerted) return { color: conditionColors.green, text: 'Todos los vecinos han sido notificados' }
    }
    const signConditions = (row) => {
        if (row.sign) {
            let sign = [];
            sign = row.sign.split(',');
            if (sign[1] != undefined) return { color: conditionColors.green, text: `Valla radicada el: ${sign[1]}` }
            else return { color: conditionColors.red, text: 'Falta radicar la Valla' }
        } else return { color: conditionColors.red, text: 'Falta radicar la Valla' }

    }
    const sealConditions = (row) => {
        if (row.seal) return { color: conditionColors.green, text: `Sello Creado` }
        else return { color: conditionColors.black, text: `Sello sin crear` }
    }
    const reportConditions = (row) => {
        if (row.report_data) {
            let report_data_array = row.report_data.split(',');
            if (row.report_cub && report_data_array[5]) return { color: conditionColors.green, text: `Reporte a pleaneacion enviado y respondido` };
            else if (row.report_cub && !report_data_array[5]) return { color: conditionColors.yellow, text: `Reporte a planeacion enviado pero no respondido` };
        } else return { color: conditionColors.red, text: `Falta reporte a planeacion` };
    }
    const phConditions = (row) => {
        if (row.ph_review == null) return { color: conditionColors.black, text: `Falta revision de PH` };
        if (row.ph_review == 0) return { color: conditionColors.red, text: `PH Declarado NO VIABLE` };
        if (row.ph_review == 1) return { color: conditionColors.green, text: `PH Declarado VIABLE` };
    }
    const lawConditions = (row) => {
        if (row.law_review == null) return { color: conditionColors.black, text: `Falta revision JURIDICA` };
        if (row.law_review == 0) return { color: conditionColors.red, text: `JURIDICO Declarado NO VIABLE`  };
        if (row.law_review == 1) return { color: conditionColors.green, text: `JURIDICO Declarado VIABLE` };
    }
    const arqConditions = (row) => {
        if (row.arq_review == null) return { color: conditionColors.black, text: `Falta revision ARQUITECTONICA` };
        if (row.arq_review == 0) return { color: conditionColors.red, text: `ARQUITECTONICO Declarado NO VIABLE`  };
        if (row.arq_review == 1) return { color: conditionColors.green, text: `ARQUITECTONICO Declarado VIABLE` };
    }
    const engConditions = (row) => {
        if (row.eng_review == null && row.eng_review_2 == null) return { color: conditionColors.black, text: `Falta revision ESTRUCTURAL` };
        if (row.eng_review == 0 && row.eng_review_2 == 0) return { color: conditionColors.red, text: `ESTRUCTURAL Declarado NO VIABLE`  };
        if (row.eng_review == 1 && row.eng_review_2 == 1) return { color: conditionColors.green, text: `ESTRUCTURAL Declarado VIABLE` };
        if (row.eng_review == 1 && row.eng_review_2 == 0) return { color: conditionColors.green, text: `ESTRUCTURAL Declarado VIABLE y NO VIABLE` };
        if (row.eng_review == 0 && row.eng_review_2 == 1) return { color: conditionColors.green, text: `ESTRUCTURAL Declarado VIABLE y NO VIABLE` };
        if (row.eng_review == 1 && row.eng_review_2 == 2) return { color: conditionColors.green, text: `ESTRUCTURAL Declarado VIABLE y NO APLICA` };
        if (row.eng_review == 0 && row.eng_review_2 == 2) return { color: conditionColors.green, text: `ESTRUCTURAL Declarado NO VIABLE y NO APLICA` };
    }
    const actaConditions = (row) => {
        if (row.rec_review == null && row.rec_review_2 == null)   return { color: conditionColors.black, text: `Falta ACTA` };
        else if ((row.rec_review == 0)  && (row.rec_review_2 != 1 && row.rec_review_2 != 0))  return { color: conditionColors.red, text: `Falta ACTA parte 2`  };
        else if (row.rec_review == 1 || row.rec_review_2 == 1)  return { color: conditionColors.red, text: `ACTA expedida`  };
    }
    return (<div className="my-1">
        <Whisper placement="top" trigger="hover" controlId="control-id-hover" speaker={speaker('PAGO FIJO', paymentConditions(currentItem).text)}>
            <IconButton appearance="subtle" icon={<RiMoneyDollarCircleLine size="2em" color={paymentConditions(currentItem).color} />} circle size="xs" />
        </Whisper>
        <Whisper placement="top" trigger="hover" controlId="control-id-hover" speaker={speaker('ESTADO', stateConditions(currentItem).text)}>
            <IconButton appearance="subtle" icon={<FaRegCheckSquare size="2em" color={stateConditions(currentItem).color} />} circle size="xs" />
        </Whisper>
        {!regexChecker_isPh(currentItem, true)
            ? <>
                <Whisper placement="top" trigger="hover" controlId="control-id-hover" speaker={speaker('VECINOS NOTIFICADOS', neighboursConditions(currentItem).text)}>
                    <IconButton appearance="subtle" icon={<ImUserCheck size="2em" color={neighboursConditions(currentItem).color} />} circle size="xs" />
                </Whisper>
                <Whisper placement="top" trigger="hover" controlId="control-id-hover" speaker={speaker('VALLA PUBLICITARIA', signConditions(currentItem).text)}>
                    <IconButton appearance="subtle" icon={<FaSign size="2em" color={signConditions(currentItem).color} />} circle size="xs" />
                </Whisper>
            </>
            : ""}

        <Whisper placement="top" trigger="hover" controlId="control-id-hover" speaker={speaker('SELLO', sealConditions(currentItem).text)}>
            <IconButton appearance="subtle" icon={<GiPostStamp size="2em" color={sealConditions(currentItem).color} />} circle size="xs" />
        </Whisper>
        {currentItem.tipo && currentItem.tipo.includes('F') ?
            <Whisper placement="top" trigger="hover" controlId="control-id-hover" speaker={speaker('REPORTE A PLEANACION', reportConditions(currentItem).text)}>
                <IconButton appearance="subtle" icon={<HiOutlineDocumentReport size="2em" color={reportConditions(currentItem).color} />} circle size="xs" />
            </Whisper>
            : ""}

        {regexChecker_isPh(currentItem, true) ?
            <Whisper placement="top" trigger="hover" controlId="control-id-hover" speaker={speaker('INFORME PROPIEDAD HORIZONTAL', phConditions(currentItem).text)}>
                <IconButton appearance="subtle" icon={<RiPencilRuler2Line size="2em" color={phConditions(currentItem).color} />} circle size="xs" />
            </Whisper>
            : <>
                <Whisper placement="top" trigger="hover" controlId="control-id-hover" speaker={speaker('INFORME JURIDICO', lawConditions(currentItem).text)}>
                    <IconButton appearance="subtle" icon={<VscLaw size="2em"color={lawConditions(currentItem).color}/>} circle size="xs" />
                </Whisper>
                <Whisper placement="top" trigger="hover" controlId="control-id-hover" speaker={speaker('INFORME ARQUITECTONICO', arqConditions(currentItem).text)}>
                    <IconButton appearance="subtle" icon={<BsBuilding size="2em" color={arqConditions(currentItem).color}/>} circle size="xs" />
                </Whisper>
                <Whisper placement="top" trigger="hover" controlId="control-id-hover" speaker={speaker('INFORME ESTRUCTURAL', engConditions(currentItem).text)}>
                    <IconButton appearance="subtle" icon={<BsGear size="2em" color={engConditions(currentItem).color} />} circle size="xs" />
                </Whisper>
                <Whisper placement="top" trigger="hover" controlId="control-id-hover" speaker={speaker('ACTA', actaConditions(currentItem).text)}>
                    <IconButton appearance="subtle" icon={<DocPass size="2em" color={actaConditions(currentItem).color} />} circle size="lg" />
                </Whisper>
                <Whisper placement="top" trigger="hover" controlId="control-id-hover" speaker={speaker('EXPEDICION')}>
                    <IconButton appearance="subtle" icon={<FaMoneyCheckAlt size="2em" color="red" />} circle size="xs" />
                </Whisper>
            </>}

    </div>);
}

export default PROGRESION_ICONS;
