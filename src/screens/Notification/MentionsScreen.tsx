import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ListRenderItem,
} from 'react-native';

interface ListItem {
  id: number;
  title: string;
  follow: string;
  tag: string;
  time: string;
  imageUri: string;
  type?: number;
}

const formatText = (text: string) => {
  return text.length > 20 ? text.slice(0, 20) + '...' : text;
};

const MentionsScreen = () => {
  const data: ListItem[] = [
    {
      id: 1,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Nightgamer mentioned you',
      follow: 'Turn up the heat with my UTOPIA',
      tag: '@traviscott you are the bes rapp',
      time: '2s',
      type: 1,
    },
    {
      id: 2,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'quanhoang mentioned you',
      follow: 'Turn up the heat with my UTOPIA',
      tag: '@traviscott you are the bes rapp',
      time: '2s',
      type: 1,
    },
    {
      id: 3,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Nightgamer mentioned you',
      follow: 'Take care of your self. You’re all you have.',
      tag: '@traviscott this quote hits me hard for real',
      time: '2s',
      type: 2,
    },
  ];

  const renderItem: ListRenderItem<ListItem> = ({item}) => (
    <View>
      <View style={styles.containerView}>
        <View style={styles.containerTitle}>
          <View style={styles.imgView}>
            <Image source={{uri: item.imageUri}} style={styles.image} />
          </View>
          <View
            style={{
              flex: 2,
              paddingLeft: 10,
            }}>
            <Text style={styles.text}>{formatText(item.title)}</Text>
            <Text>{formatText(item.follow)}</Text>
            <Text>{formatText(item.tag)}</Text>
            <Text>{item.time}</Text>
          </View>
        </View>
        {item.type === 1 ? (
          <View style={styles.buttonContainer}>
            <Image style={styles.imageFollow} source={{uri: item.imageUri}} />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
            }}></View>
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
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MentionsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  imgView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2C2B2B',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flex: 1,
  },
  imageFollow: {
    width: 65,
    height: 65,
    borderRadius: 8,
    flexShrink: 8,
  },
});
