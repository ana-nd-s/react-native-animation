import React from "react";
import { View, ActivityIndicator, StyleSheet} from "react-native";

const Categories = props => {
    return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color="red" />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
export default Categories;