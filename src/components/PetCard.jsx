import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const PetCard = ({ img, petName, navigation }) => {


  return (
    <Pressable style={styles.container} onPress={() => { navigation.navigate('DataPet') }}>
      <Pressable style={styles.dataContainer}>
        <Image style={styles.petImg} source={require(`../../assets/Jack.jpg`)} />
        <Text>{petName}</Text>
      </Pressable>
    </Pressable>
  )
}

export default PetCard

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  dataContainer: {
    margin: 10,
    padding: 5,
    width: '80%',
    height: 110,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  petImg: {
    width: 100,
    height: 100,
    borderRadius: '100%',
  }
})