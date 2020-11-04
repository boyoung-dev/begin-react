import React, { useRef, useState, useMemo } from 'react';
import Hello from './Hello';
import Wrapper from "./Wrapper";
import './App.css';
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
    console.log('....counting...')
    return users.filter(user => user.active).length;
}

function App() {
    const name = 'react';
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24,
        padding: '1rem'
    }

    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });
    const { username, email } = inputs;
    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]);

    const nextId = useRef(4);
    const onCreate = () => {

        const user = {
            id: nextId.current,
            username,
            email
        };

        setUsers([...users, user]);

        setInputs({
            username: '',
            email: ''
        });
        nextId.current += 1;
    }

    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id));
    }

    const onToggle = id => {
        setUsers(
            users.map(user =>
            user.id === id ? {...user, active: !user.active } : user)
        );
    };

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <Wrapper>
            <Hello name="react" color="red" isSpecial={true}/>
            <Hello color="pink" />
            <div style={style}>{name}</div>
            <div className="gray-box"/>

            <Counter />

            <InputSample />

            <CreateUser
                username={username}
                email={email}
                onCreate={onCreate}
                onChange={onChange}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
            <div>활성 사용자 수 : {count}</div>
        </Wrapper>
    );
}

export default App;
