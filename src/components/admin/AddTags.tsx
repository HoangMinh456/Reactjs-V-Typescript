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
const AddTags = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Input>();
    const { id }: any = useParams();
    const navigate = useNavigate();
    // console.log(id);
    const queryClient = useQueryClient();

    const mutatiton = useMutation({
        mutationFn: async (tags) => {
            const { data } = await axios.post(`http://localhost:8080/api/tags/add`, tags)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries('TAGS_KEY')
            navigate('/admin/tags');
            toast.success('Thêm thành công');
        }
    })

    const onSubmit = (data: any) => {
        mutatiton.mutate(data);

    }

    return (
        <section className="main tw-p-5">
            <div className="container">
                <div className="tw-flex tw-justify-between tw-mb-6">
                    <h1 className="tw-text-3xl">Add Tag</h1>
                    <Button className=""><Link to={`/admin/tags`}>Danh sách Tag</Link></Button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="tw-grid tw-w-full tw-max-w-sm tw-items-center tw-gap-1.5 tw-mb-3">
                        {errors.name && errors.name.type === 'required' ? <Label htmlFor="name" className='tw-text-red-500 dark:tw-text-red-900' >Name tag</Label> : <Label htmlFor="name" >Name tag</Label>}
                        <Input type="text" id="name" placeholder="Tên danh mục" {...register('name', { required: true })} autoFocus />
                        {errors.name && errors.name.type === 'required' && (<div className="tw-text-[0.8rem] tw-font-medium tw-text-red-500 dark:tw-text-red-900">Không để trống</div>)}
                    </div>
                    <Button>Thêm Tag</Button>
                </form>
            </div>
        </section >
    )
}

export default AddTags
