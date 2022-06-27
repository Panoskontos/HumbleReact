import { Component } from 'react'

class Element extends Component {
    state = { 
        value:this.props.value
     } 

    // handleAdd = () => {
    //     console.log('add')
    //     this.setState(
    //         {   value: ++this.props.value})
    //     this.props.onAdd()
    // }

    handleDec = () => {
        this.setState({value:--this.props.value})
    }

    render() { 
        // props
        console.log(this.props)
        
        return (
            <div>
                <span className='badge badge-info m-2 p-2'>{this.props.name}</span>
                <button onClick={this.props.onAdd(this.props.id)} className='btn btn-primary m-3'>+</button>
                <button onClick={this.handleDec} className='btn btn m-3'>-</button>
                <button className='btn btn-info m-3'>{this.props.value}</button>
                <button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-danger m-3'>Remove</button>
            </div>
        );
    }
}
 
export default Element;