import React, { useState } from 'react';
import { Col, Row } from 'rsuite';
import {
    Hint,
    DiscreteColorLegend,
    XYPlot,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis,
    VerticalBarSeries
} from 'react-vis';
import 'react-vis/dist/style.css';
import { regexChecker_isPh } from '../../../resources/customs/utils/funParser.module';

export default function FUN_CHART_WORKER(props) {
    const items = props.items;
    const workers = props.workers;
    var [hovered, setHovered] = useState(false);
    const Colors = ['#FF9A42', '#E8514D', '#DA62FF', '#4D56E8', '#54E6FF', '#3DFF74', '#B1E82C', '#FFD130']

    function loppJump(array, Iterator) {
        let aLength = array.length;
        let counter = 0;
        for (var i = 0; i <= Iterator; i++) {
            if (i > aLength) {
                i = 0
            }
            counter++;
            if (counter > Iterator) return array[i];
        }
        return array[0];
    }


    // COMPONENT JSX
    let _GET_HOOVER_BOX_CONTENT = _HOOVER => {
        return <>
            <label className="fw-bold">{_HOOVER.title}</label>
        </>
    }

    let myData = () => {
        var val_1 = 0; // JUR
        var val_2 = 0; // ARC
        var val_3 = 0; // ENG

        for (var i = 0; i < items.length; i++) {
            if (regexChecker_isPh(items[i], true)) {
                if (items[i].sign_ph_law_worker_id == null) val_1++;
                if (items[i].sign_ph_arc_worker_id == null) val_2++;
            } else {
                if (items[i].asign_law_worker_id == null) val_1++;
                if (items[i].asign_eng_worker_id == null) val_3++;
                if (items[i].asign_arc_worker_id == null) val_2++;

            }
        }

        let total = val_1 + val_2 + val_3;
        let val_1_p = val_1 / total * 100;
        let val_2_p = val_2 / total * 100;
        let val_3_p = val_3 / total * 100;
        return [
            { x: 1, y: val_1, group: 'jur:na', val: val_1, val_p: val_1_p, color: 'Gainsboro', title: `JURIDICO SIN ASIGNAR : ${val_1} (${val_1_p.toFixed(2)}%)`, strokeWidth: 10 },
            { x: 2, y: val_2, group: 'arq:na', val: val_2, val_p: val_2_p, color: 'Gainsboro', title: `ARQUITECTONICO  SIN ASIGNAR: ${val_2} (${val_2_p.toFixed(2)}%)`, strokeWidth: 10 },
            { x: 3, y: val_3, group: 'ing:na', val: val_3, val_p: val_3_p, color: 'Gainsboro', title: `ESTRUCTURAL SIN ASIGNAR: ${val_3} (${val_3_p.toFixed(2)}%)`, strokeWidth: 10 },
        ]
    }

    let myDataWorkers = () => {
        const workersNames_bundle = []
        var vals = [];
        var vals_p = [];
        for (var i = 0; i < workers.length; i++) {
            workersNames_bundle.push(workers[i].name + ' ' + workers[i].surname);
            vals.push(0);
            vals_p.push(0);
        }

        for (var i = 0; i < items.length; i++) {
            var workersNames_bundle_toCheck = [];
            if (regexChecker_isPh(items[i], true)) {
                if (items[i].asign_ph_law_worker_name) workersNames_bundle_toCheck.push(items[i].asign_ph_law_worker_name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase());
                if (items[i].asign_ph_arc_worker_name) workersNames_bundle_toCheck.push(items[i].asign_ph_arc_worker_name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase());
            } else {
                if (items[i].asign_law_worker_name) workersNames_bundle_toCheck.push(items[i].asign_law_worker_name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase());
                if (items[i].asign_eng_worker_name) workersNames_bundle_toCheck.push(items[i].asign_eng_worker_name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase());
                if (items[i].asign_arc_worker_name) workersNames_bundle_toCheck.push(items[i].asign_arc_worker_name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase());
            }
            for (var j = 0; j < workersNames_bundle.length; j++) {
                let nameToCheck = workersNames_bundle[j].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
                if (workersNames_bundle_toCheck.includes(nameToCheck)) vals[j]++;
            }

        }

        for (var i = 0; i < vals_p.length; i++) {
            vals_p[i] = vals[i] / items.length * 100;
        }

        let data = [];
        for (var i = 0; i < workersNames_bundle.length; i++) {
            let _x = 1;
            if (workers[i].rolesNames == 'lawyer') _x = 1;
            if (workers[i].rolesNames == 'architect') _x = 2;
            if (workers[i].rolesNames == 'engineer') _x = 3;
            data.push({
                x: _x, y: vals[i], group: `asig:${workers[i].name} ${workers[i].surname}`,
                val: vals[i], val_p: vals_p[i], color: loppJump(Colors, i),
                title: `${workers[i].name} ${workers[i].surname}: ${vals[i]} (${vals_p[i].toFixed(2)}%)`, strokeWidth: 10
            })
        }

        return data;
    }

    let WorkersVerticalBars = () => {
        let workersInfo = myDataWorkers();
        let bundles = [];
        let new_bundle = [null, null, null];
        let workersInfoBundle = workersInfo;
        let breakCounter = 0;
        while (workersInfoBundle.length > 0) {

            if (new_bundle[0] == null) {
                for (var i = 0; i < workersInfoBundle.length; i++) {
                    if (workersInfoBundle[i].x == 1) {
                        new_bundle[0] = workersInfoBundle[i];
                        workersInfoBundle.splice(i, 1);
                        break;
                    }
                }
            }

            if (new_bundle[1] == null) {
                for (var i = 0; i < workersInfoBundle.length; i++) {
                    if (workersInfoBundle[i].x == 2) {
                        new_bundle[1] = workersInfoBundle[i];
                        workersInfoBundle.splice(i, 1);
                        break;
                    }
                }
            }
            if (new_bundle[2] == null) {
                for (var i = 0; i < workersInfoBundle.length; i++) {
                    if (workersInfoBundle[i].x == 3) {
                        new_bundle[2] = workersInfoBundle[i];
                        workersInfoBundle.splice(i, 1);
                        break;
                    }
                }
            }

            if (new_bundle[0] != null && new_bundle[1] != null && new_bundle[2] != null) {
                bundles.push(new_bundle);
                new_bundle = [null, null, null];
            }
            if (workersInfoBundle.length == 0) {
                if (new_bundle[2] == null) new_bundle.splice(2, 1);
                if (new_bundle[1] == null) new_bundle.splice(1, 1);
                if (new_bundle[0] == null) new_bundle.splice(0, 1);
                if (new_bundle.length > 0) bundles.push(new_bundle);
            }
            breakCounter++
            if (breakCounter == workers.length) break;
        }
        return bundles.map((value) => <VerticalBarSeries colorType="literal" data={value}
            onValueMouseOver={e => setHovered(e)}
            onValueMouseOut={() => setHovered(false)}
            onValueClick={(e) => props._SET_FILTERS(e.group)} />)
    }

    return (
        <Row className="border p-2">
            <Row className="row text-center my-2">
                <label className="fw-b">ASIGNACION DE INFORMES ({items.length})</label>
            </Row>
            <Row>
                <Col>
                    <DiscreteColorLegend
                        orientation="vertical"
                        onItemClick={(e) => props._SET_FILTERS(e.group)}
                        items={myDataWorkers()}
                    />

                </Col>
                <Col>
                    <XYPlot width={600} height={300} stackBy="y" yDomain={[0, items.length]}
                        margin={{ left: 80 }} >
                        <VerticalGridLines />
                        <HorizontalGridLines />

                        <XAxis tickFormat={function tickFormat(value) {
                            if (value == 1) return 'JUR';
                            if (value == 2) return 'ARQ';
                            if (value == 3) return 'EST';
                            return ''
                        }}
                            tickValues={[1, 2, 3]} />

                        <YAxis />
                        <YAxis tickFormat={function tickFormat(value) {
                            return (value / items.length * 100).toFixed(0) + "%"
                        }}
                            left={-40} />

                        {WorkersVerticalBars()}
                        <VerticalBarSeries colorType="literal" data={myData()}
                            onValueMouseOver={e => setHovered(e)}
                            onValueMouseOut={() => setHovered(false)}
                            onValueClick={(e) => props._SET_FILTERS(e.group)} />

                        {hovered ?
                            <Hint value={hovered}>
                                <div className="text-white p-2 m-2" style={{ background: 'rgba(0,0,0,0.75)', marginTop: '0%', width: '200px', fontSize: 'small' }}>
                                    {_GET_HOOVER_BOX_CONTENT(hovered)}
                                </div>
                            </Hint>
                            : null}
                    </XYPlot>

                </Col>
            </Row>

        </Row >
    );
}