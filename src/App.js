import React, { Component } from 'react';
import Counters from './component/counters';
import Nav from './component/Nav';

class App extends Component {
  state = { 
    counter:[
     {id:1, value: 4},
     {id:2, value: 3},
     {id:3, value: 2},
     {id:4, value: 6},
     {id:5, value: 1},
    ]
    }

    handleIncrement = (counter) =>{
      const counters = [...this.state.counter];
      const index = counters.indexOf(counter);
      counters[index].value = counters[index].value+1;
      this.setState({counters});
     }
   
     handleDelete = (counterId) => {
      const counter = this.state.counter.filter(count => counterId !== count.id);
      this.setState({counter});
      console.log("Handle Delete Clicked");
     }
   
     handleReset= () =>{
      const counters = this.state.counter.map(c => {
       c.value=0;
      return c;});
      this.setState({counters});
      console.log("Reset Button CLicked");
     }

     handleDecrement = (counter) =>{
       const counters = [...this.state.counter];
       const index = counters.indexOf(counter);
       counters[index].value = counters[index].value-1;
       this.setState({counters});
       
     }
  render() { 
    return ( 
      <React.Fragment>
        <Nav counter={this.state.counter}/>
        <Counters 
        counter={this.state.counter}
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}
        onReset = {this.handleReset}
        onDecrement = {this.handleDecrement}
        />
      </React.Fragment>
     );
  }
}
 
export default App;