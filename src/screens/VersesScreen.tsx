import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItem,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-regular-svg-icons';
import {faComment} from '@fortawesome/free-regular-svg-icons';
import {faRepeat} from '@fortawesome/free-solid-svg-icons';
import {faPaperPlane} from '@fortawesome/free-regular-svg-icons';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {faThumbtack} from '@fortawesome/free-solid-svg-icons';
import {faCommentDots} from '@fortawesome/free-regular-svg-icons';
import {faTrashCan} from '@fortawesome/free-regular-svg-icons';

// const navigation = useNavigation();
// const Stack = createStackNavigator();
import Modal from 'react-native-modal';

interface ListItem {
  id: number;
  imageUser: string;
  name: string;
  time: string;
  content: string;
  imageVideo: string;
  type?: number;
}

const Verses = () => {
  const data: ListItem[] = [
    {
      id: 1,
      imageUser:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      name: 'Travis scott',
      time: '2h',
      content: `New MV comming up 🔥🔥🔥 
Show me your hand`,
      imageVideo:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      type: 1,
    },
    {
      id: 2,
      imageUser:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      name: 'Travis scott',
      time: '2h',
      content: `New MV comming up 🔥🔥🔥 
Show me your hand`,
      imageVideo:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      type: 2,
    },
    {
      id: 3,
      imageUser:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      name: 'Travis scott',
      time: '2h',
      content: `New MV comming up 🔥🔥🔥 
Show me your hand`,
      imageVideo:
        'https://lh3.googleusercontent.com/-eKol7jffhIA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmrGrt3N80VTCfonwvlUE4RXRIjgg/s128-c/photo.jpg',
      type: 2,
    },
  ];

  const [starPressed, setStarPressed] = useState(false);
  const [commentPressed, setCommentPressed] = useState(false);
  const [repeatPressed, setRepeatPressed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const togglePin = () => {
    setIsPinned(!isPinned);
    setIsModalVisible(!isModalVisible);
  };

  const handleStarPress = () => {
    setStarPressed(!starPressed);
  };

  const handleCommentPress = () => {
    setCommentPressed(!commentPressed);
  };

  const handleRepeatPress = () => {
    setRepeatPressed(!repeatPressed);
  };

  const renderItem: ListRenderItem<ListItem> = ({item}) => (
    <View style={styles.item}>
      {isPinned && (
        <View style={styles.containerPinned}>
          <FontAwesomeIcon style={styles.iconPinned} icon={faThumbtack} />
          <Text style={styles.pinnedText}>You Pinned this post</Text>
        </View>
      )}
      <View style={styles.containerItem}>
        <View style={styles.headerItem}>
          <Image style={styles.image} source={{uri: item.imageUser}} />
          <View style={styles.text}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={toggleModal}>
          <FontAwesomeIcon icon={faEllipsis} />
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.bottomModal}
        animationIn="slideInUp"
        backdropOpacity={0.3}>
        <View style={styles.bottomSheet}>
          <View style={styles.bottomSheetTitle}>
            <TouchableOpacity style={styles.button} onPress={togglePin}>
              <FontAwesomeIcon
                style={styles.bottomSheetIcon}
                icon={faThumbtack}
              />
              <Text style={styles.textBottom}>
                {isPinned ? 'Unpin this post' : 'Pin this post'}
              </Text>
            </TouchableOpacity>

            <View
              style={{
                borderBottomColor: '#E3E3E3',
                borderBottomWidth: 1,
                margin: 10,
              }}
            />
            <TouchableOpacity style={styles.button}>
              <FontAwesomeIcon
                style={styles.bottomSheetIcon}
                icon={faCommentDots}
              />
              <Text style={styles.textBottom}>Change who can reply</Text>
            </TouchableOpacity>
            <View
              style={{
                borderBottomColor: '#E3E3E3',
                borderBottomWidth: 1,
                margin: 10,
              }}
            />
            <TouchableOpacity style={styles.button}>
              <FontAwesomeIcon
                style={styles.bottomSheetDelete}
                icon={faTrashCan}
              />
              <Text style={styles.textDelete}>Delete post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text style={styles.content}>{item.content}</Text>
      <Image style={styles.imgVideo} source={{uri: item.imageVideo}} />
      <View style={styles.icon}>
        <View style={styles.vectorIcon}>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faStar} />
          </TouchableOpacity>
          <Text style={styles.textFooter}>1910</Text>
        </View>
        <View style={styles.vectorIcon}>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faComment} />
          </TouchableOpacity>
          <Text style={styles.textFooter}>210</Text>
        </View>
        <View style={[styles.vectorIcon, repeatPressed && styles.iconPressed]}>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faRepeat} />
          </TouchableOpacity>
          <Text style={styles.textFooter}>68</Text>
        </View>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faPaperPlane} />
        </TouchableOpacity>
      </View>
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

export default Verses;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  item: {
    paddingVertical: 20,
  },
  containerItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerItem: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 46,
  },
  text: {
    marginHorizontal: 10,
  },
  name: {},
  time: {},
  content: {
    width: 359,
    fontSize: 16,
    color: '#2C2B2B',
    marginVertical: 10,
  },
  imgVideo: {
    width: '100%',
    height: 358,
    borderRadius: 12,
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
  },
  vectorIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  textFooter: {
    marginHorizontal: 10,
    color: '#2C2B2B',
    fontSize: 14,
  },
  iconPressed: {
    backgroundColor: 'blue',
  },
  bottomSheet: {
    backgroundColor: '#FFF',
    padding: 32,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  bottomSheetTitle: {
    width: 336,
    height: 144,
    backgroundColor: '#F1F1F1',
    borderRadius: 12,
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomSheetIcon: {
    paddingHorizontal: 30,
  },
  textBottom: {
    fontSize: 18,
  },
  bottomSheetDelete: {
    paddingHorizontal: 30,
    color: 'rgba(255, 0, 0, 1)',
  },
  textDelete: {
    color: 'rgba(255, 0, 0, 1)',
    fontSize: 18,
  },
  pinnedText: {
    marginHorizontal: 10,
    color: 'rgba(159, 159, 159, 1)',
    fontSize: 14,
  },
  containerPinned: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconPinned: {
    color: 'rgba(159, 159, 159, 1)',
  },
});
