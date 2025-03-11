import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-destructive/90 hover:bg-primary/90 ",
        destructive:
          "bg-destructive ml-4 focus:outline-none hover:border-destructive/90 text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        blue:"bg-blue-500 hover:bg-blue-600 mx-4 focus:outline-none ",
        green:"bg-[#00a8ff] hover:bg-[#0097e6] border-none hover:border-none mx-3 focus:outline-none text-white ",
        white:"bg-[#f5f6fa]   focus:outline-none focus:ring-0 focus:border-transparent  px-8 mx-auto hover:border-transparent",
        purple:"bg-gradient-to-r from-[#ba3213] to-[#a6b840cd]  transition-all  mr-4  focus:outline-none focus:ring-0 focus:border-transparent text-white hover:text-black text-[19px] w-full border-none hover:border-transparent hover:bg-[#16a085]",
        gradient:"bg-gradient-to-r from-[#44bd32] to-[#0097e6] mt-1  transition-all  mr-4  focus:outline-none focus:ring-0 focus:border-transparent hover:text-white text-black  text-[19px] w-full border-none hover:border-transparent hover:bg-[#16a085]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:"h-10 px-4 py-2",
        sm: "h-9 rounded-md",
        lg: "h-13 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
