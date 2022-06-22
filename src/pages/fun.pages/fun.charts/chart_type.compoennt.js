import React, { useState } from 'react';
import {
    Hint,
    RadialChart,
    DiscreteColorLegend
} from 'react-vis';
import 'react-vis/dist/style.css';
import { Col, Row } from 'rsuite';

export default function FUN_CHART_TYPE(props) {
    const items = props.items;
    var [hovered, setHovered] = useState(false)

    // COMPONENT JSX
    let _GET_HOOVER_BOX_CONTENT = _HOOVER => {
        return <>
            <label className="fw-bold">{_HOOVER.title}</label>
        </>
    }


    let myData = () => {
        var val_1 = 0;
        var val_2 = 0;
        var val_3 = 0;
        var val_4 = 0;
        var val_5 = 0;
        var val_6 = 0;
        var val_7 = 0;
        var val_8 = 0;
        var val_9 = 0;

        for (var i = 0; i < items.length; i++) {
            if (items[i].tipo == 'A') val_1++;
            else if (items[i].tipo == 'B') val_2++;
            else if (items[i].tipo == 'C') val_3++;
            else if (items[i].tipo == 'D') val_4++;
            else if (items[i].tipo == 'D,F') val_5++;
            else if (items[i].tipo == 'D,G') val_6++;
            else if (items[i].tipo == 'F') val_7++;
            else if (items[i].tipo == 'G') val_8++;
            else val_9++;
        }

        let total = val_1 + val_2 + val_3 + val_4 + val_5 + val_6 + val_7 + val_8 + val_9;
        let val_1_p = val_1 / total * 100;
        let val_2_p = val_2 / total * 100;
        let val_3_p = val_3 / total * 100;
        let val_4_p = val_4 / total * 100;
        let val_5_p = val_5 / total * 100;
        let val_6_p = val_6 / total * 100;
        let val_7_p = val_7 / total * 100;
        let val_8_p = val_8 / total * 100;
        let val_9_p = val_9 / total * 100;

        return [
            { angle: val_1, group: 'urb', val: val_1, val_p: val_1_p, color: '#FF9A42', title: `URBANICACIÓN: ${val_1} (${val_1_p.toFixed(2)}%)`, strokeWidth: 10 },
            { angle: val_2, group: 'par', val: val_2, val_p: val_2_p, color: '#E8514D', title: `PARCELACIÓN: ${val_2} (${val_2_p.toFixed(2)}%)`, strokeWidth: 10 },
            { angle: val_3, group: 'sub', val: val_3, val_p: val_3_p, color: '#DA62FF', title: `SUBDIVICÓN: ${val_3} (${val_3_p.toFixed(2)}%)`, strokeWidth: 10 },
            { angle: val_4, group: 'con', val: val_4, val_p: val_4_p, color: '#4D56E8', title: `CONSTRUCCIÓN: ${val_4} (${val_4_p.toFixed(2)}%)`, strokeWidth: 10 },
            { angle: val_5, group: 'conre', val: val_5, val_p: val_5_p, color: '#54E6FF', title: `CONST + REC: ${val_5} (${val_5_p.toFixed(2)}%)`, strokeWidth: 10 },
            { angle: val_6, group: 'lcoa', val: val_6, val_p: val_6_p, color: '#3DFF74', title: `CONST + OA: ${val_6} (${val_6_p.toFixed(2)}%)`, strokeWidth: 10 },
            { angle: val_7, group: 'rec', val: val_7, val_p: val_7_p, color: '#B1E82C', title: `RECONOCIMIENTO: ${val_7} (${val_7_p.toFixed(2)}%)`, strokeWidth: 10 },
            { angle: val_8, group: 'oa', val: val_8, val_p: val_8_p, color: '#FFD130', title: `OTRAS ACTUACIONES: ${val_8} (${val_8_p.toFixed(2)}%)`, strokeWidth: 10 },
            { angle: val_9, group: 'lic:no', val: val_9, val_p: val_9_p, color: 'Gainsboro', title: `SIN MODALIDAD: ${val_9} (${val_9_p.toFixed(2)}%)`, strokeWidth: 10 },
        ]
    }

    let totalList = () => {
        let list = myData();
        return list[0].val + list[1].val + list[2].val + list[3].val + list[4].val + list[5].val + list[6].val + list[7].val + list[8].val;
    }


    return (
        <Row className="border p-2">
            <Row className="text-center my-2">
                <label className="fw-b">TIPO DE LICENCIA ({totalList()})</label>
            </Row>
            <Row >
                <Col>
                    <DiscreteColorLegend
                        orientation="vertical"
                        onItemClick={(e) => props._SET_FILTERS(e.group)}
                        items={myData()}
                    />

                </Col>
                <Col>
                    <RadialChart
                        data={myData()}
                        width={300}
                        height={300}
                        innerRadius={100}
                        radius={150}
                        colorType="literal"
                        onValueMouseOver={(e) => setHovered(e)}
                        onValueMouseOut={() => setHovered(false)}
                        onValueClick={(e) => props._SET_FILTERS(e.group)}
                    >
                        {hovered ?
                            <Hint value={hovered}>
                                <div className="text-white p-2 m-2" style={{ background: 'rgba(0,0,0,0.75)', marginTop: '0%', width: '200px', fontSize: 'small' }}>
                                    {_GET_HOOVER_BOX_CONTENT(hovered)}
                                </div>
                            </Hint>
                            : null}

                    </RadialChart>
                </Col>
            </Row>

        </Row >
    );
}