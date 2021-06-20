import './rightbar.css'; 
import { Users } from '../../dummyData'; 
import Online from '../online/Online'; 

export default function Rightbar({ profile }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const HomeRightBar = () => {
        return (
        <>
        <div className="birthdayContainer">
            <img src="/assets/gift.png" alt="" className="birthdayImage" />
            <span className="birthdayText">
                <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
            </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
            {Users.map((user) => (
            <Online key={user.id} user={user} />
                ))}
        </ul>
        </>
        )
    }

    const ProfileRightBar = () => {
        return (
          <>
          <h4 className="rightbarTitle">User information</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">Atlanta</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">Mexico City</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">Single</span>
            </div>
          </div>
          <h4 className="righbarTitle">User Friends</h4>
          <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                  <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImage" />
                  <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                  <img src={`${PF}person/2.jpeg`} alt="" className="rightbarFollowingImage" />
                  <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                  <img src={`${PF}person/3.jpeg`} alt="" className="rightbarFollowingImage" />
                  <span className="rightbarFollowingName">Ellie Cary</span>
              </div>
              <div className="rightbarFollowing">
                  <img src={`${PF}person/4.jpeg`} alt="" className="rightbarFollowingImage" />
                  <span className="rightbarFollowingName">Anna Durden</span>
              </div>
              <div className="rightbarFollowing">
                  <img src={`${PF}person/5.jpeg`} alt="" className="rightbarFollowingImage" />
                  <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                  <img src={`${PF}person/6.jpeg`} alt="" className="rightbarFollowingImage" />
                  <span className="rightbarFollowingName">John Carter</span>
              </div>
          </div>
          </>
        )
    }

    return (
        <div className="rightBar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightBar/> : <HomeRightBar/> } 
            </div>
        </div>
    )
}
