import React from 'react'
import './foodElement.css'

const FoodElement = ({food, foods, setFoods}) => {

  const totalCalories = food.calories * food.servings

  const deleteFood = () =>{
    const index = foods.findIndex(el=>el.name===food.name)
    if(index>-1){
      const newFoods = [...foods]
      newFoods.splice(index, 1)
      setFoods(newFoods)
    }
  }

  return (
    <div className='food-box'>
        <h2>{food.name}</h2>
        <div className='food-details'>
          <img src={food.image} width={70} alt={food.name} />
          <p>Calories: {food.calories}</p>
          <p>Servings: <strong>{food.servings}</strong></p>
          <p><strong>Total Calories: {totalCalories}</strong> kcal</p>
          <button className='delete-food-button' onClick={deleteFood}>delete</button>
        </div>
    </div>
    )
}

export default FoodElement