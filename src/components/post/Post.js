import { useState } from 'react'; 
import './post.css'; 
import { MoreVert } from '@material-ui/icons'; 
import { Users } from '../../dummyData'; 

export default function Post({ post }) {
   const [like, setLike] = useState(post.like); 
   const  [isLiked, setIsLike] = useState(false); 
   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    
   const handleLike = () => {
       setLike(isLiked ? like - 1: like + 1 ); 
       setIsLike(!isLiked); 
   }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImage' src={Users.filter( (u) => u.id === post.userId)[0].profilePicture} alt="" />
                        <span className="postUserName">{Users.filter( (u) => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img src={PF+post.photo} alt="" className="postImage" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}like.png`} alt="" className="likeIcon" onClick={handleLike} />
                        <img src={`${PF}heart.png`} alt="" className="likeIcon" onClick={handleLike} />
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
