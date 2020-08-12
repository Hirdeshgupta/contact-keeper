import React ,{useState,useEffect}from 'react';
import Navbar from "./Components/Navbar";
import Home from  "./Components/Home"
import {BrowserRouter as Router , Switch , Route } from "react-router-dom"
import AddContacts from './Components/AddContacts';
import Footer from './Components/Footer';
import ProfileEdit from "./Components/ProfileEdit";
import LogIn from "./Components/LogIn";
import Register from "./Components/Register";
import axios from "axios";


function App() {
  useEffect(()=>{
    async function fetchData(){
      try {
        const response = await axios.get('http://localhost:5000');
        console.log(response)
        setIsLoggedIn(response.data.isAutheticated)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData();
    console.log(isLoggedIn)
  },[]);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  if(isLoggedIn){
    return (
      <Router>
        <Navbar>
      <Switch>
        <Route path="/" exact  component={Home} />
        <Route path="/contacts/add" exact  component={AddContacts} />
        <Route path="/profile/edit" exact  component={ProfileEdit} />
      </Switch>
      <Footer/>
      </Navbar>
      </Router>
  
    );
  }
  else{
    return (
      <Router>
      <Switch>
        <Route path="/" exact  component={LogIn} />
        <Route path="/register" exact  component={Register} />
      </Switch>
      </Router>
  
    );
  }

}

export default App;
