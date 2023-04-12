import { useState, useEffect } from "react"
import { IProduct } from "../types/product"
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './style.css'
import { Link } from "react-router-dom";
import { Col, Divider, Row } from 'antd';
import logo from '../pages/image/FPT_Polytechnic.png'
import { useNavigate } from "react-router-dom";

const style: React.CSSProperties = { padding: '30px 100px', width: 300, border: 'black solid 2px', display: 'flex', justifyItems: 'center' };

const { Header, Content, Footer } = Layout;

interface IProps {
    products: IProduct[],
    onRemove: (id: number) => void
}



const ProductsPage = (props: IProps) => {
    const navigate = useNavigate()
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [data, setData] = useState<IProduct[]>([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    const removeProduct = (id: number) => {
        props.onRemove(id)
        navigate('/products')
    }
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
                    <div className="grid">
                        {
                            data.map((item) => {
                                return (
                                    <div>

                                        <Link to={"/products/" + item.id} className="gutter-row">
                                            <div style={style}>
                                                <div key={item.id}>
                                                    <h3 >{item.name}</h3>
                                                    <h3 >{item.price}</h3>
                                                    <img src={item?.image} alt="" style={{ width: 100 }}></img>
                                                    <h3>{item?.description}</h3>
                                                    <button onClick={() => removeProduct(item.id)}>Remove</button>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </Content>

        </Layout>

    )
}

export default ProductsPage