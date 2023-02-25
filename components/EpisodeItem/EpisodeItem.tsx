import { View, Text } from '../../components/Themed';
import React from 'react';
import styles from './style';
import {Image, Pressable} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Episode } from '../../types';

interface EpisodeItemProps{
    episode:Episode,
    onPress: (episode:Episode) =>{}

}
const EpisodeItem = (props:EpisodeItemProps) => {
    const {episode,onPress} = props;
  return (
    <Pressable style={{marginHorizontal:10,marginBottom:10}} onPress={()=>onPress(episode)}>
        <View style={styles.row}>
            <Image style={styles.image} source={{uri:episode.poster}}/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{episode.title}</Text>
                <Text style={styles.duration}>{episode.duration}</Text>
            </View>
            <Octicons name='download' size={24} color='white'/>
        </View>
      <Text style={styles.plot}> {episode.plot} </Text>
    </Pressable>
  )
}

export default EpisodeItem