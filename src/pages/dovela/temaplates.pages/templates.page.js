import React, { useContext, useEffect, useState } from 'react';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider';
import SERVICE_TEMPLATES from '../../../services/apis/templates.service';

// COMPONENTS
import TABLE_COMPONENT from '../../../resources/customs/components/table.component';
import DIALOG from '../../../resources/customs/components/dialog.component';
import ALERT_CONFIRM from '../../../resources/customs/utils/notCofirm.component';
import BTN_HELP from '../../../resources/customs/components/btnHelp.component';
import FORM from '../../../resources/customs/components/form.component';
import { ALERT_ERROR, ALERT_NO_PERMIT, ALERT_SUCCESS, ALERT_WAIT } from '../../../resources/customs/utils/notifications.vars';

// ICONS
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'
import ViewsAuthorizeIcon from '@rsuite/icons/ViewsAuthorize';


import { FIND_PERMIT } from '../../../resources/customs/utils/lamdas.functions';
import { Col, Grid, Panel, Row } from 'rsuite';
import { Button, Button as ButtonBP, FormGroup, Icon, NonIdealState, Switch } from '@blueprintjs/core';

import NON_IDEAL_STATE from '../../../resources/customs/components/nonideal.component';
import TEXTAREA from '../../../resources/customs/components/form.components/textarea.component';
import TEMPLATES_BODY from './body.template';
import NAVIGATON from '../../../resources/customs/components/navigation.component';

