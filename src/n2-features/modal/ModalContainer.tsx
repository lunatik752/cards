import {Modal} from "antd";
import Input from "../../n1-main/m1-components/common/Input/Input";
import React, {ChangeEvent, useCallback, useState} from "react";
import {useDispatch} from "react-redux";

type ModalContainerPropsType = {
    visible: boolean
    titleModal: string
    setVisible: (visible: boolean) => void
    handleOkCallback: (title: string, id?: string)  => void
    id?: string
}

export const ModalContainer = React.memo((props:ModalContainerPropsType ) => {
    const [title, setTitle] = useState('')

    const setTitleCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value),
        [setTitle]);

    const dispatch = useDispatch();


    const handleOk = () => {
        dispatch(props.handleOkCallback(title, props.id))
        props.setVisible(false);
        setTitle('')
    }

    const handleCancel = () => {
        props.setVisible(false);
        setTitle('')
    };

    return (
        <Modal
            title={props.titleModal}
            visible={props.visible}
            onOk={handleOk}
            // confirmLoading={confirmLoading}
            onCancel={handleCancel}>
            <Input value={title}
                   onChange={setTitleCallback}/>
        </Modal>
    )
})
