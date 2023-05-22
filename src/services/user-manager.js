export function getUserToken() {
    return localStorage.getItem('user-token') || '';
}

export function setUserToken(token) {
    localStorage.setItem('user-token', token);
}

export function removeUserToken() {
    localStorage.removeItem('user-token');
}

export function getUserId() {
    return localStorage.getItem('user-id') || '';
}

export function setUserId(userId) {
    localStorage.setItem('user-id', userId);
}

export function isAuthorized() {
    return localStorage.getItem('user-token') !== null;
}