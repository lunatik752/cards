import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import {Modal, Space, Table} from 'antd';
import 'antd/dist/antd.css';
import Button from "../common/Button/Button";
import {NavLink, Redirect} from "react-router-dom";
import {SIGN_IN_PATH} from "../Routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-redux/store";
import {
    addPack,
    deletePack,
    getPacks,
    PacksStateType,
    PackType,
    setCurrentPage,
    setPageSize,
    setUserId,
    updatePack
} from "../../m2-redux/packsReducer";
import styles from './Packs.module.css'
import Input from "../common/Input/Input";
import {UserDataType} from "../../m3-dal/profile-api";
import {ExclamationCircleOutlined} from "@ant-design/icons";


export const Packs = React.memo(() => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.signIn.isLoggedIn);
    const {
        packs,
        cardPacksTotalCount,
        currentPage,
        pageSize
    } = useSelector<AppRootStateType, PacksStateType>(state => state.packs)
    const {_id} = useSelector<AppRootStateType, UserDataType>(state => state.profile.userData);

// state for checkbox my pack
    const [myPacks, setMyPacks] = useState<boolean>(false)

// state for modal window
    const [visibleAddPack, setVisibleAddPack] = useState(false);
    const [visibleUpdatePack, setVisibleUpdatePack] = useState(false);

    // const [confirmLoading, setConfirmLoading] = useState(false);
    const [title, setTitle] = useState('')
    const [packId, setPackId] = useState('')

    const dispatch = useDispatch();

    const {confirm} = Modal;


    useEffect(() => {
        dispatch(getPacks())
    }, [dispatch])

    const setTitleCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value),
        [setTitle]);

    const addPackCallback = useCallback(() => {
        setVisibleAddPack(true);
    }, [])

    const updatePackCallback = useCallback((packId: string, title: string) => {
        setVisibleUpdatePack(true);
        setTitle(title)
        setPackId(packId)
    }, [])

    const handleAddOk = () => {
        dispatch(addPack(title))
        setVisibleAddPack(false);
        setTitle('')
    }

    const handleAddPackCancel = () => {
        setVisibleAddPack(false);
        setTitle('')
    };

    const handleUpdateOk = () => {
        dispatch(updatePack( packId, title))
        setVisibleUpdatePack(false);
        setTitle('')
    }

    const handleUpdatePackCancel = () => {
        setVisibleUpdatePack(false);
        setTitle('')
    };

    const setMyPacksCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setUserId(myPacks ? "" : _id))
        if (currentPage > 1) {
            dispatch(setCurrentPage(1))
        }
        dispatch(getPacks())
        setMyPacks(e.target.checked)
    }, [dispatch, _id, myPacks, currentPage])


    const deletePackCallback = useCallback((packId: string) => {
        dispatch(deletePack(packId))
    }, [dispatch])


    const setCurrentPageAndPageSizeCallback = useCallback((currentPage: number, pageSize?: number) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(setPageSize(pageSize))
        dispatch(getPacks())
    }, [dispatch])


    const columns = [
        {
            title: 'Pack name ',
            dataIndex: 'name',
            align: 'center' as const

        },
        {
            title: 'Cards count',
            dataIndex: 'cardsCount',
            align: 'center' as const

        },
        {
            title: 'Update date',
            dataIndex: 'updated',
            align: 'center' as const

        },
        {
            title: <Button name={'Add pack'} onClick={addPackCallback}/>,
            render: (record: PackType) => (
                <Space size="middle">
                    <Button name={'Delete pack'} onClick={() => showDeleteConfirm(record._id)}/>
                    <Button name={'Update pack'} onClick={() => updatePackCallback(record._id, record.name)}/>
                    <NavLink to={`/cards/${record._id}`}>Cards</NavLink>
                </Space>
            ),
        },
    ];
    const pagination = {
        total: cardPacksTotalCount,
        current: currentPage,
        pageSize: pageSize,
        pageSizeOptions: [
            '5', '10', '20'
        ],
        onChange: (page: number, pageSize?: number) => {
            setCurrentPageAndPageSizeCallback(page, pageSize)
        },
    }

    const showDeleteConfirm = (packId: string) => {
        confirm({
            title: 'Are you sure delete this pack?',
            icon: <ExclamationCircleOutlined/>,
            content: '',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deletePackCallback(packId)
            },
        });
    }

    if (!isLoggedIn) {
        return <Redirect to={SIGN_IN_PATH}/>
    }

    return (
        <div className={styles.container}>
            <div className={styles.checkBoxContainer}>
                <Input
                    type='checkbox'
                    name='myPacks'
                    checked={myPacks}
                    onChange={setMyPacksCallback}
                />
                <label> - my packs</label>
            </div>
            <Table
                rowKey={'_id'}
                dataSource={packs}
                columns={columns}
                bordered={true}
                pagination={pagination}
            />
            <Modal
                title='Enter title of pack'
                visible={visibleAddPack}
                onOk={handleAddOk}
                // confirmLoading={confirmLoading}
                onCancel={handleAddPackCancel}>
                <Input value={title}
                       onChange={setTitleCallback}/>
            </Modal>
            <Modal
                title='Enter new title of pack'
                visible={visibleUpdatePack}
                onOk={handleUpdateOk}
                // confirmLoading={confirmLoading}
                onCancel={handleUpdatePackCancel}>
                <Input value={title}
                       onChange={setTitleCallback}/>
            </Modal>
        </div>
    )
})


