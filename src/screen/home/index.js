import { View, Text, Pressable } from "react-native";
import React from "react";
import style from "./style";
import { AddIcon, Input, Menu } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const Home = () => {
  return (
    <View>
      {/* Debut du Header */}
      <View style={style.hearder}>
        {/* <Icon name="menu" size="30" color="white" /> */}
        <MaterialIcons name="menu" size={30} color="black" />
        <Input mx="3" placeholder="Search task here..." w="80%" rounded={50} />

        <Menu
          w="190"
          trigger={(triggerProps) => {
            return (
              <Pressable
                accessibilityLabel="More options menu"
                {...triggerProps}
              >
                <AddIcon name="menu" size="5" color="black" />
              </Pressable>
            );
          }}
        >
          <Menu.Item>New category</Menu.Item>
          <Menu.Item>New task</Menu.Item>
        </Menu>
      </View>
      {/* Fin du Header */}

      {/* Liste des catégories */}
      <View style={style.listCategoryDiv}>
        <Text style={style.listCategoryTitle}>Categories</Text>
      </View>
      {/* Fin de la liste des catégories */}

    </View>
  );
};

export default Home;
