const Navbar = () => {
    const title = "hard-coded title"
    
    
    return (
        <nav className="navbar">
            <h1>{ title }</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "blue",
                    borderRadius: "8px"
                }}>New Blog</a>
            </div>
        </nav>
      );
}
 
export default Navbar;