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

    handleDelete =(counterId) => {
        console.log('removing item ', counterId)
        const newCounters = this.state.counters.filter(c=>c.id!==counterId)
        this.setState({counters: newCounters})
     }

    render() { 
        return (
            <div>
                <h4>Total </h4>
                <br />
                {this.state.counters.map((counter) => {
                    return (
                        <div style={{display:'flex',alignItems:'center'}}>
                            <Element key={counter.id} id={counter.id} name={counter.name} value={counter.value} onDelete={this.handleDelete}/>   
                        </div>
                    )

                })}
            </div>
        );
    }
}
 
export default Counters;