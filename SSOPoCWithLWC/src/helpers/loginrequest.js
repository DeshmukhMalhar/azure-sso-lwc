import * as Msal from "@azure/msal-browser"; // if using CDN, 'Msal' will be available in global scope

export function loginrequest() {
    let config = {
        auth: {
            clientId: "05459527-aa9c-441c-abfc-b4a57d1f7592",
            redirectUri: "http://localhost:3000", //defaults to application start page
            authority: "https://login.microsoftonline.com/ead65378-50e7-40cd-abf6-6b6e1520d9eb",
            postLogoutRedirectUri: "http://localhost:3000/logout",
        },
    };

    let loginRequest = {
        scopes: ["User.Read"],
    };


    let aId = "";

    // create PublicClientApplication instance
    const myMsal = new Msal.PublicClientApplication(config);

    myMsal
        .loginPopup(loginRequest)
        .then(function (loginResponse) {
            aId = loginResponse;
            console.log(JSON.stringify(loginResponse));
            // Display signed-in user content, call API, etc.
        })
        .catch(function (error) {
            //login failure
            console.log(error);
        });

    console.log(JSON.stringify(aId));
    // this._accountId(aId);
    return aId;

}