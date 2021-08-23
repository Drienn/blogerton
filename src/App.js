import { useState } from 'react';
import { PostForm, Posts } from './components';
import './App.css';
import { mockPosts } from './mocks';

function App() {
  const [posts, setPosts] = useState(mockPosts);

  const addPost = (post) => setPosts([post, ...posts]);
  const updateArrayObj = (arr, id, changes, key) => {
    const currentIndex = arr.findIndex((item) => item.id === id);
    const currentItem = arr[currentIndex];

    const updatedItem = {
      ...currentItem,
      ...(key ? { [key]: currentItem[key] + changes[key] } : changes),
    };

    const updatedItems = [
      ...arr.slice(0, currentIndex),
      updatedItem,
      ...arr.slice(currentIndex + 1),
    ];

    return updatedItems;
  };
  const likePost = (postId, commentId) => {
    let updatedPosts;
    if (commentId) {
      const currentPost = posts.find((post) => post.id === postId);
      const updatedComments = updateArrayObj(currentPost.comments, commentId, { likes: 1 }, 'likes');
      updatedPosts = updateArrayObj(posts, postId, { comments: updatedComments })
    } else {
      updatedPosts = updateArrayObj(posts, postId, { likes: 1 }, 'likes')
    }
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
