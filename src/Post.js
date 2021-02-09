import React from 'react';
import './Post-style.css';

const Post = ({ author, date, content, image }) => (
  <div className="post">
    <div className="info">
      <img className="avatar" src={author.photo}></img>
      <div className="anakin-Info">
        <p className="name">{author.name}</p>
        <p className="nickname">{author.nickname}</p>
        <p className="date">{date}</p>
      </div>
      <p className="content">{content}</p>
      <img className="img" src={image}></img>
    </div>
  </div>
);

export default Post;
