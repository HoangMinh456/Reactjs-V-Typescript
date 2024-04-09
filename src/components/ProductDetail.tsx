import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useLocalStorage } from '@/hooks/useStorage';
import { toast } from 'react-toastify';

const ProductDetail = () => {
    // idPro và idAttribute
    const { id, idAttri } = useParams();
    const [user] = useLocalStorage('user', {});
    const userId = user?.user?._id;

    const queryClient = useQueryClient();
    const [idPro, setIdPro] = useState(id);
    const [idAttribute, setIdAttribute] = useState(idAttri);
    const [color, setColor] = useState();
    const [size, setSize] = useState();
    const [quantity, setQuantity] = useState(1);

    //Sản phẩm chi tiết
    const { data: product } = useQuery({
        queryKey: ['PRODUCTS_DETAIL_KEY', idPro, idAttribute],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/products/${idPro}/${idAttribute}`);

            setColor(data.attribute.color);
            setSize(data.attribute.size);

            return data;
        },
        enabled: idPro !== '' && idAttribute !== '',
    })
    // console.log(product);
    // useEffect(() => {
    //     const attriId = attributeData?.find((item: any) => item.color == color && item.size == size);
    //     if (attriId) {
    //         setIdAttribute(attriId?._id);
    //     } else {
    //         const attriId2 = attributeData?.find((item: any) => item.size == size);
    //         setIdAttribute(attriId2?._id);
    //     }
    // }, [color, size]);


    // function handleImageCLick(e: any) {
    //     const img = e.target.src;
    //     setProduct({ ...product, imagemain: img });
    // }

    const { data: attributeData } = useQuery({
        queryKey: ['ATTRIBUTE_DATA_KEY'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/products/${idPro}`);
            return data.attribute;
        }
    })

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

    //Size and Color

    const sizeColorMap: any = {};

    // Duyệt qua mỗi thuộc tính và thêm color vào size tương ứng trong sizeColorMap
    attributeData?.map((att: any) => {
        const { size, color } = att;
        if (!sizeColorMap[size]) {
            // Nếu size chưa tồn tại, tạo một đối tượng mới chứa color và size
            sizeColorMap[size] = { size, color: [color] };
        } else {
            // Nếu size đã tồn tại
            // Kiểm tra xem color đã tồn tại trong mảng color của size chưa
            if (!sizeColorMap[size].color.includes(color)) {
                // Nếu chưa tồn tại, thêm color vào mảng color của size
                sizeColorMap[size].color.push(color);
            }
        }
    });
    // Chuyển đổi đối tượng sizeColorMap thành mảng các size có color
    const sizeWithColorArray = Object.values(sizeColorMap);
    const productAttribute: any = [];
    sizeWithColorArray?.map((item: any) => {
        const object = {
            ...item,
            idSize: item.size,
            size: sizeName(item.size)
        }
        productAttribute.push(object);
    })
    //End size and Color
    const id_pro = id!.slice(-6, -1);

    const { data, isLoading, isError } = useQuery({
        queryKey: ['CATEGORY_KEY'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:8080/api/category');
            return data;
        }
    })

    const { data: tags } = useQuery({
        queryKey: ['TAGS_KEY'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:8080/api/tags');
            return data;
        }
    })

    const { data: allPro } = useQuery({
        queryKey: ['PRODUCTS_ALL_KEY'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/products`);
            return data;
        }
    })

    const handleChangeColor = useMutation({
        mutationFn: async (value: any) => {
            const attriId = attributeData?.find((item: any) => item.color == value && item.size == size);
            if (attriId !== undefined && attriId !== null && attriId !== '') {
                setColor(value);
                setIdAttribute(attriId?._id);
            }
        }, onSuccess: () => {
            queryClient.invalidateQueries(['PRODUCTS_DETAIL_KEY', idPro, idAttribute])
        }
    })

    const handdleChangeSize = useMutation({
        mutationFn: async (value: any) => {
            const attriId = attributeData?.find((item: any) => item.color == color && item.size == value);
            if (attriId !== undefined && attriId !== null && attriId !== '') {
                setSize(value);
                setIdAttribute(attriId?._id);
            } else {
                const attriId2 = attributeData?.find((item: any) => item.size == value);
                if (attriId2 !== undefined && attriId !== null && attriId !== '') {
                    setSize(value);
                    setIdAttribute(attriId2?._id);
                }
            }
        }, onSuccess: () => {
            queryClient.invalidateQueries(['PRODUCTS_DETAIL_KEY', idPro, idAttribute])
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

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error!</div>;
    }

    const getCatName = (id: any) => {
        const cat = data.find((category: any) => category._id === id);
        return cat?.name;
    }

    const getTagName = (id: any) => {
        const tag: any = []
        if (tags) {
            id?.map((item: any) => {
                const tagName = tags.find((name: any) => name._id == item);
                tag.push(tagName.name);
            })
        }

        return tag;
    }

    function changeColor(e: any) {
        // setColor(e.target.dataset.value);
        handleChangeColor.mutate(e.target.dataset.value);
    }

    function changeSize(e: any) {
        // setSize(e.target.dataset.value);
        handdleChangeSize.mutate(e.target.dataset.value);
    }

    const increase = () => {
        setQuantity(quantity + 1);
    }

    const decrease = () => {
        if (quantity == 1) {
            window.alert('Ít nhất 1 sản phẩm!');
        } else {
            setQuantity(quantity - 1);
        }
    }
    // window.scrollTo(0, 0);

    const addTo = (e: any) => {
        const item = {
            userId: userId,
            productItem: e._id,
            attributeItem: e.attribute._id,
            quantity: quantity
        }
        addToCart.mutate(item);
    }
    // console.log(product);
    return (
        <>
            {/* Fillter  */}
            <section className="fillter filter-detail">
                <div className="container">
                    <div className="filter-detail-left">
                        <div className="filter-detail-left-title">
                            <div className="title-home">
                                <Link to={`/`}><p>Home</p></Link>
                                <img src="/images/icons/Vector.svg" />
                            </div>
                            <div className="title-shop">
                                <Link to={`/shop`}><p>Shop</p></Link>
                                <img src="/images/icons/Vector.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="filter-detail-right">
                        <div className="title-product">
                            <p>{product?.name}</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Fillter  */}
            {/* Product-detail  */}
            <section className="product-detail">
                <div className="container">
                    <div className="product-detail-left">
                        {/* Small images  */}
                        <div className="product-detail-left-smimages">
                            {product?.image && product?.image.map((img: any, index: number) => (
                                <div className="product-detail-left-smimages__img" key={index} >
                                    <img className='tw-rounded-lg tw-w-full tw-h-full' src={img} />
                                </div>
                            ))}
                        </div>
                        {/* End Small Images  */}
                        <div className="product-detail-left-lgimages">
                            <div className="product-detail-left-lgimages__img tw-transition-all">
                                <img className='tw-transition-all tw-h-5/6' src={product?.imagemain} />
                            </div>
                        </div>
                    </div>
                    <div className="product-detail-right">
                        <div className="product-detail-right__title">
                            <h1>{product?.name}</h1>
                        </div>
                        <div className="product-detail-right__price">
                            <p>{product?.checked ? product?.attribute?.pricesale : product?.attribute?.price}</p><span>đ</span>
                        </div>
                        <div className="product-detail-right-star">
                            <div className="product-detail-right-star__stars">
                                <img src="/images/stars/star-light.png" />
                                <img src="/images/stars/star-light.png" />
                                <img src="/images/stars/star-light.png" />
                                <img src="/images/stars/star-light.png" />
                                <img src="/images/stars/half-star.png" />
                            </div>
                            <div className="product-detail-right-star__review">
                                <p><span>5</span> Customer Review</p>
                            </div>
                        </div>
                        <div className="product-detail-right__desc">
                            <p>
                                {/* Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
                                stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
                                highs for a sound. */}
                                {product?.desc}
                            </p>
                        </div>
                        <div className="product-detail-right-size">
                            <div className="product-detail-right-size__title">
                                <p>Size</p>
                            </div>
                            <div className="product-detail-right-size__content">
                                {productAttribute?.map((item: any) => {
                                    if (product?.attribute?.size == item.idSize) {
                                        return <div key={item.idSize} defaultValue={item.idSize} className="product-detail-right-size__content-size active">
                                            <p>{item.size}</p>
                                        </div>
                                    } else {
                                        return <div key={item.idSize} onClick={(e) => changeSize(e)} className="product-detail-right-size__content-size">
                                            <p data-value={item.idSize}>{item.size}</p>
                                        </div>
                                    }

                                })}
                            </div>
                        </div>
                        <div className="product-detail-right-color">
                            <div className="product-detail-right-color__title">
                                <p>Color</p>
                            </div>
                            <div className="product-detail-right-color__content">
                                {/* {productAttribute?.map((item: any) => (
                                    <div key={item.color} className="product-detail-right-color__content-color1" style={{ backgroundColor: item.color }}>
                                    </div>
                                ))} */}
                                {productAttribute?.map((item: any) => {
                                    if (item?.idSize == product?.attribute?.size) {
                                        return item?.color?.map((itm: any, index: number) => {
                                            if (itm == product?.attribute?.color) {
                                                return <div key={index} className="product-detail-right-color__content-color1 active" style={{ backgroundColor: `${itm}` }}></div>
                                            } else {
                                                return <div key={index} data-value={itm} onClick={(e) => changeColor(e)} className="product-detail-right-color__content-color1" style={{ backgroundColor: `${itm}` }}></div>
                                            }
                                        })
                                    } else {
                                        return null;
                                    }
                                })}
                            </div>
                        </div>
                        <div className="product-detail-right-action">
                            <div className="product-detail-right-action__value">
                                <button className='tw-cursor-pointer tw-select-none' onClick={() => decrease()}>-</button>
                                <input type="text" value={quantity} data-value={quantity} readOnly />
                                <button className='tw-cursor-pointer tw-select-none' onClick={() => increase()}>+</button>
                            </div>
                            <div className="product-detail-right-action__add">
                                <button type="submit" onClick={() => addTo(product)}>Add To Cart</button>
                            </div>
                            <div className="product-detail-right-action__compare">
                                <button type="submit">+ Compare</button>
                            </div>
                        </div>
                        <hr />
                        <div className="product-detail-right-more">
                            <div className="SKU">
                                <div className="SKU__title">
                                    <div>SKU</div>
                                    <div>Category</div>
                                    <div>Tags</div>
                                    <div>Share</div>
                                </div>
                                <div className="SKU__2c">
                                    <div>:</div>
                                    <div>:</div>
                                    <div>:</div>
                                    <div>:</div>
                                </div>
                                <div className="SKU__content">
                                    <div>{id_pro}</div>
                                    <div>{getCatName(product?.category)}</div>
                                    <div>{getTagName(product?.tags).join(', ')}</div>
                                    <div className="icon tw-flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                            <path fill="black" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                            <path fill="black" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1024 1024">
                                            <path fill="black" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m215.3 337.7c.3 4.7.3 9.6.3 14.4c0 146.8-111.8 315.9-316.1 315.9c-63 0-121.4-18.3-170.6-49.8c9 1 17.6 1.4 26.8 1.4c52 0 99.8-17.6 137.9-47.4c-48.8-1-89.8-33-103.8-77c17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35c25.1-4.7 49.1-14.1 70.5-26.7c-8.3 25.7-25.7 47.4-48.8 61.1c22.4-2.4 44-8.6 64-17.3c-15.1 22.2-34 41.9-55.7 57.6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            {/* End Product Detail  */}
            {/* Review  */}
            <section className="review">
                <div className="container">
                    <div className="review-title">
                        <div className="review-title__desc active">
                            <p>Description</p>
                        </div>
                        <div className="review-title__additional">
                            <p>Additional Information</p>
                        </div>
                        <div className="review-title__reviews">
                            <p>Reviews</p>
                            <p>[5]</p>
                        </div>
                    </div>
                    <div className="review-content">
                        <div className="review-content__text1">
                            <p>
                                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo
                                speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the
                                show on the road.
                            </p>
                        </div>
                        <div className="review-content__text2">
                            <p>
                                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled
                                engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a
                                compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and
                                extended highs for a sound that is both articulate and pronounced. The analogue knobs allow
                                you to fine tune the controls to your personal preferences while the guitar-influenced
                                leather strap enables easy and stylish travel.
                            </p>
                        </div>
                    </div>
                    <div className="review-images">
                        <div className="review-images__img">
                            <img src="/images/products-detail/Cloud sofa three seater + ottoman_2 1.svg" />
                        </div>
                        <div className="review-images__img">
                            <img src="/images/products-detail/Cloud sofa three seater + ottoman_1 1.svg" />
                        </div>
                    </div>
                </div>
            </section>
            <hr className="hr-review" />
            {/* End Review  */}
            {/* Related */}
            <section className="related">
                <div className="related__title">
                    <p>Related Products</p>
                </div>
                <div className="related-product">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {allPro?.map((item: any, index: number) => (
                            <SwiperSlide key={index}>
                                <div className="new-product">
                                    {/* Deal  */}
                                    <div className="deal">
                                        <p>-30%</p>
                                    </div>
                                    {/* Product Image  */}
                                    <div className="img-product">
                                        <img src={item.imagemain} />
                                    </div>
                                    {/* Product Info  */}
                                    <div className="info-product">
                                        {/* Product Name  */}
                                        <div className="name-product">
                                            <p>{item.name}</p>
                                        </div>
                                        {/* Product Desc  */}
                                        <div className="desc-product">
                                            <p>{item.desc}</p>
                                        </div>
                                        {/* Product Price  */}
                                        <div className="price-product">
                                            <div className="price1">
                                                <p>{item.price}<span>đ</span></p>
                                            </div>
                                            <div className="price2">
                                                <p>3.500.000<span>đ</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Product Info  */}
                                    {/* Product-Hover */}
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
                                    {/* End Product-Hover  */}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="related__showmore">
                    <button>Show more</button>
                </div>
            </section>
            <hr className="hr__related" />
            {/* End Related  */}
        </>
    )
}

export default ProductDetail
