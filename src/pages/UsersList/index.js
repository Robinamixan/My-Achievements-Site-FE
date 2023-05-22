import React from 'react';

import * as userClient from '../../clients/user-client/user';
import * as logger from '../../services/logger';

import AuthContext from '../../store/auth-context';

const INITIAL_STATE = [];

function UsersList() {
    const context = React.useContext(AuthContext);
    const isAuthorized = context.isAuthorized;

    const [users, setUsers] = React.useState(INITIAL_STATE);

    React.useEffect(() => {
        if (!isAuthorized) {
            setUsers(INITIAL_STATE);
        }
    }, [isAuthorized]);

    React.useEffect(() => {
        if (!isAuthorized) {
            return;
        }

        const pagination = { page: 1 };
        userClient.getUsers(pagination)
            .then((userList) => {
                setUsers(userList.items);
            })
            .catch((error) => logger.log(error));
    }, [isAuthorized]);

    return (
        <>
            <h2>Users list</h2>
            <div>
                <ul>
                    {
                        users.map(user => (
                            <li key={user.id}>{user.name} {user.email}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default UsersList;