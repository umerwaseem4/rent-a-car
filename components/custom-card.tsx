import * as React from "react"
import { cn } from "@/lib/utils"

const CustomCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { gradient?: "primary" | "secondary" | "accent" | "none" }
>(({ className, gradient = "primary", ...props }, ref) => {
  const gradientClasses = {
    primary: "before:from-primary/20 before:to-primary/5 after:from-primary/10 after:to-primary/0",
    secondary: "before:from-secondary/20 before:to-secondary/5 after:from-secondary/10 after:to-secondary/0",
    accent: "before:from-accent/20 before:to-accent/5 after:from-accent/10 after:to-accent/0",
    none: "before:hidden after:hidden",
  }

  return <div ref={ref} className={cn("custom-card p-6 shadow-md", gradientClasses[gradient], className)} {...props} />
})
CustomCard.displayName = "CustomCard"

const CustomCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex flex-col space-y-1.5", className)} {...props} />,
)
CustomCardHeader.displayName = "CustomCardHeader"

const CustomCardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
)
CustomCardTitle.displayName = "CustomCardTitle"

const CustomCardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
)
CustomCardDescription.displayName = "CustomCardDescription"

const CustomCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("pt-4", className)} {...props} />,
)
CustomCardContent.displayName = "CustomCardContent"

const CustomCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center pt-4", className)} {...props} />,
)
CustomCardFooter.displayName = "CustomCardFooter"

export { CustomCard, CustomCardHeader, CustomCardTitle, CustomCardDescription, CustomCardContent, CustomCardFooter }
