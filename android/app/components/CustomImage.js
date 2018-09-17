import React from 'react';
import {StyleSheet,ImageBackground} from 'react-native';
import ImageText from './ImageText';

export default class CustomImage extends React.Component{
    render() {
        return (
            <ImageBackground source={this.props.imageSource}
                   style={styles.image}>
                   <ImageText header={this.props.header}
                              paragraph = {this.props.paragraph}/>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200,
        alignItems: 'center',
        justifyContent: 'center',
    }
});