import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import {useTranslation} from 'react-i18next';

interface ListItem {
  id: number;
  title: string;
  follow: string;
  time: string;
  imageUri: string;
  icon?: string;
  type?: number;
  isFollow?: boolean;
  isConfirmed?: boolean;
  isCancel?: boolean;
}

const formatText = (text: string) => {
  return text.length > 20 ? text.slice(0, 10) + '...' : text;
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
      icon: 'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      type: 1,
    },
    {
      id: 2,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'quanhoang',
      follow: 'Follow request',
      time: '2s',
      icon: 'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      type: 1,
    },
    {
      id: 3,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Leslielexander',
      follow: 'follow you',
      time: '2s',
      icon: 'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      type: 2,
    },
    {
      id: 4,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Nickygote stared at your post',
      follow: 'Turn up the heat with my UTOPIA',
      time: '2d',
      icon: 'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      type: 3,
    },
    {
      id: 5,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Item 5',
      follow: 'follow',
      time: '2s',
      icon: 'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      type: 1,
    },
    {
      id: 6,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Item 5',
      follow: 'follow',
      time: '2s',
      icon: 'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      type: 1,
    },
    {
      id: 7,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Item 5',
      follow: 'follow',
      time: '2s',
      icon: 'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/432783167_821826239776796_3320816307640071840_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FbH5GxF8_TIAb7d8FbV&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfDY3Ildncoq75AbFZ4SOje8LEsy-GlUwfkNVnXuVWZV-Q&oe=661A620C',
      type: 1,
    },
    {
      id: 8,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Item 5',
      follow: 'follow',
      time: '2s',
      icon: 'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/432783167_821826239776796_3320816307640071840_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FbH5GxF8_TIAb7d8FbV&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfDY3Ildncoq75AbFZ4SOje8LEsy-GlUwfkNVnXuVWZV-Q&oe=661A620C',
      type: 3,
    },
    {
      id: 9,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Item 5',
      follow: 'follow',
      time: '2s',
      icon: 'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/432783167_821826239776796_3320816307640071840_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FbH5GxF8_TIAb7d8FbV&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfDY3Ildncoq75AbFZ4SOje8LEsy-GlUwfkNVnXuVWZV-Q&oe=661A620C',
      type: 3,
    },
    {
      id: 10,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Item 5',
      follow: 'follow',
      time: '2s',
      icon: 'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/432783167_821826239776796_3320816307640071840_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FbH5GxF8_TIAb7d8FbV&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfDY3Ildncoq75AbFZ4SOje8LEsy-GlUwfkNVnXuVWZV-Q&oe=661A620C',
      type: 2,
    },
    {
      id: 11,
      imageUri:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      title: 'Item 5',
      follow: 'follow',
      time: '2s',
      icon: 'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/432783167_821826239776796_3320816307640071840_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FbH5GxF8_TIAb7d8FbV&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfDY3Ildncoq75AbFZ4SOje8LEsy-GlUwfkNVnXuVWZV-Q&oe=661A620C',
      type: 1,
    },
  ];
  const [isData, setIsData] = useState(data);
  const handleConfirm = (item: ListItem) => {
    console.log(`Confirmed: ${item.title}`);
    const newData = isData.map(dataItem => {
      if (dataItem.id === item.id) {
        return {...dataItem, isConfirmed: true, isFollow: true};
      }
      return dataItem;
    });
    setIsData(newData);
  };
  const handleCancel = (item: ListItem) => {
    console.log(`Cancelled: ${item.title}`);
    const newData = isData.map(dataItem => {
      if (dataItem.id === item.id) {
        return {...dataItem, isCancel: true, isFollow: true};
      }
      return dataItem;
    });
    setIsData(newData);
  };
  const handleFollow = (item: ListItem) => {
    console.log(`Followed: ${item.title}`);
    const newData = isData.map(dataItem => {
      if (dataItem.id === item.id) {
        return {...dataItem, isFollow: !dataItem.isFollow};
      }
      return dataItem;
    });
    setIsData(newData);
  };
  const renderItem: ListRenderItem<ListItem> = ({item}) => (
    <View style={styles.item}>
      <View style={styles.containerView}>
        <View style={styles.containerTitle}>
          <View style={styles.imgView}>
            <Image style={styles.image} source={{uri: item.imageUri}} />
            {item.icon && (
              <Image style={styles.imageIcon} source={{uri: item.icon}} />
            )}
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
          item.isConfirmed ? (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonWrapper}
                onPress={() => handleFollow(item)}>
                <Text style={styles.textButton}>
                  {item.isFollow ? t('Following') : t('Follow')}
                </Text>
              </TouchableOpacity>
            </View>
          ) : item.isCancel ? (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonWrapper}
                onPress={() => handleFollow(item)}>
                <Text style={styles.textButton}>
                  {item.isFollow ? t('Follow') : t('Following')}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonWrapper}
                onPress={() => handleConfirm(item)}>
                <Text style={styles.textButton}>{t('Confirm')}</Text>
              </TouchableOpacity>
              <View style={{width: 10}} />
              <TouchableOpacity
                style={styles.buttonWrapper}
                onPress={() => handleCancel(item)}>
                <Text style={styles.textButton}>{t('Cancel')}</Text>
              </TouchableOpacity>
            </View>
          )
        ) : item.type === 2 ? (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={() => handleFollow(item)}>
              <Text style={styles.textButton}>
                {item.isFollow ? t('Following') : t('Follow')}
              </Text>
            </TouchableOpacity>
          </View>
        ) : item.type === 3 ? (
          <View style={styles.buttonContainer}>
            <Image style={styles.imageFollow} source={{uri: item.imageUri}} />
          </View>
        ) : null}
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
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <FlatList
        data={isData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
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
    // color: '#FFFFFF',
    backgroundColor: '#E693BF',
    borderRadius: 30,
  },
});
