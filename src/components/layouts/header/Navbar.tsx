import Logo from "../../Logo"
import NavIcons from "./NavIcons"
import NavMenu from "./NavMenu"

const Navbar = () => {
  return (
    <header className="px-10 flex items-center gap-10 justify-between">
      <Logo/>
      <NavMenu/>
      <NavIcons/>
    </header>
  )
}

export default Navbar
