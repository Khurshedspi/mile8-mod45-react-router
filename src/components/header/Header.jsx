import { Link, NavLink } from "react-router-dom";
import  "../header/Header.css"

const Header = () => {
    return (
        <div>
            
            <nav className="nav">
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact Us</a> */}

                {/* <Link to="/">Home</Link>
                <Link to="/about">About</Link> 
                 <Link to="/contact">Contact Us</Link>
                <Link to="/users">Our Users</Link>
                
                */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/users">Our User</NavLink>
               
            </nav>
        </div>
    );
};

export default Header;