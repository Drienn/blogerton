import { useState } from 'react';
import { PostForm, Posts } from './components';
import './App.css';
import { mockPosts } from './mocks';

function App() {
  const [posts, setPosts] = useState(mockPosts)

  const addPost = post => setPosts([post, ...posts]);
  return (
    <div className="App">
      <h1>Blogerton!</h1>
      <div>
        Welcome to Blogerton
      </div>
      <PostForm addPost={addPost} />
      <Posts posts={posts} />
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