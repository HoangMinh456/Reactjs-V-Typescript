
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { AnySoaRecord } from "dns"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"

type Payment = {
    _id: string,
    userId: string,
    items: [],
    customerInfo: {
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        address: string,
        city: string,
        note: string,
        payment: string,
        _id: string,
    },
    totalPrice: number,
    status: string,
}

export const columns: ColumnDef<Payment>[] = [
    // {
    //     id: "select",
    //     header: ({ table }) => (
    //         <Checkbox
    //             checked={
    //                 table.getIsAllPageRowsSelected() ||
    //                 (table.getIsSomePageRowsSelected() && "indeterminate")
    //             }
    //             onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //             aria-label="Select all"
    //         />
    //     ),
    //     cell: ({ row }) => (
    //         <Checkbox
    //             checked={row.getIsSelected()}
    //             onCheckedChange={(value) => row.toggleSelected(!!value)}
    //             aria-label="Select row"
    //         />
    //     ),
    //     enableSorting: false,
    //     enableHiding: false,
    // },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Status
                    <ArrowUpDown className="tw-ml-2 tw-h-4 tw-w-4" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div className="tw-capitalize">{row.getValue("status")}</div>
        ),
    },
    // {
    //     accessorKey: "Name",
    //     header: () => <div className="tw-text-left">Name</div>,
    //     cell: ({ row }) => {
    //         return <div className="tw-text-left">{row.original.customerInfo.firstName}</div>;
    //     },
    // },
    {
        accessorKey: "Phone",
        header: () => <div className="tw-text-left">Phone</div>,
        cell: ({ row }) => {
            return <div className="tw-text-left">{row.original.customerInfo.phone}</div>;
        },
    },
    {
        accessorKey: "customerInfo",
        header: () => <div className="tw-text-left">Email</div>,
        cell: ({ row }) => {
            return <div className="tw-lowercase">{row.original.customerInfo.email}</div>;
        },
    },
    {
        accessorKey: "Payment",
        header: () => <div className="tw-text-center">Payment</div>,
        cell: ({ row }) => {
            return <div className="tw-text-center">{row.original.customerInfo.payment}</div>;
        },
    },
    // {
    //     accessorKey: "createdAt",
    //     header: () => <div className="tw-text-right">Time</div>,
    //     cell: ({ row }) => {
    //         const dateObj = new Date(row.getValue('createdAt'));
    //         const day = dateObj.getUTCDate().toString().padStart(2, '0');
    //         const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0');
    //         const year = dateObj.getUTCFullYear();
    //         const formattedDate = `${day}-${month}-${year}`;
    //         return <div className="tw-text-right">{formattedDate}</div>;
    //     },
    // },
    {
        accessorKey: "totalPrice",
        header: () => <div className="tw-text-right">Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("totalPrice"))

            // Format the amount as a dollar amount
            const moneyVN = new Intl.NumberFormat("vi-VN").format(amount)

            return <div className="tw-text-right tw-font-medium">{moneyVN}đ</div>
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original
            // const { register, handleSubmit, ...rest } = useForm();
            const queryClient = useQueryClient()
            const changeStatus = useMutation({
                mutationFn: async (item: any) => {
                    const { data } = await axios.put(`http://localhost:8080/api/order/change`, item);
                    return data;
                }, onSuccess: () => {
                    toast.success("Thay đổi trạng thái thành công!");
                    queryClient.invalidateQueries('ORDER_DATA_KEY');
                    // navigate('/admin/order');
                }
            })
            // const onSubmit = (data: any) => {
            //     console.log(data);
            // }

            const form = useForm();
            const [value, setValue] = useState(payment._id);
            useEffect(() => {
                setValue(payment._id);
            }, [payment._id]);

            const onSubmit = (data: any) => {
                const item = {
                    ...data,
                    idOrder: value
                }
                changeStatus.mutate(item);
            }

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="tw-h-8 tw-w-auto tw-p-0">
                            {/* <span className="tw-sr-only">Open menu</span> */}
                            <MoreHorizontal className="tw-h-4 tw-w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment._id)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        {payment.status === "Hủy" || payment.status === "Hoàn thành"
                            ? null
                            :
                            // <Dialog>
                            //     <DialogTrigger className="tw-relative tw-w-full tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none tw-transition-colors focus:tw-bg-slate-100 focus:tw-text-slate-900 data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50 dark:focus:tw-bg-slate-800 dark:focus:tw-text-slate-50 hover:tw-bg-slate-100">
                            //         Change status
                            //     </DialogTrigger>
                            //     <DialogContent className="tw-sm:max-w-[425px]">
                            //         <DialogHeader>
                            //             <DialogTitle>Change status</DialogTitle>
                            //             <DialogDescription>
                            //                 Make changes to your status here. Click save when you're done.
                            //             </DialogDescription>
                            //         </DialogHeader>
                            //         <Form {...form}>
                            //             <form onSubmit={form.handleSubmit(onSubmit)} className="tw-w-full tw-space-y-6">
                            //                 <FormField
                            //                     control={form.control}
                            //                     name="status"
                            //                     render={({ field }) => (
                            //                         <FormItem>
                            //                             <Select onValueChange={field.onChange} defaultValue={field.value}>
                            //                                 <SelectTrigger className="tw-w-full">
                            //                                     <SelectValue placeholder="Select a status" />
                            //                                 </SelectTrigger>
                            //                                 <SelectContent>
                            //                                     <SelectGroup>
                            //                                         <SelectLabel>Status</SelectLabel>
                            //                                         {payment.status === "Chờ xác nhận"
                            //                                             ? <SelectItem value="Hủy">Hủy</SelectItem>
                            //                                             : <SelectItem disabled value="Hủy">Hủy</SelectItem>}

                            //                                         {payment.status === "Đóng gói" || payment.status === "Đang giao" || payment.status === "Hoàn thành" || payment.status === "Hủy"
                            //                                             ? <SelectItem disabled value="Chờ xác nhận">Chờ xác nhận</SelectItem>
                            //                                             : <SelectItem value="Chờ xác nhận">Chờ xác nhận</SelectItem>}

                            //                                         {payment.status === "Đang giao" || payment.status === "Hoàn thành" || payment.status === "Hủy"
                            //                                             ? <SelectItem disabled value="Đóng gói">Đóng gói</SelectItem>
                            //                                             : <SelectItem value="Đóng gói">Đóng gói</SelectItem>}

                            //                                         {payment.status === "Hoàn thành" || payment.status === "Hủy"
                            //                                             ? <SelectItem disabled value="Đang giao">Đang giao</SelectItem>
                            //                                             : <SelectItem value="Đang giao">Đang giao</SelectItem>}

                            //                                         <SelectItem value="Hoàn thành">Hoàn thành</SelectItem>
                            //                                     </SelectGroup>
                            //                                 </SelectContent>
                            //                             </Select>
                            //                             <FormMessage />
                            //                         </FormItem>
                            //                     )}
                            //                 />
                            //                 <DialogFooter>
                            //                     <DropdownMenuItem>
                            //                         <Button type="submit"> Save changes</Button>
                            //                     </DropdownMenuItem>
                            //                 </DialogFooter>
                            //             </form>
                            //         </Form>
                            //     </DialogContent>
                            // </Dialog>
                            <DropdownMenuItem><Link to={`/admin/order/change/${payment._id}`}>Change status</Link></DropdownMenuItem>
                        }
                        <DropdownMenuSeparator />
                        {/* <DropdownMenuItem>View customer</DropdownMenuItem> */}
                        <DropdownMenuItem><Link to={`/admin/order/${value}`}>View payment details</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu >
            )
        },
    },
]

