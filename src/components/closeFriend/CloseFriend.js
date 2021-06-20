import React from 'react'; 
import './closefriend.css'; 

export default function CloseFriend({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="closeFriendWrapper">
            <img src={PF+user.profilePicture} alt="" className="closeFriendImage" />
                <span className="closeFriendUsername">{user.username}</span>
        </li>
    )
}
