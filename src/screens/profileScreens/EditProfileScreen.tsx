import { StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, PermissionsAndroid, Alert, Image, } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { useNavigation } from '@react-navigation/native'
import { ProfileNavigatorProps } from '@/navigation/ProfileNavigator/config'
import ButtonSwitch from './component/ButtonSwitch'
import IconRinged from '@/assets/icons/IconRinged'
import IconPrivacy from '@/assets/icons/IconPrivacy'
import AxiosInstance from '@/network/axiosInstance'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '@/redux/store'
import { userInfoSelector } from '@/redux/test/userStore'


const axios = AxiosInstance();

const EditProfileCard = () => {
    const navigation = useNavigation<ProfileNavigatorProps>();
    const [selectedImage, setSelectedImage] = useState<string | null | undefined>(
        null,
    );
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const originalUserName = useRef(userName); // Lưu trữ giá trị ban đầu của userName
    const [bio, setBio] = useState('');
    const [link, setLink] = useState('');
    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs access to your camera',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('You can use the camera');
                    return true;
                } else {
                    console.log('Camera permission denied');
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
            'Select Image',
            'Choose an option to select your avatar',
            [
                {
                    text: 'Choose from Device',
                    onPress: () => openImagePicker(),
                },
                {
                    text: 'Open Camera',
                    onPress: () => handleCameraLaunch(),
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
            ],
            { cancelable: true },
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
                if (response.assets && response.assets[0].uri) {
                    const uploadImageUri = await uploadImage(response.assets[0]);
                    console.log(uploadImageUri, 'uploadImageUri');
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

                if (response.assets && response.assets[0].uri) {
                    const uploadImageUri = await uploadImage(response.assets[0]);
                    setSelectedImage(uploadImageUri);
                }
            }
        } catch (error) {
            console.log('An error occurred: ', error);
        }
    };
    const uploadImage = async (img: any) => {
        const axios = AxiosInstance('multipart/form-data');
        console.log('Uploading image', img);
        const formData = new FormData();
        formData.append('image', {
            uri: img.uri,
            type: img.type,
            name: img.fileName,
        });
        try {
            const response = await axios.post('upload', formData);
            console.log('Upload success', response.data.link);
            return response.data.link; // Trả về link ảnh

        } catch (error) {
            console.log('Upload error', error);
            return null;
        }
    };
    const { t } = useTranslation();

    const userInfo = useAppSelector(userInfoSelector);
    useEffect(() => {
        if (userInfo) {
           getProfile();
        }
    },  [userInfo._id]);
    const data = {
        userName: userName,
        fullName: fullName,
        avatar: selectedImage,
        bio: bio,
        links: [link],
    };
    const getProfile = async () => {
        try {
            const response = await axios.get(`/user/${userInfo._id}`);
            setFullName(response.data.fullName);
            setUserName(response.data.userName);
            originalUserName.current = response.data.userName;
            setBio(response.data.bio);
            setLink(response.data.links.join(''));
            setSelectedImage(response.data.avatar);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };
    const onPressNext = async (data: any) => {
        // Kiểm tra xem userName có thay đổi so với giá trị ban đầu không
        if (userName === originalUserName.current) {
            delete data.userName; // Nếu không thay đổi, loại bỏ userName khỏi dữ liệu được gửi đi
        }
        try {
            const response = await axios.patch('user/update_info', data);
            navigation.goBack();
            console.log('Update success', response);
            return response;
        } catch (error) {
            console.error('Error update', JSON.stringify(error));
        }

    }
    return (
        <View style={styles.Container}>
            <View style={styles.HeaderContainer}>
                <View style={styles.HeaderBar}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.TitleCancel}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={styles.EditBio}>Edit profile</Text>
                    <TouchableOpacity>
                        <Text style={styles.Done} onPress={() => onPressNext(data)}>Done</Text>
                    </TouchableOpacity>

                </View>

            </View>
            <View style={{ height: 1, backgroundColor: '#E3E3E3' }}></View>
            <View style={{ padding: 16 }}>
                <View style={styles.ProfileCard}>
                    <View style={styles.NameContainer}>
                        <View style={styles.NameTitleContainer}>
                            <Text style={styles.NameTitle}>Name</Text>
                            <View style={styles.TextInputContainer}>
                                <FontAwesomeIcon icon={faUser} size={15} color="#000" />
                                <TextInput placeholder="+ Name" style={styles.TextInputStyle} value={fullName} onChangeText={setFullName} />
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
                            <TouchableOpacity>
                                <Text style={styles.NameTitle}>User name</Text>
                                <TextInput placeholder="+ User name" style={styles.TextInputStyle} value={userName} onChangeText={setUserName}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.NameContainer}>
                        <View style={styles.NameTitleContainer}>
                            <TouchableOpacity>
                                <Text style={styles.NameTitle}>Bio</Text>
                                <TextInput placeholder="+ Bio" style={styles.TextInputStyle} value={bio} onChangeText={setBio}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.NameContainer}>
                        <View style={styles.NameTitleContainer}>
                            <TouchableOpacity>
                                <Text style={styles.NameTitle}>Link</Text>
                                <TextInput placeholder="+ Link" style={styles.TextInputStyle} value={link}  onChangeText={setLink}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.line}></View>

                    <View>
                        <ButtonSwitch title='Your profile is private' iconOn={<IconRinged />} iconOff={<IconPrivacy />} />
                    </View>

                </View>
            </View>
        </View>
    )
}

export default EditProfileCard

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
    },
    HeaderContainer: {
        backgroundColor: 'white',
        padding: 16,
    },
    Done: {
        fontSize: 18,
        fontFamily: 'Roboto',
        color: '#5E4EA0',
        fontWeight: '700',
    },
    EditBio: {
        fontSize: 18,
        fontFamily: 'Roboto',
        color: '#000',
        fontWeight: '700',
    },
    TitleCancel: {
        fontSize: 18,
        fontFamily: 'Roboto',
        color: '#000',
        fontWeight: '400',

    },
    HeaderBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
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
        width: 220,
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
    ProfileCard: {
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