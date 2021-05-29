import React from "react";
import MealList from "../components/MealList";

import { MEALS } from "../data/dummy-data";

const CategoryMeals = (props) => {
  const { categoryId } = props.route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMeals;