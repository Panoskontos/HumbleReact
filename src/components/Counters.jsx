import { Component } from 'react'
import Element from './Element';

class Counters extends Component {
    state = { 
        counters: [
            {id:1, value:2, name:'P1'},
            {id:2, value:0, name:'P2'},
            {id:3, value:0, name:'P3'},
            {id:4, value:3, name:'P4'},
        ],

        sum:0
     } 
    onAdd = () => {
        console.log('adding sum')
        // var total = 0
        // this.state.counters.map(c=>{total+=c.value})
        // console.log(total)
        // this.setState({sum:total})
    }
    handleDelete =(counterId) => {
        console.log('removing item ', counterId)
        const newCounters = this.state.counters.filter(c=>c.id!==counterId)
        this.setState({counters: newCounters})
     }

    //  handleReset =()=>{
    //     const counters = this.state.counters.map(c=>{
    //         c.value=0;
    //         return c
    //     })
    //     this.setState({counters:counters})
    //  }

    render() { 
        return (
            <div>
                <h4>Total {this.state.sum} Items</h4>
                <br />
                {this.state.counters.map((counter) => {
                    return (
                        <div style={{display:'flex',alignItems:'center'}}>
                            <Element key={counter.id} id={counter.id} name={counter.name} value={counter.value} onDelete={this.handleDelete} onAdd={this.onAdd}/>   
                        </div>
                    )

                })}
                <br />
                <button className='btn'>Reset</button>
            </div>
        );
    }
}
 
export default Counters;