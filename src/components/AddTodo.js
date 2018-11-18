import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {addTodo} from '../actions/action.js'


class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.state = {
            text: ''
        }
    }

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleKeyDown = (e) => {
        if(e.keyCode === 13){
            this.props.addTodo(this.state.text);
            this.setState({text: ''});
        }
    }

    render(){
        return(
            <div>
                <input
                    type = 'text'
                    className = 'input'
                    placeholder = 'What needs to be done?'
                    value = {this.state.text}
                    onChange = {this.handleTextChange}
                    onKeyDown = {this.handleKeyDown}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addTodo: bindActionCreators(addTodo, dispatch),
    }
}

export default connect(undefined, mapDispatchToProps)(AddTodo);
