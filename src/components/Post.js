import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import './Post.css';


function Post({username, imageUrl, caption}) {

  return (
  <div className='post'>
      <div className="post__header">
      <Avatar
      className='post__avatar'
      alt={username}
      src="/static/images/avatar/1.png"
      />
    <h3>{username}</h3> 
      </div>
      
    {/*header -> avatar + username  */}

    <img
    className='post__image'
    src={imageUrl} 
    alt="" />
    {/* image */}
    
    <h4 className='post__text'><strong>{username} </strong>{caption}</h4>
    {/* username + caption */}
  </div>
  )
}

export default Post;
