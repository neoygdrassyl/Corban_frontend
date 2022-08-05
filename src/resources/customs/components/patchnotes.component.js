import React, { useContext, useEffect, useState } from 'react';
import { UtilContext } from '../contextProviders/util.provider';
import { Col, Divider, Grid, Modal, Row } from 'rsuite';
import { Button } from '@blueprintjs/core';
import { GET_LAST_PATCH_NOTE, GET_PATCH_NOTES } from '../utils/dovela.patchnotes';
import MODAL from './modal.component';
import { CgNotes } from 'react-icons/cg'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import PagePreviousIcon from '@rsuite/icons/PagePrevious';
import PageNextIcon from '@rsuite/icons/PageNext';


export default function PATCH_NOTES(props) {
    const { type } = props

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('patchNotes');
    const theme = utilities.theme;
    const lang = utilities.lang;

    var [PN, setPN] = useState([]);
    var [PN_index, setPNi] = useState(1);
    var [PN0, setPN0] = useState(false);
    var [modal, setModal] = useState(false);

    useEffect(() => {
        if (type == 'dovela') setPN(GET_PATCH_NOTES(lang))
        if (type == 'dovela') setPN0(GET_LAST_PATCH_NOTE(lang))
    }, [lang]);

    let _BODY = (_PN) => {
        return <>
            <Grid fluid>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="text-center">
                        <strong><CgNotes /> {_PN.title} - {_PN.name}, v.{_PN.version}, {_PN.date}</strong>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="text-justify my-1">
                        <p>{_PN.body(lang)}</p>
                    </Col>
                </Row>
                {_PN.changes(lang).length > 0 ?
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="text-left">
                            <strong>{trn.changes}</strong>
                            <ul>
                                {_PN.changes(lang).map(change => <li>{change}</li>)}
                            </ul>
                        </Col>
                    </Row>
                    :
                    ''}
                {_PN.bugfixes(lang).length > 0 ?
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="text-left">
                            <strong>{trn.bugifx}</strong>
                            <ul>
                                {_PN.changes(lang).map(change => <li>{change}</li>)}
                            </ul>
                        </Col>
                    </Row>
                    :
                    ''}
                {_PN.footer(lang) > 0 ?
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="text-justify my-1">
                        <p>{PN0.footer(lang)}</p>
                    </Col>
                    :
                    ''}
            </Grid>

        </>
    }

    return (
        <>
            {PN0 ?
                <>
                    {_BODY(PN0)}
                    <Grid fluid>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="text-right my-1">
                            <strong style={{ cursor: 'pointer' }} onClick={() => setModal(!modal)}>{trn.seall}</strong>
                        </Col>
                    </Grid>
                </> : ''}

            <MODAL
                open={modal}
                setOpen={setModal}
                title={trn.seallt}
                icon={<CgNotes />}
                size="md"
            >
                <h5>{PN_index > 1 ? <PagePreviousIcon style={{ cursor: 'pointer', fontSize: '22px' }} onClick={() => setPNi(PN_index - 1)} /> : ''} 1 /{PN.length} {PN_index < PN.length ? <PageNextIcon style={{ cursor: 'pointer', fontSize: '22px' }} onClick={() => setPNi(PN_index + 1)} /> : ''}</h5>
                {PN.length > 0 ? _BODY(PN[PN_index - 1]) : ''}
            </MODAL>
        </>
    );
}