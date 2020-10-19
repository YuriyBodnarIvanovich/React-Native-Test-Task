import React from "react";
import {TouchableOpacity, View, StyleSheet} from "react-native";

const ButtonsOfSlide = () =>{
    return(
        <View style={styles.slideButtons}>
            <TouchableOpacity style={{flexDirection:'row'}}>
                <View style={styles.itemOfSlideActive}>
                </View>
                <View style={styles.itemOfSlidePassive}>
                </View>
                <View style={styles.itemOfSlidePassive}>
                </View>
                <View style={styles.itemOfSlidePassive}>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    slideButtons:{
        alignItems:'center',
        marginTop: 190,
    },
    itemOfSlideActive:{
        width:6,
        height:6,
        borderRadius: 6,
        backgroundColor: 'white',
        marginLeft: 5
    },
    itemOfSlidePassive:{
        width:6,
        height:6,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: 5,
        opacity:0.6
    }
});
export default ButtonsOfSlide;
