import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    box: {
        display: 'flex',
        flexDirection: 'row',
    },

    name: {
        marginLeft: 8
    },

    nameTrue: {
        marginLeft: 8,
        textDecorationLine: 'line-through',
        color: "red"
    },

    stack: {
        display: 'flex',
        flexDirection: 'column',
        width: 315
    },

    styleCard: {
        width: 365,
        paddingHorizontal: 15,
        marginLeft: -2,
        height: 80,
        borderRadius: 15,
        marginBottom: -10
    },

    titleTask: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    dateTask: {
        fontSize: 10
    },
})

export default style ;