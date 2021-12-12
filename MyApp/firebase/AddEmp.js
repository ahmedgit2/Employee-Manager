
import { addDoc, collection } from "firebase/firestore";
import db from './firestore'


export const AddEmp = async ({ name, email, phone, desc, image }) => {

    // Add a new document in collection "Employees"
    const collectionRef = (collection(db, 'Employees'))

    const payLoad = {
        name: name,
        email: email,
        phone: phone,
        desc: desc,
        image: image
    }

    await addDoc(collectionRef, payLoad)

}