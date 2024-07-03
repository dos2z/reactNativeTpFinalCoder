import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <Text style={styles.title}>WiskersBook</Text>

      <View style={styles.mainButonsContainer}>
        <Pressable style={[styles.button, {width: "50%"}]}>
          <Text style={styles.textBtn}>Ingresar</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.textBtn}>Crear cuenta</Text>
        </Pressable>
      </View>

      <View>
        <Pressable style={styles.button}>
          <Text style={styles.textBtn}>Invitado</Text>
        </Pressable>
      </View>


    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  mainButonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    marginVertical: 20,
  },
  button: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 24,
  }
})