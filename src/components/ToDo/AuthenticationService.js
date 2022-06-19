import axios from "axios";
import  {API_URL}  from "../../Constants.js";

export const USER_NAME_SESSION_ATTRIBUTE_NAME='authenticatedUser'

class AuthenticationService{
registerSuccessfulLogin(username,password){
    
    
 
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username);
    this.setupAxiosInterceptor(this.createbasicAuthToken(username,password));
}

executeJwtAuthService(username,password){
    return axios.post(`${API_URL}/authenticate`,{
        username,
        password
    })
}


registerSuccessfulLoginForJwt(username,token){

sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username);
this.setupAxiosInterceptor(this.createJwtToken(token));
}


logout(){
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
}
isUserLoggedIn(){
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
         if(user===null){
            return false;
            }
            else return true;

}

createbasicAuthToken(username,password){
    return "Basic " + window.btoa(username+ ":"+password);  
}

createJwtToken(token){
    return "Bearer " + token;  
}

 executeBasicAuthenticationService(username,password){

    return axios.get(`${API_URL}/basicauth`,{
        headers:{
            authorization:this.createbasicAuthToken(username,password)
        }
    })

 }
getLoggedInUserName(){
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
         if(user===null){
            return "";
            }
            else return user;

}

setupAxiosInterceptor(basicAuthHeader){

    axios.interceptors.request.use((config)=>{
       if(this.isUserLoggedIn){
          config.headers.authorization=basicAuthHeader;
       }
       return config;
    })
 
 
 }

}

export default new AuthenticationService()