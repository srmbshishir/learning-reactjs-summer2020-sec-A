
  // const url2 = `http://127.0.0.1:8000/api/`;

  // const [userlist2, setUserList2] = useState();
  // useFetch(url2, setUserList2);
  // console.log(userlist2);

  import UserList from './components/UserList';
  import {users} from './usersData';
  import {useState, useEffect} from 'react';
  import CreateUser from './components/CreateUser';
  import AddProduct from './components/AddProduct';
  import ProductList from './components/ProductList';
  import EditUser from './components/EditUser';
  import Register from './components/Register';
  import Navbar from './components/Navbar';
  import { useFetch } from './components/useFetch';
  import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
  
  function App() {
  
  const url = `http://127.0.0.1:8000/seller/showProduct/all`;
  
    const [userlist, setUserList] = useState([]);
    useFetch(url, setUserList);
    // const getData = (url)=>{
    //     return fetch(url)
    //             .then(response=>response.json())
    //             .then(json=>json);
    // }
  
    // useEffect(()=>{
    //   getData(url).then(data=>setUserList(data));
    // }, []);

    const url2 = 'http://127.0.0.1:8000/admin/showUser';
    const [userlist2, setUserList2] = useState([]);
    useFetch(url2, setUserList2);

  
    const deleteuser = (name)=>{
      const list = userlist.filter((user)=>user.id !== id);
      setUserList(list);
    }
  
    const addUser = (user)=>{
      setUserList([...userlist, user]);
    }

    const editUser = (user)=>{
      //setUserList([...user]);
      
      // console.log(user.id);
      
      // data.id=user.id;
      // data.userId=user.userId;
      // data.title=user.title;
      // console.log(data);
      // //user.preventDefault();
      // setUserList([...data]);

      
      // userlist.data = userData;
      // setUsers([...userlist, { ...userData }]);
      console.log(user.id);
      // const userData = userlist.map((u) => (u.id === user.id ? user : u));
      // console.log(userData);
      
      // const data = userlist.find((u)=> u.id == user.id);
      // console.log(data);
      // data.id=user.id;
      // console.log(data);

      // setUserList([...userlist, { ...data }]);
      // console.log(userlist);

      setUserList(userlist.map((u) => {
        console.log(user.id);
        console.log(u.id);
        if(u.id == user.id){
          console.log(u);
          return{...u, id:user.id, userId:user.userId, title:user.title} 
        }
        console.log(u);
        return u;
        
      }))
      console.log(userlist);

    }
  
    return (
     
      <Router>
        <Navbar/>
        <Switch>
            <Route exact path='/'> 
                <h1>Welcome Home!</h1>
            </Route>
            <Route path='/userlist'>
              <div>
                  <UserList list={userlist2} deleteCallback={deleteuser}/>
              </div>
            </Route>
            <Route path='/productlist'>
              <div>
                  <ProductList list={userlist} deleteCallback={deleteuser}/>
              </div>
            </Route>
            <Route path='/create'>
                <CreateUser status='add' addNewUser={addUser} />
            </Route>
            <Route path='/edit/:id'>
                <EditUser editNewUser={editUser} list={userlist} />
            </Route>
            <Route path='/register'>
                <Register/>
            </Route>
            <Route path='/AddProduct'>
                <AddProduct/>
            </Route>
            <Route path='*'>
                404 not found
            </Route>          
        </Switch>
    </Router>
    );
  }
  
  export default App;