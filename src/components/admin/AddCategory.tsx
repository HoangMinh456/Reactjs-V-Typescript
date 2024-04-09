import { Label } from '@radix-ui/react-label';
import axios from 'axios';
import { SubmitHandler, set, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';


type Input = {
    name: string,
}

const AddCategory = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Input>();

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (category: any) => {
            const { data } = await axios.post(`http://localhost:8080/api/category`, category);
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries('CATEGORY_KEY');
        }
    })
    const onSubmit: SubmitHandler<Input> = async (data) => {
        // console.log(data);
        mutation.mutate(data);

        navigate('/admin/category');
        toast.success('Thêm danh mục thành công');

    }

    return (
        <section className="main tw-p-5">
            <div className="container">
                <div className="tw-flex tw-justify-between tw-mb-6">
                    <h1 className="tw-text-3xl">Add Category</h1>
                    <Button className=""><Link to={`/admin/category`}>Danh sách danh mục</Link></Button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="tw-grid tw-w-full tw-max-w-sm tw-items-center tw-gap-1.5 tw-mb-3">
                        {errors.name && errors.name.type === 'required' ? <Label htmlFor="name" className='tw-text-red-500 dark:tw-text-red-900' >Tên danh mục</Label> : <Label htmlFor="name" >Tên danh mục</Label>}
                        <Input type="text" id="name" placeholder="Tên danh mục" {...register('name', { required: true })} autoFocus />
                        {errors.name && errors.name.type === 'required' && (<div className="tw-text-[0.8rem] tw-font-medium tw-text-red-500 dark:tw-text-red-900">Không để trống</div>)}
                    </div>
                    <Button>Thêm danh mục</Button>
                </form>
            </div>
        </section >

    )
}

export default AddCategory