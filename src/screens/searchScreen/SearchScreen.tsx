import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import SearchComponent from './component/SearchComponent'
import UserItemSearch from './component/UserItemSearch'

const User = [
  {
      id: 1,
      nameUser: 'bicenzo',
      fullName: 'bicenzo dep trai publicádasdasd',
      icontick: true,
      avatar: require('../../assets/images/avatar2.png'),
      followersCount: 145,
  },
  {
      id: 2,
      nameUser: 'bicenzo',
      fullName: 'bicenzo dep trai private123123',
      icontick: false,
      avatar: require('../../assets/images/avatar2.png'),
      followersCount: 135,
  },
  {
      id: 3,
      nameUser: 'embidz',
      fullName: 'embidzvcl private',
      icontick: true,
      avatar: require('../../assets/images/avatar2.png'),
      followersCount: 135,
  },
  {
      id: 4,
      nameUser: 'phuc ngu',
      fullName: 'phuc ngu',
      icontick: false,
      avatar: require('../../assets/images/avatar2.png'),
      followersCount: 145,
  },
  {
      id: 5,
      nameUser: 'phap ngu',
      fullName: 'phap ngu vcl',
      icontick: true,
      avatar: require('../../assets/images/avatar2.png'),
      followersCount: 145,
  },
]

const SearchScreen = () => {
  const [users, setUsers] = useState(User);
  const [searchQuery, setSearchQuery] = useState('');
  const filteredUsers = users.filter(user => 
    user.nameUser.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const deleteUser = (userId : Number) => {
    console.log('Delete user with id: ', userId);
    setUsers(users.filter(user => user.id !== userId));
    
  };
  return (
    <View style={styles.Container}>
      <View style={styles.SearchContainer}>
        <SearchComponent onChangeText={(text) => setSearchQuery(text)} />
      </View>
      <View style={styles.Line}></View>
      <View style={styles.UserItemContainer}>
      {filteredUsers .map((user) => (
          <UserItemSearch
            key={user.id}
            nameUser={user.nameUser}
            fullName={user.fullName}
            icontick={user.icontick}
            avatar={user.avatar} // Sử dụng avatar từ mảng User
            followersCount={user.followersCount}
            onPress={() => deleteUser(user.id)}
          />
        ))}
      </View>

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