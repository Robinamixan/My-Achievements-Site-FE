import * as logger from '../../services/logger';
import * as userDataManager from '../../services/user-manager';
import { STATUS_OK } from '../../constants/response-statuses';

export async function getUsers({ page }) {
    const url = `${process.env.REACT_APP_BE_HOST}/api/v1/users?page=${page}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${userDataManager.getUserToken()}`,
            }
        });

        const responseData = await response.json();
        if (response.status !== STATUS_OK) {
            logger.log(responseData);
        }

        return responseData;
    } catch (error) {
        logger.log(error);
        throw error;
    }
}

export async function getUserDetails({ userId }) {
    const url = `${process.env.REACT_APP_BE_HOST}/api/v1/users/${userId}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${userDataManager.getUserToken()}`,
            }
        });

        const responseData = await response.json();
        if (response.status !== STATUS_OK) {
            logger.log(responseData);
        }

        return responseData;
    } catch (error) {
        logger.log(error);
        throw error;
    }
}

export async function updateUser({ name, email, roles, active, userId }) {
    const url = `${process.env.REACT_APP_BE_HOST}/api/v1/users/${userId}`;
    const body = { name, email, roles, active };

    try {
        const response = await fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${userDataManager.getUserToken()}`,
            }
        });

        const responseData = await response.json();
        if (response.status !== STATUS_OK) {
            logger.log(responseData);
        }

        return responseData;
    } catch (error) {
        logger.log(error);
        throw error;
    }
}

export async function deleteUser({ userId }) {
    const url = `${process.env.REACT_APP_BE_HOST}/api/v1/users/${userId}`;

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${userDataManager.getUserToken()}`,
            }
        });

        const responseData = await response.json();
        if (response.status !== STATUS_OK) {
            logger.log(responseData);
        }

        return responseData;
    } catch (error) {
        logger.log(error);
        throw error;
    }
}