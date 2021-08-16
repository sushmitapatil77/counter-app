import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

 render() { 
const {onReset, onIncrement, onDelete, counter} = this.props;
    return (
   <div>
    <button onClick={onReset} className="btn btn-primary btn-sm">Reset</button>
    {counter.map(counter => <Counter 
    key={counter.id}
    counter={counter}
    onIncrement={onIncrement}
    onDelete={onDelete}
    />
    )}
   </div>
    );
 }
}
 
export default Counters;