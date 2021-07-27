import { useParams } from "react-router";


const CreateUser = ({status},list)=>{
    const {id:eid} = useParams();
    
    return(
        
        <>
            <br/>
            <h3>{status==='add'?'Create':'Edit'} User Page: {eid}</h3>
            <form>
                Name: <input type='text' name='name' value={list.name}/> <br/>
                ID: <input type='text' name='id' value="" /><br/>
                Dept: <input type='text' name='dpet' value="" /><br/>
                <input type='submit' value={status==='add'?'Create':'Update'}/>
            </form>
        </>
    );
}

export default CreateUser;