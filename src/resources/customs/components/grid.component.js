import React, { useContext, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Col, Grid, Pagination, Panel, Popover, Row, Whisper } from 'rsuite';
import { UtilContext } from '../contextProviders/util.provider';
import NON_IDEAL_STATE from './nonideal.component';

export default function GRID(props) {
    const { data, title, search, titleIcon, columns, cellText, load } = props;
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('gridComponent');
    const theme = utilities.theme;

    // ****************************** CONSTS ****************************** //
    const customStyles = {
        headCells: {
            style: {
                backgroundColor: props.headerColor || 'gainsboro',
            },
        },
        cells: {
            style: {
            },
        },
    };

    // ************************** USE CONSTS ****************************** //
    var [filter, setFilter] = useState('');
    var [pag, setPag] = useState(1);
    var [limit, setLimit] = useState(100);

    // ************************* DATA GETTERS ***************************** //


    // ************************* DATA CONVERTERS ************************** //
    function search_data() {
        let newValue = document.getElementById('DATA_TABLE_' + title).value;
        newValue = newValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        setFilter(newValue)
    }

    function search_clean() {
        document.getElementById('DATA_TABLE_' + title).value = '';
        setFilter('')
    }

    function filter_data(d) {
        if (filter == '') return true;
        let find1 = search.some(f => {
            if (!d[f]) return false;
            let curatedText = d[f].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
            return curatedText.includes(filter);
        })
        let find2 = columns.some(c => {
            if (!c.selector) return false;
            if (c.selector(d) === null) return false;
            let curatedText = c.selector(d).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
            return curatedText.includes(filter);
        })
        let curateCellText =  d[cellText].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        let find3 = curateCellText.includes(filter);
        return find1 || find2 || find3
    }
    function filter_pagination(i) {
        let range_i = pag * limit - limit;
        let range_f = pag * limit;
        return range_i <= i && i < range_f 
    }
    // ************************** JSX ELEMENTS **************************** //
    const speaker = (value) => <Popover title={value[cellText]} className={theme || 'light'} style={{ width: '400px' }}>
        <ul>
            {columns.map(c => <li><label>{c.name}</label>: <label className='fw-b'>{c.cell(value)}</label></li>)}
        </ul>
    </Popover>

    let pagination = () => {
        return <Pagination
            layout={['total', '-', 'limit', '|', 'pager', 'skip']}
            size={'sm'}
            prev={true}
            next={true}
            first={true}
            last={true}
            ellipsis={true}
            boundaryLinks={true}
            total={data.filter(d => filter_data(d)).length}
            limit={limit}
            limitOptions={[100, 200, 500, 1000]}
            maxButtons={5}
            activePage={pag}
            onChangePage={setPag}
            onChangeLimit={setLimit}
            locale={trn.pagination}
        />
    }

    // ************************* JSX COMPONENTS *************************** //
    let _GRIDS = () => {
        return data.filter((d, i) => filter_pagination(i)).filter(d => filter_data(d)).map(value => <Whisper placement="auto" trigger="click" controlId="control-id-hover" speaker={speaker(value)}
        >
            <Col xs={12} sm={8} md={6} lg={3} xl={3} xxl={3}
                className="border txt-c pointer fadeHover" style={{ paddingBottom: '2px', paddingTop: '2px', marginBottom: '2px' }}>
                {value[cellText]}
            </Col>
        </Whisper>)
    }


    return (<>
        {data.length > 0 ?
            <Grid fluid>
                <Row className="border p-2" style={customStyles.headCells.style} >
                    <Col lg={12} md={12} sm={24} xs={24} className="text-dark">{titleIcon} {title ?? 'HELLOW WORLD'}</Col>
                    <Col lg={12} md={12} sm={24} xs={24}>
                        {search ?
                            <div className="bp4-input-group">
                                <span className="bp4-icon bp4-icon-search"></span>
                                <input type="text" className="bp4-input" placeholder={trn.search} id={'DATA_TABLE_' + title} onKeyPress={(e) => { if (e.key === 'Enter') search_data() }} />
                                {filter
                                    ? <button className="bp4-button bp4-minimal bp4-intent-danger bp4-icon-cross" onClick={() => search_clean()}></button>
                                    : <button className="bp4-button bp4-minimal bp4-intent-primary bp4-icon-arrow-right" onClick={() => search_data()}></button>}
                            </div> : ''}
                    </Col>
                </Row>
                <Row>
                    {_GRIDS()}
                </Row>
                <Row className="border p-2" style={customStyles.headCells.style}>
                    {pagination()}
                </Row>
            </Grid>
            : <NON_IDEAL_STATE type="datatable" />}

    </>);
}
