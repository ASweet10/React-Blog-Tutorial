const BlogList = ({ blogs }) => {

    return (
        <div className="blog-list">
        {/* For each item in blog... */}
        {blogs.map((blog) => (
            //Output div
            <div className="blog-preview" key={blog.id}> {/* ReactDOM uses key to tell list items apart */}
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
            </div>
        ))}
        </div>
        );
}
 
export default BlogList;