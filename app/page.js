'use client'

import { useState } from "react"
import Hero from "@/components/hero"
import AboutPreview from "@/components/about-preview"
import TeamPreview from "@/components/team-preview"
import ServicesPreview from "@/components/services-preview"
import Image from "next/image"

export default function HomePage() {
  // Partners data
  const partners = [
    { name: 'Waka Credit', logo: 'https://th.bing.com/th/id/OIP.WwH72oWinRhfw3LpztamfQHaB1?w=344&h=86&c=7&r=0&o=7&pid=1.7&rm=3' },
    { name: 'Intellifix Services', logo: 'https://th.bing.com/th/id/OIP.XzPDtSgWZ3dGilsKd93O0AHaHa?w=161&h=180&c=7&r=0&o=7&pid=1.7&rm=3' },
    { name: 'Mint MFB', logo: 'https://th.bing.com/th/id/OIP._e0ez13_GEZ5gh4165osLgHaE7?w=210&h=180&c=7&r=0&o=7&pid=1.7&rm=3' },
  ]

  // Clients data
  const clients = [
    { name: 'NDDC', logo: 'https://th.bing.com/th/id/OIF.OsHkvCPz87ZFc2IBtLsvTA?w=241&h=180&c=7&r=0&o=7&pid=1.7&rm=3g' },
    { name: 'Dover Engineering', logo: 'data:image/webp;base64,UklGRpAIAABXRUJQVlA4IIQIAAAQLQCdASp1AJYAPp1InUslpCYhpNVcsMATiU28ByC754pUvKkuDxbMLnxLJr+c7fPqd5nHqD81n8h/5nrkOGb9lekv+H7orCf+7/r3tx/qe9fa/3unVeNRmmq/NADxgf+Lzz8Lo+SdLkKs7z/M2DA0T1CRoFuCcbshPHRRgVPBe2FoYNHnG/cWMyNfhjUvQQxXEotrNrJ7j6n8j2eYfhiieWki4bIhPTUrvffgC6FVJHbhWxyWqNFf/b65trOLi5kgQZwlIdROzBxd3U+Vo3Vg0v6xeHL+LudOE7Vmn9MhPPp/mBUhgiSbU1Ek6pXmUNh+Fjqi2lNp8ky6vV0EyMdE+SgTKECxE0mfcD0QRHeD8v0kwy1QRSiZYJ0VG/PAixIOqAZblvX2kVY+mnUxgrDIewP3yvIOU5d0FeYrkgVjmcg7VDw4izww3aEu3xsvfKwy9ZfnYWVJrShngqNog9pmvRss2odrjAWEV29JY1NqfQAA/vtA8A0se22xsfJyFuxIXQwuwmVIZG137QvGWWUzft1Cs3byLlVmxfPFuBRpigqwIm/i2+vCoGDdrAvm9DWfDRvfaZ13K3O/sDzRAbURnaUn6HPScc1/kPrKMu+Z+KEtS9IdKok3+Ltg+vUPd0LGJyJ0m0aOnt/EVu6uFeBCNZFjJtb/ovbPJ4DEUsjvcK9L4Sd8EULZTaXyok57MU74Tq7GKVtH+xOLW2Lvzf4mBC6CgbyVk0gtUEpC/rzHfZOK4ocee1TBFL51UAWsBj6hOz2Xegv5+feWiFfoY5GwIVgl84Qc4bl5OlMiNpm4MGPmhOGhNndR16nnq933amEEbs5QyzYSR6f5+6GoL8Clrja+D5PvO4SbKB9gUgvqGMr0US1qUmeSNsDVvsjCxgEouVF0ZKFLJ2375ZsJcNlcYNZtOA4ti4z0Sf8pEsBAF4JnpRH5CT9s1L5xaQAnO1Z/ou9IX4kDyI3UiH1YIulyzN2cMuCmlbZpOL+G8xn3VNE0HhPeY0DYNXbBsDvdziFJwqcpa9I1aG7Q9iQ264vRNQ0q1QTABg9bFI8RojZ7MxfMON21mEEC2lOJ1maaCfAGebejZKo6tBhNxrEC+bejuiYGyH645Up4aNs57nmVQF3dTrr5BEZLfZBPWV4dYtWUB+bR7g9JwIiDcp712XZzEoOh8gkTDJtC7koeJkYcfRvE7oXrJZWjj/mUMbYR/rYV7UBJNNKLTO2F1wZ4Jtt7zGSGnH7Bu8ERxs+9Wo8TLLBiiolsXURL33RD3MS90zhqYTvi2LzWmMWdi3tXWjAwG5oY+JENC0GJKf2FaELWHBIaPOXVg+z28y4HEggEZ62EwsL9Q+ulZVuype9upPy49iQV7om0SWRO9YKqhcAHWqBAAyWp0PglUuSTL9EFh6UxHoUr6q9yCuoxFr0wV3S+NfIn4j/B53wlFavfPdP1pY1nmQ2S1EFtJFC8aIh6o9dMyVWOy4Z1LsQgWBCmcLW/+TLVu2t2lFQaXF/KfmXOgtBJME9Zf0y44sGVq+bATHWW2K15KwHDzT3Kbr6rAe1PpTTOpgKTfTbF4/4uFvYxtoVHd7oVAbAHNf1a2vnsOueGrFdStIcxKrM9IDMr9r7XpsYoKgcr8klcd1fmTs5kLeDUx/jWMuJw+6XsDLtebphGjaNj+vJgckEFYLnOEL4fpfZqQfnEo/Dpo3godfpc1cqRtkYP+fThfsaQPQlX7R3jJD7ifb1mtKHzeGxyFcAeDAgiMSCpxmUJH+AkiBiaE+gJwNICplXkgqSqS8X4Im/y793v8Hxmia2OONb2Se53VmwocVH+e9MXnj5abm4Z51OwaPmv0IhPALEVynDe9nAvHAGiYvRrfU/he7sYtePJZj8Mb4UN127YZaRIydFhLC0yAvJEgAMf6iG6Tw1EElc61I6DI6qm7xSUyUzR2t7iRh7lF3UXltu/tBuUXFEEjkhVWwE5MYzBMB5z9vL9m7iW+7WgkUyAYC4of1Mkj8GCrKlOAYkmv2Tvwnyn2jznpaKHaGg2fjnyl4SUg/e3Uqmc1jt3/Rr9OwVt6U1spOQTxMj5X3SIHStNmcDAOyelV78Ega7lSWMSFA15K4gkOy5195FMtXAURaOi0rNM/G+fPVCcAqQ1F/FodaTY/tu/2fDSn6B0C6wHbu93oCfJs93up+5mjj6nnN5GGGc4EXzb1i3r/AhvNoKBIMxBGUDR4fAcl6NMF0tefs3rsYAKeOQipSfJiMWkKXoNlRMG1U0PZsIB+7ZRGx4n1uN+HWa2kI+R2bfPGYAfx6aOtC4D2yhdyXvf9Ft54AbkUwn6yaWRTzf9rjn4bSakMc0ksr3KNHWO6lwysgkkL4yyaGN0fNah5hwHeIHXBERq9sP9K4WrZxZt2ha94IIcGcCGHQ92aI85sXBrL7gzo5PiQPOEUjOyWwG+Rf1+mSL07+illXm8bOAj9TmIOV9BmVnQPqDcSpLddxdSfsZmWH1LGVm8CX3r/XNm1wHiEZ/1VO4tcstKJRREpJUZq1/i433M7cv0xp00gFfSBRC6QcU1IxuIl57Bc69fHW7yCq7GBL76uWx6Ook6A/FjP/cQ+lwQKWe+X2TNXn8gj5DdLdJlS4Wm2vv3+OFukAXm+wOKzTOsRW49O/i/9Cw6eUJ82Afwl8AuS+Y9+NwhzYNoFw5t4sgOL8FXQNWhYDLic+f3OoUrwGvBp6ydQcUDN51xtvHLyVt4We7oniVB3ZHfEWeowR1w7JNyZ5L1FjcukBGkqVZMTlc09CJ1WHSjKwNx6KfunXUyyAP804vCZHpyUby3nfcSlc9XMhaoXRF6OvA4X/fUqd7UVXAHvuX+Vd124p1szzicGl2bSdzOjLoX249nrw2e62+jmyPTmlQpKpVkhkOT8RgRRC1gAA==' },
    { name: 'Signature Bank', logo: 'https://i.ibb.co/wNrV6sZy/IMG-20250716-WA0003.jpg'},
    { name: 'Globus Bank', logo: 'https://i.ibb.co/KvCpp2Z/download.png'},
    { name: 'Heirs Energy', logo: 'https://th.bing.com/th/id/OIP.zNRJHT2GYgRVucjwKGHkhwAAAA?w=292&h=62&c=7&r=0&o=7&pid=1.7&rm=3' },
    { name: 'SIms Nigeria', logo: 'https://th.bing.com/th/id/OIP.RH9JrVn0vK9xgTflEY-rcQHaCH?w=350&h=99&c=7&r=0&o=7&pid=1.7&rm=3' },
  ]

  return (
    <div className="overflow-hidden relative">
      <Hero />

      {/* Image Section */}
      <section className="pt-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-xl">At Baroque Variations</strong>, we believe that innovation is not just about technology—it's about reimagining
                how businesses operate, grow, and succeed in an ever-evolving marketplace.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our state-of-the-art facilities and collaborative environment foster creativity and excellence, enabling
                our team to deliver solutions that truly make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutPreview />
      <ServicesPreview />
      <TeamPreview />
      
      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center p-6 hover:scale-105 transition-transform duration-300">
                <div className="h-24 w-24 md:h-32 md:w-32 relative mb-4">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100px, 150px"
                  />
                </div>
                <p className="text-center font-medium">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
            {clients.map((client, index) => (
              <div key={index} className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300">
                <div className="h-20 w-20 md:h-24 md:w-24 relative mb-3">
                  <Image 
                    src={client.logo} 
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 80px, 100px"
                  />
                </div>
                <p className="text-center text-sm font-medium">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
