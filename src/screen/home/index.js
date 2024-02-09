import { View, Text } from "react-native";
import React from "react";
import style from "./style";
import { AddIcon, Input, ThreeDotsIcon, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

const Home = () => {
  return (
    <View>
      {/* Debut du Header */}
      <View style={style.hearder}>
        {/* <Icon name="menu" size="30" color="white" /> */}
        <MaterialIcons name="menu" size={30} color="black" />
        <Input mx="3" placeholder="Search task here..." w="80%" rounded={50}/>
        <AddIcon name="menu" size="5" color="black" />
      </View>
      {/* Fin du Header */}
    </View>
  );

};

export default Home;
