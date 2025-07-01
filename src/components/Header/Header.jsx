import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return(
        <>
          <header class="header1">
            <h1 class="clg-name">Vivekanand College</h1>
                <nav> 
                    <Link to="/home" class='nav-desc' data-discover="true">Home</Link>
                    <Link to="/about" class='nav-desc' data-discover="true">About</Link>
                    <Link to="/courses" class='nav-desc' data-discover="true">Courses</Link>
                    <Link to="/contact" class='nav-desc' data-discover="true">Contact Us</Link>
                    {/* <Link to="/apply" className='nav' data-discover="true">Apply Now!</Link> */}
                    <button data-discover="true" class="btn"><Link to="/apply" className='nav' data-discover="true">Apply Now!</Link></button>
                </nav>         
        </header>
        </>
    )
}

export default Header;