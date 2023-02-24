import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:10,
    },
    image: {
        width: 100,
        height: 150,
        margin: 5,
        resizeMode: 'cover',
        borderRadius: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default styles;