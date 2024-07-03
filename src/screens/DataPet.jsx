import { Image, StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateSelect from '../components/DateSelect';






const SetPetInfo = () => {


    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Datos de la Mascota</Text>
            <Text style={styles.petName}>Kala</Text>
            <Image style={styles.petProfileImage} source={require("../../assets/ImgPrueba/Kalita.jpg")}></Image>


            <View style={styles.selectContainer}>
                <View style={styles.selectButton}>
                    <MaterialCommunityIcons name="cat" size={48} color="orange" />
                </View>
                <View style={styles.selectButton}>
                    <MaterialIcons name="female" size={48} color="pink" />
                </View>

            </View>


            <Text style={styles.sectionTitle}>Fecha de nacimiento</Text>
            <View style={styles.selectContainer}>
                <DateSelect />

            </View>

            <View style={styles.selectContainer}>
            <Text style={styles.sectionTitle}>Peso</Text>
                <Text style={styles.dataText}>5</Text>
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
        
    },
    petProfileImage: {
        width: 200,
        height: 200,
        objectFit: 'cover',
        borderRadius: '100%',
        marginVertical: 50,
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
})