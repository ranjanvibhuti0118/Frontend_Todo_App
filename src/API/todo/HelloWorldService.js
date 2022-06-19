import axios from "axios";
import  {API_URL,JPA_API_URL}  from "../../Constants.js";

class HelloWorldService {

    excecuteHelloWorldService(){
     return  axios.get(`${API_URL}/hello-world`)

        // console.log("helloworldservice");
    }
    excecuteHelloWorldBeanService(){
        return  axios.get(`${API_URL}/hello-world-bean`)
   
           // console.log("helloworldservice");
       }
       excecuteHelloWorldPathVariable(name){

        // let username="in28minutes"
        // let password="dummy"

        // let basicAuthHeader= "Basic " + window.btoa(username+ ":"+password);  
        return  axios.get(`${API_URL}/basicauth`
        // ,
        // {
        //     headers:{
        //         authorization:basicAuthHeader
        //     }
        // }
        )
   
           // console.log("helloworldservice");
       }
       
}

export default new HelloWorldService()