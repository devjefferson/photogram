import React, { useState} from 'react';
import {Text, View, StyleSheet,TouchableOpacity,Image} from 'react-native';

const Photo = ({Img}) => {
  const [like, setLike] = useState(0);
 
  
  const incrementa = () => {
    setLike(like + 1)
  }
  return (
    <View style={styles.container}>
          <Image style={styles.image} source={Img}/>
          <TouchableOpacity>
          <Text style={styles.text} onPress={incrementa}>{like} Like</Text>
          </TouchableOpacity>      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text:{
    fontSize: 22,
    color: "#00FF00"
  },
  image:{
    height: 250,
    width:250
  }
});

export default Photo;