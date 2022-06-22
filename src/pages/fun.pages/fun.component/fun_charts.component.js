import React from 'react';
import { Col, Panel, Row } from 'rsuite';

import FUN_CHART_ARC_R from '../fun.charts/chart_arcR.component';
import FUN_CHART_CATEGORY from '../fun.charts/chart_category.component';
import FUN_CHART_ENG_R from '../fun.charts/chart_engR.component';
import FUN_CHART_LAW_R from '../fun.charts/chart_lawR.component';
import FUN_CHART_MACRO_GRANTT from '../fun.charts/chart_macroGant.component';
import FUN_CHART_PAYMENT_1 from '../fun.charts/chart_payment.component';
import FUN_CHART_RECORD_1 from '../fun.charts/chart_record1.component';
import FUN_CHART_RECORD_2 from '../fun.charts/chart_record2.component';
import FUN_CHART_STATE from '../fun.charts/chart_state.component';
import FUN_CHART_TYPE from '../fun.charts/chart_type.compoennt';
import FUN_CHART_WORKER from '../fun.charts/chart_worker.component';
import FUN_CHART_WORKER_REPORT from '../fun.charts/chart_workerReport.component';



export default function FUN_CHARTS_COMPONENT(props) {

    return (
        <Panel header="GRAFICAS" collapsible bordered className="my-1">
            <Row className="my-3 text-center">
                <label className="fw-b text-uppercase"> GRAFICAS DE SOLICITUDES ({props.data.length})</label>
            </Row>
            <Row className="px-2 my-2">
                <Col lg={8} md={12} sm={24} xs={24}>
                    <FUN_CHART_STATE items={props.data} _SET_FILTERS={props._SET_FILTERS} />
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <FUN_CHART_TYPE items={props.data} _SET_FILTERS={props._SET_FILTERS} />
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <FUN_CHART_CATEGORY items={props.data} _SET_FILTERS={props._SET_FILTERS} />
                </Col>
            </Row>
            <Row className="px-2 my-2">
                <Col lg={12} md={12} sm={24} xs={24}>
                    <FUN_CHART_WORKER_REPORT items={props.data} _SET_FILTERS={props._SET_FILTERS} workers={props.workers}/>
                </Col>
                <Col lg={12} md={12} sm={24} xs={24}>
                    <FUN_CHART_WORKER items={props.data} _SET_FILTERS={props._SET_FILTERS} workers={props.workers} />
                </Col>
            </Row>
            <Row className="px-2 my-2">

                <Col lg={8} md={12} sm={24} xs={24}>
                    <Row className="my-3 text-center">
                        <label className="fw-b text-uppercase">PAGOS</label>
                    </Row>
                    <FUN_CHART_PAYMENT_1 items={props.data} _SET_FILTERS={props._SET_FILTERS} />
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <Row className="my-3 text-center">
                        <label className="fw-b text-uppercase">INFORMES</label>
                    </Row>
                    <FUN_CHART_LAW_R items={props.data} _SET_FILTERS={props._SET_FILTERS} />
                    <FUN_CHART_ARC_R items={props.data} _SET_FILTERS={props._SET_FILTERS} />
                    <FUN_CHART_ENG_R items={props.data} _SET_FILTERS={props._SET_FILTERS} />
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <Row className="my-3 text-center">
                        <label className="fw-b text-uppercase">ACTA</label>
                    </Row>
                    <FUN_CHART_RECORD_1 items={props.data} _SET_FILTERS={props._SET_FILTERS} />
                    <FUN_CHART_RECORD_2 items={props.data} _SET_FILTERS={props._SET_FILTERS} />
                </Col>
            </Row>
            <Row className="px-2 my-2">
                <Col>
                    <FUN_CHART_MACRO_GRANTT items={props.data} _SET_FILTERS={props._SET_FILTERS} />
                </Col>
            </Row>
        </Panel>);
}
