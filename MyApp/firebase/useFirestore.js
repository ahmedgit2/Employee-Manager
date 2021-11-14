import { collection, getDocs } from "@firebase/firestore";
import { useState, useEffect } from "react";

import { db } from './firestore'


export const useFirestore = () => {

    const [ employees, setemployees ] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "Employees"), (Snapshot) => {

            setemployees(Snapshot.docs.map((doc) => doc.data()))

            console.log(employees)
        })


    }, [])
}

// same func with async - await
/*
export const useFirestore = () => {
    const [ employees, setemployees ] = useState([]);
    const empRef = collection(db, 'Employee')
    useEffect(() => {
        const getEmp = async () => {
            const data = await getDocs(empRef);
            console.log(data)
        };

        getEmp();

    }, [])

    return items;

}*/