import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';

interface ListItem {
  id: number;
  title: string;
  follow: string;
  time: string;
  imageUri: string;
  icon?: string;
  type?: number;
}

const formatText = (text: string) => {
  return text.length > 20 ? text.slice(0, 20) + '...' : text;
};

const AllScreen = () => {
  const data: ListItem[] = [
    {
      id: 1,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Leslielexander',
      follow: 'Follow request',
      time: '2s',
      icon: '../assets/images/hand-wave 1.png',
      type: 1,
    },
    {
      id: 2,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'quanhoang',
      follow: 'Follow request',
      time: '2s',
      type: 1,
    },
    {
      id: 3,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Leslielexander',
      follow: 'follow you',
      time: '2s',
      type: 2,
    },
    // {
    //   id: 4,
    //   imageUri:
    //     'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
    //   title: 'Nickygote stared at your post',
    //   follow: 'Turn up the heat with my UTOPIA',
    //   time: '2d',
    //   type: 3,
    // },
    {
      id: 5,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Item 5',
      follow: 'follow',
      time: '2s',
      type: 1,
    },
    {
      id: 6,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Item 5',
      follow: 'follow',
      time: '2s',
      type: 1,
    },
    {
      id: 7,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Item 5',
      follow: 'follow',
      time: '2s',
      type: 1,
    },
    {
      id: 8,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Item 5',
      follow: 'follow',
      time: '2s',
      type: 3,
    },
    {
      id: 9,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Item 5',
      follow: 'follow',
      time: '2s',
      type: 3,
    },
    {
      id: 10,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Item 5',
      follow: 'follow',
      time: '2s',
      type: 2,
    },
    {
      id: 11,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Item 5',
      follow: 'follow',
      time: '2s',
      type: 1,
    },
  ];
  const handleConfirm = (item: ListItem) => {
    console.log(`Confirmed: ${item.title}`);
  };
  const handleCancel = (item: ListItem) => {
    console.log(`Cancelled: ${item.title}`);
  };
  const handleFollow = (item: ListItem) => {
    console.log(`Followed: ${item.title}`);
  };
  const renderItem: ListRenderItem<ListItem> = ({item}) => (
    <View style={styles.item}>
      <View style={styles.containerView}>
        <View style={styles.containerTitle}>
          <View style={styles.imgView}>
            <Image style={styles.image} source={{uri: item.imageUri}} />
            <Image style={styles.imageIcon} source={{uri: item.icon}} />
          </View>
          <View
            style={{
              flex: 2,
              paddingLeft: 10,
              height: 70,
            }}>
            <Text style={styles.text}>{formatText(item.title)}</Text>
            <Text>{formatText(item.follow)}</Text>
            <Text>{item.time}</Text>
          </View>
        </View>
        {item.type === 1 ? (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={() => handleConfirm(item)}>
              <Text style={styles.textButton}>Confirm</Text>
            </TouchableOpacity>
            <View style={{width: 10}} />
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={() => handleCancel(item)}>
              <Text style={styles.textButton}>Cancel</Text>
            </TouchableOpacity>
          </View>
        ) : item.type === 2 ? (
          <View style={styles.buttonContainer}>
            <View style={{width: 10}} />
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={() => handleFollow(item)}>
              <Text style={styles.textButton}>Follow</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <Image style={styles.imageFollow} source={{uri: item.imageUri}} />
          </View>
        )}
      </View>
      <View
        style={{
          borderBottomColor: '#F1F1F1',
          borderBottomWidth: 1,
          margin: 10,
        }}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default AllScreen;

const styles = StyleSheet.create({
  item: {},
  container: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flex: 1,
  },
  buttonWrapper: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C8C8C8',
  },
  textButton: {
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 8,
  },
  imgView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    color: '#2C2B2B',
  },
  imageFollow: {
    width: 65,
    height: 65,
    borderRadius: 8,
    flexShrink: 8,
  },
  imageIcon: {
    width: 15,
    height: 15,
    position: 'absolute',
    bottom: 20,
    left: 0,
    color: '#FFFFFF',
    backgroundColor: '#E693BF',
    borderRadius: 30,
  },
});
