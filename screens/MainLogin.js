import {View, Text} from 'react-native';
import React from 'react';
import LoginHeader from '../components/LoginHeader';
import Login from '../components/Login';
import {Image,TouchableOpacity} from 'react-native';
import Home from './Home';


const MainLogin = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Home')
      }} >
        <Image
          source={require('../images/left-arrow.png')}
          style={{marginLeft: 20, width: 20, height: 20, marginTop: 30}}
        />
      </TouchableOpacity>
      <LoginHeader />
      <Login />
    </View>
  );
};

export default MainLogin;
