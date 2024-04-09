import { useContext, useEffect, useState } from 'react'
import './App.scss'
import { Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdatePage from './components/admin/UpdatePage'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import ShopPage from './components/ShopPage'
import Singupin from './components/Signup';
import LayoutAdmin from './components/admin/LayoutAdmin';
import { TableDemo } from './components/admin/Table';
import ProductDetail from './components/ProductDetail';
import Dashboard from './components/admin/Dashboard';
import AddProductPage from './components/admin/AddProductPage';
import { CategoryAdmin } from './components/admin/CategoryAdmin';
import AddCategory from './components/admin/AddCategory';
import UpdateCategory from './components/admin/UpdateCategory';
import TagsAdmin from './components/admin/TagsAdmin';
import UpdateTags from './components/admin/UpdateTags';
import AddTags from './components/admin/AddTags';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import SizePage from './components/admin/SizePage';
import AddSize from './components/admin/AddSize';
import UpdateSize from './components/admin/UpdateSize';
import AddAttribute from './components/admin/AddAttribute';
import AttributePage from './components/admin/AttributePage';
import UpdateAttribute from './components/admin/UpdateAttribute';
import Singin from './components/Signin';
import Signup from './components/Signup';
import CartPage from './components/CartPage';
import OrderPage from './components/OrderPage';
import { DataTableDemo } from './components/admin/OrderAdminPage';
import OrderDetailAdmin from './components/admin/OrderDetailAdmin';

type Prodduct = {
  _id?: any,
  name: any,
  price: string,
  desc: string,
  image: any,
  imagemain: object,
  category: any,
  tags: any,
  checked: boolean
}


function App() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  // const products = useQuery({
  //   queryKey: ['PRODUCTS_LIST'],
  //   queryFn: async () => {
  //     const { data } = await axios.get(`http://localhost:8080/api/products`);
  //     return data;
  //   }
  // })

  const productslatest = useQuery({
    queryKey: ['PRODUCTS_LIST'],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:8080/api/productslatest`);
      return data;
    }
  })


  const attributes = useQuery({
    queryKey: ['ATTRIBUTE_KEY'],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:8080/api/attribute`);
      return data;
    }
  })

  const addAttribute = useMutation({
    mutationFn: async (item) => {
      const response = await axios.post(`http://localhost:8080/api/attribute`, item);
      return response.data._id;
    }
  })

  const addPro = useMutation({
    mutationFn: async (item) => {
      const { data } = await axios.post(`http://localhost:8080/api/products`, item);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries('PRODUCTS_LISTS');
      toast.success('Thêm sản phẩm thành công');
      navigate(`/admin/products`);
    }
  })

  const updatePro = useMutation({
    mutationFn: async (item: any) => {
      const { data } = await axios.put(`http://localhost:8080/api/products/${item._id}`, item);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries('PRODUCTS_LISTS');
    }
  })

  const removePro = useMutation({
    mutationFn: async (id) => {
      return await axios.delete(`http://localhost:8080/api/products/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('PRODUCTS_LISTS');
    }
  })

  const onHandleAdd = async (product: any) => {
    try {
      const attri: any = {
        color: product.color,
        size: product.size,
        price: product.price,
        pricesale: product.pricesale
      }
      const attriId = await addAttribute.mutateAsync(attri);
      const newProduct = {
        ...product,
        attribute: attriId
      }
      await addPro.mutateAsync(newProduct);
    } catch (error) {
      console.log(error);
      toast.error('Thêm sản phẩm thất bại');
    }
  }

  const onHandleRemove = async (id: any) => {
    const confirm = window.confirm('Bạn chắc chứ?');
    if (confirm) {
      try {
        // console.log(id);
        // const { data } = await axios.delete(`http://localhost:8080/api/products/${id}`);
        // setProducts(products.filter(product => product._id !== data._id));
        // 
        removePro.mutate(id);
        toast.success('Xóa sản phẩm thành công');
      } catch (error) {
        console.log(error);
        toast.error('Xóa sản phẩm thất bại');
      }
    }

  }

  const onHanldeUpdate = async (product: any) => {
    try {
      // const { data } = await axios.put(`http://localhost:8080/api/products/${product._id}`, product);
      // console.log(data);
      // setProducts(products.map(item => item._id == data._id ? data : item));
      // toast.success('Cập nhật sản phẩm thành công');
      updatePro.mutate(product);
      toast.success('Cập nhật sản phẩm thành công');
    } catch (error) {
      console.log(error);
      toast.error('Cập nhật sản phẩm thất bại');
    }
  }


  return (
    <>
      <Routes>
        <Route path='/admin' element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path='products' element={<TableDemo removeProduct={onHandleRemove} />} />
          <Route path='products/add' element={<AddProductPage onAdd={onHandleAdd} />} />
          <Route path='products/:id/edit' element={<UpdatePage onUpdate={onHanldeUpdate} />} />
          {/* Attribute  */}
          <Route path='products/attribute/:id' element={<AttributePage />} />
          <Route path='products/attribute/add/:id' element={<AddAttribute />} />
          <Route path='products/attribute/:id/edit/:idpro' element={<UpdateAttribute />} />
          <Route path='category' element={<CategoryAdmin />} />
          <Route path='category/add' element={<AddCategory />} />
          <Route path='category/:id/edit' element={<UpdateCategory />} />
          <Route path='tags' element={<TagsAdmin />} />
          <Route path='tags/add' element={<AddTags />} />
          <Route path='tags/edit/:id' element={<UpdateTags />} />
          <Route path='size' element={<SizePage />} />
          <Route path='size/add' element={<AddSize />} />
          <Route path='size/edit/:id' element={<UpdateSize />} />
          <Route path='order' element={<DataTableDemo />} />
          <Route path='order/:id' element={<OrderDetailAdmin />} />
          {/* <Route path='table' element={<TableDemo products={products} />} /> */}
        </Route>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage products={productslatest} />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/product/:id/:idAttri' element={<ProductDetail />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Singin />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/order' element={<OrderPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App