import { ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"

type MenuItem = {
  title: string,
  href: string,
  dropdown?: {
    title: string,
    href: string
  }[]
}

const NavMenu = () => {

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
        href: '/blog',
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
        href: '/services'
      },
      {
        title: 'Contact',
        href: '/contact'
      },
    ]

  return (
    <nav>
      <ul className="flex items-center gap-5">
        {menu?.length && menu.map((item: MenuItem, index: number) => {
        return <Link to={item?.href} key={index} className="flex items-center gap-2 py-10">
          <span className="w-2 h-2 border border-primary rounded-full"></span>
          <span className="uppercase font-medium">{item?.title}</span>
          <span><ChevronDown width={18}/></span>
        </Link>
      })}
      </ul>
    </nav>
  )
}

export default NavMenu
