import React from "react";
import { StyleSheet, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

const Categories = (props) => {
  const renderGridItems = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate("CategoryMeal", {
            categoryId: itemData.item.id,
            categoryName: itemData.item.title,
          });
        }}
      />
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItems} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Categories;
