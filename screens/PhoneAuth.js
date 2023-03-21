import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import auth from '@react-native-firebase/auth';

const PhoneAuth = () => {
  const [mobile, setMobile] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [otp, setOtp] = useState('');

  const signInWithPhoneNumber = async () => {
    const confirmation = await auth().signInWithPhoneNumber('+91' + mobile);
    setConfirm(confirmation);
    console.log(confirmation);
  };

  const verifyCode = async () => {
    try {
      const res = await confirm.confirm(otp);
      console.log(res);
      Alert.alert('logged in')
    } catch (error) {
      console.log('Invalid code.');
      Alert.alert('wrong passcode or already a user')
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image source={require('../images/sign.jpg')} style={styles.banner} />
      </View>
      <Text style={styles.loginTitle}>Hi guys this is a dummy Login Page</Text>
      <View style={styles.divider}>
        <View style={[styles.dividerView, {marginRight: 10}]}></View>
        <Text style={styles.dividerText}>Login Or Sign Up</Text>
        <View style={[styles.dividerView, {marginLeft: 10}]}></View>
      </View>

      {confirm == null ? (
        <View>
          <TextInput
            placeholder="Phone Number"
            style={styles.mobileInput}
            keyboardType={'number-pad'}
            value={mobile}
            onChangeText={txt => {
              setMobile(txt);
            }}
          />
          <TouchableOpacity
            onPress={() => {
              signInWithPhoneNumber();
            }}
            style={styles.loginButton}>
            <Text style={styles.loginBtnTxt}>Login</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <OTPInputView
            style={{width: '80%', height: 200, alignSelf: 'center'}}
            pinCount={6}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
              setOtp(code);
            }}
          />
          <TouchableOpacity
            onPress={() => {
              verifyCode();
            }}
            style={styles.loginButton}>
            <Text style={styles.loginBtnTxt}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default PhoneAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    height: responsiveHeight(40),
  },
  banner: {
    height: '100%',
    width: '100%',
  },
  loginTitle: {
    fontSize: responsiveFontSize(2),
    width: '100%',
    fontWeight: '800',
    textAlign: 'center',
    color: '#000',
    marginTop: responsiveHeight(5),
  },
  divider: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: responsiveHeight(4),
  },
  dividerView: {
    height: 1,
    backgroundColor: '#8e8e8e',
    width: '29%',
    opacity: 0.5,
  },
  dividerText: {
    fontSize: responsiveFontSize(2.5),
    color: '#8e8e8e',
  },
  mobileInput: {
    borderColor: '#8e8e8e',
    borderWidth: 1,
    height: 50,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    marginTop: 30,
    paddingLeft: 20,
  },
  loginButton: {
    backgroundColor: 'red',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    marginTop: 30,
    borderRadius: 10,
  },
  loginBtnTxt: {
    fontWeight: '600',
    fontSize: responsiveFontSize(2),
    color: '#fff',
  },
  underlineStyleBase: {
    width: 40,
    borderRadius: 10,
    height: 45,
    borderWidth: 1,
    borderColor: '#000',
    color: '#000',
  },

  underlineStyleHighLighted: {
    borderColor: '#000',
  },
});
