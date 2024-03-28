import { View, Text, FlatList, Modal, ScrollView } from "react-native";
import React, { useState } from "react";
import style from "./style";
import { AddIcon, Input, Fab } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import CategoryItem from "../../components/categoryItem";
import AddForm from "../../components/add-form";
import TaskItem from "../../components/taskItem";
import useDataStore from '../../services/task.service';
import { useStore } from 'zustand';

const Home = () => {
  const categoryData = [
    { id: 1, title: "Coding", icon: "code", totalTask: "10" },
    { id: 2, title: "Learning", icon: "school", totalTask: "5" },
    { id: 3, title: "Home", icon: "home", totalTask: "15" },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  // const toto = "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"
  const closeModal = (value) => {
    setModalVisible(value);
  };

  const { data, updateData } = useStore(useDataStore, (state) => ({
    data: state.data,
    // updateData: state.updateData,
  }));

  return (
    <View>
      {/* Debut du Header */}
      <View style={style.hearder}>
        {/* <Icon name="menu" size="30" color="white" /> */}
        <MaterialIcons name="menu" size={30} color="black" />
        <Input mx="3" placeholder="Search task here..." w="80%" rounded={50} />
        <MaterialIcons name="person" size={30} color="black" />
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

      {/* Bouton d'ajout des task */}
      <Fab
        renderInPortal={true}
        shadow={2}
        size="sm"
        icon={<AddIcon color="white" size="sm" />}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      />
      {/* Fin bouton d'ajout des task */}

      {/* Modal pour ajouter une nouvelle catégorie */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <AddForm closeFunction={closeModal} modalVisible={modalVisible} />
      </Modal>
      {/* Modal pour ajouter une nouvelle catégorie */}

      {/* Liste des taches */}

      <View style={style.listCategoryDiv}>
        <Text style={style.listCategoryTitle}>My tasks</Text>
        <ScrollView style={style.listTask}>
          {
          data.length === 0 ? (
            <Text style={style.emptyListText}>No tasks to display</Text>
          ) : (
            data.map((task) => <TaskItem task={task} />)
          )
          }
          
        </ScrollView>
      </View>

      {/* Fin liste des taches */}
    </View>
  );
};

export default Home;
