import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const LoginHeader = () => {
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
      <Image
        source={require('../images/login.jpg')}
        style={{height: 250, width: '90%'}}
      />
    </View>
  );
};

export default LoginHeader;
