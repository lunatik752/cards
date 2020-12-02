import React, {useCallback, useEffect} from "react";
import {Space, Table} from 'antd';
import 'antd/dist/antd.css';
import Button from "../common/Button/Button";
import styles from './Packs.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-redux/store";
import {CardType, getCards} from "../../m2-redux/cardsReducer";
import {useParams} from "react-router-dom";


export const Cards = React.memo(() => {

    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards)
    const {id} = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCards(id))
    }, [dispatch, id])


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
            title: 'Question',
            dataIndex: 'question',
            align: 'center' as const

        },
        {
            title: 'Answer',
            dataIndex: 'answer',
            align: 'center' as const

        },
        {
            title: 'Update date',
            dataIndex: 'updated',
            align: 'center' as const

        },
        {
            title: <Button name={'Add card'} onClick={() => addCardCallback}/>,
            render: (record: CardType) => (
                <Space size="middle">
                    <Button name={'Delete card'} onClick={() => deleteCardCallback}/>
                    <Button name={'Update card'} onClick={() => updateCardPackCallback}/>
                </Space>
            ),
        },
    ];


    return (
        <div className={styles.container}>
            <Table
                rowKey={'_id'}
                dataSource={cards}
                columns={columns}
                bordered={true}
                pagination={false}
            />
        </div>
    )
})