import React, { Component } from 'react';
import {
  StyleSheet,
  //Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Veiw,
  PixelRatio
} from 'react-native';
import HeaderBackHome from './BackHome'
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { name } from './HomeScreen'
import { Container, Header, Content, Card, CardItem, Text, Icon, Right} from 'native-base';

export default class SelectDown extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            Payment: null, 
            Allinterest: null,
            CarLoan: null,
            PaySum: null
        });
    } 

    componentDidMount () {
        this.payDown()
    }

    payDown () {
        let percen = this.props.navigation.getParam('percenToselectY');
        let price = this.props.navigation.getParam('price');
        
        let amountDown
        let payDownSibPer = this.props.navigation.getParam('payDownSibPer');
        if (payDownSibPer !== null) {
            amountDown = payDownSibPer
            console.log(amountDown)
        } else if (payDownSibPer === NaN) {
            // amountDown = (price * percen) / 100
            console.log(55)
        }
        console.log(payDownSibPer, amountDown)
        // เงินดาวน์
        // let amountDown = (price * percen) / 100
        // ค่างวด
        let Payment = price - amountDown
        // ดอกเบี้ยทั้งหมด
        let interest = this.props.navigation.getParam('interest');
        let year = this.props.navigation.getParam('year');
        let Allinterest = (((Payment / (year * 12)) * interest) / 100) * (year * 12)
        // ค่าเงินผ่อนงวดรถ
        let CarLoan = (Payment + Allinterest) / (year * 12)
        // จำนวนเงินที่ใช้ทั้งหมด
        let PaySum = (CarLoan * (year * 12)) + amountDown
        console.log(CarLoan)
        this.setState({
            Payment: Payment,
            Allinterest: Allinterest,
            CarLoan: CarLoan,
            PaySum: PaySum
        })
    }

    render() {
    let interest = this.props.navigation.getParam('interest');
    let percen = this.props.navigation.getParam('percenToselectY');
    let price = this.props.navigation.getParam('price');
      return (
        <Container>
        <HeaderBackHome {...this.props}/>
        <Content  style={{paddingLeft: 10, paddingTop: 8}}>
          <Card  style={{width:387}}>
          <CardItem cardBod style={{borderBottomColor: '#47315a',borderBottomWidth: 1 / PixelRatio.get()}}y>
                <Image source={require('../asset/yaris.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          <CardItem>
          <Ionicons name="ios-basket" size={30} color="rgb(52,122,255)"/>
              <Text style={{paddingLeft:10}}>รายละเอียดการผ่อนรถยนต์</Text>
             </CardItem>
            <CardItem>
              <Text>ยอดเงินดาวน์</Text>
              <Right>
                <Text>{percen}%</Text>
              </Right>
             </CardItem>
             <CardItem>
              <Text>ยอดเงินที่ต้องนำมาคำนวณ</Text>
              <Right>
                <Text>{this.state.Payment}</Text>
              </Right>
             </CardItem>
             <CardItem>
              <Text>ยอดเงินดอกเบี้ยทั้งหมด</Text>
              <Right>
                <Text>{this.state.Allinterest}</Text>
              </Right>
             </CardItem>
             <CardItem>
              <Text>ยอดเงินผ่อนต่องวด</Text>
              <Right>
                <Text>{this.state.CarLoan}</Text>
              </Right>
             </CardItem>
             <CardItem>
              <Text>จำนวนที่ใช้ทั้งหมด</Text>
              <Right>
                <Text>{this.state.PaySum}</Text>
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