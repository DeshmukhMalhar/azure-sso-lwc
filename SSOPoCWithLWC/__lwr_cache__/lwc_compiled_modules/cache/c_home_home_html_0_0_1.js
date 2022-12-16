import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./home.css";

import _implicitScopedStylesheets from "./home.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<main${3}><h1${3}>Hello World! from Home</h1></main>`;
const $fragment2 = parseFragment`<h1${3}>403 | Unauthorized</h1>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment} = $api;
  return [$cmp.authenticationstatus.authenticated ? api_static_fragment($fragment1(), 1) : null, !$cmp.authenticationstatus.authenticated ? api_static_fragment($fragment2(), 3) : null];
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
  tmpl.stylesheetToken = "c-home_home"
}
freezeTemplate(tmpl);
