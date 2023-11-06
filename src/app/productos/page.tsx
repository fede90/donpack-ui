import Image from 'next/image';

export default function Products() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
      <main>
        
        <div className="flex gap-2 sm:gap-14 px-14 flex-col sm:flex-row">

          <div className="text-custom-1 text-center sm:text-left pt-10 sm:py-20 basis-1/2">
            <h1 className="uppercase text-4xl sm:text-7xl text-center sm:text-left text-black">Tienda</h1>
            <p className="text-lg my-10 text-black">Enamorate de los productos como nosotros haciendolo. Pensado para todo tipo de cliente!</p>
            <ul>
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>

            <div className='mt-10 sm:mt-[196px]'>
              <div className='h-auto max-w-full inline-block'>
              <Image
                  className="object-cover w-full group-hover:scale-110 transition duration-300 ease-in-out undefined"
                  src="/alfajores.png"
                  alt="Donpack Logo"
                  width={800}
                  height={800}
                  priority
                />
              </div>
            </div>
            <div className='mt-10 sm:mt-[196px]'>
              <div className='h-auto max-w-full inline-block'>
              <Image
                  className="object-cover w-full group-hover:scale-110 transition duration-300 ease-in-out undefined"
                  src="/bombon.png"
                  alt="Donpack Logo"
                  width={800}
                  height={800}
                  priority
                />
              </div>
            </div>
          </div>

          <div className="basis-1/2">
            <div className="mt-10 sm:mt-[196px]">
              <div className='h-auto max-w-full inline-block'>
                  <Image
                  className="object-cover w-full group-hover:scale-110 transition duration-300 ease-in-out undefined"
                  src="/budines.png"
                  alt="Donpack Logo"
                  width={800}
                  height={800}
                  priority
                />
              </div>
            </div>
            <div className="mt-10 sm:mt-[196px]">
              <div className='h-auto max-w-full inline-block'>
                  <Image
                  className="object-cover w-full group-hover:scale-110 transition duration-300 ease-in-out undefined"
                  src="/postres.png"
                  alt="Donpack Logo"
                  width={800}
                  height={800}
                  priority
                />
              </div>
            </div>
          </div>      
        </div>

      </main>
    )
  }