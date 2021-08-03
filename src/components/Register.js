import { useParams } from "react-router";
import { useState } from "react";
import { useHistory } from "react-router";

const Register = ()=>{
    // const {id:eid} = useParams();
    // const [user, setUser] = useState({name: '', id:'', dept:''});
    // const history = useHistory();
    // //const pid=1;
    // //console.log(eid);
    
    
    //     // const userlist1=list.find((u)=> u.id === 1);
    //     // console.log(userlist1);
    
    // //console.log(list.find((u)=> u.id === eid));
    // // const data = list.find((user)=> user.id === eid);
    // //console.log(data);

    const change = (e)=>{
        const attr = e.target.name;
        const val = e.target.value;
       // setUser({...user, [attr]: val})
    };
    
    // const onsubmit = (e)=>{
    //     e.preventDefault();
    //     console.log(user);
    //     addNewUser(user);
    //     history.push('/userlist');
    // }


        
        
            //setNewUser({...data});
    

    return(
        
        <>
            <br/>
            <h3>Register Employee Page: </h3>
            <form onSubmit={onsubmit}>
                Name: <input type='text' name='name' onChange={change} /> <br/>
                Contact Number: <input type='text' name='id' onChange={change} /><br/>
                Username: <input type='text' name='dept' onChange={change} /><br/>
                Password: <input type='text' name='dept' onChange={change} /><br/>
                <input type='submit' value='add'/>
            </form>
        </>
    );
}

export default Register;