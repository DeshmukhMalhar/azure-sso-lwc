import * as Msal from "@azure/msal-browser"; // if using CDN, 'Msal' will be available in global scope

const config = {
    auth: {
        clientId: "baf404c3-1769-42db-9aca-06b7e5528ae9",
        redirectUri: "http://localhost:3000", //defaults to application start page
        postLogoutRedirectUri: "http://localhost:3000/logout",
    },
};

const loginRequest = {
    scopes: ["User.Read"],
};

let accountId = "";

// create PublicClientApplication instance
const myMsal = new Msal.PublicClientApplication(config);

myMsal
    .loginPopup(loginRequest)
    .then(function (loginResponse) {
        accountId = loginResponse.account.homeAccountId;
        // Display signed-in user content, call API, etc.
    })
    .catch(function (error) {
        //login failure
        console.log(error);
    });

console.log(accountId);