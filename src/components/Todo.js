import React, { Component } from 'react';



export default class Todo extends Component {
    handleToggle = () => {
        this.props.onToggle(this.props.id);
    }
    render(){
        const { text, completed, } = this.props;
        return(
            <div
                className = {completed? 'completed': 'non-completed'}
                onClick = {this.handleToggle.bind(this)}>
                {text}
            </div>
        )
    }
}
