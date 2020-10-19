import React from "react";
import {Image, View,StyleSheet} from "react-native";

const MenuBottom = () =>{
    return(
        <View style={styles.container}>
            <Image source={require('../../photo/Feed.png')} style={styles.item}/>
            <Image source={require('../../photo/Customers.png')} style={styles.item}/>
            <Image source={require('../../photo/Mark.png')} style={styles.item}/>
            <Image source={require('../../photo/Chat.png')} style={styles.item}/>
            <Image source={require('../../photo/Union.png')} style={styles.item}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:48,
        paddingTop:10,
        paddingLeft:17,
        flexDirection:'row'
    },
    item:{
        marginRight: 60
    },
});
export default MenuBottom;
