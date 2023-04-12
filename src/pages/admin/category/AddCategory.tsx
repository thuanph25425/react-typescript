import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../../types/category';
interface IFormInput {
    id: number,
    name: string,
    price: number,
    image: string
    description: string
}
interface IProps {
    onAddCate: (category: ICategory) => void
}
const AddCategoryPage = (props: IProps) => {
    const navigate = useNavigate()

    const onFinish = (values: any) => {
        props.onAddCate(values);
        navigate('/admin/categories')
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
                <h1 style={{margin: '20px', display: 'flex', justifyContent: 'center'}}>Add category</h1>
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
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

export default AddCategoryPage