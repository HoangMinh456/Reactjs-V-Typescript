import React from 'react'
import { Skeleton } from '../ui/skeleton'
import { Button } from '../ui/button'
import { Link, useParams } from 'react-router-dom'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Checkbox } from '../ui/checkbox'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'

const TagsAdmin = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['TAGS_KEY'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/tags`)
            return data;
        }
    })

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: async (id: any) => {
            const { data } = await axios.delete(`http://localhost:8080/api/tags/delete/${id}`);
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries('TAGS_KEY')
            toast.success('Xóa thành công');
        }
    })

    const removeTag = (id: any) => {
        const confirm = window.confirm('Bạn chắc chứ?');
        if (confirm) {
            mutation.mutate(id);

        }

    }

    return (
        // <div className="tw-flex tw-flex-col tw-space-y-3 tw-justify-center tw-mx-auto">
        //     <Skeleton className="tw-h-[125px] tw-w-[250px] tw-rounded-xl" />
        //     <div className="tw-space-y-2">
        //         <Skeleton className="tw-h-4 tw-w-[250px]" />
        //         <Skeleton className="tw-h-4 tw-w-[200px]" />
        //     </div>
        // </div>
        <div className="container-table tw-w-full tw-p-5">
            <div className="tw-flex tw-justify-between tw-mb-6">
                <h1 className="tw-text-3xl">Manage Tags</h1>
                <Button className=""><Link to={`/admin/tags/add`}>Thêm tags</Link></Button>
            </div>
            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead className="tw-w-[100px]">STT</TableHead>
                        <TableHead>Tag name</TableHead>
                        <TableHead className="tw-text-right">Chức năng</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((item: any, index: number) => (
                        <TableRow key={index}>
                            <TableCell className="tw-font-medium">{index + 1}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell className="tw-text-right">
                                <Link to={`/admin/tags/edit/${item._id}`}><Button variant="secondary">Sửa</Button></Link>
                                <Button onClick={() => removeTag(item._id)} className="tw-ml-3" variant="destructive">Xóa</Button>
                            </TableCell>
                        </TableRow>
                    ))}

                </TableBody>
                {/* <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="tw-text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter> */}
            </Table>
        </div>
    )
}

export default TagsAdmin
