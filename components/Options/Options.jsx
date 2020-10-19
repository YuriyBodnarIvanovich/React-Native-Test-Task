import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const Options = () =>{

    const [buttonStatus,SetStatus] = useState(true);

    return(
        <View style={styles.container}>
            <View style={styles.containerForButtons}>
                {buttonStatus ?
                    <TouchableOpacity style={styles.button}
                        onPress={() => {SetStatus(false)}}>

                        <Text style={{fontWeight: 'bold'}}>Available</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.passive}>
                        <Text>Available</Text>
                    </TouchableOpacity>
                }
                {buttonStatus ?
                    <TouchableOpacity style={styles.passive}>
                        <Text>Sold</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.button}
                                      onPress={() => {SetStatus(true)}}>
                        <Text style={{fontWeight: 'bold'}}>Sold</Text>
                    </TouchableOpacity>
                }


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 50,
        backgroundColor:'white',
        alignItems:'center',
    },

    containerForButtons:{
        width: 344,
        height: 34,
        backgroundColor: '#F2F3F5',
        flexDirection:'row'
    },
    button: {
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        width: 166,
        height: 28,
        borderColor: "#FFFFFF",
        borderWidth: 2,
        borderRadius: 5,
        margin:3
    },
    passive: {
        alignItems: 'center',
        backgroundColor: "#F2F3F5",
        width: 166,
        height: 28,
        borderColor: "#F2F3F5",
        borderWidth: 2,
        borderRadius: 5,
        margin:3
    },
})


export default Options;
