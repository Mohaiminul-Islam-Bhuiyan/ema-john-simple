import React, { useContext } from 'react';
import logo from "../../images/Logo.svg";
import { Link } from 'react-router-dom'
import "./Header.css"
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user?.uid ?
                    <button className='btn-logout' onClick={logOut}>Sign out</button>
                    :
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                }
                <span>{user?.email}</span>
            </div>
        </nav>
    );
};

export default Header;