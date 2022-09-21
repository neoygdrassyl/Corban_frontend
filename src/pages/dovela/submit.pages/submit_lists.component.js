import React, { useContext, useEffect, useState } from 'react';
import { UtilContext } from '../../../resources/customs/contextProviders/util.provider';
import { AuthContext } from '../../../resources/customs/contextProviders/auth.provider';

import SERVICE_SUBMIT from '../../../services/apis/submit.service';
import { Col, Divider, Grid, Panel, PanelGroup, Row, toaster } from 'rsuite';
import { Button as ButtonBP, FormGroup, Icon, InputGroup, Switch } from '@blueprintjs/core';

import { ALERT_EMPTY_LIST, ALERT_ERROR, ALERT_SUCCESS, ALERT_WAIT, CONFIRM_DELETE } from '../../../resources/customs/utils/notifications.vars';
import DOC_LIST from '../../../resources/jsons/fun6DocsList.json'
import BTN_LIST_DOCS from '../../../resources/customs/components/btnListDocs.component';
import ButtonWhisper from '../../../resources/customs/components/btnWhisper.component';
import BTN_HELP from '../../../resources/customs/components/btnHelp.component';

export default function SUBMIT_LISTS(props) {
    const { currentItem } = props;
    const auth = useContext(AuthContext);
    const user = auth.user ?? {};

    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('submit');
    const trn_dlt = utilities.getTranslation('doc_list_titles');
    const lang = utilities.lang;

    var [load, setLoad] = useState(0);
    var [data, setData] = useState([]);
    var [lists, setLists] = useState([]);
    var [newList, setNewList] = useState('list_61')
    var [newListArray, setNewListA] = useState([]);
    var [editList, setEditList] = useState(false);
    var [editListArray, setEditListA] = useState([]);

    const LISTS = [
        {
            id: 'list_61', name: trn_dlt.list_61, list: [511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534]
        },
        {
            id: 'list_62', name: trn_dlt.list_62, list: [601, 602, 621, 622, 623, 624, 625, 626, 627]
        },
        {
            id: 'list_63', name: trn_dlt.list_63, list: [602, 630, 631, 632, 633, 634, 635, 636]
        },
        {
            id: 'list_64', name: trn_dlt.list_64, list: [641, 642, 643]
        },
        {
            id: 'list_65', name: trn_dlt.list_65, list: [651, 652, 653]
        },
        {
            id: 'list_66', name: trn_dlt.list_66, list: [6601, 6602, 6603, 6604, 6605, 6607, 6608, 6609, 6610, 6611, 6612, 6613, 6614, 6615, 6616, 6617, 6618, 6619, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915]
        },
        {
            id: 'list_67', name: trn_dlt.list_67, list: [671, 672]
        },
        {
            id: 'list_68', name: trn_dlt.list_68, list: [680, 681, 683, 684, 685, 686, 687, 688, 689]
        },
        {
            id: 'list_Z', name: trn_dlt.list_Z, list: [701, 702, 703, 705, 706, 707]
        },
    ]

    useEffect(() => {
        if (load == 0) loadData()
    }, [load]);

    // ************************** HELP FUCTIONS **************************** //
    function setEditListMap(LIST) {
        let names = LIST.list_name.split(';');
        let codes = LIST.list_code.split(',');
        let pages = LIST.list_pages.split(',');
        let reviews = LIST.list_review.split(',');

        let newArray = [];

        reviews.map((r, i) => {
            if (r == 'SI') newArray.push({ name: names[i], code: codes[i], pages: pages[i] })
        })

        return newArray;
    }
    // ************************** JSX ELEMENTS **************************** //
    const COMPONENT_LISTS = () => {
        return <>

            {lists.length > 0 ?
                <Grid className='my-1' fluid>
                    <Row className='border bg-cold txt-c fw-b  py-1' style={{ width: '100%' }}>
                        <Col xl={18} lg={16} md={16} sm={12} xs={8}><label>{trn.FORM_DOCUMENT_TABLE[0]}</label></Col>
                        <Col xl={3} lg={4} md={4} sm={6} xs={8}><label>{trn.FORM_DOCUMENT_TABLE[1]}</label></Col>
                        <Col xl={3} lg={4} md={4} sm={6} xs={8}><label>{trn.FORM_DOCUMENT_TABLE[2]}</label></Col>
                    </Row>
                </Grid>
                : ''}
            {lists.map(list => {
                let title = list.list_title;
                let names = list.list_name.split(';');
                let codes = list.list_code.split(',');
                let pages = list.list_pages.split(',');
                let reviews = list.list_review.split(',');

                let isEdit = editList.id == list.id;
                return <Grid className='my-1' fluid>
                    <Row className='border bg-cold txt-c fw-b' style={{ width: '100%' }} >
                        <Col xl={22} lg={22} md={22} sm={22} xs={22}>
                            {isEdit ?
                                <FormGroup
                                    label={trn.FORM_DOCUMENT_TABLE[4]}
                                    inline
                                    style={{ marginLeft: '33%' }}
                                >
                                    <InputGroup
                                        id={'submit_form_newListTitle_edit'}
                                        maxLength={200}
                                        placeholder="NOMBRE LISTA"
                                        leftIcon={"highlight"}
                                        defaultValue={title}
                                    />
                                </FormGroup>
                                : trn.FORM_DOCUMENT_TABLE[4] + title}
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                            <ButtonWhisper style={{ float: 'right' }} whisper={trn.FORM_DOCUMENT_BTNS[0]} icon="annotation" onClick={() => { setEditList(editList.id == list.id ? false : list); setEditListA(setEditListMap(list)) }} />
                        </Col>
                    </Row>
                    {isEdit ?
                        <>
                            {editListArray.map((item, i) => {
                                return <>
                                    <Row className='border txt-c' style={{ width: '100%' }}>
                                        <Col xl={15} lg={15} md={12} sm={12} xs={24} className="txt-l">
                                            <InputGroup name={'submit_form_newListName_edit'} id={'submit_form_newListName_edit_' + i} maxLength={200} placeholder="NOMBRE DOCUMENTO" leftIcon={"highlight"}
                                                defaultValue={item.name} rightElement={<BTN_LIST_DOCS idName={'submit_form_newListName_edit_' + i} idCode={'submit_form_newListCode_edit_' + i} />}
                                            />
                                        </Col>
                                        <Col xl={3} lg={3} md={4} sm={4} xs={8}>
                                            <div class="bp4-input-group">
                                                <span class={"bp4-icon bp4-icon-array-numeric"}></span>
                                                <input type="number" name={"submit_form_newListCode_edit"} id={'submit_form_newListCode_edit_' + i} min={0}
                                                    defaultValue={item.code} className="bp4-input" />
                                            </div>
                                        </Col>
                                        <Col xl={3} lg={3} md={4} sm={4} xs={8}>
                                            <div class="bp4-input-group">
                                                <span class={"bp4-icon bp4-icon-document"}></span>
                                                <input type="number" name={"submit_form_newListPages_edit"} min={0}
                                                    defaultValue={item.pages} className="bp4-input" />
                                            </div>
                                        </Col>
                                        <Col xl={3} lg={3} md={4} sm={4} xs={8}><Switch defaultChecked={true} name={"submit_form_newListSw_edit"} /></Col>
                                    </Row>
                                </>
                            })}
                        </>

                        : names.map((item, i) => {
                            if (reviews[i] == 'SI') {
                                return <Row className='txt-c p-0 border' style={{ width: '100%' }}>
                                    <Col xl={18} lg={16} md={16} sm={12} xs={8} className="txt-l"><label>{names[i]}</label></Col>
                                    <Col xl={3} lg={4} md={4} sm={6} xs={8}><label>{codes[i]}</label></Col>
                                    <Col xl={3} lg={4} md={4} sm={6} xs={8}><label>{pages[i]}</label></Col>
                                </Row>
                            }
                        })}

                    {isEdit ?
                        <Row className='border py-1' style={{ width: '100%' }} >
                            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                <ButtonBP className='mx-1' icon="floppy-disk" intent="success" text={trn.FORM_DOCUMENT_BTNS[1]} style={{ float: 'left' }}
                                    onClick={() => updateList(list.id)} />
                                <ButtonBP icon="trash" intent="danger" text={trn.FORM_DOCUMENT_BTNS[2]} style={{ float: 'left' }}
                                    subtle onClick={() => CONFIRM_DELETE(lang, title, () => deleteList(list.id))} />
                                <ButtonBP className='mx-1' icon="add" intent="primary" text={trn.FORM_DOCUMENT_BTNS[4]} style={{ float: 'right' }}
                                    onClick={() => setEditListA(editListArray.concat([0]))} />
                                {editListArray.length > 0 ?
                                    <ButtonBP icon="remove" intent="secondary" text={trn.FORM_DOCUMENT_BTNS[3]} style={{ float: 'right' }}
                                        onClick={() => { var newA = editListArray; newA.pop(); setEditListA(newA.concat()) }} />
                                    : ''}

                            </Col>
                        </Row>
                        : ''}
                </Grid>
            })}
        </>
    }

    const COMPONENT_NEW_LIST = (_key) => {
        let LIST = LISTS.find(list => list.id == _key);
        return <>
            <div className='border bg-success p-1 txt-c fw-b'>
                {LIST ? <label>{trn.FORM_DOCUMENT_TABLE[5]}<label id={'submit_form_newListTitle'}>{LIST.name}</label></label> :
                    <FormGroup
                        label={trn.FORM_DOCUMENT_TABLE[4]}
                        inline
                        style={{ marginLeft: '33%' }}
                    >
                        <InputGroup
                            id={'submit_form_newListTitle'}
                            maxLength={200}
                            placeholder={trn.FORM_DOCUMENT_TABLE[6]}
                            leftIcon={"highlight"}
                        />
                    </FormGroup>
                }
            </div>
            <div className='border bg-success p-1 txt-c fw-b'>
                <Row>
                    <Col xl={15} lg={15} md={12} sm={12} xs={6}><label>{trn.FORM_DOCUMENT_TABLE[0]}</label></Col>
                    <Col xl={3} lg={3} md={4} sm={4} xs={6}><label>{trn.FORM_DOCUMENT_TABLE[1]}</label></Col>
                    <Col xl={3} lg={3} md={4} sm={4} xs={6}><label>{trn.FORM_DOCUMENT_TABLE[2]}</label></Col>
                    <Col xl={3} lg={3} md={4} sm={4} xs={6}><label>{trn.FORM_DOCUMENT_TABLE[3]}</label></Col>
                </Row>
            </div>
            {LIST ? LIST.list.map((doc, i) => {
                return <>
                    <Grid className='border txt-c' fluid>
                        <Row style={{ width: '100%' }}>
                            <Col xl={15} lg={15} md={12} sm={12} xs={24} className="txt-l"><label name={"submit_form_newListName"}>{DOC_LIST[lang][doc]}</label></Col>
                            <Col xl={3} lg={3} md={4} sm={4} xs={8}><label name={"submit_form_newListCode"}>{doc}</label></Col>
                            <Col xl={3} lg={3} md={4} sm={4} xs={8}>
                                <div class="bp4-input-group">
                                    <span class={"bp4-icon bp4-icon-document"}></span>
                                    <input type="number" name={"submit_form_newListPages"} min={0}
                                        className="bp4-input" />
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={4} xs={8}><Switch name={"submit_form_newListSw"} /></Col>
                        </Row>
                    </Grid>
                </>
            }) : <>
                <Grid fluid>
                    {newListArray.map((arr, i) => {
                        return <Row style={{ width: '100%' }} className='border txt-c' >
                            <Col xl={15} lg={15} md={12} sm={12} xs={24} className="txt-l">
                                <InputGroup name={'submit_form_newListName'} id={'submit_form_newListName_' + i} maxLength={200} placeholder={trn.FORM_DOCUMENT_TABLE[7]} leftIcon={"highlight"}
                                    rightElement={<BTN_LIST_DOCS idName={'submit_form_newListName_' + i} idCode={'submit_form_newListCode' + i} />}
                                />
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={4} xs={8}>
                                <div class="bp4-input-group">
                                    <span class={"bp4-icon bp4-icon-array-numeric"}></span>
                                    <input type="number" name={"submit_form_newListCode"} id={'submit_form_newListCode' + i} min={0}
                                        className="bp4-input" />
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={4} xs={8}>
                                <div class="bp4-input-group">
                                    <span class={"bp4-icon bp4-icon-document"}></span>
                                    <input type="number" name={"submit_form_newListPages"} min={0}
                                        className="bp4-input" />
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={4} xs={8}><Switch name={"submit_form_newListSw"} defaultChecked={true} /></Col>
                        </Row>
                    })}
                    <Row className='border py-1' style={{ width: '100%' }} >
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <ButtonBP className='mx-1' icon="add" intent="primary" text={trn.FORM_DOCUMENT_BTNS[4]} style={{ float: 'right' }}
                                onClick={() => setNewListA(newListArray.concat([0]))} />
                            {newListArray.length > 0 ?
                                <ButtonBP icon="remove" intent="secondary" text={trn.FORM_DOCUMENT_BTNS[3]} style={{ float: 'right' }}
                                    onClick={() => { var newA = newListArray; newA.pop(); setNewListA(newA.concat()) }} />
                                : ''}

                        </Col>
                    </Row>
                </Grid>
            </>}

        </>

    }

    const COMPONENT_SELECT_NEW_LIST = () => {
        return <>
            <Row style={{ width: '100%' }} className="py-1">
                <Col xl={20} lg={18} md={16} sm={14} xs={12}>
                    <div class="bp4-input-group">
                        <span class={"bp4-icon bp4-icon-add-to-artifact"}></span>
                        <select defaultValue={newList} onChange={(e) => setNewList(e.target.value)}
                            className={'bp4-input'}
                        >
                            {LISTS.map(option => <option value={option.id}>{option.name}</option>)}
                            <option value={0}>{trn_dlt.new}</option>
                        </select>
                        <span class={"bp4-icon bp4-icon-chevron-down"}></span>
                    </div>
                </Col>
                <Col xl={4} lg={6} md={8} sm={10} xs={12}>
                    <ButtonBP icon="add" intent="success" text={trn.FORM_DOCUMENT_BTNS[6]} style={{ float: 'right' }}
                        onClick={() => addList()} />
                </Col>
            </Row>
        </>
    }
    // *************************** DATA TABLE  **************************** //

    // ******************************** APIS ****************************** //
    function loadData() {
        SERVICE_SUBMIT.get(currentItem.id)
            .then(response => {
                setData(response.data);
                setLists(response.data.sub_lists);
                setLoad(1)
            })
            .catch(e => {
                console.log(e);
                setLoad(-1)
            });
    }

    function addList() {
        var formData = new FormData();
        formData.set('submitId', currentItem.id);

        let pages = document.getElementsByName("submit_form_newListPages");
        if (pages.length == 0) return ALERT_EMPTY_LIST(lang);

        let listTitle = document.getElementById('submit_form_newListTitle');
        let names = document.getElementsByName("submit_form_newListName");
        let codes = document.getElementsByName("submit_form_newListCode");
        let sws = document.getElementsByName("submit_form_newListSw");

        let list_code = [];
        let list_name = [];
        let list_review = [];
        let list_pages = [];

        formData.set('list_title', listTitle.value ? listTitle.value : listTitle.innerText);

        for (var i = 0; i < pages.length; i++) {
            list_code.push(codes[i].value ? codes[i].value : codes[i].innerText);
            list_name.push(names[i].value ? names[i].value : names[i].innerText);
            list_review.push(sws[i].checked ? 'SI' : 'NO');
            list_pages.push(pages[i].value);
        }
        formData.set('list_code', list_code.join(','));
        formData.set('list_name', list_name.join(';'));
        formData.set('list_review', list_review.join(','));
        formData.set('list_pages', list_pages.join(','));

        ALERT_WAIT(lang);
        SERVICE_SUBMIT.create_list(formData)
            .then(response => {
                if (response.data === 'OK') {
                    ALERT_SUCCESS(lang);
                    setLoad(0)
                }
                else ALERT_ERROR(lang);
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang);
            });
    }

    function updateList(id) {
        var formData = new FormData();

        let pages = document.getElementsByName("submit_form_newListPages_edit");
        if (pages.length == 0) return ALERT_EMPTY_LIST(lang);

        let listTitle = document.getElementById('submit_form_newListTitle_edit');
        let names = document.getElementsByName("submit_form_newListName_edit");
        let codes = document.getElementsByName("submit_form_newListCode_edit");
        let sws = document.getElementsByName("submit_form_newListSw_edit");

        let list_code = [];
        let list_name = [];
        let list_review = [];
        let list_pages = [];

        formData.set('list_title', listTitle.value ? listTitle.value : listTitle.innerText);

        for (var i = 0; i < pages.length; i++) {
            list_code.push(codes[i].value ? codes[i].value : codes[i].innerText);
            list_name.push(names[i].value ? names[i].value : names[i].innerText);
            list_review.push(sws[i].checked ? 'SI' : 'NO');
            list_pages.push(pages[i].value);
        }
        formData.set('list_code', list_code.join(','));
        formData.set('list_name', list_name.join(';'));
        formData.set('list_review', list_review.join(','));
        formData.set('list_pages', list_pages.join(','));

        ALERT_WAIT(lang);
        SERVICE_SUBMIT.update_list(id, formData)
            .then(response => {
                if (response.data === 'OK') {
                    ALERT_SUCCESS(lang);
                    setLoad(0);
                    setEditList(false);
                    setEditListA([]);
                }
                else ALERT_ERROR(lang);
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang);
            });
    }

    function deleteList(id) {
        toaster.remove()
        ALERT_WAIT(lang);

        SERVICE_SUBMIT.delete_list(id)
            .then(response => {
                if (response.data === 'OK') {
                    ALERT_SUCCESS(lang)
                    setLoad(0);
                    setEditList(false);
                    setEditListA([]);
                } else ALERT_ERROR(lang)
            })
            .catch(e => {
                console.log(e);
                ALERT_ERROR(lang)
            })
    }

    return (
        <>
            <Divider>{trn.categories[1]}  <BTN_HELP
                title={trn.DOCUMENT_LIST_POP[0]}
                text={trn.DOCUMENT_LIST_POP[1]}
                page={trn.DOCUMENT_LIST_INFO} focus="doc_list" /></Divider>
            {COMPONENT_LISTS()}
            <div className='py-1'>
                <PanelGroup accordion bordered className='py-0 mx-1 border-success'>
                    <Panel header={<h6><Icon icon={'add'} intent={'success'} size="18" /> {trn.FORM_DOCUMENT_BTNS[5]}</h6>}>
                        {COMPONENT_SELECT_NEW_LIST()}
                        {COMPONENT_NEW_LIST(newList)}
                    </Panel>
                </PanelGroup>

            </div>

        </>
    );
}