import React from 'react'
import { Image } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PostCard = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Image source={post.image} />
          <View style={styles.headerContent} >
            <Text style={styles.title}>{post.name}</Text>
            <Text style={styles.subTitle}>{post.timeInMins}mins ago</Text></View>
        </View>
        <View>
          <MaterialCommunityIcons name="dots-horizontal" size={24} color="white" />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyLogo}>
          <Text>{post.quoteLogo}</Text>
        </View>
        <View>
          <Text style={styles.bodyText}>
            {post.quote}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <MaterialCommunityIcons name="comment-outline" size={24} color="#C5C7CA" />
        <Text style={styles.footerText}>{post.comment} comments</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#27292D',
    marginTop: 16,
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
  headerContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    color: '#C5C7CA',
    fontSize: 16
  },
  subTitle: {
    color: '#7F8084'
  },
  headerContent: {
    marginLeft: 12
  },
  body: {
    backgroundColor: '#191920',
    paddingHorizontal: 12,
    paddingVertical: 20,
    marginTop: 20,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row'
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
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row'
  },
  footerText: {
    color: '#7F8084',
    marginStart: 10,
  }
})

export default PostCard