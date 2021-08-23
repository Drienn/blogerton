import { useState } from 'react';
import './style.css';

export default function PostForm({ addPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Post will be added!');
    addPost({ title, content, owner: 'Anonymous' });
  };
  return (
    <form className="flex column form center" onSubmit={onSubmit}>
      <label>Title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <label>Content</label>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Add Post</button>
    </form>
  );
}
