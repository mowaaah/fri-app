import {Link} from 'react-router-dom';
import icon from './assets/img/website logo.png';
// a = Link, href = to
function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#F8E0D5"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home"><img src={icon} style={{width:"150px"}} alt="icon-logo"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link colorButton" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link colorButton" to="/booklist">Book List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link colorButton" to="/about">About</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </Link>
                                
                            </li> */}
                        </ul>
                    </div>
                 </div>
            </nav>
        </div>
    )
}



export default Navbar;