import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {

    return (
        <>
          <div className="header">
            <div className="logo">TheProperty</div>
            <nav className="navBar">
               <NavLink to="/">Home</NavLink>
               <NavLink to="/about">About</NavLink>
               <NavLink to="/properties">Properties</NavLink>
               <NavLink to="/services">Service</NavLink>
               <NavLink to="/blogs">Blog</NavLink>
               <div className="dropdown-container">
                  <NavLink className="more-link">More Page</NavLink>
                  <div className="dropdown-menu">
                     <NavLink to="/property-details">Property Details</NavLink>
                     <NavLink to="/service-details">Service Details</NavLink>
                     <NavLink to="/agent-profile">Agent Profile</NavLink>
                     <NavLink to="/blog-details">Blog Details</NavLink>
                     <NavLink to="/terms">Terms</NavLink>
                     <NavLink to="/privacy">Privacy</NavLink>
                     <NavLink to="/404">404</NavLink>
                  </div>
               </div>
               <NavLink to="/contact">Contact</NavLink>
            </nav>
            <div className="header-actions">
              <button className="btn">Get Start</button>
            </div>
          </div>
          
        
        </>
    )
}

export default Header;