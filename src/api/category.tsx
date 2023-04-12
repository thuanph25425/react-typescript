import { ICategory } from "../types/category";
import instance from "./instance";



const getAllCategory = () => {
    return instance.get('/Categories')
}
const getOneCategory = (id: number) => {
    return instance.get('/Categories/' + id)
}
const addCategory = (Category: ICategory) => {
    return instance.post('/Categories', Category)
}
const deleteCategory = (id: number) => {
    return instance.delete(`/Categories/${id}`)
}
const updateCategory = (Category: ICategory) => {
    return instance.put('/Categories/' + Category.id, Category)
}

export { getAllCategory, getOneCategory, addCategory, deleteCategory, updateCategory }