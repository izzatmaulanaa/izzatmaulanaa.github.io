import * as React from "react"
import Link from "next/link"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  href?: string
}

function baseClasses(variant: NonNullable<ButtonProps["variant"]>) {
  const base = "inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-background"
  if (variant === "outline") {
    return `${base} border border-border text-foreground hover:bg-card`
  }
  return `${base} bg-accent text-black hover:bg-yellow-300`
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", href, children, ...props }, ref) => {
    const cls = `${baseClasses(variant)} ${className}`
    if (href) {
      return (
        <Link href={href} className={cls}>
          {children}
        </Link>
      )
    }
    return (
      <button ref={ref} className={cls} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"
