import moment from 'moment';
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
    HorizontalRectSeries,
    MarkSeries
} from 'react-vis';
import 'react-vis/dist/style.css';
import {dateParser_dateDiff} from '../../../resources/customs/utils/utilsParse.module'

export default function FUN_CHART_MACRO_GRANTT(props) {
    const items = props.items;
    var [hovered, setHovered] = useState(false);

        const _tickValues = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200];
        const _tickValues_2 = [0, 50, 100, 150, 200];
        const YtickValues = [0, 1, 2, 3];

        let _ADD_MARK = (_marks, _new_mark) => {
            var marks = _marks;
            for (var i = 0; i < marks.length; i++) {
                if (marks[i].x == _new_mark.x) {
                    marks[i].name = marks[i].name + "\n" + _new_mark.name;
                    marks[i].group.push('n:'+_new_mark.name);
                    return marks
                }
            }
            marks.push(_new_mark)
            return marks
        }

        // COMPONENT JSX
        let _GET_HOOVER_BOX_CONTENT = _HOOVER => {
            return <>
                <label className="fw-bold">
                    {_HOOVER.titleHint}<br />
                    {_HOOVER.name} <br />
                    {_HOOVER.x} dia(s) </label>
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
                if (!items[i].clock_payment) val_6++;
            }

            let total = val_1 + val_2 + val_3 + val_4 + val_5 + val_6;
            let val_1_p = val_1 / total * 100;
            let val_2_p = val_2 / total * 100;
            let val_3_p = val_3 / total * 100;
            let val_4_p = val_4 / total * 100;
            let val_5_p = val_5 / total * 100;
            let val_6_p = val_6 / total * 100;


            return [
                { angle: val_1, group: 'rad', val: val_1, val_p: val_1_p, color: 'Gainsboro', title: 'SIN DEFINIR: ' + val_1, strokeWidth: 10 },
                { angle: val_2, group: 'inc', val: val_2, val_p: val_2_p, color: 'Tomato', title: 'INCOMPLETO: ' + val_2, strokeWidth: 10 },
                { angle: val_3, group: 'ldf', val: val_3, val_p: val_3_p, color: 'ForestGreen', title: 'LYDF: ' + val_3, strokeWidth: 10 },
                { angle: val_4, group: 'exp', val: val_4, val_p: val_4_p, color: 'Gold', title: 'EXPEDICION: ' + val_4, strokeWidth: 10 },
                { angle: val_5, group: 'dis', val: val_5, val_p: val_5_p, color: 'Crimson', title: 'DISISTIMIENTO: ' + val_5, strokeWidth: 10 },
            ]
        }
        let totalList = () => {
            let list = myData();
            return list[0].val + list[1].val +list[2].val +list[3].val +list[4].val
        }

        let dataMark = (_x, _state, titleHint) => {
            let data = [];
            for (var i = 0; i < items.length; i++) {
                if (items[i].state == _state && items[i].clock_payment) {
                    let new_mark = {
                        x: dateParser_dateDiff(items[i].clock_payment, moment().format('YYYY-MM-DD')),
                        y: _x,
                        size: 1,
                        name: items[i].id_public,
                        id: items[i],
                        group: ['n:'+items[i].id_public],
                        titleHint: titleHint,
                    }
                    _ADD_MARK(data, new_mark)
                }
            }
            return data;
        }
        return (
            <Row>
                <Row className="text-center">
                    <label className="fw-b">TIEMPO DE SOLICITUDES ({totalList()})</label>
                </Row>
                <Row >
                    <FlexboxGrid justify="center">
                        <XYPlot width={1700} height={280} margin={{ bottom: 45, left: 30 }}
                            yPadding={20} xDomain={[0, 200]} yDomain={[0, 3]} style={{overflowX: 'scroll'}}>

                            <VerticalGridLines
                                tickValues={_tickValues}
                                tickTotal={_tickValues.length}
                            />
                            <HorizontalGridLines
                                tickValues={YtickValues}
                                tickTotal={YtickValues.length}
                            />

                            <XAxis tickFormat={function tickFormat(value) {
                                return value + ' d';
                            }}
                                tickValues={_tickValues}
                                style={{ fontSize: 12 }}
                            />

                            <YAxis tickLabelAngle={-90} position={'middle'} tickValues={YtickValues}
                                top={20} tickFormat={function tickFormat(value) {
                                    if (value == 1) return 'EXPEDICION'
                                    if (value == 2) return 'EVALUACION'
                                    if (value == 3) return 'RADICACION';
                                }}
                            />

                            <HorizontalRectSeries
                                data={[{ x: 0, x0: 30, y: 2, y0: 3 }]}
                                color="rgba(30, 144, 235, 0.75)"
                            />
                            <HorizontalRectSeries
                                data={[{ x: 30, x0: 75, y: 1, y0: 2 }]}
                                color="rgba(34, 139, 34, 0.50)"
                            />

                            <MarkSeries
                                sizeRange={[1, 5]}
                                data={dataMark(2, 1, 'SIN DEFINIR')}
                                color={'Grey'}
                                onValueMouseOver={e => setHovered(e)}
                                onValueMouseOut={e => setHovered(false)}
                                onValueClick={(e) => props._SET_FILTERS(e.group)} />

                            <MarkSeries
                                sizeRange={[1, 5]}
                                data={dataMark(2.25, -101, 'DISISTIMIENTO')}
                                color={'Crimson'}
                                onValueMouseOver={e => setHovered(e)}
                                onValueMouseOut={e => setHovered(false)}
                                onValueClick={(e) => props._SET_FILTERS(e.group)} />

                            <MarkSeries
                                sizeRange={[1, 5]}
                                data={dataMark(1.25, -102, 'DISISTIMIENTO')}
                                color={'Crimson'}
                                onValueMouseOver={e => setHovered(e)}
                                onValueMouseOut={e => setHovered(false)}
                                onValueClick={(e) => props._SET_FILTERS(e.group)} />

                            <MarkSeries
                                sizeRange={[1, 5]}
                                data={dataMark(1.25, -103, 'DISISTIMIENTO')}
                                color={'Crimson'}
                                onValueMouseOver={e => setHovered(e)}
                                onValueMouseOut={e => setHovered(false)}
                                onValueClick={(e) => props._SET_FILTERS(e.group)} />

                            <MarkSeries
                                sizeRange={[1, 5]}
                                data={dataMark(1.25, -104, 'DISISTIMIENTO')}
                                color={'Crimson'}
                                onValueMouseOver={e => setHovered(e)}
                                onValueMouseOut={e => setHovered(false)}
                                onValueClick={(e) => props._SET_FILTERS(e.group)} />

                            <MarkSeries
                                sizeRange={[1, 5]}
                                data={dataMark(1.5, 5, 'LYDF')}
                                color={'ForestGreen'}
                                onValueMouseOver={e => setHovered(e)}
                                onValueMouseOut={e => setHovered(false)}
                                onValueClick={(e) => props._SET_FILTERS(e.group)} />

                            <MarkSeries
                                sizeRange={[1, 5]}
                                data={dataMark(2.5, -1, 'INCOMPLETO')}
                                color={'Tomato'}
                                onValueMouseOver={e => setHovered(e)}
                                onValueMouseOut={e => setHovered(false)}
                                onValueClick={(e) => props._SET_FILTERS(e.group)} />


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