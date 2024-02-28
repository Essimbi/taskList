import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  divModal: {
    flex: 1,
    backgroundColor: "rgb(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },

  formStyle: {
    height: 340,
    backgroundColor: "white",
    padding: 15,
    width: "100%",
    borderRadius: 10,
    marginBottom: -425,
  },

  FormTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },

  textStyle: {
    paddingHorizontal: 25,
  },

  formDiv: {
    paddingVertical: 15,
    marginLeft: -25,
  },

  formControl: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },

  containBtn: {
    display: "flex",
    flexDirection: "row",
  },

  btnCancel: {
    marginLeft: 200,
  },

  btn: {
    marginLeft: 15,
  },

  formControlDatePicker: {
    paddingHorizontal: 25,
    display: "flex",
    flexDirection: "row",
    marginBottom: 15
  },

  dateStyle: {
    display: "flex",
    flexDirection: "row",
  },
});

export default style;
