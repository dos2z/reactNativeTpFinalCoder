import { Image, StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateSelect from '../components/DateSelect';






const SetPetInfo = () => {


    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Datos de la Mascota</Text>
            <TextInput style={styles.petName} placeholder='Nombre' ></TextInput>
            <Image style={styles.petProfileImage} source={require("../../assets/ImgPrueba/Kalita.jpg")}></Image>

            <Text style={styles.sectionTitle}>Qué animal es?</Text>
            <View style={styles.selectContainer}>
                <Pressable style={styles.selectButton}>
                    <MaterialCommunityIcons name="cat" size={48} color="orange" />
                </Pressable>
                <Pressable style={styles.selectButton}>
                    <MaterialCommunityIcons name="dog" size={48} color="brown" />
                </Pressable>

                <Pressable style={styles.selectButton}>
                    <MaterialCommunityIcons name="bird" size={48} color="green" />
                </Pressable>
            </View>

            <Text style={styles.sectionTitle}>Selecciona el género</Text>
            <View style={styles.selectContainer}>
                <Pressable style={styles.selectButton}>
                    <MaterialIcons name="female" size={48} color="pink" />
                </Pressable>

                <Pressable style={styles.selectButton}>
                    <MaterialIcons name="male" size={48} color="blue" />
                </Pressable>
            </View>

            <Text style={styles.sectionTitle}>Fecha de nacimiento</Text>
            <View style={styles.selectContainer}>
                <DateSelect />

            </View>

            <Text style={styles.sectionTitle}>Peso</Text>
            <View style={styles.selectContainer}>
                <TextInput style={styles.dataText} placeholder='peso'></TextInput>
                <Text style={styles.dataText}>Kg</Text>
            </View>



        </View>
    )
}

export default SetPetInfo

const styles = StyleSheet.create({
    container: {
        gap: 20,
    },
    sectionTitle: {
        fontWeight: 'bold',
    },
    petName: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 50,
    },
    petProfileImage: {
        width: 200,
        height: 200,
        objectFit: 'cover',
        borderRadius: '100%',

    },
    selectContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    selectButton: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        borderRadius: 5,
    },
    dataText: {
        fontSize: 18,
    }
})