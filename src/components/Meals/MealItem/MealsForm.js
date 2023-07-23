import { useState } from "react";
import classes from "./MealsForm.module.css";
const MealsForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enterDesc, setEnteredDes] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const decChangeHandler = (event) => {
    setEnteredDes(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const mealData = {
      name: enteredName,
      price: enteredPrice,
      description: enterDesc,
    };

    props.onSaveMealData(mealData);

    setEnteredName("");
    setEnteredPrice("");
    setEnteredDes("");
  };

  return (
    <div className={classes.summary}>
      {/* <form className={classes.form} onClick={submitHandler}> */}
      <form className={classes.form}>
        <div className={classes.wrapper}>
          <label for="MealName">Name: </label>
          <input
            type="text"
            value={enteredName}
            id="MealName"
            onChange={nameChangeHandler}
          ></input>
        </div>
        <div className={classes.wrapper}>
          <label for="MealPrice">Price: </label>
          <input
            type="number"
            value={enteredPrice}
            id="MealPrice"
            onChange={priceChangeHandler}
          ></input>
        </div>
        <br></br>
        <label for="MealDescription">Description: </label>
        <input
          type="text"
          value={enterDesc}
          id="MealDescription"
          onChange={decChangeHandler}
        ></input>
        <br></br>
        <div>
          <button type="submit" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MealsForm;
