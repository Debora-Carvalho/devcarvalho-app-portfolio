import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 40,
        paddingVertical: 10,
    },
    containerHobbie: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerIcon: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: "#FAA1D4",
        borderStyle: "dashed", 
        borderRadius: 10,
    },
    textHobbie: {
        fontSize: 16,
        color: "#FAA1D4",
    }
});