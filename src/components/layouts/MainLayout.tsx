import { Outlet } from "react-router-dom"
import Navbar from "./header/Navbar"

const MainLayout = () => {
  return (
    <>
        <Navbar/>
            <Outlet/>
        
    </>
  )
}

export default MainLayout
