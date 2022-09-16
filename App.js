import React from "react"
import { View, Text, Image, StyleSheet } from "react-native";

const App = () => {
  return(
     <View style={styles.container}>
      <Image source={require('./assets/add.png')} />
      <Text>Some title</Text>
      <Text>
      One common pattern is to make your component accept a style prop which in turn is used to style subcomponents. You can use this to make styles "cascade" the way they do in CSS.
      There are a lot more ways to customize the text style. Check out the Text component reference for a complete list.
      </Text>
     </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:50,
    backgroundColor: 'red'
  }
})
export default App;