import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import {Space, Table} from 'antd';
import 'antd/dist/antd.css';
import Button from "../common/Button/Button";
import {Redirect} from "react-router-dom";
import {SIGN_IN_PATH} from "../Routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-redux/store";
import {addPack, getPacks, PackType} from "../../m2-redux/packsReducer";
import styles from './Packs.module.css'
import Input from "../common/Input/Input";
import {UserDataType} from "../../m3-dal/profile-api";


export const Packs = React.memo(() => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.signIn.isLoggedIn);
    const packs = useSelector<AppRootStateType, Array<PackType>>(state => state.packs.packs)
    const {_id} = useSelector<AppRootStateType, UserDataType>(state => state.profile.userData);
    const [myPacks, setMyPacks] = useState<boolean>(false)
    const dispatch = useDispatch();
    console.log(packs);

    useEffect(() => {
        dispatch(getPacks())
    }, [dispatch])

    const addPackCallback = useCallback(() => {
        dispatch(addPack('new pack'))
    }, [dispatch])

    const setMyPacksCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        (!myPacks)
            ? dispatch(getPacks(_id))
            : dispatch(getPacks())
        setMyPacks(e.currentTarget.checked)
    }, [dispatch, _id, myPacks])


    const columns = [
        {
            title: 'Pack name ',
            dataIndex: 'name',
            key: '_id',
            align: 'center' as const

        },
        {
            title: 'Cards count',
            dataIndex: 'cardsCount',
            key: '_id',
            align: 'center' as const

        },
        {
            title: 'Update date',
            dataIndex: 'updated',
            key: '_id',
            align: 'center' as const

        },
        {
            title: 'Url',
            dataIndex: 'url',
            key: '_id',
            align: 'center' as const

        },
        {
            title: <Button name={'Add pack'} onClick={addPackCallback}/>,
            dataIndex: 'addDeletePack',
            key: '_id',
            render: () => (
                <Space size="middle">
                    <Button name={'Delete pack'}/>
                    <Button name={'Update pack'}/>
                </Space>
            ),
        },
    ];
    const pagination = {
        pageSizeOptions: [
            '5', '10', '20'
        ],
        onChange: () => {
            alert('hay')
        }
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
            <Table dataSource={packs} pagination={pagination} columns={columns} bordered={true} className={styles.table}/>
        </div>
    )
})
