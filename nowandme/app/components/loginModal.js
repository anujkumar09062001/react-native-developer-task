import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';
import InputField from './InputField';

const LoginModal = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.modalView}>
      <View style={styles.modalClose}>
        <MaterialCommunityIcons name="close-thick" size={20} color="white"
          onPress={() => navigation.navigate('Home')} style={styles.modalCloseIcon} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>WELCOME BACK</Text>
        <Text style={styles.subTitle}>Log into your account</Text>
      </View>
      <View style={styles.inputField}>
        <InputField title='Email or Username' placeholder='Enter your email' />
        <InputField title='Password' subTitle='Forgot password?'
          placeholder='Choose a preferred password'
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

        <TouchableWithoutFeedback onPress={() => navigation.replace('Register')}>
          <View style={styles.footer}>
            <Text style={styles.notRegister}>Not registered yet? </Text>
            <Text style={styles.register}>Register →</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  modalView: {
    padding: 15,
    backgroundColor: '#27292D',
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    borderTopWidth: 1,
    borderColor: '#969696'
  },
  modalClose: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  modalCloseIcon: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 15
  },
  header: {
    display: 'flex',
    alignItems: 'center'
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

export default LoginModal