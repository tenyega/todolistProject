
export default function NavBar() {
    return (
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li><a href="/" className="nav-link scrollto active"><img src="https://api.iconify.design/material-symbols:home-outline-rounded.svg?color=%23888888" alt="Home" className="h-6 w-6" /><span>Home</span></a></li>
            <li><a href="/add" className="nav-link scrollto"><img src="https://api.iconify.design/material-symbols:add-circle-rounded.svg?color=%23888888" alt="add"  className="h-6 w-6" /> <span>Add Task</span></a></li>
            <li><a href="/important" className="nav-link scrollto"><img src="https://api.iconify.design/material-symbols:file-copy-outline.svg?color=%23888888" alt="important" className="h-6 w-6"/><span>Important Tasks</span></a></li>
            <li><a href="/tasks" className="nav-link scrollto"><img src="https://api.iconify.design/material-symbols:menu-book-outline-sharp.svg?color=%23888888" alt="tasks" className="h-6 w-6"  /><span>Tasks</span></a></li>
            <li><a href="#services" className="nav-link scrollto"><img src="https://api.iconify.design/material-symbols:view-list.svg?color=%23888888" alt="service" className="h-6 w-6"/> <span>Services</span></a></li>
            <li><a href="/contact" className="nav-link scrollto"> <img src="https://api.iconify.design/material-symbols:contact-phone-outline-sharp.svg?color=%23888888" alt="contact" className="h-6 w-6" /> <span>Contact</span></a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  