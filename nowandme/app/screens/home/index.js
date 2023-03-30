import React from 'react'
import { FlatList } from 'react-native'
import { Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Card from '../../components/card'
import ImageTheresa from '../../assets/img/user1.png';
import ImageMarvin from '../../assets/img/user2.png';
import CreatePost from './CreatePost'
import { ScrollView } from 'react-native'

const data = [
  {
    image: ImageTheresa,
    name: "Theresa Webb",
    timeInMins: "5",
    quote: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comment: "24"
  },
  {
    image: ImageMarvin,
    name: "Marvin McKinney",
    timeInMins: "8",
    quote: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comment: "24"
  },
]

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Hello Jane</Text>
        <Text style={styles.subTitle}>How are you doing today? Would you like to share
          something with the community 🤗</Text>
        <CreatePost />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Card post={item} />
          )}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131319',
    flex: 1,
    padding: 16
  },
  title: {
    color: 'white',
    fontSize: 28,
    marginTop: 10
  },
  subTitle: {
    color: 'lightgrey',
    marginTop: 15,
  },
})

export default Home