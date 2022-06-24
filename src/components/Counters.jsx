import { Component } from 'react'
import Element from './Element';

class Counters extends Component {
    state = { 
        counters: [
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
        ]
     } 
    render() { 
        return (
            <div>
                {this.state.counters.map((counter) => {
                    return <Element key={counter.id}/>
                })}
            </div>
        );
    }
}
 
export default Counters;