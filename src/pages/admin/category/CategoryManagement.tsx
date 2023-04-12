import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../../types/category';
import { Link } from "react-router-dom";

interface IPorps {
    categories: ICategory[],
    onRemoveCate: (id:number) => void
}
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}
const CategoryManagementPage = (props:IPorps) => {
    const navigate = useNavigate()

    const removeCategory = (id:number) => {
        props.onRemoveCate(id)
    }
    const updateCategory = (id:number) => {
        navigate(`/admin/categories/${id}/update`)
    }

    const data = props.categories.map(item => {
        return {
            key: item.id,
            name: item.name
        }
    })

    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                // console.log(record.key)

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeCategory(record.key)}>Remove</Button>
                    <Button type="primary" style={{ backgroundColor: 'blue' }} onClick={() => updateCategory(record.key)}>update</Button>
                </Space>
            ),
        },
    ];

    return (
        <>
            <div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'space-between', height: '50px', alignItems: 'center' }}>
                <div>
                    <Link to={"/"} style={{ color: 'white', fontSize: 18, margin: '0 20px' }}>Home</Link>
                    <Link to={"/products"} style={{ color: 'white', fontSize: 18 }}>product</Link>
                </div>
                <div>
                    <Link to={"/admin/products"} style={{ color: 'white', fontSize: 18, margin: '0 20px' }}>Admin</Link>
                </div>
            </div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 4, showQuickJumper: true }} />
        </>
    )
}

export default CategoryManagementPage