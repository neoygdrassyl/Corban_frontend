import React, { useContext, useState } from 'react';
import DATATABLE from 'react-data-table-component';
import { Col, Row } from 'rsuite';
import { UtilContext } from '../contextProviders/util.provider';


export default function TABLE_COMPONENT(props) {
    const { columns, data, title, load, pagination, search, pagPage, pagArray, titleIcon } = props
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('tableComponent');
    var [filter, setFilter] = useState('');

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
        return search.some(f => {
            if (!d[f]) return false;
            let curatedText = d[f].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
            return curatedText.includes(filter);
        })
    }

    return (
        <DATATABLE
            title={search ? <Row>
                <Col lg={12} md={12} sm={24} xs={24}>{titleIcon} {title ?? 'HELLOW WORLD'}</Col>
                <Col lg={12} md={12} sm={24} xs={24}>

                    <div className="bp4-input-group">
                        <span className="bp4-icon bp4-icon-search"></span>
                        <input type="text" className="bp4-input" placeholder={trn.search} id={'DATA_TABLE_' + title} onKeyPress={(e) => { if (e.key === 'Enter') search_data() }} />
                        {filter
                            ? <button className="bp4-button bp4-minimal bp4-intent-danger bp4-icon-cross" onClick={() => search_clean()}></button>
                            : <button className="bp4-button bp4-minimal bp4-intent-primary bp4-icon-arrow-right" onClick={() => search_data()}></button>}
                    </div>
                </Col>
            </ Row> : <>{titleIcon} {title}</>}
            columns={columns.map(column => {
                return {
                    ...column,
                    name: <label className="text-center fw-bold">{column.name}</label>,
                    sortable: column.selector ? true : false,
                    filterable: column.selector ? true : false,
                    center: column.center ?? true,
                }
            })}
            data={data.filter(d => filter_data(d))}

            className="data-table"

            progressPending={load}
            progressComponent={<h4 className="fw-bold my-4 text-muted">{trn.loading}</h4>}
            noDataComponent={<h4 className="fw-bold  my-4 text-muted">{trn.nodata}</h4>}
            noHeader={!title}

            striped="true"
            highlightOnHover

            defaultSortFieldId={1}
            defaultSortAsc={false}

            paginationComponentOptions={{ rowsPerPageText: trn.publish, rangeSeparatorText: trn.of }}

            pagination={pagination ?? true}
            paginationPerPage={pagPage ?? 20}
            paginationRowsPerPageOptions={pagArray ?? [20, 50, 100]}

            dense

            theme={utilities ? utilities.theme == 'light' ? 'default' : 'dark' : 'default'}

        />);
}
