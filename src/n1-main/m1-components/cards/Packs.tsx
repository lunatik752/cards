import React from "react";
import { Table, Space } from 'antd';
import 'antd/dist/antd.css';
import Button from "../common/Button/Button";

export const Packs = React.memo(() => {
    const dataSource = [
        {
            key: '1',
            name: 'new pack',
            cardsCount: 0,
            updateDate: '------',

        },
    ];
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
            dataIndex: 'updateDate',
            key: 'updateDate',
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
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
})
