
import { motion } from "framer-motion"
import { formarPercentage } from "../utils/helper"
import { State } from "../hooks/useEngine"

const Results = ({
    errors,
    accuracyPercentage,
    total,
    className,
    state,
}: {
    errors: number,
    accuracyPercentage: number,
    total: number,
    className: string,
    state:State;
}) => {

    const initial = { opacity: 0 }
    const animate = { opacity: 1 }
    const duration = { opacity: 0.3 }


    if(state !== "finish")
        {
return null
        }



    return (
        <motion.ul className={`flex flex-col items-center text-primary-400 space-y-3 ${className}`}>
            <motion.li initial={initial} animate={animate} transition={{ ...duration, delay: 0 }} className="text-xl font-semibold">Results</motion.li>
            <motion.li initial={initial} animate={animate} transition={{ ...duration, delay: 0.5 }}>Accuracy :{formarPercentage(accuracyPercentage)}</motion.li>
            <motion.li initial={initial} animate={animate} transition={{ ...duration, delay: 1 }} className="text-red-500">Errors: {errors}</motion.li>
            <motion.li initial={initial} animate={animate} transition={{ ...duration, delay: 1.5 }}>Typed:{total}</motion.li>
        </motion.ul>
    )
}



export default Results;