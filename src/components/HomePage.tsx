import { useLocalStorage } from '@/hooks/useStorage';
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const HomePage = ({ products }: any) => {
    const productsNew = products.data;
    const [user] = useLocalStorage('user', {});
    const userId = user?.user?._id;
    const queryClient = useQueryClient();

    // console.log(productsNew)
    const { data: getAttribute } = useQuery({
        queryKey: ['ATTRIBUTE_KEY'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/attribute`);
            return data;
        }
    })

    const addToCart = useMutation({
        mutationFn: async (item: any) => {
            const { data } = await axios.post(`http://localhost:8080/api/cart/add-to-cart`, item);
            return data;
        }, onSuccess: () => {
            toast.success('Thêm sản phẩm thành công')
            queryClient.invalidateQueries(['CART_KEY', userId]);
        }
    })

    const allPro: any = [];

    // tất cả 
    // const allProducts = productsNew?.map((item: any) => ({
    //     attribute: item.attribute.map((itm: any) => {
    //         const pro = {
    //             ...item,
    //             attribute: {
    //                 _id: itm._id,
    //                 color: itm.color,
    //                 price: itm.price,
    //                 pricesale: itm.pricesale,
    //                 size: itm.size,
    //             }
    //         };
    //         if (allPro.length < 4) {
    //             allPro.push(pro);
    //         }
    //     })
    // }))

    const allProducts = productsNew?.map((item: any) => {
        const pro = {
            ...item,
            attribute: {
                _id: item.attribute[0]._id,
                color: item.attribute[0].color,
                price: item.attribute[0].price,
                pricesale: item.attribute[0].pricesale,
                size: item.attribute[0].size,
            }
        };
        if (allPro.length < 4) {
            allPro.push(pro);
        }
    })

    const addTo = (e: any) => {
        const item = {
            userId: userId,
            productItem: e._id,
            attributeItem: e.attribute._id,
            quantity: 1
        }
        addToCart.mutate(item);
    }

    return (
        <>
            <div className="banner">
                <img src="/images/banner1.jpg" />
                <div className="text1">
                    <p>Trang chủ</p>
                </div>
                <div className="text2">
                    <p>Home</p>
                </div>
            </div>
            <div className="home">
                <div className="new">
                    <div className="new-title">
                        <p>New</p>
                    </div>
                    <div className="new-products">
                        {/* {productsNew?.map((item: any, index: number) => (
                            <div className="new-product" key={index}>
                                <div className="deal">
                                    <p>-30%</p>
                                </div>
                                <div className="img-product">
                                    <img src={item.imagemain} />
                                </div>
                                <div className="info-product">
                                    <div className="name-product">
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="desc-product">
                                        <p>{item.desc}</p>
                                    </div>
                                    <div className="price-product">
                                        <div className="price1">
                                            <p>{item.price}<span>đ</span></p>
                                        </div>
                                        <div className="price2">
                                            <p>3.500.000<span>đ</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-hover">
                                    <Link to={`/product/${item._id}`}>
                                        <div className="view-product">
                                            <p>View</p>
                                        </div>
                                    </Link>
                                    <div className="add-to-card">
                                        <p>Add to card</p>
                                    </div>
                                    <div className="social">
                                        <div className="share">
                                            <a href="#">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46665C5.97333 8.31331 6 8.15998 6 7.99998C6 7.83998 5.97333 7.68665 5.94 7.53331L10.64 4.79331C11 5.12665 11.4733 5.33331 12 5.33331C13.1067 5.33331 14 4.43998 14 3.33331C14 2.22665 13.1067 1.33331 12 1.33331C10.8933 1.33331 10 2.22665 10 3.33331C10 3.49331 10.0267 3.64665 10.06 3.79998L5.36 6.53998C5 6.20665 4.52667 5.99998 4 5.99998C2.89333 5.99998 2 6.89331 2 7.99998C2 9.10665 2.89333 9.99998 4 9.99998C4.52667 9.99998 5 9.79331 5.36 9.45998L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6666C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.551 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.7839 12.3956 10.6666 12 10.6666Z" fill="white" />
                                                </svg>
                                                <p>Share</p>
                                            </a>
                                        </div>
                                        <div className="compare">
                                            <a href="#">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="white" />
                                                </svg>
                                                <p>Compare</p>
                                            </a>
                                        </div>
                                        <div className="like">
                                            <a href="#">
                                                <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8" />
                                                </svg>
                                                <p>Like</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))} */}
                        {allPro?.map((item: any, index: number) => (
                            <div className="new-product" key={index}>
                                {item.checked
                                    ?
                                    <div className="deal">
                                        <p>-{item.sale}%</p>
                                    </div>
                                    : ''}
                                <div className="img-product">
                                    <img src={item.imagemain} />
                                </div>
                                <div className="info-product">
                                    <div className="name-product">
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="desc-product">
                                        <p>{item.desc}</p>
                                    </div>
                                    {item.checked ?
                                        <div className="price-product">
                                            <div className="price1">
                                                <p>{item.attribute.pricesale}<span>đ</span></p>
                                            </div>
                                            <div className="price2">
                                                <p>{item.attribute.price}<span>đ</span></p>
                                            </div>
                                        </div>
                                        :
                                        <div className="price-product">
                                            <div className="price1">
                                                <p>{item.attribute.price}<span>đ</span></p>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="product-hover">
                                    <Link to={`/product/${item._id}/${item.attribute._id}`}>
                                        <div className="view-product">
                                            <p>View</p>
                                        </div>
                                    </Link>
                                    <div className="add-to-card">
                                        <p onClick={() => addTo(item)}>Add to card</p>
                                    </div>
                                    <div className="social">
                                        <div className="share">
                                            <a href="#">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46665C5.97333 8.31331 6 8.15998 6 7.99998C6 7.83998 5.97333 7.68665 5.94 7.53331L10.64 4.79331C11 5.12665 11.4733 5.33331 12 5.33331C13.1067 5.33331 14 4.43998 14 3.33331C14 2.22665 13.1067 1.33331 12 1.33331C10.8933 1.33331 10 2.22665 10 3.33331C10 3.49331 10.0267 3.64665 10.06 3.79998L5.36 6.53998C5 6.20665 4.52667 5.99998 4 5.99998C2.89333 5.99998 2 6.89331 2 7.99998C2 9.10665 2.89333 9.99998 4 9.99998C4.52667 9.99998 5 9.79331 5.36 9.45998L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6666C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.551 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.7839 12.3956 10.6666 12 10.6666Z" fill="white" />
                                                </svg>
                                                <p>Share</p>
                                            </a>
                                        </div>
                                        <div className="compare">
                                            <a href="#">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="white" />
                                                </svg>
                                                <p>Compare</p>
                                            </a>
                                        </div>
                                        <div className="like">
                                            <a href="#">
                                                <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8" />
                                                </svg>
                                                <p>Like</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* End Product  */}
                    </div>
                    {/* End New Products  */}
                </div>
                {/* End New  */}
                {/* Shop  */}
                <div className="shop">
                    {/* Shop Title  */}
                    <div className="shop-title">
                        <p>Shop</p>
                    </div>
                    {/* Shop Images  */}
                    <div className="shop-images">
                        <div className="image">
                            <img src="images/products/shop1.jpg" />
                        </div>
                        <div className="image">
                            <img src="images/products/shop2.jpg" />
                        </div>
                        <div className="image">
                            <img src="images/products/shop3.jpg" />
                        </div>
                        <div className="image">
                            <img src="images/products/shop4.png" />
                        </div>
                    </div>
                    {/* End Shop Images  */}
                </div>
                {/* End Shop  */}
                {/* Blog  */}
                <div className="blog">
                    {/* Blog Title  */}
                    <div className="blog-title">BLOG</div>
                    {/* Blog Post  */}
                    <div className="blog-post">
                        {/* Post  */}
                        <div className="post">
                            {/* Image  */}
                            <div className="image">
                                <img src="/images/products/blog1.jpg" />
                            </div>
                            {/* Status  */}
                            <div className="status">
                                <div className="title">
                                    <p>THE ULTIMATE SOFA BUYING GUIDE</p>
                                </div>
                                <div className="desc">
                                    <p>
                                        The versatility of our living space is more crucial than ever. But
                                        buying a sofa might be a difficult undertaking. Your needs and the
                                        size of your living area will determine everything, However, don’t
                                        worry, were are here to help you
                                    </p>
                                </div>
                                <div className="about">
                                    <p>ABOUT</p>
                                    <svg width={23} height={22} viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2128 1.42529L11.3056 0.341309C11.7683 -0.117676 12.5166 -0.117676 12.9744 0.341309L22.5437 9.82861C23.0064 10.2876 23.0064 11.0298 22.5437 11.4839L12.9744 20.9761C12.5116 21.4351 11.7634 21.4351 11.3056 20.9761L10.2128 19.8921C9.74519 19.4282 9.75504 18.6714 10.2325 18.2173L16.1641 12.6118H2.01685C1.36216 12.6118 0.835449 12.0894 0.835449 11.4399V9.87744C0.835449 9.22803 1.36216 8.70557 2.01685 8.70557H16.1641L10.2325 3.1001C9.75012 2.646 9.74027 1.88916 10.2128 1.42529Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                            {/* End Status  */}
                        </div>
                        <div className="post">
                            {/* Image  */}
                            <div className="image">
                                <img src="/images/products/blog2.jpg" />
                            </div>
                            {/* Status  */}
                            <div className="status">
                                <div className="title">
                                    <p>A BEDROOM MUST HAVE SOME THING LIKE THIS</p>
                                </div>
                                <div className="desc">
                                    <p>
                                        Your level of comfort when geting into and out of bed can be greatly influenced by
                                        the bed frame you choose. It may significantly affect how want your bedroom to feet
                                        and look
                                    </p>
                                </div>
                                <div className="about">
                                    <p>ABOUT</p>
                                    <svg width={23} height={22} viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2128 1.42529L11.3056 0.341309C11.7683 -0.117676 12.5166 -0.117676 12.9744 0.341309L22.5437 9.82861C23.0064 10.2876 23.0064 11.0298 22.5437 11.4839L12.9744 20.9761C12.5116 21.4351 11.7634 21.4351 11.3056 20.9761L10.2128 19.8921C9.74519 19.4282 9.75504 18.6714 10.2325 18.2173L16.1641 12.6118H2.01685C1.36216 12.6118 0.835449 12.0894 0.835449 11.4399V9.87744C0.835449 9.22803 1.36216 8.70557 2.01685 8.70557H16.1641L10.2325 3.1001C9.75012 2.646 9.74027 1.88916 10.2128 1.42529Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                            {/* End Status  */}
                        </div>
                        <div className="post">
                            {/* Image  */}
                            <div className="image">
                                <img src="/images/products/blog3.jpg" />
                            </div>
                            {/* Status  */}
                            <div className="status">
                                <div className="title">
                                    <p>WHY IS A TV CONSOLE A MUST IN EVERY HOUSE</p>
                                </div>
                                <div className="desc">
                                    <p>
                                        People do a lot of research to make sure they purchase the ideal
                                        televisoin. And like the rest of us, you want to keep that gorgeous flat srceen in
                                        your living or bedroom on a table or stand
                                    </p>
                                </div>
                                <div className="about">
                                    <p>ABOUT</p>
                                    <svg width={23} height={22} viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2128 1.42529L11.3056 0.341309C11.7683 -0.117676 12.5166 -0.117676 12.9744 0.341309L22.5437 9.82861C23.0064 10.2876 23.0064 11.0298 22.5437 11.4839L12.9744 20.9761C12.5116 21.4351 11.7634 21.4351 11.3056 20.9761L10.2128 19.8921C9.74519 19.4282 9.75504 18.6714 10.2325 18.2173L16.1641 12.6118H2.01685C1.36216 12.6118 0.835449 12.0894 0.835449 11.4399V9.87744C0.835449 9.22803 1.36216 8.70557 2.01685 8.70557H16.1641L10.2325 3.1001C9.75012 2.646 9.74027 1.88916 10.2128 1.42529Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                            {/* End Status  */}
                        </div>
                        {/* End Post  */}
                    </div>
                    {/* End Blog Post  */}
                </div>
                {/* End Blog  */}
            </div >
        </>


    )
}

export default HomePage
