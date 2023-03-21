import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,Alert
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  const sign = () => {
    createUser();
  };

  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <>
      <View>
        <Text style={styles.login}>Sign Up</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <TextInput
          value={email}
          placeholderTextColor="#000"
          onChangeText={txt => setEmail(txt)}
          placeholder="Email"
          style={{
            width: '90%',
            height: 50,
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 20,

            color: '#000',
            borderColor: '#000',
          }}
        />
        <TextInput
          value={password}
          placeholderTextColor="#000"
          onChangeText={txt => setPassword(txt)}
          placeholder="Password"
          style={{
            width: '90%',
            height: 50,
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 20,
            marginTop: 10,

            color: '#000',
            borderColor: '#000',
          }}
        />

        <TouchableOpacity
          style={{
            width: '90%',
            height: 50,
            borderRadius: 10,
            backgroundColor: '#537FE7',
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={sign}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignIn;

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
