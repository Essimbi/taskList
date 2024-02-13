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
    },

    scrallableListe: {
        // paddingHorizontal: 15,
        paddingVertical: 15
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },

      formDiv: {
        paddingVertical: 15,
        marginLeft: -15
      },

      formControl: {
        marginBottom: 20
      },

      containBtn: {
        display: 'flex',
        flexDirection: 'row',
      },

      btnCancel: {
        marginLeft: 200
      },

      btn: {
        marginLeft: 15
      },

})

export default style