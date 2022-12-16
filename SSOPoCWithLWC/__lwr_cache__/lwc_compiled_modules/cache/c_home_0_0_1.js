import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./home.html";
import { CurrentPageReference, NavigationMixin } from 'lightning/navigation';
class Home extends LightningElement {
  constructor(...args) {
    super(...args);
    this.pageRef = void 0;
    this.authenticationstatus = {
      authenticated: localStorage.getItem("IsAuthenticated"),
      claims: {
        roles: ["admin"]
      }
    };
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(Home, {
  track: {
    authenticationstatus: 1
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
export default _registerComponent(Home, {
  tmpl: _tmpl
});