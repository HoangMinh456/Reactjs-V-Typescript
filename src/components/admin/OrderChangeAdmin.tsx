import React from 'react'
import { Button } from '../ui/button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import {
    Form,
    FormField,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from 'react-toastify'

type Props = {}

const OrderChangeAdmin = (props: Props) => {
    const queryClient = useQueryClient()
    const formSchema = z.object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
    });

    const { id } = useParams();
    const navigate = useNavigate();
    // console.log(id)
    const { data, isLoading, isError } = useQuery({
        queryKey: ['ORDER_KEY', id],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/order/${id}`);
            return data;
        }
    })
    const changeStatus = useMutation({
        mutationFn: async (item: any) => {
            const { data } = await axios.put(`http://localhost:8080/api/order/change`, item);
            return data;
        }, onSuccess: () => {
            toast.success("Thay đổi trạng thái thành công!");
            queryClient.invalidateQueries('ORDER_DATA_KEY');
            navigate('/admin/order');
        }
    })
    // console.log(data)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        const item = {
            idOrder: id,
            ...data,
            status: values.username
        }
        changeStatus.mutate(item)
    }
    return (
        <section className="main tw-p-5">
            <div className="container">
                <div className="tw-flex tw-justify-between tw-mb-6">
                    <h1 className="tw-text-3xl">Change status</h1>
                    <Button className=""><Link to={`/admin/order`}>Danh sách</Link></Button>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="tw-space-y-8 tw-w-1/4">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="tw-w-full">
                                        <SelectValue placeholder="Select a status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Status</SelectLabel>
                                            {data?.status === "Chờ xác nhận"
                                                ? <SelectItem value="Hủy">Hủy</SelectItem>
                                                : <SelectItem disabled value="Hủy">Hủy</SelectItem>}

                                            {data?.status === "Đóng gói" || data?.status === "Đang giao" || data?.status === "Hoàn thành" || data?.status === "Hủy"
                                                ? <SelectItem disabled value="Chờ xác nhận">Chờ xác nhận</SelectItem>
                                                : <SelectItem value="Chờ xác nhận">Chờ xác nhận</SelectItem>}

                                            {data?.status === "Đang giao" || data?.status === "Hoàn thành" || data?.status === "Hủy"
                                                ? <SelectItem disabled value="Đóng gói">Đóng gói</SelectItem>
                                                : <SelectItem value="Đóng gói">Đóng gói</SelectItem>}

                                            {data?.status === "Hoàn thành" || data?.status === "Hủy"
                                                ? <SelectItem disabled value="Đang giao">Đang giao</SelectItem>
                                                : <SelectItem value="Đang giao">Đang giao</SelectItem>}

                                            <SelectItem value="Hoàn thành">Hoàn thành</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </section >
    )
}

export default OrderChangeAdmin