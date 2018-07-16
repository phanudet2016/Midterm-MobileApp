import React, { Component } from 'react';
import {
  StyleSheet,
  //Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import HeaderBackSelectDown from './BackSelectDown'
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { name } from './HomeScreen'
import { Container, Header, Content, Card, CardItem, Text, Icon, Right} from 'native-base';

export default class RabuDown extends Component {
    render() {
    let price = this.props.navigation.getParam('price');
    let URL = this.props.navigation.getParam('URL');
      return (
        <Container>
        <HeaderBackSelectDown {...this.props}/>
        <Content  style={{paddingLeft: 5, paddingTop: 8}}>
          <Card  style={{width:345}}>
          <CardItem>
          <Ionicons name="ios-basket" size={30} color="rgb(52,122,255)"/>
              <Text style={{paddingLeft:10}}>เลือกแบบเปอร์เซ็นต์</Text>
             </CardItem>
            <CardItem>
              <Text>10%</Text>
              <Right style={{paddingLeft:210}}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SelectYear', {percen: 10, price: price, URL: URL})}
                >
                    <Ionicons name="md-arrow-forward" size={20} color="rgb(52,122,255)"/>
                </TouchableOpacity>
              </Right>
             </CardItem>
             <CardItem>
              <Text>15%</Text>
              <Right style={{paddingLeft:205}}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SelectYear', {percen: 15, price: price, URL: URL})}
                >
                    <Ionicons name="md-arrow-forward" size={20} color="rgb(52,122,255)"/>
                </TouchableOpacity>
              </Right>
             </CardItem>
             <CardItem>
              <Text>20%</Text>
              <Right style={{paddingLeft:205}}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SelectYear', {percen: 20, price: price, URL: URL})}
                >
                    <Ionicons name="md-arrow-forward" size={20} color="rgb(52,122,255)"/>
                </TouchableOpacity>
              </Right>
             </CardItem>
             <CardItem>
              <Text>25%</Text>
              <Right style={{paddingLeft:205}}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SelectYear', {percen: 25, price: price, URL: URL})}
                >
                    <Ionicons name="md-arrow-forward" size={20} color="rgb(52,122,255)"/>
                </TouchableOpacity>
              </Right>
             </CardItem>
             <CardItem>
              <Text>30%</Text>
              <Right style={{paddingLeft:205}}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SelectYear', {percen:30, price: price, URL: URL})}
                >
                    <Ionicons name="md-arrow-forward" size={20} color="rgb(52,122,255)"/>
                </TouchableOpacity>
              </Right>
             </CardItem>
           </Card>
        </Content>
      </Container>
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