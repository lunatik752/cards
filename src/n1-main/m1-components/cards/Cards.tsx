import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import {Space, Table} from 'antd';
import 'antd/dist/antd.css';
import Button from "../common/Button/Button";
import {Redirect} from "react-router-dom";
import {SIGN_IN_PATH} from "../Routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-redux/store";
import {
    addPack,
    deletePack,
    getPacks,
    PacksStateType,
    PackType, setCurrentPage, setPageSize,
    setUserId,
    updatePack
} from "../../m2-redux/packsReducer";
import styles from './Packs.module.css'
import Input from "../common/Input/Input";
import {UserDataType} from "../../m3-dal/profile-api";


export const Cards = React.memo(() => {

const cards: any = []

    useEffect(() => {

    }, [])


    const addCardCallback = useEffect(() => {
        console.log()
    })

    const deleteCardCallback = useEffect(() => {
        console.log()
    })

    const updateCardPackCallback = useEffect(() => {
        console.log()
    })
    const setCurrentPageAndPageSizeCallback = useCallback((currentPage: number, pageSize?: number) => {

    }, [])
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
        // {
        //     title: 'Url',
        //     dataIndex: 'Url',
        //     key: '_id',
        //     align: 'center' as const
        //
        // },
        {
            title: <Button name={'Add card'} onClick={() => addCardCallback}/>,
            render: (record: PackType) => (
                <Space size="middle">
                    <Button name={'Delete pack'} onClick={() => deleteCardCallback}/>
                    <Button name={'Update pack'} onClick={() => updateCardPackCallback}/>
                </Space>
            ),
        },
    ];
    const pagination = {
        total: 1,
        current: 1,
        pageSize: 1,
        pageSizeOptions: [
            '5', '10', '20'
        ],
        onChange: (page: number, pageSize?: number) => {
            setCurrentPageAndPageSizeCallback(page, pageSize)
        },
    }


    return (
        <div className={styles.container}>
            <Table
                rowKey={'_id'}
                dataSource={cards}
                columns={columns}
                bordered={true}
                pagination={pagination}
            />
        </div>
    )
})
