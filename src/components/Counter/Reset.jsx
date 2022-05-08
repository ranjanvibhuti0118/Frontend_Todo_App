import React,{Component} from "react";
import './Counter.css'
import PropTypes from 'prop-types';


export default class ResetButton extends Component {
    constructor(){
        super();
        this.state={
            counter:0
        }
        this.resetCounter = this.resetCounter.bind(this);
    }
        render(){
        return (
          <div className="reset" >
            <button onClick={this.resetCounter}>RESET</button>
            {/* <span className="count">{this.state.counter}</span> */}
          </div>
        );
        }
        resetCounter(){
           this.props.resetMethod();
        }
        
    
      }
      
    