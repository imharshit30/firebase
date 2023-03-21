import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import Main from '../screens/Main';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sign = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            console.log('pressed');
          }}>
          <Text>sign in</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const userSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        Alert.alert('user logged in');
      })
      .catch(error => {
        Alert.alert('Please enter the correct Id and Password!!!');
      });
  };

  return (
    <>
      <View>
        <Text style={styles.login}>Login</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 40,
        }}>
        <TextInput
          value={email}
          placeholderTextColor="#000"
          onChangeText={txt => setEmail(txt)}
          placeholder="Enter Email"
          style={{
            width: 350,
            height: 50,
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 20,
          }}
        />
        <TextInput
          value={password}
          placeholderTextColor="#000"
          onChangeText={txt => setPassword(txt)}
          placeholder="Enter Email"
          style={{
            width: 350,
            height: 50,
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 20,
            marginTop: 20,
          }}
        />

        <TouchableOpacity
          style={{
            width: 350,
            height: 50,
            borderRadius: 10,
            backgroundColor: '#537FE7',
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            userSignIn();
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:10
        }}>
        <Text style={{color: '#000'}}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('SignIn')
        }}>
          <Text style={{color: '#537FE7',fontWeight:'bold'}}> SignUp</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  login: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 26,
    marginLeft: 20,
    marginTop: 40,
    color: '#000',
  },
});
