export function getUserToken() {
    return localStorage.getItem('user-token');
}

export function setUserToken(token) {
    localStorage.setItem('user-token', token);
}

export function getUserId() {
    return localStorage.getItem('user-id');
}

export function setUserId(userId) {
    localStorage.setItem('user-id', userId);
}

export function isAuthenticated() {
    return localStorage.getItem('user-token') !== null;
}