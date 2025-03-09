import Image from "next/image"
import fotoInfantil1 from '../../../public/trança infantil6.jpg'
import fotoInfantil2 from '../../../public/trança infantil5.jpg'
export function Map () {
    return (
        <section className="bg-black py-16">
            <div className="container mx-auto grid-cols-1 lg:grid-cols-2 gap-12
            items-center">

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

            </div>

        </section>
    )
}