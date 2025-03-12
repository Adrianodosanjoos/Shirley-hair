'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors} from 'lucide-react'
import { Image, WhatsappLogo } from "@phosphor-icons/react"
import { InstagramLogo } from "@phosphor-icons/react"
import trança1 from '../../../public/tranca feminina.jpg'

const services = [
    {
        title: "Trança feminina",
        image: trança1,
        description: 'trancas femininas com produtos e e equipamentos de qualidade e com um atendimento humanizados e respeitoso',
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },

    {
        title: "Trança feminina",
        image: trança1,
        description: 'trancas femininas com produtos e e equipamentos de qualidade e com um atendimento humanizados e respeitoso',
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },


    {
        title: "Trança feminina",
        image: trança1,
        description: 'trancas femininas com produtos e e equipamentos de qualidade e com um atendimento humanizados e respeitoso',
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },

    
    {
        title: "Trança feminina",
        image: trança1,
        description: 'trancas femininas com produtos e e equipamentos de qualidade e com um atendimento humanizados e respeitoso',
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },

    {
        title: "Trança feminina",
        image: trança1,
        description: 'trancas femininas com produtos e e equipamentos de qualidade e com um atendimento humanizados e respeitoso',
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },

    {
        title: "Trança feminina",
        image: trança1,
        description: 'trancas femininas com produtos e e equipamentos de qualidade e com um atendimento humanizados e respeitoso',
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },


    {
        title: "Trança feminina",
        image: trança1,
        description: 'trancas femininas com produtos e e equipamentos de qualidade e com um atendimento humanizados e respeitoso',
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },

    
    {
        title: "Trança feminina",
        image: trança1,
        description: 'trancas femininas com produtos e e equipamentos de qualidade e com um atendimento humanizados e respeitoso',
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },


    {
        title: "Trança feminina",
        image: trança1,
        description: 'trancas femininas com produtos e e equipamentos de qualidade e com um atendimento humanizados e respeitoso',
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },

    {
        title: "Trança feminina",
        image: trança1,
        description: 'trancas femininas com produtos e e equipamentos de qualidade e com um atendimento humanizados e respeitoso',
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },


    {
        title: "Trança feminina",
        image: trança1,
        description: 'trancas femininas com produtos e e equipamentos de qualidade e com um atendimento humanizados e respeitoso',
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },

    
    {
        title: "Trança feminina",
        image: trança1,
        description: 'trancas femininas com produtos e e equipamentos de qualidade e com um atendimento humanizados e respeitoso',
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },

    {
        title: "Trança feminina",
        image: trança1,
        description: 'trancas femininas com produtos e e equipamentos de qualidade e com um atendimento humanizados e respeitoso',
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },

    {
        title: "Trança feminina",
        image: trança1,
        description: 'trancas femininas com produtos e e equipamentos de qualidade e com um atendimento humanizados e respeitoso',
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },


    {
        title: "Trança feminina",
        image: trança1,
        description: 'trancas femininas com produtos e e equipamentos de qualidade e com um atendimento humanizados e respeitoso',
        duration: "4h",
        price: 'Privado',
        icon: <Scissors/>,
        linkText:'Olá, vi no site sobre seu trabalho gostaria de mais informações.'
       
    },

    
    {
        title: "Trança feminina",
        image: trança1,
        description: 'trancas femininas com produtos e e equipamentos de qualidade e com um atendimento humanizados e respeitoso',
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

                                        <div className=' gap-4'>
                                            <span className='text-3xl'>{item.icon}</span>
                                            <div>
                                                <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                                                <img className='select-none' src={item.image.src}  alt={item.title} />
                                                
                                            </div>
                                        </div>
                                    </div>
                                          
                                   </article>
                               </div>
                        ))}

                    </div>
                </div>

            </div>
        </div>
        
        </section>
    )
 
 }