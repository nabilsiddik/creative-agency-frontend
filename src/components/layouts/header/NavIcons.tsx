import { Menu, Search, ShoppingCart } from "lucide-react"

const NavIcons = () => {
  return (
    <div className="flex items-center gap-9">
      <ShoppingCart className="cursor-pointer"/>
      <Search className="cursor-pointer"/>
      <div className="w-10 h-10 bg-gray-500 flex items-center justify-center rounded">
        <Menu className="cursor-pointer"/>
      </div>
    </div>
  )
}

export default NavIcons
