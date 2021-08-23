const mockPosts = [
  {
    id: 1,
    title: 'First Post',
    content: 'This is the content that will show up in the content box',
    owner: 'James Franco',
    likes: 0,
    comments: [
      {
        id: 1,
        content: 'Youre a douche!',
        owner: 'James Franco',
        likes: 0,
        comments: [],
      }
    ],
  },
];

export default mockPosts;
