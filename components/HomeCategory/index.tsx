

import { Text, View } from '../../components/Themed';
import { Image, FlatList } from 'react-native';

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
    return (
        <>
            {/* <Image style={styles.image} source={{ uri:'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQePzTRUAxVRh2HMZ_e-VveoJ8aiePGkgnvruipwpBy0LUhMQhKHBDVrjXbcdsSeVcQHqtNCkJcPCAZMpqHoVmxItrAAILt7xtq25abqmWZrTY7vFQEiDK-rjaq4t63GdPEb_TOFpLDwLPeW_PkLhaGx2.jpg?r=93e'}} /> */}
            <Text style={styles.title}>{category.title}</Text>
            <FlatList data={category.movies}
                renderItem={({ item }) => {
                    // console.log(item.poster);
                    return (<Image key={item.id} style={styles.image} source={{ uri: item.poster }} />)
                }} horizontal showsHorizontalScrollIndicator={false}/>
        </>

    );
}



export default HomeCategory;