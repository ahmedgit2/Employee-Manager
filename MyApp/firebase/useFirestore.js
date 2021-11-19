import { collection, startAfter, getDocs, limit, query,orderBy } from "firebase/firestore";
import db from './firestore'

const empRef = (collection(db, "Employees"));

export async function getFirstPage() {
    const emp = query(empRef,orderBy("name"),limit(7));
    const documentSnapshots = await getDocs(emp);
    const employeesData = documentSnapshots.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];

    return (
        {
            employees:employeesData,
            lastVisible: lastVisible
        })     
    }

    export async function getMore(startafter) {
        console.log('startafter',startafter)

        const emp = query(empRef, 
            orderBy("name"),
            startAfter(startafter),
            limit(2));
        const documentSnapshots = await getDocs(emp);
        const nextEmployeesData = documentSnapshots.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        const lastVisible = documentSnapshots.docs[ documentSnapshots.docs.length - 1 ];
        
        return (
            {
                employees:nextEmployeesData,
                lastVisible: lastVisible
            })
            
        }
        

    //Get All Date On Snap Shot 
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


//For Pagination

/*
 const lastVisible = documentSnapshots.docs[ documentSnapshots.docs.length - 1 ];


const next = query(empRef, startAfter(lastVisible), limit(6));

*/

