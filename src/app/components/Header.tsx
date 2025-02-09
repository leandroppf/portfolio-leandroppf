import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex w-full flex-col items-start py-16 xl:sticky xl:top-0 xl:h-screen xl:max-w-[calc(1280px_*_0.4)]">
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
      <h3 className="text-secondary">
        I’m a passionate Software Engineer from Brazil, specializing in building
        accessible and flawless digital experiences.
      </h3>
    </header>
  )
}
