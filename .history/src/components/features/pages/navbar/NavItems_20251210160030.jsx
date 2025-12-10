
import { NavLink } from 'react-router';

const NavItems = () => {
    return (
        <>
         <li className=''>
        <NavLink className={({isActive}) => isActive?"link-btn":""} to='/'>Home</NavLink>    
        </li>   
         <li className=''>
        <NavLink className={({isActive}) => isActive?"link-btn":""} to='/all-books'>All Books</NavLink>    
        </li> 
          <li className=''>
        <NavLink className={({isActive}) => isActive?"link-btn":""} to='/add-book'>Add Book</NavLink>    
        </li> 
          <li className=''>
        <NavLink className={({isActive}) => isActive?"link-btn":""} to='/my-books'>My Books</NavLink>    
        </li> 
        </>
    );
};

export default NavItems;