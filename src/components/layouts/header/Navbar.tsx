import { Menu } from "lucide-react"
import Logo from "../../Logo"
import NavIcons from "./NavIcons"
import NavMenu from "./NavMenu"
import { useState } from "react"
import OffCanvasMenu from "./OffCanvasMenu"
import { motion, AnimatePresence } from 'motion/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <header className="px-10 flex items-center gap-10 justify-between bg-light-dark lg:bg-transparent lg:py-0 absolute top-0 left-0 w-full z-10">
      <AnimatePresence>
        {isOpen &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-full h-full bg-black/70 fixed inset-0"></motion.div>
        }
      </AnimatePresence>
      <OffCanvasMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="block lg:hidden flex-1">
        <Menu onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />
      </div>
      <div className="flex-3 lg:flex-1 border-r border-l py-3 border-l-[rgba(255,255,255,0.2)] border-r-[rgba(255,255,255,0.2)] lg:border-r-0 lg:border-l-0">
        <Logo />
      </div>
      <div className="hidden lg:block">
        <NavMenu />
      </div>
      <div className="flex-1 flex justify-end">
        <NavIcons />
      </div>
    </header>
  )
}

export default Navbar
