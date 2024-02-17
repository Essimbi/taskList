import { View, Text, Button } from "react-native";
import React from "react";
import { Input } from "native-base";

const AddForm = () => {
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
  );
};

export default AddForm;
