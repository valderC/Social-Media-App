import React from 'react'; 
import './profile.css'; 
import Topbar from '../../components/topbar/Topbar'; 
import Sidebar from '../../components/sidebar/Sidebar'; 
import Feed from '../../components/feed/Feed'; 
import Rightbar from '../../components/rightbar/Rightbar'; 

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
        <Topbar />
        <div className="profileContainer">
         <Sidebar />
         <div className="profileRight">
             <div className="profileRightTop">
                 <div className="profileCover">
                    <img src={`${PF}post/3.jpeg`} alt="" className="profileCoverImage" />
                    <img src={`${PF}post/7.jpeg`} alt="" className="profilePicture" />
                 </div>
               <div className="profileInfo">
                   <h4 className="profileInfoName">Yurik Valderrama</h4>
                   <span className="profileInfoDesc">On the road less travelled</span>
               </div>
             </div>
             <div className="profileRightBottom">
                <Feed />
                <Rightbar profile /> 
             </div>
         </div>
        </div>
       
     </>
    )
}
