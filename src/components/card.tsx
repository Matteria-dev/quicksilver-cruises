import { clsx } from 'clsx'

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div 
      className={clsx(
        'rounded-2xl border-0 border-grey-200 bg-blue-100/10 dark:bg-dark-300 p-6 shadow-lg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}