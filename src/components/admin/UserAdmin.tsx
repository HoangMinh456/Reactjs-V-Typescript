import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

export function UserAdmin() {
    const queryClient = useQueryClient();
    const { data, isLoading, isError } = useQuery({
        queryKey: ['USER_KEY'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:8080/api/user');
            return data;
        }
    })

    const mutation = useMutation({
        mutationFn: async (id: any) => {
            const { data } = await axios.delete(`http://localhost:8080/api/user/${id}`);
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries('USER_KEY');
            toast.success('Xóa thành công')
        }
    })

    const handleRemove = (id: any) => {
        const confirm = window.confirm('Bạn chắc chứ?');
        if (confirm) {
            mutation.mutate(id);
        }
    }

    return (
        <div className="container-table tw-w-full tw-p-5">
            <div className="tw-flex tw-justify-between tw-mb-6">
                <h1 className="tw-text-3xl">Manage User</h1>
            </div>
            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead className="tw-w-[100px]">STT</TableHead>
                        <TableHead>Tên</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Avata</TableHead>
                        {/* <TableHead className="tw-text-right">Chức năng</TableHead> */}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((item: any, index: number) => (
                        <TableRow key={index} >
                            <TableCell className="tw-font-medium">{index + 1}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell><img className="tw-w-10 tw-h-10" src={item.avata} alt="" /></TableCell>
                            <TableCell className="tw-text-right">
                                {/* <Link to={`/admin/user/${item._id}/edit`}><Button variant="secondary">Sửa</Button></Link> */}
                                {/* <Button onClick={() => handleRemove(item._id)} className="tw-ml-3" variant="destructive">Xóa</Button> */}
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