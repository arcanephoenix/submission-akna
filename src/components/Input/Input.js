import React, { Component } from 'react';

function Input(props) {
    const { dataType , ...rest } = props
    return(
        <input type = {dataType} placeholder={`Enter ${dataType}`} {...rest} />
    )
}
 
export default Input;