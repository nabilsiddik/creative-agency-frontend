import { easeInOut, motion } from 'motion/react'
import { slideUp } from '../../animations/slide'

type MotionSlideUpProps = {
    children: React.ReactNode,
    className?: string
}

const MotionSlideUp = ({ children, className = '' }: MotionSlideUpProps) => {
    return (
        <motion.div
            className={className}
            variants={slideUp}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{
                duration: 0.8,
                ease: easeInOut
            }}
        >
            {children}
        </motion.div>
    )
}

export default MotionSlideUp
