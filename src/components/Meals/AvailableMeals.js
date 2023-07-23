// import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealIteam";



function AvailableMeals(props){

  // const [meals, setMeals] = useState()

  // const onSaveMealData = meals => {
  //   setMeals(prevMeals => {
  //     return [meals, ...prevMeals]
  //   })
  // }
  
  const mealsList = props.dummyMealData.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
