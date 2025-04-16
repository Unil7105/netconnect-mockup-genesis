
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 shadow-sm",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary/80 shadow-sm",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80 shadow-sm",
        outline: "text-foreground shadow-sm hover:bg-accent/50 hover:text-accent-foreground active:bg-accent/70",
        accent: "border-transparent bg-accent text-accent-foreground hover:bg-accent/90 active:bg-accent/80 shadow-sm",
        success: "border-transparent bg-green-500 text-white hover:bg-green-600 active:bg-green-700 shadow-sm",
        warning: "border-transparent bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700 shadow-sm",
        info: "border-transparent bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 shadow-sm",
        glass: "border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/10 backdrop-blur-md text-white dark:text-white/90 hover:bg-white/20 dark:hover:bg-black/20 shadow-[0_2px_10px_rgba(0,0,0,0.1)]",
      },
      size: {
        default: "h-5 px-2.5 py-0",
        sm: "h-4 px-1.5 py-0 text-[10px]",
        lg: "h-6 px-3 py-0 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
