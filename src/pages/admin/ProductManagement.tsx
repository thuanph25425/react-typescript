import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProduct } from '../../types/product';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

interface IPorps {
    products: IProduct[],
    onRemove: (id: number) => void
}
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}
const ProductManagementPage = (props: IPorps) => {
    const navigate = useNavigate()

    const removeProduct = (id: number) => {
        props.onRemove(id)
    }
    const updateProduct = (id: number) => {
        navigate(`/admin/products/${id}/update`)
    }

    const data = props.products.map(item => {
        return {
            key: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            description: item.description
        }
    })
    // const data: DataType[] = [
    //     {
    //         key: '1',
    //         name: 'John Brown',
    //         age: 32,
    //         address: 'New York No. 1 Lake Park',
    //         tags: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         age: 42,
    //         address: 'London No. 1 Lake Park',
    //         tags: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         name: 'Joe Black',
    //         age: 32,
    //         address: 'Sydney No. 1 Lake Park',
    //         tags: ['cool', 'teacher'],
    //     },
    // ];

    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Product image',
            dataIndex: 'image',
            key: 'image',
            render: (text) => <img src={text} width={100} />,
        },
        {
            title: 'Product description',
            dataIndex: 'description',
            key: 'description',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                // console.log(record.key)

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record.key)}>Remove</Button>
                    <Button type="primary" style={{ backgroundColor: 'blue' }} onClick={() => updateProduct(record.key)}>update</Button>
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

export default ProductManagementPage