export default function TEMPLATES() {
    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const connID = conn.id ?? '';
    const connName = conn.name ?? '';

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('templates');
    const btn = utilities.getTranslation('btns');
    const lang = utilities.lang;

    const permits = conn.roles ?? [];

    const canView = FIND_PERMIT(permits, 'tempplates', 1);
    const cancreate = FIND_PERMIT(permits, 'tempplates', 2);
    const canEdit = FIND_PERMIT(permits, 'tempplates', 3);
    const canDelete = FIND_PERMIT(permits, 'tempplates', 4);

    var [load, setLoad] = useState(0);
    var [data, setData] = useState([]);
    var [parse, setParse] = useState({});

    useEffect(() => {
        if (load == 0 || load == 2) loadData();
    }, [load]);


    let FORM_INPUTS = (edit) => [
        {
            inputs: [
                {
                    label: trn.form[0], placeholder: trn.form[0], leftIcon: 'document', fname: 'template_name', min: 3,
                    id: 'templates_form_name', req: true, dv: edit.template_name ?? '',
                },
                {
                    label: trn.form[1], placeholder: trn.form[1], leftIcon: 'saved', fname: 'template_type', min: 3,
                    id: 'templates_form_roleInfo', dv: edit.template_type ?? 'calc', type: 'select', req: true,
                    selectOptions: [
                        { value: 'calc', label: trn.template_types.calc, },
                        { value: 'tax', label: trn.template_types.tax, },
                        { value: 'arc', label: trn.template_types.arc, },
                        { value: 'res', label: trn.template_types.res, },
                    ]
                },

            ],
        },

    ]

    // ************************** HELP FUCTIONS **************************** //
    // ************************** JSX ELEMENTS **************************** //
    let _COMPONENET_MANAGE = (edit) => {
        return <>
            <DIALOG title={edit ? btn.edit + ': ' + edit.template_name : btn.new}
                icon={edit ? 'annotation' : "add"}
                hideClose forceClose={load == 0}
                btn={!edit ? { text: btn.new, icon: 'add', intent: 'success' } : false}
                btnWhisper={edit ? { icon: <FaEdit className='text-primary' />, text: btn.edit } : false} >

                <FORM form={FORM_INPUTS(edit)} id="templates_form" onSubmit={(e) => manage(e, edit)}
                    btnAlignment="txt-r" submitBtn={edit.id
                        ? <ButtonBP icon="annotation" intent="success" type="submit" text={btn.edit} />
                        : <ButtonBP icon="add" intent="success" type="submit" text={btn.add} />}
                />
            </DIALOG>
        </>
    }

    let _COMPONENT_DELETE = (row) => {
        return <>
            <ALERT_CONFIRM title={btn.delete + ': ' + row.template_name} icon={'trash'} intent="danger" cnfText={btn.delete}
                onConfirm={() => destroy(row.id)}
                btnWhisper={{ icon: <RiDeleteBinLine className='text-danger' />, text: btn.delete }} >
                {trn.confirm}
            </ALERT_CONFIRM>
        </>
    }

    // *************************** DATA TABLE  **************************** //
    const columns = [
        {
            name: trn.tableCl[0],
            selector: row => row.template_name,
            cell: row => row.template_name
        },
        {
            name: trn.tableCl[1],
            selector: row => trn.template_types[row.template_type],
            cell: row => trn.template_types[row.template_type],
        },
        {
            name: trn.tableCl[2],
            button: true,
            minWidth: '100px',
            maxWidth: '150px',
            cell: row => <>
                {canEdit ? _COMPONENET_MANAGE(row) : ''}
                {canDelete ? _COMPONENT_DELETE(row) : ''}
            </>,
        },
    ]
    const ExpandedComponent = ({ data }) => {
        let default_data = `@NOMBRE PADRE : r p\n#NOMBRE HIJO 1 : mult\n#NOMBRE HIJO 2 : mult`

        let template_data = data.template_data || default_data

        let currentParse = parse[data.id] || template_data
        return <>
            <Grid fluid>
                <Row style={{ width: '100%' }} >
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className="my-1">
                        <Row className='my-1 txt-c'>
                            <h6>{trn.template_model}: {data.template_name} ({trn.template_types[data.template_type]}) <BTN_HELP
                                title={trn.template_types.calc}
                                text={trn.template_types_info.calc}
                                page={trn.HELP_PAGE} focus="create_tc" /></h6>
                        </Row>
                        <TEXTAREA length={4000} dv={currentParse} id={'edit_template_data_' + data.id} />
                        <Row className='my-1'>
                            <Button intent="success" icon="floppy-disk" onClick={() => update(data.id)} >{btn.save}</Button>
                            <Button className='mx-1' intent="warning" icon="build" onClick={() => setParse({ [data.id]: document.getElementById('edit_template_data_' + data.id).value })} >{btn.build}</Button>

                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className="my-1">
                        <Row className='my-1 txt-c'>
                            <h6>{trn.template_body}: {data.template_name} ({trn.template_types[data.template_type]})</h6>
                        </Row>
                        <Panel className="border">
                            {data.template_type ? <TEMPLATES_BODY data={currentParse} type={data.template_type} id={data.id} /> : ''}
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </>
    };

    let _COMPONENT_ROLES_DATATABLE = () => <TABLE_COMPONENT
        title={trn.tableHd}
        titleIcon={<ViewsAuthorizeIcon style={{ fontSize: '24px', color: 'DarkOrchid' }} />}
        columns={columns}
        data={data}
        load={load == 0}
        expand={ExpandedComponent}
        search={['template_name']}
    />
    // ******************************** APIS ****************************** //
    function loadData() {
        SERVICE_TEMPLATES.getAll()
            .then(response => {
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else setData(response.data)
            })
            .catch(e => {
                console.log(e);
            }).finally(() => setLoad(1));
    }

    function manage(data, object) {
        if (!data) return;

        let formData = data.formData;

        ALERT_WAIT(lang);
        if (object.id) {
            SERVICE_TEMPLATES.update(object.id, formData)
                .then(response => {
                    if (response.data === 'OK') ALERT_SUCCESS(lang);
                    else if (response.data === 'NO PERMIT') ALERT_NO_PERMIT(lang);
                    else ALERT_ERROR(lang);
                })
                .catch(e => {
                    console.log(e);
                    ALERT_ERROR(lang);
                }).finally(() => setLoad(0));
        }
        else {
            SERVICE_TEMPLATES.create(formData)
                .then(response => {
                    if (response.data === 'OK') ALERT_SUCCESS(lang);
                    else if (response.data === 'NO PERMIT') ALERT_NO_PERMIT(lang);
                    else ALERT_ERROR(lang);
                })
                .catch(e => {
                    console.log(e);
                    ALERT_ERROR(lang);
                }).finally(() => setLoad(0));
        }
    }

    function destroy(id) {
        ALERT_WAIT(lang);

        SERVICE_TEMPLATES.delete(id)
            .then(response => {
                if (response.data === 'OK') ALERT_SUCCESS(lang);
                else if (response.data === 'NO PERMIT') ALERT_NO_PERMIT(lang);
                else ALERT_ERROR(lang);
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang);
            }).finally(() => setLoad(0));

    }

    function update(id) {
        var formData = new FormData();

        let template_data = document.getElementById('edit_template_data_' + id).value
        formData.append('template_data', template_data)

        ALERT_WAIT(lang);
        SERVICE_TEMPLATES.update(id, formData)
            .then(response => {
                if (response.data === 'OK') ALERT_SUCCESS(lang);
                else if (response.data === 'NO PERMIT') ALERT_NO_PERMIT(lang);
                else ALERT_ERROR(lang);
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang);
            }).finally(() => setLoad(2));
    }

    return (
        <>

            <NAVIGATON nav={trn.nav({ name: connName, id: connID })} />


            <Row className="text-center" style={{ width: '100%' }}>
                <h3>{trn.title} <BTN_HELP
                    title={trn.btn_help_tile}
                    text={trn.btn_help_body}
                    page={trn.HELP_PAGE} focus="title" /></h3>
            </Row>

            {cancreate ? _COMPONENET_MANAGE(false) : ''}
            {canView ? _COMPONENT_ROLES_DATATABLE() : <NON_IDEAL_STATE type="permit" />}
        </>
    );
}
