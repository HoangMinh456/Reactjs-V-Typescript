import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"


const Dashboard = () => {
    return (
        <>
            <div className="tw-flex tw-flex-col tw-space-y-3 tw-justify-center tw-mx-auto">
                <Skeleton className="tw-h-[125px] tw-w-[250px] tw-rounded-xl" />
                <div className="tw-space-y-2">
                    <Skeleton className="tw-h-4 tw-w-[250px]" />
                    <Skeleton className="tw-h-4 tw-w-[200px]" />
                </div>
            </div>
        </>
    )
}

export default Dashboard
