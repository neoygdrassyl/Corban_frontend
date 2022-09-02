import React, { useContext, useState } from 'react';
import { UtilContext } from '../../contextProviders/util.provider';

// COMPONENTS
import { AutoComplete, InputGroup, Loader } from 'rsuite';
import WarningRoundIcon from '@rsuite/icons/WarningRound';
import RemindRoundIcon from '@rsuite/icons/RemindRound';
// ICONS
import { ALERT_NO_PERMIT } from '../../utils/notifications.vars';

export default function DATALIST_API(props) {
    const { api, onSelect, filterBy, model, icon, text, ph, dv, value, disabled } = props;
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('dataListAPI');
    const btn = utilities.getTranslation('btns');
    const lang = utilities.lang;

    var [load, setLoad] = useState(0);
    var [data, setData] = useState([]);
    var [entries, setEntries] = useState(0);

    // *************************** FUNCTIONS **************************** //
    // *************************** JXS ELEMENTS **************************** //
    // ******************************** APIS ****************************** //
    function loadData(value, e) {
        if (e.type == 'click') return;
        setLoad(2);
        if (value.trim() === '') {
            setData([]);
            setLoad(0);
            setEntries(0);
            return;
        }
        api(value.trim())
            .then(response => {
                if (response.data == 'NO PERMIT') return ALERT_NO_PERMIT(lang)
                else {
                    if(response.data == 'NO DATA') return setLoad(4)
                    let searchData;
                    if (Array.isArray(response.data)) searchData = response.data.map((data, i) => {
                        return {
                            value: model.value(data),
                            label: model.label(data),
                            id: model.id(data),
                            i: i,
                            data: data,
                        }
                    })
                    else searchData = [{
                        value: model.value(response.data),
                        label: model.label(response.data),
                        id: model.id(response.data),
                        i: 0,
                        data: response.data,
                    }]

                    setData(searchData);
                    setEntries(searchData.length);
                    setLoad(1)
                }
            }).catch(e => { setLoad(3); console.log(e) })
    }

    return (
        <>
            <div className='p-1'><label >{text || trn.label}</label></div>
            <InputGroup inside>
                {icon ?
                    <InputGroup.Addon>
                        {icon}
                    </InputGroup.Addon> : ''}

                <AutoComplete data={data} onChange={loadData} onSelect={(value, list, e) => {
                    let filterItem = data.find(it => it.id == list.id);
                    setData([filterItem]);
                    setEntries(1);
                    onSelect(filterItem);
                }}
                    filterBy={filterBy}
                    placeholder={ph || trn.search + "..."}
                    defaultValue={dv}
                    value={value}
                    disabled={disabled}
                />
                <InputGroup.Addon>
                    {load == 4 ? <div className='text-warning'><RemindRoundIcon /> {trn.nodata}</div> : ''}
                    {load == 3 ? <div className='text-danger'><WarningRoundIcon /> {trn.error}</div> : ''}
                    {load == 2 ? <Loader content={trn.loading + "..."} /> : ''}
                    {load == 1 ? `${trn.found}: ${entries} ${trn.entry}` : ''}
                </InputGroup.Addon>
            </InputGroup>
        </>
    );
}
