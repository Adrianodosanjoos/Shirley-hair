import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr"

export function Low() {

    return (
     <div>
        

            <div className="bg-black text-white font-serif py-16">

            
                <h2 className="text-3xl lg:text-4xl font-serif flex align-text-center justify-center">Contatos</h2>

                <div className="flex">
                <a href="https://www.instagram.com/shirleibraids/" target="_blank"
                    className="bg-[#833AB4] px-4 py-2 rounded-md font-semibold flex justify-center
        hover:scale-110 duration-300 items-center w-fit gap-2">
                    <InstagramLogo className='w-5 h-5' /></a>
                    <p className="px-8 py-4"> @shirleibraids</p>
                    </div>
                 
                    <div className="flex">
                <a href={`https://wa.me/5511940556067?text=
                            Óla Shirlei vim pelo site e gostaria de saber mais sobre o seu trabalho`} target="_blank"
                    className="bg-green-500 px-4 py-2 rounded-md font-semibold flex justify-center
        hover:scale-110 duration-300 items-center w-fit gap-2">
                    <WhatsappLogo className='w-5 h-5' /> </a> 
                    <p className="px-8 py-4">(11) 94055-6067</p>
                    </div>


                <p className="px-10 py-6">R: José Cardoso Xavier, 452 Jd. Cacique-Suzano | SP</p>

            </div>


            <div className="bg-[#373739] py-3 flex align-text-center justify-center text-white font-serif ">

                <h1>Todos os direito autorais: <b>Adriano dos Anjos</b></h1>

            </div>

            
            </div>
          
        
    )

};