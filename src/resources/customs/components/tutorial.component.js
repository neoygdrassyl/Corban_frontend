import React, { useContext, useEffect, useState } from 'react';
import { FiHelpCircle, FiHash } from 'react-icons/fi'
import { Divider, Drawer, IconButton, Popover, Whisper } from 'rsuite';
import { UtilContext } from '../contextProviders/util.provider';
import { Button as ButtonPB, Drawer as DrawerBP } from "@blueprintjs/core";
import HelpOutlineIcon from '@rsuite/icons/HelpOutline';
import InfoOutlineIcon from '@rsuite/icons/InfoOutline';

// IMAGES

// CVS EXCELL
import cvs_excell_1_en from '../../images/tutorials/csv_excel/tuto_ox_1_en.png'
import cvs_excell_2_en from '../../images/tutorials/csv_excel/tuto_ox_2_en.png'
import cvs_excell_3_en from '../../images/tutorials/csv_excel/tuto_ox_3_en.png'
import cvs_excell_4_en from '../../images/tutorials/csv_excel/tuto_ox_4_en.png'
import cvs_excell_5_en from '../../images/tutorials/csv_excel/tuto_ox_5_en.png'
import cvs_excell_6_en from '../../images/tutorials/csv_excel/tuto_ox_6_en.png'
import cvs_excell_1_es from '../../images/tutorials/csv_excel/tuto_ox_1_es.png'
//import cvs_excell_2_es from '../../images/tutorials/csv_excel/tuto_ox_2_es.png'
import cvs_excell_3_es from '../../images/tutorials/csv_excel/tuto_ox_3_es.png'
import cvs_excell_4_es from '../../images/tutorials/csv_excel/tuto_ox_4_es.png'
import cvs_excell_5_es from '../../images/tutorials/csv_excel/tuto_ox_5_es.png'
//import cvs_excell_6_es from '../../images/tutorials/csv_excel/tuto_ox_6_es.png'

// CVS LIBREOFFICE 
import cvs_lo_en from '../../images/tutorials/cvs_lo/tuto_lo_en.png'
import cvs_lo_es from '../../images/tutorials/cvs_lo/tuto_lo_es.png'
import { Link } from 'react-router-dom';


export default function TUTORIAL(props) {
    const { text, tutorial } = props
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('tutorial');
    const lang = utilities.lang

    const [open, setOpen] = React.useState(false);
    const [tutorialContent, setTutorial] = React.useState(<></>);

    let TUTORIAL_OPEN_CVS_EXCEL = () => {
        let imgs = {
            en: [cvs_excell_1_en, cvs_excell_2_en, cvs_excell_3_en, cvs_excell_4_en, cvs_excell_5_en, cvs_excell_6_en],
            es: [cvs_excell_1_es, cvs_excell_2_en, cvs_excell_3_es, cvs_excell_4_es, cvs_excell_5_es, cvs_excell_6_en],
        }
       return <div className='txt-j'>
       {trn.csv_body}
       <h6>{trn.csv_e_title}</h6>
       <br/>
       <p><label className='fw-b'>1.</label> {trn.csv_e_steps[0]}</p>
       <p><label className='fw-b'>2.</label> {trn.csv_e_steps[1]}</p>
       <p className='txt-c'><img src={imgs[lang][1]}/></p>
       <p><label className='fw-b'>3.</label> {trn.csv_e_steps[2]}</p>
       <p><label className='fw-b'>4.</label> {trn.csv_e_steps[3]}</p>
       <p className='txt-c'><img src={imgs[lang][2]}/></p>
       <p><label className='fw-b'>5.</label> {trn.csv_e_steps[4]}</p>
       <p><label className='fw-b'>{trn.csv_note}: </label> {trn.csv_note_b}</p>
       <p className='txt-c'><img src={imgs[lang][3]}/></p>
       <p><label className='fw-b'>6.</label> {trn.csv_e_steps[5]}</p>
       <p className='txt-c'><img src={imgs[lang][4]}/></p>
       <p><label className='fw-b'>7.</label> {trn.csv_e_steps[6]}</p>
       <p className='txt-c'><img src={imgs[lang][5]}/></p>
       <p>{trn.csv_e_link_b} <a className='fw-b' href={trn.csv_e_link} target="_blank">{trn.csv_e_link_l}</a> </p>
   </div>
    }

    let TUTORIAL_OPEN_CVS_LIBREOFFICE = () => {
        let imgs = {
            en: cvs_lo_en,
            es: cvs_lo_es
        }

        return <div className='txt-j'>
            {trn.csv_body}
            <h6>{trn.csv_lo_title}</h6>
            <br/>
            <p><label className='fw-b'>1.</label> {trn.csv_lo_steps[0]}</p>
            <p><label className='fw-b'>2.</label> {trn.csv_lo_steps[1]}</p>
            <p><label className='fw-b'>3.</label> {trn.csv_lo_steps[2]}</p>
            <p><label className='fw-b'>4.</label> {trn.csv_lo_steps[3]}</p>
            <p><label className='fw-b'>{trn.csv_note}: </label> {trn.csv_note_b}</p>
            <p className='txt-c'><img src={imgs[lang]}/></p>
            <p><label className='fw-b'>5.</label> {trn.csv_lo_steps[4]}</p>
            <p>{trn.csv_lo_link_b} <a className='fw-b' href={trn.csv_lo_link} target="_blank">{trn.csv_lo_link_l}</a> </p>
        </div>
    }

    const drawerHead = <Drawer.Header className={utilities ? utilities.theme : 'light'}>
        <div className='py-1'><InfoOutlineIcon style={{ fontSize: '20px' }} className="text-paranoia" /> <label>{trn.tutorial}</label> <label className='fw-b'>{String(text).toUpperCase() || ''}</label></div>
    </Drawer.Header>

    const drawer = <Drawer open={open} onClose={() => setOpen(false)} size="md" className={utilities ? utilities.theme : 'light'}>
        {drawerHead}
        <Drawer.Body className={utilities ? utilities.theme : 'light'}>
            {tutorialContent}
        </Drawer.Body>
    </Drawer>

    function openTutorial() {
        if (tutorial == 'csv_e') setTutorial(TUTORIAL_OPEN_CVS_EXCEL())
        if (tutorial == 'csv_lo') setTutorial(TUTORIAL_OPEN_CVS_LIBREOFFICE())
        setOpen(true)
    }

    return <>
        <label className='text-muted fw-b pointer under' onClick={() => openTutorial()}>{text || 'Clik here for more information'}</label>

        {drawer}
    </>
}