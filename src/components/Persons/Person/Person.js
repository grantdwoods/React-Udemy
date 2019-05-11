import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
    console.log('Person render');
    
    return(
        <div className={classes.Person}>
            <p onClick={props.click}>My name is {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;