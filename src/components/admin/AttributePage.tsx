import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Link, useParams } from "react-router-dom"
import { Button } from "../ui/button"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { Skeleton } from "../ui/skeleton"
import { toast } from "react-toastify"


const AttributePage = () => {

    const { id } = useParams();

    const queryClient = useQueryClient();

    const { isError, isLoading, data: attributes } = useQuery({
        queryKey: ['ATTRIBUTE_LIST_KEY'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/attributes/${id}`);
            return data;
        }
    })

    const { data: sizes } = useQuery({
        queryKey: ['SIZES_KEY'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/size`);
            return data;
        }
    })

    const removeThisAttribute = useMutation({
        mutationFn: async (id: any) => {
            const { data } = await axios.delete(`http://localhost:8080/api/attribute/${id}`);
            return data;
        }, onSuccess: () => {
            queryClient.invalidateQueries('ATTRIBUTE_KEYS');
            toast.success('Xóa thành công');
        }
    })

    const removeAttribute = (id: any) => {
        const confirm = window.confirm('Bạn chắc chứ ?');
        if (confirm) {
            removeThisAttribute.mutate(id);
        }
    }

    if (isLoading) {
        return <div className="tw-w-full tw-flex tw-items-center tw-justify-center">
            <div className="tw-flex tw-flex-col tw-space-y-3">
                <Skeleton className="tw-h-[125px] tw-w-[250px] tw-rounded-xl" />
                <div className="tw-space-y-2">
                    <Skeleton className="tw-h-4 tw-w-[250px]" />
                    <Skeleton className="tw-h-4 tw-w-[200px]" />
                </div>
            </div>
        </div>;
    }

    if (isError) {
        return <div className="tw-w-full tw-flex tw-items-center tw-justify-center">
            <div className="tw-flex tw-flex-col tw-space-y-3">
                <Skeleton className="tw-h-[125px] tw-w-[250px] tw-rounded-xl" />
                <div className="tw-space-y-2">
                    <Skeleton className="tw-h-4 tw-w-[250px]" />
                    <Skeleton className="tw-h-4 tw-w-[200px]" />
                </div>
            </div>
        </div>;
    }

    const sizeName = (idSize: any) => {
        const data = sizes.find((item: any) => item._id == idSize);
        return data?.name;
    }

    // console.log(attributes)

    const invoices = Array.isArray(attributes) ? attributes.map((item: any) => ({
        _id: item._id,
        size: sizeName(item.size._id),
        color: item.color,
        price: item.price,
        pricesale: item.pricesale
    })) : [];

    return (
        <div className="container-table tw-w-full tw-p-5">
            <div className="tw-flex tw-justify-between tw-mb-6">
                <h1 className="tw-text-3xl">Manage Attribute</h1>
                <Button className=""><Link to={`/admin/products/attribute/add/${id}`}>Thêm thuộc tính</Link></Button>
            </div>
            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead className="tw-w-[100px]">STT</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Color</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Sale</TableHead>
                        <TableHead className="tw-text-right">Chức năng</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices?.map((item: any, index: number) => (
                        <TableRow key={index}>
                            <TableCell className="tw-font-medium">{index + 1}</TableCell>
                            <TableCell>{item.size}</TableCell>
                            <TableCell><div className="tw-w-1 tw-h-1 tw-p-4 tw-rounded-full" style={{ backgroundColor: item.color }}></div></TableCell>
                            <TableCell>{item.price}đ</TableCell>
                            <TableCell>{item.pricesale}đ</TableCell>
                            <TableCell className="tw-text-right">
                                <div>
                                    <Link to={`/admin/products/attribute/${item._id}/edit/${id}`}><Button variant="secondary">Sửa</Button></Link>
                                    <Button className="tw-ml-3" variant="destructive" onClick={() => removeAttribute(item._id)}>Xóa</Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>

    )
}

export default AttributePage