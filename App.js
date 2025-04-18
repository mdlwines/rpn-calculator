import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
//import React, { useEffect } from 'react'
import { useState, useRef, useEffect } from 'react';
import KeyPad from './components/Keypad';
import StackItems from './components/StackItems';
import DisplayButtons from './components/DisplayButtons';

export default function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState('');
  const [keyPad, setKeyPad] = useState('primary');
  const [stack, setStack] = useState([]);
  const [registers, setRegisters] = useState({
    Ex: 0,
    Ex2: 0,
    n: 0
  });
  const [clearOnPress, setClearOnPress] = useState(false);

  function ResetRegisters() {
    setRegisters({
      Ex: 0,
      Ex2: 0,
      n: 0
    });
  }

  useEffect(() => {
    setResult("n=" + registers.n + " Σx=" + registers.Ex + " Σx²=" + registers.Ex2);
    setClearOnPress(true);
  }, [registers]);

  useEffect(() => {
    if ((stack.length > 0) && (isNaN(stack[stack.length - 1]))) {
      console.log("Stack with function: " + stack[stack.length - 1]);
      ButtonPress(stack.pop());
    }
  }, [stack]);


  function ButtonPress(value) {
    //console.log(JSON.stringify(value, null, 2));
    // check if value is a number, if so, update the result value
    if (!isNaN(value)) {
      // remove the leading zero if there is one
      if (Number(result) == '' || clearOnPress === true) {
        setResult(value);
        setClearOnPress(false);
      } else {
        if (clearOnPress === true) {
          setResult(value);
          setClearOnPress(false);
        } else {
          setResult(result + value);
        }
      }
      console.log("Result value: " + result);
    } else {
      if (clearOnPress === true) {
        setResult('');
        setClearOnPress(false);
      }
      // check if value is an operator, if so, call the corresponding function
      if (keyPad === 'alpha' && value !== 'ALPHA') {
        if (/^[A-Z]$/.test(value)) {
          setResult(result + value);
        }
      } else {
        switch (value) {
          case 'AltKeyPad':
            if (keyPad === 'primary') {
              setKeyPad('alt');
            } else {
              setKeyPad('primary');
            }
            break;
          case 'ALPHA':
            if (keyPad === 'alpha') {
              setKeyPad('primary');
            } else {
              setKeyPad('alpha');
            }
            //setResult('');
            break;
          case '.':
            // check if there is already a decimal point in the result
            if (result.indexOf('.') === -1) {
              setResult(result + value);
            }
            setClearOnPress(false);
            break;
          case 'ENTER ↑':
            // push the number on the stack
            if (result.length > 0) {
              setStack([...stack, result]);
              setResult('');
              setClearOnPress(true);
            }
            break;
          case '+':
            var working = stack;
            // need to implicitly push the input value to the stack 
            if (result !== '' && clearOnPress === false) {
              working = [...working, result];
            }
            var resultVal = Number(working.pop()) + Number(working.pop());
            setResult(resultVal);
            working.push(resultVal);
            setStack(working);
            setClearOnPress(true);
            break;
          case '-':
            var working = stack;
            // need to implicitly push the input value to the stack 
            if (result !== '' && clearOnPress === false) {
              working = [...working, result];
            }
            var num1 = Number(working.pop());
            var num2 = Number(working.pop());
            var resultVal = num2 - num1;
            setResult(resultVal);
            working.push(resultVal);
            setStack(working);
            setClearOnPress(true);
            break;
          case 'x':
            var working = stack;
            // need to implicitly push the input value to the stack 
            if (result !== '' && clearOnPress === false) {
              working = [...working, result];
            }
            var resultVal = Number(working.pop()) * Number(working.pop());
            setResult(resultVal);
            working.push(resultVal);
            setStack(working);
            setClearOnPress(true);
            break;
          case '/':
            var working = stack;
            // need to implicitly push the input value to the stack 
            if (result !== '' && clearOnPress === false) {
              working = [...working, result];
            }
            var num1 = Number(working.pop());
            var num2 = Number(working.pop());
            var resultVal = num2 / num1;
            setResult(resultVal);
            working.push(resultVal);
            setStack(working);
            setClearOnPress(true);
            break;
          case '←':
            if (result.length > 0) {
              setResult(result.slice(0, -1));
            }
            break;
          case 'CLX':
            resetResult();
            break;
          case 'R/S':
            resetResult();
            break;
          case 'CHS':
            setResult(-Number(result));
            break;
          case 'EEX':
            var working = stack;
            // need to implicitly push the input value to the stack 
            if (result !== '' && clearOnPress === false) {
              working = [...working, result];
            }
            var num1 = Number(working.pop());
            var num2 = Number(working.pop());
            var resultVal = Math.pow(num2, num1);
            setResult(resultVal);
            working.push(resultVal);
            setStack(working);
            setClearOnPress(true);
            break;
          case 'Σ+':
            var working = stack;
            // need to implicitly push the input value to the stack 
            if (result !== '' && clearOnPress === false) {
              working = [...working, result];
            }
            if (working.length > 0) {
              var x = Number(working.pop());
              var registersWorking = registers;
              registersWorking.n += 1;
              registersWorking.Ex += x;
              registersWorking.Ex2 += (x * x);
              setRegisters(registersWorking);
              setResult("n=" + registersWorking.n + " Σx=" + registersWorking.Ex + " Σx²=" + registersWorking.Ex2);
              setStack(working);
            }
            setClearOnPress(true);
            break;
          case 'TAN':
            var working = stack;
            // need to implicitly push the input value to the stack 
            if (result !== '' && clearOnPress === false) {
              working = [...working, result];
            }
            var resultVal = Math.tan(Number(working.pop()));
            setResult(resultVal);
            working.push(resultVal);
            setStack(working);
            setClearOnPress(true);
            break;
          case 'COS':
            var working = stack;
            // need to implicitly push the input value to the stack 
            if (result !== '' && clearOnPress === false) {
              working = [...working, result];
            }
            var resultVal = Math.cos(Number(working.pop()));
            setResult(resultVal);
            working.push(resultVal);
            setStack(working);
            setClearOnPress(true);
            break;
          case 'SIN':
            var working = stack;
            // need to implicitly push the input value to the stack 
            if (result !== '' && clearOnPress === false) {
              working = [...working, result];
            }
            var resultVal = Math.sin(Number(working.pop()));
            setResult(resultVal);
            working.push(resultVal);
            setStack(working);
            setClearOnPress(true);
            break;
          case 'SWAP':
            var working = stack;
            // need to implicitly push the input value to the stack 
            if (result !== '' && clearOnPress === false) {
              working = [...working, result];
            }
            if (working.length > 1) {
              var num1 = Number(working.pop());
              var num2 = Number(working.pop());
              setStack([num1, num2, ...working]);
              setResult('');
            }
            setClearOnPress(true);
            break;
          case 'R↓':
            var working = stack;
            if (working.length > 1) {
              const top = working[0];
              const [last, ...rest] = working;
              working = [...rest, last];
              setResult(top);
              setStack([...working]);
            }
            setClearOnPress(true);
            break;
          case 'CLΣ':
            var working = stack;
            ResetRegisters();
            setClearOnPress(true);
            break;

          case '1/x':
            var working = stack;
            // need to implicitly push the input value to the stack 
            if (result !== '' && clearOnPress === false) {
              working = [...working, result];
            }
            var resultVal = 1 / Number(working.pop());
            setResult(resultVal);
            working.push(resultVal);
            setStack(working);
            setClearOnPress(true);
            break;
          default:
            setResult("No op")
            setClearOnPress(true);
            break;
        }
      }
    }
  }

  function resetResult(e) {
        // Add the code for the resetResult function
//    e.preventDefault();
    setResult('');
    setStack([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>RPN Calculator</Text>
      </View>
      <View style={styles.display}>
        <Text style={styles.displayText}>{result}</Text>
      </View>
      <View style={styles.displayButtons}>
        <DisplayButtons onPress={ButtonPress} />
      </View>
      <View style={styles.keypad}>
        <KeyPad keypad={keyPad} onPress={ButtonPress} />
      </View>
      <View style={styles.stackHeader}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>Stack</Text>
      </View>
      <View style={styles.stack}>
        <StackItems stack={stack} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keypad: {
    flex: 0.80,
    paddingTop: 5,
    backgroundColor: '#fff',
    paddingLeft: 2,
    paddingRight: 2,
  },
  stack: {
    flex: 0.2,
    paddingTop: 5,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'flex-start', // Attach to the bottom
  },
  stackHeader: {
    height: 30,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 0.05,
    paddingTop: 30,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  display: {
    flex: 0.05,
    padding: 10,
    backgroundColor: '#fff8dc',
    justifyContent: 'left',
  },
  displayButtons: {
    padding: 0,
    justifyContent: 'flex-end',
  },
  displayText: {
    fontSize: 30,
    fontFamily: "courier",
    fontStyle: "normal",
    color: 'black',
  },
});

