import { Animated, Dimensions, FlatList, Image, ImageSourcePropType, StyleSheet } from "react-native";
import React, { useState } from "react";
import event = Animated.event;
import AutoHeightImage from "react-native-auto-height-image";

interface ListMediaContentProps {
  medias: Array<String>;
}

const { width } = Dimensions.get("window");
const previewCount = 1;
const itemMarginLeft = 12;
const itemWidth = width / (previewCount + .25);
const startScroll = itemWidth - itemWidth * .0625 - 12;

const ListImageContent = ({ medias }: ListMediaContentProps) => {

  const snapToOffsets = medias.map((x, i) => {
    return ((i * itemWidth) + startScroll);
  });

  return (
    <FlatList
      pagingEnabled={true}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      snapToOffsets={snapToOffsets}
      snapToAlignment={"center"}
      data={medias.reverse()}
      renderItem={({ item, index }) => (
        <AutoHeightImage source={{uri: item.toString()}}
                         width={itemWidth - itemMarginLeft}
               style={[styles.image, index === 0 ? { marginLeft: 16 } : index === medias.length - 1 ? {
                 marginRight: 16,
                 marginLeft: 16
               } : { marginLeft: itemMarginLeft }]} />
      )} />
  );
};

export default ListImageContent;

const styles = StyleSheet.create({
  image: {
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center"
  }
});
