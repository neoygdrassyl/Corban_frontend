import React, { useContext } from 'react';
import { UtilContext } from '../contextProviders/util.provider';
import { Button, Col, Grid, Row, } from 'rsuite';
import { BsFilePdf } from 'react-icons/bs';
import { FaFileCsv } from 'react-icons/fa';



export default function BTN_DOWNLOAD(props) {
    const { onClick, color, pdf, csv, sm } = props;
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('btnPdf');
    let fontSize = sm ? '18px': '50px'
    let text = pdf ? trn.btn : csv ? trn.btn2 : trn.btn
    let icon = pdf ? <BsFilePdf style={{ fontSize: fontSize }} /> : csv ? <FaFileCsv style={{ fontSize: fontSize }} /> : <BsFilePdf style={{ fontSize: fontSize }} />
    let text_content = sm ? <label className='fw-b mx-2' style={{ }}>{text}</label>  : <h6 className='fw-b' style={{ paddingTop: '12px' }}>{text}</h6>;
    let btnCols = sm ? [5, 19] : [8, 16];
    return (
        <Button color={color || 'red'} appearance='ghost' style={{ width: !sm ? '200px' : '' }} onClick={onClick} className="mx-1">
            <Grid className='my-1' fluid>
                <Row style={{ width: '100%' }}>
                    <Col xl={btnCols[0]} lg={btnCols[0]} md={btnCols[0]} sm={btnCols[0]} xs={btnCols[0]}>{icon}</Col>
                    <Col xl={btnCols[1]} lg={btnCols[1]} md={btnCols[1]} sm={btnCols[1]} xs={btnCols[1]} className="txt-c">
                        {text_content}
                    </Col>
                </Row>
            </Grid>
        </Button>
    );
}