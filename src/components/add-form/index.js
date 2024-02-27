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
          <MaterialIcons name="" size={30} color="black" onPress={showDatepicker} />
            {/* <Button
              onPress={showDatepicker}
              title={<MaterialIcons name="person" size={30} color="black" />}
              style={style.datePicker}
            /> */}
            <Button onPress={showTimepicker} title="Show time picker!" />
            <Text>selected: {date.toLocaleString()}</Text>
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
