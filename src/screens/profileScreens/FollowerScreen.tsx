import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchComponent from '../searchScreen/component/SearchComponent'
import UserItem from '../createProfileScreen/component/UserItem'


const User = [
    {
        id: 1,
        nameUser: 'bicenzo',
        fullName: 'bicenzo dep trai public',
        icontick: true,
        followingStatus: 'Follow',
        accountType: 'public',
    },
    {
        id: 2,
        nameUser: 'bicenzo',
        fullName: 'bicenzo dep trai private',
        icontick: true,
        followingStatus: 'Follow',
        accountType: 'private',
    },
    {
        id: 3,
        nameUser: 'embidz',
        fullName: 'embidzvcl private',
        icontick: true,
        followingStatus: 'Follow',
        accountType: 'private',
    },
    {
        id: 4,
        nameUser: 'phuc ngu',
        fullName: 'phuc ngu',
        icontick: true,
        followingStatus: 'Following',
        accountType: 'public',
    },
    {
        id: 5,
        nameUser: 'phap ngu',
        fullName: 'phap ngu vcl',
        icontick: true,
        followingStatus: 'Following',
        accountType: 'public',
    },
]

const FollowerScreen = () => {
    const [users, setUsers] = useState(User);
    const [searchQuery, setSearchQuery] = useState('');
    const [listData, setListData] = useState<any[]>(User);
    const filteredUsers = users.filter(user =>
        user.nameUser.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const follow = (id: any) => {
        const newListData = User.map((user) => {
            if (user.id === id) {
                let newFollowingStatus = user.followingStatus;
                // Nếu tài khoản là public và trạng thái hiện tại là Follow hoặc following, đổi trạng thái.
                if (user.accountType === 'public') {
                    newFollowingStatus = user.followingStatus === 'Follow' ? 'Following' : 'Follow';
                }
                // Nếu tài khoản là private và trạng thái hiện tại là Follow hoặc Requested, đổi trạng thái.
                else if (user.accountType === 'private') {
                    newFollowingStatus = user.followingStatus === 'Follow' ? 'Requested' : 'Follow';
                }
                return {
                    ...user,
                    followingStatus: newFollowingStatus,
                };
            }
            return user;
        });
        setListData(newListData);
    };
    return (
        <View style={styles.Container}>
            <View style={styles.SearchContainer}>
                <SearchComponent onChangeText={(text) => setSearchQuery(text) }  searchText={searchQuery} />
            </View>
            <View style = {styles.UserContainer}>
                {listData.map((item, index) => {
                    return <UserItem
                        key={index}
                        nameUser={item.nameUser}
                        fullName={item.fullName}
                        icontick={item.icontick}
                        followingStatus={item.followingStatus}
                        onPress={() => follow(item.id)}
                    />
                }
                )}

            </View>
        </View>
    )
}

export default FollowerScreen

const styles = StyleSheet.create({
    UserContainer:{
        padding:16,
    },
    SearchContainer: {
        paddingHorizontal: 16,
    },
    Container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})