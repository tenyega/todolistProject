import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          {/* has to be a navlink a simple <a>will not work in vercel.com */}
            <NavLink to="/" className="nav-link scrollto active"><img src="https://api.iconify.design/material-symbols:home-outline-rounded.svg?color=%23888888" alt="Home" className="h-6 w-6" /><span>Home</span></NavLink>
             <NavLink to="/add" className="nav-link scrollto"><img src="https://api.iconify.design/material-symbols:add-circle-rounded.svg?color=%23888888" alt="add"  className="h-6 w-6" /> <span>Add Task</span></NavLink>
            <NavLink to="/important" className="nav-link scrollto"><img src="https://api.iconify.design/material-symbols:file-copy-outline.svg?color=%23888888" alt="important" className="h-6 w-6"/><span>Important Tasks</span></NavLink>
             <NavLink to="/contact" className="nav-link scrollto"> <img src="https://api.iconify.design/material-symbols:contact-phone-outline-sharp.svg?color=%23888888" alt="contact" className="h-6 w-6" /> <span>Contact</span></NavLink>
          
        </nav>
      </header>
    );
  }
  
  