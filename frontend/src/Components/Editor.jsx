import { motion, transform } from "motion/react"
export default function(){
    return(
        <>
        <div className="conatiner text-center mr-90 mt-8">
            <motion.h1 className="text-black text-3xl"
            initial={{y:-50}} animate={{y:0}} transition={{duration:2}}>WYSIWYG Editor</motion.h1>
          

        </div>
        </>
    )
}