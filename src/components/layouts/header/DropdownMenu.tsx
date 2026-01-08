import { Link } from "react-router-dom"
import { easeInOut, motion } from 'motion/react'

type DropdownItems = {
    title: string,
    href: string
}

const DropdownMenu = ({ dropDownItems, isOpen }: { dropDownItems: DropdownItems[], isOpen: boolean }) => {

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -20,
                pointerEvents: 'none'
            }}
            animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 20,
                pointerEvents: isOpen ? 'auto' : 'none'
            }}
            transition={{
                duration: 0.3,
                ease: easeInOut
            }}
            className="p-8 bg-dark border absolute top-full w-60">
            <ul>
                {dropDownItems.length &&
                    dropDownItems.map((item: DropdownItems, index: number) => {
                        return <Link to={item?.href} key={index} className="flex items-center gap-2 py-2">
                            <span className="uppercase font-medium hover:text-primary transition duration-300 ease-in-out">{item?.title}</span>
                        </Link>
                    })
                }
            </ul>
        </motion.div>
    )
}

export default DropdownMenu
