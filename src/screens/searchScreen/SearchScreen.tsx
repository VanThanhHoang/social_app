import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import SearchComponent from './component/SearchComponent'
import UserItemSearch from './component/UserItemSearch'
import AxiosInstance from '@/network/axiosInstance'

const axios = AxiosInstance();



const SearchScreen = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  useEffect(() => {
    setLoading(true);
    const fetchData = async (text : string) => {
      setLoading(true);
      const result = await axios.get(`/user/s/search?q=${text}`);
      setData(result.data);
      setLoading(false);
      console.log('result: ', result);
    };
    try {
      fetchData(text);
    } catch (error) {
      console.log('Error: ', error);
    } finally {
      setLoading(false);
    }
  }, [text]);
  return (
    <View style={styles.Container}>
      <View style={styles.SearchContainer}>
        <SearchComponent searchText={text}
          onChangeText={(text) => setText(text)}
        />
      </View>
      <View style={styles.Line}></View>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <UserItemSearch
            key={item.id}
            nameUser={item.userName}
            fullName={item.fullName}
            icontick={item.icontick}
            avatar={item.avatar}
            followersCount={item.following_status}
          />
        )}
        contentContainerStyle={styles.UserItemContainer}
      />

    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  UserItemContainer: {
    padding: 16,
  },
  Line: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    marginBottom: 16,
  },
  SearchContainer: {
    padding: 16,
  },
  Container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
})