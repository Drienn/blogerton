import { useState } from 'react';
import PostForm from '../PostForm';
import './style.css';

export default function Post({ post, likePost, type = 'post' }) {
  const [showComments, setShowComments] = useState(false);
  const [showAddComment, setShowAddComment] = useState(false);
  const comments = post.comments.map((comment) => (
    <Post
      post={comment}
      likePost={() => likePost(post.id, comment.id)}
      type="comment"
    />
  ));
  return (
    <li
      key={post.title}
      className={`list-item pad-2-b margin-2-t ${type} center`}
    >
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <b>{post.owner}</b>
      <br />
      <span>Likes: {post.likes}</span>
      <br />
      <button type="button" onClick={() => likePost(post.id)}>
        Like {type === 'post' ? 'Post' : 'Comment'}
      </button>
      <br />
      {type === 'post' && post.comments.length > 0 ? (
        <>
          <button
            type="button"
            onClick={() => setShowAddComment(!showAddComment)}
          >
            Add Comment
          </button>
          {showAddComment && <PostForm type="comment" />}
          <button type="button" onClick={() => setShowComments(!showComments)}>
            Show Comments
          </button>
          <br />
          <div>{showComments && comments}</div>
        </>
      ) : null}
    </li>
  );
}
