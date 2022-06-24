import React, { useContext } from 'react';
import { UtilContext } from '../contextProviders/util.provider';
import { Button, Col, Grid, Row, } from 'rsuite';
import { BsFilePdf } from 'react-icons/bs';


export default function BTN_PDF(props) {
    const { onClick } = props;
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('btnPdf');
    return (
        <Button color='red' appearance='ghost' style={{ width: '200px' }} onClick={onClick}>
            <Grid className='my-1' fluid>
                <Row style={{ width: '100%' }}>
                    <Col xl={8} lg={8} md={8} sm={8} xs={8}><BsFilePdf style={{ fontSize: '50px' }} /></Col>
                    <Col xl={14} lg={14} md={14} sm={14} xs={14} className="txt-c">
                        <h6 className='fw-b' style={{ paddingTop: '12px' }}>{trn.btn}</h6>
                    </Col>
                </Row>
            </Grid>
        </Button>
    );
}