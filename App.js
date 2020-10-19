import React from 'react';
import { View,  ScrollView } from 'react-native';
import Menu from "./components/Menu/Menu";
import Options from "./components/Options/Options";
import Content from "./components/Content/Content";
import MenuBottom from "./components/MenuBottom/MenuBottom";

const App = () => {
    return (
        <View style={{flex:1}}>
            <View style={{alignItems:'center'}}>
                <Menu/>
                <Options/>
            </View>
            <ScrollView>
                <Content/>
                <Content/>
            </ScrollView>
            <MenuBottom/>
        </View>
    );
}

export default App;
