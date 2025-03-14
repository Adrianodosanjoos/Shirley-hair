'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Clock, Scissors } from 'lucide-react'
import { Image, WhatsappLogo } from "@phosphor-icons/react"
import { InstagramLogo } from "@phosphor-icons/react"
import masculina1 from '../../../public/trança masculina.jpg'
import masculina2 from '../../../public/trança masculina2.jpg'
import masculina3 from '../../../public/trança masculina3.jpg'
import masculina4 from '../../../public/trança masculina4.jpg'
import masculina5 from '../../../public/trança masculina5.jpg'


const services = [
    {
        title: "Twist",
        image: masculina1,
        duration: "4h a 5h",
        price: 'Privado',
        icon: <Scissors />,
        linkText: 'Olá, vi no site sobre seu trabalho gostaria de mais informações.'

    },

    {
        title: "Twist",
        image: masculina2,
        duration: "4h a 5h",
        price: 'Privado',
        icon: <Scissors />,
        linkText: 'Olá, vi no site sobre seu trabalho gostaria de mais informações.'

    },

    {
        title: "Nagô masculina",
        image: masculina3,
        duration: "1h30 a 2h",
        price: 'Privado',
        icon: <Scissors />,
        linkText: 'Olá, vi no site sobre seu trabalho gostaria de mais informações.'

    },


    {
        title: "Nagô masculina",
        image: masculina4,
        duration: "1h30 a 2h",
        price: 'Privado',
        icon: <Scissors />,
        linkText: 'Olá, vi no site sobre seu trabalho gostaria de mais informações.'

    },

    {
        title: "1",
        image: masculina5,
        duration: "1h30 a 2h",
        price: 'Privado',
        icon: <Scissors />,
        linkText: 'Olá, vi no site sobre seu trabalho gostaria de mais informações.'

    },



]


export function Testimonials() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
      
       
    })


    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }


    return (
        <section className="bg-black py-16">
            <div className="container mx-auto px-4">


                <div className="relative">

                    <h3 className="font-serif text-3xl text-white mb-12 flex align-text-center justify-center">Tranças Masculinas</h3>

                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index) => (
                                <div key={index} className=' flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>
                                    <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full 
                                   flex flex-col '>
                                        <div className='flex-1 items-start justify-between'>

                                            <div className='flex gap-3'>
                                                <span className='text-3xl'>{item.icon}</span>
                                                <div>
                                                    <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                                                    <img className='select-none' src={item.image.src} alt={item.title} />

                                                </div>
                                            </div>
                                        </div>

                                        <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                            <div className='flex items-center gap-2 text-sm'>
                                                <Clock className='w-4 h-4' />
                                                <span>{item.duration}</span>
                                            </div>

                                            <a className='flex items-center justify-center gap-2 
                                            hover:bg-green-500 px-4 py-1 rounded-md duration-300 hover:text-[#1e293b]'
                                                href="#" target="_blank">
                                                <WhatsappLogo className="w-4 h-5" />  Entrar em contato
                                            </a>
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

