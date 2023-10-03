import { motion } from "framer-motion";
import { Aboutimage } from "./Aboutimage";
import About from "../pages/about.astro";

export const Card = () => {
    
    return (
        <section className="flex flex-row-3 items-center justify-center">
            <div className="className='border border-teal-700/30 rounded-lg w-[25rem] h-[20rem] mb-[5rem] mt-[2rem] bg-teal-950/20 shadow-lg shadow-teal-800 relative">
                <Aboutimage />
            </div>
                
        </section>
    )
}