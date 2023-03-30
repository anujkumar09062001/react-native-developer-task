import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Pressable } from 'react-native';

const CreatePost = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create Post</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyLogo}>
          <Text>💬</Text>
        </View>
        <View>
          <Text style={styles.bodyText}>
            How are you feeling today?
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Pressable>
          <Text style={styles.buttonTest}>Post</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#27292D',
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#35373B',
    borderRadius: 8,
    paddingVertical: 24,
    paddingHorizontal: 12
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: '#C5C7CA',
    fontSize: 18
  },
  body: {
    backgroundColor: '#191920',
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  bodyLogo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#27292D',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bodyText: {
    color: '#7F8084',
    paddingEnd: 30,
    paddingStart: 15,
  },
  footer: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  buttonTest: {
    color: '#fff',
    backgroundColor: '#4A96FF',
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 4
  }
})

export default CreatePost