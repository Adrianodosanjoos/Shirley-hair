import { WhatsappLogo, InstagramLogo } from '@phosphor-icons/react/dist/ssr'
import logoImg from '../../../public/shirlei foto transparente.png'
import bg from '../../../public/new logo transparente.png'
{/* import logo2 from '../../../public/logo transparente.png'*/ }
import Image from 'next/image'


export function Hero() {
    return (
        <section className="bg-[#000000] text-white relative overflow-hidden ">


<div className='absolute inset-1 opacity-55 md:hidden z-50'>

<Image
    src={logoImg}
    alt='logo'
    className='object-contain opacity-60'
    fill
    
    sizes='100vw'
/>
</div>


            <div className='z-0'>
                <Image
                    src={bg}
                    alt='foto logo'
                    fill
                    sizes='100vw'
                    quality={100}


                    className='object-cover  opacity-25 lg:max-w-xl lg:ml-117 lg:mt-2'

                />
            </div>



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
                            <b className="text-white">Bem-vindo à Shirlei Braids!</b>
                            <br />  Somos uma empresa dedicada à arte de tranças e penteados,
                            localizada no coração da comunidade. Com uma paixão profunda
                            pela beleza e pela individualidade, nossa missão é oferecer um espaço
                            onde a criatividade e a autoexpressão se encontram.
                        </p>

                        <a href="#" target="_blank"
                            className="bg-green-500 px-4 py-2 rounded-md font-semibold flex justify-center
                            hover:scale-110 duration-300 items-center w-fit gap-2">
                            <WhatsappLogo className='w-5 h-5' />
                            WhatsApp</a>

                        <a href="https://www.instagram.com/shirleibraids/" target="_blank"
                            className="bg-[#833AB4] px-4 py-2 rounded-md font-semibold flex justify-center
                            hover:scale-110 duration-300 items-center w-fit gap-2">
                            <InstagramLogo className='w-5 h-5' />
                            Instagram</a>


                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                Na linguagem Bantu, Trançar significa ser <b className="text-white">Feliz</b>!
                            </p>
                            <div className='flex mt-4'>
                                {/* <div className='w-35 ml-10'>
                                    <Image
                                    src={logo2}
                                    alt='small logo'
                                    className='object-fill hover:scale-110 duration-300'/>
                                </div> */}
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