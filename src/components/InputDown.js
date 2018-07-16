import React, { Component } from 'react';
import {
  StyleSheet,
  Alert,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';
import HeaderBackSelectDown from './BackSelectDown'
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { name } from './HomeScreen'
import { Container, Header, Content, Card, CardItem, Text, Icon, Right} from 'native-base';

export default class InputDownScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { amountDown: null };
    }
    
    handleDown = (amountDown) => {
        this.setState({ amountDown: amountDown })
        console.log(this.state.amountDown)
    }

    sendParam = (amountDown) => {
        let URL = this.props.navigation.getParam('URL');
        let price = this.props.navigation.getParam('price');
        let payDownSibPer = (price * 10) / 100
        if (this.state.amountDown < payDownSibPer) {
            Alert.alert('กรุณาระบุจำนวนเงินดาวน์ให้มากกว่า 10%')
        } else {
        this.props.navigation.navigate('SelectYear', {percen: 10, price: price, payDownSibPer: this.state.amountDown, URL: URL})
        }
    }

    render() {
    let price = this.props.navigation.getParam('price');
      return (
        <Container>
        <HeaderBackSelectDown {...this.props}/>
        <Content  style={{paddingLeft: 10, paddingTop: 8}}>
          <Card  style={{width:387}}>
          <CardItem>
          <Ionicons name="ios-basket" size={30} color="rgb(52,122,255)"/>
              <Text style={{paddingLeft:10}}>ระบุจำนวนเงินดาวน์</Text>
             </CardItem>
            <CardItem>
            <TextInput
                    style={{height: 40, width:350,borderColor: '#fff', borderWidth: 1}}
                    keyboardType='numeric'
                    onChangeText={this.handleDown}
                />
             </CardItem>
             <CardItem>
             <Button
                    onPress={() => this.sendParam(this.state.amountDown)}
                    title="Next"
                    color="rgb(50,63,164)"
            />
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