import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import {Space, Table} from 'antd';
import 'antd/dist/antd.css';
import Button from "../common/Button/Button";
import {Redirect} from "react-router-dom";
import {SIGN_IN_PATH} from "../Routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-redux/store";
import {addPack, deletePack, getPacks, PackType, setUserId} from "../../m2-redux/packsReducer";
import styles from './Packs.module.css'
import Input from "../common/Input/Input";
import { UserDataType } from "../../m3-dal/profile-api";


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
        dispatch(setUserId(myPacks ? "" : _id))
        dispatch(getPacks())
        setMyPacks(e.target.checked)
    }, [dispatch, _id, myPacks])

    const deletePackCallback = useCallback((packId: string) => {
        dispatch(deletePack(packId))
    }, [dispatch])


    const columns= [
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
        // {
        //     title: 'Url',
        //     dataIndex: 'Url',
        //     key: '_id',
        //     align: 'center' as const
        //
        // },
        {
            title: <Button name={'Add pack'} onClick={addPackCallback}/>,
            render: (record: PackType) => (
                <Space size="middle">
                    <Button name={'Delete pack'} onClick={() => deletePackCallback(record._id)}/>
                    <Button name={'Update pack'}/>
                </Space>
            ),
        },
    ];
    // const pagination = {
    //     pageSizeOptions: [
    //         '5', '10', '20'
    //     ],
    //     onChange: () => {
    //         alert('1234')
    //     }
    // }

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
                bordered={true}/>
        </div>
    )
})
