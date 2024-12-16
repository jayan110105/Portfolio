'use client'

import { ReactNode } from "react";
import { motion } from "framer-motion";

const FloatingElements = ({children, delay = 0}: {children: ReactNode, delay?: number}) => {
    return(
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
            duration: 5,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
            }}
        >
            {children}
        </motion.div>
    )
}

export default FloatingElements;