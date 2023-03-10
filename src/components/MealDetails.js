import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const MealDetails = () => {
    const { id } = useParams()
    const { data: meal, error, isPending } = useFetch('http://localhost:8000/meals/' + id)
    const navigate = useNavigate()

    const handleClick = () => {
        fetch('http://localhost:8000/meals/' + meal.id, {
            method: 'DELETE'
        }).then(() => {
            navigate("/")
        })
    }

    return ( 
        <div className="meal-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { meal && (
                <article>
                    <h2>{ meal.title }</h2>
                    <p>{ meal.type }</p>
                    <div>{ meal.body }</div>
                    <button onClick={ handleClick }>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default MealDetails;