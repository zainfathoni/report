import clsx from 'clsx'
import { createContext, useContext, useId } from 'react'

type DescriptionChildrenProps = {
  className?: string
  children: React.ReactNode
}
type DescriptionContextType = {
  orientation?: 'horizontal' | 'vertical'
  /* Only takes effect for vertical orientation */
  columns?: 1 | 2 | 3 | 4
  /* Only takes effect for horizontal orientation */
  justify?: 'between' | 'start'
}
type DescriptionProps = DescriptionChildrenProps & DescriptionContextType
type DescriptionItemContextType = {
  id?: string
}

const DescriptionContext = createContext<DescriptionContextType>({})

function useDescriptionContext() {
  const context = useContext(DescriptionContext)
  if (Object.keys(context).length === 0 || !context.orientation) {
    throw new Error(
      'Description compound components cannot be rendered outside the Description component'
    )
  }
  return context
}

const DescriptionItemContext = createContext<DescriptionItemContextType>({})

function useDescriptionItemContext() {
  const context = useContext(DescriptionItemContext)
  if (Object.keys(context).length === 0 || !context.id) {
    throw new Error(
      'Description.Term & Description.Detail compound components cannot be rendered outside the Description.Item component'
    )
  }
  return context
}

const vcols = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
}

const hcol = 'grid-cols-1'

function Description({
  className,
  children,
  orientation = 'vertical',
  columns = 1,
  justify = 'between',
}: DescriptionProps) {
  return (
    <DescriptionContext.Provider value={{ orientation, columns, justify }}>
      <dl
        className={clsx(
          'grid gap-x-4',
          orientation === 'vertical' ? 'gap-y-3' : 'gap-y-1',
          orientation === 'vertical' ? vcols[columns] : hcol,
          className
        )}
      >
        {children}
      </dl>
    </DescriptionContext.Provider>
  )
}

function Title({ className, children }: DescriptionChildrenProps) {
  return (
    <h4 className={clsx('text-7 text-grey-1 mt-3 font-bold', className)}>
      {children}
    </h4>
  )
}

function Item({ className, children }: DescriptionChildrenProps) {
  const id = useId()
  const { orientation, justify } = useDescriptionContext()
  return (
    <DescriptionItemContext.Provider value={{ id }}>
      <div
        className={clsx(
          'flex',
          orientation === 'horizontal'
            ? justify === 'start'
              ? 'justify-start'
              : 'justify-between'
            : 'flex-col gap-1',
          className
        )}
      >
        {children}
      </div>
    </DescriptionItemContext.Provider>
  )
}

function Term({
  className,
  children,
  bold = false,
}: DescriptionChildrenProps & { bold?: boolean }) {
  const { justify } = useDescriptionContext()
  const { id } = useDescriptionItemContext()
  return (
    <dt
      id={id}
      className={clsx(
        'text-7',
        bold ? 'text-grey-2 font-bold' : 'text-grey-3',
        justify === 'start' ? 'w-48 shrink-0' : null,
        className
      )}
    >
      {children}
    </dt>
  )
}

function Details({ className, children }: DescriptionChildrenProps) {
  const { id } = useDescriptionItemContext()
  return (
    <dd aria-labelledby={id} className={clsx('text-7 text-grey-1', className)}>
      {(typeof children === 'string' && children.length) || children
        ? children
        : '-'}
    </dd>
  )
}

export default Object.assign(Description, { Title, Item, Term, Details })
