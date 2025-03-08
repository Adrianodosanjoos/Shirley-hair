import {WhatsappLogo, InstagramLogo} from '@phosphor-icons/react/dist/ssr'
import { PiWhatsappLogoBold } from 'react-icons/pi'

export function Hero() {
    return(
        <section className="bg-[#8d4925] text-white relative overflow-hidden">

            <div>

              <article>

                   <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">
                        Shirlei Nátali 
                    </h1>
                    <h2  className="text-2xl md:text-3xl lg:text-4xl font-bold mt-1 mb-1 font-serif">
                    BraidsDesigner
                    </h2>
                    <p className="lg:text-lg">
                    Tranças, todos os tipos de penteados p/noivas, Entrelaçamento/Nó Italiano, Colagem e restauração de laces e wigs Cursos e mentorias, vendas de produtos e acessórios p/cabelo.
                    </p>

                        <a href="#" target="_blank"
                        className="bg-green-500 px-1 py-0.5 rounded-md font-semibold flex items-center w-fit gap-2">
                            <PiWhatsappLogoBold />
                            WhatsApp</a>

                        <a href="#" target="_blank"
                        className="bg-fuchsia-900 px-1 py-0.5 rounded-md font-semibold flex items-center w-fit gap-2">
                            <InstagramLogo  className='w-5 h-5'/>
                            Instagran</a>
                    

                    <div className="mt-8">
                        <p className="text-sm mb-4">
                            Na linguagem Bantu, Trança significa ser <b className="text-white">Feliz</b>!
                        </p>
                    </div>
                   </div>

              </article>

            </div>
           
        </section>
    )
}