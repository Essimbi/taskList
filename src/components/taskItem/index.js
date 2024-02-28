import { View, Text, Pressable } from "react-native";
import { DeleteIcon, Stack, Checkbox } from "native-base";
import { Card } from "react-native-elements";
import style from "./style";
import React from 'react'

const TaskItem = () => {
  return (
    <View>
      <Card containerStyle={style.styleCard}>
        <View style={style.box}>
          <Stack style={style.stack}>
            <Checkbox
              aria-label="Task status" 
            />
            <Text >Toto</Text>
          </Stack>
          <Pressable>
            <DeleteIcon color="black" size="sm" />
          </Pressable>
        </View>
      </Card>
    </View>
  )
}

export default TaskItem