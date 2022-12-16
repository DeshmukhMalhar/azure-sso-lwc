import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./login.css";

import _implicitScopedStylesheets from "./login.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div justify-content="center"${3}><h1${3}>Login</h1></div>`;
const $fragment2 = parseFragment`<div justify-content="center"${3}><h2${3}>Azure SSO PoC</h2></div>`;
const stc0 = {
  key: 4
};
const stc1 = {
  key: 6
};
const stc2 = {
  key: 8
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, b: api_bind, t: api_text, h: api_element, d: api_dynamic_text} = $api;
  const {_m0, _m1} = $ctx;
  return [api_static_fragment($fragment1(), 1), api_static_fragment($fragment2(), 3), api_element("div", stc0, [api_element("button", {
    key: 5,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleLoginButton))
    }
  }, [api_text(" Login")])]), api_element("div", stc1, [api_element("button", {
    key: 7,
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.handleLogOutButton))
    }
  }, [api_text(" LogOut ")])]), api_element("div", stc2, [api_text("AuthStatus: " + api_dynamic_text($cmp.authstatus))])];
  /*LWC compiler v2.17.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "c-login_login"
}
freezeTemplate(tmpl);
