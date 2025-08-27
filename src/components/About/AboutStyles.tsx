import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgCardProfile: {
        width: 410,
        height: 550,
        marginVertical: 60
    },
    title: {
        color: "#FAA1D4",
        fontSize: 32,
        fontWeight: '800',
        textTransform: 'uppercase',
    },
    containerText: {
        gap: 20
    },
    textSimple: {
        fontSize: 16,
        textAlign: 'justify',
        width: 300,
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: "#FAA1D4",
        borderStyle: "dashed", 
        borderRadius: 10,
        padding: 20,
        gap: 10
    }
});