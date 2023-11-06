import Image from 'next/image';

export default function ProductsLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="">
        <nav className="bg-gray-600 text-white flex justify-between items-center p-4">
        <Image
          className="w-20 h-auto"
          src="/donpack.jpg"
          alt="Donpack Logo"
          width={180}
          height={37}
          priority
        />
        <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/productos" className="hover:text-gray-300">Productos</a></li>
            <li><a href="/sdsadas" className="hover:text-gray-300">Contacto</a></li>
        </ul>
    </nav>
   
        {children}
      </section>
    )
  }