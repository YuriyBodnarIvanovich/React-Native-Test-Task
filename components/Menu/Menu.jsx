import React from "react";
import {Text, View} from "react-native";
import {StyleSheet,Image} from "react-native";

const Menu = () =>{
    return(
        <View style={styles.container}>
            <View>
                <Image
                    source={require('../../photo/logo.png')}
                    style={{ width: 40, height: 40}}
                />
            </View>
            <View>
                <Text style={styles.textLogo}>C&B Operation</Text>
            </View>
            <View style={{marginLeft: 100,flex:2,flexDirection: 'row'}}>
                <View>
                    <Image
                        source={require('../../photo/Ellipse935.png')}
                        style={{marginTop:10, marginLeft: 2}}/>
                </View>
                <View>
                    <Image source={require('../../photo/Notifications.png')}
                           style={{marginTop:3}}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 344,
        backgroundColor:'white',
        marginTop: 30,
        height: 50,
        flexDirection:'row',
    },
    textLogo:{
         fontSize: 24,
        fontWeight:'bold',
        marginLeft: 5,
        marginTop: 5
    },

});
export default Menu;
