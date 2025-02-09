import Link, { type LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface TextLinkProps extends LinkProps {
  children: ReactNode
}

export default function TextLink({ ...props }: TextLinkProps) {
  return (
    <Link
      {...props}
      className="relative inline-block leading-none text-primary outline-0 after:block after:h-[1px] after:w-0 after:bg-primary after:transition-[width] after:duration-300 hover:after:w-full"
      target="_blank"
    />
  )
}
