import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

const Post = ({ petName, postImg, postMessage }) => {
    const [like, setLike] = useState(false)


    const handleLike = () => {
        setLike(!like)
    }
    //Contador de Likes

    return (
        <View style={styles.container}>
            <Pressable onPress={() => { console.log('hola'); }}>
                <Text style={styles.userName}>{petName}</Text>
            </Pressable>
            <View style={styles.imgContainer}>

                <Image style={[styles.postImg]} resizeMethod='contain' source={require('../../assets/ImgPrueba/Kalita.jpg')} />
            </View>

            <View style={styles.reactionsContainer}>

                <Pressable style={styles.pressableLike} onPress={handleLike}>
                    {!like ? <AntDesign name="staro" size={24} color="gold" />
                        : <AntDesign name="star" size={24} color="gold" />}
                </Pressable>
                <Text>contador de likes</Text>
            </View>
            <View>
                <Text>{postMessage}</Text>
            </View>

        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        width: '100%',
        

    },
    userName: {
        padding: 10,
        fontWeight: 'bold',
    },
    imgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        overflow: 'hidden',
    },
    postImg: {
        aspectRatio: 1/1,
        width: '100%',
    },
    reactionsContainer: {
        flexDirection: 'row',
        padding: 5,
        gap: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    pressableLike: {

    }
})