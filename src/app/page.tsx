import Experience from '@/app/components/Experience'
import Header from '@/app/components/Header'
import TextLink from '@/app/components/TextLink'

export default function Home() {
  return (
    <div className="grid w-full max-w-7xl justify-start gap-8 px-6 md:px-12 xl:grid-cols-[4fr_6fr]">
      <Header />
      <main className="pb-12 xl:col-start-2 xl:pt-12">
        <section>
          <Experience />
        </section>

        <footer className="mt-10 inline-flex w-full items-center justify-center text-sm text-secondary">
          <p>
            {'Built with '}
            <TextLink href="https://nextjs.org/" aria-label="Next.js link">
              Next.js
            </TextLink>
            {' and '}
            <TextLink
              href="https://tailwindcss.com/"
              aria-label="Tailwind CSS link"
            >
              Tailwind CSS
            </TextLink>
            {', deployed with '}
            <TextLink href="https://vercel.com/" aria-label="Vercel link">
              Vercel
            </TextLink>
            {'. All text is set in the '}
            <TextLink
              href="https://github.com/tonsky/FiraCode"
              aria-label="Fira code link"
            >
              Fira code
            </TextLink>
            {' typeface.'}
          </p>
        </footer>
      </main>
    </div>
  )
}
