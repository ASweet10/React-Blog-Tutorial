import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'   

import breakfastImg from '../images/breakfast.jpg'
import lunchImg from '../images/lunch.jpg'
import dinnerImg from '../images/dinner.jpg'
import dessertImg from '../images/dessert.jpg'


const Create = () => {
    const [ title, setTitle ] = useState('')
    const [ body, setBody ] = useState('')
    const [ type, setType ] = useState('Breakfast')
    const navigate = useNavigate()

    const options = [
        { value: "Breakfast", text: "Breakfast", image: breakfastImg },
        { value: "Lunch", text: "Lunch", image: lunchImg },
        { value: "Dinner", text: "Dinner", image: dinnerImg },
        { value: "Dessert", text: "Dessert", image: dessertImg }
    ]
    let bannerImage

    const handleFormSubmit = (e) => {
        e.preventDefault() //Stops page from refreshing
        const meal = { title, body, type }

        fetch('http://localhost:8000/meals', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(meal)
        }).then(() => {
            navigate("/")
        })
    }

    const handleChangeType = (e) => {

    }

    return (
        <div className="create">
            <h2>Add new meal</h2>
            <form>
                <label>Meal Title:</label>
                <input
                    type="text"
                    required
                    value={ title }
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Meal Body:</label>
                <textarea
                    required
                    value={ body }
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Meal Type:</label>
                <select
                    value={ type }
                    required
                    onChange={ handleChangeType }
                >
                    {options.map((option, index) => (
                        <option key={option.value} value={index}>
                            {option.text}
                        </option>
                    ))}
                </select>
                <button onClick={ handleFormSubmit }>Add Meal</button>
                {/*  <img src={options[selected].image} className="banner-image" />  */}
            </form>
        </div>
     );
}
    
export default Create;