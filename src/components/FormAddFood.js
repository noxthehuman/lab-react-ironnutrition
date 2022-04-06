import React, { useState } from 'react'
import { Card, Divider, Input, Button } from "antd"

const FormAddFood = props => {
  const [showForm, setShowForm] = useState(false);
  const [foodForm, setFoodForm] = useState({
        name:'',
        image:'',
        calories:0,
        servings:0,
    })
    const {foods, setFoods} = props

    const onTextChange = (event)=>{
        const {value, name} = event.target
        setFoodForm({...foodForm, [name]:value})
    }
    const onNumChange = (event)=>{
        const {value, name} = event.target
        if(!isNaN(value)) setFoodForm({...foodForm, [name]:value})
    }

    const handleSubmit = event => {
        console.log('here');
        event.preventDefault()
        setFoods([...foods, foodForm])
    }
    const toggleForm =()=> setShowForm(!showForm)

  return (
      <Card width={"100%"}>
      {showForm? 

    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={foodForm.name} name="name"  type="text" onChange={onTextChange} />

      <label>Image</label>
      <Input value={foodForm.image} name="image" type="text" onChange={onTextChange} />

      <label>Calories</label>
      <Input  value={foodForm.calories} name="calories" type="number" min={0} onChange={onNumChange} />

      <label>Servings</label>
      <Input  value={foodForm.servings} name="servings" type="number" min={0} onChange={onNumChange} />

      <Button onClick={handleSubmit}>Create</Button>
    </form>
    :null} 
    <Button onClick={toggleForm} > {showForm?"hide ":"show "} form </Button>
    
    </Card>
  )
}

export default FormAddFood