import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>{error.message}</p>;

  return (
    <>
      <button onClick={refetch}>Refetch Posts</button>

      {posts.slice(0, 10).map((post) => (
        <div key={post.id} className="post">
          <div className="post-title">{post.title}</div>
          <div className="post-body">{post.body}</div>
        </div>
      ))}
    </>
  );
}

export default PostsComponent;
