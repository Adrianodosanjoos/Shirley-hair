
import Image from 'next/image'
import esponjamagic from '../../../public/esponja magic fundo branco produto5.jpg'
import zhanghair from '../../../public/Logo-Zhang-Hair produto 1.png'
import dsbeaty from '../../../public/ds beaty produto 4.png'
import duchapeu from '../../../public/du chapeu hair produto2.png'
import theclass from '../../../public/the class produto 3.png'
import imperioblack from '../../../public/ Império Black produto 6.png'


const brands = [
    {name:"Império Black", logo: imperioblack },
    {name:"marca do produto", logo: theclass },
    {name:"Du Chapéu", logo: duchapeu },
    {name:"DS Beaty", logo: dsbeaty },
    {name:"Zhang Hair", logo: zhanghair },
    {name:"Esponja Magic", logo: esponjamagic },
]

export function Footer() {
    return (
        <section className='bg-[#373739] py-16 text-white'>
                   <div className='container mx-auto px-4'>

                        <div className='border-b  border-black pb-8'>
                            <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>

                                <div  className='flex gap-2 md:items-center md:content-center'>
                                    {brands.map((item, index) => (
                                        <div key={index}>
                                    <Image
                                     src={item.logo}
                                     alt={item.name}
                                     height={50}
                                     className="object-contain"
                                     />
                                     </div>
                                    ))}
                                </div>

                        </div>

                   </div>
        </section>
    )
}