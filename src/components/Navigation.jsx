import {Link, useLocation } from 'react-router-dom';
import './styles/Navigation.css'

function Navigation() {
    const currentPage = useLocation().pathname;
    return (
      <div id='navbar'>
      <ul className='nav nav-tabs navdis'>
         <li className='nav-item'>
            <Link
             to = "/"
             className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
             >
            About
            </Link>
         </li>
         <li className='nav-item'>
            <Link
             to = "/portfolio"
             className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
             >
            Portfolio
            </Link>
         </li>
         <li className='nav-item'>
            <Link
             to = "/contact"
             className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
             >
            Contact
            </Link>
         </li>
         <li className='nav-item'>
            <Link
             to = "/artic"
             className={currentPage === '/artic' ? 'nav-link active' : 'nav-link'}
             >
            Resume
            </Link>
         </li>
      </ul>  
   </div>
    )
}
export default Navigation;