import React,{Component} from "react"
import { Link } from "react-router-dom"
import HelloWorldService from "../../API/todo/HelloWorldService.js"


class WelcomeComponent extends Component{

	constructor(props){
		super(props)
		this.callRestfulWebServices= this.callRestfulWebServices.bind(this)
		this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this)
		this.handleError= this.handleError.bind(this)
		this.state={
			status:"200",
			welcomeMessage:""
		}
	}

	render(){
		return(
            <>		
            <h1>Welcome!</h1>	
            <div className='container'>Welcome {this.props.params.name}, you can manage your todos <Link to="/todos">here</Link></div>

				
            <div className='container'>testing restful services <button type="button" className="btn btn-success" onClick={this.callRestfulWebServices}>Test</button></div>
			 <div className='container'>{this.state.welcomeMessage}</div>
			</>
			
		)
	}
	callRestfulWebServices(){
		// HelloWorldService.excecuteHelloWorldService()
		// HelloWorldService.excecuteHelloWorldBeanService()
		HelloWorldService.excecuteHelloWorldPathVariable(this.props.params.name)
		.then(response=>{
			this.handleSuccessfulResponse(response)
			
		})
		.catch(error=>this.handleError(error))


	}

	handleSuccessfulResponse(response){
		this.setState({welcomeMessage:response.data.message})
		
	}
	handleError(error){
		
		let errorMessage='';
		if(error.message){
			errorMessage+=error.message
		}

		if(error.response && error.response.data){
			errorMessage+=error.response.data.message
		}

		this.setState({welcomeMessage:errorMessage})

	}


}

export default WelcomeComponent