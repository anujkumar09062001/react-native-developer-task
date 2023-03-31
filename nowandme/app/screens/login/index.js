import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import InputField from '../../components/InputField'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../../assets/img/Logo.png';
import { Image } from 'react-native';

const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} />
      </View>
      <LinearGradient colors={['#969696', '#969696', '#969696', '#969696', '#343434', '#343434']}
        start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
        style={{
          borderRadius: 5
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.title}>WELCOME BACK</Text>
            <Text style={styles.subTitle}>Log into your account</Text>
          </View>
          <View style={styles.inputField}>
            <InputField title='Email or Username' placeholder='Enter your email' />
            <InputField title='Password' subTitle='Forgot password?'
              placeholder='Your supersafe password'
              showPassword={showPassword}
              icon={showPassword ?
                <MaterialCommunityIcons name="eye" size={24} color="white" />
                :
                <MaterialCommunityIcons name="eye-off" size={24} color="white" />
              }
              onPressIcon={() => setShowPassword(!showPassword)}
            />

            <TouchableWithoutFeedback>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Login now</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
              <View style={styles.footer}>
                <Text style={styles.notRegister}>Not registered yet? </Text>
                <Text style={styles.register}>Register →</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#131319',
    padding: 16,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 40
  },
  modalView: {
    padding: 15,
    backgroundColor: '#27292D',
    margin: 2
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 25
  },
  title: {
    color: '#6B6C70'
  },
  subTitle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 8
  },
  inputField: {
    marginTop: 14
  },
  button: {
    backgroundColor: '#4A96FF',
    display: 'flex',
    padding: 10,
    borderRadius: 4,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  footer: {
    marginTop: 14,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15
  },
  notRegister: {
    color: '#7F8084'
  },
  register: {
    color: '#C5C7CA'
  }
})

export default Login