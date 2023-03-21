import {View, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import SignIn from '../components/SignIn';
import SignInHeader from '../components/SignInHeader';

const Main = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <LoginHeader /> */}
      {/* <Login /> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image
          source={require('../images/left-arrow.png')}
          style={{marginLeft: 20, width: 20, height: 20, marginTop: 30}}
        />
      </TouchableOpacity>

      <SignInHeader />
      <SignIn />
    </View>
  );
};

export default Main;
