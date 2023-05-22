import * as logger from '../../services/logger';
import { STATUS_OK } from '../../constants/response-statuses';

export async function signUp({ email, password, name }) {
    const url = `${process.env.REACT_APP_BE_HOST}/api/v1/sign-up`;
    const body = { email, password, name };

    try {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json'
            }
        });

        const responseData = await response.json();
        if (response.status !== STATUS_OK) {
            logger.log(responseData);
        }

        const userId = responseData.userId;

        if (!userId) {
            logger.log('User was not created');
        }
    } catch (error) {
        logger.log(error);
        throw error;
    }
}

export async function login({ email, password }) {
    const url = `${process.env.REACT_APP_BE_HOST}/api/v1/login`;
    const body = { email, password };

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json'
            }
        });

        const responseData = await response.json();
        if (response.status !== STATUS_OK) {
            logger.log(responseData);
        }

        const userId = responseData.userId;
        const token = responseData.token;

        if (!userId || !token) {
            throw new Error('Authentication failed');
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