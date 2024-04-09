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
import { Textarea } from "../ui/textarea"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import { Skeleton } from "../ui/skeleton"


export function TableDemo({ removeProduct }: any) {

    const queryClient = useQueryClient();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['CATEGORY_KEY'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:8080/api/category');
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

    const { data: products } = useQuery({
        queryKey: ['PRODUCTS_LISTS'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:8080/api/products');
            return data;
        }
    })

    // console.log(products);

    const onMode = useMutation({
        mutationFn: async (item: any) => {
            const { data } = await axios.get(`http://localhost:8080/api/products/${item._id}`);
            const pro = { ...data, checked: (!data.checked) }
            return await axios.put(`http://localhost:8080/api/products/${pro._id}`, pro);
        },
        onSuccess: () => {
            queryClient.invalidateQueries('PRODUCTS_LIST');
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
        const cat = data.find((category: any) => category._id === id);
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

    const invoices = Array.isArray(products) ? products.map((item: any) => ({
        _id: item._id,
        name: item.name,
        sale: item.sale,
        desc: item.desc,
        imagemain: item.imagemain,
        category: getCatName(item.category),
        tags: getTagName(item.tags),
        attribute: item.attribute,
        checked: item.checked
    })) : [];

    // const onMode = (e: any) => {
    //     const id = e._id;
    //     const products = { ...e, checked: (!e.checked) }
    //     console.log(products);
    // }

    // const onChangeMode = useMutation({
    //     mutationFn: async (id: any, product: any) => {
    //         const { data } = await axios.put(`http://localhost:8080/api/products/`)
    //     }
    // })

    // console.log(invoices[0]?.checked)

    return (
        <div className="container-table tw-w-full tw-p-5">
            <div className="tw-flex tw-justify-between tw-mb-6">
                <h1 className="tw-text-3xl">Manage Product</h1>
                <Button className=""><Link to={`/admin/products/add`}>Thêm sản phẩm</Link></Button>
            </div>
            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead className="tw-w-[100px]">STT</TableHead>
                        <TableHead>Tên</TableHead>
                        <TableHead>Danh mục</TableHead>
                        <TableHead>Ảnh</TableHead>
                        <TableHead>Thẻ tên</TableHead>
                        <TableHead>Mô tả</TableHead>
                        <TableHead>Sale</TableHead>
                        <TableHead className="tw-text-right">Chức năng</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices?.map((item: any, index: number) => (
                        <TableRow key={index}>
                            <TableCell className="tw-font-medium">{index + 1}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.category}</TableCell>
                            <TableCell><img className="tw-w-20 tw-h-20" src={item.imagemain[0]} alt="" /></TableCell>
                            {/* <TableCell><Textarea value={item.tags} disabled className="tw-max-h-5" /></TableCell> */}
                            <TableCell className="tw-grid tw-grid-cols-2 tw-grid-flow-row-dense tw-grid-rows- tw-gap-2">{item.tags?.map((tag: any, index: number) => (<Badge className="tw-justify-center" key={index} variant="outline">{tag}</Badge>))}</TableCell>
                            <TableCell><Textarea value={item.desc} disabled className="tw-max-h-5" /></TableCell>
                            <TableCell>
                                <div className="tw-flex tw-items-center tw-space-x-2 tw-my-2">
                                    <Switch defaultChecked={item.checked} id={item._id} onClick={() => onMode.mutate(item)} />
                                    <Label htmlFor={item._id}>{item.sale}%</Label>
                                </div>
                            </TableCell>
                            <TableCell className="tw-text-right">
                                <div className="tw-mb-2">
                                    <Link to={`/admin/products/${item._id}/edit`}><Button variant="secondary">Sửa</Button></Link>
                                    <Button className="tw-ml-3" variant="destructive" onClick={() => removeProduct(item._id)}>Xóa</Button>
                                </div>
                                <div>
                                    <Link to={`/admin/products/attribute/${item._id}`}><Button variant="secondary">Thuộc tính</Button></Link>
                                </div>
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