'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors} from 'lucide-react'
import { WhatsappLogo } from "@phosphor-icons/react"
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
]


export function Services() {

       const [emblaRef, emblaApi] = useEmblaCarousel({
        loop:false,
        align:'start',
        slidesToScroll: 1,
        breakpoints:{
            '(min-width:768px)': { slidesToScroll: 3,}
        }
       })

    return (
     <section className="bg-black py-16">
        <div className="container mx-auto px-4">
            <h2 className="font-serif text-4xl text-white mb-12 flex align-text-center justify-center">Serviços</h2>
            
            <div className="relative">

                <div className='overflow-hidden' ref={emblaRef}></div>

            </div>
        </div>
        
        </section>
    )
 
 }