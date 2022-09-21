import React, { useContext, useEffect, useState } from 'react';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider';

import SERVICE_SUBMIT from '../../../services/apis/submit.service';
import SERVICE_FUN from '../../../services/apis/fun.service';

import TABLE_COMPONENT from '../../../resources/customs/components/table.component';
import { FaCheck, FaTimes, FaEdit } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'
import { Col, Divider, Row, toaster } from 'rsuite';
import BTN_HELP from '../../../resources/customs/components/btnHelp.component';
import { Button as ButtonBP, Icon } from '@blueprintjs/core';
import MODAL from '../../../resources/customs/components/modal.component';
import FORM from '../../../resources/customs/components/form.component';
import { FIND_PERMIT, GET_LAST_ID_PUBLIC, GET_LAST_VR } from '../../../resources/customs/utils/lamdas.functions';
import { formsParser1 } from '../../../resources/customs/utils/funParser.module';
import { ALERT_ERROR, ALERT_ERROR_DUPLICATE, ALERT_SUCCESS, ALERT_WAIT, CONFIRM_DELETE } from '../../../resources/customs/utils/notifications.vars';
import moment from 'moment';
import SUBMIT_LISTS from './submit_lists.component';
import ButtonWhisper from '../../../resources/customs/components/btnWhisper.component';
import SUBMIT_PDF from './submit_pdf.component';
import NON_IDEAL_STATE from '../../../resources/customs/components/nonideal.component';
import NAVIGATON from '../../../resources/customs/components/navigation.component';


