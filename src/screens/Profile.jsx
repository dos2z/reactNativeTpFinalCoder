import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React from 'react'
import PetCard from '../components/PetCard'
import { Pets } from '../../fakeData/pets';
import { AntDesign } from '@expo/vector-icons';


const Profile = ({navigation}) => {

  

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image style={styles.imgProfile} source={require('../../assets/ImgPrueba/JackYkalaSillon.jpg')} />
        <Text>Jack y Kala</Text>
      </View>
      <FlatList
        data={Pets}
        /* keyExtractor={} */
        renderItem={({ item }) =>
          (<PetCard petName={item.name} img={item.name} navigation={navigation}/>)

        }
      />
      <Pressable style={styles.addPetBtn} onPress={()=>navigation.navigate('SetPetInfo')}>
        <AntDesign name="pluscircleo" size={48} color="black" />
      </Pressable>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  profileHeader: {
    alignItems: 'center',
    margin: 50,
    gap: 10,
  },
  imgProfile: {
    width: 200,
    height: 200,
  },
  addPetBtn: {
    marginVertical: 10,
    alignItems: 'center',
  }
})