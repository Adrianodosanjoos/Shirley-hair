import { WhatsappLogo, InstagramLogo } from '@phosphor-icons/react/dist/ssr'
import logoImg from '../../../public/shirlei foto transparente.png'
import bg from '../../../public/logo transparente.png'
import Image from 'next/image'


export function Hero() {
    return (
        <section className="bg-[#000000] text-white relative overflow-hidden ">

            <div className='object-cover inset-1 md:hidden z-10'>

                <Image
                    src={logoImg}
                    alt='logo'
                    className='object-contain opacity-50'
                    fill
                    sizes='100vw'
                    quality={100}
                     data-aos="fade-up-left"
                />
            </div>

            <div className='z-0'>
                <Image
                    src={bg}
                    alt='foto logo'
                    fill
                    sizes='100vw'
                    quality={100}
                    className='object-contain  opacity-10 lg:max-w-xl lg:opacity-30 lg:ml-117 lg:mt-2'

                />
            </div>



            <div className='container mx-auto pt-10 pb-10 md:pb-0 px-4 relative'>


                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8 relative'>


                    <div className='space-y-6'data-aos="fade-up-right">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif flex align-text-center justify-center">
                            Shirlei Nátali
                        </h1>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif flex align-text-center justify-center" data-aos="fade-up-left">
                            BraidsDesigner
                        </h2>
                        <p className="lg:text-lg" data-aos="fade-up-right">
                            <b className="text-white">Bem-vindo à Shirlei Braids!</b>
                            <br />  Somos uma empresa dedicada à arte de tranças e penteados,
                            localizada no coração da comunidade. Com uma paixão profunda
                            pela beleza e pela individualidade, nossa missão é oferecer um espaço
                            onde a criatividade e a autoexpressão se encontram.
                        </p>

                        <a href={`https://wa.me/5511940556067?text=
                            Óla Shirlei vim pelo site e gostaria de saber mais sobre o seu trabalho`}  target="_blank"
                            className="bg-green-500 px-4 py-2 rounded-md font-semibold flex justify-center
                            hover:scale-110 duration-300 items-center w-fit gap-2">
                            <WhatsappLogo className='w-5 h-5'  data-aos="fade-up-left"/>
                            WhatsApp</a>

                        <a href="https://www.instagram.com/shirleibraids/" target="_blank"
                            className="bg-[#833AB4] px-4 py-2 rounded-md font-semibold flex justify-center
                            hover:scale-110 duration-300 items-center w-fit gap-2">
                            <InstagramLogo className='w-5 h-5'  data-aos="fade-up-right"/>
                            Instagram</a>


                        <div className="mt-8">
                            <p className="text-sm mb-4"  data-aos="fade-up-left">
                                Na linguagem Bantu, Trançar significa ser <b className="text-white">Feliz</b>!
                            </p>
                            <div className='flex mt-4' data-aos="fade-up-right">
                                <div className='w-35 ml-10'>
                                    <Image
                                        src={bg}
                                        alt='small logo'
                                        className='object-fill hover:scale-110 duration-300' />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='hidden md:block h-full relative'  data-aos="fade-up-left">
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