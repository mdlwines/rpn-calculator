import { StyleSheet, Text, View, FlatList} from 'react-native';
import React, { useRef, useEffect } from 'react'

const ITEM_HEIGHT = 40;

const Item = ({ name }) => (
  <View>
    <Text style={stackStyles.itemText}>{name}</Text>
  </View>
);

const StackItems = ({stack}) => {
    const stackArray = stack.map((name, index) => ({ name, id: index + 1 }));
    const renderItem = ({ item }) => <Item name={item.name} />;
    const listRef = useRef(null);
    let offsetVal = stackArray.length === 0 ? 1 : stackArray.length - 1;
    console.log("Offset value: " + offsetVal);

    useEffect(() => {
        if (listRef.current && stackArray.length > 0) {
          listRef.current.scrollToOffset({ animated: true, offset: offsetVal * ITEM_HEIGHT });
        }
    }, [stack]);

    console.log(JSON.stringify(stackArray, null, 2));
    return (
        <View>
          <FlatList 
              ref={listRef} 
              inverted={true} 
              data={stackArray} 
              keyExtractor={(item) => item.id} 
              renderItem={renderItem}>
          </FlatList>
        </View>
    );
};

const stackStyles = StyleSheet.create({
  container: {
    flex: 0.3,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  itemText: {
    color: 'black',
    paddingLeft: 10,
    height: ITEM_HEIGHT,
    fontSize: 24,
  },
});

export default StackItems;