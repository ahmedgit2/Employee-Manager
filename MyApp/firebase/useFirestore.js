import React,{useState} from 'react'
import { collection, startAfter, getDocs, limit, query,orderBy } from "firebase/firestore";
import db from './firestore'

const empRef = (collection(db, "Employees"));

const docRef = (Page,lastVisible)=> {
    let myQuery ;
    if(Page <= 1){
        myQuery = query(empRef,orderBy("name"),limit(7));
    }
    else{
        myQuery =query(empRef,orderBy("name"),startAfter(lastVisible),limit(2));
    }
    return myQuery;
}
  
export async function getEmployees(Page,lastVisible) {

    const documentSnapshots = await getDocs(docRef(Page,lastVisible));
    
    const employeesData = documentSnapshots.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    
    const lastDoc = documentSnapshots.docs[documentSnapshots.docs.length -1 ];
 
    return ({
        employeesData :employeesData ,
        lastDoc:lastDoc,
    })
           
    }



    

    
    //Get All Date On Snapshot 

    /*
    export function useFirestore() {

        const [ employees, setemployees ] = useState([]);
        
        useEffect(() => {
            onSnapshot(collection(db, "Employees"), (snapshot) => {
                setemployees(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log(employees)
        })
    }, [])
    
    return (
        employees
    )
}
*/

