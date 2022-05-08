import React,{Component} from "react";
import './Counter.css'
import PropTypes from 'prop-types';


export default class CounterButton extends Component {

    constructor(){
        super();
        this.state={
            counter:0
        }
        this.increament = this.increament.bind(this);
        this.decreament = this.decreament.bind(this);
    }
    
    
        render(){
        return (
          <div className="counter" >
            <button onClick={this.increament}>+{this.props.by}</button>
            <button onClick={this.decreament}>-{this.props.by}</button>
            {/* <span className="count">{this.state.counter}</span> */}
          </div>
        );
        }
         increament(){

           this.props.increamentMethod(this.props.by);
        }
        decreament(){
    
            this.props.decreamentMethod(this.props.by);
         }
        
    
      }
      CounterButton.defaultProps={
        by:1
    }
    
       CounterButton.propTypes ={
        by: PropTypes.number
    }
    