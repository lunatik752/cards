import React, {useEffect} from "react";
import {Space, Table} from 'antd';
import 'antd/dist/antd.css';
import Button from "../common/Button/Button";
import {Redirect} from "react-router-dom";
import {SIGN_IN_PATH} from "../Routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-redux/store";
import {getPacks, PackType} from "../../m2-redux/packsReducer";

export const Packs = React.memo(() => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.signIn.isLoggedIn);
    const packs = useSelector<AppRootStateType, Array<PackType>>(state => state.packs.packs)
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(getPacks())
        }, [dispatch])

  console.log(packs)


    const columns = [
        {
            title: 'Pack name ',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Cards count',
            dataIndex: 'cardsCount',
            key: 'cardsCount',
        },
        {
            title: 'Update date',
            dataIndex: 'updated',
            key: 'updated',
        },
        {
            title: 'Url',
            dataIndex: 'url',
            key: 'url',
        },
        {
            title: <Button name={'Add pack'}/>,
            dataIndex: 'addDeletePack',
            key: 'addDeletePack',
            url: '',
            render: () => (
                <Space size="middle">
                    <Button name={'Delete pack'}/>
                </Space>
            ),
        },
    ];

    if (!isLoggedIn) {
        return <Redirect to={SIGN_IN_PATH}/>
    }

    return (
        <div>
            <Table dataSource={packs} columns={columns} />
        </div>
    )
})
