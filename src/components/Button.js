import React from 'react';
import '../stylesheets/Button.css';

function Button(props) {

    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    if(isOperator(props.children)) {
        return (
            <div                          className='button-container            operator'  onClick=   {() => props.handleClic(props.children)}>
            {props.children} 
            </div>
        );
    } else {
        return (
            <div className='button-container' onClick={() => props.handleClic(props.children)}>
            {props.children} 
            </div>
        );
    }
}
export default Button;