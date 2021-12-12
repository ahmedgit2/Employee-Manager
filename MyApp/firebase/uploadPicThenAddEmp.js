import { AddEmp } from '../firebase/addEmp'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const UploadPicAndAddEmp = async ({ image, name, email, phone, desc }) => {

    const storage = getStorage();

    const response = await fetch(image)
    const blob = await response.blob();

    const imageName = image.substring(image.lastIndexOf('/') + 1);
    const storageRef = ref(storage, 'image/' + imageName);
    const uploadTask = uploadBytes(storageRef, blob);

    uploadTask.then((snapshot) => {
        console.log('Uploaded ' + name);

        getDownloadURL(snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);

            AddEmp({
                name: name,
                email: email,
                phone: phone,
                desc: desc,
                image: downloadURL
            });

        });
    });

}