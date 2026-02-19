export default function BlogDetail({ blog, goBack }) {
  return (
    <div className="detail">

      <button className="back" onClick={goBack}>
        ← Back
      </button>

      <h1>{blog.title}</h1>
      <p><b>Author:</b> {blog.author}</p>
      <p><b>Date:</b> {blog.date}</p>

      <hr />

      <p>{blog.content}</p>

    </div>
  );
}