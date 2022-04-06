import './App.css';
import foodsList from './foods.json';
import { useState } from 'react';
import FoodElement from './components/foodElement';
import FormAddFood from './components/FormAddFood';
import Search from './components/search';

function App() {
  const [ foods, setFoods ] = useState(foodsList);
  const [ searchValue, setSearchValue ] = useState('');

  return (
    <div className="App">
     <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <FormAddFood foods={foods} setFoods={setFoods} />
      <div className="food-list">
        {foods.length > 0 ? (
          foods
            .filter((el) =>
              el.name.toUpperCase().includes(searchValue.toUpperCase())
            )
            .map((food) => (
              <FoodElement
                food={food}
                key={food.name}
                foods={foods}
                setFoods={setFoods}
              />
            ))
        ) : (
          <p>No more Food</p>
        )}
      </div>
    </div>
  );
}

export default App;
