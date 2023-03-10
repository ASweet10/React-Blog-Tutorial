import useFetch from '../hooks/useFetch';
import MealList from './MealList';

const Home = () => {
    const { data: meals, isPending, error } = useFetch('http://localhost:8000/meals')

    return (
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
           {meals && <MealList meals={ meals }/> }
        </div>
        );
}
 
export default Home;