import img1 from '../../Assets/Learn/Self-course/web-app.png';
import img2 from '../../Assets/Learn/Self-course/digital-marketing.png';
import img3 from '../../Assets/Learn/Self-course/data-analysis.png';
import img4 from '../../Assets/Learn/Self-course/graphic-design.png';
import img5 from '../../Assets/Learn/Self-course/virtual-assistant.png';
import { db } from '../../ConfigFile/Firebase-Config';
import { getDocs,collection } from '@firebase/firestore/lite';
 const getUser= async(db)=>{
    try { const Users = collection(db , 'CourseCards')
     const Ushnapshot = await getDocs(Users);
     const UsersList = Ushnapshot.docs.map(doc => ({...doc.data(),id:doc.id}));
    // console.log(UsersList);
    Data.push(...UsersList)
    console.log(Data);
  } catch(err){
     console.log(err.message)
  }
 };

 getUser(db);
const Data = 
     [
     
    ]
export default Data;