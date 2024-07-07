import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Post from '../components/Post'
import { posts } from '../../fakeData/post'

const Feed = () => {
  
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
      <FlatList
        style={styles.postList}
        data={posts}
        /* keyExtractor={data.id} */
        renderItem={
          ({ item }) => (
            <Post petName={item.petName} postImg={item.postImg} postMessage={item.postMessage}/>
          )
        }
      >

      </FlatList>
    </View>
  )
}

export default Feed

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    width: '100%'
  },
  postList: {
    flex: 1,
    width: '100%',
    
  }
})