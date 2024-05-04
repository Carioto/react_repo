import {Link, useLocation } from 'react-router-dom';

function Navigation() {
    const currentPage = useLocation().pathname;
    return (
      <ul className='nav nav-tabs'>
         <li className='nav-item'>
            <Link
             to = "/"
             className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
             >
            About Me
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
    )
}
export default Navigation;