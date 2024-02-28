import { View, Text, Pressable } from "react-native";
import { DeleteIcon, Stack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Card } from "react-native-elements";
import style from "./style";
import React from 'react'

const TaskItem = () => {
  return (
    <View>
      <Card containerStyle={style.styleCard}>
        <View style={style.box}>
          <Stack style={style.stack}>
            
            <Text style={style.titleTask}>Task name</Text>
            <Text>Objective</Text>
            <Text style={style.dateTask}>Date</Text>
          </Stack>
          <View>
            <MaterialIcons name="check-circle" size={16} color="red" />
            <MaterialIcons name="code" size={16} color="black" />
          </View>
        </View>
      </Card>
    </View>
  )
}

export default TaskItem