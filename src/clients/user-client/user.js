import * as logger from '../../services/logger';

export async function getUsers(requestData, user) {
    const url = process.env.REACT_APP_BE_HOST + '/api/v1/users';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + user.token
            }
        });

        const responseData = await response.json();
        if (response.status !== 200) {
            logger.log(responseData);
        }

        return responseData;
    } catch (error) {
        logger.log(error);
        throw error;
    }
}

export async function getUserDetails(requestData, user) {
    const url = process.env.REACT_APP_BE_HOST + '/api/v1/users/' + requestData.userId;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + user.token
            }
        });

        const responseData = await response.json();
        if (response.status !== 200) {
            logger.log(responseData);
        }

        return responseData;
    } catch (error) {
        logger.log(error);
        throw error;
    }
}

export async function updateUser(requestData, user) {
    const url = process.env.REACT_APP_BE_HOST + '/api/v1/users/' + requestData.userId;
    const body = {
        name: requestData.name,
        email: requestData.email,
        roles: requestData.roles,
        active: requestData.active
    };

    try {
        const response = await fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + user.token
            }
        });

        const responseData = await response.json();
        if (response.status !== 200) {
            logger.log(responseData);
        }

        return responseData;
    } catch (error) {
        logger.log(error);
        throw error;
    }
}

export async function deleteUser() {
    const url = process.env.REACT_APP_BE_HOST + '/api/v1/users/' + requestData.userId;

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + user.token
            }
        });

        const responseData = await response.json();
        if (response.status !== 200) {
            logger.log(responseData);
        }

        return responseData;
    } catch (error) {
        logger.log(error);
        throw error;
    }
}