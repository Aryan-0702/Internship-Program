import BlogCard from "./BlogCard";

export default function BlogList({ blogs, openBlog }) {
  return (
    <>
      {blogs.map(blog => (
        <BlogCard
          key={blog.id}
          blog={blog}
          openBlog={openBlog}
        />
      ))}
    </>
  );
}