import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    scrollableItem: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginRight: 15,
        backgroundColor: 'white',
        elevation: 1,
        width: 240,
        borderRadius: 10
    },

    iconStyle: {
        width: 70
    },

    mainText: {
        fontWeight: 'bold',
        fontSize: 14,
    },

    subText: {
        marginTop: 5,
        fontSize: 12
    }
})

export default style ;