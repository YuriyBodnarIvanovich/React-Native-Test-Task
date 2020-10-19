import React from "react";
import {View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity,TextInput} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import ButtonsOfSlide from "./ButtonsOfSlide/ButtonsOfSlide";

const Content = () =>{
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../photo/1.png')} style={styles.image}>
                <ButtonsOfSlide />
                <LinearGradient colors={['rgba(1,1,1,0.9)', 'transparent']} style={styles.gradient}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{fontWeight: 'bold'}}>$139,896</Text>
                    </TouchableOpacity>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>2020 JOHN DEERE 6145R</Text>
                        <Text style={styles.textAdditional}>#hours #150 #150</Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
            <View style={{alignItems:'center',height:35,paddingTop:5}}>
                <Image
                    source={require('../../photo/Frame613.png')}
                    style={{ width: 75, height: 24}}
                />
            </View>
            <View style={styles.containerOfComment}>
                <Text style={{marginBottom:5}}>
                    <Text style={styles.userNameInComment}>Chad Rembold </Text>
                    This is very recommended product, keep it sharing.
                </Text>
                <Text>
                    <Text style={styles.userNameInComment}>Ryan King</Text> Thanks
                    <Text style={styles.userNameInComment}> Chad Rembold </Text>
                    for sharing a tip.
                </Text>
                <Text style={styles.showMoreInComments}>View all 3 comments</Text>
            </View>
            <View style={{padding: 10, flexDirection:'row'}}>
                <Image
                    source={require('../../photo/Rectangle838.png')}
                    style={{borderRadius: 10, width:24,marginBottom:10}}
                 />
                <TextInput
                    style={styles.addCommentText}
                    placeholder={'Add a comment...'}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        height:500
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        minHeight:280,
        maxHeight:280,
        padding: 10
    },
    textContainer:{
        transform: [{ rotate: '180deg'}],
        flex:1.4,
    },
    text: {
        marginTop:30,
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    textAdditional:{
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    gradient:{
        width:420,
        height: 110,
        padding: 15,
        position: 'absolute',
        bottom: 0,
        transform: [{ rotate: '180deg'}],
        flexDirection: 'row'
    },

    button: {
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        width: 120,
        height: 28,
        borderColor: "#FFFFFF",
        borderWidth: 2,
        borderRadius: 5,
        margin:3,
        transform: [{ rotate: '180deg'}],
    },
    containerOfComment:{
        padding:10,
        borderColor: '#EEEEEE',
        borderWidth: 1
    },
    userNameInComment:{
        fontWeight: 'bold',
    },

    showMoreInComments:{
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 16,
        color: '#707580',
        marginTop: 5
    },
    addCommentText:{
        width: 200,
        height: 24,
        borderColor: 'gray',
        marginLeft:10,
        color: '#707580'
    }

});

export default Content;
