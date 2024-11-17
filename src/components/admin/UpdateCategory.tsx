import { Label } from '@radix-ui/react-label';
import axios from 'axios';
import { SubmitHandler, set, useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useEffect } from 'react';


type Input = {
    name: string,
}

const UpdateCategory = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Input>();

    const { id } = useParams();

    const queryClient = useQueryClient();

    const { data, isError } = useQuery({
        queryKey: ['CATEGORY_UPDATE_KEY'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/category/${id}`);
            return data;
        }
    })

    useEffect(() => {
        reset(data);
    }, [data])
    const mutation = useMutation({
        mutationFn: async (category: any) => {
            const token = localStorage.getItem('token');
            // console.log(token)
            const { data } = await axios.put(`http://localhost:8080/api/category/${id}`, category,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries('CATEGORY_UPDATE_KEY');
            toast.success('Cập nhật thành công');
            navigate('/admin/category');
        }, onError: (error) => {
            if ((error as any).response.data.error === 'Hết hạn token') {
                const confirm = window.confirm('Hết hạn token, bạn có muốn đăng nhập lại không?');
                if (confirm) {
                    navigate('/login');
                }
            }
        }
    })
    const onSubmit: SubmitHandler<Input> = async (data) => {
        // console.log(data);
        mutation.mutate(data);
    }

    return (
        <section className="main tw-p-5">
            <div className="container">
                <div className="tw-flex tw-justify-between tw-mb-6">
                    <h1 className="tw-text-3xl">Update Category</h1>
                    <Button className=""><Link to={`/admin/category`}>Danh sách danh mục</Link></Button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="tw-grid tw-w-full tw-max-w-sm tw-items-center tw-gap-1.5 tw-mb-3">
                        {errors.name && errors.name.type === 'required' ? <Label htmlFor="name" className='tw-text-red-500 dark:tw-text-red-900' >Tên danh mục</Label> : <Label htmlFor="name" >Tên danh mục</Label>}
                        <Input type="text" id="name" placeholder="Tên danh mục" {...register('name', { required: true })} autoFocus />
                        {errors.name && errors.name.type === 'required' && (<div className="tw-text-[0.8rem] tw-font-medium tw-text-red-500 dark:tw-text-red-900">Không để trống</div>)}
                    </div>
                    <Button>Cập nhật danh mục</Button>
                </form>
            </div>
        </section >

    )
}

export default UpdateCategory