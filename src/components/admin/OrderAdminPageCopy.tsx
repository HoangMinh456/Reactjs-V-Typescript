
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
import { useState } from "react"
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
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "status",
        header: "Status",
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
        accessorKey: "Email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="tw-ml-2 tw-h-4 tw-w-4" />
                </Button>
            )
        },
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
            const queryClient = useQueryClient()
            const changeStatus = useMutation({
                mutationFn: async (item: any) => {
                    const { data } = await axios.put(`http://localhost:8080/api/order/change`, item);
                    return data;
                }, onSuccess: () => {
                    queryClient.invalidateQueries('ORDER_DATA_KEY');
                }
            })
            const handleChange = (value: any) => {
                console.log(value);
            }
            const { register, handleSubmit, ...rest } = useForm();
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="tw-h-8 tw-w-auto tw-p-0">
                            <span className="tw-sr-only">Open menu</span>
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
                            <Dialog>
                                <DialogTrigger className="tw-relative tw-w-full tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none tw-transition-colors focus:tw-bg-slate-100 focus:tw-text-slate-900 data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50 dark:focus:tw-bg-slate-800 dark:focus:tw-text-slate-50 hover:tw-bg-slate-100">
                                    Change status
                                </DialogTrigger>
                                <DialogContent className="tw-sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Change status</DialogTitle>
                                        <DialogDescription>
                                            Make changes to your status here. Click save when you're done.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <form onSubmit={handleSubmit((data) => handleChange(data))}>
                                        <div className="tw-grid tw-gap-4 tw-py-4">
                                            <div className="tw-grid tw-items-center tw-gap-4">
                                                {/* <Label htmlFor="name" className="tw-text-left">
                                                Status
                                            </Label> */}
                                                <input type="hidden" value={payment._id} {...register('idOrder')} />
                                                <Select>
                                                    <SelectTrigger className="tw-w-full">
                                                        <SelectValue placeholder="Select a status" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Status</SelectLabel>
                                                            {payment.status === "Chờ xác nhận"
                                                                ? <SelectItem value="Hủy">Hủy</SelectItem>
                                                                : <SelectItem disabled value="Hủy">Hủy</SelectItem>}

                                                            {payment.status === "Đóng gói" || payment.status === "Đang giao" || payment.status === "Hoàn thành" || payment.status === "Hủy"
                                                                ? <SelectItem disabled value="Chờ xác nhận">Chờ xác nhận</SelectItem>
                                                                : <SelectItem value="Chờ xác nhận">Chờ xác nhận</SelectItem>}

                                                            {payment.status === "Đang giao" || payment.status === "Hoàn thành" || payment.status === "Hủy"
                                                                ? <SelectItem disabled value="Đóng gói">Đóng gói</SelectItem>
                                                                : <SelectItem value="Đóng gói">Đóng gói</SelectItem>}

                                                            {payment.status === "Hoàn thành" || payment.status === "Hủy"
                                                                ? <SelectItem disabled value="Đang giao">Đang giao</SelectItem>
                                                                : <SelectItem value="Đang giao">Đang giao</SelectItem>}

                                                            <SelectItem value="Hoàn thành">Hoàn thành</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                                {/* <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                                        <div className="tw-grid tw-gap-4 tw-py-4">
                                            <div className="tw-grid tw-items-center tw-gap-4">
                                                <Label htmlFor="name" className="tw-text-left">
                                                    Status
                                                </Label>
                                                <input type="hidden" value={payment._id} {...register('idOrder')} />
                                                <div className="tw-grid tw-w-full tw-max-w-sm tw-items-center tw-gap-1.5 tw-mb-3">
                                                    <div>
                                                        <label className="select" htmlFor="status">
                                                            <select {...register('status')}>
                                                                <option value="0">Chọn danh mục</option>
                                                                <option value="Hủy">Hủy</option>
                                                            </select>
                                                            <svg>
                                                                <use xlinkHref="#select-arrow-down" />
                                                            </svg>
                                                        </label>
                                                        <svg className="sprites">
                                                            <symbol id="select-arrow-down" viewBox="0 0 10 6">
                                                                <polyline points="1 1 5 5 9 1" />
                                                            </symbol>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <Button>Save changes</Button>
                                        </DialogFooter>
                                    </form> */}
                                            </div>
                                        </div>
                                    </form>
                                    <DialogFooter>
                                        <Button>Save changes</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        }
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

export function DataTableDemo() {
    const { data } = useQuery({
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
                            value={(table.getColumn("Email")?.getFilterValue() as string) ?? ""}
                            onChange={(event) =>
                                table.getColumn("Email")?.setFilterValue(event.target.value)
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
