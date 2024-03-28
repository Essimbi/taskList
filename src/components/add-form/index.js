import { View, Text, Button } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import style from "./style";
import { Input } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { nanoid } from 'nanoid/non-secure';
import useDataStore from "../../services/task.service";
import { useNavigation } from '@react-navigation/native';

const AddForm = (props) => {

  const { addData } = useDataStore();

  const [date, setDate] = useState(new Date());
  const [taskName, setTaskName] = useState();
  const [taskObjective, setTaskObjective] = useState();
  const [taskCategory, setTaskCategory] = useState("1");

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

  const handleChangeTaskName = (text) => {
    setTaskName(text)
  }

  const handleChangeTaskObjective = (text) => {
    setTaskObjective(text)
  }

  const handleCreateTask = () => {
    let newTask = {
      id: `task-${nanoid()}`,
      name: taskName,
      objective: taskObjective,
      category: taskCategory,
      doneDate: date,
      createdDate: new Date(),
      status: "done"
    }
    addData(newTask);
    close();
  }

  return (
    <View
      style={style.divModal}
    >
      <View
        style={style.formStyle}
      >
        <Text style={style.FormTitle}>New task</Text>
        <View style={style.formDiv}>
          <View style={style.formControl}>
            <Input mx="3" placeholder="Task's name" w="100%" rounded={20} value={taskName} onChangeText={handleChangeTaskName} />
          </View>
          <View style={style.formControl}>
            <Input mx="3" placeholder="Objective" w="100%" rounded={20} value={taskObjective} onChangeText={handleChangeTaskObjective} />
          </View>
          <View style={style.textStyle}>
            <Text style={style.listCategoryTitle}>Choose category</Text>
            <Picker
              selectedValue={taskCategory}
              onValueChange={(itemValue) => setTaskCategory(itemValue)}
            >
              <Picker.Item label="Coding" value="1" />
              <Picker.Item label="Learning" value="2" />
              <Picker.Item label="Home" value="3" />
            </Picker>
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
              <Button title="Save" color={"black"} onPress={() => handleCreateTask()} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddForm;
