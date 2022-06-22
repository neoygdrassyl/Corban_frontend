import React, { useContext } from 'react';
import { FlexboxGrid } from 'rsuite';
import packageInfo from '../../../../package.json'
import { UtilContext } from '../contextProviders/util.provider';

function FooterComponent() {
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('footer');

    return (
        <div className="bg-dark text-center" >
            <FlexboxGrid>
                <FlexboxGrid.Item colspan={24}>

                <h4 className="fw-b py-5">{trn.title}</h4>

                </FlexboxGrid.Item>
            </FlexboxGrid>
            <FlexboxGrid>
                <FlexboxGrid.Item colspan={12}>
                    <p className="fw-b">{trn.contact}</p>
                    <p>{trn.name_1}</p>
                    <p>{trn.name_2}</p>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={12}>
                <p className="fw-b">{trn.about}</p><br/>
                <p>{trn.about_text}</p>

                </FlexboxGrid.Item>
            </FlexboxGrid>
            <FlexboxGrid>
                <FlexboxGrid.Item colspan={8}></FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={8}>{trn.copyright} <a href="https://www.devnatriana.com/" target="_blank">Nestor Triana </a>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={8}>
                    <div className="text-right m-1 text-secondary">
                        Version {packageInfo.version}
                    </div>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </div>
    );

}

export default FooterComponent;
