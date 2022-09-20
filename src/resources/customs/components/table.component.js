import React, { useContext, useState } from 'react';
import DATATABLE from 'react-data-table-component';
import { Col, FlexboxGrid, Loader, Row } from 'rsuite';
import { UtilContext } from '../contextProviders/util.provider';
import BTN_DOWNLOAD from './btnDownload.component';
import NON_IDEAL_STATE from './nonideal.component';
import TUTORIAL from './tutorial.component';


export default function TABLE_COMPONENT(props) {
    const { columns, data, title, load, pagination, search, pagPage, pagArray, titleIcon, csv } = props
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('tableComponent');
    const btn = utilities.getTranslation('btns');
    var [filter, setFilter] = useState('');

    const theme = utilities.theme

    const customStyles = {
        rows: {
            style: {

            },
        },
        headCells: {
            style: {
                backgroundColor: props.headerColor || (theme == 'dark' ? 'Gray' : 'Gainsboro'),
                //color: theme == 'dark' ? 'black' : 'black',
                border: '0.2px solid',
                borderColor: theme == 'dark' ? 'DimGrey' : 'lightgrey',
            },
        },
        cells: {
            style: {
                border: '0.2px solid',
                borderColor: theme == 'dark' ? 'DimGrey' : 'lightgrey',
                backgroundColor:  theme == 'dark' ? '#2d2d2d' : '',
            },
        },
    };


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
            if (c.selector(d) == null || c.selector(d) == undefined) return false;
            let curatedText = String(c.selector(d)).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
            return curatedText.includes(filter);
        })
        return find1 || find2
    }

    function genCSV() {
        const headers = columns.filter(c => c.selector && !c.ignoreCSV).map(c => c.name).join(';') + '\n';
        const rows = data.filter(d => filter_data(d)).map(d => {
            let row = columns.filter(c => c.selector && !c.ignoreCSV).map(c => {
                return c.selector(d)
            })
            return row.join(';')
        }).join('\n')

        let csvContent = "data:text/csv;charset=utf-8," + headers + rows;

        var encodedUri = encodeURI(csvContent);
        const fixedEncodedURI = encodedUri.replaceAll('#', '%23').replaceAll('°', 'r');

        var link = document.createElement("a");
        link.setAttribute("href", fixedEncodedURI);
        link.setAttribute("download", `${title || 'CSV'}.csv`);
        document.body.appendChild(link); // Required for FF

        link.click();
    }

    return (
        <DATATABLE
            title={search && data.length > 0 ? <Row>
                <Col lg={12} md={12} sm={24} xs={24}>{titleIcon} {title ?? 'HELLOW WORLD'}</Col>
                <Col lg={12} md={12} sm={24} xs={24}>

                    {search ?
                        <div className="bp4-input-group">
                            <span className="bp4-icon bp4-icon-search"></span>
                            <input type="text" className="bp4-input" placeholder={trn.search} id={'DATA_TABLE_' + title} onKeyPress={(e) => { if (e.key === 'Enter') search_data() }} />
                            {filter
                                ? <button className="bp4-button bp4-minimal bp4-intent-danger bp4-icon-cross" onClick={() => search_clean()}></button>
                                : <button className="bp4-button bp4-minimal bp4-intent-primary bp4-icon-arrow-right" onClick={() => search_data()}></button>}
                        </div>
                        : ''}
                </Col>
            </ Row> : <>{titleIcon} {title}</>}


            subHeader={csv && data.length > 0}
            subHeaderComponent={<Row className='txt-r' >
                <FlexboxGrid.Item xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} as={Col}>
                    <Row className='txt-l p-1' >
                        <TUTORIAL text={btn.tut_1} tutorial="csv_e" />
                    </Row>
                    <Row className='txt-l p-1' >
                        <TUTORIAL text={btn.tut_2} tutorial="csv_lo" />
                    </Row>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} as={Col}>
                    <BTN_DOWNLOAD csv color='green' onClick={() => genCSV()} />
                </FlexboxGrid.Item>
            </Row>}

            columns={columns.map(column => {
                return {
                    ...column,
                    name: <label className={"text-center fw-bold "+theme} style={{color: 'black', backgroundColor: props.headerColor || (theme == 'dark' ? 'Gray' : 'Gainsboro')}}>{column.name}</label>,
                    sortable: column.selector ? true : false,
                    filterable: column.selector ? true : false,
                    center: column.center ?? true,
                }
            })}
            data={data.filter(d => filter_data(d))}

            className="data-table"

            progressPending={load}
            progressComponent={<div className='txt-c my-3'><Loader size="lg" content={trn.loading} vertical /></div>}
            noDataComponent={<NON_IDEAL_STATE type="datatable" />}
            noHeader={!title}

            striped={theme == 'light' ? true : false}
            highlightOnHover

            defaultSortFieldId={props.sort ?? 1}
            defaultSortAsc={props.desc || false}

            paginationComponentOptions={{ rowsPerPageText: trn.publish, rangeSeparatorText: trn.of }}

            pagination={pagination ?? true}
            paginationPerPage={pagPage ?? 20}
            paginationRowsPerPageOptions={pagArray ?? [20, 50, 100]}

            dense

            theme={utilities ? theme == 'light' ? 'default' : 'dark' : 'default'}

            expandableRowsComponent={props.expand}
            expandableRows={props.expand}

            customStyles={customStyles}

            pointerOnHover={props.pointer}


        />);
}
