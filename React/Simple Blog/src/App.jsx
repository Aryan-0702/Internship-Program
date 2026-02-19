import { useState } from "react";
import { blogs } from "./data/blogs";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";

export default function App(){

  const [selectedBlog,setSelectedBlog] = useState(null);

  return(
    <div className="container">

      <h1 className="title">My Blog</h1>

      {/* Conditional Rendering = SPA Navigation */}

      {selectedBlog ? (
        <BlogDetail
          blog={selectedBlog}
          goBack={()=>setSelectedBlog(null)}
        />
      ) : (
        <BlogList
          blogs={blogs}
          openBlog={setSelectedBlog}
        />
      )}

    </div>
  );
}