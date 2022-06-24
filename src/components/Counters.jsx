import { Component } from 'react'
import Element from './Element';

class Counters extends Component {
    state = { 
        counters: [
            {id:1, value:2, name:'P1'},
            {id:2, value:0, name:'P2'},
            {id:3, value:0, name:'P3'},
            {id:4, value:1, name:'P4'},
        ],

        sum:0
     } 
    render() { 
        return (
            <div>
                <h4>Total {this.state.counters.map((c)=>{this.state.sum+=c.value})} {this.state.sum}</h4>
                <br />
                {this.state.counters.map((counter) => {
                    return <Element key={counter.id} name={counter.name} value={counter.value} />
                })}
            </div>
        );
    }
}
 
export default Counters;