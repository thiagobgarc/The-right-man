import { motion } from "framer-motion";
import AboutPageImage from './public/aboutpage.jpg'

export const AboutImagePage = () => {
    const imageSrc = AboutPageImage.src

    return (
        <div className="relative ">
            <div className="flex flex-col items-center justify-center w-[50rem] sm:ml-0 pl-[5rem] lg:w-[50rem] md:w-[30rem] sm:w-[20rem]">
            <img src={imageSrc} alt="About Page Image"
                className="object-contain object-center w-full h-full rounded-lg opacity-70 quality-95 lg:ml-[10rem] md:ml-[7rem] sm:ml-0"
            />
            </div>
        </div>
    )
}