'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Clock, Scissors } from 'lucide-react'
import { WhatsappLogo } from "@phosphor-icons/react"
import Image from 'next/image'
import masculina1 from '../../../public/trança masculina.jpg'
import masculina2 from '../../../public/trança masculina2.jpg'
import masculina3 from '../../../public/trança masculina3.jpg'
import masculina4 from '../../../public/trança masculina4.jpg'
import masculina5 from '../../../public/trança masculina5.jpg'


const testimonials = [
    {
        img: masculina4,
        author: "Nome da cliente",
        image: masculina5,

    },

    {
        img: masculina4,
        author: "Nome da cliente",
        image: masculina5,

    },


    {
        img: masculina4,
        author: "Nome da cliente",
        image: masculina5,

    },

    {
        img: masculina4,
        author: "Nome da cliente",
        image: masculina5,

    },


]


export function Testimonials() {

    const [emblaRef, emblaApi] = useEmblaCarousel({

        loop: true
    })


    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }


    return (
        <section className="bg-[#191919] py-16">
            <div className="container mx-auto px-4">


                <div className="relative max-w-2xl mx-auto">

                    <h3 className="font-serif text-4xl text-white mb-12 flex align-text-center justify-center">Depoimentos</h3>

                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {testimonials.map((item, index) => (
                                <div key={index} className=' flex-[0_0_100%] min-w-0 px-3'>
                                    <article className='bg-black text-white rounded-2xl p-6 space-y-4 h-full 
                                   flex flex-col '>

                                        <div className='flex flex-col items-center justify-center text-center space-y-4'>
                                            <div className='relative w-24 h-24'>
                                                <Image
                                                    src={item.img}
                                                    alt='foto da pessoa'
                                                    fill
                                                    sizes='96px'
                                                    className='object-cover rounded-full'
                                                />
                                            </div>

                                            <div className='md:h-96 md:w-96 '>
                                                <Image
                                                    src={item.image}
                                                    alt='foto do depoimento'
                                                    className='select-none'
                                                />
                                            </div>

                                            <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                                <p className='font-bold font-serif'>{item.author}</p>
                                            </div>
                                        </div>

                                    </article>
                                </div>
                            ))}

                        </div>
                    </div>

                    <button className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 
                   -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer'
                        onClick={scrollPrev}
                    >
                        <ChevronLeft
                            className='w-6 h-6 text-black '
                        />
                    </button>

                    <button className='bg-white  flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 
                   -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer'
                        onClick={scrollNext}
                    >
                        <ChevronRight
                            className='w-6 h-6 text-black'
                        />
                    </button>

                </div>
            </div>

        </section>
    )

}

