import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
  console.log('Task text:', props.text);

 
  return(
    <View style={styles.Shopitem}>
      <View style={styles.ShopitemLeft}>
        <Text style={styles.Shopsquare}></Text>
        <Text style={styles.ShopitemText}>{props.text}</Text>
      </View>
      <View style={styles.Shopcircular}></View>
    </View>
  )

}



// SHOPPING LIST
const styles = StyleSheet.create({
  Shopitem: {
    backgroundColor: '#CBE1E2',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  ShopitemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  Shopsquare: {
    width: 24,
    height: 24,
    backgroundColor: '#34495E',
    opacity: 1,
    borderRadius: 5,
    marginRight: 15,
    color: '#FFD700',
    fontFamily: 'Thonburi-Light',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  ShopitemText: {
    maxWidth: '80%',
    fontFamily: 'Thonburi-Light',
  },
  Shopcircular: {
    width: 12,
    height: 12,
    borderColor: '#34495E',
    borderWidth: 2,
    borderRadius: 5,
  },










});

export default Task; 