export function DataTableDemo() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['ORDER_DATA_KEY'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/order`);
            return data;
        }
    })
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})

    const table = useReactTable({
        data: data ?? [],
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
    return (
        <>
            <div className="container-table tw-w-full tw-p-5">
                <div className="tw-flex tw-justify-between tw-mb-6">
                    <h1 className="tw-text-3xl">Manage Order</h1>
                </div>
                <div className="tw-w-full">
                    <div className="tw-flex tw-items-center tw-py-4">
                        <Input
                            placeholder="Filter emails..."
                            value={(table.getColumn("customerInfo")?.getFilterValue() as string) ?? ""}
                            onChange={(event) =>
                                table.getColumn("customerInfo")?.setFilterValue(event.target.value)
                            }
                            className="tw-max-w-sm"
                        />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="tw-ml-auto">
                                    Columns <ChevronDown className="tw-ml-2 tw-h-4 tw-w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {table
                                    .getAllColumns()
                                    .filter((column) => column.getCanHide())
                                    .map((column) => {
                                        return (
                                            <DropdownMenuCheckboxItem
                                                key={column.id}
                                                className="tw-capitalize"
                                                checked={column.getIsVisible()}
                                                onCheckedChange={(value) =>
                                                    column.toggleVisibility(!!value)
                                                }
                                            >
                                                {column.id}
                                            </DropdownMenuCheckboxItem>
                                        )
                                    })}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="tw-rounded-md tw-border">
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id}>
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )}
                                                </TableHead>
                                            )
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            data-state={row.getIsSelected() && "selected"}
                                        >
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id}>
                                                    {flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={columns.length}
                                            className="tw-h-24 tw-text-center"
                                        >
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-end tw-space-x-2 tw-py-4">
                        <div className="tw-flex-1 tw-text-sm tw-text-muted-foreground">
                            {table.getFilteredSelectedRowModel().rows.length} of{" "}
                            {table.getFilteredRowModel().rows.length} row(s) selected.
                        </div>
                        <div className="tw-space-x-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                Previous
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
