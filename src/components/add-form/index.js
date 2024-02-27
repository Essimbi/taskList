// import { Input } from "native-base";
import { View, Text, FlatList, Modal, Button } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import style from "./style";
import { Input } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const AddForm = (props) => {
  const [date, setDate] = useState(new Date(1598051730000));

  const close = () => {
    props.closeFunction(!props.modalVisible);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgb(0,0,0,0.5)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: 350,
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
              placeholder="Task's name"
              w="100%"
              rounded={20}
            />
          </View>
          <View style={style.formControl}>
            <Input
              mx="3"
              placeholder="Objective"
              w="100%"
              rounded={20}
            />
          </View>
          <View style={style.formControl}>
            <Input
              mx="3"
              placeholder="Category"
              w="100%"
              rounded={20}
            />
          </View>
          <View style={style.formControlDatePicker}>
            <View style={style.dateStyle}>
              <Text>Date of completion </Text>
              <MaterialIcons
                name="calendar-today"
                size={20}
                color="black"
                onPress={showDatepicker}
              />
              <Text> : </Text>
              <MaterialIcons
                name="alarm"
                size={20}
                color="black"
                onPress={showTimepicker}
              />
            </View>
            {/* <Text>selected: {date.toLocaleString()}</Text> */}
          </View>
          <View style={style.containBtn}>
            <View style={style.btnCancel}>
              <Button
                title="Cancel"
                color={"red"}
                style={style.btn}
                onPress={() => close()}
              />
            </View>
            <View style={style.btn}>
              <Button title="Save" color={"black"} onPress={() => {}} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddForm;
