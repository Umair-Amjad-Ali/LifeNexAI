import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variants: Record<string, string> = {
      default: "bg-primary text-white hover:opacity-90",
      outline: "border border-white/20 bg-transparent text-white hover:bg-white/5",
    };

    const sizes: Record<string, string> = {
      default: "h-10 px-5 py-2 text-sm rounded-lg",
      sm: "h-8 px-3 py-1 text-xs rounded-md",
      lg: "h-12 px-8 py-3 text-base rounded-xl",
    };

    return (
      <button
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
