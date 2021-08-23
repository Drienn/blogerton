import { useState } from 'react';
import { PostForm, Posts } from './components';
import './App.css';
import { mockPosts } from './mocks';

function App() {
  const [posts, setPosts] = useState(mockPosts);

  const addPost = (post) => setPosts([post, ...posts]);
  const likePost = (id) => {
    const currentIndex = posts.findIndex((post) => post.id === id);
    const updatedPost = {
      ...posts[currentIndex],
      likes: posts[currentIndex].likes + 1,
    };
    const updatedPosts = [
      ...posts.slice(0, currentIndex),
      updatedPost,
      ...posts.slice(currentIndex + 1),
    ]
    setPosts(updatedPosts);
  };
  return (
    <div className="App">
      <h1>Blogerton!</h1>
      <div>Welcome to Blogerton</div>
      <PostForm addPost={addPost} />
      <Posts posts={posts} likePost={likePost}/>
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
