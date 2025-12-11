import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  return (
    <div className="container">
      <h2>Post {id}</h2>
      <div className="section-box">
        <p>This page demonstrates dynamic routing.</p>
      </div>
    </div>
  );
}

export default Post;
