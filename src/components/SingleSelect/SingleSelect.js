import React, { Component } from 'react';

function SingleSelect(props) {
    const { numOptions , ...rest } = props
    return(
        <div>
            <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            </select>
        </div>
    )
}
 
export default SingleSelect;