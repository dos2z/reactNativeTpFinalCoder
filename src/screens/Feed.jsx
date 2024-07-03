import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Post from '../components/Post'

const Feed = () => {
  return (
    <View>
      <Text>Feed</Text>
      <FlatList
        data={data}
        keyExtractor={data.id}
        renderItem={
          ({ item }) => {
            <Post />
          }
        }
      >

      </FlatList>
    </View>
  )
}

export default Feed

const styles = StyleSheet.create({})