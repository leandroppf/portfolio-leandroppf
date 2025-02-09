import Experience from '@/app/components/Experience'
import Header from '@/app/components/Header'

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-12">
      <Header />
      <main className="grid w-full max-w-7xl grid-rows-1 justify-start gap-8 px-12 xl:grid-cols-[4fr_6fr]">
        <section className="xl:fixed xl:max-w-[calc(1280px_*_0.4)]">
          <h1 className="mb-4 text-secondary">Hi, my name is</h1>
          <h2 className="mb-8 text-4xl font-bold">Leandro Pedroso.</h2>
          <h3 className="text-secondary">
            I’m a passionate Software Engineer from Brazil, specializing in
            building accessible and flawless digital experiences.
          </h3>
        </section>

        <section className="xl:col-start-2">
          <Experience />
        </section>

        <footer className="h-16"></footer>
      </main>
    </div>
  )
}
