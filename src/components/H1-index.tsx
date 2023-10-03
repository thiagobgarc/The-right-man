
import { motion } from "framer-motion";


export const H1Index = ({ text }: { text: string }) => {
  return (
    <motion.div className="flex flex-col items-center justify-center" initial={{ y: 0, opacity: 0 }} animate={{ y:25, opacity: 1 }} transition={{ duration: .25 }}>
    <h1 className="text-6xl text-teal-700 font-bold mb-0 top-[20rem] -left-[5rem] border-b-4 border-b-teal-700/50">
        {text}
    </h1>
    </motion.div>
  )
}

