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
        flexDirection: 'row',
        width: 300
    },

    styleCard: {
        width: 365,
        paddingHorizontal: 15,
        marginLeft: -2,
        height: 80,
        borderRadius: 15,
        marginBottom: -10
    }
})

export default style ;