import { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

interface NavigationLinkProps extends Omit<ComponentProps<'a'>, 'className'> {
  active?: boolean
}

export default function NavigationLink({
  active,
  ...props
}: NavigationLinkProps) {
  return (
    <a
      {...props}
      className={cn(
        'relative inline-block w-fit leading-none text-primary outline-0',
        'after:block after:h-[1px] after:w-0 after:bg-primary after:transition-[width] after:duration-300 hover:after:w-full',
        active ? 'after:w-full' : 'after:w-0',
      )}
    />
  )
}
