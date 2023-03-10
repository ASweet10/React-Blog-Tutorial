import { Link } from 'react-router-dom'

const MealList = ({ meals }) => {

    return (
        <div className="meal-list">
        {/* For each item in meal... */}
        {meals.map((meal) => (
            //Output div
            <div className="meal-preview" key={meal.id}> {/* ReactDOM uses key to tell list items apart */}
                <Link to= {`/meals/${meal.id}`} >
                    <h2>{ meal.title }</h2>
                    <p>{ meal.type }</p>
                </Link>
            </div>
        ))}
        </div>
        );
}
 
export default MealList;