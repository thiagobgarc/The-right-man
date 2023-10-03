
import Carrywood from './public/carrywood.jpeg'



export const Aboutimage = () => {
    const imageSrc = Carrywood.src
    return (
              <a href="/about" className='flex flex-col items-center justify-center gap-2'>
                <img
                  src={imageSrc}
                  alt="About Card Image"
                  className="object-cover object-center w-full h-full rounded-lg opacity-70 quality-95"
                />
                <p className="text-2xl text-gray-700 italic text-center font-bold mt-[.7rem]">
                  About us
                </p>
              </a>
    )
}

// <img src={imageSrc} alt="About Card Image" className="object-cover object-center w-full h-full rounded-lg opacity-70 quality-95"/>

// <a href="/about" className='flex flex-col items-center justify-center'>
// <p className="text-2xl text-gray-700 italic text-center font-bold mt-[1rem]">
// About us
// </p>
