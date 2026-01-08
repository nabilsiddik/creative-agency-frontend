import NavItem from "./NavItem"

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
      href: '/services',
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
      href: '/contact',
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
    <nav>
      <ul className="flex items-center gap-5">
        {menu?.length && menu.map((item: MenuItem, index: number) => (
          <NavItem key={index} item={item}/>
        ))}
      </ul>


    </nav>
  )
}

export default NavMenu