export default function SUBMIT() {
    const auth = useContext(AuthContext);
    const user = auth.user ?? {};
    const conn = auth.conn ?? {};

    const connID = conn.id ?? '';
    const connName = conn.name ?? '';

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('submit');
    const lang = utilities.lang;

    const permits = conn.roles ?? [];
    const canView = FIND_PERMIT(permits, 'submit', 1);
    const cancreate = FIND_PERMIT(permits, 'submit', 2);
    const canEdit = FIND_PERMIT(permits, 'submit', 3);
    const canDelete = FIND_PERMIT(permits, 'submit', 4);

    var [load, setLoad] = useState(0);
    var [editItem, setEdit] = useState(false);
    var [data, setData] = useState([]);
    var [modal, setModal] = useState(false);
    var [newFUN, setFUN] = useState(false);
    var [verifyMSG, setMSG] = useState("");

    useEffect(() => {
        if (load == 0) loadData();
        if (load == 2) loadData(true);
    }, [load]);

    // ************************** HELP FUCTIONS **************************** //


    // ************************** JSX ELEMENTS **************************** //
    const MANAGE_COMPONENT = (edit) => {
        const FORM_INPUTS = [
            {
                inputs: [
                    {
                        label: trn.FORM_MANAGE[0].label, placeholder: trn.FORM_MANAGE[0].placeholder, leftIcon: 'selection',
                        id: 'submit_form_pvr', req: true, dv: edit.id_public ?? '', readOnly: edit,
                        rightBtn: edit ? false : { icon: 'numerical', intent: 'primary', label: trn.FORM_MANAGE[0].rightBtnLabel, onClick: () => GET_LAST_VR('submit_form_pvr', lang), },
                    },
                    {
                        label: trn.FORM_MANAGE[1].label, placeholder: trn.FORM_MANAGE[1].placeholder, leftIcon: 'selection',
                        id: 'submit_form_idrelated', labelHelp: verifyMSG, labelHelpSw: verifyMSG, dv: edit.id_related ?? '',
                        rightBtn: {
                            icon: newFUN ? 'numerical' : 'thumbs-up', intent: 'primary', label: newFUN ? trn.FORM_MANAGE[1].rightBtnLabel[1] : trn.FORM_MANAGE[1].rightBtnLabel[0],
                            onClick: () => newFUN ? GET_LAST_ID_PUBLIC('submit_form_idrelated', lang) : VERIFY_RELATED_ID('submit_form_idrelated', 'submit_form_type'),
                        },
                    },
                    {
                        label: trn.FORM_MANAGE[2].label, type: 'switch', labelSwitch: trn.FORM_MANAGE[2].label1, dc: newFUN, show: !edit,
                        id: 'submit_form_nfun', labelHelp: trn.FORM_MANAGE[2].label2, onChange: () => setFUN(!newFUN), labelHelpSw: newFUN
                    },
                    {
                        label: trn.FORM_MANAGE[3].label, placeholder: trn.FORM_MANAGE[3].placeholder, leftIcon: 'selection', id: 'submit_form_payment',
                        show: newFUN && !edit
                    },
                ],
            },
            {
                inputs: [
                    {
                        label: trn.FORM_MANAGE[4].label, placeholder: trn.FORM_MANAGE[4].placeholder, leftIcon: 'diagram-tree',
                        id: 'submit_form_type', dv: edit.type ?? '',
                    },
                    {
                        label: trn.FORM_MANAGE[5].label, placeholder: trn.FORM_MANAGE[5].placeholder, leftIcon: 'inherited-group',
                        id: 'submit_form_owner', dv: edit.owner ?? '',
                    },
                ],
            },
            {
                inputs: [
                    {
                        label: trn.FORM_MANAGE[6].label, placeholder: trn.FORM_MANAGE[6].placeholder, leftIcon: 'property',
                        id: 'submit_form_state', dv: edit.list_type_str ?? '',
                    },
                    {
                        label: trn.FORM_MANAGE[7].label, placeholder: trn.FORM_MANAGE[7].placeholder, req: true,
                        type: 'select', leftIcon: 'property', id: 'submit_form_typrad', dv: edit.list_type ?? '',
                        selectOptions: [
                            { value: 1, label: trn.FORM_MANAGE[7].labelOptions[0], },
                            { value: 2, label: trn.FORM_MANAGE[7].labelOptions[1], },
                            { value: 3, label: trn.FORM_MANAGE[7].labelOptions[2], },
                            { value: 0, label: trn.FORM_MANAGE[7].labelOptions[3], },
                        ]
                    },
                    {
                        label: trn.FORM_MANAGE[8].label, placeholder: trn.FORM_MANAGE[8].placeholder, leftIcon: 'person', id: 'submit_form_worker',
                        dv: edit.worker_reciever ?? user.fullname, readOnly: true
                    },
                ],
            },
            {
                inputs: [
                    {
                        label: trn.FORM_MANAGE[9].label, placeholder: trn.FORM_MANAGE[9].placeholder, type: 'date', req: true,
                        dv: edit.date ?? moment().format('YYYY-MM-DD'), dvTime: edit.time ?? moment().format('HH:mm'),
                        useTime: true, leftIcon: 'calendar', id: 'submit_form_date', idTime: 'submit_form_time',
                    },
                    {
                        label: trn.FORM_MANAGE[10].label, placeholder: trn.FORM_MANAGE[10].placeholder, leftIcon: 'person',
                        id: 'submit_form_person', dv: edit.name_retriever ?? '',
                    },
                    {
                        label: trn.FORM_MANAGE[11].label, placeholder: trn.FORM_MANAGE[11].placeholder, leftIcon: 'id-number',
                        id: 'submit_form_personid', dv: edit.id_number_retriever ?? '',
                    },
                ],
            },
            {
                inputs: [
                    {
                        label: trn.FORM_MANAGE[12].label, placeholder: trn.FORM_MANAGE[12].placeholder, type: "textarea", length: 2000,
                        id: 'submit_form_details', dv: edit.details ?? '',
                    },
                ],
            },
        ]

        return <>
            <Divider>{trn.categories[0]} <BTN_HELP title={trn.FORM_INFO_BTN[0]} text={trn.FORM_INFO_BTN[1]} page={trn.FORM_INFO} focus={'id_public'} /></Divider>
            <FORM form={FORM_INPUTS} id="submit_form" onSubmit={(e) => manage({ id: edit ? edit.id : false })}
                submitBtn={edit ? <ButtonBP icon="annotation" intent="success" type="submit" text={trn.edit} /> : <ButtonBP icon="add" intent="success" type="submit" text={trn.new} />} />
        </>
    }

    // *************************** DATA TABLE  **************************** //
    const columns = [
        {
            name: trn.table_columns[0],
            selector: row => row.id_public,
            minWidth: '150px',
            maxWidth: '150px',
            cell: row => <label>{row.id_public}</label>
        },
        {
            name: trn.table_columns[1],
            selector: row => row.id_related,
            minWidth: '150px',
            maxWidth: '150px',
            cell: row => <label>{row.id_related}</label>
        },
        {
            name: trn.table_columns[2],
            selector: row => row.type,
            minWidth: '300px',
            cell: row => <label>{row.type}</label>
        },
        {
            name: trn.table_columns[3],
            selector: row => row.date + ' - ' + row.time,
            cell: row => <label>{row.date} - {row.time}</label>
        },
        {
            name: trn.table_columns[4],
            selector: row => row.sub_doc ? true : false,
            minWidth: '130px',
            maxWidth: '130px',
            cell: row => {
                let isAnex = row.sub_doc ? row.sub_doc.filename ? true : false : false;
                if (isAnex) return <FaCheck className='text-success' />
                else return <FaTimes className='text-danger' />

            }
        },
        {
            name: <label>{trn.table_columns[5]}</label>,
            button: true,
            minWidth: '100px',
            omit: !canEdit && !canDelete,
            cell: row => <>
                {canEdit ? <ButtonWhisper whisper={trn.pop_texts[0]} subtle onClick={() => { setEdit(row); setModal(!modal) }}>
                    <FaEdit className='text-primary' />
                </ButtonWhisper> : ''}
                {canDelete ? <ButtonWhisper whisper={trn.pop_texts[1]} subtle onClick={() => CONFIRM_DELETE(lang, row.id_public, () => remove(row.id))}>
                    <RiDeleteBinLine className='text-danger' />
                </ButtonWhisper> : ''}

            </>,
        },
    ]
    // ******************************** APIS ****************************** //
    function loadData(updateEdit) {
        SERVICE_SUBMIT.getAll()
            .then(response => {
                if (Array.isArray(response.data)) {
                    setData(response.data);
                    if (updateEdit) setEdit(response.data.find(d => d.id == editItem.id));
                }
                setLoad(1);
            })
            .catch(e => {
                console.log(e);
                setLoad(-1)
            });
    }
    function VERIFY_RELATED_ID(_html, _type) {
        var html = document.getElementById(_html)
        var id = html.value;
        if (id.length) {
            GET_TYPE(id)
            SERVICE_SUBMIT.verifyid(id)
                .then(response => {
                    if (response.data.length) {
                        setMSG(<label><Icon icon={'tick'} intent="success" /> {trn.FORM_MANAGE[13].label[0]}</label>)
                    } else {
                        setMSG(<label><Icon icon={'cross'} intent="warning" /> {trn.FORM_MANAGE[13].label[1]}</label>)
                    }
                })
                .catch(e => {
                    console.log(e);
                    setMSG(<label><Icon icon={'cross'} intent="danger" /> {trn.FORM_MANAGE[13].label[2]}</label>)
                });
        } else {
            document.getElementById(_type).value = ""
            setMSG(<label><Icon icon={'search'} intent="warning" /> {trn.FORM_MANAGE[13].label[3]}</label>)
        }
    }
    function GET_TYPE(id_public) {
        SERVICE_FUN.get_fun_IdPublic(id_public).then(response => {
            if (response.data) {
                let fun = response.data;
                let version = fun.version - 1
                let fun_1 = fun.fun_1s[version]
                let fun_51 = fun.fun_51s;
                let owners = [];
                let state = fun.state;
                let rec_rev = fun.record_review ? fun.record_review.check : null;
                let rec_rev_2 = fun.record_review ? fun.record_review.check_2 : null;
                let state_str = (state) => {
                    if (state == undefined || state == null) return '';
                    if (state < -1) return 'DESISTIDO';
                    if (state < 5) return 'INCOMPLETO';
                    if (state == 5) {
                        let con = (rec_rev == 1 || (rec_rev != 1 && rec_rev_2 == 1));
                        let con2 = (rec_rev == null && rec_rev_2 == null);
                        if (con2) return 'LEGAL Y DEBIDA FORMA';
                        if (con) return "ACTA DE OBSERVACIONES"
                        return "ACTA DE OBSERVACIONES Y CORRECCIONES"
                    }
                    if (state > 5 || state < 100) return "EXPEDICIÓN";
                    if (state > 100 || state < 200) return "EXPEDIDO";
                    if (state > 200) return "DESISTIDO";
                }
                fun_51.map(value => { if (value.role == 'PROPIETARIO') owners.push(value.name + ' ' + value.surname) })
                document.getElementById('submit_form_owner').value = owners.join(', ');
                document.getElementById('submit_form_state').value = state_str(state);
                if (fun_1) document.getElementById('submit_form_type').value = formsParser1(fun_1);
                else document.getElementById('submit_form_type').value = ""
            } else document.getElementById('submit_form_type').value = ""
        })
    }

    function manage(action) {
        var formData = new FormData();

        let type = document.getElementById("submit_form_type").value;
        if (type) formData.set('type', type);

        let list_type_str = document.getElementById("submit_form_state").value;
        if (list_type_str) formData.set('list_type_str', list_type_str);

        let list_type = document.getElementById("submit_form_typrad").value;
        if (list_type) formData.set('list_type', list_type);

        let id_related = document.getElementById("submit_form_idrelated").value;
        if (id_related) formData.set('id_related', id_related);
        if (document.getElementById("submit_form_nfun")) {
            if (document.getElementById("submit_form_nfun").checked) {
                let id_payment = document.getElementById("submit_form_payment").value;
                if (id_payment) formData.set('id_payment', id_payment);
            }
        }

        let id_public = document.getElementById("submit_form_pvr").value;
        formData.set('id_public', id_public);

        let date = document.getElementById("submit_form_date").value;
        if (date) formData.set('date', date);
        let time = document.getElementById("submit_form_time").value;
        if (time) formData.set('time', time);

        let owner = document.getElementById("submit_form_owner").value;
        if (owner) formData.set('owner', owner);

        let worker_reciever = document.getElementById("submit_form_worker").value;
        if (worker_reciever) formData.set('worker_reciever', worker_reciever);
        if (worker_reciever) formData.set('worker_id', user.id);

        let name_retriever = document.getElementById("submit_form_person").value;
        if (name_retriever) formData.set('name_retriever', name_retriever);

        let id_number_retriever = document.getElementById("submit_form_personid").value;
        if (id_number_retriever) formData.set('id_number_retriever', id_number_retriever);

        let details = document.getElementById("submit_form_details").value;
        if (details) formData.set('details', details);

        save(formData, action)
    }
    function save(formData, action) {
        ALERT_WAIT(lang);
        if (action.id) {
            formData.delete('worker_id');
            formData.delete('id_public');

            SERVICE_SUBMIT.update(action.id, formData)
                .then(response => {
                    if (response.data === 'OK') {
                        ALERT_SUCCESS(lang);
                        setLoad(0);
                    } else if (response.data === 'ERROR_DUPLICATE') ALERT_ERROR_DUPLICATE(lang);
                    else ALERT_ERROR(lang);
                })
                .catch(e => {
                    console.log(e);
                    ALERT_ERROR(lang);
                });
        }
        else {
            SERVICE_SUBMIT.create(formData)
                .then(response => {
                    if (response.data === 'OK') {
                        ALERT_SUCCESS(lang);
                        setLoad(0);
                        setModal(false);
                    } else if (response.data === 'ERROR_DUPLICATE') ALERT_ERROR_DUPLICATE(lang);
                    else ALERT_ERROR(lang);
                })
                .catch(e => {
                    console.log(e);
                    ALERT_ERROR(lang);
                });
        }
    }
    function remove(id) {
        toaster.remove()
        ALERT_WAIT(lang);
        SERVICE_SUBMIT.delete(id)
            .then(response => {
                if (response.data === 'OK') {
                    ALERT_SUCCESS(lang)
                    setLoad(0)
                } else ALERT_ERROR(lang)
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang)
            });
    }

    return (
        <>
            <NAVIGATON nav={trn.nav({ name: connName, id: connID })} />

            <Row className="text-center" style={{ width: '100%' }}>
                <h3>{trn.title}  <BTN_HELP
                    title={trn.btn_help_texts[0]}
                    text={trn.btn_help_texts[1]}
                    page={trn.HELP_PAGE} focus="title" /></h3>
                {cancreate ? <Col className="txt-l">
                    <ButtonBP icon="add" intent="success" text={trn.new} onClick={() => { setEdit(false); setModal(!modal) }} />
                </Col> : ''}
            </Row>

            {canView ? <>
                <TABLE_COMPONENT
                    title={trn.table_title}
                    titleIcon={<Icon icon={'paperclip'} intent={'primary'} size="24" />}
                    columns={columns}
                    data={data}
                    load={load == 0}
                    search={['id_public', 'id_related', 'type', 'date', 'owner', 'name_retriever', 'id_number_retriever']}
                />

                <MODAL
                    open={modal}
                    setOpen={setModal}
                    title={editItem ? trn.edit + ': ' + editItem.id_public : trn.new}
                    icon={editItem ? <Icon icon={'annotation'} intent={'primary'} size="25" /> : <Icon icon={'add'} intent={'success'} size="25" />}
                    size="lg"
                    helpBtn={<BTN_HELP
                        title={trn.btn_help_texts[0]}
                        text={trn.btn_help_texts[1]}
                        page={editItem ? trn.EDIT_HELP_PAGE : trn.NEW_HELP_PAGE} focus={editItem ? 'edit' : "title"} />}
                >
                    {MANAGE_COMPONENT(editItem)}
                    {editItem ? <>
                        <SUBMIT_LISTS currentItem={editItem} />
                        <SUBMIT_PDF currentItem={editItem} reload={() => setLoad(2)} />
                    </> : ''}
                </MODAL>
            </> : <NON_IDEAL_STATE type="permit" />

            }


        </>
    );
}