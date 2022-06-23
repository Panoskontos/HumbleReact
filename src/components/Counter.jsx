import React, { Component } from 'react';
// Handling Events


class Counter extends Component {
    
    // State
    state = { 
        count: 0,
        title:"C",
        titleColor:"green",
        tags: ['tag1', 'tag2','tag3']
     };

    //  Constructor
    //  to use state in functions and commit data
    // constructor(){
    //     super();
    //     this.handleAddition =  this.handleAddition.bind(this)
    // }


    //  Function
    handleAddition = () => {
        console.log("Addition",this);
        // updating the state
        this.setState({count: ++this.state.count})
    }
    handleDecrease = () => {this.setState({count:this.state.count-1})}

    render() { 
        let classes = "badge badge-primary ";
        classes += "p-2 m-4 ";
        classes += this.state.count === 0 ? "text-dark" : "text-white";

        return (
            <div>

            <h1 style={
                {background:this.state.titleColor,
                    fontSize:20,
            }
            } className={classes}>{this.state.title} - {this.state.count === 0 ? 'Zero' : this.state.count}</h1>

            <br />
            <ul className=''>
                
                    {this.state.tags.map((i)=><li key={i}>{i}
                    
                    <button onClick={this.handleAddition} className='btn btn-md m-2'>+</button>
                    <button onClick={this.handleDecrease} className='btn btn-md m-2'>-</button>
                    </li>
                    
                    )}
            </ul>

            </div>
        );
    }
}
  
export default Counter;


 
