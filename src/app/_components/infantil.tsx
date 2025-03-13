import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Clock, Scissors} from 'lucide-react'
import { Image, WhatsappLogo } from "@phosphor-icons/react"
import trança1 from '../../../public/trança infantil5.jpg'


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







export function Infantil() {

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