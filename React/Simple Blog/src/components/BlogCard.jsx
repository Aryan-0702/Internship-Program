export default function BlogCard({ blog, openBlog }) {
  return (
    <div className="card" onClick={() => openBlog(blog)}>
      <h2>{blog.title}</h2>
      <p>By {blog.author}</p>
      <small>{blog.date}</small>
    </div>
  );
}