'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight,} from 'lucide-react'

import Image from 'next/image'
import carla from '../../../public/carla.png'
import carla1 from '../../../public/carla1.jpg'
import bah from '../../../public/bah.png'
import bahtestemunho from '../../../public/bah1.jpg'
import chrisna from '../../../public/chrisna.png'
import chrisna1 from '../../../public/chrisna 1.jpg'
import dayane from '../../../public/dayane.png'
import dayane1 from '../../../public/dayane1.jpg'




const testimonials = [
    {
        img: carla,
        author: "Carla",
        image: carla1,

    },

    {
        img: bah,
        author: "Barbara",
        image: bahtestemunho,

    },


    {
        img: chrisna,
        author: "Cristina",
        image: chrisna1,

    },

    {
        img: dayane,
        author: "Dayane",
        image: dayane1,

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
        <section className="bg-black  py-16  max-h-1/2-50px">
            <div className="container  mx-auto px-4">


                <div className="relative ">

                    <h3 className="font-serif text-3xl text-white mb-12 flex align-text-center justify-center">Depoimentos</h3>

                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {testimonials.map((item, index) => (
                                <div key={index} className=' md:flex-[0_0_100%] min-w-0 px-3 md-flex md-items-center md-justify-center'>
                                    <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 
                                   flex flex-col'>

                                        <div className='flex flex-col items-center justify-center text-center space-y-4 h-full'>
                                            <div className='relative w-24 h-24'>
                                                <Image
                                                    src={item.img}
                                                    alt='foto da pessoa'
                                                    fill
                                                    
                                                    className='relative rounded-full'
                                                />
                                            </div>

                                            <div>
                                                <Image
                                                    src={item.image}
                                                    alt='foto do depoimento'
                                                    quality={100}
                                                    className='select-none container h-64'
                                                />
                                            </div>

                                        </div>

                                        <div className='border-t border-gray-700 pt-4'>
                                                <p className='font-bold font-serif'>{item.author}</p>
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

