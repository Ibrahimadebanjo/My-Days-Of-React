import React, {Component } from "react";

class Class extends Component {
// State can be defined in class components
    constructor(props){
        super(props); // We call `super` to access `this.props`
        this.state = {
            count : 0
    }

}

   incrementCount = () => {
    this.setState({count: this.state.count + 1});
}

render() {
    return (
        <div>
<h1> Count : {this.state.count}</h1>
<button onClick={this.incrementCount}>increment</button>
        </div>
    )
}
}
export default Class

