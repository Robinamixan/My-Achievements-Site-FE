import React from 'react';

import * as userClient from '../../clients/user-client/user';
import * as userManager from '../../services/user-manager';

import './PageContent.css';

function PageContent() {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        const pagination = {};

        if (!userManager.isAuthenticated()) {
            return;
        }

        userClient.getUsers(pagination)
            .then((userList) => {
                setUsers(userList.items);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={'content'}>
            <div>Users list</div>
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
        </div>
    );
}

export default PageContent;