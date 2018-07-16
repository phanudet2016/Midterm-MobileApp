import React, { Component } from 'react';
import {
  StyleSheet,
  //Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import HeaderBackHome from './BackHome'
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { name } from './HomeScreen'
import { Container, Header, Content, Card, CardItem, Text, Icon, Right} from 'native-base';

export default class SelectDown extends Component {
    render() {
    const price = this.props.navigation.getParam('price');
      return (
        <Container>
        <HeaderBackHome {...this.props}/>
        <Content  style={{paddingLeft: 10, paddingTop: 8}}>
          <Card  style={{width:387}}>
          <CardItem>
          <Ionicons name="ios-basket" size={30} color="rgb(52,122,255)"/>
              <Text style={{paddingLeft:10}}>เลือกรูปแบบการดาวน์{price}</Text>
             </CardItem>
            <CardItem>
              <Text>ระบุเงินดาวน์</Text>
              <Right style={{paddingLeft:210}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('InputDown', {price: price})}
              >
                <Ionicons name="ios-arrow-forward-outline" size={30} color="rgb(52,122,255)"/>
              </TouchableOpacity>
              </Right>
             </CardItem>
             <CardItem>
              <Text>เลือกแบบเปอร์เซ็นต์</Text>
              <Right style={{paddingLeft:160}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('RabuDown', {price: price})}
              >
                <Ionicons name="ios-arrow-forward-outline" size={30} color="rgb(52,122,255)"/>
              </TouchableOpacity>
              </Right>
             </CardItem>
           </Card>
        </Content>
      </Container>
    //     <View style={{ flex: 1, flexDirection: 'column'}}>
    //     <HeaderBackHome {...this.props}/>
    //     <View style={{ flex: 1, backgroundColor: '#fff',alignItems: 'center',justifyContent: 'flex-start'}}>
    //       <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'rgb(110,110,110)'}}>
    //         This is Notifications Screen
    //       </Text>
    //       <TouchableHighlight 
    //         style={{ margin: 20, width: 70, height: 45, backgroundColor: 'darkviolet', padding: 10, alignItems: 'center'}}
    //         onPress={() => this.props.navigation.navigate('Home')}
    //       >
    //         <Text style={{color: '#FFF', fontSize: 18,}}>
    //           10 %
    //         </Text>
    //       </TouchableHighlight>
    //       <TouchableHighlight 
    //         style={{ margin: 20, width: 70, height: 45, backgroundColor: 'darkviolet', padding: 10, alignItems: 'center'}}
    //         onPress={() => this.props.navigation.navigate('Home')}
    //       >
    //         <Text style={{color: '#FFF', fontSize: 18,}}>
    //           10 %
    //         </Text>
    //       </TouchableHighlight>
    //     </View>
    //   </View>
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