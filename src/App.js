import React from 'react';
import Hello from './Hello';
import Wrapper from "./Wrapper";
import './App.css';
import Counter from "./Counter";
import InputSample from "./InputSample";

function App() {
    const name = 'react';
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24,
        padding: '1rem'
    }

    return (
        <Wrapper>
            <Hello name="react" color="red" isSpecial={true}/>
            <Hello color="pink" />
            <div style={style}>{name}</div>
            <div className="gray-box"/>

            <Counter />

            <InputSample />
        </Wrapper>
    );
}

export default App;
