import {
  View,
  Text,
  Pressable,
  FlatList,
  Alert,
  Modal,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import style from "./style";
import { AddIcon, Input, Menu } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import CategoryItem from "../../components/categoryItem";

const Home = () => {
  const categoryData = [
    { id: 1, title: "Yep", icon: "code", totalTask: "10" },
    { id: 2, title: "Learning", icon: "school", totalTask: "5" },
    { id: 3, title: "Home", icon: "home", totalTask: "15" },
  ];

  const [modalVisible, setModalVisible] = useState(false);

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
          <Menu.Item onPress={() => setModalVisible(true)}>New category</Menu.Item>
          <Menu.Item>New task</Menu.Item>
        </Menu>
      </View>
      {/* Fin du Header */}

      {/* Liste des catégories */}
      <View style={style.listCategoryDiv}>
        <Text style={style.listCategoryTitle}>Categories</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={style.scrallableListe}
          data={categoryData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <CategoryItem item={item} />;
          }}
        />
      </View>
      {/* Fin de la liste des catégories */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>Hello World!</Text>
            <Pressable
              style={[style.button, style.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={style.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
