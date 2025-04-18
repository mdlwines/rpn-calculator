import { StyleSheet, Text, View, Button} from 'react-native';
import React from 'react'
import CustomButton from './CustomButton';

function Keypad({ onPress, keypad = 'primary' }) {
    switch (keypad) {
        case 'alpha':
            return AlphaKeypad({ onPress });
        case 'primary':
            return PrimaryKeypad({ onPress });
        case 'alt':
            return AltKeypad({ onPress });
        default:
            return PrimaryKeypad({ onPress });
    }
}

function PrimaryKeypad({ onPress }){
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
            <CustomButton color="action" onPress={() => onPress('AltKeyPad')}></CustomButton>
            <CustomButton onPress={() => onPress('XEQ')}>XEQ</CustomButton>
            <CustomButton onPress={() => onPress('STO')}>STO</CustomButton>
            <CustomButton onPress={() => onPress('RCL')}>RCL</CustomButton>
            <CustomButton onPress={() => onPress('SST')}>SST</CustomButton>
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
            <CustomButton onPress={() => onPress('/')}>÷</CustomButton>
            <CustomButton onPress={() => onPress('0')}>  0  </CustomButton>
            <CustomButton onPress={() => onPress('.')}>  .  </CustomButton>
            <CustomButton onPress={() => onPress('R/S')}> R/S </CustomButton>
            </View>
        </View>
    )
}

function AlphaKeypad({ onPress }){
    return (
        <View style={[styles.container]}>
            <View style={styles.row}>
            <CustomButton color="alpha" onPress={() => onPress('A')}>A</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('B')}>B</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('C')}>C</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('D')}>D</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('E')}>E</CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton color="alpha" onPress={() => onPress('F')}>F</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('G')}>G</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('H')}>H</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('I')}>I</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('J')}>J</CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton color="action" onPress={() => onPress('N/A')}></CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('K')}>K</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('L')}>L</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('M')}>M</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('N/A')}></CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton size="lg" color="alpha" onPress={() => onPress('N')}>N</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('O')}>O</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('P')}>P</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('N/A')}></CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton color="alpha" onPress={() => onPress('Q')}>Q</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('R')}>R</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('S')}>S</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('T')}>T</CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton color="alpha" onPress={() => onPress('U')}>U</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('V')}>V</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('W')}>W</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('X')}>X</CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton color="alpha" onPress={() => onPress('Y')}>Y</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('Z')}>Z</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('=')}>=</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('?')}>?</CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton color="alpha" onPress={() => onPress(':')}>:</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('SPACE')}>SPACE</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress(',')}>,</CustomButton>
            <CustomButton color="alpha" onPress={() => onPress('N/A')}></CustomButton>
            </View>
        </View>
    )
}

function AltKeypad({ onPress }){
    return (
        <View style={[styles.container]}>
            <View style={styles.row}>
            <CustomButton color="secondary" onPress={() => onPress('Σ-')}> Σ- </CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('y^x')}>y&#x157D;</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('x²')}>x²</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('10^x')}>10&#x157D;</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('e^x')}>e&#x157D;</CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton color="secondary" onPress={() => onPress('CLΣ')}>CLΣ</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('%')}>%</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('SIN-1')}>SIN&#x207B;&#185;</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('COS-1')}>COS&#x207B;&#185;</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('TAN-1')}>TAN&#x207B;&#185;</CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton color="action" onPress={() => onPress('AltKeyPad')}></CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('ASN')}>ASN</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('LBL')}>LBL</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('GTO')}>GTO</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('BST')}>BST</CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton size="lg" color="secondary" onPress={() => onPress('CATALOG')}>CATALOG</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('ISG')}>ISG</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('RTN')}>RTN</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('CLX')}>CL&#x1D465;/A</CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton color="secondary" onPress={() => onPress('x=y')}>x=y?</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('SF')}>SF</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('CF')}>CF</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('FS?')}>FS?</CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton color="secondary" onPress={() => onPress('x<=y')}>x≤y?</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('BEEP')}>BEEP</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('P→R')}>P→R</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('R→P')}>R→P</CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton color="secondary" onPress={() => onPress('x>=y')}>x≥y?</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('FIX')}>FIX</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('SCI')}>SCI</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('ENG')}>ENG</CustomButton>
            </View>

            <View style={styles.row}>
            <CustomButton color="secondary" onPress={() => onPress('x=0')}>x=0?</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('π')}>π</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('LASTx')}>LAST&#x1D465;</CustomButton>
            <CustomButton color="secondary" onPress={() => onPress('VIEW')}>VIEW</CustomButton>
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