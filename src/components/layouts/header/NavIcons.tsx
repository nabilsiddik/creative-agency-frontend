import { Menu, Search, ShoppingCart } from "lucide-react"

const NavIcons = () => {
  return (
    <div className="flex items-center gap-9">
      <ShoppingCart className="cursor-pointer hidden lg:block"/>
      <Search className="cursor-pointer"/>
      <div className="w-10 h-10 bg-gray-500 items-center justify-center rounded hidden lg:flex">
        <Menu className="cursor-pointer"/>
      </div>
    </div>
  )
}

export default NavIcons
