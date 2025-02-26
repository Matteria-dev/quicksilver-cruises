import { clsx } from 'clsx'
import React from "react";

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-linear-115 from-[#1bb7ea] from-28% to-[#2ab0a9] sm:bg-linear-145',
      )}
    />
  )
}
