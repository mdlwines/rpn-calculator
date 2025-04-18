import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react'

            /*
            <View style={styles.row}>
                <TouchableOpacity onPress={onPress('ALPHA')} style={[styles.buttonStyle]}>
                    <Text style={[styles.textStyle]}>ALPHA</Text>
                </TouchableOpacity>
            </View>
            */
const DisplayButtons = ({ onPress }) => {
    const styles = StyleSheet.create({
        container: {
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            padding: 5,
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'right',
            alignItems: 'center',
            marginBottom: 5,
        },
        displayKeys: {
            flex: 0.22, // Adjust to fit 4 buttons per row with spacing
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5, // Add spacing between buttons
            padding: 20,
        },
        buttonStyle: {
            width: 90,
            height: 20,
            borderRadius: 3,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 0,
            backgroundColor: 'grey',
            borderColor: 'outline',
        },
        textStyle: {
            color: '#fff',
            fontSize: 10,
            fontWeight: '600',
        },
    });
    return (
        <View style={[styles.container]}>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => onPress('ALPHA')} style={[styles.buttonStyle]}>
                    <Text style={[styles.textStyle]}>ALPHA</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}

export default DisplayButtons;