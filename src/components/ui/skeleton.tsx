import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("tw-animate-pulse tw-rounded-md tw-bg-slate-900/10 dark:tw-bg-slate-50/10", className)}
      {...props}
    />
  )
}

export { Skeleton }
