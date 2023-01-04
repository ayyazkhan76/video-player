import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { Video } from 'expo-av';

function Videos({ url }) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: url,
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <TouchableOpacity class={styles.button} onPress={() => video.current.playAsync()}  >
                <Text style={styles.buttonText} >Play</Text>
            </TouchableOpacity>
            <TouchableOpacity class={styles.button} onPress={() => video.current.pauseAsync()}  >
                <Text style={styles.buttonText} >Pause</Text>
            </TouchableOpacity>
            <TouchableOpacity class={styles.button} onPress={() => video.current.stopAsync()}  >
                <Text style={styles.buttonText} >Stop</Text>
            </TouchableOpacity>
            <View style={styles.status}>
                <Text> {status.isPlaying ? 'Status: Playing' : 'Status: Stopped'} </Text>
            </View>
        </>
    )
}

export default Videos

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    video: {
        alignSelf: 'center',
        width: '100%',
        height: '250px',
    },
    status: {
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
    },
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 12,
        color: 'green',
    },
});
