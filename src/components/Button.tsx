import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

type ButtonProps = {
    children: React.ReactNode,
    classNames?: string,
    size?: 'md' | 'lg' | 'xl',
    link?: string,
    onClick?: () => void
}

const Button = ({ children, classNames, link = '', onClick }: ButtonProps) => {

    const overlayVariants = {
        initial: {
            width: '35%'
        },
        hover: {
            width: '100%'
        }
    }

    return (
        <>
            {link ?

                <Link to={link}>
                    <motion.button
                        onClick={onClick}
                        whileHover='hover'
                        initial='initial'
                        whileTap={{
                            scale: 0.8,
                            y: -5
                        }}
                        className={`${classNames && classNames} text-lg uppercase font-bold cursor-pointer relative px-6`}>
                        <motion.div
                            variants={overlayVariants}
                            transition={{
                                duration: 0.3,
                                ease: 'easeInOut'
                            }}
                            className="bg-[#FFFFFF1A] absolute top-1/2 -translate-y-1/2 left-0 px-6 py-8 rounded-full"></motion.div>
                        {children}
                    </motion.button>
                </Link>

                :

                <motion.button
                    onClick={onClick}
                    whileHover='hover'
                    initial='initial'
                    whileTap={{
                        scale: 0.8,
                        y: -5
                    }}
                    className={`${classNames && classNames} text-lg uppercase font-bold cursor-pointer relative px-6`}>
                    <motion.div
                        variants={overlayVariants}
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut'
                        }}
                        className="bg-[#FFFFFF1A] absolute top-1/2 -translate-y-1/2 left-0 px-6 py-8 rounded-full"></motion.div>
                    {children}
                </motion.button>
            }

        </>
    )
}

export default Button
