import { StyleSheet, Text, View, Button} from 'react-native';
import React from 'react'
import CustomButton from './CustomButton';

/*
      <CustomButton onPress={() => alert('Pressed!')} variant="solid" color="primary" size="md">
        Solid Button
      </CustomButton>
*/


function Keypad({ onPress }){
    return (
        <View style={[styles.container]}>
            <View style={styles.row}>
            <CustomButton onPress={() => onPress('Σ+')}> Σ+ </CustomButton>
            <CustomButton onPress={() => onPress('1/x')}>1/x</CustomButton>
            <CustomButton onPress={() => onPress('√x')}> √x </CustomButton>
            <CustomButton onPress={() => onPress('LOG')}>LOG</CustomButton>
            <CustomButton onPress={() => onPress('LN')}>LN</CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton onPress={() => onPress('SWAP')}> &#x21C4; </CustomButton>
            <CustomButton onPress={() => onPress('R↓')}> R↓ </CustomButton>
            <CustomButton onPress={() => onPress('SIN')}>SIN</CustomButton>
            <CustomButton onPress={() => onPress('COS')}>COS</CustomButton>
            <CustomButton onPress={() => onPress('TAN')}>TAN</CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton size="lg" onPress={() => onPress('ENTER ↑')}>ENTER ↑</CustomButton>
            <CustomButton onPress={() => onPress('CHS')}>CHS</CustomButton>
            <CustomButton onPress={() => onPress('EEX')}>EEX</CustomButton>
            <CustomButton onPress={() => onPress('←')}> ← </CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton onPress={() => onPress('-')}>-</CustomButton>
            <CustomButton onPress={() => onPress('7')}>  7  </CustomButton>
            <CustomButton onPress={() => onPress('8')}>  8  </CustomButton>
            <CustomButton onPress={() => onPress('9')}>  9  </CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton onPress={() => onPress('+')}>  +  </CustomButton>
            <CustomButton onPress={() => onPress('4')}>  4  </CustomButton>
            <CustomButton onPress={() => onPress('5')}>  5  </CustomButton>
            <CustomButton onPress={() => onPress('6')}>  6  </CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton onPress={() => onPress('x')}>  x  </CustomButton>
            <CustomButton onPress={() => onPress('1')}>  1  </CustomButton>
            <CustomButton onPress={() => onPress('2')}>  2  </CustomButton>
            <CustomButton onPress={() => onPress('3')}>  3  </CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton onPress={() => onPress('/')}>  /  </CustomButton>
            <CustomButton onPress={() => onPress('0')}>  0  </CustomButton>
            <CustomButton onPress={() => onPress('.')}>  .  </CustomButton>
            <CustomButton onPress={() => onPress('R/S')}> R/S </CustomButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    keys: {
        flex: 0.22, // Adjust to fit 4 buttons per row with spacing
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5, // Add spacing between buttons
        padding: 20,
    },
    fixedKeys: {
        flex: 0.22, // Adjust to fit 4 buttons per row with spacing
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5, // Add spacing between buttons
        padding: 20,
    },
});

export default Keypad;