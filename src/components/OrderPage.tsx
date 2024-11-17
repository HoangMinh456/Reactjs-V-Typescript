import { AppContext } from '@/context/ProductContextProvider';
import { useLocalStorage } from '@/hooks/useStorage';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const OrderPage = () => {
    const { user, userId }: any = useContext(AppContext)
    console.log(user)
    const navigate = useNavigate();
    const { register, handleSubmit, ...rest } = useForm();

    const queryClient = useQueryClient();
    const { data: cart, isLoading, isError } = useQuery({
        queryKey: ['CART_KEY', userId],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/cart/${userId}`);
            return data.products;
        }
    })

    let total2 = 0;
    cart?.forEach((item: any) => {
        let subTotal = (item.check ? item.pricesale : item.price).replace(/\./g, "") * item.quantity;
        total2 += subTotal;
    });

    const createOrder = useMutation({
        mutationFn: async (dataOrder: any) => {
            const { data } = await axios.post(`http://localhost:8080/api/order`, dataOrder);
            return data;
        },
        onSuccess: () => {
            toast.success('Đặt hàng thành công')
        }
    })

    const removeAll = useMutation({
        mutationFn: async (item: { userId: string }) => {
            const { data } = await axios.put(`http://localhost:8080/api/cart/clear`, item);
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries('CART_KEY');
        }
    })

    const onSubmit = (formData: any) => {
        const data = {
            userId: userId,
            items: cart,
            totalPrice: total2,
            customerInfo: { ...formData, payment: "COD" },
        }
        const item = {
            userId: userId
        }
        // console.log(data)
        createOrder.mutate(data);
        removeAll.mutate(item);
        navigate(`/`);

    }

    // console.log(cart);

    window.scrollTo(0, 0);

    return (
        <>
            <div className="banner banner--shop">
                <img src="/images/banner1.jpg" />
                <div className="text1">
                    <p>Check Out</p>
                </div>
                <div className="text2">
                    <p>Home &gt; <span>Check Out</span></p>
                </div>
            </div>
            <section className="checkout">
                <form className="container" onSubmit={handleSubmit(onSubmit)}>
                    <div className="checkout-left">
                        <div className="checkout-left-title">
                            <p>Billing details</p>
                        </div>
                        <div className="checkout-left-name">
                            <div className="checkout-left-name__firstname">
                                <label htmlFor="firtname" >First Name</label>
                                <input type="text" {...register('firstName')} />
                            </div>
                            <div className="checkout-left-name__lastname">
                                <label htmlFor="lastname" >Last Name</label>
                                <input type="text" {...register('lastName')} />
                            </div>
                        </div>
                        {/* <div className="checkout-leff__company">
                            <label htmlFor="company">Company Name (Optional)</label>
                            <input type="text" />
                        </div> */}
                        {/* <div className="checkout-leff__country">
                            <label htmlFor="country">Country / Region</label>
                            <select name="country" id="country">
                                <option value={1} >Sri Lanka</option>
                                <option value={2}>Viet Nam</option>
                            </select>
                        </div> */}
                        <div className="checkout-leff__street">
                            <label htmlFor="street">Street address</label>
                            <input type="text" id="street" {...register('address')} />
                        </div>
                        <div className="checkout-leff__city">
                            <label htmlFor="city">Town / City</label>
                            <input type="text" {...register('city')} />
                        </div>
                        {/* <div className="checkout-leff__province">
                            <label htmlFor="province">Province</label>
                            <select>
                                <option value={1} >Western Province</option>
                                <option value={2}>Other</option>
                            </select>
                        </div> */}
                        {/* <div className="checkout-leff__zipcode">
                            <label htmlFor="zipcode">ZIP code</label>
                            <input type="text" />
                        </div> */}
                        <div className="checkout-leff__phone">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" {...register('phone')} />
                        </div>
                        <div className="checkout-leff__email">
                            <label htmlFor="email">Email address</label>
                            <input type="email" {...register('email')} />
                        </div>
                        <div className="checkout-leff__moreinfo">
                            <label htmlFor="note">Note</label>
                            <input type="text" {...register('note')} />
                        </div>
                    </div>
                    <div className="checkout-right">
                        <div className="checkout-right-total">
                            <div className="checkout-right-total__title">
                                <p>Product</p>
                                <p>Subtotal</p>
                            </div>
                            {cart?.map((item: any, index: number) => (
                                <div key={index} className="checkout-right-total__product">
                                    <div className="checkout-right-total__product__item">
                                        <p className="name">{item.name}</p>
                                        <p className="quantity">x<span>{item.quantity}</span></p>
                                    </div>
                                    <div className="checkout-right-total__product__price">
                                        <p>{Intl.NumberFormat("vi-VN").format((item.check ? item.pricesale : item.price).replace(/\./g, "") * item.quantity)}<span>đ</span></p>
                                    </div>
                                </div>
                            ))}
                            <div className="checkout-right-total__subtotal">
                                <p>Subtotal</p>
                                <div className="checkout-right-total__subtotal__price">
                                    <p>{Intl.NumberFormat("vi-VN").format(total2)}<span>đ</span></p>
                                </div>
                            </div>
                            <div className="checkout-right-total__total">
                                <p>Total</p>
                                <p className="price">{Intl.NumberFormat("vi-VN").format(total2)}<span>đ</span></p>
                            </div>
                            <div className="checkout-right-radio" >
                                <div className="checkout-right-radio__note">
                                    <div className="checkout-right-radio__note__dot" />
                                    <p>
                                        Make your payment directly into our bank account. Please use your Order ID as the
                                        payment reference. Your order will not be shipped until the funds have cleared in
                                        our account.
                                    </p>
                                </div>
                                <div className="checkout-right-radio__bank">
                                    <input type="radio" id="bank" value="BANK" {...register('payment')} />
                                    <label htmlFor="bank">Direct Bank Transfer</label>
                                </div>
                                <div className="checkout-right-radio__cash">
                                    <input type="radio" id="cash" value="COD" {...register('payment')} />
                                    <label htmlFor="cash">Cash On Delivery</label>
                                </div>
                                <div className="checkout-right-radio__policy">
                                    <p>
                                        Your personal data will be used to support your experience throughout this website,
                                        to manage access to your account, and for other purposes described in our
                                        <span>
                                            privacy policy.
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="checkout-right-total__button">
                                <button>Place order</button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>

        </>
    )
}

export default OrderPage
