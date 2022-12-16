import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./login.html";
import { CurrentPageReference } from 'lightning/navigation';
import { loginrequest } from 'loginrequest';
class Login extends LightningElement {
  constructor(...args) {
    super(...args);
    this.pageRef = void 0;
    this.authstatus = localStorage.getItem("IsAuthenticated", true);
  }
  handleLoginButton(event) {
    const accountId = loginrequest();
    localStorage.setItem("AccountId", accountId);
    localStorage.setItem("IsAuthenticated", true);
  }
  handleLogOutButton(event) {
    localStorage.setItem("IsAuthenticated", false);
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(Login, {
  track: {
    authstatus: 1
  },
  wire: {
    pageRef: {
      adapter: CurrentPageReference,
      config: function ($cmp) {
        return {};
      }
    }
  }
});
export default _registerComponent(Login, {
  tmpl: _tmpl
});