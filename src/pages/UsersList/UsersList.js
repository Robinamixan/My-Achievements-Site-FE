import React from 'react';

import * as userClient from '../../clients/user-client/user';
import * as logger from '../../services/logger';

import AuthContext from '../../store/auth-context';

function UsersList() {
    const context = React.useContext(AuthContext);
    const isAuthorized = context.isAuthorized;

    const initialUsersState = [];
    const [users, setUsers] = React.useState(initialUsersState);

    React.useEffect(() => {
        if (!isAuthorized) {
            setUsers(initialUsersState);
            return;
        }

        const pagination = {page: 1};
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
                        users.map(user => {
                            return (
                                <li key={user.id}>{user.name} {user.email}</li>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    );
}

export default UsersList;