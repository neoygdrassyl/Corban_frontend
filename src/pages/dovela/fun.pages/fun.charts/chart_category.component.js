import React, { useState } from 'react';
import { Col, Row } from 'rsuite';
import {
    Hint,
    RadialChart,
    DiscreteColorLegend
} from 'react-vis';
import 'react-vis/dist/style.css';

export default function FUN_CHART_CATEGORY(props) {
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
            if (items[i].type == 'i') val_1++;
            if (items[i].type == 'ii') val_2++;
            if (items[i].type == 'iii') val_3++;
            if (items[i].type == 'vi') val_4++;
            //if (items[i].type == 'oa') val_5++;
            if (!items[i].type) val_6++;
        }

        let total = val_1 + val_2 + val_3 + val_4 + val_5 + val_6;
        let val_1_p = val_1 / total * 100;
        let val_2_p = val_2 / total * 100;
        let val_3_p = val_3 / total * 100;
        let val_4_p = val_4 / total * 100;
        //let val_5_p = val_5 / total * 100;
        let val_6_p = val_6 / total * 100;

        return [
            { angle: val_1, group: 'c1', val: val_1, val_p: val_1_p, color: 'CornflowerBlue', title: `I: ${val_1} (${val_1_p.toFixed(2)}%)`, strokeWidth: 10, hintText: 'CATEGORIA I: ' + val_1 },
            { angle: val_2, group: 'c2', val: val_2, val_p: val_2_p, color: 'Coral', title: `II: ${val_2} (${val_2_p.toFixed(2)}%)`, strokeWidth: 10, hintText: 'CATEGORIA II: ' + val_2 },
            { angle: val_3, group: 'c3', val: val_3, val_p: val_3_p, color: 'LightGreen', title: `III: ${val_3} (${val_3_p.toFixed(2)}%)`, strokeWidth: 10, hintText: 'CATEGORIA III: ' + val_3 },
            { angle: val_4, group: 'c4', val: val_4, val_p: val_4_p, color: 'DarkKhaki', title: `VI: ${val_4} (${val_4_p.toFixed(2)}%)`, strokeWidth: 10, hintText: 'CATEGORIA VI: ' + val_4 },
            { angle: val_6, group: 'nc', val: val_6, val_p: val_6_p, color: 'Gainsboro', title: `SIN CATEGORIA: ${val_6} (${val_6_p.toFixed(2)}%)`, strokeWidth: 10, hintText: 'SIN CATEGORIA: ' + val_6 },
        ]
    }

    let totalList = () => {
        let list = myData();
        return list[0].val + list[1].val + list[2].val + list[3].val + list[4].val
    }


    return (
        <Row className="border p-2">
            <Row className="text-center my-2">
                <label className="fw-b">CATEGORIAS ({totalList()})</label>
            </Row>
            <Row>
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