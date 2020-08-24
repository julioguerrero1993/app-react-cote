import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Calendario from './components/Calendario'

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      <View style={styles.halfHeight}>
        <Calendario/>
      </View>
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
      flex: 2,
      flexDirection: 'column'
  },
  halfHeight: {
      flex: 2,
      borderWidth: 5,
  },
  quarterHeight: {
      flex: 2,
      borderWidth: 5
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: 'grey'
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center'
  }
});

