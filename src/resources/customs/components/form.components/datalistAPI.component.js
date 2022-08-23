import React, { useContext, useState } from 'react';
import { UtilContext } from '../../contextProviders/util.provider';

// COMPONENTS
import { AutoComplete, InputGroup, Loader } from 'rsuite';
import WarningRoundIcon from '@rsuite/icons/WarningRound';
// ICONS
import { ALERT_NO_PERMIT } from '../../utils/notifications.vars';

export default function DATALIST_API(props) {
    const { api, onSelect, filterBy, model, icon, text, ph,dv, value, disabled } = props;
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
                if (response.data == 'NO PERMIT') ALERT_NO_PERMIT(lang)
                else {
                    let searchData = response.data.map((data, i) => {
                        return {
                            value: model.value(data),
                            label: model.label(data),
                            id: model.id(data),
                            i: i,
                            data: data,
                        }
                    })
                    setData(searchData);
                    if(searchData.length < entries || entries == 0 ) setEntries(searchData.length);
                }
            }).catch(e => { setLoad(3); console.log(e)}).finally(() => setLoad(1));
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
                    let filterItem = {};
                    if (data.length > 1) {
                        filterItem = data[list.i];
                        setData([filterItem]);
                        setEntries(data.length);
                    }else{
                        filterItem = data[0];
                        setEntries(1);
                    }
                    
                    onSelect(filterItem);
                }}
                    filterBy={filterBy}
                    placeholder={ph}
                    defaultValue={dv}
                    value={value}
                    disabled={disabled}
                    />
                <InputGroup.Addon>
                    {load == 3 ? <div className='text-danger'><WarningRoundIcon /> {trn.error}</div> : ''}
                    {load == 2 ? <Loader content={trn.loading +"..."} /> : ''}
                    {load == 1 ? `${trn.found}: ${entries} ${trn.entry}` : ''}
                </InputGroup.Addon>
            </InputGroup>
        </>
    );
}
