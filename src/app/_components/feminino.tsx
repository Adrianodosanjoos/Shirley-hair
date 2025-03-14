'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Clock, Scissors} from 'lucide-react'
import { Image, WhatsappLogo } from "@phosphor-icons/react"
import { InstagramLogo } from "@phosphor-icons/react"
import trança1 from '../../../public/tranca feminina.jpg'
import trança2 from '../../../public/trança feminina2.jpg'
import trança3 from '../../../public/trança femina 3.jpg'
import trança4 from '../../../public/ponytail.jpg'
import trança5 from '../../../public/trança femina 4.jpg'
import trança6 from '../../../public/trança femina 5.jpg'
import trança7 from '../../../public/trança femina 6.jpg'
import trança8 from '../../../public/trança femina 7.jpg'
import trança9 from '../../../public/trança femina 8.jpg'
import trança10 from '../../../public/trança femina 9.jpg'
import trança11 from '../../../public/trança idosa.jpg'
import trança12 from '../../../public/trança idosa2.jpg'
import trança13 from '../../../public/trança idosa3.jpg'





const services = [
    {
        title: "Entrelace",
        image: trança1,
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },

    {
        title: "French Braids",
        image: trança2,
        duration: "7h a 4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },


    {
        title: "French Braids",
        image: trança3,
        duration: "7h a 4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },

    
    {
        title: "Ponytail",
        image: trança4,
        duration: "2h a 2h30",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },

    {
        title: "1",
        image: trança5,
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },

    {
        title: "2",
        image: trança6,
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },


    {
        title: "3",
        image: trança7,
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },

    
    {
        title: "4",
        image: trança8,
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },


    {
        title: "5",
        image: trança9,
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },

    {
        title: "6",
        image: trança10,
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },

    {
        title: "7",
        image: trança11,
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },

    {
        title: "8",
        image: trança12,
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },

    {
        title: "9",
        image: trança13,
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },
]







export function Services() {

       const [emblaRef, emblaApi] = useEmblaCarousel({
        loop:false,
        align:'start',
        slidesToScroll: 1,
        breakpoints: {
            '(min-width:768px)': { slidesToScroll: 3 }
        }
       })


        function scrollPrev(){
            emblaApi?.scrollPrev();
        }

        function scrollNext(){
            emblaApi?.scrollNext();
        }


    return (
     <section className="bg-black py-16">
        <div className="container mx-auto px-4">
            <h2 className="font-serif text-4xl text-white mb-12 flex align-text-center justify-center">Serviços</h2>
            
            <div className="relative">

                     <h3 className="font-serif text-3xl text-white mb-12 flex align-text-center justify-center">Tranças Femininas</h3>

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
                                                <img className='select-none' src={item.image.src}  alt={item.title} />
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                        <div className='flex items-center gap-2 text-sm'>
                                            <Clock className='w-4 h-4'/>
                                            <span>{item.duration}</span>
                                            </div>

                                            <a className='flex items-center justify-center gap-2 
                                            hover:bg-green-500 px-4 py-1 rounded-md duration-300 hover:text-[#1e293b]'
                                            href="#" target="_blank">
                                           <WhatsappLogo className="w-4 h-5"/>  Entrar em contato
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

