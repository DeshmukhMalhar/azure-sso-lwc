import { LightningElement, wire, track } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { loginrequest } from 'loginrequest';

export default class Login extends LightningElement {
    @wire(CurrentPageReference)
    pageRef;

    @track
    authstatus = localStorage.getItem("IsAuthenticated", true);

    handleLoginButton(event) {
        const accountId = loginrequest();
        localStorage.setItem("AccountId", accountId);
        localStorage.setItem("IsAuthenticated", true);
    }

    handleLogOutButton(event) {
        localStorage.setItem("IsAuthenticated", false);
    }
}
