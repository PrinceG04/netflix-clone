import { Text, View } from '../../components/Themed';
import { Image,Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker'
import React, { useState } from 'react'
import movie from '../../assets/data/movie';
import styles from './style';
import { AntDesign, Entypo, Feather, FontAwesome, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';
import EpisodeItem from '../../components/EpisodeItem';
import { FlatList } from 'react-native-gesture-handler';
const firstEpisode = movie.seasons.items[0].episodes.items[0];
const firstSeason = movie.seasons.items[0];
const MovieDetailsScreen = () => {
    // console.log(firstEpisode.poster);
    // const poster = firstEpisode.poster;
    const seasonNames = movie.seasons.items.map((season) => season.name);
    // console.log(seasonNames);
    const [currentSeason,setCurrentSeason] = useState(firstSeason);
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
           

            <FlatList
            data={currentSeason.episodes.items}
           
            renderItem = {({item}) =>(
                <EpisodeItem episode={item}/>
            )}

                ListHeaderComponent={(
                    <View style={{ padding: 12 }}>
                        {/* <EpisodeItem episode={firstEpisode}/> */}
                        <Text style={styles.title}>{movie.title}</Text>
                        <View style={styles.descContainer}>
                            <Text style={styles.match}>98% match</Text>
                            <Text style={styles.year}>{movie.year}</Text>
                            <View style={styles.ageContainer}>
                                <Text style={styles.age}>12+</Text>
                            </View>
                            <Text style={styles.year}>{movie.numberOfSeasons} seasons</Text>
                            <MaterialIcons name="hd" size={24} color='white' />
                        </View>
                        {/* Play button */}
                        <Pressable onPress={() => { console.warn("hello") }} style={styles.playButton}>
                            <Entypo name='controller-play' size={16} />
                            <Text style={styles.playButtonText}>
                                Play
                            </Text>
                        </Pressable>
                        {/* Download button */}
                        <Pressable onPress={() => { console.warn("Download") }} style={styles.downloadButton}>
                            <Octicons name="download" size={16} color="white" />
                            <Text style={styles.downloadButtonText}>
                                Download
                            </Text>
                        </Pressable>
                        <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
                        <Text style={styles.year}>Cast: {movie.cast}</Text>
                        <Text style={styles.year}>Creator: {movie.creator}</Text>
                        {/* Row with icon buttons */}
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <AntDesign name='plus' size={24} color='white' />
                                <Text style={{ color: 'darkgrey', marginTop: 5 }}>My List</Text>
                            </View>
                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <Feather name='thumbs-up' size={24} color='white' />
                                <Text style={{ color: 'darkgrey', marginTop: 5 }}>Rate</Text>
                            </View>
                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <FontAwesome name='send-o' size={24} color='white' />
                                <Text style={{ color: 'darkgrey', marginTop: 5 }}>Share</Text>
                            </View>
                        </View>

                        <Picker 
                        selectedValue={currentSeason.name}
                        onValueChange={(itemValue,itemIndex)=>setCurrentSeason(movie.seasons.items[itemIndex]) }
                        style={{color:'white',width:150}}
                        dropdownIconColor={'white'}
                        >
                            {seasonNames.map((seasonName) => (<Picker.Item label={seasonName} value={seasonName} key={seasonName}/>))}
                        </Picker>
                    </View>
                )}
            />

        </View>
    )
}

export default MovieDetailsScreen
