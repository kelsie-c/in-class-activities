// import React from "react";

function Math(props) {
    let result;
    switch(props.operator) {
        case '+': {
            result = props.num1 + props.num2;
            break;
        }
        case '-': {
            result = props.num1 - props.num2;
            break;
        }
        case '*': {
            result = props.num1 * props.num2;
            break;
        }
        case '/': {
            result = props.num1 / props.num2;
            break;
        }
        default: 
        // no default
    }
    
    return result;
}
export default Math;