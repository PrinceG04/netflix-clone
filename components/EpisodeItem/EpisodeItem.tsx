import { View, Text } from '../../components/Themed';
import React from 'react';
import styles from './style';
import {Image} from 'react-native';
import { Octicons } from '@expo/vector-icons';

interface EpisodeItemProps{
    episode:{
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot: string,
        video: string,
    }

}
const EpisodeItem = (props:EpisodeItemProps) => {
    const {episode} = props;
  return (
    <View style={{marginHorizontal:10,marginBottom:10}}>
        <View style={styles.row}>
            <Image style={styles.image} source={{uri:episode.poster}}/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{episode.title}</Text>
                <Text style={styles.duration}>{episode.duration}</Text>
            </View>
            <Octicons name='download' size={24} color='white'/>
        </View>
      <Text style={styles.plot}> {episode.plot} </Text>
    </View>
  )
}

export default EpisodeItem