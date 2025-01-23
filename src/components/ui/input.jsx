import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex  w-full  rounded-md border border-[#7f8c8d] bg-background px-3 py-2 text-base ring-offset-background file:border-0  file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500   focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-md",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
