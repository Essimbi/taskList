import { View, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import style from "./style";

const CategoryItem = ({ item }) => {
  return (
    <View style={style.scrollableItem}>
      <View style={style.iconStyle}>
        <MaterialIcons name={item.icon} size={50} color="black" />
      </View>
      <View>
        <Text style={style.mainText}> {item.title} </Text>
        <Text style={style.subText}> {item.totalTask} </Text>
      </View>
    </View>
  );
};

export default CategoryItem;
