import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8081/",
    realm: "spring-app",
    clientId: "React-Auth",
    onLoad: 'check-sso',
});

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback) => {
    keycloak.init({
        url: "http://localhost:8081/",
        realm: "spring-app",
        clientId: "React-Auth",
        onLoad: 'check-sso',
    })
        .then((result) => {
            if (!result) {
                console.log("user is not authenticated..!");
            }
            onAuthenticatedCallback();
        })
        .catch(console.error);
};

const doLogin = keycloak.login;

const doSigIn = keycloak.register;

const doLogout = keycloak.logout;

const getToken = () => keycloak.token;

const isLoggedIn = () => !!keycloak.token;

const updateToken = (successCallback) =>
    keycloak.updateToken(5)
        .then(successCallback)
        .catch(doLogin);

const getUsername = () => keycloak.tokenParsed?.preferred_username;

const hasRole = (roles) => roles.some((role) => keycloak.hasResourceRole(role));


export {
    initKeycloak,
    doLogin,
    doSigIn,
    doLogout,
    isLoggedIn,
    getToken,
    updateToken,
    getUsername,
    hasRole,
};