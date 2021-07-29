import { useParams } from "react-router";
import { useState } from 'react';
import { users } from "../usersData";


const CreateUser = ({ status }, addCallback) => {
    const { id: eid } = useParams();

    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [dept,setDept] = useState("");

    
    // valid(item,type)
    // {
    //     let itemValue=item.target.value;
    //     switch(type){
    //         case "id":{
    //             this.setId({id:itemValue})
    //             console.warn("item",itemValue,type)
    //         }
    //         case "name":{
    //             this.setName({name:itemValue})
    //         }
    //         case "dept":{
    //             this.setDept({dept:itemValue})
    //         }
    //     }
    // }


    return (

        <>
            <br />
            <h3>{status === 'add' ? 'Create' : 'Edit'} User Page: {eid}</h3>
            <form onSubmit={()=>addCallback(id,name,dept)}>
                <table>
                    <tr>
                        <td>Username</td>
                        <td>
                            <input
                                type="text"
                                name="name"
                                onChange={
                                    e=>{
                                        setName(e.target.value);
                                        //console.log(name);
                                    }
                                } />
                        </td>
                    </tr>
                    <tr>
                        <td>Id</td>
                        <td>
                            <input 
                                type="text" 
                                name="id" 
                                onChange={
                                    e=>{
                                        setId(e.target.value);
                                    }    
                                } />
                        </td>
                    </tr>
                    <tr>
                        <td>Dept</td>
                        <td>
                            <input 
                            type="text" 
                            name="dept" 
                            onChange={
                                e=>{
                                    setDept(e.target.value);
                                }
                            } />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type="submit" name="create" value={status === 'add' ? 'Create' : 'Update'} />
                        </td>
                    </tr>
                </table>
            </form>
        </>
    );
}

export default CreateUser;