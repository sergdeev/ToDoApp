import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/action.js';

class FilterLink extends Component{
    render(){
        const { active, children, onClick } = this.props;
        if(active){
            return <span className = 'filter-btn'>{children}</span>;
        }
        return <span className = 'active' onClick = {onClick}>{children}</span>
    }
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})



const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
