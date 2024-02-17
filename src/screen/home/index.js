import { View, Text, FlatList, Modal, Button } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import style from "./style";
import { AddIcon, Input, Fab } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import CategoryItem from "../../components/categoryItem";

const Home = () => {
  const categoryData = [
    { id: 1, title: "Yep", icon: "code", totalTask: "10" },
    { id: 2, title: "Learning", icon: "school", totalTask: "5" },
    { id: 3, title: "Home", icon: "home", totalTask: "15" },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  // const toto = "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"

  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

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
        <View
          style={{
            flex: 1,
            backgroundColor: "rgb(0,0,0,0.1)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 440,
              backgroundColor: "white",
              padding: 15,
              width: "100%",
              borderRadius: 10,
              marginBottom: -425,
            }}
          >
            <Text style={style.listCategoryTitle}>New task</Text>
            <View style={style.formDiv}>
              <View style={style.formControl}>
                <Input
                  mx="3"
                  placeholder="Search task here..."
                  w="100%"
                  rounded={20}
                />
              </View>
              <View style={style.formControl}>
                <Input
                  mx="3"
                  placeholder="Search task here..."
                  w="100%"
                  rounded={20}
                />
              </View>
              <View style={style.formControl}>
                <Input
                  mx="3"
                  placeholder="Search task here..."
                  w="100%"
                  rounded={20}
                />
              </View>
              <View style={style.formControlDatePicker}>
                <Button onPress={showDatepicker} title="Show date picker!" style={style.datePicker}/>
                <Button onPress={showTimepicker} title="Show time picker!" />
                {/* <Text>selected: {date.toLocaleString()}</Text> */}
              </View>
              <View style={style.containBtn}>
                <View style={style.btnCancel}>
                  <Button
                    title="Press me"
                    color={"red"}
                    style={style.btn}
                    onPress={() => setModalVisible(!modalVisible)}
                  />
                </View>
                <View style={style.btn}>
                  <Button
                    title="Press me"
                    color={"black"}
                    onPress={() => setModalVisible(!modalVisible)}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal pour ajouter une nouvelle catégorie */}
    </View>
  );
};

export default Home;
