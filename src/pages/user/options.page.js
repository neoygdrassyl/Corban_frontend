import React, { useContext, useState } from 'react';
import { useNavigate, } from 'react-router';
import { Col, Divider, FlexboxGrid, Grid, Panel, Row, Stack } from 'rsuite';
import { UtilContext } from '../../resources/customs/contextProviders/util.provider';

import FLAG_ES from '../../resources/images/flags/ES.png'
import FLAG_US from '../../resources/images/flags/US.png'
import { BsMoonStars, BsSun } from "react-icons/bs";
import CalendarIcon from '@rsuite/icons/Calendar';
import NAVIGATON from '../../resources/customs/components/navigation.component';
import { Icon } from '@blueprintjs/core';

const moment = require('moment');
export default function OPTIONS() {
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('options');
    const theme = utilities.theme;
    const lang = utilities.lang;
    const dateformat = utilities.dateformat;
    //const moment = utilities.moment;
    const fontScale = utilities.fontScale;
    const fontFamily = utilities.fontFamily;

    let navigate = useNavigate();

    return (<>

        <NAVIGATON nav={trn.nav} />

        <FlexboxGrid justify="center">
            <FlexboxGrid.Item className='bg-dark text-center' as={Col} xs={24} sm={22} md={18} lg={16} xl={14} xxl={12}>
                <Grid fluid>
                    <Row>
                        <Col xs={24}>
                            <h3>{trn.title}</h3>
                        </Col>
                    </Row>
                </Grid>
            </FlexboxGrid.Item>

            <FlexboxGrid.Item className='border py-1' as={Col} xs={24} sm={22} md={18} lg={16} xl={14} xxl={12}>
                <Grid fluid>

                    <Row className='py-1 mx-3'><p><label>{trn.text}</label></p></Row>

                    <Divider className='border' />

                    <Row className='py-1 fw-b mx-3'><label>{trn.confs[0]}</label></Row>
                    <Row className='mx-5'>
                        <Stack spacing={8} divider={<Divider vertical />}>
                            <Panel className={'pointer ' + (lang == 'es' ? 'border-warning' : 'border')}
                                onClick={() => utilities.changeLang('es')}>
                                <Stack spacing={6}>
                                    <img src={FLAG_ES} height="20px" />
                                    <label>Español</label>
                                </Stack>
                            </Panel>

                            <Panel className={'pointer ' + (lang == 'en' ? 'border-warning' : 'border')}
                                onClick={() => utilities.changeLang('en')}>
                                <Stack spacing={6}>
                                    <img src={FLAG_US} height="20px" />
                                    <label>English</label>
                                </Stack>
                            </Panel>

                        </Stack>
                    </Row>

                    <Divider className='border' />

                    <Row className='py-1 fw-b mx-3'><label>{trn.confs[1]}</label></Row>
                    <Row className='mx-5'>
                        <Stack spacing={8} divider={<Divider vertical />}>
                            <Panel className={'pointer bg-light ' + (theme == 'light' ? 'border-warning' : 'border')}
                                onClick={() => utilities.changeTheme('light')}>
                                <Stack spacing={6}>
                                    <BsSun style={{ fontSize: '1.6em', color: 'black' }} />
                                    <label style={{ color: 'black' }}>{trn.theme[0]}</label>
                                </Stack>
                            </Panel>

                            <Panel className={'pointer bg-dark ' + (theme == 'dark' ? 'border-warning' : 'border')}
                                onClick={() => utilities.changeTheme('dark')}>
                                <Stack spacing={6}>
                                    <BsMoonStars style={{ fontSize: '1.6em', color: 'whitesmoke' }} />
                                    <label style={{ color: 'whitesmoke' }}>{trn.theme[1]}</label>
                                </Stack>
                            </Panel>

                        </Stack>
                    </Row>

                    <Divider className='border' />

                    <Row className='py-1 fw-b mx-3'><label>{trn.confs[2]}</label></Row>
                    <Row className='mx-5'>
                        <Stack spacing={8} divider={<Divider vertical />} wrap>
                            <Panel className={'pointer ' + (dateformat == 'YYYY-MM-DD' ? 'border-warning' : 'border')}
                                onClick={() => utilities.changeDateFormat('YYYY-MM-DD')}>
                                <Stack spacing={6}>
                                    <CalendarIcon style={{ fontSize: '1.6em' }} />
                                    <label>{trn.df[1]} <br></br>YYYY-MM-DD</label>
                                </Stack>
                            </Panel>

                            <Panel className={'pointer ' + (dateformat == 'DD/MM/YYYY' ? 'border-warning' : 'border')}
                                onClick={() => utilities.changeDateFormat('DD/MM/YYYY')}>
                                <Stack spacing={6}>
                                    <CalendarIcon style={{ fontSize: '1.6em', }} />
                                    <label>{trn.df[2]} <br />DD/MM/YYYY</label>
                                </Stack>
                            </Panel>

                            <Panel className={'pointer ' + (dateformat == 'DD/MM/YY' ? 'border-warning' : 'border')}
                                onClick={() => utilities.changeDateFormat('DD/MM/YY')}>
                                <Stack spacing={6}>
                                    <CalendarIcon style={{ fontSize: '1.6em' }} />
                                    <label>{trn.df[3]} <br></br>DD/MM/YY</label>
                                </Stack>
                            </Panel>

                            <Panel className={'pointer ' + (dateformat == 'LL' ? 'border-warning' : 'border')}
                                onClick={() => utilities.changeDateFormat('LL')}>
                                <Stack spacing={6}>
                                    <CalendarIcon style={{ fontSize: '1.6em' }} />
                                    <label>{trn.df[4]} <br />DD MMMM, YYYY</label>
                                </Stack>
                            </Panel>

                            <Panel className={'pointer ' + (dateformat == 'MM/DD/YY' ? 'border-warning' : 'border')}
                                onClick={() => utilities.changeDateFormat('MM/DD/YY')}>
                                <Stack spacing={6}>
                                    <CalendarIcon style={{ fontSize: '1.6em' }} />
                                    <label>{trn.df[5]} <br></br>MM/DD/YY</label>
                                </Stack>
                            </Panel>
                        </Stack>
                    </Row>
                    <Row className='py-2 mx-5'><label>{trn.df[0]}: <label className='fw-b'>{utilities.parseDate(moment())}</label></label></Row>


                    <Divider className='border' />

                    <Row className='py-1 fw-b mx-3'><label>{trn.fontScale[0]}</label></Row>
                    <Row className='mx-5'>
                        <Stack spacing={8} divider={<Divider vertical />} wrap>

                            <Panel className={'pointer ' + (fontScale == '0.75' ? 'border-warning' : 'border')}
                                onClick={() => utilities.changeFontScale(0.75)}>
                                <Stack spacing={6}>
                                    <Icon icon="font" style={{ fontSize: '1.6em' }} />
                                    <label style={{ fontSize: '0.75em' }}>{trn.fontScale[1]} 0.75</label>
                                </Stack>
                            </Panel>

                            <Panel className={'pointer ' + (fontScale == '1' ? 'border-warning' : 'border')}
                                onClick={() => utilities.changeFontScale(1)}>
                                <Stack spacing={6}>
                                    <Icon icon="font" style={{ fontSize: '1.6em' }} />
                                    <label style={{ fontSize: '1em' }}>{trn.fontScale[1]} 1</label>
                                </Stack>
                            </Panel>

                            <Panel className={'pointer ' + (fontScale == '1.25' ? 'border-warning' : 'border')}
                                onClick={() => utilities.changeFontScale(1.25)}>
                                <Stack spacing={6}>
                                    <Icon icon="font" style={{ fontSize: '1.6em' }} />
                                    <label style={{ fontSize: '1.25em' }}>{trn.fontScale[1]} 1.25</label>
                                </Stack>
                            </Panel>

                            <Panel className={'pointer ' + (fontScale == '1.5' ? 'border-warning' : 'border')}
                                onClick={() => utilities.changeFontScale(1.5)}>
                                <Stack spacing={6}>
                                    <Icon icon="font" style={{ fontSize: '1.6em' }} />
                                    <label style={{ fontSize: '1.5em' }}>{trn.fontScale[1]} 1.5</label>
                                </Stack>
                            </Panel>

                            <Panel className={'pointer ' + (fontScale == '2' ? 'border-warning' : 'border')}
                                onClick={() => utilities.changeFontScale(2)}>
                                <Stack spacing={6}>
                                    <Icon icon="font" style={{ fontSize: '1.6em' }} />
                                    <label style={{ fontSize: '2em' }}>{trn.fontScale[1]} 2</label>
                                </Stack>
                            </Panel>


                        </Stack>
                    </Row>

                    <Divider className='border' />

                    <Row className='py-1 fw-b mx-3'><label>{trn.fontFamily}</label></Row>
                    <Row className='mx-5'>
                        <Stack spacing={8} divider={<Divider vertical />} wrap>

                        <Panel className={'pointer ' + (fontFamily == 'Helvetica' ? 'border-warning' : 'border')}
                                onClick={() => utilities.changeFontFamily('Helvetica')}>
                                <Stack spacing={6}>
                                    <Icon icon="font" style={{ fontSize: '1.6em' }} />
                                    <label style={{ fontFamily: 'Helvetica' }}>{'Helvetica'}</label>
                                </Stack>
                            </Panel>
                            
                            <Panel className={'pointer ' + (fontFamily == 'Verdana' ? 'border-warning' : 'border')}
                                onClick={() => utilities.changeFontFamily('Verdana')}>
                                <Stack spacing={6}>
                                    <Icon icon="font" style={{ fontSize: '1.6em' }} />
                                    <label style={{ fontFamily: 'Verdana' }}>{'Verdana'}</label>
                                </Stack>
                            </Panel>

                            <Panel className={'pointer ' + (fontFamily == 'Arial' ? 'border-warning' : 'border')}
                                onClick={() => utilities.changeFontFamily('Arial')}>
                                <Stack spacing={6}>
                                    <Icon icon="font" style={{ fontSize: '1.6em' }} />
                                    <label style={{ fontFamily: 'Arial' }}>{'Arial'}</label>
                                </Stack>
                            </Panel>

                            <Panel className={'pointer ' + (fontFamily == 'Tahoma' ? 'border-warning' : 'border')}
                                onClick={() => utilities.changeFontFamily('Tahoma')}>
                                <Stack spacing={6}>
                                    <Icon icon="font" style={{ fontSize: '1.6em' }} />
                                    <label style={{ fontFamily: 'Tahoma' }}>{'Tahoma'}</label>
                                </Stack>
                            </Panel>

                            <Panel className={'pointer ' + (fontFamily == 'Serif' ? 'border-warning' : 'border')}
                                onClick={() => utilities.changeFontFamily('Serif')}>
                                <Stack spacing={6}>
                                    <Icon icon="font" style={{ fontSize: '1.6em' }} />
                                    <label style={{ fontFamily: 'Serif' }}>{'Serif'}</label>
                                </Stack>
                            </Panel>

                        </Stack>
                    </Row>

                    <Divider className='border' />

                    <Row className='py-2 mx-5'><label>{trn.df[0]}: <label>{trn.pangram}</label></label></Row>

                </Grid>
            </FlexboxGrid.Item>
        </FlexboxGrid>

    </>);
}