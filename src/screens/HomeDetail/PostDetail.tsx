import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { HomeStackNames, HomeStackParamList } from '@/navigation/HomeNavigator/config'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Svgback from '@/assets/icons/iconSVG/Back';
import { colors } from '@/theme';
import CardView from '../home/components/CardView';
import CartComments from './CartComments';
import { images } from '@/assets';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



type PostDetailRouteProp = RouteProp<HomeStackParamList,HomeStackNames.PostDetail>;
const PostDetail = () => {
    const route = useRoute<PostDetailRouteProp>();
    const itemData = route.params.itemData;
    const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
    const goBack = () => {
        navigation.goBack();
    }
    
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={goBack}>
            <Svgback />
            <Text style={styles.Back}>Back</Text>
        </TouchableOpacity>
        <View style={{ width: 450, height: 1, borderWidth: 0.1, backgroundColor: "#E3E3E3",marginTop:15 }} />
        <FlatList 
            ListHeaderComponent={ 
            <CardView 
                avatar={itemData.avatar}
                hour={itemData.hour}
                title={itemData.title}
                description={itemData.description}
                tag={itemData.tag}
                image={itemData.image}
                star={itemData.star}
                comment={itemData.comment}
                share={itemData.share}
                url={itemData.url}
            />}  
            data={data}
            renderItem={({item}) => (
                <CartComments 
                    avatar={item.avatar}
                    hour={item.hour}
                    title={item.title}
                    description={item.description}
                    star={item.star}
                    comment={item.comment}
                    share={item.share}
                />
            )}
            keyExtractor={(item,index) => index.toString()}
            ListFooterComponent={<View style={{marginBottom: 80}}></View>}
        />
    </View>
  )
}

export default PostDetail

const styles = StyleSheet.create({
    Back:{
        fontSize: 18,
        marginLeft: 8,
        color: colors.black,
        fontWeight: '500'
    },
    back:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 18,
    },
    container:{
        
    }
})
const data = [{
    avatar: images.logoMessi,
    hour: "2 day ago",
    title: "Messi",
    description: "The best player in the world",
    star: 15700,
    comment: 9696,
    share: 500,
},
{
    avatar: images.logoMessi,
    hour: "2 day ago",
    title: "Messi",
    description: "The best player in the world",
    star: 15700,
    comment: 9696,
    share: 500,
},
]