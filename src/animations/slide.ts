import type { Variants } from "motion/react"

export const slideUp: Variants = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    },
    exit: {
        y: 100,
        opacity: 0
    }
}