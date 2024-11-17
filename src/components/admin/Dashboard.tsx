import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const Dashboard = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['ORDER_LIST'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:8080/api/order');
            return data;
        }
    })
    // console.log(data);
    const monthNames = [
        "T1", "T2", "T3", "T4",
        "T5", "T6", "T7", "T8",
        "T9", "T10", "T11", "T12"
    ];

    const chartData = monthNames.map((item: any) => {
        const dataFilter = data?.filter((order: any) => {
            return new Date(order.createdAt).getMonth() === monthNames.indexOf(item)
        })
        // console.log(dataFilter)
        return {
            month: item,
            desktop: dataFilter?.length !== 0 ? dataFilter?.map((item: any) => item.totalPrice).reduce((acc, item) => item = acc + item, 0) : 0
        }
    })

    const chartConfig = {
        desktop: {
            label: "Total",
            color: "#2563eb",
        },
    } satisfies ChartConfig

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
    return (
        <div className="container-table tw-w-full tw-p-5">
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                </BarChart>
            </ChartContainer>
        </div>
    )
}

export default Dashboard