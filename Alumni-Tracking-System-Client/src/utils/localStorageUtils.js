const setAuthTokens = ({accessToken, refreshToken}) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('isAuthenticated', refreshToken);
}


const clearAuthTokens = () => {
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('isAuthenticatedTrue');
    localStorage.removeItem('isAuthenticated');
}

export {
    clearAuthTokens,
    setAuthTokens
}