import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';



const greet = ()=> {
    return (
        <div>
            
            <h1 className="heading">Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        </div>
    )
}


ReactDOM.render(
    greet(),
    document.getElementById('root')
);