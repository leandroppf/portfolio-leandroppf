import Experience from '@/app/components/Experience'
import Header from '@/app/components/Header'

export default function Home() {
  return (
    <div className="grid w-full max-w-7xl justify-start gap-8 px-12 xl:grid-cols-[4fr_6fr]">
      <Header />
      <main className="xl:col-start-2">
        <section>
          <Experience />
        </section>

        <footer className="h-16"></footer>
      </main>
    </div>
  )
}
