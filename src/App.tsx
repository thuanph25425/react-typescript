import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/product'
import AddProductPage from './pages/admin/AddProduct'
import ProductManagementPage from './pages/admin/ProductManagement'
import UpdateProductPage from './pages/admin/UpdateProduct'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import { IProduct } from './types/product'
import { ICategory } from './types/category'
import { addCategory, deleteCategory, getAllCategory, updateCategory } from './api/category'
import CategoryManagementPage from './pages/admin/category/CategoryManagement'
import AddCategoryPage from './pages/admin/category/AddCategory'
import UpdateCategoryPage from './pages/admin/category/UpdateCategory'
import AdminLayout from './pages/admin/layout/layout'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [categoies, setCategories] = useState<ICategory[]>([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data))
    getAllCategory().then(({ data }) => setCategories(data))
  }, [])

  const onHandleRemove = (id: number) => {
    const confirm = window.confirm("Bạn có muốn xóa không")
    if(confirm){
      deleteProduct(id).then(() => setProducts(products.filter((item: IProduct) => item.id !== id)))
    }
  }
  const onHandleRemoveCategory = (id: number) => {
    const confirm = window.confirm("Bạn có muốn xóa không")
    if(confirm){
    deleteCategory(id).then(() => setCategories(categoies.filter((item: ICategory) => item.id !== id)))
    }
  }

  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }

  const onHandleAddCategory = (category: ICategory) => {
    addCategory(category).then(() => getAllCategory().then(({ data }) => setCategories(data)))
  }

  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }

  const onHandleUpdateCategory = (category: ICategory) => {
    updateCategory(category).then(() => getAllCategory().then(({ data }) => setCategories(data)))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
          <Route path='products/:id' element={<ProductDetailPage products={products} />} />
        </Route>
        <Route path='/admin' element={<AdminLayout/>}>
          <Route path='products'>
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
          </Route>
          <Route path='categories'>
            <Route index element={<CategoryManagementPage categories={categoies} onRemoveCate={onHandleRemoveCategory} />} />
            <Route path='add' element={<AddCategoryPage onAddCate={onHandleAddCategory} />} />
            <Route path=':id/update' element={<UpdateCategoryPage onUpdate={onHandleUpdateCategory} categories={categoies} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
