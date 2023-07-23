import { Fragment, useState } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import MealsForm from "./MealItem/MealsForm";
// import MealItem from "./MealItem/MealIteam";
// import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];


// const saveMealDataHandler = (enteredMealData) =>{
//     const mealData = {
//         ...enteredMealData, 
//         // id: Math.random.toString()
//     }
//     props.onAddMealData(mealData)
// }






const Meals = () => {
    const [meals, setMeals] = useState(DUMMY_MEALS)
    
    const onSaveMealData = meals => {
      setMeals(prevMeals => {
        return [meals, ...prevMeals]
      })
    }
  return (
    <Fragment>
      <MealsSummary />
      <MealsForm onSaveMealData = {onSaveMealData}/>
      <AvailableMeals dummyMealData = {meals}/>
      {/* <section >
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section> */}
      {/* <AddMeals/> */}
    </Fragment>
  );
};

export default Meals;
