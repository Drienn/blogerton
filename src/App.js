import { useState } from 'react';
import { PostForm, Posts } from './components';
import './App.css';
import { mockPosts } from './mocks';

function App() {
  const [posts, setPosts] = useState(mockPosts);

  const addPost = (post) => setPosts([post, ...posts]);
  const likePost = (postId, commentId) => {
    const currentPostIndex = posts.findIndex((post) => post.id === postId);
    let currentPost = posts[currentPostIndex];
    if (commentId) {
      const currentCommentIndex = currentPost.comments.findIndex(
        (comment) => comment.id === commentId,
      );
      const currentComment = currentPost.comments[currentCommentIndex];
      const updatedComment = {
        ...currentComment,
        likes: currentComment.likes + 1,
      };

      const updatedComments = [
        ...currentPost.comments.slice(0, currentCommentIndex),
        updatedComment,
        ...currentPost.comments.slice(currentCommentIndex + 1),
      ];
      currentPost = { ...currentPost, comments: updatedComments };
    }

    const updatedPost = {
      ...currentPost,
      likes: commentId ? currentPost.likes : currentPost.likes + 1,
    };

    const updatedPosts = [
      ...posts.slice(0, currentPostIndex),
      updatedPost,
      ...posts.slice(currentPostIndex + 1),
    ];
    setPosts(updatedPosts);
  };
  return (
    <div className="App">
      <h1>Blogerton!</h1>
      <div>Welcome to Blogerton</div>
      <PostForm addPost={addPost} />
      <Posts posts={posts} likePost={likePost} />
    </div>
  );
}

export default App;

/*
 * ** POSTS ** *
 * Create a post
 * Like a post
 * Share a post
 *
 * ** THREADS ** *
 * comment on a post
 * like a comment
 */
