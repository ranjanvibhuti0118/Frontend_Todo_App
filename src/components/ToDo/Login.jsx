import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'





class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    loginClicked() {
     

        // AuthenticationService.executeBasicAuthenticationService(this.state.username,this.state.password)
        // .then(()=>{
        //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
        //     // console.log("Loged In and Authentication in progress")
        //     this.props.navigate(`/welcome/${this.state.username}`)
        //     console.log("Success")
        // }).catch(()=>{
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasLoginFailed:true})
        //     console.log("Failed")


        // })
        
        AuthenticationService.executeJwtAuthService(this.state.username,this.state.password)
        .then((response)=>{
            AuthenticationService.registerSuccessfulLoginForJwt(this.state.username,response.data.token);
            // console.log("Loged In and Authentication in progress")
            this.props.navigate(`/welcome/${this.state.username}`)
            console.log("Success")
        }).catch(()=>{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
            console.log("Failed")


        })
    }
    
        render() {
        return (
            <div>
                <h1>Login</h1>
                <div className='container'>
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                <div className="TodoApp">
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    
                    </div>
                    <button type="button" onClick={this.loginClicked} className="loginButton btn btn-success">Login</button>
                </div>

            </div>
        )
    }
}


export default LoginComponent