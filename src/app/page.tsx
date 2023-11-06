import Image from 'next/image';
import Nav from './components/Nav'
export default function Home() {
  return (
    <main className="header w-full min-h-screen flex flex-col justify-between">
      <Nav />
    <div className="flex flex-col justify-center h-full py-12">
      <div className="self-center items-center flex flex-col sm:flex-row w-full md:w-5/6 xl:w-5/6 px-4 sm:px-0">
        <div className="w-full text-center sm:text-left sm:w-1/2 py-12 sm:px-8">
            <h1 className="tracking-wide text-pink-600 text-2xl mb-6">Packaging: 
              <span className="text-gray-800 font-bold tracking tracking-widest">
                DON PACK
              </span>
            </h1>
            <h2 className="font-bold tracking-widest text-4xl">Porque lo de afuera</h2>
            <span className="content__container block font-light text-browngray text-2xl my-6">
                    <ul className="content__container__list">
                        <li className="content__container__list__item xl:pl-3">Diseño personalizado</li>
                        <li className="content__container__list__item xl:pl-3">Amplio Stock</li>
                        <li className="content__container__list__item xl:pl-3">Fabricantes</li>
                        <li className="content__container__list__item xl:pl-3">Mayoristas</li>
                        <li className="content__container__list__item xl:pl-3">Minoristas</li>
                    </ul>
                </span>
            <p className="font-bold tracking-widest text-4xl">también es importante!</p>
        </div>
        <div className="w-full sm:w-1/2">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/friends.svg"
            alt="Donpack Logo"
            width={500}
            height={326}
            priority
          />
        </div>
      </div>

      <div className="flex flex-row w-full justify-center pb-12">
          <a className="px-10 py-2 text-gray-200 bg-pink-600 rounded-full shadow-md text-lg hover:bg-gray-800 hover:border-red" href="/tienda">Mirá nuestro catálogo!</a>
      </div>
    </div>

    <p>Inspired by https://www.tailwindawesome.com/resources/hugo-landing-page/demo</p>

    </main>
  );
}
