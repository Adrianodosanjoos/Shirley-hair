
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

                <div className="space-y-6 text-white">


                    <h2 className="text-4xl font-serif flex align-text-center justify-center mt-5">SOBRE</h2>

                   
                    <Image 
                    src={imgfundo}
                    alt="imgfundo"
                    className='object-contain opacity-50'
                    fill
                     />

                    <p>
                        estou aguardando seu texto gatona para eu colocar ele aqui. e com isso passamos para a proxima faze e para voce ver
                        quais fotos é para colocar nao lado para ficar em destaque espero que voce leia e me de o seu piriquito e um retorno rsrsrsr

                    </p>

                    <ul className="space-y-4">

                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Trancista Proficional desde XXXX
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

                    <a href="#" target="_blank"
                        className="bg-green-500 px-4 py-2 rounded-md font-semibold flex justify-center
                            hover:scale-110 duration-300 items-center w-fit gap-2">
                        <WhatsappLogo className='w-5 h-5' />
                        WhatsApp</a>

                    <a href="https://www.instagram.com/shirleibraids/" target="_blank"
                        className="bg-fuchsia-900 px-4 py-2 rounded-md font-semibold flex justify-center
                            hover:scale-110 duration-300 items-center w-fit gap-2">
                        <InstagramLogo className='w-5 h-5' />
                        Instagran</a>

                </div>

            </div>

        </section>
    )
}



