import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import DropdownMenu from './DropdownMenu'
import { useState } from 'react'

type MenuItem = {
  title: string,
  href: string,
  dropdown?: {
    title: string,
    href: string
  }[]
}

const NavItem = ({item}: {item: MenuItem}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <li className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <Link to={item?.href} className="flex items-center gap-2 py-10 relative">
                <span className="w-2 h-2 border border-primary rounded-full"></span>
                <span className="uppercase font-medium">{item?.title}</span>
                {item?.dropdown &&
                    <span><ChevronDown width={18} /></span>
                }
            </Link>

            {item?.dropdown &&
                <DropdownMenu dropDownItems={item?.dropdown} isOpen={isOpen} />
            }
        </li>
    )
}

export default NavItem
