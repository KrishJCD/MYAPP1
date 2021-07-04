import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class MyButton extends Component{
  render(){
    return(
      <View style={{width:120,height:20}}>
        <Button title="MyButton" color="#212121"></Button>
      </View>
    );
  }
}


export default class App extends Component {
  render() {
    return (
        <View style={{paddingTop:100, marginLeft:20}}>
          <Text style={{marginTop:50}}>My first App</Text>
          <MyButton/>
        </View>
    );
  }
}