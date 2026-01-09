import { ChevronDown, ChevronRightIcon } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import DropdownMenu from './DropdownMenu'
import { useState } from 'react'
import OffCanvasDropdownMenu from './OffCanvasDropdownMenu'

type MenuItem = {
    title: string,
    href?: string,
    dropdown?: {
        title: string,
        href: string
    }[]
}

const OffCanvasNavItem = ({ item }: { item: MenuItem }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <li className="relative overflow-hidden" onClick={() => setIsOpen(!isOpen)}>
            {item?.href ?
                <NavLink to={item?.href || '/'} className="flex items-center justify-between gap-2 relative">
                    {({isActive}) => (
                        <>
                            <div className='flex items-center gap-2'>
                                <span className="w-2 h-2 border border-primary rounded-full"></span>
                                <span className={`uppercase font-medium transition duration-300
                                    ${isActive ? "text-primary" : "hover:text-primary"}
                                `}>{item?.title}</span>
                            </div>
                            {item?.dropdown &&
                                <span><ChevronRightIcon width={18} /></span>
                            }
                        </>
                    )}
                </NavLink>
                :
                <div className="flex items-center justify-between gap-2 relative cursor-pointer">
                    <div className='flex items-center gap-2'>
                        <span className="w-2 h-2 border border-primary rounded-full"></span>
                        <span className="uppercase font-medium hover:text-primary transition duration-300 ease-in-out">{item?.title}</span>
                    </div>
                    {item?.dropdown &&
                        <span><ChevronRightIcon width={18} /></span>
                    }
                </div>
            }

            {item?.dropdown &&
                <div className='relative'>
                    <OffCanvasDropdownMenu dropDownItems={item?.dropdown} isOpen={isOpen} />
                </div>
            }
        </li>
    )
}

export default OffCanvasNavItem
