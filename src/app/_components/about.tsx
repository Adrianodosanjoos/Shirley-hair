
import Image from "next/image"
import fotoInfantil1 from '../../../public/trança infantil6.jpg'
import fotoInfantil2 from '../../../public/trança infantil5.jpg'
export function About () {
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
            </div>

        </section>
    )
}



