import React from "react"
import { View, Text, Image, StyleSheet } from "react-native";
import { FlatList } from "react-native";

const contacts = [
  {name: 'John Travolta', contact: '123456'},
  {name: 'David Beckham', contact: '458778'},
  {name: 'Joe Biden', contact: '778988'},
  {name: 'Barak Obama', contact: '977885'},
  {name: 'Chuck Norris', contact: '753367'},
  {name: 'Abhinav Jukhoop', contact: '753367'},
  {name: 'Abhinav Jukhoop', contact: '753367'},
  {name: 'Abhinav Jukhoop', contact: '753367'},
  {name: 'Abhinav Jukhoop', contact: '753367'},
  {name: 'Abhinav Jukhoop', contact: '753367'},
  {name: 'Abhinav Jukhoop', contact: '753367'}

]

const App = () => {
  return(
 <View style={styles.container}> 
    <FlatList 
    showsVerticalScrollIndicator={false}
      vertical
      data={contacts}
      keyExtractor={contact => contact.name}
      renderItem={({item}) => {
        return(
         <View style={styles.contactContainer}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>{item.contact}</Text>
         </View>
        )
      }}
    />
    </View>
  )
  
}

const styles = StyleSheet.create({
  container : {
    marginTop: 40,
  },
  contactContainer :{
    marginBottom: 10,
    padding: 5,
    borderColor:'black',
    borderWidth: 2
  },
  text :{
    fontSize: 18
  }
     
})
export default App; 