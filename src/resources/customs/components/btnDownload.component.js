import React, { useContext } from 'react';
import { UtilContext } from '../contextProviders/util.provider';
import { Button, Col, Grid, Row, } from 'rsuite';
import { BsFilePdf } from 'react-icons/bs';
import { FaFileCsv } from 'react-icons/fa';



export default function BTN_DOWNLOAD(props) {
    const { onClick, color, pdf, csv } = props;
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('btnPdf');
    let text = pdf ? trn.btn : csv ? trn.btn2 : trn.btn
    let icon = pdf ?<BsFilePdf style={{ fontSize: '50px' }} /> : csv ? <FaFileCsv style={{ fontSize: '50px' }} /> : <BsFilePdf style={{ fontSize: '50px' }} />
    return (
        <Button color={color || 'red'} appearance='ghost' style={{ width: '200px' }} onClick={onClick} className="mx-1">
            <Grid className='my-1' fluid>
                <Row style={{ width: '100%' }}>
                    <Col xl={8} lg={8} md={8} sm={8} xs={8}>{icon}</Col>
                    <Col xl={14} lg={14} md={14} sm={14} xs={14} className="txt-c">
                        <h6 className='fw-b' style={{ paddingTop: '12px' }}>{text}</h6>
                    </Col>
                </Row>
            </Grid>
        </Button>
    );
}