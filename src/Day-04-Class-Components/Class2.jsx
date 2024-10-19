import React, { Component } from 'react';
class Class2 extends React.Component {
 constructor(props){
    super(props);
 }
 render(){
    return(
        <div>
            <h1>my name is {this.props.data.name}</h1>
            <p> I am {this.props.data.age} Years old! </p>
        </div>
    )
 }
}
export default Class2;