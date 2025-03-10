
import Image from "next/image"
import fotoInfantil1 from '../../../public/trança infantil6.jpg'
import fotoInfantil2 from '../../../public/trança infantil5.jpg'
import { Check } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr"
import imgfundo from '../../../public/new logo transparente.png'
export function About() {
    return (
        <section className="bg-black py-16">
            <div className="container mx-auto grid-cols-1 lg:grid-cols-2 gap-12
            items-center">

                <div className="relative">

                    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                        <Image
                            src={fotoInfantil1}
                            alt="fotoInfantil1"
                            fill
                            quality={100}
                            className="object-cover hover:scale-110 duration-300"
                            priority
                        />
                    </div>

                    <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 
                overflow-hidden border-black rounded-lg">
                        <Image
                            src={fotoInfantil2}
                            alt="fotoInfantil2"
                            fill
                            quality={100}

                            priority
                        />
                    </div>

                </div>

                <div className="space-y-6 text-white relative overflow-hidden">

                    <Image
                        src={imgfundo}
                        alt="imgfundo"
                        fill
                        priority
                        className='object-cover opacity-50 lg:max-w-xl lg:ml-117 lg:mt-2'

                    />

                    <h2 className="text-4xl font-serif flex align-text-center justify-center mt-8">Sobre Nós-Shirlei Braids</h2>


                    <p>
                        Na Shirlei Braids, entendemos que cada cliente é único, e acreditamos que seus cabelos devem refletir sua personalidade e estilo. Nossa equipe de profissionais altamente treinados é especializada em diversas técnicas de tranças e penteados, atendendo a diferentes culturas e preferências. Seja para um evento especial, uma ocasião diária ou simplesmente para realçar sua beleza natural, temos a solução perfeita para você.

                        Nosso compromisso vai além da estética. Valorizamos o atendimento ao cliente e a construção de relações duradouras. Aqui, você encontrará um ambiente acolhedor e amigável, onde cada cliente é tratado com carinho e respeito. Além disso, estamos sempre atualizados com as últimas tendências e inovações do setor, garantindo que você receba não apenas um serviço de alta qualidade, mas também uma experiência única.

                        Na Shirlei Braids, acreditamos que a beleza é uma forma de arte e nossa missão é ajudar você a se sentir confiante e linda. Venha nos visitar e descubra como podemos transformar suas ideias em realidade. Estamos ansiosos para lhe atender e fazer parte da sua jornada de beleza!

                        <br/> <b className="text-white">Shirlei Braids - onde sua beleza é nossa paixão.</b> 

                    </p>

                    <ul className="space-y-4">

                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Trancista Proficional há mais de 20 anos
                        </li>

                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Curso de transita para iniciante
                        </li>

                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Penteados Para noivas
                        </li>

                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Penteados Infantil
                        </li>

                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Mega Hair
                        </li>
                    </ul>

                    <div className="flex gap-4 relative">

                        <a href="#" target="_blank"
                            className="bg-green-500 px-4 py-2 rounded-md font-semibold flex justify-center
                            hover:scale-110 duration-300 items-center w-fit gap-2">
                            <WhatsappLogo className='w-5 h-5' />
                            WhatsApp</a>

                        <a href="https://www.instagram.com/shirleibraids/" target="_blank"
                            className="bg-[#833AB4] px-4 py-2 rounded-md font-semibold flex justify-center
                            hover:scale-110 duration-300 items-center w-fit gap-2">
                            <InstagramLogo className='w-5 h-5' />
                            Instagran</a>

                    </div>
                </div>

            </div>

        </section>
    )
}



