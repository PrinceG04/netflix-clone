import { View, Text } from '../../components/Themed'
import React, { useEffect, useRef, useState } from 'react';
import styles from './style';
import { Episode } from '../../types';
import {Video} from 'expo-av';
import { Playback } from 'expo-av/build/AV';
import { Button } from 'react-native';
interface VideoPlayerProps{
    episode: Episode
}

const VideoPlayer = (props:VideoPlayerProps) => {
    const {episode} = props;

    const video = useRef<Playback>(null);
    const [status,setStatus] = useState({});
    useEffect(()=>{
      if(!video){
        return;
      }
      (async()=>{
        await video?.current?.unloadAsync();
        await video?.current?.loadAsync(
          {uri:episode.video},
          {},
          false
        );
      })();
    },[episode])
 
  

  return (
    <View>
        <Video ref={video}
         style={styles.video} 
         source={{
          uri:episode.video,
         }}
         posterSource = {{
          uri:episode.poster
         }}
         usePoster = {true}
         posterStyle = {{
          width:'100%',
          aspectRatio:16/9,
          resizeMode:'cover'

        }}
         resizeMode = 'contain'
         useNativeControls
         onPlaybackStatusUpdate={status => setStatus(()=>status)}

         />
      
    </View>
  )
}

export default VideoPlayer