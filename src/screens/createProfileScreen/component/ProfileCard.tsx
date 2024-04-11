import { StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, PermissionsAndroid, Alert, Image, } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LoginStackEnum, LoginStackParamList } from '@/navigation/login'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '@/redux/store'
import { userInfoSelector } from '@/redux/test/userStore'
import AxiosInstance from '@/network/axiosInstance'

const axios = AxiosInstance();




const ProfileCard = () => {
    const navigation = useNavigation<NativeStackNavigationProp<LoginStackParamList>>();
    const [selectedImage, setSelectedImage] = useState<string | null | undefined>(null);
    const [fullName, setFullName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [userData, setUserData] = useState({});
    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: "Camera Permission",
                        message: "App needs access to your camera",
                        buttonNeutral: "Ask Me Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK"
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log("You can use the camera");
                    return true;
                } else {
                    console.log("Camera permission denied");
                    return false;
                }
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else {
            return true;
        }
    };

    const handleSelectImage = () => {
        Alert.alert(
            "Select Image",
            "Choose an option to select your avatar",
            [
                {
                    text: "Choose from Device",
                    onPress: () => openImagePicker(),
                },
                {
                    text: "Open Camera",
                    onPress: () => handleCameraLaunch(),
                },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
            ],
            { cancelable: true }
        );
    };

    const openImagePicker = async () => {
        const options = {
            mediaType: 'photo' as const,
            includeBase64: false,
            maxHeight: 100,
            maxWidth: 100,
        };

        try {
            const response = await launchImageLibrary(options);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorMessage) {
                console.log('Image picker error: ', response.errorMessage);
            } else {
                const imageUri = response.assets && response.assets[0].uri;
                if (imageUri) {
                    const uploadImageUri = await uploadImage(imageUri);
                    console.log(uploadImageUri, "uploadImageUri");
                    setSelectedImage(uploadImageUri);
                }
            }
        } catch (error) {
            console.log('An error occurred: ', error);
        }
    };

    const handleCameraLaunch = async () => {
        const hasPermission = await requestCameraPermission();
        if (!hasPermission) {
            return;
        }

        const options = {
            mediaType: 'photo' as const,
            includeBase64: false,
            maxHeight: 100,
            maxWidth: 100,
        };

        try {
            const response = await launchCamera(options);
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.errorMessage) {
                console.log('Camera Error: ', response.errorMessage);
            } else {
                const imageUri = response.assets && response.assets[0].uri;
                if (imageUri) {
                    const uploadImageUri = await uploadImage(imageUri);
                    console.log(uploadImageUri, "uploadImageUri");
                    setSelectedImage(uploadImageUri);
                }
                
            }
        } catch (error) {
            console.log('An error occurred: ', error);
        }
    };
    const uploadImage = async (imageUri: string) => {
        const formData = new FormData();
        formData.append('filename', {
            uri: imageUri,
            type: 'image/jpeg', // Hoặc type khác tùy vào định dạng ảnh của bạn
            name: 'image',
        });
    
        try {
            const response = await axios.post('upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            // Kiểm tra nếu upload thành công
            if (response.data.status === 200) {
                console.log("Upload success", response.data);
                return response.data.data.link; // Trả về link ảnh
            } else {
                console.log("Upload failed", { ...response});
                console.log("Upload failedádasdasdasda");
                return null;
            }
        } catch (error) {
            console.error("Error uploading image", JSON.stringify(error));
            console.log("Upload failedádasdasdasda");
            return null;
        }
    };
    const { t} = useTranslation();
    const [bio, setBio] = useState('');
    const [link, setLink] = useState('');
    const openEditBioScreen = () => {
        navigation.navigate(LoginStackEnum.EditBioScreen, {
            onSaveBio: (newBio: string) => setBio(newBio),
        });
      };
      const openEditLinkScreen = () => {
        navigation.navigate(LoginStackEnum.EditLinkScreen, {
            onSaveLink: (newLink: string) => setLink(newLink),
        });
      };
      const userInfo = useAppSelector(userInfoSelector)
    useEffect(() => {
        if (userInfo) {
            setFullName(userInfo.fullName);
            setSelectedImage(userInfo.avatar);
          }
    }, [userInfo]);
    console.log(selectedImage, "selectedImage");
    return (
        <View style={styles.Container}>
            <View style={styles.NameContainer}>
                <View style={styles.NameTitleContainer}>
                    <Text style={styles.NameTitle}>{t('Name')}</Text>
                    <View style={styles.TextInputContainer}>
                        <FontAwesomeIcon icon={faUser} size={15} color="#000" />
                        <TextInput placeholder={t("+ Name")} style={styles.TextInputStyle} value={fullName} onChangeText={setFullName} />
                    </View>
                </View>
                <TouchableOpacity style={styles.ButtonCamera} onPress={handleSelectImage}>
                    {selectedImage ? (
                        <Image
                            source={{ uri: selectedImage }}
                            style={styles.image}
                        />
                    ) : (
                        <FontAwesomeIcon icon={faCamera} size={20} color="#000" />
                    )}

                </TouchableOpacity>
            </View>
            <View style={styles.line}></View>
            <View style={styles.NameContainer}>
                <View style={styles.NameTitleContainer}>
                    <TouchableOpacity onPress={openEditBioScreen}>
                        <Text style={styles.NameTitle}>Bio</Text>
                        <TextInput placeholder="+ Bio" style={styles.TextInputStyle} value={bio}  editable = {false}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.NameContainer}>
                <View style={styles.NameTitleContainer}>
                <TouchableOpacity onPress={openEditLinkScreen}>
                    <Text style={styles.NameTitle}>Link</Text>
                    <TextInput placeholder="+ Link" style={styles.TextInputStyle} value={link} editable = {false}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line}></View>
        </View>
    )
}

export default ProfileCard

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
        resizeMode: 'cover',
    },
    TextInputStyle: {
        color: '#000',
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: '400',
        marginLeft: 5,
    },
    line: {
        width: '80%',
        height: 1,
        backgroundColor: '#D9D9D9',
        marginBottom: 20,
    },
    ButtonCamera: {
        borderRadius: 25,
        backgroundColor: '#E3E3E3',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    NameTitle: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: '700',
        color: '#000',
    },
    NameTitleContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    NameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },
    Container: {
        backgroundColor: 'white',
        borderRadius: 16,
        width: '100%',
        marginTop: 82,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingVertical: 26,
        padding: 26,
    }
})