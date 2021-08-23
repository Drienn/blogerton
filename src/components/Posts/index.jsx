import Post from '../Post';
import './style.css';

export default function Posts({ posts, likePost }) {
  const postsList = posts.map((post) => (
    <Post post={post} likePost={likePost} />
  ));
  return <ul className="list flex center column margin-2-t">{postsList}</ul>;
}
