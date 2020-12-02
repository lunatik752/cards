import React, {useCallback, useEffect} from "react";
import {Space, Table} from 'antd';
import 'antd/dist/antd.css';
import Button from "../common/Button/Button";
import styles from './Packs.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-redux/store";
import {addCard, CardType, deleteCard, getCards, updateCard} from "../../m2-redux/cardsReducer";
import {useParams} from "react-router-dom";


export const Cards = React.memo(() => {

    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards)
    const {id} = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCards(id))
    }, [dispatch, id])


    const addCardCallback = useCallback(() => {
        dispatch(addCard(id, 'my question', 'answer' ))
    }, [dispatch, id])

    const deleteCardCallback = useCallback((cardId: string) => {
dispatch(deleteCard(cardId, id))
    }, [dispatch, id])

    const updateCardCallback = useCallback((cardId: string) => {
        dispatch(updateCard(cardId, 'new question', id))
    }, [dispatch, id])


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
            title: <Button name={'Add card'} onClick={addCardCallback}/>,
            render: (record: CardType) => (
                <Space size="middle">
                    <Button name={'Delete card'} onClick={() => deleteCardCallback(record._id)}/>
                    <Button name={'Update card'} onClick={() => updateCardCallback(record._id)}/>
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
