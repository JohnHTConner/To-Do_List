import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform } from 'react-native';
import Task from './components/Task';



export default function App() {
  
  {/* SHOPPING LIST*/}

  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  {/* UNIVERSITY LIST */}

  const [unitask, setUniTask] = useState('');
  const [unitaskItems, setUniTaskItems] = useState([]);


  {/* TRAVEL LIST */}

  const [traveltask, setTravelTask] = useState('');
  const [travelTaskItems, setTravelTaskItems] = useState([]);

{/* defualt sorting option*/}
  const [selectedCategory, setSelectedCategory] = useState('university') 


  
  const handleShopAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask('');
  };

  const handleUniAddTask = () => {
    Keyboard.dismiss();
    setUniTaskItems([...unitaskItems, unitask]);
    setUniTask('');
  };
  
  const handleTravelAddTask = () => {
    Keyboard.dismiss();
    setTravelTaskItems([...travelTaskItems, traveltask]);
    setTravelTask('');
  };
  

const handleAddTaskForCategory = (category, items, setFunction, currentTask) => {
    Keyboard.dismiss();
    if (currentTask.trim() !== '') {
        setFunction([...items, currentTask]);
        setFunction(' ');
    }
};

  

  {/* Makes the tasks dissapear for good*/}
  const completeShopTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  const completeUniTask = (index) => {
    let itemsCopy = [...unitaskItems];
    itemsCopy.splice(index, 1);
    setUniTaskItems(itemsCopy)
  }

  const completeTravelTask = (index) => {
    let itemsCopy = [...travelTaskItems];
    itemsCopy.splice(index, 1);
    setTravelTaskItems(itemsCopy)
  }



  return (
    <View style={styles.container}>

      {/* SHOPPING list*/}
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.ShoptasksWrapper}>
          <Text style={styles.ShopsectionTitle}>Shopping list</Text>
          <View style={styles.Shopitems}>
            {taskItems.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => completeShopTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      



      {/*UNIVERSITY LIST*/}
  
    
        <View style={styles.UnitasksWrapper}>
          <Text style={styles.UnisectionTitle}>University list</Text>
          <View style={styles.Uniitems}>
            {unitaskItems.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => completeUniTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            ))}
          </View>
        </View>





      {/* TRAVEL LIST*/}

        <View style={styles.TraveltasksWrapper}>
          <Text style={styles.TravelsectionTitle}>Travel list</Text>
          <View style={styles.Travelitems}>
            {travelTaskItems.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => completeTravelTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
  
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          value={task}   
          onChangeText={(text) => {
            console.log('Updated task value:', text);
            setTask(text);
          }}
          />

        {/* Category w */}
        
        <View style={{ marginTop: 50, marginBottom: 50, zIndex: 1, }}></View>
        
         {/* Shopping add button*/}
        <TouchableOpacity onPress={() => handleShopAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
          </TouchableOpacity>

          {/*Uni add button*/}
          <TouchableOpacity onPress={() => handleUniAddTask()}>
          <View style={styles.addWrapper2}>
            <Text style={styles.addText2}>+</Text>
          </View>
          </TouchableOpacity>
          
          {/*Travel add button */}
          <TouchableOpacity onPress={() => handleTravelAddTask()}>
          <View style={styles.addWrapper3}>
            <Text style={styles.addText3}>+</Text>
          </View>
          </TouchableOpacity>

          
          
        

      </KeyboardAvoidingView>
    </View>
  );
}



/* for the whole page background*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B1CFD0',
  },


  /* ONLY FOR THE SHOPPPING LIST SECTION*/
  ShoptasksWrapper: {
    paddingTop: 55,
    paddingHorizontal: 20,
  },

  ShopsectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Thonburi-Light',
    color: '#FFD700',
    backgroundColor: '#34495E',
    width: 154,
    height: 37,
    borderRadius: 7,
  },

  Shopitems: {
    marginTop: 30,
  },


    /* ONLY FOR THE UNIVERSITY LIST SECTION*/
    UnitasksWrapper: {
      paddingTop: 55,
      paddingHorizontal: 20,
    },
  
    UnisectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      fontFamily: 'Thonburi-Light',
      color: '#8B4513',
      backgroundColor: '#F0E68C',
      width: 163,
      height: 37,
      borderRadius: 7,
    },
  
    Uniitems: {
      marginTop: 30,
      height: 'auto',
    },


  /* ONLY FOR THE TRAVEL LIST SECTION*/
    TraveltasksWrapper: {
      paddingTop: 55,
      paddingHorizontal: 20,
    },
    
    TravelsectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      fontFamily: 'Thonburi-Light',
      color: '#007FFF',
      backgroundColor: '#FFD700',
      width: 120,
      height: 37,
      borderRadius: 7,
      marginLeft: 0,
    },
    
    Travelitems: {
      marginTop: 30,
      height: 'auto',

    },


    /* for the tasks*/
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#000000',
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    height: 60,
    paddingTop: 20,
    color: '#000000', 
    marginLeft: 35,
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#34495E',
    color: '#FFD700',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginBottom: 140,
    marginLeft: 135,
   
  },

  addWrapper2:{
    width: 60,
    height: 60,
    backgroundColor: '#F0E68C',
    color: '#8B4513',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginLeft: 0,
    
  },

  addWrapper3:{
    width: 60,
    height: 60,
    backgroundColor: '#FFD700',
    color: '#8B4513',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginTop: 130,
    marginRight: 35,
    
  },

  addText: {},

  addText2:{},

  addText3:{},

});

