import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

export default class Controls extends React.Component{

    render(){

        return(

            <View>
                <TouchableOpacity> 
                    <Image source={require("./assets/play.png")} style={styles.image} /> 
                </TouchableOpacity>
            </View>

        )

    }

}

const styles = StyleSheet.create({

    image: {
        width: 50,
        height: 50
    }

})