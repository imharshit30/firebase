import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveScreenWidth,
  responsiveFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';

const Home = ({navigation}) => {
  return (
    <View style={styles.header}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../images/main.jpg')} style={styles.image} />
        <Text
          style={{
            fontWeight: 'bold',
            color: '#000',
            fontSize: responsiveFontSize(5),
            marginTop: responsiveHeight(5),
          }}>
          Welcome
        </Text>
        <Text
          style={{
            marginTop: responsiveHeight(2),
            color: '#000',
            fontSize: responsiveFontSize(2),
          }}>
          This is a dummy user authentication app made with
        </Text>
        <Text
          style={{
            color: '#537FE7',
            fontWeight: '600',
            fontSize: responsiveFontSize(2.5),
            marginTop: responsiveHeight(1),
          }}>
          React Native
        </Text>
      </View>
      <View style={styles.button}>
        <View
          style={{
            position: 'absolute',
            top: responsiveHeight(5),
            height: 40,
            width: '70%',
            backgroundColor: '#fff',
            justifyContent: 'center',
            borderRadius: 10,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              color:'#537FE7',
              alignSelf:'center',
              fontWeight:'bold',
              fontSize:responsiveFontSize(3)
            }}>
            Get started
          </Text>
        </View>

        <TouchableOpacity
          style={styles.login}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Image
            source={require('../images/email.png')}
            style={{width: 30, height: 20, backgroundColor: '#fff'}}
          />

          <Text style={styles.buttonText}>Email & Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.login}
          onPress={() => {
            navigation.navigate('Phone');
          }}>
          <Image
            source={require('../images/gambia.png')}
            style={{width: 30, height: 30, backgroundColor: '#fff'}}
          />

          <Text style={styles.buttonText}>Get Otp on mobile</Text>
        </TouchableOpacity>
        <View>
        <Text style={{color:'#fff',fontWeight:'bold',position:'absolute',top:15,alignSelf: 'center',}}>Click above 2 options to select your preference!!!</Text></View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    // backgroundColor: '#537FE7',
    backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    width: responsiveScreenWidth(80),
    height: responsiveHeight(30),
  },
  login: {
    borderWidth: 1,
    // borderColor: 'white',
    width: '50%',
    height: responsiveHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#000',
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    justifyContent: 'space-evenly',
    width: '100%',
    height: responsiveHeight(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#537FE7',
    position: 'absolute',
    bottom: 0,
  },
  buttonText: {color: '#fff', fontSize: responsiveFontSize(1.5)},
});
