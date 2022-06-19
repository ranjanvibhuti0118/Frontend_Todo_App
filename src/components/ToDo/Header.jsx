import React, {Component} from 'react'

import {  Link} from 'react-router-dom'

import AuthenticationService from './AuthenticationService.js'


class HeaderComponent extends Component{
    render(){
        const isUserLogged= AuthenticationService.isUserLoggedIn();
        // console.log(isUserLogged);


        return(
            <header>

<nav className="navbar navbar-expand-md navbar-dark bg-dark">

  <div> <a href="https://github.com/in28minutes/full-stack-with-react-and-spring-boot/blob/master/00000-react-6-updates/react6-vs-react5-step-by-step-changes.md#todoapp-after-this-step" className="navbar-brand">ToDo App</a> </div>
    <ul className="navbar-nav">
      {isUserLogged && <li >
        <Link className="nav-link" to="/welcome/in28minutes">Home</Link>
      </li>}
      {isUserLogged && <li >
      <Link className="nav-link" to="/todos">Todos</Link>
      </li>}
      
  
    </ul>
    <ul className="navbar-nav navbar-collapse justify-content-end">
     {!isUserLogged &&  <li >
      <Link className="nav-link" to="/login">Login</Link>
      
      </li>}
     {isUserLogged &&  <li >
      <Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link>
      </li>}
      
  
    </ul>
  
</nav>

            </header>
        )
    }
}



export default HeaderComponent