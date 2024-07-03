import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

const Post = () => {
    const [like, setLike] = useState(false)


    const handleLike = () => {
        setLike(!like)
    }
    //Contador de Likes

    return (
        <View style={styles.container}>
            <Pressable onPress={() => { console.log('hola'); }}>
                <Text style={styles.userName}>Kala</Text>
            </Pressable>
            <Image style={styles.postImg} source={require('../../assets/ImgPrueba/Kalita.jpg')} />
            {/* </Image> */}
            <View style={styles.reactionsContainer}>

                <Pressable style={styles.pressableLike} onPress={handleLike}>
                    {!like ? <AntDesign name="staro" size={24} color="gold" />
                        : <AntDesign name="star" size={24} color="gold" />}
                </Pressable>
                <Text>oxoxoxoox</Text>
            </View>
            <View>
                <Text>Cuando era chiquita y no sabia nada</Text>
            </View>

        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        width: 300,

    },
    userName: {
        padding: 10,
        fontWeight: 'bold',
    },
    postImg: {
        width: '100%',
        height: 300,
    },
    reactionsContainer:{
        flexDirection: 'row',
        padding: 5,
        gap: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    pressableLike: {

    }
})