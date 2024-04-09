import { error } from 'console'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'

type Input = {
    name: string,
}
const UpdateSize = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Input>();
    const { id }: any = useParams();
    const navigate = useNavigate();
    // console.log(id);
    const queryClient = useQueryClient();
    const { data } = useQuery({
        queryKey: ['SIZE_UPDATE_KEY'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/size/${id}`)
            reset(data);
            return data;
        }
    })

    const mutatiton = useMutation({
        mutationFn: async (size) => {
            const { data } = await axios.put(`http://localhost:8080/api/size/${id}`, size)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries('SIZE_KEY')
        }
    })

    const onSubmit = (data: any) => {
        mutatiton.mutate(data);
        navigate('/admin/size');
        toast.success('Cập nhật thành công');
    }

    return (
        <section className="main tw-p-5">
            <div className="container">
                <div className="tw-flex tw-justify-between tw-mb-6">
                    <h1 className="tw-text-3xl">Update Size</h1>
                    <Button className=""><Link to={`/admin/size`}>Danh sách Size</Link></Button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="tw-grid tw-w-full tw-max-w-sm tw-items-center tw-gap-1.5 tw-mb-3">
                        {errors.name && errors.name.type === 'required' ? <Label htmlFor="name" className='tw-text-red-500 dark:tw-text-red-900' >Size</Label> : <Label htmlFor="name" >Size</Label>}
                        <Input type="text" id="name" placeholder="Size name" {...register('name', { required: true })} autoFocus />
                        {errors.name && errors.name.type === 'required' && (<div className="tw-text-[0.8rem] tw-font-medium tw-text-red-500 dark:tw-text-red-900">Không để trống</div>)}
                    </div>
                    <Button>Cập nhật Size</Button>
                </form>
            </div>
        </section >
    )
}

export default UpdateSize
