import React from 'react';

import * as userClient from '../../clients/user-client/user';
import * as logger from '../../services/logger';

import AuthContext from '../../store/auth-context';

function UserProfile() {
    const context = React.useContext(AuthContext);
    const isAuthorized = context.isAuthorized;
    const userId = context.userId;

    const [userState, setUserState] = React.useState({
        username: '',
        email: '',
        roles: [],
        active: null,
    });

    React.useEffect(() => {
        if (!isAuthorized) {
            setUserState({
                username: '',
                email: '',
                roles: [],
                active: null,
            });
            return;
        }

        const requestData = {
            userId: userId
        };

        userClient.getUserDetails(requestData)
            .then((response) => {
                setUserState({
                    username: response.name,
                    email: response.email,
                    roles: response.roles,
                    active: response.active,
                });
            })
            .catch((error) => logger.log(error));
    }, [isAuthorized, userId]);

    return (
        <>
            <h2>User profile</h2>
            <div>
                <div>{userState.username}</div>
                <div>{userState.email}</div>
                <div>{userState.roles}</div>
                <div>{userState.active ? 'active' : 'blocked'}</div>
            </div>
        </>
    );
}

export default UserProfile;