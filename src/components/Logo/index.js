import React,{useState} from 'react';
import {Text, StyleSheet} from 'react-native';


const Logo = ()=>{
  const [logo, setLogo]= useState('InstaEmilly')

  
  return(
    <>
      <Text style={styles.logo}>{logo}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  logo:{
    alignSelf: "center",
    marginVertical: 25
  }
})

export default Logo;