import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight
} from 'react-native';
import Header from './Header'
import { name } from './HomeScreen'

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Notifications extends Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-document" size={25} color={tintColor}/>
      ),
    };
  
    render() {
      return (
        <View style={{ flex: 1, flexDirection: 'column'}}>
        <Header {...this.props}/>
        <View style={{ flex: 1, backgroundColor: '#fff',alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'rgb(110,110,110)'}}>
            This is Notifications Screen
          </Text>
          <TouchableHighlight 
            style={{ margin: 20, width: 200, height: 45, backgroundColor: 'darkviolet', padding: 10, alignItems: 'center'}}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Text style={{color: '#FFF', fontSize: 18,}}>
              Go to Home {name}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    icon: {
        width: 24,
        height: 24,
    }
  });