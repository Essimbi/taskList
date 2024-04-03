import { View, Text, Pressable } from "react-native";
import { DeleteIcon, Stack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Card } from "react-native-elements";
import style from "./style";
import React from 'react'
import { useStore } from "zustand";
import useDataStore from "../../services/task.service";

const TaskItem = (props) => {

  const { task } = props

  let categoryIcon 
  switch(task.category){
    case "1":
      categoryIcon= "code"
    break

    case "2":
      categoryIcon= "school"
    break

    case "3":
      categoryIcon= "home"
    break
  }

  let currentDate = new Date()
  let taskDate = new Date(task.doneDate)
  let checkIcon = (currentDate > taskDate) ? "red" : "green";

  const { updateData, removeData } = useStore(useDataStore, (state) => ({
    updateData: state.updateData,
    removeData: state.removeData,
  }));

  const update = () => {
    props.task.status = !props.task.status ;
    updateData(props.task) ;
  }

  const removeTask = () => {
    removeData(props.task.id);
  }

  return (
    <View>
      <Card containerStyle={style.styleCard}>
        <View style={style.box}>
          <Stack style={style.stack}>
            
            <Text style={style.titleTask}>{ task.name }</Text>
            <Text><MaterialIcons name="" size={20} color="black" />{ task.objective }</Text>
            <Text style={style.dateTask}>{ task.doneDate.toLocaleString() }</Text>
          </Stack>
          <View>
            <MaterialIcons name={categoryIcon} size={16} color="black" />
            <MaterialIcons name="check-circle" size={16} color={checkIcon} />
            <Pressable onPress={removeTask}>
              <DeleteIcon color="black" size="sm" />
            </Pressable>
          </View>
        </View>
      </Card>
    </View>
  )
}

export default TaskItem