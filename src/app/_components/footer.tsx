
'use client'

import React from 'react'
import Image from 'next/image'
import esponjamagic from '../../../public/esponja magic fundo branco produto5.jpg'
import zhanghair from '../../../public/Logo-Zhang-Hair produto 1.png'
import dsbeaty from '../../../public/ds beaty produto 4.png'
import duchapeu from '../../../public/du chapeu hair produto2.png'
import theclass from '../../../public/the class produto 3.png'
import imperioblack from '../../../public/blackproduto 6.png'

const brands = [
    { name: "Império Black", logo: imperioblack },
    { name: "The Class", logo: theclass },
    { name: "Du Chapéu", logo: duchapeu },
    { name: "DS Beaty", logo: dsbeaty },
    { name: "Zhang Hair", logo: zhanghair },
    { name: "Esponja Magic", logo: esponjamagic },
    { name: "Império Black", logo: imperioblack },
    { name: "The Class", logo: theclass },
    { name: "Du Chapéu", logo: duchapeu },
    { name: "DS Beaty", logo: dsbeaty },
    { name: "Zhang Hair", logo: zhanghair },
    { name: "Esponja Magic", logo: esponjamagic },
    { name: "Império Black", logo: imperioblack },
    { name: "The Class", logo: theclass },
    { name: "Du Chapéu", logo: duchapeu },
    { name: "DS Beaty", logo: dsbeaty },
    { name: "Zhang Hair", logo: zhanghair },
    { name: "Esponja Magic", logo: esponjamagic },

    
]

export function Footer() {
    return (
        <section className='bg-black py-16 text-white'>
            <div className='container mx-auto px-4'>
                <div className='border-b border-[#373739] pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>
                    <div className='carousel-container' style={{ overflow: 'hidden', position: 'relative' }}>
                        <div className='carousel-track' style={{
                            display: 'flex',
                            animation: 'scroll 120s linear infinite',
                            width: 'max-content',
                        }}>
                            {brands.concat(brands).map((item, index) => ( // Repete as marcas para loop contínuo
                                <div key={index} style={{ flex: 'none', width: '150px', margin: '0 8px' }}>
                                    <Image
                                        src={item.logo}
                                        alt={item.name}
                                        height={50}
                                        className="object-contain"
                                        quality={100}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS dentro do JSX */}
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
            `}</style>
        </section>
    )
}


