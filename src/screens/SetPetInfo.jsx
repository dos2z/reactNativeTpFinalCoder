import { Image, StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateSelect from '../components/DateSelect';






const SetPetInfo = () => {


    return (
        <View style={styles.container}>

            <TextInput style={styles.petName} placeholder='Nombre' ></TextInput>
            <Image style={styles.petProfileImage} source={require("../../assets/ImgPrueba/Kalita.jpg")}></Image>

            <Text style={styles.sectionTitle}>Qué animal es?</Text>
            <View style={styles.selectContainer}>
                <Pressable style={styles.selectButton}>
                    <MaterialCommunityIcons name="cat" size={48} color="orange" />
                </Pressable>
                <Pressable style={(pressed) => [styles.selectButton, { pressed: { background: { opacity: 0.2 } } }]} >
                    <MaterialCommunityIcons name="dog" size={48} color="brown" />
                </Pressable>

                <Pressable style={styles.selectButton}>
                    <MaterialCommunityIcons name="bird" size={48} color="green" />
                </Pressable>
                <Pressable style={styles.selectButton}>
                    <MaterialCommunityIcons name="rabbit" size={48} color="pink" />
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
        flex: 1,
        gap: 20,
        alignItems: 'center',
        width: '100%'
    },
    sectionTitle: {
        fontWeight: 'bold',
    },
    petName: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 50,
        width: '90%',
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
        gap: 20,
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