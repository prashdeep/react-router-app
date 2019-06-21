import React from 'react';
import './App.css';
import {BrowserRouter,  NavLink, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends React.Component {
  state={
    loggedIn: false
  }
  handleLogin = ()=> {
    this.setState(previousState => ({
      loggedIn: !previousState.loggedIn
    }))
  }
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <ul>
          <li> 
            <NavLink activeStyle={{color:'red'}} exact to="/">Home</NavLink>
          </li>  
          <li>
            <NavLink activeStyle={{color:'red'}} exact to="/about">About</NavLink>
            </li> 
        </ul>
        <input type= "button" value={this.state.loggedIn ? 'logout':'log in'} onClick={this.handleLogin.bind(this)}/>
      <Route path="/" exact strict render={
        ()=>{
          return (<h1>Home page</h1>)
        }
      }/>
      
      <Route path="/about" exact strict render={
        ()=>{
          return (<h1>About page</h1>)
        }
      }/>
      

      <Route path="/user/:username" exact strict render={({ match})=>(
        this.state.loggedIn ? (<User username={match.params.username}/>):(<Redirect to='/'/>)
      )}/>
      </div>
      </BrowserRouter>
    )
  }
}

const User = (params) =>{
  return (<h1>Welcome User {params.username}</h1>)
}

export default App;
