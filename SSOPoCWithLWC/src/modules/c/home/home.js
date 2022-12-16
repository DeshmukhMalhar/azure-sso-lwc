


import { LightningElement, track, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { NavigationMixin } from 'lightning/navigation';

export default class Home extends LightningElement {

    @wire(CurrentPageReference)
    pageRef;

    @track
    authenticationstatus = {
        authenticated: localStorage.getItem("IsAuthenticated"),
        claims: {
            roles: ["admin"]
        }
    };



}
