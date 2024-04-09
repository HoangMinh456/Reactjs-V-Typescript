import { Label } from '@radix-ui/react-label';
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const UpdateAttribute = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const [check, setCheck] = useState(false);

    const queryClient = useQueryClient();

    const { id } = useParams(); //id attribute
    const { idpro } = useParams(); //id product

    const { data: product } = useQuery({
        queryKey: ['PRODUCTS_KEY'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/products/${idpro}`);
            return data;
        }
    })

    const { data: attributeData } = useQuery({
        queryKey: ['ATTRIBUTE_DATA'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/attribute/${id}`);
            const newData = { ...data, price: ((data.price).replace(/\./g, "")), pricesale: 0, size: data.size._id }; // Thêm trường size vào đối tượng data
            reset(newData);
            return newData;
        }
    })

    const { data: sizes } = useQuery({
        queryKey: ['SIZE_KEY'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/size`);
            return data;
        }
    })

    const updateAttribute = useMutation({
        mutationFn: async (item) => {
            const { data } = await axios.put(`http://localhost:8080/api/attribute/${id}`, item);
            return data;
        }, onSuccess: () => {
            queryClient.invalidateQueries('ATTRIBUTE_KEYS');
        }
    })

    const onSubmit = async (data: any) => {
        try {
            const priceVn = new Intl.NumberFormat("vi-VN").format(data.price);
            const giasale = new Intl.NumberFormat("vi-VN").format((parseInt(data.price) - (parseInt(data.price) * product.sale / 100)));
            const newData = ({ ...data, price: priceVn, pricesale: giasale });
            updateAttribute.mutate(newData);
            navigate(`/admin/products/attribute/${idpro}`);
            toast.success('Cập nhật thành công');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="main tw-p-5">
            <div className="container">
                <div className="tw-flex tw-justify-between tw-mb-6">
                    <h1 className="tw-text-3xl">Update Attribute</h1>
                    <Button className=""><Link to={`/admin/products`}>Danh sách sản phẩm</Link></Button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='tw-flex tw-justify-between'>
                        <div className='tw-w-1/2'>
                            <div className="tw-grid tw-w-full tw-max-w-sm tw-items-center tw-gap-1.5 tw-mb-3">
                                {errors.price && errors.price.type === 'required' && 'validate' ? <Label htmlFor="price" className='tw-text-red-500 dark:tw-text-red-900'>Giá</Label> : <Label htmlFor="price">Giá</Label>}
                                <Input type="text" id="price" placeholder="Giá sản phẩm" {...register('price', { required: true, validate: (value) => !isNaN(value) && value > 0 })} />
                                {errors.price && errors.price.type === 'required' && (<div className="tw-text-[0.8rem] tw-font-medium tw-text-red-500 dark:tw-text-red-900">Không để trống</div>)}
                                {errors.price && errors.price.type === 'validate' && (<div className="tw-text-[0.8rem] tw-font-medium tw-text-red-500 dark:tw-text-red-900">Phải là số và lớn hơn 0</div>)}
                            </div>
                            <div className="tw-grid tw-max-w-sm tw-items-center tw-gap-1.5 tw-mb-3">
                                {errors.color && errors.color.type === 'required' ? <Label htmlFor="color" className='tw-text-red-500 dark:tw-text-red-900' >Chọn màu</Label> : <Label htmlFor="color">Chọn màu</Label>}
                                <Input className='tw-w-2/12' id="color" type="color" multiple {...register('color', { required: true })} />
                                {errors.color && errors.color.type === 'required' && (<div className="tw-text-[0.8rem] tw-font-medium tw-text-red-500 dark:tw-text-red-900">Không để trống</div>)}
                            </div>
                        </div>
                        <div className='tw-w-1/2'>
                            <div className="tw-grid tw-w-full tw-max-w-sm tw-items-center tw-gap-1.5 tw-mb-3">
                                {errors.size && errors.size.type === 'validate' ? <Label htmlFor="size" className='tw-text-red-500 dark:tw-text-red-900' >Size</Label> : <Label htmlFor="size">Size</Label>}
                                <div>
                                    <label className="select" htmlFor="size">
                                        <select {...register('size', { validate: (value) => value != 0 })}>
                                            <option value={0}>Chọn size</option>
                                            {sizes?.map((item: any, index: number) => (
                                                < option key={index} value={item._id}>{item.name}</option>
                                            ))}
                                        </select>
                                        <svg>
                                            <use xlinkHref="#select-arrow-down" />
                                        </svg>
                                    </label>
                                    <svg className="sprites">
                                        <symbol id="select-arrow-down" viewBox="0 0 10 6">
                                            <polyline points="1 1 5 5 9 1" />
                                        </symbol>
                                    </svg>
                                </div>
                                {errors.size && errors.size.type === 'validate' && (<div className="tw-text-[0.8rem] tw-font-medium tw-text-red-500 dark:tw-text-red-900">Không để trống</div>)}
                            </div>
                        </div>
                    </div>
                    {check ? <Button disabled> <Loader2 className="tw-mr-2 tw-h-4 tw-w-4 tw-animate-spin" /> Đang tải </Button> : <Button>Câp nhật thuộc tính</Button>}

                </form>
            </div >
        </section >

    )
}


export default UpdateAttribute