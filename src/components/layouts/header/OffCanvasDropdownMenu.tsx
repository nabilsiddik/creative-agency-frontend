import { Link } from "react-router-dom"
import { easeInOut, motion } from 'motion/react'

type DropdownItems = {
    title: string,
    href: string
}

const OffCanvasDropdownMenu = ({ dropDownItems, isOpen }: { dropDownItems: DropdownItems[], isOpen: boolean }) => {
    console.log(isOpen)

    return (
        <motion.div
            initial={false}
            animate={{
                height: isOpen ? 'auto' : '0px'
            }}
            transition={{
                duration: 0.4,
                ease: easeInOut
            }}
            className={`ml-7`}>
            <ul>
                {dropDownItems.length &&
                    dropDownItems.map((item: DropdownItems, index: number) => {
                        return <Link to={item?.href} key={index} className="flex items-center gap-2 py-2">
                            <span className="uppercase text-sm font-medium hover:text-primary transition duration-300 ease-in-out">{item?.title}</span>
                        </Link>
                    })
                }
            </ul>
        </motion.div>
    )
}

export default OffCanvasDropdownMenu
