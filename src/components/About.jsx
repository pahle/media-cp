import { Container } from '@/components/Container'
import Image from 'next/image'
import backgroundAbout from '@/images/background-about.jpg'

const features = [
  {
    title: 'Kualitas Layanan Terbaik',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempus id, iaculis ut nisi',
  },
  {
    title: 'Ahli Dalam Bidangnya',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempus id, iaculis ut nisi.',
  },
  {
    title: 'Harga Terjangkau',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempus id, iaculis ut nisi.',
  },
  {
    title: 'Dipercaya Oleh Banyak Perusahaan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempus id, iaculis ut nisi.',
  },
]

export function About() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="ctaBg relative overflow-hidden bg-red-600 pb-28 pt-20 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Tentang Kami
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            elit, tristique quis tempus id, iaculis ut nisi.
          </p>
        </div>
        <div
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
        >
          <>
            <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
              <div className="relative z-10 flex-col gap-x-4 px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6"
                  >
                    <div className="font-display text-lg text-white ui-not-focus-visible:outline-none">
                      {feature.title}
                    </div>
                    <p className="mt-2 text-sm text-blue-100">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                {/* <Image
                  className="w-full"
                  src={backgroundAbout}
                  alt=""
                  priority
                  sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                /> */}
                <div className='h-[45rem] w-full flex justify-center items-center'>
                  image
                </div>
              </div>
            </div>
          </>
        </div>
      </Container>
    </section>
  )
}
