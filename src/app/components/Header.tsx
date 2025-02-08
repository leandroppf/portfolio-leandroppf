'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex h-16 w-full flex-row items-center px-8">
      <Image
        src="/brand.svg"
        alt="Portifolio brand"
        width={40}
        height={40}
        priority
      />
    </header>
  )
}
