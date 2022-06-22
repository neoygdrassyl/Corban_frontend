import React, { useState } from 'react';
import { FlexboxGrid, Row } from 'rsuite';
import {
    Hint,
    DiscreteColorLegend,
    VerticalGridLines,
    XYPlot,
    HorizontalGridLines,
    XAxis,
    YAxis,
    HorizontalBarSeries
} from 'react-vis';
import 'react-vis/dist/style.css';

export default function FUN_CHART_RECORD_1(props) {
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


        for (var i = 0; i < items.length; i++) {
            if (items[i].rec_review == null && items[i].rec_review_2 == null) val_1++;
            if (items[i].rec_review != null || items[i].rec_review_2 != null) val_2++;
        }

        let total = val_1 + val_2;
        let val_1_p = val_1 / total * 100;
        let val_2_p = val_2 / total * 100;


        return [
            { y: 0.5, x: val_2_p, group: 'acta', val: val_2, val_p: val_2_p, color: 'DarkMagenta', title: `CON ACTA: ${val_2} (${val_2_p.toFixed(2)}%)`, strokeWidth: 10, hintText: '' },
            { y: 0.5, x: val_1_p, group: 'acta:0', val: val_1, val_p: val_1_p, color: 'Gainsboro', title: `SIN ACTA: ${val_1} (${val_1_p.toFixed(2)}%)`, strokeWidth: 10, hintText: '' },
        ]
    }

    return (
        <Row className="border p-2">
            <Row className="text-center my-2">
                <label className="fw-b">ACTAS EXPEDIDAS ({items.length})</label>
            </Row>
            <Row>
                <FlexboxGrid justify="center">

                    <XYPlot width={300} height={100} xDomain={[0, 100]} yDomain={[0, 1, 2]}
                        stackBy="x">
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis tickFormat={(value) => value + '%'} />
                        <YAxis tickValues={[0, 1, 2]} tickFormat={() => ''}
                        />
                        <HorizontalBarSeries
                            colorType="literal"
                            data={myData()}
                            onValueMouseOver={e => setHovered(e)}
                            onValueMouseOut={e => setHovered(false)}
                            onValueClick={(e) => props._SET_FILTERS(e.group)}
                        />

                        {hovered ?
                            <Hint value={hovered}>
                                <div className="text-white p-2 m-2" style={{ background: 'rgba(0,0,0,0.75)', marginTop: '0%', width: '200px', fontSize: 'small' }}>
                                    {_GET_HOOVER_BOX_CONTENT(hovered)}
                                </div>
                            </Hint>
                            : null}
                    </XYPlot>
                </FlexboxGrid>
            </Row>
            <Row>
                <FlexboxGrid justify="center">
                    <DiscreteColorLegend
                        orientation="horizontal"
                        onItemClick={(e) => props._SET_FILTERS(e.group)}
                        items={myData()}
                    />
                </FlexboxGrid>
            </Row>
        </Row >
    );
}