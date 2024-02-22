import React, {useRef, useMemo} from 'react';
import {View, Button, StyleSheet,Text} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';


const BtnS = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Sử dụng chiều cao 250 cho snap point
  const snapPoints = useMemo(() => [250], []);

  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Open Bottom Sheet" onPress={handleOpenBottomSheet} />
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          index={-1} // Bottom sheet sẽ ẩn khi mới mở ứng dụng
            
        >
          {/* Đặt nội dung của bạn trong View này với kích thước cố định */}
          <View style={styles.contentContainer}>
            <Text>Bottom Sheet Content</Text>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    width: 390, // Chiều rộng cố định
    height: 250, // Chiều cao cố định
    alignItems: 'center',
    
    // Tùy chỉnh thêm nếu cần
  },
});

export default BtnS;