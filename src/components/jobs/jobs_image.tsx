
import JobsImage from './public/jobsimage.jpg'


export const Jobsimage = () => {
    const imageSrc = JobsImage.src
    return (
              <a href="/about" className='flex flex-col items-center justify-center gap-2'>
                <img
                  src={imageSrc}
                  alt="About Card Image"
                  className="object-cover object-center w-full h-[16rem] rounded-lg opacity-70 quality-95"
                />
                <p className="text-2xl text-gray-700 italic text-center font-bold mt-[.7rem]">
                  Jobs
                </p>
              </a>
    )
}