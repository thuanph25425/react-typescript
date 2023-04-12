import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from "react-router-dom";
import logo from '../pages/image/FPT_Polytechnic.png'


const { Header, Content, Footer } = Layout;

const HomePage = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className="layout">
            <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
                <img src={logo} alt="" style={{ width: 300 }} />
            </div>
            <div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'space-between',height: '50px', alignItems: 'center' }}>
                <div>
                    <Link to={"/"} style={{color: 'white', fontSize: 18, margin: '0 20px'}}>Home</Link>
                    <Link to={"/products"} style={{color: 'white', fontSize: 18}}>product</Link>
                </div>
                <div>
                    <Link to={"/admin/products"} style={{color: 'white', fontSize: 18, margin: '0 20px'}}>Admin</Link>
                </div>
            </div>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><Link to={"/"}>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to={"/products"}>product</Link></Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content" style={{ background: colorBgContainer }}>
                    <div>HomePage</div>
                </div>
            </Content>

        </Layout>


    )
}

export default HomePage