import React from "react"
import { View, Text, Image, StyleSheet } from "react-native";

const App = () => {
  return(
     <View style={styles.container}>
      <Image source={require('./assets/add.png')} style={styles.image} />
      <Text style={styles.title}>Some title</Text>
      <Text style={styles.content}>
      One common pattern is to make your component accept a style prop which in turn is used to style subcomponents. You can use this to make styles "cascade" the way they do in CSS.
      There are a lot more ways to customize the text style. Check out the Text component reference for a complete list.
      </Text>
     </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:50,
    backgroundColor: 'red',
    marginHorizontal: 10,
    borderWidth: 5,
    borderColor: 'black',
    padding: 10
  },
  image: {
    width: '100%',
    height: 300
  },
  title:{
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
    padding: 5
  },
  content: {
      fontSize: 16,
      color: '#fff',
      padding: 5
  }
})
export default App; 