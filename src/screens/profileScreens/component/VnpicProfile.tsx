import { ScrollView, StyleSheet, Text, View, FlatList, Animated } from 'react-native'
import React from 'react'

interface Props {
  scrollY: any; // hoặc thay any bằng kiểu dữ liệu phù hợp nếu có

}

const VnpicProfile:React.FC<Props> = ({ scrollY }) => {
  const data = Array.from({ length: 50 }, (v, k) => ({
    key: String(k + 1),
    text: `VnPicProfile ${k + 1}`,
  }));
  return (
    <View style={styles.container}>
    <Animated.FlatList
      data={data}
      renderItem={({ item }) => <Text style={styles.item}>{item.text}</Text>}
      keyExtractor={item => item.key}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={16} // Adjust based on your needs
    />
  </View>
  )
}

export default VnpicProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
})