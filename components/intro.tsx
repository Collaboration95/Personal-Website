import Image from "next/image"
import React from 'react'
import image from '@/public/corpcomment.png'

export default function Intro() {
  return (
    <section>
        <div className='flex items-center justify-center'>
            <div className="relative">
                <Image src={image} alt="Hero Image" width="200"
                priority={true} height="200"
                quality={95}
                className="rounded-full h-24 w-24 border-[0.35rem] object-cover  border-white shadow-xl"
                />
                <span className="text-4xl absolute bottom-0 right-0">
                🎯
                </span>
            </div>
        </div>
    </section>
  )
}
