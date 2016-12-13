import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import { stylesObj } from './styles';
const styles = StyleSheet.create(stylesObj)

const NavBar = () => {
	return <View style={ styles.navBar } >
      <Text style={ styles.navBar_text_title }>Learn Bangla  
        <Text style={ styles.navBar_text_span }>  বাংলা শেখা</Text>
      </Text>
    </View>
}

export default NavBar