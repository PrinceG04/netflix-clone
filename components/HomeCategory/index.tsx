

import { Text, View } from '../../components/Themed';
import { Image, FlatList, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import { RootTabScreenProps } from '../types';
interface HomeCategoryProps {
    category: {
        id: string,
        title: string,
        movies: {
            id: string,
            poster: string,
        }[]
    }
}
import styles from './style';
const HomeCategory = (props: HomeCategoryProps) => {
    const {category} = props;
    const navigation = useNavigation();
    const onMoviePress = (movie: { id: any; poster?: string; }) =>{
        //  console.warn(movie.id)
        navigation.navigate('MovieDetailsScreen',{id:movie.id});
    }
    return (
        <>
            {/* <Image style={styles.image} source={{ uri:'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQePzTRUAxVRh2HMZ_e-VveoJ8aiePGkgnvruipwpBy0LUhMQhKHBDVrjXbcdsSeVcQHqtNCkJcPCAZMpqHoVmxItrAAILt7xtq25abqmWZrTY7vFQEiDK-rjaq4t63GdPEb_TOFpLDwLPeW_PkLhaGx2.jpg?r=93e'}} /> */}
            <Text style={styles.title}>{category.title}</Text>
            <FlatList data={category.movies}
                renderItem={({ item }) => {
                    // console.log(item.poster);
                    return (
                        <Pressable onPress={() =>onMoviePress(item)}>
                            <Image key={item.id} style={styles.image} source={{ uri: item.poster }} />
                        </Pressable>
                    ) }} horizontal showsHorizontalScrollIndicator={false}/>
        </>

    );
}



export default HomeCategory;