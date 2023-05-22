import React from 'react';
import PropTypes from 'prop-types';

import * as userManager from '../services/user-manager';

const AuthContext = React.createContext({
    isAuthorized: false,
    userId: '',
    onLogout: () => {
    },
    onLogin: () => {
    },
});

export function AuthContextProvider({ children }) {
    const [isAuthorized, setIsAuthorized] = React.useState(userManager.isAuthorized);

    React.useEffect(() => {
        if (userManager.isAuthorized()) {
            setIsAuthorized(true);
        }
    }, []);

    const logoutHandler = () => {
        userManager.removeUserToken();
        setIsAuthorized(false);
    };

    const loginHandler = (userId, token) => {
        userManager.setUserId(userId);
        userManager.setUserToken(token);
        setIsAuthorized(true);
    };

    return (
        <AuthContext.Provider value={{
            isAuthorized: isAuthorized,
            userId: userManager.getUserId(),
            onLogout: logoutHandler,
            onLogin: loginHandler,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

AuthContextProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthContext;