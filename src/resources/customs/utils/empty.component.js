import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

export default function name_COMPONENT(props) {
    const { } = props;
    // ****************************** CONSTS ****************************** //
    const cont1 = { 'a': a };

    // ************************** USE CONSTS ****************************** //
    var [state1, setState1] = useState(null);


    // SAME AS componentDidMount AND componentDidUpdate
    useEffect(() => {
        loadData()
    }, [state1]);

    // ************************* DATA GETTERS ***************************** //
    // CALL THE API FUNCTIONS TO LOAD DATA
    function loadData() { }

    // ************************* DATA CONVERTERS ************************** //
    // TRANSFORM AND PROCESS DATA
    function compareData() { }

    // ************************** JSX ELEMENTS **************************** //
    // SMALL OR SINGLE JSX ELEMENTS
    let jsx_e = () => {
        return <>
        </>
    }


    // ************************* JSX COMPONENTS *************************** //
    // BIG OR COMPOSED JSX ELEMENTS
    let jsx_c = () => {
        return <>
        </>
    }
    // ******************************** APIS ****************************** //
    // CALLS THE SERVICE FUNCTIONS
    let service = () => { }

    // *************************** DATA TABLE  **************************** //
    const columns = [{},]
    const dt = <DataTable
        paginationComponentOptions={{ rowsPerPageText: 'Publicaciones por Pagina:', rangeSeparatorText: 'de' }}
        noDataComponent="No hay mensajes"
        striped="true"
        columns={columns}
        data={state1}
        highlightOnHover
        pagination
        paginationPerPage={20}
        paginationRowsPerPageOptions={[20, 50, 100]}
        className="data-table-component"
        noHeader
    />

    return (<>
        PAGE HERE!
    </>);
}
