import { Label } from '@radix-ui/react-label';
import axios from 'axios';
import React, { useState } from 'react'
import { SubmitHandler, set, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from 'lucide-react';
import { Progress } from '../ui/progress';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
// import { useQuery } from '@tanstack/react-query';
// import "bootstrap/dist/css/bootstrap.min.css"

type ProductAddProps = {
    onAdd: (product: any) => void
}

type Input = {
    name: string,
    price: string,
    sale: number,
    pricesale: string,
    desc: string,
    image: string,
    imagemain: string,
    category: any,
    tags: any,
    color: string,
    size: string,
    checked: boolean,
}


const AddProductPage = ({ onAdd }: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Input>();
    const navigate = useNavigate();
    const { toast } = useToast();
    const [check, setCheck] = useState(false);

    const [percent, setPercent] = useState(0);
    let newPercent = 0;

    const { data } = useQuery({
        queryKey: ['CATEGORY_KEY'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:8080/api/category');
            return data;
        }
    })

    const { data: tags } = useQuery({
        queryKey: ['TAGS_KEY'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/tags`);
            return data;
        }
    })

    const { data: sizes } = useQuery({
        queryKey: ['SIZE_KEY'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/size`);
            return data;
        }
    })

    function cloudinaryMess() {
        toast({
            title: "Cloudinary ",
            description: "Ảnh đang được tải lên cloudinary, vui lòng đợi trong giây lát!"
        })
    }

    const onSubmit: SubmitHandler<Input> = async (data) => {
        try {
            cloudinaryMess();
            setCheck(true);
            const url = await uploadImage(data.image);
            const urlmain = await uploadImageMain(data.imagemain);
            const priceVn = new Intl.NumberFormat("vi-VN").format(parseFloat(data.price));
            // const giasale = new Intl.NumberFormat("vi-VN").format((parseInt(data.price) - (parseInt(data.price) * data.sale / 100)).toFixed(3));
            const giasale = new Intl.NumberFormat("vi-VN").format(parseFloat((parseInt(data.price) - (parseInt(data.price) * data.sale / 100)).toFixed(3)));
            onAdd({ ...data, price: priceVn, pricesale: giasale, image: url, imagemain: urlmain, checked: false });
            // console.log(data)
            setPercent(0);
        } catch (error) {
            console.log(error);
        }
    }
    //upload nhiều ảnh
    const uploadImage = async (files: any) => {
        const length = files.length;
        if (files) {
            const CLOUND_NAME = `dawxspemp`;
            const PRESET_NAME = 'nhshop';
            const FOLDER_NAME = 'React-Node';
            const urls = [];
            const api = `https://api.cloudinary.com/v1_1/${CLOUND_NAME}/image/upload`;

            const formData = new FormData();
            formData.append('upload_preset', PRESET_NAME);
            formData.append('folder', FOLDER_NAME);
            let newPercent2 = 0;
            for (const file of files) {
                formData.append('file', file);

                const response = await axios.post(api, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                urls.push(response.data.secure_url);
                newPercent2 += 1;
                newPercent = (newPercent2 / length) * 100;
                setPercent(newPercent);
            }
            return urls;
        }
    }
    //upload 1 ảnh
    const uploadImageMain = async (file: any) => {
        if (file) {
            const CLOUND_NAME = `dawxspemp`;
            const PRESET_NAME = 'nhshop';
            const FOLDER_NAME = 'React-Node';
            const urls = [];
            const api = `https://api.cloudinary.com/v1_1/${CLOUND_NAME}/image/upload`;

            const formData = new FormData();
            formData.append('upload_preset', PRESET_NAME);
            formData.append('folder', FOLDER_NAME);
            formData.append('file', file[0]);

            const response = await axios.post(api, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            urls.push(response.data.secure_url);

            return urls;
        }
    }

    return (
        <section className="main tw-p-5">
            <div className="container">
                <div className="tw-flex tw-justify-between tw-mb-6">
                    <h1 className="tw-text-3xl">Add Product</h1>
                    <Button className=""><Link to={`/admin/products`}>Danh sách sản phẩm</Link></Button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='tw-flex tw-justify-between'>
                        <div className='tw-w-1/2'>
                            <div className="tw-grid tw-w-full tw-max-w-sm tw-items-center tw-gap-1.5 tw-mb-3">
                                {/* <Label htmlFor="price">Tên sản phẩm</Label> */}
                                {errors.name && errors.name.type === 'required' ? <Label htmlFor="name" className='tw-text-red-500 dark:tw-text-red-900' >Tên sản phẩm</Label> : <Label htmlFor="name" >Tên sản phẩm</Label>}
                                <Input type="text" id="name" placeholder="Tên sản phẩm" {...register('name', { required: true })} />
                                {errors.name && errors.name.type === 'required' && (<div className="tw-text-[0.8rem] tw-font-medium tw-text-red-500 dark:tw-text-red-900">Không để trống</div>)}
                            </div>
                            <div className="tw-grid tw-w-full tw-max-w-sm tw-items-center tw-gap-1.5 tw-mb-3">
                                {errors.price && errors.price.type === 'required' && 'validate' ? <Label htmlFor="price" className='tw-text-red-500 dark:tw-text-red-900'>Giá</Label> : <Label htmlFor="price">Giá</Label>}
                                <Input type="text" id="price" placeholder="Giá sản phẩm" {...register('price', { required: true, validate: (value) => !isNaN(value) && value > 0 })} />
                                {errors.price && errors.price.type === 'required' && (<div className="tw-text-[0.8rem] tw-font-medium tw-text-red-500 dark:tw-text-red-900">Không để trống</div>)}
                                {errors.price && errors.price.type === 'validate' && (<div className="tw-text-[0.8rem] tw-font-medium tw-text-red-500 dark:tw-text-red-900">Phải là số và lớn hơn 0</div>)}
                            </div>
                            <div className="tw-grid tw-w-full tw-max-w-sm tw-items-center tw-gap-1.5 tw-mb-3">
                                {errors.sale && errors.sale.type === 'required' && 'validate' ? <Label htmlFor="sale" className='tw-text-red-500 dark:tw-text-red-900'>Giảm giá</Label> : <Label htmlFor="sale">Giảm giá</Label>}
                                <Input type="text" id="sale" placeholder="Giảm ... %" {...register('sale', { required: true, validate: (value) => !isNaN(value) && value > 0 && value < 100 })} />
                                {errors.sale && errors.sale.type === 'required' && (<div className="tw-text-[0.8rem] tw-font-medium tw-text-red-500 dark:tw-text-red-900">Không để trống</div>)}
                                {errors.sale && errors.sale.type === 'validate' && (<div className="tw-text-[0.8rem] tw-font-medium tw-text-red-500 dark:tw-text-red-900">Phải là số, lớn hơn 0 và nhỏ hơn 100</div>)}
                            </div>
                            <div className="tw-grid tw-w-full tw-max-w-sm tw-items-center tw-gap-1.5 tw-mb-3">
                                {errors.category && errors.category.type === 'validate' ? <Label htmlFor="name" className='tw-text-red-500 dark:tw-text-red-900' >Danh mục sản phẩm</Label> : <Label htmlFor="picturemain">Danh mục sản phẩm</Label>}
                                <div>
                                    <label className="select" htmlFor="category">
                                        <select {...register('category', { validate: (value) => value != 0 })}>
                                            <option value="0">Chọn danh mục</option>
                                            {data?.map((item: any) => (
                                                <option key={item.name} value={item._id}>{item.name}</option>
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
                                {errors.category && errors.category.type === 'validate' && (<div className="tw-text-[0.8rem] tw-font-medium tw-text-red-500 dark:tw-text-red-900">Không để trống</div>)}
                            </div>
                            <div className="tw-grid tw-w-full tw-max-w-sm tw-items-center tw-gap-1.5 tw-mb-3">
                                {errors.tags && errors.tags.type === 'required' ? <Label htmlFor="name" className='tw-text-red-500 dark:tw-text-red-900' >Tags sản phẩm</Label> : <Label htmlFor="picturemain">Tags sản phẩm</Label>}

                                <div className="">
                                    {tags?.map((item: any, index: number) => (
                                        <div key={index}>
                                            <input className='tw-mr-2' type="checkbox" id={item._id} value={item._id} {...register('tags', { required: true })} />
                                            <label htmlFor={item._id}>{item.name}</label><br />
                                        </div>
                                    ))}
                                </div>

                                {errors.tags && errors.tags.type === 'required' && (<div className="tw-text-[0.8rem] tw-font-medium tw-text-red-500 dark:tw-text-red-900">Không để trống</div>)}
                            </div>
                        </div>
                        <div className='tw-w-1/2'>
                            <div className="tw-grid tw-w-full tw-max-w-sm tw-items-center tw-gap-1.5 tw-mb-3">
                                {errors.desc && errors.desc.type === 'required' ? <Label htmlFor="name" className='tw-text-red-500 dark:tw-text-red-900' >Mô tả nhanh sản phẩm</Label> : <Label htmlFor="name" >Mô tả nhanh sản phẩm</Label>}
                                <Textarea placeholder="Type your message here." {...register('desc', { required: true })} />
                                {errors.desc && errors.desc.type === 'required' && (<div className="tw-text-[0.8rem] tw-font-medium tw-text-red-500 dark:tw-text-red-900">Không để trống</div>)}
                            </div>
                            <div className="tw-grid tw-w-full tw-max-w-sm tw-items-center tw-gap-1.5 tw-mb-3">
                                {errors.imagemain && errors.imagemain.type === 'required' ? <Label htmlFor="name" className='tw-text-red-500 dark:tw-text-red-900' >Ảnh chính sản phẩm</Label> : <Label htmlFor="picturemain">Ảnh chính sản phẩm</Label>}
                                <Input id="picturemian" type="file" {...register('imagemain', { required: true })} />
                                {errors.imagemain && errors.imagemain.type === 'required' && (<div className="tw-text-[0.8rem] tw-font-medium tw-text-red-500 dark:tw-text-red-900">Không để trống</div>)}
                            </div>
                            <div className="tw-grid tw-w-full tw-max-w-sm tw-items-center tw-gap-1.5 tw-mb-3">
                                {errors.image && errors.image.type === 'required' ? <Label htmlFor="name" className='tw-text-red-500 dark:tw-text-red-900' >Ảnh sản phẩm</Label> : <Label htmlFor="picturemain">Ảnh sản phẩm</Label>}
                                <Input id="picture" type="file" multiple {...register('image', { required: true })} />
                                {errors.image && errors.image.type === 'required' && (<div className="tw-text-[0.8rem] tw-font-medium tw-text-red-500 dark:tw-text-red-900">Không để trống</div>)}
                            </div>
                            <div className="tw-grid tw-w-full tw-max-w-sm tw-items-center tw-gap-1.5 tw-mb-3">
                                {errors.size && errors.size.type === 'validate' ? <Label htmlFor="size" className='tw-text-red-500 dark:tw-text-red-900' >Size</Label> : <Label htmlFor="size">Size</Label>}
                                <div>
                                    <label className="select" htmlFor="size">
                                        <select {...register('size', { validate: (value) => value != 0 })}>
                                            <option value={0}>Chọn size</option>
                                            {sizes?.map((item: any) => (
                                                <option key={item.name} value={item._id}>{item.name}</option>
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
                            <div className="tw-grid tw-max-w-sm tw-items-center tw-gap-1.5 tw-mb-3">
                                {errors.color && errors.color.type === 'required' ? <Label htmlFor="color" className='tw-text-red-500 dark:tw-text-red-900' >Chọn màu</Label> : <Label htmlFor="color">Chọn màu</Label>}
                                <Input className='tw-w-2/12' id="color" type="color" multiple {...register('color', { required: true })} />
                                {errors.color && errors.color.type === 'required' && (<div className="tw-text-[0.8rem] tw-font-medium tw-text-red-500 dark:tw-text-red-900">Không để trống</div>)}
                            </div>
                        </div>
                    </div>
                    {check ? <Progress className="tw-my-2 tw-w-[31%]" value={percent} /> : ''}
                    {check ? <Button disabled> <Loader2 className="tw-mr-2 tw-h-4 tw-w-4 tw-animate-spin" /> Đang tải </Button> : <Button>Thêm sản phẩm</Button>}

                </form>
            </div >
        </section >

    )
}


export default AddProductPage