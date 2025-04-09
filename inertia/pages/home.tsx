import { Link } from '@inertiajs/react'
import Image from '../../resources/assets/tom.scherer.jpg'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Dialog, DialogPanel } from '@headlessui/react'

import Header from '~/app/components/header'

export default function Home() {
  return <Hero />
}

function Hero() {
  return (
    <div className="relative h-full w-full bg-neutral-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:150px_150px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="mb-20 overflow-hidden sm:mb-32 md:mb-40">
        <div className="px-4 sm:px-6 md:px-8">
          <Header />
          <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
            <h1 className="text-slate-100 font-medium text-5xl sm:text-6xl lg:text-7xl tracking-tight text-center scale-y-95">
              Développez rapidement vos projets avec T29.
            </h1>
            <p className="mt-6 text-lg text-slate-200 text-center max-w-3xl mx-auto scale-y-95">
              T29 vous propose des solutions sur mesure en combinant performance, design et
              accessibilité. Gagnez du temps avec notre expertise en développement moderne.
            </p>
            <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm"></div>
          </div>
        </div>
        <section className="text-center px-8 mt-20 sm:mt-32 md:mt-40">
          <h2 className="text-slate-100 text-4xl tracking-tight font-semibold sm:text-5xl scale-y-95">
            Les “bonnes pratiques” seules ne suffisent pas.
          </h2>
          <figure>
            <blockquote>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300 scale-y-95">
                On pense souvent qu'utiliser des conventions strictes rend le code plus simple. Mais
                chez T29, on pense surtout qu’il faut du pragmatisme et des outils adaptés à chaque
                projet. Venez découvrir une nouvelle manière d’aborder le web.
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left z-20">
              <img src={Image} alt="" className="w-14 h-14 rounded-full" />
              <div>
                <div className="text-slate-100 font-semibold">Tom Scherer</div>
                <div className="mt-0.5 text-sm leading-6 text-slate-300">Fondateur de T29</div>
              </div>
            </figcaption>
          </figure>
        </section>
      </div>
      <footer className="pb-16 text-sm leading-6">
        <div className="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8">
          <div className="mt-16 pt-10">
            <Logo />
          </div>
        </div>
      </footer>
    </div>
  )
}

const navigation = [
  { name: 'Documentation', href: '#' },
  { name: 'Composants', href: '#' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Headedr() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-200 font-medium text-base scale-y-95 leading-6">
      <Logo />
      <div className="flex items-center">
        <nav>
          <ul className="lg:flex hidden items-center gap-x-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-sky-500">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="fle lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <Logo />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-neutral-200"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-neutral-200 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </div>
  )
}

function Logo() {
  return (
    <svg width="56" height="25" viewBox="0 0 56 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.184 25L6.904 5.48H0.856L1.464 1.16H18.424L17.816 5.48H11.864L9.144 25H4.184ZM17.4563 25L17.8083 21.16L24.8802 14.504C25.9469 13.5013 26.8323 12.6587 27.5363 11.976C28.2403 11.272 28.7843 10.6747 29.1683 10.184C29.5736 9.69333 29.8509 9.256 30.0003 8.872C30.1709 8.46667 30.2563 8.05067 30.2563 7.624C30.2563 6.856 30.0109 6.26933 29.5203 5.864C29.0296 5.45867 28.3789 5.256 27.5683 5.256C26.6723 5.256 25.8616 5.52267 25.1363 6.056C24.4109 6.58933 23.8349 7.368 23.4083 8.392L19.1843 6.792C19.5896 5.55467 20.2189 4.488 21.0723 3.592C21.9256 2.696 22.9389 2.00267 24.1123 1.512C25.2856 1.02133 26.5443 0.775999 27.8883 0.775999C29.2749 0.775999 30.5229 1.04267 31.6323 1.576C32.7416 2.088 33.6163 2.824 34.2563 3.784C34.9176 4.72267 35.2483 5.84267 35.2483 7.144C35.2483 8.06133 35.0883 8.91467 34.7683 9.704C34.4696 10.4933 34.0643 11.2187 33.5522 11.88C33.0616 12.5413 32.5283 13.16 31.9523 13.736C31.3976 14.2907 30.8643 14.8027 30.3523 15.272L24.2723 20.84H34.1283L33.5522 25H17.4563ZM37.9118 25L47.0318 14.728L47.9918 15.848C47.6931 15.976 47.3944 16.0933 47.0958 16.2C46.8184 16.2853 46.5304 16.3493 46.2318 16.392C45.9544 16.4347 45.6451 16.456 45.3038 16.456C44.0451 16.456 42.9038 16.168 41.8798 15.592C40.8558 15.016 40.0451 14.2053 39.4478 13.16C38.8504 12.1147 38.5518 10.888 38.5518 9.48C38.5518 7.85867 38.9571 6.39733 39.7678 5.096C40.5784 3.77333 41.6771 2.728 43.0638 1.96C44.4718 1.17067 46.0398 0.775999 47.7678 0.775999C49.2611 0.775999 50.5944 1.08533 51.7678 1.704C52.9624 2.30133 53.9011 3.144 54.5838 4.232C55.2878 5.32 55.6398 6.61067 55.6398 8.104C55.6398 9.29867 55.4264 10.408 54.9998 11.432C54.5944 12.4347 54.0824 13.352 53.4638 14.184C52.8451 15.016 52.2371 15.7733 51.6398 16.456L44.1198 25H37.9118ZM46.7118 12.392C47.4584 12.392 48.1304 12.2107 48.7278 11.848C49.3251 11.4853 49.7944 11.0053 50.1358 10.408C50.4771 9.81067 50.6478 9.16 50.6478 8.456C50.6478 7.47467 50.3384 6.696 49.7198 6.12C49.1224 5.544 48.3651 5.256 47.4478 5.256C46.7224 5.256 46.0611 5.43733 45.4638 5.8C44.8664 6.16267 44.3971 6.64267 44.0558 7.24C43.7144 7.83733 43.5438 8.49867 43.5438 9.224C43.5438 10.2053 43.8424 10.984 44.4398 11.56C45.0584 12.1147 45.8158 12.392 46.7118 12.392Z"
        fill="black"
      />
    </svg>
  )
}
