import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Calendar from './components/Calendar';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      
      <View style={styles.halfHeight}>
      
      </View>
      <Calendar/>
      <View style={styles.quarterHeight}>

      </View>
    </ImageBackground>
    </View>
    )
  }
}

const image = { uri: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5b755a235cafe886f57f0c61/golden-cachorro_0.jpg" };
 
const styles = StyleSheet.create({
  container: {
      flex: 6,
      flexDirection: 'column'
  },
  halfHeight: {
      flex: 4,
      borderWidth: 5,
  },
  quarterHeight: {
      flex: 2,
      borderWidth: 2
  },
  image: {
    flex: 6,
    resizeMode: "cover",
    backgroundColor: 'grey'
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center'
  }
});

