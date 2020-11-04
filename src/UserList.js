import React, { useEffect } from 'react';


function User({user, onRemove, onToggle}) {

    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        console.log(user);

        return () => {
            console.log('컴포넌트가 화면에서 사라짐..');
            console.log(user);
        };
    }, [user]);

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={ () => onToggle (user.id)}
            >{user.username}</b>
            <span>({user.email})</span>
            <button onClick={ () => onRemove(user.id) }>삭제</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}) {

    return (
        <div>
            {/*<User user={users[0]}/>*/}
            {/*<User user={users[1]}/>*/}
            {/*<User user={users[2]}/>*/}
            {users.map((user, index) => (
                <User user={user} key={index} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default React.memo(UserList);
