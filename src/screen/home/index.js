import { View, Text, Pressable, FlatList, Modal } from "react-native";
import React, { useMemo, useState } from "react";
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
  const snapPoints = useMemo(() => ['25%', '50%', '70%', 9])

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
          <Menu.Item onPress={() => setModalVisible(true)}>
            New category
          </Menu.Item>
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
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1, backgroundColor: 'rgb(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{height: 350, backgroundColor: 'white', padding: 15, width: '100%', borderRadius: 10, marginBottom: -410 }}>
            <Text style={style.listCategoryTitle}>New task</Text>
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default Home;
