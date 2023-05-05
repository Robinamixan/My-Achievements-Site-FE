import * as logger from '../../services/logger';

export async function signUp(signUpData) {
    const url = process.env.REACT_APP_BE_HOST + '/api/v1/sign-up';
    const body = {
        email: signUpData.email,
        password: signUpData.password,
        name: signUpData.name
    };

    try {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json'
            }
        });

        const responseData = await response.json();
        if (response.status !== 200) {
            logger.log(responseData);
        }

        const userId = responseData.userId;

        if (!userId) {
            logger.log('User was not created');
        }

        return true;
    } catch (error) {
        logger.log(error);
        throw error;
    }
}

export async function login(loginData) {
    const url = process.env.REACT_APP_BE_HOST + '/api/v1/login';
    const body = {
        email: loginData.email,
        password: loginData.password,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json'
            }
        });

        const responseData = await response.json();
        if (response.status !== 200) {
            logger.log(responseData);
        }

        const userId = responseData.userId;
        const token = responseData.token;

        if (!userId || !token) {
            logger.log('Authentication failed');
        }

        return {
            userId: userId,
            token: token,
        };
    } catch (error) {
        logger.log(error);
        throw error;
    }
}