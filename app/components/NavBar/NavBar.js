import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'; 
import { stylesObj } from './styles';
const styles = StyleSheet.create(stylesObj)

const NavBar = (navigate) => (
	<View style={ styles.navBar } >
      <Text style={ styles.navBar_text_title }>Learn Bangla  
        <Text style={ styles.navBar_text_span }>  বাংলা শেখা</Text>
      </Text>
    </View>
)

export default NavBar
