import React from "react";
import {Image, View,StyleSheet} from "react-native";

const MenuBottom = () =>{
    return(
        <View style={styles.container}>
                <View style={styles.item}>
                    <Image source={require('../../photo/Feed.png')}/>
                </View>
                <View style={styles.item}>
                    <Image source={require('../../photo/Customers.png')}/>
                </View>
                <View style={styles.item}>
                    <Image source={require('../../photo/Mark.png')}/>
                </View>
                <View style={styles.item}>
                    <Image source={require('../../photo/Chat.png')} />
                </View>
                <View style={styles.item}>
                    <Image source={require('../../photo/Union.png')}/>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:48,
        paddingTop:10,
        paddingLeft: 30,
        flexDirection:'row',
        justifyContent:'center'
    },
    item:{
        flex:1
    },
});
export default MenuBottom;
