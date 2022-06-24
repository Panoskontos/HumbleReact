import { Component } from 'react'

class Element extends Component {
    state = { 
        title:'Product',
        count:0
     } 

    handleAdd = () => {
        console.log('add')
        this.setState(
            {   count: ++this.state.count})
    }

    handleDec = () => {
        this.setState({count:--this.state.count})
    }

    render() { 
        return (
            <div>
                <span className='badge badge-info m-2'>{this.state.title}</span>
                <button onClick={this.handleAdd} className='btn btn-primary m-3'>+</button>
                <button onClick={this.handleDec} className='btn btn-danger m-3'>-</button>
                <button className='btn btn-info m-3'>{this.state.count}</button>
            </div>
        );
    }
}
 
export default Element;