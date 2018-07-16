import React, { Component } from 'react';
import {
  StyleSheet,
  //Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import HeaderBackBackRabuDown from './BackRabuDown'
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { name } from './HomeScreen'
import { Container, Header, Content, Card, CardItem, Text, Icon, Right} from 'native-base';

export default class SelectYear extends Component {
    render() {
    let percen = this.props.navigation.getParam('percen');
    let price = this.props.navigation.getParam('price');
    let payDownSibPer = this.props.navigation.getParam('payDownSibPer');
    let URL = this.props.navigation.getParam('URL');
    console.log(payDownSibPer)
      return (
        <Container>
        <HeaderBackBackRabuDown {...this.props}/>
        <Content  style={{paddingLeft: 5, paddingTop: 8}}>
          <Card  style={{width:345}}>
          <CardItem>
          <Ionicons name="ios-basket" size={30} color="rgb(52,122,255)"/>
              <Text style={{paddingLeft:10}}>เลือกระยะเวลาการผ่อน</Text>
             </CardItem>
            <CardItem>
              <Text>4 ปี อัตตราดอกเบี้ย 2.5%</Text>
              <Right>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Showdata', {year: 4,interest: 2.5, percenToselectY: percen, price: price, payDownSibPer: payDownSibPer, URL: URL})}
                >
                    <Ionicons name="md-arrow-forward" size={20} color="rgb(52,122,255)"/>
                </TouchableOpacity>
              </Right>
             </CardItem>
             <CardItem>
              <Text>5 ปี อัตตราดอกเบี้ย 3.0%</Text>
              <Right>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Showdata', {year: 5,interest: 3.0, percenToselectY: percen, price: price, payDownSibPer: payDownSibPer, URL: URL})}
                >
                    <Ionicons name="md-arrow-forward" size={20} color="rgb(52,122,255)"/>
                </TouchableOpacity>
              </Right>
             </CardItem>
             <CardItem>
              <Text>6 ปี อัตตราดอกเบี้ย 3.5%</Text>
              <Right>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Showdata', {year: 6,interest: 3.5, percenToselectY: percen, price: price, payDownSibPer: payDownSibPer, URL: URL})}
                >
                    <Ionicons name="md-arrow-forward" size={20} color="rgb(52,122,255)"/>
                </TouchableOpacity>
              </Right>
             </CardItem>
             <CardItem>
              <Text>7 ปี อัตตราดอกเบี้ย 4.0%</Text>
              <Right>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Showdata', {year: 7,interest: 4.0, percenToselectY: percen, price: price, payDownSibPer: payDownSibPer, URL: URL})}
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