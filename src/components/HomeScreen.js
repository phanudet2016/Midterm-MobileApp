import React, { Component } from 'react';
import {
  StyleSheet,
  //Text,
  View,
  Image,
  //Button,
  TouchableHighlight,
  TouchableOpacity,
  PixelRatio
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

// component
import HeaderMenu from './Header'

let price = ''
export default class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Ionicons name="md-home" size={25} color={tintColor}/>
        ),
    };

  render() {
    return (
      //   <View style={{ flex: 1, flexDirection: 'column'}}>
      //   <HeaderMenu {...this.props}/>
      //   <View style={{ flex: 1, backgroundColor: '#fff',alignItems: 'center',justifyContent: 'center'}}>
      //     <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'rgb(110,110,110)'}}>
      //       This is Home Screen
      //     </Text>
      //     <TouchableHighlight 
      //       style={{ margin: 20, width: 200, height: 45, backgroundColor: 'darkviolet', padding: 10, alignItems: 'center'}}
      //       onPress={() => this.props.navigation.navigate('Notifications')}
      //      >
      //       <Text style={{color: '#FFF', fontSize: 18,}}>
      //           Go to Notifications
      //       </Text>
      //     </TouchableHighlight>
      //   </View>
      // </View>
      <Container>
        <HeaderMenu {...this.props}/>
        <Content style={{paddingLeft: 10, paddingTop: 8}}>

          {/********************************** Yaris *****************************************************/}
          <Card style={{width:387}}>
            <CardItem style={{borderBottomColor: '#47315a',borderBottomWidth: 1 / PixelRatio.get()}}>
              <Left>
                <Thumbnail source={require('../asset/yaris.png')} />
                <Body>
                  <Text>Yaris</Text>
                  <Text note>490,000 บาท</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBod style={{borderBottomColor: '#47315a',borderBottomWidth: 1 / PixelRatio.get()}}y>
              <TouchableOpacity style={styles.ImagebuttonStyle} onPress={() => this.props.navigation.navigate('SelectDown', {price: 490000, URL: '../asset/yaris.png'})}>
                <Image source={require('../asset/yaris.png')} style={{height: 200, width: null, flex: 1}}/>
              </TouchableOpacity>
            </CardItem>
            <CardItem>
              <Body>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('SelectDown', {price: 490000, URL: '../asset/yaris.png'})}>
                  <Text style={styles.textStyle}>
                    Buy
                  </Text>
                </TouchableOpacity>
              </Body>
            </CardItem>
          </Card>
          
          {/********************************** Vios *****************************************************/}
          <Card style={{width:387}}>
            <CardItem style={{borderBottomColor: '#47315a',borderBottomWidth: 1 / PixelRatio.get()}}>
              <Left>
                <Thumbnail source={require('../asset/vios.png')} />
                <Body>
                  <Text>Yaris</Text>
                  <Text note>670,000 บาท</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBod style={{borderBottomColor: '#47315a',borderBottomWidth: 1 / PixelRatio.get()}}>
              <TouchableOpacity style={styles.ImagebuttonStyle} onPress={() => this.props.navigation.navigate('SelectDown', {price: 670000, URL: '../asset/vios.png'})}>
                <Image source={require('../asset/vios.png')} style={{height: 200, width: null, flex: 1}}/>
              </TouchableOpacity>  
            </CardItem>
            <CardItem>
              <Body>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('SelectDown', {price: 670000, URL: '../asset/vios.png'})}>
                  <Text style={styles.textStyle}>
                    Buy
                  </Text>
                </TouchableOpacity>
              </Body>
            </CardItem>
          </Card>

          {/********************************** Altis *****************************************************/}
          <Card style={{width:387}}>
            <CardItem style={{borderBottomColor: '#47315a',borderBottomWidth: 1 / PixelRatio.get()}}>
              <Left>
                <Thumbnail source={require('../asset/altis.png')} />
                <Body>
                  <Text>Yaris</Text>
                  <Text note>990,000 บาท</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBod style={{borderBottomColor: '#47315a',borderBottomWidth: 1 / PixelRatio.get()}}>
              <TouchableOpacity style={styles.ImagebuttonStyle} onPress={() => this.props.navigation.navigate('SelectDown', {price: 990000, URL: '../asset/altis.png'})}>
                <Image source={require('../asset/altis.png')} style={{height: 200, width: null, flex: 1}}/>
              </TouchableOpacity>
            </CardItem>
            <CardItem>
              <Body>
                <TouchableOpacity style={styles.buttonStyle}  onPress={() => this.props.navigation.navigate('SelectDown', {price: 990000, URL: '../asset/altis.png'})}>
                  <Text style={styles.textStyle}>
                    Buy
                  </Text>
                </TouchableOpacity>
              </Body>
            </CardItem>
          </Card>
          
          {/********************************** C-HR *****************************************************/}
          <Card style={{width:387}}>
            <CardItem style={{borderBottomColor: '#47315a',borderBottomWidth: 1 / PixelRatio.get()}}>
              <Left>
                <Thumbnail source={require('../asset/c-hr.png')} />
                <Body>
                  <Text>Yaris</Text>
                  <Text note>1,100,000 บาท</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBod style={{borderBottomColor: '#47315a',borderBottomWidth: 1 / PixelRatio.get()}}>
              <TouchableOpacity style={styles.ImagebuttonStyle} onPress={() => this.props.navigation.navigate('SelectDown', {price: 110000, URL: '../asset/c-hr.png'})}>
                <Image source={require('../asset/c-hr.png')} style={{height: 200, width: null, flex: 1}}/>
                </TouchableOpacity>
            </CardItem>
            <CardItem>
              <Body>
                <TouchableOpacity style={styles.buttonStyle}  onPress={() => this.props.navigation.navigate('SelectDown', {price: 110000, URL: '../asset/c-hr.png'})}>
                  <Text style={styles.textStyle}>
                    Buy
                  </Text>
                </TouchableOpacity>
              </Body>
            </CardItem>
          </Card>

          {/********************************** Camry *****************************************************/}
          <Card style={{width:387}}>
            <CardItem style={{borderBottomColor: '#47315a',borderBottomWidth: 1 / PixelRatio.get()}}>
              <Left>
                <Thumbnail source={require('../asset/camry.png')} />
                <Body>
                  <Text>Yaris</Text>
                  <Text note>1,800,000 บาท</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBod style={{borderBottomColor: '#47315a',borderBottomWidth: 1 / PixelRatio.get()}}>
              <TouchableOpacity style={styles.ImagebuttonStyle} onPress={() => this.props.navigation.navigate('SelectDown', {price: 1800000, URL: '../asset/camry.png'})}>
                <Image source={require('../asset/camry.png')} style={{height: 200, width: null, flex: 1}}/>
              </TouchableOpacity>
            </CardItem>
            <CardItem>
              <Body>
                <TouchableOpacity style={styles.buttonStyle}  onPress={() => this.props.navigation.navigate('SelectDown', {price: 1800000, URL: '../asset/camry.png'})}>
                  <Text style={styles.textStyle}>
                    Buy
                  </Text>
                </TouchableOpacity>
              </Body>
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
    },

    textStyle: {
      alignSelf: 'center',
      color: '#007aff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
    },
    buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#007aff',
      marginLeft: 5,
      marginRight: 5
    },
    ImagebuttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#fff',
      marginLeft: 5,
      marginRight: 5
    }
  });
