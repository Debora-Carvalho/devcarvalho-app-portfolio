import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingVertical: 30,
        gap: 20
    },
    containerContact: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20
    },
    containerIcon: {
        width: 50,
        height: 50,
        backgroundColor: '#FAA1D4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
    },
    textSimple: {
        color: '#FFFFFF'
    }
});