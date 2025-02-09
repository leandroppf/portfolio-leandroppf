import Image from 'next/image'
import Link from 'next/link'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'

export default function Header() {
  return (
    <header className="flex w-full flex-col items-start pt-8 xl:sticky xl:top-0 xl:h-screen xl:max-w-[calc(1280px_*_0.4)] xl:py-16">
      <Image
        src="/brand.svg"
        alt="Portifolio brand"
        className="mb-8"
        width={40}
        height={40}
        priority
      />

      <h1 className="mb-4 text-secondary">Hi, my name is</h1>
      <h2 className="mb-8 text-4xl font-bold">Leandro Pedroso.</h2>
      <h3 className="max-w-md text-secondary">
        I’m a passionate Software Engineer from Brazil, specializing in building
        accessible and flawless digital experiences.
      </h3>

      <div id="social-media" className="mt-6 flex flex-row gap-4 xl:mt-auto">
        <Link
          href="https://github.com/leandroppf"
          aria-label="Leandro Pedroso Github link"
          target="_blank"
        >
          <GithubLogo
            size={40}
            alt="Github Link"
            className="rounded p-1 hover:bg-foreground active:opacity-90"
          />
        </Link>

        <Link
          href="https://www.linkedin.com/in/leandroppf"
          aria-label="Leandro Pedroso LinkedIn link"
          target="_blank"
        >
          <LinkedinLogo
            size={40}
            alt="LinkedIn Link"
            className="rounded p-1 hover:bg-foreground active:opacity-90"
          />
        </Link>
      </div>
    </header>
  )
}
