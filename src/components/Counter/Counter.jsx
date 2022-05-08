import React,{Component} from "react";
import './Counter.css'
import PropTypes from 'prop-types';
import CounterButton from './CounterButton'
import ResetButton from "./Reset";
export default class Counter extends Component{

    constructor(){
        super();
        this.state={
            counter:0
        }
        this.increament = this.increament.bind(this);
        this.decreament = this.decreament.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
    }

    render(){
        return (
            <div className="App">
               <CounterButton by={1} increamentMethod={this.increament} decreamentMethod={this.decreament}/>
               <CounterButton by={10} increamentMethod={this.increament} decreamentMethod={this.decreament}/>
               <CounterButton by={15} increamentMethod={this.increament} decreamentMethod={this.decreament}/>
               <CounterButton by={20} increamentMethod={this.increament} decreamentMethod={this.decreament}/>
               <span className="count">{this.state.counter}</span>
               <ResetButton resetMethod={this.resetCounter}></ResetButton>
               </div>
          
          );
    }

    increament(by){
        // console.log(`Up by" + ${by}`)
        this.setState(
            (prevState)=>{
               return{counter:prevState.counter + by} 
            }
        )
     }
     decreament(by){
        // console.log(`Up by" + ${by}`)
        this.setState(
            (prevState)=>{
               return{counter:prevState.counter - by} 
            }
        )
     }
     resetCounter(){
        // console.log(`Up by" + ${by}`)
        this.setState(
           
            {counter:0} 
            
        )
     }
}






