import React from 'react'

export const ContactForm = () => {
  return (
    <div className='relative'>
        <section className='max-w-[53rem] mt-28 sm:mt-0 w-[min(100%,38rem) mb-28 sm:mb-28'>
            <span className='flex flex-col'>
                <p className='text-2xl text-gray-700 text-center'>
                    Send us a message and we'll get back to you.
                </p>
            </span>
            <form className='mt-10 flex flex-col'>
            <input type='email' 
            name='senderEmail'
            className='px-4 h-14 rounded-lg border border-black/10' placeholder='Your Email'
            required
            maxLength={200}
            />
            <textarea className='px-4 h-52 my-3 rounded-lg border border-black/10' 
            name='message'
            placeholder='Your Message'
            required
            maxLength={500}
            />
            <button type='submit' className='group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center gap-2'>
                Submit
            </button>
        </form>
        </section>
    </div>
  )
}
