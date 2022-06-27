import { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { items:[

            {'id':1,'text':'panos'},
            
        ], text: '' }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    render() { 
        return ( 
        <div>
            <TodoList items={this.state.items}/>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="new">Enter User</label>
                <input id="new" 
                type="text" 
                onChange={this.handleChange} 
                value={this.state.text}/>
                <button>Login</button>
            </form>
        </div> 
        );
    }

    handleChange(e){
        this.setState({ text: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();
        const new_item = {
            text:this.state.text,
            id: Date.now()
        }
        this.setState(state => ({items:state.items.concat(new_item),text:''}))
    }
}
 
export default Todo;


class TodoList extends Component{
    render(){
        return(
            <ul>
                {this.props.items.map(item => (
                <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}