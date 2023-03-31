import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { Text, TextInput, View, StyleSheet } from 'react-native'

const InputField = ({ title, subTitle, placeholder, showPassword, icon, onPressIcon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>
          {title}
        </Text>
        <Text style={styles.label}>
          {subTitle}
        </Text>
      </View>
      <View>
        <TextInput placeholder={placeholder} placeholderTextColor='#7F8084'
          style={styles.input} secureTextEntry={!showPassword} />
        <TouchableWithoutFeedback onPress={onPressIcon}>
          <View style={styles.icon}>
            {icon}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16
  },
  labelContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    color: '#C5C7CA'
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#35373B',
    marginTop: 10,
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    color: '#7F8084'
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 25
  }
})

export default InputField