import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 40,
        paddingVertical: 10,
    },
    containerSkill: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerIcon: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: "#FFFFFF",
        borderStyle: "dashed", 
        borderRadius: 10,
    },
    textSkill: {
        fontSize: 16,
        color: "#FFFFFF",
    }
});