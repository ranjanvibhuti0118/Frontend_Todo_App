import FirstComponent  from './components/learning-examples/FirstComponent'
import SecondComponent  from './components/learning-examples/SecondComponent'
import Counter from './components/Counter/Counter';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
         <Counter/>
         
         </div>
    
    );
    }
}

class LearningComponent extends Component{
  render(){
    return (
      <div className="App">
        My first full stack app
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
      </div>
    );
    }
}

export default App;
