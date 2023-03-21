import {View, Text, Image} from 'react-native';
import React from 'react';

const SignInHeader = () => {
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
      <Image
        source={require('../images/sign.jpg')}
        style={{height: 250, width: '90%'}}
      />
    </View>
  );
};

export default SignInHeader;
