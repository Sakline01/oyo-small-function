import React from 'react'
import './Login_Signup.css'
import { useDispatch } from "react-redux"
import { logoutSuccess } from '../../redux/auth/action'
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';

const UserLogout = () => {
    const dispatch = useDispatch();
    const handleClick = (event) => {
        event.preventDefault()
        dispatch(logoutSuccess());
    }
    const handleDefault = (event) => {
        event.preventDefault();
    }
    return (
        <div className="userLogoutCard">
            <div onClick={handleDefault}><PermIdentityIcon />Profile</div>
            <div onClick={handleDefault}><BackpackOutlinedIcon />My Booking</div>
            <div onClick={handleClick}><LogoutIcon />Logout</div>
        </div>
    )
}

export default UserLogout
