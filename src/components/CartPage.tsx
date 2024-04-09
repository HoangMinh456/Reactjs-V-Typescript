import { useLocalStorage } from '@/hooks/useStorage'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const CartPage = () => {
    const [user] = useLocalStorage('user', {});
    const userId = user?.user?._id;

    const queryClient = useQueryClient();
    const { data, isLoading, isError } = useQuery({
        queryKey: ['CART_KEY', userId],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/cart/${userId}`);
            return data.products;
        }
    })

    const products: any = [];

    const { data: sizes } = useQuery({
        queryKey: ['SIZES_KEY'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/size`);
            return data;
        }
    })

    const sizeName = (idSize: any) => {
        const data = sizes?.find((item: any) => item._id == idSize);
        return data?.name;
    }

    const increaseProducts = useMutation({
        mutationFn: async (item: any) => {
            const { data } = await axios.put(`http://localhost:8080/api/cart/increase`, item);
            return data;
        }, onSuccess: () => {
            queryClient.invalidateQueries(['CART_KEY', userId]);
        }
    })

    const decreaseProducts = useMutation({
        mutationFn: async (item: any) => {
            const { data } = await axios.put(`http://localhost:8080/api/cart/decrease`, item);
            return data;
        }, onSuccess: () => {
            queryClient.invalidateQueries(['CART_KEY', userId]);
        }
    })

    const removeProducts = useMutation({
        mutationFn: async (item: any) => {
            const { data } = await axios.post(`http://localhost:8080/api/cart/remove`, item);
            return data;
        }, onSuccess: () => {
            toast.success('Xóa thành công');
            queryClient.invalidateQueries(['CART_KEY', userId]);
        }
    })

    const increase = (e: any) => {
        const item = {
            userId: userId,
            productItem: e.idPro,
            attributeItem: e.idAttri
        }
        increaseProducts.mutate(item);
    }

    const decrease = (e: any) => {
        const item = {
            userId: userId,
            productItem: e.idPro,
            attributeItem: e.idAttri
        }
        if (e.quantity == 1) {
            const confirm = window.confirm('Sản phẩm sẽ bị xóa! Bạn chắc chứ ?');
            if (confirm) {
                removeProducts.mutate(item);
            }
        } else {
            decreaseProducts.mutate(item);
        }

    }

    const remove = (e: any) => {
        const confirm = window.confirm('Bạn chắc chứ ?');
        const item = {
            userId: userId,
            productItem: e.idPro,
            attributeItem: e.idAttri
        }
        if (confirm) {
            removeProducts.mutate(item);
        }

    }

    let total2 = 0;
    data?.forEach((item: any) => {
        let subTotal = (item.check ? item.pricesale : item.price).replace(/\./g, "") * item.quantity;
        total2 += subTotal;
    });

    data?.map((item: any) => {
        const cart_list = {
            ...item,
            size: sizeName(item.size)
        }
        products.push(cart_list);
    })

    // console.log(products);
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error...</div>
    return (
        <>
            <div className="banner banner--shop">
                <img src="/images/banner1.jpg" />
                <div className="text1">
                    <p>Cart</p>
                </div>
                <div className="text2">
                    <p>Home &gt; <span>Cart</span></p>
                </div>
            </div>
            <section className="cart">
                <div className="container">
                    <div className="cart-left">
                        <table className="cart-left__table">
                            <thead>
                                <tr>
                                    <th />
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {products?.map((item: any, index: number) => (
                                    <tr key={index}>
                                        <td className="table__img">
                                            <img src={item.image} />
                                        </td>
                                        <td className="table__name">
                                            <div>{item.name}</div>
                                            <div className='tw-text-sm'>
                                                <div>
                                                    <span className='tw-text-slate-400 tw-mr-1'>Size</span>{item.size}
                                                </div>
                                                <div className='tw-flex'>
                                                    <span className='tw-text-slate-400 tw-flex'>Color <div className='tw-h-1 tw-w-1 tw-p-2.5 tw-rounded-full tw-ml-1' style={{ backgroundColor: item.color }}></div></span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="table__price">{item.checked ? item.pricesale : item.price}<span>đ</span> </td>
                                        <td className="table__quantity"><div className='tw-cursor-pointer tw-select-none' onClick={() => increase(item)}>+</div><input type="text" value={item.quantity} data-vale={item.quantity} min={1} max={99} readOnly /><div className='tw-cursor-pointer tw-select-none' onClick={() => decrease(item)}>-</div></td>
                                        <td className="table__total">{Intl.NumberFormat("vi-VN").format((item.check ? item.pricesale : item.price).replace(/\./g, "") * item.quantity)}<span>đ</span> </td>
                                        <td className="table__delete tw-cursor-pointer" onClick={() => remove(item)}><img src="/images/icons/Delete.svg" /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="cart-right">
                        <div className="container">
                            <div className="cart-right__title">
                                <p>Cart Totals</p>
                            </div>
                            <div className="cart-right__subtotal">
                                <p>Subtotal</p>
                                <p>{Intl.NumberFormat("vi-VN").format(total2)}<span>đ</span></p>
                            </div>
                            <div className="cart-right__total">
                                <p>Total</p>
                                <p className="cart-right__total-price">{Intl.NumberFormat("vi-VN").format(total2)}<span>đ</span></p>
                            </div>
                            <div className="cart-right__checkout">
                                <Link to={`/order`}><button>Check Out</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CartPage
