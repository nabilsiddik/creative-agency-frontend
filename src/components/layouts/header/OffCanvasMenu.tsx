import { Menu, X } from "lucide-react"
import OffCanvasNavItem from "./OffCanvasNavItem"
import {motion} from 'motion/react'

type MenuItem = {
  title: string,
  href?: string,
  dropdown?: {
    title: string,
    href: string
  }[]
}

type OffCanvasMenuProps = { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }

const OffCanvasMenu = ({ isOpen, setIsOpen }: OffCanvasMenuProps) => {
  const menu: MenuItem[] = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'About',
      href: '/about'
    },
    {
      title: 'Blog',
      dropdown: [
        {
          title: 'Blog List',
          href: '/blog-list'
        },
        {
          title: 'Blog Grid',
          href: '/blog-grid'
        },
        {
          title: 'Blog Masonary',
          href: '/blog-masonary'
        },
        {
          title: 'Blog Single',
          href: '/blog-single'
        }
      ]
    },
    {
      title: 'Services',
      dropdown: [
        {
          title: 'Blog List',
          href: '/blog-list'
        },
        {
          title: 'Blog Grid',
          href: '/blog-grid'
        },
        {
          title: 'Blog Masonary',
          href: '/blog-masonary'
        },
        {
          title: 'Blog Single',
          href: '/blog-single'
        }
      ]
    },
    {
      title: 'Contact',
      dropdown: [
        {
          title: 'Blog List',
          href: '/blog-list'
        },
        {
          title: 'Blog Grid',
          href: '/blog-grid'
        },
        {
          title: 'Blog Masonary',
          href: '/blog-masonary'
        },
        {
          title: 'Blog Single',
          href: '/blog-single'
        }
      ]
    },
  ]
  return (
    <motion.nav className={`fixed min-h-screen w-100 border-r top-0 left-0 bg-dark px-6 py-30 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300 ease-in-out`}>
      {isOpen && 
        <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.8}}
        className="absolute top-5 -right-10 cursor-pointer">
          <X onClick={() => setIsOpen(!isOpen)} />
        </motion.div>
      }
      <ul className="flex flex-col gap-4">
        {menu?.length && menu.map((item: MenuItem, index: number) => (
          <OffCanvasNavItem key={index} item={item} />
        ))}
      </ul>


    </motion.nav>
  )
}

export default OffCanvasMenu
