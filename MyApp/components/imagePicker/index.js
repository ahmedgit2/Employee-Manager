import React, { useState } from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';

export const chooseImage = async () => {

    const response = await ImagePicker.openPicker({
        mediaType: 'photo',
        width: 600,
        height: 600,
        cropping: true,
    })

    const path = response.path;
    return {
        path: path,
    }
};

export const openCamera = async () => {
    let options = {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 300,
        quality: 1,
        saveToPhotos: true,
        includeBase64: true
    };

    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {

        const response = await launchCamera(options);
        if (response.didCancel) {
            console.log('User cancelled camera picker');
            return;
        } else if (response.errorCode == 'camera_unavailable') {
            alert('Camera not available on device');
            return;
        } else if (response.errorCode == 'permission') {
            alert('Permission not satisfied');
            return;
        } else if (response.errorCode == 'others') {
            alert(response.errorMessage);
            return;
        }

        const path = response.assets.map((res) => res.uri);

        return {
            path: path.toString(),
        }
    }
};


const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Camera Permission',
                    message: 'App needs camera permission',
                },
            );
            // If CAMERA Permission is granted
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err);
            return false;
        }
    } else return true;
};

const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'External Storage Write Permission',
                    message: 'App needs write permission',
                },
            );
            // If WRITE_EXTERNAL_STORAGE Permission is granted
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err);
            alert('Write permission err', err);
        }
        return false;
    } else return true;
};

