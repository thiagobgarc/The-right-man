
import { motion } from "framer-motion";

export const Text = ({ text }: { text: string }) => {
  return (
    <motion.div initial={{ y: 0, opacity: 0 }} animate={{ y:25, opacity: 1 }} transition={{ duration: .5 }} 
        className="flex flex-col items-center justify-center p-[4rem]">
        <p className="text-2xl text-gray-700 italic text-center">
        {text}
        </p>
    </motion.div>
  )
}

