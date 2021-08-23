const mockPosts = [
  { 
  id: 1,
  title: "First Post", 
  content: "This is the content",
  owner: "Person",
  likes: 0,
  comments: [
    {
    id: 1,
    owner: "Person",
    content: "this is a very long comment on this post",
    likes: 0,
    comments: []
  }], 
}
]

export default mockPosts;