import React, { useState } from 'react';
import {
    Hint,
    RadialChart,
    DiscreteColorLegend
} from 'react-vis';
import 'react-vis/dist/style.css';
import { Col, Row } from 'rsuite';

export default function FUN_CHART_STATE (props) {
        const items = props.items;
        var [hovered, setHovered] = useState(false);

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

            for (var i = 0; i < items.length; i++) {
                if (items[i].state == 1 && items[i].clock_payment) val_1++;
                if (items[i].state == -1) val_2++;
                if (items[i].state == 5) val_3++;
                if (items[i].state < -100) val_5++;
                //if (!items[i].clock_payment) val_6++;
            }

            let total = val_1 + val_2 + val_3 + val_4 + val_5 + val_6;
            let val_1_p = val_1 / total * 100;
            let val_2_p = val_2 / total * 100;
            let val_3_p = val_3 / total * 100;
            let val_4_p = val_4 / total * 100;
            let val_5_p = val_5 / total * 100;
            //let val_6_p = val_6 / total * 100;

            return [
                { angle: val_1, group: 'rad', val: val_1, val_p: val_1_p, color: 'Gainsboro', title: `SIN DEFINIR: ${val_1} (${val_1_p.toFixed(2)}%)`, strokeWidth: 10 },
                { angle: val_2, group: 'inc', val: val_2, val_p: val_2_p, color: 'Tomato', title: `INCOMPLETO: ${val_2} (${val_2_p.toFixed(2)}%)`, strokeWidth: 10 },
                { angle: val_3, group: 'ldf', val: val_3, val_p: val_3_p, color: 'ForestGreen', title: `LYDF: ${val_3} (${val_3_p.toFixed(2)}%)`, strokeWidth: 10 },
                { angle: val_4, group: 'exp', val: val_4, val_p: val_4_p, color: 'Gold', title: `EXPEDICIÓN: ${val_4} (${val_4_p.toFixed(2)}%)`, strokeWidth: 10 },
                { angle: val_5, group: 'dis', val: val_5, val_p: val_5_p, color: 'Crimson', title: `DISISTIMIENTO: ${val_5} (${val_5_p.toFixed(2)}%)`, strokeWidth: 10 },
            ]
        }

        let totalList = () => {
            let list = myData();
            return list[0].val + list[1].val +list[2].val +list[3].val +list[4].val
        }


        return (
            <Row className="border p-2">
                <Row className="text-center my-2">
                    <label className="fw-b">ESTADOS ({totalList()})</label>
                </Row>
                <Row className="row">
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