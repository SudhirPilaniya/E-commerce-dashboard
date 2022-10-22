import React from 'react';
import {Link,useNavigate} from 'react-router-dom'
const Nav = ()=>{
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.clear();
    navigate("/signin");
  }
    return(
        <div className="nav-page-container">
          {
            (auth) ? 
            <ul className='nav-ul'>
              <li> <Link className='nav-link' to="/">Home</Link></li>
              <li> <Link className='nav-link' to="/products">Products</Link> </li>
              <li> <Link className='nav-link' to="/add">Add Product</Link> </li>
              {/* <li> <Link className='nav-link' to="/update">Update</Link> </li>  */}
              
              <li> <Link onClick={logout} className='nav-link' to="/signin">LogOut ({JSON.parse(localStorage.getItem('user')).name}) </Link> </li> 
            </ul>
          :
          <ul className='nav-ul right-ul'>
            <li>  <Link className='nav-link' to="/signin">SignIn</Link> </li>
            <li><Link className='nav-link' to="/login">LogIn</Link>  </li>
          </ul>
          }
        </div>

    )
}

export default Nav;