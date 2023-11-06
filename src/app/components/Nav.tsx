"use client";

import React from "react";
import Image
 from "next/image";
export default function Nav() {
    return (
        <nav className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white sm:bg-transparent shadow sm:shadow-none border-t-4 border-pink-600">
        <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
            <a href="{{ .Site.BaseURL }}" className="no-underline">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/donpack.jpg"
                alt="Donpack Logo"
                width={40}
                height={30}
                priority
                />
            </a>
            <button id="menuBtn" className="hamburger block sm:hidden focus:outline-none" type="button"  aria-label="Show Menu">
                <span className="hamburger__top-bun"></span><span className="hamburger__bottom-bun">
                </span>
            </button>
        </div>
        <div id="menu" className="w-full sm:w-auto self-end sm:self-center hidden sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0">
            <a className="text-gray-800 font-bold hover:text-pink-600 text-lg text-center w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1" href="/tienda">Tienda</a>
            <a className="text-gray-800 font-bold hover:text-pink-600 text-lg text-center w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1" href="{{ if .IsHome }}#features{{ else }}{{ .Site.BaseURL }}#features{{ end }}">Nosotros</a> 
        </div>
    </nav>)
}
