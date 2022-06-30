import React, { useContext, useState } from 'react';
import { FlexboxGrid, Uploader } from 'rsuite';
import { UtilContext } from '../contextProviders/util.provider';
import { ALERT_NOUPLOAD } from '../utils/notifications.vars';
import ButtonWhisper from './btnWhisper.component';
import VIEWER from './viewer.component';

export default function UPLOADER(props) {
    const utilities = useContext(UtilContext);
    const trn = utilities.getTranslation('formComponent');
    const theme = utilities.theme;
    const files = utilities.files;

    const limitItems = props.limit ?? 1;
    const limitSize = props.size ?? 5242880;
    var [currentFiles, setFiles] = useState(props.fileList || []);

    function onLoad(newFiles) {
        let _nLimitSize = getSize(newFiles);
        if (_nLimitSize < limitSize) {
            setFiles(newFiles);
            utilities.setFiles(newFiles);
        }
        if (_nLimitSize > limitSize) ALERT_NOUPLOAD(utilities.lang);
        return _nLimitSize < limitSize
    }
    function onRemove(file) {
        let newFiles = currentFiles.filter(_file => _file.fileKey != file.fileKey);
        setFiles(newFiles);
        utilities.setFiles(newFiles);
    }

    function getSize(files) {
        let size = 0;
        if (files.length) files.map(file => { size += Number(file.blobFile ? file.blobFile.size : 0); });
        return size
    }

    function canUpload(files) {
        return props.disabled || currentFiles.length >= limitItems || getSize(files) > limitSize
    }

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    return (
        <>
            <Uploader
                id={props.id} name={props.name} placeholder={props.placeholder} value={props.value} defaultValue={props.dv} readOnly={props.readOnly} required={props.req} ref={props.ref}
                accept={props.accept ?? "image/png, image/jpeg, image/jpg, application/pdf"}
                draggable plaintext={props.fileList ? true : false}
                autoUpload={false}
                shouldQueueUpdate={(files, newFile) => onLoad(newFile)}
                onRemove={(file) => onRemove(file)}
                maxPreviewFileSize={limitSize}
                disabled={canUpload(currentFiles)}
                fileList={currentFiles}
                multiple={limitItems > 1 ? true : false}
                renderFileInfo={(file, fileElement) => {
                    if (props.fileList) return (props.fileList.map(_file => {
                        return <FlexboxGrid justify="end">
                            <FlexboxGrid.Item colspan={24}>
                                <div style={{ wordBreak: 'break-all' }}>
                                    File Name: {_file.name}
                                    <ButtonWhisper className="mx-1" whisper={'DELETE DOCUMENT'} icon="trash" intent='danger' float='right' onClick={() => props.onClick(setFiles)} />
                                    <VIEWER className="mx-1"  float='right' filename={_file.name} path={_file.path} />
                                </div>
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                    })
                    )
                    else return <FlexboxGrid justify="end">
                        <FlexboxGrid.Item colspan={24}>File Name: {file.name}</FlexboxGrid.Item>
                    </FlexboxGrid>
                }}
            >
                <div style={{ paddingTop: '75px', paddingBottom: '75px', borderColor: canUpload(currentFiles) ? 'crimson' : 'dodgerblue', backgroundColor: theme == 'dark' ? '#2d2d2d' : '' }}>
                    <div>{trn.uploader}</div>
                    <div>{trn.limitFile}: {currentFiles.length} / {limitItems}</div>
                    <duv>{trn.limiSize}: {Number(getSize(currentFiles) / 1048576).toFixed(3)} Mb / {formatNumber(limitSize / 1048576)} Mb</duv>
                </div>
            </Uploader>
        </>
    );
}