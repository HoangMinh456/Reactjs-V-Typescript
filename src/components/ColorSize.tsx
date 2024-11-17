import { AppContext } from '@/context/ProductContextProvider';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react'

type Props = {}

const ColorSize = ({ id, idAttri }: any) => {
    // idPro và idAttribute
    // const { id, idAttri } = useParams();

    const queryClient = useQueryClient();
    const [idPro, setIdPro] = useState(id);
    const [idAttribute, setIdAttribute] = useState(idAttri);
    const [color, setColor] = useState();
    const [size, setSize] = useState();

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

    function changeColor(e: any) {
        // setColor(e.target.dataset.value);
        handleChangeColor.mutate(e.target.dataset.value);
    }

    function changeSize(e: any) {
        // setSize(e.target.dataset.value);
        handdleChangeSize.mutate(e.target.dataset.value);
    }
    // console.log(productAttribute)
    return (
        <>
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
        </>
    )
}

export default ColorSize