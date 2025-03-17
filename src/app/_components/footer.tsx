'use client'

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import esponjamagic from '../../../public/esponja magic fundo branco produto5.jpg'
import zhanghair from '../../../public/Logo-Zhang-Hair produto 1.png'
import dsbeaty from '../../../public/ds beaty produto 4.png'
import duchapeu from '../../../public/du chapeu hair produto2.png'
import theclass from '../../../public/the class produto 3.png'
import imperioblack from '../../../public/blackproduto 6.png'

const brands = [
    { name: "Império Black", logo: imperioblack },
    { name: "The Class", logo: theclass },
    { name: "Du Chapéu", logo: duchapeu },
    { name: "DS Beaty", logo: dsbeaty },
    { name: "Zhang Hair", logo: zhanghair },
    { name: "Esponja Magic", logo: esponjamagic },
]

export function Footer() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })

    useEffect(() => {
        if (!emblaApi) return;

        const autoplay = () => {
            emblaApi.scrollNext(); // Avança automaticamente
        };

        const interval = setInterval(autoplay, 1500); // Intervalo de 3 segundos
        return () => clearInterval(interval); // Limpa o intervalo
    }, [emblaApi])

    return (
        <section className='bg-[#373739] py-16 text-white'>
            <div className='container mx-auto px-4'>
                <div className='border-b border-black pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>
                    <div ref={emblaRef} className='overflow-hidden'>
                        <div className='flex'>
                            {brands.map((item, index) => (
                                <div key={index} className='flex-none w-[150px] mx-2'>
                                    <Image
                                        src={item.logo}
                                        alt={item.name}
                                        height={50}
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
