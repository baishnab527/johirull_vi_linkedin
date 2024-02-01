import { Helmet } from "react-helmet"
import Topbar from "../topbar/Topbar"
import { Outlet } from "react-router-dom"



const Layouts = () => {
  return (
    <>
       <Helmet>
            <meta charSet="utf-8" />
            <title>shareme</title>
          
        </Helmet>
        <Topbar/>

        <Outlet/>

    </>
  )
}

export default Layouts