import React from 'react'
import { FlatList } from 'react-native'
import { Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PostCard from './PostCard';
import ImageTheresa from '../../assets/img/user1.png';
import ImageMarvin from '../../assets/img/user2.png';
import CreatePost from './CreatePost';

const data = [
  {
    image: ImageTheresa,
    name: "Theresa Webb",
    timeInMins: "5",
    quoteLogo: "👋",
    quote: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comment: "24"
  },
  {
    image: ImageMarvin,
    name: "Marvin McKinney",
    timeInMins: "8",
    quoteLogo: "😞",
    quote: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comment: "24"
  },
]

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Hello Jane</Text>
        <Text style={styles.subTitle}>How are you doing today? Would you like to share
          something with the community 🤗</Text>
        <CreatePost navigation={navigation} />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <PostCard post={item} onPress={() => navigation.navigate('Register')} />
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
  }
})

export default Home