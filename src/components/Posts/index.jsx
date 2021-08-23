import './style.css'

export default function Posts({ posts }) {
  const postsList = posts.map((post) => (
    <li className="list-item pad-2-b margin-2-t" key={post.title}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <b>{post.owner}</b>
      </li>
  ));
  return <ul className="list flex center column margin-2-t">{postsList}</ul>;
}
