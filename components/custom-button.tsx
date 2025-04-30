import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 custom-button",
  {
    variants: {
      variant: {
        default: "text-white",
        secondary: "before:from-secondary before:to-secondary/80 text-white",
        accent: "before:from-accent before:to-accent/80 text-white",
        outline:
          "border-2 border-primary text-primary before:opacity-0 hover:text-white hover:before:opacity-100",
        ghost: "before:opacity-0 text-primary hover:before:opacity-10",
        link: "before:hidden text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
      shape: {
        default: "rounded-xl",
        pill: "rounded-full",
        square: "rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, shape, asChild = false, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <span className="custom-button-content">{children}</span>
        )}
      </Comp>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton, buttonVariants };
