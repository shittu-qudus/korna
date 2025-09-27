import { HiBell, HiMenu, HiPencilAlt } from "react-icons/hi";
import './Header.css';

const Header = () => {
  return (
    <header className='headercontainer'>
      <div className='headercontent'>
        <div>
          <ul className='leftheader'>
            <li><HiMenu size={24} color="black" className="icon" /></li>
            <li className='logo'>Medium</li>
            <li className='search-container'>
              <input type="search" placeholder='🔍 Search' className='search-input' />
            </li>
          </ul>
        </div>
        <div>
          <ul className='rightheader'>
            <li><HiPencilAlt size={24} color="black" className="icon" /></li>
            <li><HiBell size={24} color="black" className="icon" /></li>
            <li className='profile-circle'></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;