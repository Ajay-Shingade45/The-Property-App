import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
import Properties from "../pages/Properties.jsx"
import Services from "../pages/services.jsx"
import Agents from "../pages/Agents.jsx"
import Blogs from "../pages/Blog.jsx"
import Contact from "../pages/Contact.jsx"


const AppRouter = () => {

    return(
        <>
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/properties" element={<Properties />} />
               <Route path="/services" element={<Services />} />
               <Route path="/agents" element={<Agents />} />
               <Route path="/blogs" element={<Blogs />} />
               <Route path="/contact" element={<Contact/>}/>
           </Routes>
        </>
    )
}

export default AppRouter