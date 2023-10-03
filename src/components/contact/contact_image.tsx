import React from 'react'
import ContactImages from './public/contact.jpg'

export const ContactImage = () => {
    const imageSrc = ContactImages.src
  return (
    <a href="/about" className='flex flex-col items-center justify-center gap-2'>
        <img
            src={imageSrc}
            alt="About Card Image"
            className="object-cover object-center w-full h-[16rem] rounded-lg opacity-70 quality-95"
        />
        <p className="text-2xl text-gray-700 italic text-center font-bold mt-[.7rem]">
            Contact us
        </p>
    </a>
  )
}
