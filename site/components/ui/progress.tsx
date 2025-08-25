import * as React from "react"

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
}

export function Progress({ value = 0, className = "", ...props }: ProgressProps) {
  const pct = Math.max(0, Math.min(100, value))
  return (
    <div className={`w-full h-2 rounded-full bg-border overflow-hidden ${className}`} {...props}>
      <div
        className="h-full bg-accent"
        style={{ width: `${pct}%` }}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        role="progressbar"
      />
    </div>
  )
}
