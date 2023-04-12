import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../../types/product'
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
interface IFormInput {
    id: number,
    name: string,
    price: number,
    image: string
    description: string
}
interface IProps {
    onAdd: (product: IProduct) => void
}
const AddProductPage = (props: IProps) => {
    const navigate = useNavigate()

    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate('/admin/products')
        alert("Add thành công")
    };

    // const onFinishFailed = (errorInfo: any) => {
    //     console.log('Failed:', errorInfo);
    // };
    return (
        <div>
            
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 800, margin: '0 auto' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <h1 style={{margin: '20px', display: 'flex', justifyContent: 'center'}}>Add product</h1>
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your image!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Add New Product
                    </Button>
                </Form.Item>
            </Form>


            {/* <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register("name")} />
                <input type="number" {...register("price")} />
                <button type="submit">Add New Product</button>
            </form> */}
        </div>
    )
}

export default AddProductPage