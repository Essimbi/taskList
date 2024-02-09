import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    hearder: {
        flexDirection: 'row',
        justifyContent: 'space-between' ,
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: 'white',
        height: 130
    },

    searchInput: {
        width: 10
    },

    listCategoryTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    listCategoryDiv: {
        paddingHorizontal: 15,
        paddingVertical: 15
    }
})

export default style