import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
console.log(likePost)
console.log(posts)
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
     { posts.map(content => {
          return <Post post={content} likePost={likePost} key={content.id} />
      })
      }
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
