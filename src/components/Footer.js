import React, { Component } from 'react';
import FooterLink from './FilterLink.js';


export default class Footer  extends Component{
    render() {
        return(
            <div className = 'footer'>
                <FooterLink filter = 'SHOW_ALL'>All</FooterLink>
                <FooterLink filter = 'SHOW_ACTIVE'>New</FooterLink>
                <FooterLink filter = 'SHOW_COMPLETED'>Completed</FooterLink>
            </div>
        );
    }
}
