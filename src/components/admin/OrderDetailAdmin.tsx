import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Skeleton } from '../ui/skeleton';
import { Button } from '../ui/button';
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '../ui/table';
import { Textarea } from '../ui/textarea';
import { Switch } from '../ui/switch';
import { Label } from "@/components/ui/label"
import { Badge } from '../ui/badge';

const OrderDetailAdmin = () => {
    const { id } = useParams();
    const { isLoading, isError, data: products } = useQuery({
        queryKey: ['ORDER_DETAIL_KEY'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/order/${id}`);
            return data;
        }
    })

    const { data: tags } = useQuery({
        queryKey: ['TAGS_KEY'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:8080/api/tags');
            return data;
        }
    })

    const { data: category } = useQuery({
        queryKey: ['CATEGORY_KEY'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:8080/api/category');
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

    const getCatName = (id: any) => {
        const cat = category?.find((category: any) => category._id === id);
        // console.log(cat);
        return cat?.name;
    }

    const getTagName = (id: any) => {
        const tag: any = []
        id.map((item: any) => {
            const tagName = tags?.find((name: any) => name._id == item);
            tag.push(tagName?.name);
        })
        return tag;
    }

    const sizeName = (idSize: any) => {
        const data = sizes?.find((item: any) => item._id == idSize);
        return data?.name;
    }

    const invoices = Array.isArray(products?.items) ? products?.items?.map((item: any) => ({
        _id: item._id,
        name: item.name,
        color: item.color,
        size: sizeName(item.size),
        price: item.price,
        quantity: item.quantity,
        category: getCatName(item.category),
        tags: getTagName(item.tags),
        totalPrice: item.totalPrice
    })) : [];



    // console.log(products);

    return (
        <>
            <div className="container-table tw-w-full tw-p-5">
                <div className="tw-flex tw-justify-between tw-mb-6">
                    <h1 className="tw-text-3xl">Order Detail</h1>
                    <Button className=""><Link to={`/admin/order`}>Danh sách</Link></Button>
                </div>
                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="tw-w-[100px]">STT</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Tags</TableHead>
                            <TableHead>Size</TableHead>
                            <TableHead>Color</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead className="tw-text-right">Total</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices?.map((item: any, index: number) => (
                            <TableRow key={index}>
                                <TableCell className="tw-font-medium">{index + 1}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell className="tw-grid tw-grid-cols-2 tw-grid-flow-row-dense tw-gap-2 tw-w-40">
                                    {item.tags?.map((tag: any, index: number) => (<Badge className="tw-justify-center" key={index} variant="outline">{tag}</Badge>))}
                                </TableCell>
                                <TableCell>{item.size}</TableCell>
                                <TableCell>
                                    <div className='tw-w-1 tw-h-1 tw-p-3 tw-rounded-full' style={{ backgroundColor: item.color }}></div>
                                </TableCell>
                                <TableCell>{Intl.NumberFormat("vi-VN").format(item.price)}.000đ</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell className="tw-text-right">{(item.price * item.quantity)}.000đ</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={8}>Total</TableCell>
                            <TableCell className="tw-text-right">{Intl.NumberFormat("vi-VN").format(products?.totalPrice)}đ</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </>
    )
}

export default OrderDetailAdmin
