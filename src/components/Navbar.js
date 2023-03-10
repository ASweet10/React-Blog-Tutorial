import { Link } from 'react-router-dom'

const Navbar = () => {
    const title = "Meal Planner"
        
    return (
        <nav className="navbar">
            <h1>{ title }</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add New Meal</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;