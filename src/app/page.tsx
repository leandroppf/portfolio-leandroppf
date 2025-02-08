import Header from '@/app/components/Header'

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-12">
      <Header />
      <main className="mx-16 flex w-full max-w-6xl flex-col items-start justify-center gap-1 xl:m-auto">
        <p className="text-secondary">Hi, my name is</p>
        <h1 className="text-4xl font-bold">Leandro Pedroso.</h1>
      </main>
    </div>
  )
}
