import * as React from 'react';
import { View } from 'react-native';
import Videos from './Videos';

export default function App() {
    return (
        <View>
            <Videos url='https://co.vid19.pk/static/videos/video1.mp4' />
            <Videos url='https://co.vid19.pk/static/videos/video2.mp4' />
            <Videos url='https://co.vid19.pk/static/videos/video3.mp4' />
            <Videos url='https://co.vid19.pk/static/videos/video4.mp4' />
            <Videos url='https://co.vid19.pk/static/videos/video5.mp4' />
            <Videos url='https://co.vid19.pk/static/videos/video6.mp4' />
        </View>
    );
}

