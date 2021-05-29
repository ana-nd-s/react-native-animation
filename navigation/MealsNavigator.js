import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Categories from "../screens/Categories";
import CategoryMeals from "../screens/CategoryMeals";
import Favourites from "../screens/Favourites";
import MealDetails from "../screens/MealDetails";
import {
  navigationOptions,
  tabBarSettings,
  tabBarIconSettings,
  drawerSettings,
} from "./navigationOptions";
import Icon from "react-native-vector-icons//MaterialIcons";
import Filters from "../screens/Filters";

const MealsNavigator = (props) => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator screenOptions={navigationOptions} mode="modal">
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={({ navigation }) => ({
            headerTitle: "Meal Categories",
            headerLeft: () => (
              <Icon.Button
                name={"menu"}
                size={30}
                color={"white"}
                backgroundColor={"transparent"}
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="CategoryMeal"
          component={CategoryMeals}
          options={({ route }) => ({ title: route.params.categoryName })}
        />
        <Stack.Screen
          name="MealDetails"
          component={MealDetails}
          options={({ route }) => ({
            title: route.params.mealName,
            headerRight: () => (
              <Icon.Button
                name={"star"}
                size={30}
                color={"white"}
                backgroundColor={"transparent"}
                onPress={() => console.log("Mark as Fav!")}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </>
  );
};

const FavouritesNavigator = (props) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen
        name="Favourites"
        component={Favourites}
        options={({ navigation }) => ({
          headerTitle: "Your Favourites",
          headerLeft: () => (
            <Icon.Button
              name={"menu"}
              size={30}
              color={"white"}
              backgroundColor={"transparent"}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
        })}
      />
      <Stack.Screen name="MealDetails" component={MealDetails} />
    </Stack.Navigator>
  );
};

const FiltersNavigator = (props) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen
        name="Filters"
        component={Filters}
        options={({ navigation }) => ({
          headerTitle: "Filter Meal",
          headerLeft: () => (
            <Icon.Button
              name={"menu"}
              size={30}
              color={"white"}
              backgroundColor={"transparent"}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const MealsTabNavigator = (props) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator tabBarOptions={tabBarSettings()}>
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={tabBarIconSettings(24, "restaurant", "Meals")}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesNavigator}
        options={tabBarIconSettings(24, "star", "Favourites")}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = (props) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContentOptions={drawerSettings()}>
      <Drawer.Screen name="MealsFab" component={MealsTabNavigator} options={{
        title: "My Meals"
      }} />
      <Drawer.Screen name="Filters" component={FiltersNavigator} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
