import React from 'react';
import {StyleSheet,ImageBackground, Text, View} from 'react-native';
import ImageText from './ImageText';

export default class Header extends React.Component {
    render() {
        return (
                <ImageBackground
                    source={require('../../../imgs/banner.jpg')}
                    style={styles.banner}>
                    <ImageText
                        header = '- Online Shopping -'
                        paragraph = '- Sample Site -'/>
                </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    banner:{
        width:'100%',
        marginTop:20,
        height:180,
        alignItems: 'center',
        justifyContent: 'center',
    }
});