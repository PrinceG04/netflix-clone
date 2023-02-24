

import { Text, View } from '../../components/Themed';
import {Image,FlatList} from 'react-native';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';

// import { RootTabScreenProps } from '../types';
const firstCategory = categories.items[0];
const secondCategory = categories.items[1];
import styles from './style';
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            {/* <Image style={styles.image} source={{ uri:'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQePzTRUAxVRh2HMZ_e-VveoJ8aiePGkgnvruipwpBy0LUhMQhKHBDVrjXbcdsSeVcQHqtNCkJcPCAZMpqHoVmxItrAAILt7xtq25abqmWZrTY7vFQEiDK-rjaq4t63GdPEb_TOFpLDwLPeW_PkLhaGx2.jpg?r=93e'}} />
            <Text style={styles.title}>Popular on Netflix</Text>
            <FlatList data={firstCategory.movies}
            renderItem = {({item})=>{
                console.log(item.poster);
             return (<Image key={item.id} style={styles.image} source={{uri:item.poster}}/>)
             }} horizontal/> */}
            {/* <HomeCategory category={firstCategory}/> */}
            <FlatList data={categories.items}
            renderItem={({item}) =>(<HomeCategory category={item}/>)}/>
         
        </View>

    );
}



export default HomeScreen;