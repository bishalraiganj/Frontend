
import UserProfile from './UserProfile.jsx'

function Users({children})
{

    return(


        <div>

            {children.map((child,index)=><UserProfile name={child.name} email={child.email} age={child.age} key={index}/>)}

        </div>



    )
}


export default Users;