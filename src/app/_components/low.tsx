import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr"
import { Copyright } from "@phosphor-icons/react/dist/ssr"

export function Low() {

    return (
     <div>
        

            <div className="bg-black text-white font-serif py-16 space-y-6 ">

            
                <h2 className="text-3xl lg:text-4xl font-serif flex align-text-center justify-center"  data-aos="fade-up-right">Contatos</h2>

                <div className=" flex align-text-center justify-center gap-2 ">
                <a href="https://www.instagram.com/shirleibraids/" target="_blank"
                    className="bg-[#833AB4] px-4 py-2 rounded-md font-semibold flex justify-center
        hover:scale-110 duration-300 items-center w-fit gap-2"  data-aos="fade-up-right">
                    <InstagramLogo className='w-5 h-5' /></a>
                    <p className="text-2xl"  data-aos="fade-up-left"> @shirleibraids</p>
                    </div>
                 
                    <div className="flex align-text-center justify-center gap-2">
                <a href={`https://wa.me/5511940556067?text=
                            Óla Shirlei vim pelo site e gostaria de saber mais sobre o seu trabalho`} target="_blank"
                    className="bg-green-500 px-4 py-2 rounded-md font-semibold flex justify-center
        hover:scale-110 duration-300 items-center w-fit gap-2"  data-aos="fade-up-right">
                    <WhatsappLogo className='w-5 h-5' /> </a> 
                    <p className="text-2xl"  data-aos="fade-up-left">(11) 94055-6067</p>
                    </div>


                <p className="text-xs md:text-2xl font-bold flex align-text-center justify-center" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">R: José Cardoso Xavier, 452 Jd. Cacique-Suzano | SP</p>

            </div>


            <div className="bg-[#373739] py-3 flex align-text-center justify-center text-white font-serif ">

            <Copyright className="font-bold w-5 h-5"/> <h1 className="text-xs md:text-2xl"><b>2025 Adriano dos Anjos</b> - Todos os direitos reservados</h1>

            </div>

            
            </div>
          
        
    )

};