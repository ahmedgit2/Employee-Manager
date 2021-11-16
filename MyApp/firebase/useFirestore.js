import { useState, useEffect } from "react";

import { collection, onSnapshot } from "firebase/firestore";
import db from './firestore'

export function useFirestore() {
    const [ employees, setemployees ] = useState([]);

    useEffect(() => {
        const unSub = onSnapshot(collection(db, "Employees"), (snapshot) => {
            setemployees(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

            return (
                unSub()
            );
        })

    }, [ employees ])

    return (
        employees
    )
}

