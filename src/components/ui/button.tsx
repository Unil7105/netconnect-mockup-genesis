
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md active:bg-primary/85 active:scale-[0.98] active:shadow-sm",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md active:bg-destructive/85 active:scale-[0.98] active:shadow-sm",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:shadow-md active:bg-accent/90 active:scale-[0.98] active:shadow-sm",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90 hover:shadow-md active:bg-secondary/85 active:scale-[0.98] active:shadow-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground active:bg-accent/90 active:scale-[0.98]",
        link: "text-primary underline-offset-4 hover:underline focus-visible:underline",
        glass: "backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 text-white dark:text-white/90 shadow-glass hover:bg-white/20 dark:hover:bg-black/20 hover:shadow-glass-hover active:scale-[0.98] active:shadow-glass",
        'glass-primary': "backdrop-blur-md bg-primary/20 text-primary-foreground border border-primary/30 shadow-glass hover:bg-primary/30 hover:shadow-glass-hover active:scale-[0.98] active:shadow-glass",
        'glass-secondary': "backdrop-blur-md bg-secondary/20 text-secondary-foreground border border-secondary/30 shadow-glass hover:bg-secondary/30 hover:shadow-glass-hover active:scale-[0.98] active:shadow-glass",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        'icon-sm': "h-8 w-8 rounded-full",
      },
      animation: {
        none: "",
        pulse: "animate-pulse-gentle",
        bounce: "hover:animate-bounce-subtle active:animate-none",
        ping: "hover:animate-ping-slow active:animate-none",
        float: "hover:animate-float active:animate-none",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animation, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, animation, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
