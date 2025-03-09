import { WhatsappLogo, InstagramLogo } from '@phosphor-icons/react/dist/ssr'
import logoImg from '../../../public/foto de perfil.jpg'
import bg from '../../../public/new logo transparente.png'
import logo2 from '../../../public/logo transparente.png'
import Image from 'next/image'


export function Hero() {
    return (
        <section className="bg-[#000000] text-white relative overflow-hidden">

            <div>
                <Image
                src={logoImg}
                alt='foto logo'
                fill
                sizes='100vw'
                priority
                className='object-cover opacity-50 lg:hidden'

                />
            </div>

            <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>

            <Image
                src={bg}
                alt='logo'
                className='object-contain opacity-50'
                fill
            />

            <div className='container mx-auto pt-10 pb-10 md:pb-0 px-4 relative'>

                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8 relative'>

                    <div className='space-y-6'>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">
                            Shirlei Nátali
                        </h1>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif">
                            BraidsDesigner
                        </h2>
                        <p className="lg:text-lg">
                            Tranças, todos os tipos de penteados p/noivas, Entrelaçamento/Nó Italiano, Colagem e restauração de laces e wigs Cursos e mentorias, vendas de produtos e acessórios p/cabelo.
                        </p>

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


                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                Na linguagem Bantu, Trança significa ser <b className="text-white">Feliz</b>!
                            </p>
                            <div className='flex mt-4'>
                                <div className='w-35 ml-10'>
                                    <Image
                                    src={logo2}
                                    alt='small logo'
                                    className='object-fill hover:scale-110 duration-300'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='hidden md:block h-full relative'>
                        <Image
                            src={logoImg}
                            alt='logo'
                            className='object-contain'
                            fill
                            sizes='(max-width: 768px) 0 px, 50vw'
                            quality={100}
                            priority
                        />
                    </div>

                </article>

            </div>

        </section>
    )
}