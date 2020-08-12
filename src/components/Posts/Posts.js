import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* {posts.map((post) => <Post likePost = {likePost} post = {post}/>)} */}
      {posts.map((p) => <Post post = {p} key = {p.id} likePost = {likePost} />)}
      {/* {console.log(posts)} */}
      {/* {posts.map((post) => post)} */}
      {/* {<Post likePost = {likePost} post = {posts} />}} */}
      
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;