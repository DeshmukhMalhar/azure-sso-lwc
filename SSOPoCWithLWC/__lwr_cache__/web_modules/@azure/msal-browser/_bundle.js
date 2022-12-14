var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name3 in all)
    __defProp(target, name3, {get: all[name3], enumerable: true});
};

// node_modules/@azure/msal-browser/dist/internals.js
var internals_exports = {};
__export(internals_exports, {
  BrowserCacheManager: () => BrowserCacheManager,
  BrowserConstants: () => BrowserConstants,
  EventHandler: () => EventHandler,
  NativeMessageHandler: () => NativeMessageHandler,
  PopupClient: () => PopupClient,
  RedirectClient: () => RedirectClient,
  RedirectHandler: () => RedirectHandler,
  SilentCacheClient: () => SilentCacheClient,
  SilentIframeClient: () => SilentIframeClient,
  SilentRefreshClient: () => SilentRefreshClient,
  StandardInteractionClient: () => StandardInteractionClient,
  TemporaryCacheKeys: () => TemporaryCacheKeys
});

// node_modules/@azure/msal-browser/dist/_virtual/_tslib.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign3(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: []}, f, y, t, g;
  return g = {next: verb(0), throw: verb(1), return: verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {value: op[1], done: false};
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return {value: op[0] ? op[1] : void 0, done: true};
  }
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = {error};
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}

// node_modules/@azure/msal-common/dist/_virtual/_tslib.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics2 = function(d, b) {
  extendStatics2 = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics2(d, b);
};
function __extends2(d, b) {
  extendStatics2(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign2 = function() {
  __assign2 = Object.assign || function __assign3(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
function __awaiter2(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator2(thisArg, body) {
  var _ = {label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: []}, f, y, t, g;
  return g = {next: verb(0), throw: verb(1), return: verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {value: op[1], done: false};
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return {value: op[0] ? op[1] : void 0, done: true};
  }
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}

// node_modules/@azure/msal-common/dist/utils/Constants.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var Constants = {
  LIBRARY_NAME: "MSAL.JS",
  SKU: "msal.js.common",
  CACHE_PREFIX: "msal",
  DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
  DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
  DEFAULT_COMMON_TENANT: "common",
  ADFS: "adfs",
  DSTS: "dstsv2",
  AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
  RESOURCE_DELIM: "|",
  NO_ACCOUNT: "NO_ACCOUNT",
  CLAIMS: "claims",
  CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
  OPENID_SCOPE: "openid",
  PROFILE_SCOPE: "profile",
  OFFLINE_ACCESS_SCOPE: "offline_access",
  EMAIL_SCOPE: "email",
  CODE_RESPONSE_TYPE: "code",
  CODE_GRANT_TYPE: "authorization_code",
  RT_GRANT_TYPE: "refresh_token",
  FRAGMENT_RESPONSE_MODE: "fragment",
  S256_CODE_CHALLENGE_METHOD: "S256",
  URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
  AUTHORIZATION_PENDING: "authorization_pending",
  NOT_DEFINED: "not_defined",
  EMPTY_STRING: "",
  NOT_APPLICABLE: "N/A",
  FORWARD_SLASH: "/",
  IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location",
  IMDS_VERSION: "2020-06-01",
  IMDS_TIMEOUT: 2e3,
  AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect",
  REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com",
  REGIONAL_AUTH_NON_MSI_QUERY_STRING: "allowestsrnonmsi=true",
  KNOWN_PUBLIC_CLOUDS: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"],
  TOKEN_RESPONSE_TYPE: "token",
  ID_TOKEN_RESPONSE_TYPE: "id_token",
  SHR_NONCE_VALIDITY: 240,
  INVALID_INSTANCE: "invalid_instance"
};
var OIDC_DEFAULT_SCOPES = [
  Constants.OPENID_SCOPE,
  Constants.PROFILE_SCOPE,
  Constants.OFFLINE_ACCESS_SCOPE
];
var OIDC_SCOPES = __spreadArrays(OIDC_DEFAULT_SCOPES, [
  Constants.EMAIL_SCOPE
]);
var HeaderNames;
(function(HeaderNames2) {
  HeaderNames2["CONTENT_TYPE"] = "Content-Type";
  HeaderNames2["RETRY_AFTER"] = "Retry-After";
  HeaderNames2["CCS_HEADER"] = "X-AnchorMailbox";
  HeaderNames2["WWWAuthenticate"] = "WWW-Authenticate";
  HeaderNames2["AuthenticationInfo"] = "Authentication-Info";
  HeaderNames2["X_MS_REQUEST_ID"] = "x-ms-request-id";
})(HeaderNames || (HeaderNames = {}));
var PersistentCacheKeys;
(function(PersistentCacheKeys2) {
  PersistentCacheKeys2["ID_TOKEN"] = "idtoken";
  PersistentCacheKeys2["CLIENT_INFO"] = "client.info";
  PersistentCacheKeys2["ADAL_ID_TOKEN"] = "adal.idtoken";
  PersistentCacheKeys2["ERROR"] = "error";
  PersistentCacheKeys2["ERROR_DESC"] = "error.description";
  PersistentCacheKeys2["ACTIVE_ACCOUNT"] = "active-account";
  PersistentCacheKeys2["ACTIVE_ACCOUNT_FILTERS"] = "active-account-filters";
})(PersistentCacheKeys || (PersistentCacheKeys = {}));
var AADAuthorityConstants;
(function(AADAuthorityConstants2) {
  AADAuthorityConstants2["COMMON"] = "common";
  AADAuthorityConstants2["ORGANIZATIONS"] = "organizations";
  AADAuthorityConstants2["CONSUMERS"] = "consumers";
})(AADAuthorityConstants || (AADAuthorityConstants = {}));
var AADServerParamKeys;
(function(AADServerParamKeys2) {
  AADServerParamKeys2["CLIENT_ID"] = "client_id";
  AADServerParamKeys2["REDIRECT_URI"] = "redirect_uri";
  AADServerParamKeys2["RESPONSE_TYPE"] = "response_type";
  AADServerParamKeys2["RESPONSE_MODE"] = "response_mode";
  AADServerParamKeys2["GRANT_TYPE"] = "grant_type";
  AADServerParamKeys2["CLAIMS"] = "claims";
  AADServerParamKeys2["SCOPE"] = "scope";
  AADServerParamKeys2["ERROR"] = "error";
  AADServerParamKeys2["ERROR_DESCRIPTION"] = "error_description";
  AADServerParamKeys2["ACCESS_TOKEN"] = "access_token";
  AADServerParamKeys2["ID_TOKEN"] = "id_token";
  AADServerParamKeys2["REFRESH_TOKEN"] = "refresh_token";
  AADServerParamKeys2["EXPIRES_IN"] = "expires_in";
  AADServerParamKeys2["STATE"] = "state";
  AADServerParamKeys2["NONCE"] = "nonce";
  AADServerParamKeys2["PROMPT"] = "prompt";
  AADServerParamKeys2["SESSION_STATE"] = "session_state";
  AADServerParamKeys2["CLIENT_INFO"] = "client_info";
  AADServerParamKeys2["CODE"] = "code";
  AADServerParamKeys2["CODE_CHALLENGE"] = "code_challenge";
  AADServerParamKeys2["CODE_CHALLENGE_METHOD"] = "code_challenge_method";
  AADServerParamKeys2["CODE_VERIFIER"] = "code_verifier";
  AADServerParamKeys2["CLIENT_REQUEST_ID"] = "client-request-id";
  AADServerParamKeys2["X_CLIENT_SKU"] = "x-client-SKU";
  AADServerParamKeys2["X_CLIENT_VER"] = "x-client-VER";
  AADServerParamKeys2["X_CLIENT_OS"] = "x-client-OS";
  AADServerParamKeys2["X_CLIENT_CPU"] = "x-client-CPU";
  AADServerParamKeys2["X_CLIENT_CURR_TELEM"] = "x-client-current-telemetry";
  AADServerParamKeys2["X_CLIENT_LAST_TELEM"] = "x-client-last-telemetry";
  AADServerParamKeys2["X_MS_LIB_CAPABILITY"] = "x-ms-lib-capability";
  AADServerParamKeys2["X_APP_NAME"] = "x-app-name";
  AADServerParamKeys2["X_APP_VER"] = "x-app-ver";
  AADServerParamKeys2["POST_LOGOUT_URI"] = "post_logout_redirect_uri";
  AADServerParamKeys2["ID_TOKEN_HINT"] = "id_token_hint";
  AADServerParamKeys2["DEVICE_CODE"] = "device_code";
  AADServerParamKeys2["CLIENT_SECRET"] = "client_secret";
  AADServerParamKeys2["CLIENT_ASSERTION"] = "client_assertion";
  AADServerParamKeys2["CLIENT_ASSERTION_TYPE"] = "client_assertion_type";
  AADServerParamKeys2["TOKEN_TYPE"] = "token_type";
  AADServerParamKeys2["REQ_CNF"] = "req_cnf";
  AADServerParamKeys2["OBO_ASSERTION"] = "assertion";
  AADServerParamKeys2["REQUESTED_TOKEN_USE"] = "requested_token_use";
  AADServerParamKeys2["ON_BEHALF_OF"] = "on_behalf_of";
  AADServerParamKeys2["FOCI"] = "foci";
  AADServerParamKeys2["CCS_HEADER"] = "X-AnchorMailbox";
  AADServerParamKeys2["RETURN_SPA_CODE"] = "return_spa_code";
  AADServerParamKeys2["NATIVE_BROKER"] = "nativebroker";
  AADServerParamKeys2["LOGOUT_HINT"] = "logout_hint";
})(AADServerParamKeys || (AADServerParamKeys = {}));
var ClaimsRequestKeys;
(function(ClaimsRequestKeys2) {
  ClaimsRequestKeys2["ACCESS_TOKEN"] = "access_token";
  ClaimsRequestKeys2["XMS_CC"] = "xms_cc";
})(ClaimsRequestKeys || (ClaimsRequestKeys = {}));
var PromptValue = {
  LOGIN: "login",
  SELECT_ACCOUNT: "select_account",
  CONSENT: "consent",
  NONE: "none",
  CREATE: "create",
  NO_SESSION: "no_session"
};
var SSOTypes;
(function(SSOTypes2) {
  SSOTypes2["ACCOUNT"] = "account";
  SSOTypes2["SID"] = "sid";
  SSOTypes2["LOGIN_HINT"] = "login_hint";
  SSOTypes2["ID_TOKEN"] = "id_token";
  SSOTypes2["DOMAIN_HINT"] = "domain_hint";
  SSOTypes2["ORGANIZATIONS"] = "organizations";
  SSOTypes2["CONSUMERS"] = "consumers";
  SSOTypes2["ACCOUNT_ID"] = "accountIdentifier";
  SSOTypes2["HOMEACCOUNT_ID"] = "homeAccountIdentifier";
})(SSOTypes || (SSOTypes = {}));
var CodeChallengeMethodValues = {
  PLAIN: "plain",
  S256: "S256"
};
var ResponseMode;
(function(ResponseMode2) {
  ResponseMode2["QUERY"] = "query";
  ResponseMode2["FRAGMENT"] = "fragment";
  ResponseMode2["FORM_POST"] = "form_post";
})(ResponseMode || (ResponseMode = {}));
var GrantType;
(function(GrantType2) {
  GrantType2["IMPLICIT_GRANT"] = "implicit";
  GrantType2["AUTHORIZATION_CODE_GRANT"] = "authorization_code";
  GrantType2["CLIENT_CREDENTIALS_GRANT"] = "client_credentials";
  GrantType2["RESOURCE_OWNER_PASSWORD_GRANT"] = "password";
  GrantType2["REFRESH_TOKEN_GRANT"] = "refresh_token";
  GrantType2["DEVICE_CODE_GRANT"] = "device_code";
  GrantType2["JWT_BEARER"] = "urn:ietf:params:oauth:grant-type:jwt-bearer";
})(GrantType || (GrantType = {}));
var CacheAccountType;
(function(CacheAccountType2) {
  CacheAccountType2["MSSTS_ACCOUNT_TYPE"] = "MSSTS";
  CacheAccountType2["ADFS_ACCOUNT_TYPE"] = "ADFS";
  CacheAccountType2["MSAV1_ACCOUNT_TYPE"] = "MSA";
  CacheAccountType2["GENERIC_ACCOUNT_TYPE"] = "Generic";
})(CacheAccountType || (CacheAccountType = {}));
var Separators;
(function(Separators2) {
  Separators2["CACHE_KEY_SEPARATOR"] = "-";
  Separators2["CLIENT_INFO_SEPARATOR"] = ".";
})(Separators || (Separators = {}));
var CredentialType;
(function(CredentialType2) {
  CredentialType2["ID_TOKEN"] = "IdToken";
  CredentialType2["ACCESS_TOKEN"] = "AccessToken";
  CredentialType2["ACCESS_TOKEN_WITH_AUTH_SCHEME"] = "AccessToken_With_AuthScheme";
  CredentialType2["REFRESH_TOKEN"] = "RefreshToken";
})(CredentialType || (CredentialType = {}));
var CacheSchemaType;
(function(CacheSchemaType2) {
  CacheSchemaType2["ACCOUNT"] = "Account";
  CacheSchemaType2["CREDENTIAL"] = "Credential";
  CacheSchemaType2["ID_TOKEN"] = "IdToken";
  CacheSchemaType2["ACCESS_TOKEN"] = "AccessToken";
  CacheSchemaType2["REFRESH_TOKEN"] = "RefreshToken";
  CacheSchemaType2["APP_METADATA"] = "AppMetadata";
  CacheSchemaType2["TEMPORARY"] = "TempCache";
  CacheSchemaType2["TELEMETRY"] = "Telemetry";
  CacheSchemaType2["UNDEFINED"] = "Undefined";
  CacheSchemaType2["THROTTLING"] = "Throttling";
})(CacheSchemaType || (CacheSchemaType = {}));
var CacheType;
(function(CacheType2) {
  CacheType2[CacheType2["ADFS"] = 1001] = "ADFS";
  CacheType2[CacheType2["MSA"] = 1002] = "MSA";
  CacheType2[CacheType2["MSSTS"] = 1003] = "MSSTS";
  CacheType2[CacheType2["GENERIC"] = 1004] = "GENERIC";
  CacheType2[CacheType2["ACCESS_TOKEN"] = 2001] = "ACCESS_TOKEN";
  CacheType2[CacheType2["REFRESH_TOKEN"] = 2002] = "REFRESH_TOKEN";
  CacheType2[CacheType2["ID_TOKEN"] = 2003] = "ID_TOKEN";
  CacheType2[CacheType2["APP_METADATA"] = 3001] = "APP_METADATA";
  CacheType2[CacheType2["UNDEFINED"] = 9999] = "UNDEFINED";
})(CacheType || (CacheType = {}));
var APP_METADATA = "appmetadata";
var CLIENT_INFO = "client_info";
var THE_FAMILY_ID = "1";
var AUTHORITY_METADATA_CONSTANTS = {
  CACHE_KEY: "authority-metadata",
  REFRESH_TIME_SECONDS: 3600 * 24
};
var AuthorityMetadataSource;
(function(AuthorityMetadataSource2) {
  AuthorityMetadataSource2["CONFIG"] = "config";
  AuthorityMetadataSource2["CACHE"] = "cache";
  AuthorityMetadataSource2["NETWORK"] = "network";
  AuthorityMetadataSource2["HARDCODED_VALUES"] = "hardcoded_values";
})(AuthorityMetadataSource || (AuthorityMetadataSource = {}));
var SERVER_TELEM_CONSTANTS = {
  SCHEMA_VERSION: 5,
  MAX_CUR_HEADER_BYTES: 80,
  MAX_LAST_HEADER_BYTES: 330,
  MAX_CACHED_ERRORS: 50,
  CACHE_KEY: "server-telemetry",
  CATEGORY_SEPARATOR: "|",
  VALUE_SEPARATOR: ",",
  OVERFLOW_TRUE: "1",
  OVERFLOW_FALSE: "0",
  UNKNOWN_ERROR: "unknown_error"
};
var AuthenticationScheme;
(function(AuthenticationScheme2) {
  AuthenticationScheme2["BEARER"] = "Bearer";
  AuthenticationScheme2["POP"] = "pop";
  AuthenticationScheme2["SSH"] = "ssh-cert";
})(AuthenticationScheme || (AuthenticationScheme = {}));
var ThrottlingConstants = {
  DEFAULT_THROTTLE_TIME_SECONDS: 60,
  DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
  THROTTLING_PREFIX: "throttling",
  X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
};
var Errors = {
  INVALID_GRANT_ERROR: "invalid_grant",
  CLIENT_MISMATCH_ERROR: "client_mismatch"
};
var PasswordGrantConstants;
(function(PasswordGrantConstants2) {
  PasswordGrantConstants2["username"] = "username";
  PasswordGrantConstants2["password"] = "password";
})(PasswordGrantConstants || (PasswordGrantConstants = {}));
var ResponseCodes;
(function(ResponseCodes2) {
  ResponseCodes2[ResponseCodes2["httpSuccess"] = 200] = "httpSuccess";
  ResponseCodes2[ResponseCodes2["httpBadRequest"] = 400] = "httpBadRequest";
})(ResponseCodes || (ResponseCodes = {}));
var RegionDiscoverySources;
(function(RegionDiscoverySources2) {
  RegionDiscoverySources2["FAILED_AUTO_DETECTION"] = "1";
  RegionDiscoverySources2["INTERNAL_CACHE"] = "2";
  RegionDiscoverySources2["ENVIRONMENT_VARIABLE"] = "3";
  RegionDiscoverySources2["IMDS"] = "4";
})(RegionDiscoverySources || (RegionDiscoverySources = {}));
var RegionDiscoveryOutcomes;
(function(RegionDiscoveryOutcomes2) {
  RegionDiscoveryOutcomes2["CONFIGURED_MATCHES_DETECTED"] = "1";
  RegionDiscoveryOutcomes2["CONFIGURED_NO_AUTO_DETECTION"] = "2";
  RegionDiscoveryOutcomes2["CONFIGURED_NOT_DETECTED"] = "3";
  RegionDiscoveryOutcomes2["AUTO_DETECTION_REQUESTED_SUCCESSFUL"] = "4";
  RegionDiscoveryOutcomes2["AUTO_DETECTION_REQUESTED_FAILED"] = "5";
})(RegionDiscoveryOutcomes || (RegionDiscoveryOutcomes = {}));
var CacheOutcome;
(function(CacheOutcome2) {
  CacheOutcome2["NO_CACHE_HIT"] = "0";
  CacheOutcome2["FORCE_REFRESH"] = "1";
  CacheOutcome2["NO_CACHED_ACCESS_TOKEN"] = "2";
  CacheOutcome2["CACHED_ACCESS_TOKEN_EXPIRED"] = "3";
  CacheOutcome2["REFRESH_CACHED_ACCESS_TOKEN"] = "4";
})(CacheOutcome || (CacheOutcome = {}));
var JsonTypes;
(function(JsonTypes2) {
  JsonTypes2["Jwt"] = "JWT";
  JsonTypes2["Jwk"] = "JWK";
})(JsonTypes || (JsonTypes = {}));

// node_modules/@azure/msal-common/dist/error/AuthError.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var AuthErrorMessage = {
  unexpectedError: {
    code: "unexpected_error",
    desc: "Unexpected error in authentication."
  },
  postRequestFailed: {
    code: "post_request_failed",
    desc: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
  }
};
var AuthError = function(_super) {
  __extends2(AuthError2, _super);
  function AuthError2(errorCode, errorMessage, suberror) {
    var _this = this;
    var errorString = errorMessage ? errorCode + ": " + errorMessage : errorCode;
    _this = _super.call(this, errorString) || this;
    Object.setPrototypeOf(_this, AuthError2.prototype);
    _this.errorCode = errorCode || Constants.EMPTY_STRING;
    _this.errorMessage = errorMessage || Constants.EMPTY_STRING;
    _this.subError = suberror || Constants.EMPTY_STRING;
    _this.name = "AuthError";
    return _this;
  }
  AuthError2.prototype.setCorrelationId = function(correlationId) {
    this.correlationId = correlationId;
  };
  AuthError2.createUnexpectedError = function(errDesc) {
    return new AuthError2(AuthErrorMessage.unexpectedError.code, AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
  };
  AuthError2.createPostRequestFailed = function(errDesc) {
    return new AuthError2(AuthErrorMessage.postRequestFailed.code, AuthErrorMessage.postRequestFailed.desc + ": " + errDesc);
  };
  return AuthError2;
}(Error);

// node_modules/@azure/msal-common/dist/crypto/ICrypto.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var DEFAULT_CRYPTO_IMPLEMENTATION = {
  createNewGuid: function() {
    var notImplErr = "Crypto interface - createNewGuid() has not been implemented";
    throw AuthError.createUnexpectedError(notImplErr);
  },
  base64Decode: function() {
    var notImplErr = "Crypto interface - base64Decode() has not been implemented";
    throw AuthError.createUnexpectedError(notImplErr);
  },
  base64Encode: function() {
    var notImplErr = "Crypto interface - base64Encode() has not been implemented";
    throw AuthError.createUnexpectedError(notImplErr);
  },
  generatePkceCodes: function() {
    return __awaiter2(this, void 0, void 0, function() {
      var notImplErr;
      return __generator2(this, function(_a) {
        notImplErr = "Crypto interface - generatePkceCodes() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
      });
    });
  },
  getPublicKeyThumbprint: function() {
    return __awaiter2(this, void 0, void 0, function() {
      var notImplErr;
      return __generator2(this, function(_a) {
        notImplErr = "Crypto interface - getPublicKeyThumbprint() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
      });
    });
  },
  removeTokenBindingKey: function() {
    return __awaiter2(this, void 0, void 0, function() {
      var notImplErr;
      return __generator2(this, function(_a) {
        notImplErr = "Crypto interface - removeTokenBindingKey() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
      });
    });
  },
  clearKeystore: function() {
    return __awaiter2(this, void 0, void 0, function() {
      var notImplErr;
      return __generator2(this, function(_a) {
        notImplErr = "Crypto interface - clearKeystore() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
      });
    });
  },
  signJwt: function() {
    return __awaiter2(this, void 0, void 0, function() {
      var notImplErr;
      return __generator2(this, function(_a) {
        notImplErr = "Crypto interface - signJwt() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
      });
    });
  },
  hashString: function() {
    return __awaiter2(this, void 0, void 0, function() {
      var notImplErr;
      return __generator2(this, function(_a) {
        notImplErr = "Crypto interface - hashString() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
      });
    });
  }
};

// node_modules/@azure/msal-common/dist/error/ClientAuthError.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var ClientAuthErrorMessage = {
  clientInfoDecodingError: {
    code: "client_info_decoding_error",
    desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
  },
  clientInfoEmptyError: {
    code: "client_info_empty_error",
    desc: "The client info was empty. Please review the trace to determine the root cause."
  },
  tokenParsingError: {
    code: "token_parsing_error",
    desc: "Token cannot be parsed. Please review stack trace to determine root cause."
  },
  nullOrEmptyToken: {
    code: "null_or_empty_token",
    desc: "The token is null or empty. Please review the trace to determine the root cause."
  },
  endpointResolutionError: {
    code: "endpoints_resolution_error",
    desc: "Error: could not resolve endpoints. Please check network and try again."
  },
  networkError: {
    code: "network_error",
    desc: "Network request failed. Please check network trace to determine root cause."
  },
  unableToGetOpenidConfigError: {
    code: "openid_config_error",
    desc: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints."
  },
  hashNotDeserialized: {
    code: "hash_not_deserialized",
    desc: "The hash parameters could not be deserialized. Please review the trace to determine the root cause."
  },
  blankGuidGenerated: {
    code: "blank_guid_generated",
    desc: "The guid generated was blank. Please review the trace to determine the root cause."
  },
  invalidStateError: {
    code: "invalid_state",
    desc: "State was not the expected format. Please check the logs to determine whether the request was sent using ProtocolUtils.setRequestState()."
  },
  stateMismatchError: {
    code: "state_mismatch",
    desc: "State mismatch error. Please check your network. Continued requests may cause cache overflow."
  },
  stateNotFoundError: {
    code: "state_not_found",
    desc: "State not found"
  },
  nonceMismatchError: {
    code: "nonce_mismatch",
    desc: "Nonce mismatch error. This may be caused by a race condition in concurrent requests."
  },
  nonceNotFoundError: {
    code: "nonce_not_found",
    desc: "nonce not found"
  },
  authTimeNotFoundError: {
    code: "auth_time_not_found",
    desc: "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information."
  },
  maxAgeTranspiredError: {
    code: "max_age_transpired",
    desc: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication."
  },
  noTokensFoundError: {
    code: "no_tokens_found",
    desc: "No tokens were found for the given scopes, and no authorization code was passed to acquireToken. You must retrieve an authorization code before making a call to acquireToken()."
  },
  multipleMatchingTokens: {
    code: "multiple_matching_tokens",
    desc: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account."
  },
  multipleMatchingAccounts: {
    code: "multiple_matching_accounts",
    desc: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account"
  },
  multipleMatchingAppMetadata: {
    code: "multiple_matching_appMetadata",
    desc: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata"
  },
  tokenRequestCannotBeMade: {
    code: "request_cannot_be_made",
    desc: "Token request cannot be made without authorization code or refresh token."
  },
  appendEmptyScopeError: {
    code: "cannot_append_empty_scope",
    desc: "Cannot append null or empty scope to ScopeSet. Please check the stack trace for more info."
  },
  removeEmptyScopeError: {
    code: "cannot_remove_empty_scope",
    desc: "Cannot remove null or empty scope from ScopeSet. Please check the stack trace for more info."
  },
  appendScopeSetError: {
    code: "cannot_append_scopeset",
    desc: "Cannot append ScopeSet due to error."
  },
  emptyInputScopeSetError: {
    code: "empty_input_scopeset",
    desc: "Empty input ScopeSet cannot be processed."
  },
  DeviceCodePollingCancelled: {
    code: "device_code_polling_cancelled",
    desc: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true."
  },
  DeviceCodeExpired: {
    code: "device_code_expired",
    desc: "Device code is expired."
  },
  DeviceCodeUnknownError: {
    code: "device_code_unknown_error",
    desc: "Device code stopped polling for unknown reasons."
  },
  NoAccountInSilentRequest: {
    code: "no_account_in_silent_request",
    desc: "Please pass an account object, silent flow is not supported without account information"
  },
  invalidCacheRecord: {
    code: "invalid_cache_record",
    desc: "Cache record object was null or undefined."
  },
  invalidCacheEnvironment: {
    code: "invalid_cache_environment",
    desc: "Invalid environment when attempting to create cache entry"
  },
  noAccountFound: {
    code: "no_account_found",
    desc: "No account found in cache for given key."
  },
  CachePluginError: {
    code: "no cache plugin set on CacheManager",
    desc: "ICachePlugin needs to be set before using readFromStorage or writeFromStorage"
  },
  noCryptoObj: {
    code: "no_crypto_object",
    desc: "No crypto object detected. This is required for the following operation: "
  },
  invalidCacheType: {
    code: "invalid_cache_type",
    desc: "Invalid cache type"
  },
  unexpectedAccountType: {
    code: "unexpected_account_type",
    desc: "Unexpected account type."
  },
  unexpectedCredentialType: {
    code: "unexpected_credential_type",
    desc: "Unexpected credential type."
  },
  invalidAssertion: {
    code: "invalid_assertion",
    desc: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515"
  },
  invalidClientCredential: {
    code: "invalid_client_credential",
    desc: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential"
  },
  tokenRefreshRequired: {
    code: "token_refresh_required",
    desc: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired."
  },
  userTimeoutReached: {
    code: "user_timeout_reached",
    desc: "User defined timeout for device code polling reached"
  },
  tokenClaimsRequired: {
    code: "token_claims_cnf_required_for_signedjwt",
    desc: "Cannot generate a POP jwt if the token_claims are not populated"
  },
  noAuthorizationCodeFromServer: {
    code: "authorization_code_missing_from_server_response",
    desc: "Server response does not contain an authorization code to proceed"
  },
  noAzureRegionDetected: {
    code: "no_azure_region_detected",
    desc: "No azure region was detected and no fallback was made available"
  },
  accessTokenEntityNullError: {
    code: "access_token_entity_null",
    desc: "Access token entity is null, please check logs and cache to ensure a valid access token is present."
  },
  bindingKeyNotRemovedError: {
    code: "binding_key_not_removed",
    desc: "Could not remove the credential's binding key from storage."
  },
  logoutNotSupported: {
    code: "end_session_endpoint_not_supported",
    desc: "Provided authority does not support logout."
  },
  keyIdMissing: {
    code: "key_id_missing",
    desc: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key."
  }
};
var ClientAuthError = function(_super) {
  __extends2(ClientAuthError2, _super);
  function ClientAuthError2(errorCode, errorMessage) {
    var _this = _super.call(this, errorCode, errorMessage) || this;
    _this.name = "ClientAuthError";
    Object.setPrototypeOf(_this, ClientAuthError2.prototype);
    return _this;
  }
  ClientAuthError2.createClientInfoDecodingError = function(caughtError) {
    return new ClientAuthError2(ClientAuthErrorMessage.clientInfoDecodingError.code, ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
  };
  ClientAuthError2.createClientInfoEmptyError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.clientInfoEmptyError.code, "" + ClientAuthErrorMessage.clientInfoEmptyError.desc);
  };
  ClientAuthError2.createTokenParsingError = function(caughtExtractionError) {
    return new ClientAuthError2(ClientAuthErrorMessage.tokenParsingError.code, ClientAuthErrorMessage.tokenParsingError.desc + " Failed with error: " + caughtExtractionError);
  };
  ClientAuthError2.createTokenNullOrEmptyError = function(invalidRawTokenString) {
    return new ClientAuthError2(ClientAuthErrorMessage.nullOrEmptyToken.code, ClientAuthErrorMessage.nullOrEmptyToken.desc + " Raw Token Value: " + invalidRawTokenString);
  };
  ClientAuthError2.createEndpointDiscoveryIncompleteError = function(errDetail) {
    return new ClientAuthError2(ClientAuthErrorMessage.endpointResolutionError.code, ClientAuthErrorMessage.endpointResolutionError.desc + " Detail: " + errDetail);
  };
  ClientAuthError2.createNetworkError = function(endpoint, errDetail) {
    return new ClientAuthError2(ClientAuthErrorMessage.networkError.code, ClientAuthErrorMessage.networkError.desc + " | Fetch client threw: " + errDetail + " | Attempted to reach: " + endpoint.split("?")[0]);
  };
  ClientAuthError2.createUnableToGetOpenidConfigError = function(errDetail) {
    return new ClientAuthError2(ClientAuthErrorMessage.unableToGetOpenidConfigError.code, ClientAuthErrorMessage.unableToGetOpenidConfigError.desc + " Attempted to retrieve endpoints from: " + errDetail);
  };
  ClientAuthError2.createHashNotDeserializedError = function(hashParamObj) {
    return new ClientAuthError2(ClientAuthErrorMessage.hashNotDeserialized.code, ClientAuthErrorMessage.hashNotDeserialized.desc + " Given Object: " + hashParamObj);
  };
  ClientAuthError2.createInvalidStateError = function(invalidState, errorString) {
    return new ClientAuthError2(ClientAuthErrorMessage.invalidStateError.code, ClientAuthErrorMessage.invalidStateError.desc + " Invalid State: " + invalidState + ", Root Err: " + errorString);
  };
  ClientAuthError2.createStateMismatchError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.stateMismatchError.code, ClientAuthErrorMessage.stateMismatchError.desc);
  };
  ClientAuthError2.createStateNotFoundError = function(missingState) {
    return new ClientAuthError2(ClientAuthErrorMessage.stateNotFoundError.code, ClientAuthErrorMessage.stateNotFoundError.desc + ":  " + missingState);
  };
  ClientAuthError2.createNonceMismatchError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.nonceMismatchError.code, ClientAuthErrorMessage.nonceMismatchError.desc);
  };
  ClientAuthError2.createAuthTimeNotFoundError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.authTimeNotFoundError.code, ClientAuthErrorMessage.authTimeNotFoundError.desc);
  };
  ClientAuthError2.createMaxAgeTranspiredError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.maxAgeTranspiredError.code, ClientAuthErrorMessage.maxAgeTranspiredError.desc);
  };
  ClientAuthError2.createNonceNotFoundError = function(missingNonce) {
    return new ClientAuthError2(ClientAuthErrorMessage.nonceNotFoundError.code, ClientAuthErrorMessage.nonceNotFoundError.desc + ":  " + missingNonce);
  };
  ClientAuthError2.createMultipleMatchingTokensInCacheError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.multipleMatchingTokens.code, ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
  };
  ClientAuthError2.createMultipleMatchingAccountsInCacheError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.multipleMatchingAccounts.code, ClientAuthErrorMessage.multipleMatchingAccounts.desc);
  };
  ClientAuthError2.createMultipleMatchingAppMetadataInCacheError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.multipleMatchingAppMetadata.code, ClientAuthErrorMessage.multipleMatchingAppMetadata.desc);
  };
  ClientAuthError2.createTokenRequestCannotBeMadeError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.tokenRequestCannotBeMade.code, ClientAuthErrorMessage.tokenRequestCannotBeMade.desc);
  };
  ClientAuthError2.createAppendEmptyScopeToSetError = function(givenScope) {
    return new ClientAuthError2(ClientAuthErrorMessage.appendEmptyScopeError.code, ClientAuthErrorMessage.appendEmptyScopeError.desc + " Given Scope: " + givenScope);
  };
  ClientAuthError2.createRemoveEmptyScopeFromSetError = function(givenScope) {
    return new ClientAuthError2(ClientAuthErrorMessage.removeEmptyScopeError.code, ClientAuthErrorMessage.removeEmptyScopeError.desc + " Given Scope: " + givenScope);
  };
  ClientAuthError2.createAppendScopeSetError = function(appendError) {
    return new ClientAuthError2(ClientAuthErrorMessage.appendScopeSetError.code, ClientAuthErrorMessage.appendScopeSetError.desc + " Detail Error: " + appendError);
  };
  ClientAuthError2.createEmptyInputScopeSetError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.emptyInputScopeSetError.code, "" + ClientAuthErrorMessage.emptyInputScopeSetError.desc);
  };
  ClientAuthError2.createDeviceCodeCancelledError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.DeviceCodePollingCancelled.code, "" + ClientAuthErrorMessage.DeviceCodePollingCancelled.desc);
  };
  ClientAuthError2.createDeviceCodeExpiredError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.DeviceCodeExpired.code, "" + ClientAuthErrorMessage.DeviceCodeExpired.desc);
  };
  ClientAuthError2.createDeviceCodeUnknownError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.DeviceCodeUnknownError.code, "" + ClientAuthErrorMessage.DeviceCodeUnknownError.desc);
  };
  ClientAuthError2.createNoAccountInSilentRequestError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.NoAccountInSilentRequest.code, "" + ClientAuthErrorMessage.NoAccountInSilentRequest.desc);
  };
  ClientAuthError2.createNullOrUndefinedCacheRecord = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.invalidCacheRecord.code, ClientAuthErrorMessage.invalidCacheRecord.desc);
  };
  ClientAuthError2.createInvalidCacheEnvironmentError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.invalidCacheEnvironment.code, ClientAuthErrorMessage.invalidCacheEnvironment.desc);
  };
  ClientAuthError2.createNoAccountFoundError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.noAccountFound.code, ClientAuthErrorMessage.noAccountFound.desc);
  };
  ClientAuthError2.createCachePluginError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.CachePluginError.code, "" + ClientAuthErrorMessage.CachePluginError.desc);
  };
  ClientAuthError2.createNoCryptoObjectError = function(operationName) {
    return new ClientAuthError2(ClientAuthErrorMessage.noCryptoObj.code, "" + ClientAuthErrorMessage.noCryptoObj.desc + operationName);
  };
  ClientAuthError2.createInvalidCacheTypeError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.invalidCacheType.code, "" + ClientAuthErrorMessage.invalidCacheType.desc);
  };
  ClientAuthError2.createUnexpectedAccountTypeError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.unexpectedAccountType.code, "" + ClientAuthErrorMessage.unexpectedAccountType.desc);
  };
  ClientAuthError2.createUnexpectedCredentialTypeError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.unexpectedCredentialType.code, "" + ClientAuthErrorMessage.unexpectedCredentialType.desc);
  };
  ClientAuthError2.createInvalidAssertionError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.invalidAssertion.code, "" + ClientAuthErrorMessage.invalidAssertion.desc);
  };
  ClientAuthError2.createInvalidCredentialError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.invalidClientCredential.code, "" + ClientAuthErrorMessage.invalidClientCredential.desc);
  };
  ClientAuthError2.createRefreshRequiredError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.tokenRefreshRequired.code, ClientAuthErrorMessage.tokenRefreshRequired.desc);
  };
  ClientAuthError2.createUserTimeoutReachedError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.userTimeoutReached.code, ClientAuthErrorMessage.userTimeoutReached.desc);
  };
  ClientAuthError2.createTokenClaimsRequiredError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.tokenClaimsRequired.code, ClientAuthErrorMessage.tokenClaimsRequired.desc);
  };
  ClientAuthError2.createNoAuthCodeInServerResponseError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.noAuthorizationCodeFromServer.code, ClientAuthErrorMessage.noAuthorizationCodeFromServer.desc);
  };
  ClientAuthError2.createBindingKeyNotRemovedError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.bindingKeyNotRemovedError.code, ClientAuthErrorMessage.bindingKeyNotRemovedError.desc);
  };
  ClientAuthError2.createLogoutNotSupportedError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.logoutNotSupported.code, ClientAuthErrorMessage.logoutNotSupported.desc);
  };
  ClientAuthError2.createKeyIdMissingError = function() {
    return new ClientAuthError2(ClientAuthErrorMessage.keyIdMissing.code, ClientAuthErrorMessage.keyIdMissing.desc);
  };
  return ClientAuthError2;
}(AuthError);

// node_modules/@azure/msal-common/dist/utils/StringUtils.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var StringUtils = function() {
  function StringUtils2() {
  }
  StringUtils2.decodeAuthToken = function(authToken) {
    if (StringUtils2.isEmpty(authToken)) {
      throw ClientAuthError.createTokenNullOrEmptyError(authToken);
    }
    var tokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
    var matches = tokenPartsRegex.exec(authToken);
    if (!matches || matches.length < 4) {
      throw ClientAuthError.createTokenParsingError("Given token is malformed: " + JSON.stringify(authToken));
    }
    var crackedToken = {
      header: matches[1],
      JWSPayload: matches[2],
      JWSSig: matches[3]
    };
    return crackedToken;
  };
  StringUtils2.isEmpty = function(str) {
    return typeof str === "undefined" || !str || str.length === 0;
  };
  StringUtils2.isEmptyObj = function(strObj) {
    if (strObj && !StringUtils2.isEmpty(strObj)) {
      try {
        var obj = JSON.parse(strObj);
        return Object.keys(obj).length === 0;
      } catch (e) {
      }
    }
    return true;
  };
  StringUtils2.startsWith = function(str, search) {
    return str.indexOf(search) === 0;
  };
  StringUtils2.endsWith = function(str, search) {
    return str.length >= search.length && str.lastIndexOf(search) === str.length - search.length;
  };
  StringUtils2.queryStringToObject = function(query) {
    var obj = {};
    var params = query.split("&");
    var decode = function(s) {
      return decodeURIComponent(s.replace(/\+/g, " "));
    };
    params.forEach(function(pair) {
      if (pair.trim()) {
        var _a = pair.split(/=(.+)/g, 2), key = _a[0], value = _a[1];
        if (key && value) {
          obj[decode(key)] = decode(value);
        }
      }
    });
    return obj;
  };
  StringUtils2.trimArrayEntries = function(arr) {
    return arr.map(function(entry) {
      return entry.trim();
    });
  };
  StringUtils2.removeEmptyStringsFromArray = function(arr) {
    return arr.filter(function(entry) {
      return !StringUtils2.isEmpty(entry);
    });
  };
  StringUtils2.jsonParseHelper = function(str) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return null;
    }
  };
  StringUtils2.matchPattern = function(pattern, input) {
    var regex = new RegExp(pattern.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?"));
    return regex.test(input);
  };
  return StringUtils2;
}();

// node_modules/@azure/msal-common/dist/logger/Logger.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["Error"] = 0] = "Error";
  LogLevel2[LogLevel2["Warning"] = 1] = "Warning";
  LogLevel2[LogLevel2["Info"] = 2] = "Info";
  LogLevel2[LogLevel2["Verbose"] = 3] = "Verbose";
  LogLevel2[LogLevel2["Trace"] = 4] = "Trace";
})(LogLevel || (LogLevel = {}));
var Logger = function() {
  function Logger2(loggerOptions, packageName, packageVersion) {
    this.level = LogLevel.Info;
    var defaultLoggerCallback = function() {
      return;
    };
    this.localCallback = loggerOptions.loggerCallback || defaultLoggerCallback;
    this.piiLoggingEnabled = loggerOptions.piiLoggingEnabled || false;
    this.level = typeof loggerOptions.logLevel === "number" ? loggerOptions.logLevel : LogLevel.Info;
    this.correlationId = loggerOptions.correlationId || Constants.EMPTY_STRING;
    this.packageName = packageName || Constants.EMPTY_STRING;
    this.packageVersion = packageVersion || Constants.EMPTY_STRING;
  }
  Logger2.prototype.clone = function(packageName, packageVersion, correlationId) {
    return new Logger2({loggerCallback: this.localCallback, piiLoggingEnabled: this.piiLoggingEnabled, logLevel: this.level, correlationId: correlationId || this.correlationId}, packageName, packageVersion);
  };
  Logger2.prototype.logMessage = function(logMessage, options) {
    if (options.logLevel > this.level || !this.piiLoggingEnabled && options.containsPii) {
      return;
    }
    var timestamp = new Date().toUTCString();
    var logHeader;
    if (!StringUtils.isEmpty(options.correlationId)) {
      logHeader = "[" + timestamp + "] : [" + options.correlationId + "]";
    } else if (!StringUtils.isEmpty(this.correlationId)) {
      logHeader = "[" + timestamp + "] : [" + this.correlationId + "]";
    } else {
      logHeader = "[" + timestamp + "]";
    }
    var log = logHeader + " : " + this.packageName + "@" + this.packageVersion + " : " + LogLevel[options.logLevel] + " - " + logMessage;
    this.executeCallback(options.logLevel, log, options.containsPii || false);
  };
  Logger2.prototype.executeCallback = function(level, message, containsPii) {
    if (this.localCallback) {
      this.localCallback(level, message, containsPii);
    }
  };
  Logger2.prototype.error = function(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Error,
      containsPii: false,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  };
  Logger2.prototype.errorPii = function(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Error,
      containsPii: true,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  };
  Logger2.prototype.warning = function(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Warning,
      containsPii: false,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  };
  Logger2.prototype.warningPii = function(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Warning,
      containsPii: true,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  };
  Logger2.prototype.info = function(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Info,
      containsPii: false,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  };
  Logger2.prototype.infoPii = function(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Info,
      containsPii: true,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  };
  Logger2.prototype.verbose = function(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Verbose,
      containsPii: false,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  };
  Logger2.prototype.verbosePii = function(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Verbose,
      containsPii: true,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  };
  Logger2.prototype.trace = function(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Trace,
      containsPii: false,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  };
  Logger2.prototype.tracePii = function(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Trace,
      containsPii: true,
      correlationId: correlationId || Constants.EMPTY_STRING
    });
  };
  Logger2.prototype.isPiiLoggingEnabled = function() {
    return this.piiLoggingEnabled || false;
  };
  return Logger2;
}();

// node_modules/@azure/msal-common/dist/packageMetadata.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var name = "@azure/msal-common";
var version = "9.0.1";

// node_modules/@azure/msal-common/dist/authority/AuthorityOptions.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var AzureCloudInstance;
(function(AzureCloudInstance2) {
  AzureCloudInstance2[AzureCloudInstance2["None"] = 0] = "None";
  AzureCloudInstance2["AzurePublic"] = "https://login.microsoftonline.com";
  AzureCloudInstance2["AzurePpe"] = "https://login.windows-ppe.net";
  AzureCloudInstance2["AzureChina"] = "https://login.chinacloudapi.cn";
  AzureCloudInstance2["AzureGermany"] = "https://login.microsoftonline.de";
  AzureCloudInstance2["AzureUsGovernment"] = "https://login.microsoftonline.us";
})(AzureCloudInstance || (AzureCloudInstance = {}));

// node_modules/@azure/msal-common/dist/cache/entities/CredentialEntity.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var CredentialEntity = function() {
  function CredentialEntity2() {
  }
  CredentialEntity2.prototype.generateAccountId = function() {
    return CredentialEntity2.generateAccountIdForCacheKey(this.homeAccountId, this.environment);
  };
  CredentialEntity2.prototype.generateCredentialId = function() {
    return CredentialEntity2.generateCredentialIdForCacheKey(this.credentialType, this.clientId, this.realm, this.familyId);
  };
  CredentialEntity2.prototype.generateTarget = function() {
    return CredentialEntity2.generateTargetForCacheKey(this.target);
  };
  CredentialEntity2.prototype.generateCredentialKey = function() {
    return CredentialEntity2.generateCredentialCacheKey(this.homeAccountId, this.environment, this.credentialType, this.clientId, this.realm, this.target, this.familyId, this.tokenType, this.requestedClaimsHash);
  };
  CredentialEntity2.prototype.generateType = function() {
    switch (this.credentialType) {
      case CredentialType.ID_TOKEN:
        return CacheType.ID_TOKEN;
      case CredentialType.ACCESS_TOKEN:
      case CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME:
        return CacheType.ACCESS_TOKEN;
      case CredentialType.REFRESH_TOKEN:
        return CacheType.REFRESH_TOKEN;
      default: {
        throw ClientAuthError.createUnexpectedCredentialTypeError();
      }
    }
  };
  CredentialEntity2.getCredentialType = function(key) {
    if (key.indexOf(CredentialType.ACCESS_TOKEN.toLowerCase()) !== -1) {
      if (key.indexOf(CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) !== -1) {
        return CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME;
      }
      return CredentialType.ACCESS_TOKEN;
    } else if (key.indexOf(CredentialType.ID_TOKEN.toLowerCase()) !== -1) {
      return CredentialType.ID_TOKEN;
    } else if (key.indexOf(CredentialType.REFRESH_TOKEN.toLowerCase()) !== -1) {
      return CredentialType.REFRESH_TOKEN;
    }
    return Constants.NOT_DEFINED;
  };
  CredentialEntity2.generateCredentialCacheKey = function(homeAccountId, environment, credentialType, clientId, realm, target, familyId, tokenType, requestedClaimsHash) {
    var credentialKey = [
      this.generateAccountIdForCacheKey(homeAccountId, environment),
      this.generateCredentialIdForCacheKey(credentialType, clientId, realm, familyId),
      this.generateTargetForCacheKey(target),
      this.generateClaimsHashForCacheKey(requestedClaimsHash),
      this.generateSchemeForCacheKey(tokenType)
    ];
    return credentialKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
  };
  CredentialEntity2.generateAccountIdForCacheKey = function(homeAccountId, environment) {
    var accountId = [homeAccountId, environment];
    return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
  };
  CredentialEntity2.generateCredentialIdForCacheKey = function(credentialType, clientId, realm, familyId) {
    var clientOrFamilyId = credentialType === CredentialType.REFRESH_TOKEN ? familyId || clientId : clientId;
    var credentialId = [
      credentialType,
      clientOrFamilyId,
      realm || Constants.EMPTY_STRING
    ];
    return credentialId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
  };
  CredentialEntity2.generateTargetForCacheKey = function(scopes) {
    return (scopes || Constants.EMPTY_STRING).toLowerCase();
  };
  CredentialEntity2.generateClaimsHashForCacheKey = function(requestedClaimsHash) {
    return (requestedClaimsHash || Constants.EMPTY_STRING).toLowerCase();
  };
  CredentialEntity2.generateSchemeForCacheKey = function(tokenType) {
    return tokenType && tokenType.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase() ? tokenType.toLowerCase() : Constants.EMPTY_STRING;
  };
  return CredentialEntity2;
}();

// node_modules/@azure/msal-common/dist/error/ClientConfigurationError.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var ClientConfigurationErrorMessage = {
  redirectUriNotSet: {
    code: "redirect_uri_empty",
    desc: "A redirect URI is required for all calls, and none has been set."
  },
  postLogoutUriNotSet: {
    code: "post_logout_uri_empty",
    desc: "A post logout redirect has not been set."
  },
  claimsRequestParsingError: {
    code: "claims_request_parsing_error",
    desc: "Could not parse the given claims request object."
  },
  authorityUriInsecure: {
    code: "authority_uri_insecure",
    desc: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options"
  },
  urlParseError: {
    code: "url_parse_error",
    desc: "URL could not be parsed into appropriate segments."
  },
  urlEmptyError: {
    code: "empty_url_error",
    desc: "URL was empty or null."
  },
  emptyScopesError: {
    code: "empty_input_scopes_error",
    desc: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token."
  },
  nonArrayScopesError: {
    code: "nonarray_input_scopes_error",
    desc: "Scopes cannot be passed as non-array."
  },
  clientIdSingleScopeError: {
    code: "clientid_input_scopes_error",
    desc: "Client ID can only be provided as a single scope."
  },
  invalidPrompt: {
    code: "invalid_prompt_value",
    desc: "Supported prompt values are 'login', 'select_account', 'consent', 'create', 'none' and 'no_session'.  Please see here for valid configuration options: https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_common.html#commonauthorizationurlrequest"
  },
  invalidClaimsRequest: {
    code: "invalid_claims",
    desc: "Given claims parameter must be a stringified JSON object."
  },
  tokenRequestEmptyError: {
    code: "token_request_empty",
    desc: "Token request was empty and not found in cache."
  },
  logoutRequestEmptyError: {
    code: "logout_request_empty",
    desc: "The logout request was null or undefined."
  },
  invalidCodeChallengeMethod: {
    code: "invalid_code_challenge_method",
    desc: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".'
  },
  invalidCodeChallengeParams: {
    code: "pkce_params_missing",
    desc: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request"
  },
  invalidCloudDiscoveryMetadata: {
    code: "invalid_cloud_discovery_metadata",
    desc: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields"
  },
  invalidAuthorityMetadata: {
    code: "invalid_authority_metadata",
    desc: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields."
  },
  untrustedAuthority: {
    code: "untrusted_authority",
    desc: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter."
  },
  invalidAzureCloudInstance: {
    code: "invalid_azure_cloud_instance",
    desc: "Invalid AzureCloudInstance provided. Please refer MSAL JS docs: aks.ms/msaljs/azure_cloud_instance for valid values"
  },
  missingSshJwk: {
    code: "missing_ssh_jwk",
    desc: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme."
  },
  missingSshKid: {
    code: "missing_ssh_kid",
    desc: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme."
  },
  missingNonceAuthenticationHeader: {
    code: "missing_nonce_authentication_header",
    desc: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce."
  },
  invalidAuthenticationHeader: {
    code: "invalid_authentication_header",
    desc: "Invalid authentication header provided"
  }
};
var ClientConfigurationError = function(_super) {
  __extends2(ClientConfigurationError2, _super);
  function ClientConfigurationError2(errorCode, errorMessage) {
    var _this = _super.call(this, errorCode, errorMessage) || this;
    _this.name = "ClientConfigurationError";
    Object.setPrototypeOf(_this, ClientConfigurationError2.prototype);
    return _this;
  }
  ClientConfigurationError2.createRedirectUriEmptyError = function() {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.redirectUriNotSet.code, ClientConfigurationErrorMessage.redirectUriNotSet.desc);
  };
  ClientConfigurationError2.createPostLogoutRedirectUriEmptyError = function() {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.postLogoutUriNotSet.code, ClientConfigurationErrorMessage.postLogoutUriNotSet.desc);
  };
  ClientConfigurationError2.createClaimsRequestParsingError = function(claimsRequestParseError) {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.claimsRequestParsingError.code, ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
  };
  ClientConfigurationError2.createInsecureAuthorityUriError = function(urlString) {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.authorityUriInsecure.code, ClientConfigurationErrorMessage.authorityUriInsecure.desc + " Given URI: " + urlString);
  };
  ClientConfigurationError2.createUrlParseError = function(urlParseError) {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.urlParseError.code, ClientConfigurationErrorMessage.urlParseError.desc + " Given Error: " + urlParseError);
  };
  ClientConfigurationError2.createUrlEmptyError = function() {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.urlEmptyError.code, ClientConfigurationErrorMessage.urlEmptyError.desc);
  };
  ClientConfigurationError2.createEmptyScopesArrayError = function() {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.emptyScopesError.code, "" + ClientConfigurationErrorMessage.emptyScopesError.desc);
  };
  ClientConfigurationError2.createClientIdSingleScopeError = function(inputScopes) {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.clientIdSingleScopeError.code, ClientConfigurationErrorMessage.clientIdSingleScopeError.desc + " Given Scopes: " + inputScopes);
  };
  ClientConfigurationError2.createInvalidPromptError = function(promptValue) {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.invalidPrompt.code, ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
  };
  ClientConfigurationError2.createInvalidClaimsRequestError = function() {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.invalidClaimsRequest.code, ClientConfigurationErrorMessage.invalidClaimsRequest.desc);
  };
  ClientConfigurationError2.createEmptyLogoutRequestError = function() {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.logoutRequestEmptyError.code, ClientConfigurationErrorMessage.logoutRequestEmptyError.desc);
  };
  ClientConfigurationError2.createEmptyTokenRequestError = function() {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.tokenRequestEmptyError.code, ClientConfigurationErrorMessage.tokenRequestEmptyError.desc);
  };
  ClientConfigurationError2.createInvalidCodeChallengeMethodError = function() {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.invalidCodeChallengeMethod.code, ClientConfigurationErrorMessage.invalidCodeChallengeMethod.desc);
  };
  ClientConfigurationError2.createInvalidCodeChallengeParamsError = function() {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.invalidCodeChallengeParams.code, ClientConfigurationErrorMessage.invalidCodeChallengeParams.desc);
  };
  ClientConfigurationError2.createInvalidCloudDiscoveryMetadataError = function() {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.invalidCloudDiscoveryMetadata.code, ClientConfigurationErrorMessage.invalidCloudDiscoveryMetadata.desc);
  };
  ClientConfigurationError2.createInvalidAuthorityMetadataError = function() {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.invalidAuthorityMetadata.code, ClientConfigurationErrorMessage.invalidAuthorityMetadata.desc);
  };
  ClientConfigurationError2.createUntrustedAuthorityError = function() {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.untrustedAuthority.code, ClientConfigurationErrorMessage.untrustedAuthority.desc);
  };
  ClientConfigurationError2.createInvalidAzureCloudInstanceError = function() {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.invalidAzureCloudInstance.code, ClientConfigurationErrorMessage.invalidAzureCloudInstance.desc);
  };
  ClientConfigurationError2.createMissingSshJwkError = function() {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.missingSshJwk.code, ClientConfigurationErrorMessage.missingSshJwk.desc);
  };
  ClientConfigurationError2.createMissingSshKidError = function() {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.missingSshKid.code, ClientConfigurationErrorMessage.missingSshKid.desc);
  };
  ClientConfigurationError2.createMissingNonceAuthenticationHeadersError = function() {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.missingNonceAuthenticationHeader.code, ClientConfigurationErrorMessage.missingNonceAuthenticationHeader.desc);
  };
  ClientConfigurationError2.createInvalidAuthenticationHeaderError = function(invalidHeaderName, details) {
    return new ClientConfigurationError2(ClientConfigurationErrorMessage.invalidAuthenticationHeader.code, ClientConfigurationErrorMessage.invalidAuthenticationHeader.desc + ". Invalid header: " + invalidHeaderName + ". Details: " + details);
  };
  return ClientConfigurationError2;
}(ClientAuthError);

// node_modules/@azure/msal-common/dist/request/ScopeSet.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var ScopeSet = function() {
  function ScopeSet2(inputScopes) {
    var _this = this;
    var scopeArr = inputScopes ? StringUtils.trimArrayEntries(__spreadArrays(inputScopes)) : [];
    var filteredInput = scopeArr ? StringUtils.removeEmptyStringsFromArray(scopeArr) : [];
    this.validateInputScopes(filteredInput);
    this.scopes = new Set();
    filteredInput.forEach(function(scope) {
      return _this.scopes.add(scope);
    });
  }
  ScopeSet2.fromString = function(inputScopeString) {
    var scopeString = inputScopeString || Constants.EMPTY_STRING;
    var inputScopes = scopeString.split(" ");
    return new ScopeSet2(inputScopes);
  };
  ScopeSet2.prototype.validateInputScopes = function(inputScopes) {
    if (!inputScopes || inputScopes.length < 1) {
      throw ClientConfigurationError.createEmptyScopesArrayError();
    }
  };
  ScopeSet2.prototype.containsScope = function(scope) {
    var lowerCaseScopes = this.printScopesLowerCase().split(" ");
    var lowerCaseScopesSet = new ScopeSet2(lowerCaseScopes);
    return !StringUtils.isEmpty(scope) ? lowerCaseScopesSet.scopes.has(scope.toLowerCase()) : false;
  };
  ScopeSet2.prototype.containsScopeSet = function(scopeSet) {
    var _this = this;
    if (!scopeSet || scopeSet.scopes.size <= 0) {
      return false;
    }
    return this.scopes.size >= scopeSet.scopes.size && scopeSet.asArray().every(function(scope) {
      return _this.containsScope(scope);
    });
  };
  ScopeSet2.prototype.containsOnlyOIDCScopes = function() {
    var _this = this;
    var defaultScopeCount = 0;
    OIDC_SCOPES.forEach(function(defaultScope) {
      if (_this.containsScope(defaultScope)) {
        defaultScopeCount += 1;
      }
    });
    return this.scopes.size === defaultScopeCount;
  };
  ScopeSet2.prototype.appendScope = function(newScope) {
    if (!StringUtils.isEmpty(newScope)) {
      this.scopes.add(newScope.trim());
    }
  };
  ScopeSet2.prototype.appendScopes = function(newScopes) {
    var _this = this;
    try {
      newScopes.forEach(function(newScope) {
        return _this.appendScope(newScope);
      });
    } catch (e) {
      throw ClientAuthError.createAppendScopeSetError(e);
    }
  };
  ScopeSet2.prototype.removeScope = function(scope) {
    if (StringUtils.isEmpty(scope)) {
      throw ClientAuthError.createRemoveEmptyScopeFromSetError(scope);
    }
    this.scopes.delete(scope.trim());
  };
  ScopeSet2.prototype.removeOIDCScopes = function() {
    var _this = this;
    OIDC_SCOPES.forEach(function(defaultScope) {
      _this.scopes.delete(defaultScope);
    });
  };
  ScopeSet2.prototype.unionScopeSets = function(otherScopes) {
    if (!otherScopes) {
      throw ClientAuthError.createEmptyInputScopeSetError();
    }
    var unionScopes = new Set();
    otherScopes.scopes.forEach(function(scope) {
      return unionScopes.add(scope.toLowerCase());
    });
    this.scopes.forEach(function(scope) {
      return unionScopes.add(scope.toLowerCase());
    });
    return unionScopes;
  };
  ScopeSet2.prototype.intersectingScopeSets = function(otherScopes) {
    if (!otherScopes) {
      throw ClientAuthError.createEmptyInputScopeSetError();
    }
    if (!otherScopes.containsOnlyOIDCScopes()) {
      otherScopes.removeOIDCScopes();
    }
    var unionScopes = this.unionScopeSets(otherScopes);
    var sizeOtherScopes = otherScopes.getScopeCount();
    var sizeThisScopes = this.getScopeCount();
    var sizeUnionScopes = unionScopes.size;
    return sizeUnionScopes < sizeThisScopes + sizeOtherScopes;
  };
  ScopeSet2.prototype.getScopeCount = function() {
    return this.scopes.size;
  };
  ScopeSet2.prototype.asArray = function() {
    var array = [];
    this.scopes.forEach(function(val) {
      return array.push(val);
    });
    return array;
  };
  ScopeSet2.prototype.printScopes = function() {
    if (this.scopes) {
      var scopeArr = this.asArray();
      return scopeArr.join(" ");
    }
    return Constants.EMPTY_STRING;
  };
  ScopeSet2.prototype.printScopesLowerCase = function() {
    return this.printScopes().toLowerCase();
  };
  return ScopeSet2;
}();

// node_modules/@azure/msal-common/dist/account/ClientInfo.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
function buildClientInfo(rawClientInfo, crypto) {
  if (StringUtils.isEmpty(rawClientInfo)) {
    throw ClientAuthError.createClientInfoEmptyError();
  }
  try {
    var decodedClientInfo = crypto.base64Decode(rawClientInfo);
    return JSON.parse(decodedClientInfo);
  } catch (e) {
    throw ClientAuthError.createClientInfoDecodingError(e.message);
  }
}
function buildClientInfoFromHomeAccountId(homeAccountId) {
  if (StringUtils.isEmpty(homeAccountId)) {
    throw ClientAuthError.createClientInfoDecodingError("Home account ID was empty.");
  }
  var clientInfoParts = homeAccountId.split(Separators.CLIENT_INFO_SEPARATOR, 2);
  return {
    uid: clientInfoParts[0],
    utid: clientInfoParts.length < 2 ? Constants.EMPTY_STRING : clientInfoParts[1]
  };
}

// node_modules/@azure/msal-common/dist/authority/AuthorityType.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var AuthorityType;
(function(AuthorityType2) {
  AuthorityType2[AuthorityType2["Default"] = 0] = "Default";
  AuthorityType2[AuthorityType2["Adfs"] = 1] = "Adfs";
  AuthorityType2[AuthorityType2["Dsts"] = 2] = "Dsts";
})(AuthorityType || (AuthorityType = {}));

// node_modules/@azure/msal-common/dist/cache/entities/AccountEntity.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var AccountEntity = function() {
  function AccountEntity2() {
  }
  AccountEntity2.prototype.generateAccountId = function() {
    var accountId = [this.homeAccountId, this.environment];
    return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
  };
  AccountEntity2.prototype.generateAccountKey = function() {
    return AccountEntity2.generateAccountCacheKey({
      homeAccountId: this.homeAccountId,
      environment: this.environment,
      tenantId: this.realm,
      username: this.username,
      localAccountId: this.localAccountId
    });
  };
  AccountEntity2.prototype.generateType = function() {
    switch (this.authorityType) {
      case CacheAccountType.ADFS_ACCOUNT_TYPE:
        return CacheType.ADFS;
      case CacheAccountType.MSAV1_ACCOUNT_TYPE:
        return CacheType.MSA;
      case CacheAccountType.MSSTS_ACCOUNT_TYPE:
        return CacheType.MSSTS;
      case CacheAccountType.GENERIC_ACCOUNT_TYPE:
        return CacheType.GENERIC;
      default: {
        throw ClientAuthError.createUnexpectedAccountTypeError();
      }
    }
  };
  AccountEntity2.prototype.getAccountInfo = function() {
    return {
      homeAccountId: this.homeAccountId,
      environment: this.environment,
      tenantId: this.realm,
      username: this.username,
      localAccountId: this.localAccountId,
      name: this.name,
      idTokenClaims: this.idTokenClaims,
      nativeAccountId: this.nativeAccountId
    };
  };
  AccountEntity2.generateAccountCacheKey = function(accountInterface) {
    var accountKey = [
      accountInterface.homeAccountId,
      accountInterface.environment || Constants.EMPTY_STRING,
      accountInterface.tenantId || Constants.EMPTY_STRING
    ];
    return accountKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
  };
  AccountEntity2.createAccount = function(clientInfo, homeAccountId, idToken, authority, cloudGraphHostName, msGraphHost, environment, nativeAccountId) {
    var _a, _b, _c, _d, _e, _f;
    var account = new AccountEntity2();
    account.authorityType = CacheAccountType.MSSTS_ACCOUNT_TYPE;
    account.clientInfo = clientInfo;
    account.homeAccountId = homeAccountId;
    account.nativeAccountId = nativeAccountId;
    var env = environment || authority && authority.getPreferredCache();
    if (!env) {
      throw ClientAuthError.createInvalidCacheEnvironmentError();
    }
    account.environment = env;
    account.realm = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.tid) || Constants.EMPTY_STRING;
    if (idToken) {
      account.idTokenClaims = idToken.claims;
      account.localAccountId = ((_b = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _b === void 0 ? void 0 : _b.oid) || ((_c = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _c === void 0 ? void 0 : _c.sub) || Constants.EMPTY_STRING;
      var preferredUsername = (_d = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _d === void 0 ? void 0 : _d.preferred_username;
      var email = ((_e = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _e === void 0 ? void 0 : _e.emails) ? idToken.claims.emails[0] : null;
      account.username = preferredUsername || email || Constants.EMPTY_STRING;
      account.name = (_f = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _f === void 0 ? void 0 : _f.name;
    }
    account.cloudGraphHostName = cloudGraphHostName;
    account.msGraphHost = msGraphHost;
    return account;
  };
  AccountEntity2.createGenericAccount = function(homeAccountId, idToken, authority, cloudGraphHostName, msGraphHost, environment) {
    var _a, _b, _c, _d;
    var account = new AccountEntity2();
    account.authorityType = authority && authority.authorityType === AuthorityType.Adfs ? CacheAccountType.ADFS_ACCOUNT_TYPE : CacheAccountType.GENERIC_ACCOUNT_TYPE;
    account.homeAccountId = homeAccountId;
    account.realm = Constants.EMPTY_STRING;
    var env = environment || authority && authority.getPreferredCache();
    if (!env) {
      throw ClientAuthError.createInvalidCacheEnvironmentError();
    }
    if (idToken) {
      account.localAccountId = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.oid) || ((_b = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _b === void 0 ? void 0 : _b.sub) || Constants.EMPTY_STRING;
      account.username = ((_c = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _c === void 0 ? void 0 : _c.upn) || Constants.EMPTY_STRING;
      account.name = ((_d = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _d === void 0 ? void 0 : _d.name) || Constants.EMPTY_STRING;
      account.idTokenClaims = idToken === null || idToken === void 0 ? void 0 : idToken.claims;
    }
    account.environment = env;
    account.cloudGraphHostName = cloudGraphHostName;
    account.msGraphHost = msGraphHost;
    return account;
  };
  AccountEntity2.generateHomeAccountId = function(serverClientInfo, authType, logger, cryptoObj, idToken) {
    var _a;
    var accountId = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.sub) ? idToken.claims.sub : Constants.EMPTY_STRING;
    if (authType === AuthorityType.Adfs || authType === AuthorityType.Dsts) {
      return accountId;
    }
    if (serverClientInfo) {
      try {
        var clientInfo = buildClientInfo(serverClientInfo, cryptoObj);
        if (!StringUtils.isEmpty(clientInfo.uid) && !StringUtils.isEmpty(clientInfo.utid)) {
          return "" + clientInfo.uid + Separators.CLIENT_INFO_SEPARATOR + clientInfo.utid;
        }
      } catch (e) {
      }
    }
    logger.verbose("No client info in response");
    return accountId;
  };
  AccountEntity2.isAccountEntity = function(entity) {
    if (!entity) {
      return false;
    }
    return entity.hasOwnProperty("homeAccountId") && entity.hasOwnProperty("environment") && entity.hasOwnProperty("realm") && entity.hasOwnProperty("localAccountId") && entity.hasOwnProperty("username") && entity.hasOwnProperty("authorityType");
  };
  AccountEntity2.accountInfoIsEqual = function(accountA, accountB, compareClaims) {
    if (!accountA || !accountB) {
      return false;
    }
    var claimsMatch = true;
    if (compareClaims) {
      var accountAClaims = accountA.idTokenClaims || {};
      var accountBClaims = accountB.idTokenClaims || {};
      claimsMatch = accountAClaims.iat === accountBClaims.iat && accountAClaims.nonce === accountBClaims.nonce;
    }
    return accountA.homeAccountId === accountB.homeAccountId && accountA.localAccountId === accountB.localAccountId && accountA.username === accountB.username && accountA.tenantId === accountB.tenantId && accountA.environment === accountB.environment && accountA.nativeAccountId === accountB.nativeAccountId && claimsMatch;
  };
  return AccountEntity2;
}();

// node_modules/@azure/msal-common/dist/account/AuthToken.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var AuthToken = function() {
  function AuthToken2(rawToken, crypto) {
    if (StringUtils.isEmpty(rawToken)) {
      throw ClientAuthError.createTokenNullOrEmptyError(rawToken);
    }
    this.rawToken = rawToken;
    this.claims = AuthToken2.extractTokenClaims(rawToken, crypto);
  }
  AuthToken2.extractTokenClaims = function(encodedToken, crypto) {
    var decodedToken = StringUtils.decodeAuthToken(encodedToken);
    try {
      var base64TokenPayload = decodedToken.JWSPayload;
      var base64Decoded = crypto.base64Decode(base64TokenPayload);
      return JSON.parse(base64Decoded);
    } catch (err) {
      throw ClientAuthError.createTokenParsingError(err);
    }
  };
  AuthToken2.checkMaxAge = function(authTime, maxAge) {
    var fiveMinuteSkew = 3e5;
    if (maxAge === 0 || Date.now() - fiveMinuteSkew > authTime + maxAge) {
      throw ClientAuthError.createMaxAgeTranspiredError();
    }
  };
  return AuthToken2;
}();

// node_modules/@azure/msal-common/dist/cache/CacheManager.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var CacheManager = function() {
  function CacheManager2(clientId, cryptoImpl) {
    this.clientId = clientId;
    this.cryptoImpl = cryptoImpl;
  }
  CacheManager2.prototype.getAllAccounts = function() {
    var _this = this;
    var currentAccounts = this.getAccountsFilteredBy();
    var accountValues = Object.keys(currentAccounts).map(function(accountKey) {
      return currentAccounts[accountKey];
    });
    var numAccounts = accountValues.length;
    if (numAccounts < 1) {
      return [];
    } else {
      var allAccounts = accountValues.map(function(value) {
        var accountEntity = CacheManager2.toObject(new AccountEntity(), value);
        var accountInfo = accountEntity.getAccountInfo();
        var idToken = _this.readIdTokenFromCache(_this.clientId, accountInfo);
        if (idToken && !accountInfo.idTokenClaims) {
          accountInfo.idToken = idToken.secret;
          accountInfo.idTokenClaims = new AuthToken(idToken.secret, _this.cryptoImpl).claims;
        }
        return accountInfo;
      });
      return allAccounts;
    }
  };
  CacheManager2.prototype.saveCacheRecord = function(cacheRecord) {
    return __awaiter2(this, void 0, void 0, function() {
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!cacheRecord) {
              throw ClientAuthError.createNullOrUndefinedCacheRecord();
            }
            if (!!cacheRecord.account) {
              this.setAccount(cacheRecord.account);
            }
            if (!!cacheRecord.idToken) {
              this.setIdTokenCredential(cacheRecord.idToken);
            }
            if (!!!cacheRecord.accessToken)
              return [3, 2];
            return [4, this.saveAccessToken(cacheRecord.accessToken)];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            if (!!cacheRecord.refreshToken) {
              this.setRefreshTokenCredential(cacheRecord.refreshToken);
            }
            if (!!cacheRecord.appMetadata) {
              this.setAppMetadata(cacheRecord.appMetadata);
            }
            return [2];
        }
      });
    });
  };
  CacheManager2.prototype.saveAccessToken = function(credential) {
    return __awaiter2(this, void 0, void 0, function() {
      var currentTokenCache, currentScopes, currentAccessTokens, removedAccessTokens_1;
      var _this = this;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            currentTokenCache = this.getCredentialsFilteredBy({
              clientId: credential.clientId,
              credentialType: credential.credentialType,
              environment: credential.environment,
              homeAccountId: credential.homeAccountId,
              realm: credential.realm,
              tokenType: credential.tokenType,
              requestedClaimsHash: credential.requestedClaimsHash
            });
            currentScopes = ScopeSet.fromString(credential.target);
            currentAccessTokens = Object.keys(currentTokenCache.accessTokens).map(function(key) {
              return currentTokenCache.accessTokens[key];
            });
            if (!currentAccessTokens)
              return [3, 2];
            removedAccessTokens_1 = [];
            currentAccessTokens.forEach(function(tokenEntity) {
              var tokenScopeSet = ScopeSet.fromString(tokenEntity.target);
              if (tokenScopeSet.intersectingScopeSets(currentScopes)) {
                removedAccessTokens_1.push(_this.removeCredential(tokenEntity));
              }
            });
            return [4, Promise.all(removedAccessTokens_1)];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            this.setAccessTokenCredential(credential);
            return [2];
        }
      });
    });
  };
  CacheManager2.prototype.getAccountsFilteredBy = function(accountFilter) {
    return this.getAccountsFilteredByInternal(accountFilter ? accountFilter.homeAccountId : Constants.EMPTY_STRING, accountFilter ? accountFilter.environment : Constants.EMPTY_STRING, accountFilter ? accountFilter.realm : Constants.EMPTY_STRING, accountFilter ? accountFilter.nativeAccountId : Constants.EMPTY_STRING);
  };
  CacheManager2.prototype.getAccountsFilteredByInternal = function(homeAccountId, environment, realm, nativeAccountId) {
    var _this = this;
    var allCacheKeys = this.getKeys();
    var matchingAccounts = {};
    allCacheKeys.forEach(function(cacheKey) {
      var entity = _this.getAccount(cacheKey);
      if (!entity) {
        return;
      }
      if (!!homeAccountId && !_this.matchHomeAccountId(entity, homeAccountId)) {
        return;
      }
      if (!!environment && !_this.matchEnvironment(entity, environment)) {
        return;
      }
      if (!!realm && !_this.matchRealm(entity, realm)) {
        return;
      }
      if (!!nativeAccountId && !_this.matchNativeAccountId(entity, nativeAccountId)) {
        return;
      }
      matchingAccounts[cacheKey] = entity;
    });
    return matchingAccounts;
  };
  CacheManager2.prototype.getCredentialsFilteredBy = function(filter) {
    return this.getCredentialsFilteredByInternal(filter.homeAccountId, filter.environment, filter.credentialType, filter.clientId, filter.familyId, filter.realm, filter.target, filter.userAssertionHash, filter.tokenType, filter.keyId, filter.requestedClaimsHash);
  };
  CacheManager2.prototype.getCredentialsFilteredByInternal = function(homeAccountId, environment, credentialType, clientId, familyId, realm, target, userAssertionHash, tokenType, keyId, requestedClaimsHash) {
    var _this = this;
    var allCacheKeys = this.getKeys();
    var matchingCredentials = {
      idTokens: {},
      accessTokens: {},
      refreshTokens: {}
    };
    allCacheKeys.forEach(function(cacheKey) {
      var credType = CredentialEntity.getCredentialType(cacheKey);
      if (credType === Constants.NOT_DEFINED) {
        return;
      }
      var entity = _this.getSpecificCredential(cacheKey, credType);
      if (!entity) {
        return;
      }
      if (!!userAssertionHash && !_this.matchUserAssertionHash(entity, userAssertionHash)) {
        return;
      }
      if (typeof homeAccountId === "string" && !_this.matchHomeAccountId(entity, homeAccountId)) {
        return;
      }
      if (!!environment && !_this.matchEnvironment(entity, environment)) {
        return;
      }
      if (!!realm && !_this.matchRealm(entity, realm)) {
        return;
      }
      if (!!credentialType && !_this.matchCredentialType(entity, credentialType)) {
        return;
      }
      if (!!clientId && !_this.matchClientId(entity, clientId)) {
        return;
      }
      if (!!familyId && !_this.matchFamilyId(entity, familyId)) {
        return;
      }
      if (!!target && !_this.matchTarget(entity, target)) {
        return;
      }
      if (requestedClaimsHash || entity.requestedClaimsHash) {
        if (entity.requestedClaimsHash !== requestedClaimsHash) {
          return;
        }
      }
      if (credentialType === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME) {
        if (!!tokenType && !_this.matchTokenType(entity, tokenType)) {
          return;
        }
        if (tokenType === AuthenticationScheme.SSH) {
          if (keyId && !_this.matchKeyId(entity, keyId)) {
            return;
          }
        }
      }
      var updatedCacheKey = _this.updateCredentialCacheKey(cacheKey, entity);
      switch (credType) {
        case CredentialType.ID_TOKEN:
          matchingCredentials.idTokens[updatedCacheKey] = entity;
          break;
        case CredentialType.ACCESS_TOKEN:
        case CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME:
          matchingCredentials.accessTokens[updatedCacheKey] = entity;
          break;
        case CredentialType.REFRESH_TOKEN:
          matchingCredentials.refreshTokens[updatedCacheKey] = entity;
          break;
      }
    });
    return matchingCredentials;
  };
  CacheManager2.prototype.getAppMetadataFilteredBy = function(filter) {
    return this.getAppMetadataFilteredByInternal(filter.environment, filter.clientId);
  };
  CacheManager2.prototype.getAppMetadataFilteredByInternal = function(environment, clientId) {
    var _this = this;
    var allCacheKeys = this.getKeys();
    var matchingAppMetadata = {};
    allCacheKeys.forEach(function(cacheKey) {
      if (!_this.isAppMetadata(cacheKey)) {
        return;
      }
      var entity = _this.getAppMetadata(cacheKey);
      if (!entity) {
        return;
      }
      if (!!environment && !_this.matchEnvironment(entity, environment)) {
        return;
      }
      if (!!clientId && !_this.matchClientId(entity, clientId)) {
        return;
      }
      matchingAppMetadata[cacheKey] = entity;
    });
    return matchingAppMetadata;
  };
  CacheManager2.prototype.getAuthorityMetadataByAlias = function(host) {
    var _this = this;
    var allCacheKeys = this.getAuthorityMetadataKeys();
    var matchedEntity = null;
    allCacheKeys.forEach(function(cacheKey) {
      if (!_this.isAuthorityMetadata(cacheKey) || cacheKey.indexOf(_this.clientId) === -1) {
        return;
      }
      var entity = _this.getAuthorityMetadata(cacheKey);
      if (!entity) {
        return;
      }
      if (entity.aliases.indexOf(host) === -1) {
        return;
      }
      matchedEntity = entity;
    });
    return matchedEntity;
  };
  CacheManager2.prototype.removeAllAccounts = function() {
    return __awaiter2(this, void 0, void 0, function() {
      var allCacheKeys, removedAccounts;
      var _this = this;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            allCacheKeys = this.getKeys();
            removedAccounts = [];
            allCacheKeys.forEach(function(cacheKey) {
              var entity = _this.getAccount(cacheKey);
              if (!entity) {
                return;
              }
              removedAccounts.push(_this.removeAccount(cacheKey));
            });
            return [4, Promise.all(removedAccounts)];
          case 1:
            _a.sent();
            return [2, true];
        }
      });
    });
  };
  CacheManager2.prototype.removeAccount = function(accountKey) {
    return __awaiter2(this, void 0, void 0, function() {
      var account;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            account = this.getAccount(accountKey);
            if (!account) {
              throw ClientAuthError.createNoAccountFoundError();
            }
            return [4, this.removeAccountContext(account)];
          case 1:
            return [2, _a.sent() && this.removeItem(accountKey, CacheSchemaType.ACCOUNT)];
        }
      });
    });
  };
  CacheManager2.prototype.removeAccountContext = function(account) {
    return __awaiter2(this, void 0, void 0, function() {
      var allCacheKeys, accountId, removedCredentials;
      var _this = this;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            allCacheKeys = this.getKeys();
            accountId = account.generateAccountId();
            removedCredentials = [];
            allCacheKeys.forEach(function(cacheKey) {
              var credType = CredentialEntity.getCredentialType(cacheKey);
              if (credType === Constants.NOT_DEFINED) {
                return;
              }
              var cacheEntity = _this.getSpecificCredential(cacheKey, credType);
              if (!!cacheEntity && accountId === cacheEntity.generateAccountId()) {
                removedCredentials.push(_this.removeCredential(cacheEntity));
              }
            });
            return [4, Promise.all(removedCredentials)];
          case 1:
            _a.sent();
            return [2, true];
        }
      });
    });
  };
  CacheManager2.prototype.removeCredential = function(credential) {
    return __awaiter2(this, void 0, void 0, function() {
      var key, accessTokenWithAuthSchemeEntity, kid;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            key = credential.generateCredentialKey();
            if (!(credential.credentialType.toLowerCase() === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()))
              return [3, 4];
            if (!(credential.tokenType === AuthenticationScheme.POP))
              return [3, 4];
            accessTokenWithAuthSchemeEntity = credential;
            kid = accessTokenWithAuthSchemeEntity.keyId;
            if (!kid)
              return [3, 4];
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            return [4, this.cryptoImpl.removeTokenBindingKey(kid)];
          case 2:
            _a.sent();
            return [3, 4];
          case 3:
            _a.sent();
            throw ClientAuthError.createBindingKeyNotRemovedError();
          case 4:
            return [2, this.removeItem(key, CacheSchemaType.CREDENTIAL)];
        }
      });
    });
  };
  CacheManager2.prototype.removeAppMetadata = function() {
    var _this = this;
    var allCacheKeys = this.getKeys();
    allCacheKeys.forEach(function(cacheKey) {
      if (_this.isAppMetadata(cacheKey)) {
        _this.removeItem(cacheKey, CacheSchemaType.APP_METADATA);
      }
    });
    return true;
  };
  CacheManager2.prototype.readCacheRecord = function(account, clientId, request, environment) {
    var cachedAccount = this.readAccountFromCache(account);
    var cachedIdToken = this.readIdTokenFromCache(clientId, account);
    var cachedAccessToken = this.readAccessTokenFromCache(clientId, account, request);
    var cachedRefreshToken = this.readRefreshTokenFromCache(clientId, account, false);
    var cachedAppMetadata = this.readAppMetadataFromCache(environment, clientId);
    if (cachedAccount && cachedIdToken) {
      cachedAccount.idTokenClaims = new AuthToken(cachedIdToken.secret, this.cryptoImpl).claims;
    }
    return {
      account: cachedAccount,
      idToken: cachedIdToken,
      accessToken: cachedAccessToken,
      refreshToken: cachedRefreshToken,
      appMetadata: cachedAppMetadata
    };
  };
  CacheManager2.prototype.readAccountFromCache = function(account) {
    var accountKey = AccountEntity.generateAccountCacheKey(account);
    return this.getAccount(accountKey);
  };
  CacheManager2.prototype.readAccountFromCacheWithNativeAccountId = function(nativeAccountId) {
    var accountFilter = {
      nativeAccountId
    };
    var accountCache = this.getAccountsFilteredBy(accountFilter);
    var accounts = Object.keys(accountCache).map(function(key) {
      return accountCache[key];
    });
    if (accounts.length < 1) {
      return null;
    } else if (accounts.length > 1) {
      throw ClientAuthError.createMultipleMatchingAccountsInCacheError();
    }
    return accountCache[0];
  };
  CacheManager2.prototype.readIdTokenFromCache = function(clientId, account) {
    var idTokenFilter = {
      homeAccountId: account.homeAccountId,
      environment: account.environment,
      credentialType: CredentialType.ID_TOKEN,
      clientId,
      realm: account.tenantId
    };
    var credentialCache = this.getCredentialsFilteredBy(idTokenFilter);
    var idTokens = Object.keys(credentialCache.idTokens).map(function(key) {
      return credentialCache.idTokens[key];
    });
    var numIdTokens = idTokens.length;
    if (numIdTokens < 1) {
      return null;
    } else if (numIdTokens > 1) {
      throw ClientAuthError.createMultipleMatchingTokensInCacheError();
    }
    return idTokens[0];
  };
  CacheManager2.prototype.readAccessTokenFromCache = function(clientId, account, request) {
    var scopes = new ScopeSet(request.scopes || []);
    var authScheme = request.authenticationScheme || AuthenticationScheme.BEARER;
    var credentialType = authScheme && authScheme.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase() ? CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME : CredentialType.ACCESS_TOKEN;
    var accessTokenFilter = {
      homeAccountId: account.homeAccountId,
      environment: account.environment,
      credentialType,
      clientId,
      realm: account.tenantId,
      target: scopes.printScopesLowerCase(),
      tokenType: authScheme,
      keyId: request.sshKid,
      requestedClaimsHash: request.requestedClaimsHash
    };
    var credentialCache = this.getCredentialsFilteredBy(accessTokenFilter);
    var accessTokens = Object.keys(credentialCache.accessTokens).map(function(key) {
      return credentialCache.accessTokens[key];
    });
    var numAccessTokens = accessTokens.length;
    if (numAccessTokens < 1) {
      return null;
    } else if (numAccessTokens > 1) {
      throw ClientAuthError.createMultipleMatchingTokensInCacheError();
    }
    return accessTokens[0];
  };
  CacheManager2.prototype.readRefreshTokenFromCache = function(clientId, account, familyRT) {
    var id = familyRT ? THE_FAMILY_ID : void 0;
    var refreshTokenFilter = {
      homeAccountId: account.homeAccountId,
      environment: account.environment,
      credentialType: CredentialType.REFRESH_TOKEN,
      clientId,
      familyId: id
    };
    var credentialCache = this.getCredentialsFilteredBy(refreshTokenFilter);
    var refreshTokens = Object.keys(credentialCache.refreshTokens).map(function(key) {
      return credentialCache.refreshTokens[key];
    });
    var numRefreshTokens = refreshTokens.length;
    if (numRefreshTokens < 1) {
      return null;
    }
    return refreshTokens[0];
  };
  CacheManager2.prototype.readAppMetadataFromCache = function(environment, clientId) {
    var appMetadataFilter = {
      environment,
      clientId
    };
    var appMetadata = this.getAppMetadataFilteredBy(appMetadataFilter);
    var appMetadataEntries = Object.keys(appMetadata).map(function(key) {
      return appMetadata[key];
    });
    var numAppMetadata = appMetadataEntries.length;
    if (numAppMetadata < 1) {
      return null;
    } else if (numAppMetadata > 1) {
      throw ClientAuthError.createMultipleMatchingAppMetadataInCacheError();
    }
    return appMetadataEntries[0];
  };
  CacheManager2.prototype.isAppMetadataFOCI = function(environment, clientId) {
    var appMetadata = this.readAppMetadataFromCache(environment, clientId);
    return !!(appMetadata && appMetadata.familyId === THE_FAMILY_ID);
  };
  CacheManager2.prototype.matchHomeAccountId = function(entity, homeAccountId) {
    return !!(typeof entity.homeAccountId === "string" && homeAccountId === entity.homeAccountId);
  };
  CacheManager2.prototype.matchUserAssertionHash = function(entity, userAssertionHash) {
    return !!(entity.userAssertionHash && userAssertionHash === entity.userAssertionHash);
  };
  CacheManager2.prototype.matchEnvironment = function(entity, environment) {
    var cloudMetadata = this.getAuthorityMetadataByAlias(environment);
    if (cloudMetadata && cloudMetadata.aliases.indexOf(entity.environment) > -1) {
      return true;
    }
    return false;
  };
  CacheManager2.prototype.matchCredentialType = function(entity, credentialType) {
    return entity.credentialType && credentialType.toLowerCase() === entity.credentialType.toLowerCase();
  };
  CacheManager2.prototype.matchClientId = function(entity, clientId) {
    return !!(entity.clientId && clientId === entity.clientId);
  };
  CacheManager2.prototype.matchFamilyId = function(entity, familyId) {
    return !!(entity.familyId && familyId === entity.familyId);
  };
  CacheManager2.prototype.matchRealm = function(entity, realm) {
    return !!(entity.realm && realm === entity.realm);
  };
  CacheManager2.prototype.matchNativeAccountId = function(entity, nativeAccountId) {
    return !!(entity.nativeAccountId && nativeAccountId === entity.nativeAccountId);
  };
  CacheManager2.prototype.matchTarget = function(entity, target) {
    var isNotAccessTokenCredential = entity.credentialType !== CredentialType.ACCESS_TOKEN && entity.credentialType !== CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME;
    if (isNotAccessTokenCredential || !entity.target) {
      return false;
    }
    var entityScopeSet = ScopeSet.fromString(entity.target);
    var requestTargetScopeSet = ScopeSet.fromString(target);
    if (!requestTargetScopeSet.containsOnlyOIDCScopes()) {
      requestTargetScopeSet.removeOIDCScopes();
    } else {
      requestTargetScopeSet.removeScope(Constants.OFFLINE_ACCESS_SCOPE);
    }
    return entityScopeSet.containsScopeSet(requestTargetScopeSet);
  };
  CacheManager2.prototype.matchTokenType = function(entity, tokenType) {
    return !!(entity.tokenType && entity.tokenType === tokenType);
  };
  CacheManager2.prototype.matchKeyId = function(entity, keyId) {
    return !!(entity.keyId && entity.keyId === keyId);
  };
  CacheManager2.prototype.isAppMetadata = function(key) {
    return key.indexOf(APP_METADATA) !== -1;
  };
  CacheManager2.prototype.isAuthorityMetadata = function(key) {
    return key.indexOf(AUTHORITY_METADATA_CONSTANTS.CACHE_KEY) !== -1;
  };
  CacheManager2.prototype.generateAuthorityMetadataCacheKey = function(authority) {
    return AUTHORITY_METADATA_CONSTANTS.CACHE_KEY + "-" + this.clientId + "-" + authority;
  };
  CacheManager2.prototype.getSpecificCredential = function(key, credType) {
    switch (credType) {
      case CredentialType.ID_TOKEN: {
        return this.getIdTokenCredential(key);
      }
      case CredentialType.ACCESS_TOKEN:
      case CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME: {
        return this.getAccessTokenCredential(key);
      }
      case CredentialType.REFRESH_TOKEN: {
        return this.getRefreshTokenCredential(key);
      }
      default:
        return null;
    }
  };
  CacheManager2.toObject = function(obj, json) {
    for (var propertyName in json) {
      obj[propertyName] = json[propertyName];
    }
    return obj;
  };
  return CacheManager2;
}();
var DefaultStorageClass = function(_super) {
  __extends2(DefaultStorageClass2, _super);
  function DefaultStorageClass2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  DefaultStorageClass2.prototype.setAccount = function() {
    var notImplErr = "Storage interface - setAccount() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.getAccount = function() {
    var notImplErr = "Storage interface - getAccount() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.setIdTokenCredential = function() {
    var notImplErr = "Storage interface - setIdTokenCredential() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.getIdTokenCredential = function() {
    var notImplErr = "Storage interface - getIdTokenCredential() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.setAccessTokenCredential = function() {
    var notImplErr = "Storage interface - setAccessTokenCredential() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.getAccessTokenCredential = function() {
    var notImplErr = "Storage interface - getAccessTokenCredential() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.setRefreshTokenCredential = function() {
    var notImplErr = "Storage interface - setRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.getRefreshTokenCredential = function() {
    var notImplErr = "Storage interface - getRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.setAppMetadata = function() {
    var notImplErr = "Storage interface - setAppMetadata() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.getAppMetadata = function() {
    var notImplErr = "Storage interface - getAppMetadata() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.setServerTelemetry = function() {
    var notImplErr = "Storage interface - setServerTelemetry() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.getServerTelemetry = function() {
    var notImplErr = "Storage interface - getServerTelemetry() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.setAuthorityMetadata = function() {
    var notImplErr = "Storage interface - setAuthorityMetadata() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.getAuthorityMetadata = function() {
    var notImplErr = "Storage interface - getAuthorityMetadata() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.getAuthorityMetadataKeys = function() {
    var notImplErr = "Storage interface - getAuthorityMetadataKeys() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.setThrottlingCache = function() {
    var notImplErr = "Storage interface - setThrottlingCache() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.getThrottlingCache = function() {
    var notImplErr = "Storage interface - getThrottlingCache() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.removeItem = function() {
    var notImplErr = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.containsKey = function() {
    var notImplErr = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.getKeys = function() {
    var notImplErr = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  DefaultStorageClass2.prototype.clear = function() {
    return __awaiter2(this, void 0, void 0, function() {
      var notImplErr;
      return __generator2(this, function(_a) {
        notImplErr = "Storage interface - clear() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
      });
    });
  };
  DefaultStorageClass2.prototype.updateCredentialCacheKey = function() {
    var notImplErr = "Storage interface - updateCredentialCacheKey() has not been implemented for the cacheStorage interface.";
    throw AuthError.createUnexpectedError(notImplErr);
  };
  return DefaultStorageClass2;
}(CacheManager);

// node_modules/@azure/msal-common/dist/config/ClientConfiguration.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var DEFAULT_TOKEN_RENEWAL_OFFSET_SEC = 300;
var DEFAULT_SYSTEM_OPTIONS = {
  tokenRenewalOffsetSeconds: DEFAULT_TOKEN_RENEWAL_OFFSET_SEC,
  preventCorsPreflight: false,
  proxyUrl: Constants.EMPTY_STRING
};
var DEFAULT_LOGGER_IMPLEMENTATION = {
  loggerCallback: function() {
  },
  piiLoggingEnabled: false,
  logLevel: LogLevel.Info,
  correlationId: Constants.EMPTY_STRING
};
var DEFAULT_NETWORK_IMPLEMENTATION = {
  sendGetRequestAsync: function() {
    return __awaiter2(this, void 0, void 0, function() {
      var notImplErr;
      return __generator2(this, function(_a) {
        notImplErr = "Network interface - sendGetRequestAsync() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
      });
    });
  },
  sendPostRequestAsync: function() {
    return __awaiter2(this, void 0, void 0, function() {
      var notImplErr;
      return __generator2(this, function(_a) {
        notImplErr = "Network interface - sendPostRequestAsync() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
      });
    });
  }
};
var DEFAULT_LIBRARY_INFO = {
  sku: Constants.SKU,
  version,
  cpu: Constants.EMPTY_STRING,
  os: Constants.EMPTY_STRING
};
var DEFAULT_CLIENT_CREDENTIALS = {
  clientSecret: Constants.EMPTY_STRING,
  clientAssertion: void 0
};
var DEFAULT_AZURE_CLOUD_OPTIONS = {
  azureCloudInstance: AzureCloudInstance.None,
  tenant: "" + Constants.DEFAULT_COMMON_TENANT
};
var DEFAULT_TELEMETRY_OPTIONS = {
  application: {
    appName: "",
    appVersion: ""
  }
};
function buildClientConfiguration(_a) {
  var userAuthOptions = _a.authOptions, userSystemOptions = _a.systemOptions, userLoggerOption = _a.loggerOptions, storageImplementation = _a.storageInterface, networkImplementation = _a.networkInterface, cryptoImplementation = _a.cryptoInterface, clientCredentials = _a.clientCredentials, libraryInfo = _a.libraryInfo, telemetry = _a.telemetry, serverTelemetryManager = _a.serverTelemetryManager, persistencePlugin = _a.persistencePlugin, serializableCache = _a.serializableCache;
  var loggerOptions = __assign2(__assign2({}, DEFAULT_LOGGER_IMPLEMENTATION), userLoggerOption);
  return {
    authOptions: buildAuthOptions(userAuthOptions),
    systemOptions: __assign2(__assign2({}, DEFAULT_SYSTEM_OPTIONS), userSystemOptions),
    loggerOptions,
    storageInterface: storageImplementation || new DefaultStorageClass(userAuthOptions.clientId, DEFAULT_CRYPTO_IMPLEMENTATION),
    networkInterface: networkImplementation || DEFAULT_NETWORK_IMPLEMENTATION,
    cryptoInterface: cryptoImplementation || DEFAULT_CRYPTO_IMPLEMENTATION,
    clientCredentials: clientCredentials || DEFAULT_CLIENT_CREDENTIALS,
    libraryInfo: __assign2(__assign2({}, DEFAULT_LIBRARY_INFO), libraryInfo),
    telemetry: __assign2(__assign2({}, DEFAULT_TELEMETRY_OPTIONS), telemetry),
    serverTelemetryManager: serverTelemetryManager || null,
    persistencePlugin: persistencePlugin || null,
    serializableCache: serializableCache || null
  };
}
function buildAuthOptions(authOptions) {
  return __assign2({clientCapabilities: [], azureCloudOptions: DEFAULT_AZURE_CLOUD_OPTIONS, skipAuthorityMetadataCache: false}, authOptions);
}

// node_modules/@azure/msal-common/dist/error/ServerError.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var ServerError = function(_super) {
  __extends2(ServerError2, _super);
  function ServerError2(errorCode, errorMessage, subError) {
    var _this = _super.call(this, errorCode, errorMessage, subError) || this;
    _this.name = "ServerError";
    Object.setPrototypeOf(_this, ServerError2.prototype);
    return _this;
  }
  return ServerError2;
}(AuthError);

// node_modules/@azure/msal-common/dist/network/ThrottlingUtils.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var ThrottlingUtils = function() {
  function ThrottlingUtils2() {
  }
  ThrottlingUtils2.generateThrottlingStorageKey = function(thumbprint) {
    return ThrottlingConstants.THROTTLING_PREFIX + "." + JSON.stringify(thumbprint);
  };
  ThrottlingUtils2.preProcess = function(cacheManager, thumbprint) {
    var _a;
    var key = ThrottlingUtils2.generateThrottlingStorageKey(thumbprint);
    var value = cacheManager.getThrottlingCache(key);
    if (value) {
      if (value.throttleTime < Date.now()) {
        cacheManager.removeItem(key, CacheSchemaType.THROTTLING);
        return;
      }
      throw new ServerError(((_a = value.errorCodes) === null || _a === void 0 ? void 0 : _a.join(" ")) || Constants.EMPTY_STRING, value.errorMessage, value.subError);
    }
  };
  ThrottlingUtils2.postProcess = function(cacheManager, thumbprint, response) {
    if (ThrottlingUtils2.checkResponseStatus(response) || ThrottlingUtils2.checkResponseForRetryAfter(response)) {
      var thumbprintValue = {
        throttleTime: ThrottlingUtils2.calculateThrottleTime(parseInt(response.headers[HeaderNames.RETRY_AFTER])),
        error: response.body.error,
        errorCodes: response.body.error_codes,
        errorMessage: response.body.error_description,
        subError: response.body.suberror
      };
      cacheManager.setThrottlingCache(ThrottlingUtils2.generateThrottlingStorageKey(thumbprint), thumbprintValue);
    }
  };
  ThrottlingUtils2.checkResponseStatus = function(response) {
    return response.status === 429 || response.status >= 500 && response.status < 600;
  };
  ThrottlingUtils2.checkResponseForRetryAfter = function(response) {
    if (response.headers) {
      return response.headers.hasOwnProperty(HeaderNames.RETRY_AFTER) && (response.status < 200 || response.status >= 300);
    }
    return false;
  };
  ThrottlingUtils2.calculateThrottleTime = function(throttleTime) {
    var time = throttleTime <= 0 ? 0 : throttleTime;
    var currentSeconds = Date.now() / 1e3;
    return Math.floor(Math.min(currentSeconds + (time || ThrottlingConstants.DEFAULT_THROTTLE_TIME_SECONDS), currentSeconds + ThrottlingConstants.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1e3);
  };
  ThrottlingUtils2.removeThrottle = function(cacheManager, clientId, request, homeAccountIdentifier) {
    var thumbprint = {
      clientId,
      authority: request.authority,
      scopes: request.scopes,
      homeAccountIdentifier,
      claims: request.claims,
      authenticationScheme: request.authenticationScheme,
      resourceRequestMethod: request.resourceRequestMethod,
      resourceRequestUri: request.resourceRequestUri,
      shrClaims: request.shrClaims,
      sshKid: request.sshKid
    };
    var key = this.generateThrottlingStorageKey(thumbprint);
    return cacheManager.removeItem(key, CacheSchemaType.THROTTLING);
  };
  return ThrottlingUtils2;
}();

// node_modules/@azure/msal-common/dist/network/NetworkManager.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var NetworkManager = function() {
  function NetworkManager2(networkClient, cacheManager) {
    this.networkClient = networkClient;
    this.cacheManager = cacheManager;
  }
  NetworkManager2.prototype.sendPostRequest = function(thumbprint, tokenEndpoint, options) {
    return __awaiter2(this, void 0, void 0, function() {
      var response, e_1;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            ThrottlingUtils.preProcess(this.cacheManager, thumbprint);
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            return [4, this.networkClient.sendPostRequestAsync(tokenEndpoint, options)];
          case 2:
            response = _a.sent();
            return [3, 4];
          case 3:
            e_1 = _a.sent();
            if (e_1 instanceof AuthError) {
              throw e_1;
            } else {
              throw ClientAuthError.createNetworkError(tokenEndpoint, e_1);
            }
          case 4:
            ThrottlingUtils.postProcess(this.cacheManager, thumbprint, response);
            return [2, response];
        }
      });
    });
  };
  return NetworkManager2;
}();

// node_modules/@azure/msal-common/dist/account/CcsCredential.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var CcsCredentialType;
(function(CcsCredentialType2) {
  CcsCredentialType2["HOME_ACCOUNT_ID"] = "home_account_id";
  CcsCredentialType2["UPN"] = "UPN";
})(CcsCredentialType || (CcsCredentialType = {}));

// node_modules/@azure/msal-common/dist/client/BaseClient.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var BaseClient = function() {
  function BaseClient2(configuration, performanceClient) {
    this.config = buildClientConfiguration(configuration);
    this.logger = new Logger(this.config.loggerOptions, name, version);
    this.cryptoUtils = this.config.cryptoInterface;
    this.cacheManager = this.config.storageInterface;
    this.networkClient = this.config.networkInterface;
    this.networkManager = new NetworkManager(this.networkClient, this.cacheManager);
    this.serverTelemetryManager = this.config.serverTelemetryManager;
    this.authority = this.config.authOptions.authority;
    this.performanceClient = performanceClient;
  }
  BaseClient2.prototype.createTokenRequestHeaders = function(ccsCred) {
    var headers = {};
    headers[HeaderNames.CONTENT_TYPE] = Constants.URL_FORM_CONTENT_TYPE;
    if (!this.config.systemOptions.preventCorsPreflight && ccsCred) {
      switch (ccsCred.type) {
        case CcsCredentialType.HOME_ACCOUNT_ID:
          try {
            var clientInfo = buildClientInfoFromHomeAccountId(ccsCred.credential);
            headers[HeaderNames.CCS_HEADER] = "Oid:" + clientInfo.uid + "@" + clientInfo.utid;
          } catch (e) {
            this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
          }
          break;
        case CcsCredentialType.UPN:
          headers[HeaderNames.CCS_HEADER] = "UPN: " + ccsCred.credential;
          break;
      }
    }
    return headers;
  };
  BaseClient2.prototype.executePostToTokenEndpoint = function(tokenEndpoint, queryString, headers, thumbprint) {
    return __awaiter2(this, void 0, void 0, function() {
      var response;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.networkManager.sendPostRequest(thumbprint, tokenEndpoint, {body: queryString, headers, proxyUrl: this.config.systemOptions.proxyUrl})];
          case 1:
            response = _a.sent();
            if (this.config.serverTelemetryManager && response.status < 500 && response.status !== 429) {
              this.config.serverTelemetryManager.clearTelemetryCache();
            }
            return [2, response];
        }
      });
    });
  };
  BaseClient2.prototype.updateAuthority = function(updatedAuthority) {
    if (!updatedAuthority.discoveryComplete()) {
      throw ClientAuthError.createEndpointDiscoveryIncompleteError("Updated authority has not completed endpoint discovery.");
    }
    this.authority = updatedAuthority;
  };
  return BaseClient2;
}();

// node_modules/@azure/msal-common/dist/request/RequestValidator.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var RequestValidator = function() {
  function RequestValidator2() {
  }
  RequestValidator2.validateRedirectUri = function(redirectUri) {
    if (StringUtils.isEmpty(redirectUri)) {
      throw ClientConfigurationError.createRedirectUriEmptyError();
    }
  };
  RequestValidator2.validatePrompt = function(prompt) {
    var promptValues = [];
    for (var value in PromptValue) {
      promptValues.push(PromptValue[value]);
    }
    if (promptValues.indexOf(prompt) < 0) {
      throw ClientConfigurationError.createInvalidPromptError(prompt);
    }
  };
  RequestValidator2.validateClaims = function(claims) {
    try {
      JSON.parse(claims);
    } catch (e) {
      throw ClientConfigurationError.createInvalidClaimsRequestError();
    }
  };
  RequestValidator2.validateCodeChallengeParams = function(codeChallenge, codeChallengeMethod) {
    if (StringUtils.isEmpty(codeChallenge) || StringUtils.isEmpty(codeChallengeMethod)) {
      throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
    } else {
      this.validateCodeChallengeMethod(codeChallengeMethod);
    }
  };
  RequestValidator2.validateCodeChallengeMethod = function(codeChallengeMethod) {
    if ([
      CodeChallengeMethodValues.PLAIN,
      CodeChallengeMethodValues.S256
    ].indexOf(codeChallengeMethod) < 0) {
      throw ClientConfigurationError.createInvalidCodeChallengeMethodError();
    }
  };
  RequestValidator2.sanitizeEQParams = function(eQParams, queryParams) {
    if (!eQParams) {
      return {};
    }
    queryParams.forEach(function(value, key) {
      if (eQParams[key]) {
        delete eQParams[key];
      }
    });
    return eQParams;
  };
  return RequestValidator2;
}();

// node_modules/@azure/msal-common/dist/request/RequestParameterBuilder.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var RequestParameterBuilder = function() {
  function RequestParameterBuilder2() {
    this.parameters = new Map();
  }
  RequestParameterBuilder2.prototype.addResponseTypeCode = function() {
    this.parameters.set(AADServerParamKeys.RESPONSE_TYPE, encodeURIComponent(Constants.CODE_RESPONSE_TYPE));
  };
  RequestParameterBuilder2.prototype.addResponseTypeForTokenAndIdToken = function() {
    this.parameters.set(AADServerParamKeys.RESPONSE_TYPE, encodeURIComponent(Constants.TOKEN_RESPONSE_TYPE + " " + Constants.ID_TOKEN_RESPONSE_TYPE));
  };
  RequestParameterBuilder2.prototype.addResponseMode = function(responseMode) {
    this.parameters.set(AADServerParamKeys.RESPONSE_MODE, encodeURIComponent(responseMode ? responseMode : ResponseMode.QUERY));
  };
  RequestParameterBuilder2.prototype.addNativeBroker = function() {
    this.parameters.set(AADServerParamKeys.NATIVE_BROKER, encodeURIComponent("1"));
  };
  RequestParameterBuilder2.prototype.addScopes = function(scopes, addOidcScopes) {
    if (addOidcScopes === void 0) {
      addOidcScopes = true;
    }
    var requestScopes = addOidcScopes ? __spreadArrays(scopes || [], OIDC_DEFAULT_SCOPES) : scopes || [];
    var scopeSet = new ScopeSet(requestScopes);
    this.parameters.set(AADServerParamKeys.SCOPE, encodeURIComponent(scopeSet.printScopes()));
  };
  RequestParameterBuilder2.prototype.addClientId = function(clientId) {
    this.parameters.set(AADServerParamKeys.CLIENT_ID, encodeURIComponent(clientId));
  };
  RequestParameterBuilder2.prototype.addRedirectUri = function(redirectUri) {
    RequestValidator.validateRedirectUri(redirectUri);
    this.parameters.set(AADServerParamKeys.REDIRECT_URI, encodeURIComponent(redirectUri));
  };
  RequestParameterBuilder2.prototype.addPostLogoutRedirectUri = function(redirectUri) {
    RequestValidator.validateRedirectUri(redirectUri);
    this.parameters.set(AADServerParamKeys.POST_LOGOUT_URI, encodeURIComponent(redirectUri));
  };
  RequestParameterBuilder2.prototype.addIdTokenHint = function(idTokenHint) {
    this.parameters.set(AADServerParamKeys.ID_TOKEN_HINT, encodeURIComponent(idTokenHint));
  };
  RequestParameterBuilder2.prototype.addDomainHint = function(domainHint) {
    this.parameters.set(SSOTypes.DOMAIN_HINT, encodeURIComponent(domainHint));
  };
  RequestParameterBuilder2.prototype.addLoginHint = function(loginHint) {
    this.parameters.set(SSOTypes.LOGIN_HINT, encodeURIComponent(loginHint));
  };
  RequestParameterBuilder2.prototype.addCcsUpn = function(loginHint) {
    this.parameters.set(HeaderNames.CCS_HEADER, encodeURIComponent("UPN:" + loginHint));
  };
  RequestParameterBuilder2.prototype.addCcsOid = function(clientInfo) {
    this.parameters.set(HeaderNames.CCS_HEADER, encodeURIComponent("Oid:" + clientInfo.uid + "@" + clientInfo.utid));
  };
  RequestParameterBuilder2.prototype.addSid = function(sid) {
    this.parameters.set(SSOTypes.SID, encodeURIComponent(sid));
  };
  RequestParameterBuilder2.prototype.addClaims = function(claims, clientCapabilities) {
    var mergedClaims = this.addClientCapabilitiesToClaims(claims, clientCapabilities);
    RequestValidator.validateClaims(mergedClaims);
    this.parameters.set(AADServerParamKeys.CLAIMS, encodeURIComponent(mergedClaims));
  };
  RequestParameterBuilder2.prototype.addCorrelationId = function(correlationId) {
    this.parameters.set(AADServerParamKeys.CLIENT_REQUEST_ID, encodeURIComponent(correlationId));
  };
  RequestParameterBuilder2.prototype.addLibraryInfo = function(libraryInfo) {
    this.parameters.set(AADServerParamKeys.X_CLIENT_SKU, libraryInfo.sku);
    this.parameters.set(AADServerParamKeys.X_CLIENT_VER, libraryInfo.version);
    if (libraryInfo.os) {
      this.parameters.set(AADServerParamKeys.X_CLIENT_OS, libraryInfo.os);
    }
    if (libraryInfo.cpu) {
      this.parameters.set(AADServerParamKeys.X_CLIENT_CPU, libraryInfo.cpu);
    }
  };
  RequestParameterBuilder2.prototype.addApplicationTelemetry = function(appTelemetry) {
    if (appTelemetry === null || appTelemetry === void 0 ? void 0 : appTelemetry.appName) {
      this.parameters.set(AADServerParamKeys.X_APP_NAME, appTelemetry.appName);
    }
    if (appTelemetry === null || appTelemetry === void 0 ? void 0 : appTelemetry.appVersion) {
      this.parameters.set(AADServerParamKeys.X_APP_VER, appTelemetry.appVersion);
    }
  };
  RequestParameterBuilder2.prototype.addPrompt = function(prompt) {
    RequestValidator.validatePrompt(prompt);
    this.parameters.set("" + AADServerParamKeys.PROMPT, encodeURIComponent(prompt));
  };
  RequestParameterBuilder2.prototype.addState = function(state) {
    if (!StringUtils.isEmpty(state)) {
      this.parameters.set(AADServerParamKeys.STATE, encodeURIComponent(state));
    }
  };
  RequestParameterBuilder2.prototype.addNonce = function(nonce) {
    this.parameters.set(AADServerParamKeys.NONCE, encodeURIComponent(nonce));
  };
  RequestParameterBuilder2.prototype.addCodeChallengeParams = function(codeChallenge, codeChallengeMethod) {
    RequestValidator.validateCodeChallengeParams(codeChallenge, codeChallengeMethod);
    if (codeChallenge && codeChallengeMethod) {
      this.parameters.set(AADServerParamKeys.CODE_CHALLENGE, encodeURIComponent(codeChallenge));
      this.parameters.set(AADServerParamKeys.CODE_CHALLENGE_METHOD, encodeURIComponent(codeChallengeMethod));
    } else {
      throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
    }
  };
  RequestParameterBuilder2.prototype.addAuthorizationCode = function(code) {
    this.parameters.set(AADServerParamKeys.CODE, encodeURIComponent(code));
  };
  RequestParameterBuilder2.prototype.addDeviceCode = function(code) {
    this.parameters.set(AADServerParamKeys.DEVICE_CODE, encodeURIComponent(code));
  };
  RequestParameterBuilder2.prototype.addRefreshToken = function(refreshToken) {
    this.parameters.set(AADServerParamKeys.REFRESH_TOKEN, encodeURIComponent(refreshToken));
  };
  RequestParameterBuilder2.prototype.addCodeVerifier = function(codeVerifier) {
    this.parameters.set(AADServerParamKeys.CODE_VERIFIER, encodeURIComponent(codeVerifier));
  };
  RequestParameterBuilder2.prototype.addClientSecret = function(clientSecret) {
    this.parameters.set(AADServerParamKeys.CLIENT_SECRET, encodeURIComponent(clientSecret));
  };
  RequestParameterBuilder2.prototype.addClientAssertion = function(clientAssertion) {
    if (!StringUtils.isEmpty(clientAssertion)) {
      this.parameters.set(AADServerParamKeys.CLIENT_ASSERTION, encodeURIComponent(clientAssertion));
    }
  };
  RequestParameterBuilder2.prototype.addClientAssertionType = function(clientAssertionType) {
    if (!StringUtils.isEmpty(clientAssertionType)) {
      this.parameters.set(AADServerParamKeys.CLIENT_ASSERTION_TYPE, encodeURIComponent(clientAssertionType));
    }
  };
  RequestParameterBuilder2.prototype.addOboAssertion = function(oboAssertion) {
    this.parameters.set(AADServerParamKeys.OBO_ASSERTION, encodeURIComponent(oboAssertion));
  };
  RequestParameterBuilder2.prototype.addRequestTokenUse = function(tokenUse) {
    this.parameters.set(AADServerParamKeys.REQUESTED_TOKEN_USE, encodeURIComponent(tokenUse));
  };
  RequestParameterBuilder2.prototype.addGrantType = function(grantType) {
    this.parameters.set(AADServerParamKeys.GRANT_TYPE, encodeURIComponent(grantType));
  };
  RequestParameterBuilder2.prototype.addClientInfo = function() {
    this.parameters.set(CLIENT_INFO, "1");
  };
  RequestParameterBuilder2.prototype.addExtraQueryParameters = function(eQparams) {
    var _this = this;
    RequestValidator.sanitizeEQParams(eQparams, this.parameters);
    Object.keys(eQparams).forEach(function(key) {
      _this.parameters.set(key, eQparams[key]);
    });
  };
  RequestParameterBuilder2.prototype.addClientCapabilitiesToClaims = function(claims, clientCapabilities) {
    var mergedClaims;
    if (!claims) {
      mergedClaims = {};
    } else {
      try {
        mergedClaims = JSON.parse(claims);
      } catch (e) {
        throw ClientConfigurationError.createInvalidClaimsRequestError();
      }
    }
    if (clientCapabilities && clientCapabilities.length > 0) {
      if (!mergedClaims.hasOwnProperty(ClaimsRequestKeys.ACCESS_TOKEN)) {
        mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN] = {};
      }
      mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN][ClaimsRequestKeys.XMS_CC] = {
        values: clientCapabilities
      };
    }
    return JSON.stringify(mergedClaims);
  };
  RequestParameterBuilder2.prototype.addUsername = function(username) {
    this.parameters.set(PasswordGrantConstants.username, encodeURIComponent(username));
  };
  RequestParameterBuilder2.prototype.addPassword = function(password) {
    this.parameters.set(PasswordGrantConstants.password, encodeURIComponent(password));
  };
  RequestParameterBuilder2.prototype.addPopToken = function(cnfString) {
    if (!StringUtils.isEmpty(cnfString)) {
      this.parameters.set(AADServerParamKeys.TOKEN_TYPE, AuthenticationScheme.POP);
      this.parameters.set(AADServerParamKeys.REQ_CNF, encodeURIComponent(cnfString));
    }
  };
  RequestParameterBuilder2.prototype.addSshJwk = function(sshJwkString) {
    if (!StringUtils.isEmpty(sshJwkString)) {
      this.parameters.set(AADServerParamKeys.TOKEN_TYPE, AuthenticationScheme.SSH);
      this.parameters.set(AADServerParamKeys.REQ_CNF, encodeURIComponent(sshJwkString));
    }
  };
  RequestParameterBuilder2.prototype.addServerTelemetry = function(serverTelemetryManager) {
    this.parameters.set(AADServerParamKeys.X_CLIENT_CURR_TELEM, serverTelemetryManager.generateCurrentRequestHeaderValue());
    this.parameters.set(AADServerParamKeys.X_CLIENT_LAST_TELEM, serverTelemetryManager.generateLastRequestHeaderValue());
  };
  RequestParameterBuilder2.prototype.addThrottling = function() {
    this.parameters.set(AADServerParamKeys.X_MS_LIB_CAPABILITY, ThrottlingConstants.X_MS_LIB_CAPABILITY_VALUE);
  };
  RequestParameterBuilder2.prototype.addLogoutHint = function(logoutHint) {
    this.parameters.set(AADServerParamKeys.LOGOUT_HINT, encodeURIComponent(logoutHint));
  };
  RequestParameterBuilder2.prototype.createQueryString = function() {
    var queryParameterArray = new Array();
    this.parameters.forEach(function(value, key) {
      queryParameterArray.push(key + "=" + value);
    });
    return queryParameterArray.join("&");
  };
  return RequestParameterBuilder2;
}();

// node_modules/@azure/msal-common/dist/cache/entities/IdTokenEntity.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var IdTokenEntity = function(_super) {
  __extends2(IdTokenEntity2, _super);
  function IdTokenEntity2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  IdTokenEntity2.createIdTokenEntity = function(homeAccountId, environment, idToken, clientId, tenantId) {
    var idTokenEntity = new IdTokenEntity2();
    idTokenEntity.credentialType = CredentialType.ID_TOKEN;
    idTokenEntity.homeAccountId = homeAccountId;
    idTokenEntity.environment = environment;
    idTokenEntity.clientId = clientId;
    idTokenEntity.secret = idToken;
    idTokenEntity.realm = tenantId;
    return idTokenEntity;
  };
  IdTokenEntity2.isIdTokenEntity = function(entity) {
    if (!entity) {
      return false;
    }
    return entity.hasOwnProperty("homeAccountId") && entity.hasOwnProperty("environment") && entity.hasOwnProperty("credentialType") && entity.hasOwnProperty("realm") && entity.hasOwnProperty("clientId") && entity.hasOwnProperty("secret") && entity["credentialType"] === CredentialType.ID_TOKEN;
  };
  return IdTokenEntity2;
}(CredentialEntity);

// node_modules/@azure/msal-common/dist/utils/TimeUtils.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var TimeUtils = function() {
  function TimeUtils2() {
  }
  TimeUtils2.nowSeconds = function() {
    return Math.round(new Date().getTime() / 1e3);
  };
  TimeUtils2.isTokenExpired = function(expiresOn, offset) {
    var expirationSec = Number(expiresOn) || 0;
    var offsetCurrentTimeSec = TimeUtils2.nowSeconds() + offset;
    return offsetCurrentTimeSec > expirationSec;
  };
  TimeUtils2.wasClockTurnedBack = function(cachedAt) {
    var cachedAtSec = Number(cachedAt);
    return cachedAtSec > TimeUtils2.nowSeconds();
  };
  TimeUtils2.delay = function(t, value) {
    return new Promise(function(resolve) {
      return setTimeout(function() {
        return resolve(value);
      }, t);
    });
  };
  return TimeUtils2;
}();

// node_modules/@azure/msal-common/dist/cache/entities/AccessTokenEntity.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var AccessTokenEntity = function(_super) {
  __extends2(AccessTokenEntity2, _super);
  function AccessTokenEntity2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AccessTokenEntity2.createAccessTokenEntity = function(homeAccountId, environment, accessToken, clientId, tenantId, scopes, expiresOn, extExpiresOn, cryptoUtils, refreshOn, tokenType, userAssertionHash, keyId, requestedClaims, requestedClaimsHash) {
    var _a, _b;
    var atEntity = new AccessTokenEntity2();
    atEntity.homeAccountId = homeAccountId;
    atEntity.credentialType = CredentialType.ACCESS_TOKEN;
    atEntity.secret = accessToken;
    var currentTime = TimeUtils.nowSeconds();
    atEntity.cachedAt = currentTime.toString();
    atEntity.expiresOn = expiresOn.toString();
    atEntity.extendedExpiresOn = extExpiresOn.toString();
    if (refreshOn) {
      atEntity.refreshOn = refreshOn.toString();
    }
    atEntity.environment = environment;
    atEntity.clientId = clientId;
    atEntity.realm = tenantId;
    atEntity.target = scopes;
    atEntity.userAssertionHash = userAssertionHash;
    atEntity.tokenType = StringUtils.isEmpty(tokenType) ? AuthenticationScheme.BEARER : tokenType;
    if (requestedClaims) {
      atEntity.requestedClaims = requestedClaims;
      atEntity.requestedClaimsHash = requestedClaimsHash;
    }
    if (((_a = atEntity.tokenType) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== AuthenticationScheme.BEARER.toLowerCase()) {
      atEntity.credentialType = CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME;
      switch (atEntity.tokenType) {
        case AuthenticationScheme.POP:
          var tokenClaims = AuthToken.extractTokenClaims(accessToken, cryptoUtils);
          if (!((_b = tokenClaims === null || tokenClaims === void 0 ? void 0 : tokenClaims.cnf) === null || _b === void 0 ? void 0 : _b.kid)) {
            throw ClientAuthError.createTokenClaimsRequiredError();
          }
          atEntity.keyId = tokenClaims.cnf.kid;
          break;
        case AuthenticationScheme.SSH:
          atEntity.keyId = keyId;
      }
    }
    return atEntity;
  };
  AccessTokenEntity2.isAccessTokenEntity = function(entity) {
    if (!entity) {
      return false;
    }
    return entity.hasOwnProperty("homeAccountId") && entity.hasOwnProperty("environment") && entity.hasOwnProperty("credentialType") && entity.hasOwnProperty("realm") && entity.hasOwnProperty("clientId") && entity.hasOwnProperty("secret") && entity.hasOwnProperty("target") && (entity["credentialType"] === CredentialType.ACCESS_TOKEN || entity["credentialType"] === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME);
  };
  return AccessTokenEntity2;
}(CredentialEntity);

// node_modules/@azure/msal-common/dist/cache/entities/RefreshTokenEntity.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var RefreshTokenEntity = function(_super) {
  __extends2(RefreshTokenEntity2, _super);
  function RefreshTokenEntity2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  RefreshTokenEntity2.createRefreshTokenEntity = function(homeAccountId, environment, refreshToken, clientId, familyId, userAssertionHash) {
    var rtEntity = new RefreshTokenEntity2();
    rtEntity.clientId = clientId;
    rtEntity.credentialType = CredentialType.REFRESH_TOKEN;
    rtEntity.environment = environment;
    rtEntity.homeAccountId = homeAccountId;
    rtEntity.secret = refreshToken;
    rtEntity.userAssertionHash = userAssertionHash;
    if (familyId)
      rtEntity.familyId = familyId;
    return rtEntity;
  };
  RefreshTokenEntity2.isRefreshTokenEntity = function(entity) {
    if (!entity) {
      return false;
    }
    return entity.hasOwnProperty("homeAccountId") && entity.hasOwnProperty("environment") && entity.hasOwnProperty("credentialType") && entity.hasOwnProperty("clientId") && entity.hasOwnProperty("secret") && entity["credentialType"] === CredentialType.REFRESH_TOKEN;
  };
  return RefreshTokenEntity2;
}(CredentialEntity);

// node_modules/@azure/msal-common/dist/error/InteractionRequiredAuthError.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var InteractionRequiredServerErrorMessage = [
  "interaction_required",
  "consent_required",
  "login_required"
];
var InteractionRequiredAuthSubErrorMessage = [
  "message_only",
  "additional_action",
  "basic_action",
  "user_password_expired",
  "consent_required"
];
var InteractionRequiredAuthErrorMessage = {
  noTokensFoundError: {
    code: "no_tokens_found",
    desc: "No refresh token found in the cache. Please sign-in."
  },
  native_account_unavailable: {
    code: "native_account_unavailable",
    desc: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API."
  }
};
var InteractionRequiredAuthError = function(_super) {
  __extends2(InteractionRequiredAuthError2, _super);
  function InteractionRequiredAuthError2(errorCode, errorMessage, subError) {
    var _this = _super.call(this, errorCode, errorMessage, subError) || this;
    _this.name = "InteractionRequiredAuthError";
    Object.setPrototypeOf(_this, InteractionRequiredAuthError2.prototype);
    return _this;
  }
  InteractionRequiredAuthError2.isInteractionRequiredError = function(errorCode, errorString, subError) {
    var isInteractionRequiredErrorCode = !!errorCode && InteractionRequiredServerErrorMessage.indexOf(errorCode) > -1;
    var isInteractionRequiredSubError = !!subError && InteractionRequiredAuthSubErrorMessage.indexOf(subError) > -1;
    var isInteractionRequiredErrorDesc = !!errorString && InteractionRequiredServerErrorMessage.some(function(irErrorCode) {
      return errorString.indexOf(irErrorCode) > -1;
    });
    return isInteractionRequiredErrorCode || isInteractionRequiredErrorDesc || isInteractionRequiredSubError;
  };
  InteractionRequiredAuthError2.createNoTokensFoundError = function() {
    return new InteractionRequiredAuthError2(InteractionRequiredAuthErrorMessage.noTokensFoundError.code, InteractionRequiredAuthErrorMessage.noTokensFoundError.desc);
  };
  InteractionRequiredAuthError2.createNativeAccountUnavailableError = function() {
    return new InteractionRequiredAuthError2(InteractionRequiredAuthErrorMessage.native_account_unavailable.code, InteractionRequiredAuthErrorMessage.native_account_unavailable.desc);
  };
  return InteractionRequiredAuthError2;
}(AuthError);

// node_modules/@azure/msal-common/dist/cache/entities/CacheRecord.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var CacheRecord = function() {
  function CacheRecord2(accountEntity, idTokenEntity, accessTokenEntity, refreshTokenEntity, appMetadataEntity) {
    this.account = accountEntity || null;
    this.idToken = idTokenEntity || null;
    this.accessToken = accessTokenEntity || null;
    this.refreshToken = refreshTokenEntity || null;
    this.appMetadata = appMetadataEntity || null;
  }
  return CacheRecord2;
}();

// node_modules/@azure/msal-common/dist/utils/ProtocolUtils.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var ProtocolUtils = function() {
  function ProtocolUtils2() {
  }
  ProtocolUtils2.setRequestState = function(cryptoObj, userState, meta) {
    var libraryState = ProtocolUtils2.generateLibraryState(cryptoObj, meta);
    return !StringUtils.isEmpty(userState) ? "" + libraryState + Constants.RESOURCE_DELIM + userState : libraryState;
  };
  ProtocolUtils2.generateLibraryState = function(cryptoObj, meta) {
    if (!cryptoObj) {
      throw ClientAuthError.createNoCryptoObjectError("generateLibraryState");
    }
    var stateObj = {
      id: cryptoObj.createNewGuid()
    };
    if (meta) {
      stateObj.meta = meta;
    }
    var stateString = JSON.stringify(stateObj);
    return cryptoObj.base64Encode(stateString);
  };
  ProtocolUtils2.parseRequestState = function(cryptoObj, state) {
    if (!cryptoObj) {
      throw ClientAuthError.createNoCryptoObjectError("parseRequestState");
    }
    if (StringUtils.isEmpty(state)) {
      throw ClientAuthError.createInvalidStateError(state, "Null, undefined or empty state");
    }
    try {
      var splitState = state.split(Constants.RESOURCE_DELIM);
      var libraryState = splitState[0];
      var userState = splitState.length > 1 ? splitState.slice(1).join(Constants.RESOURCE_DELIM) : Constants.EMPTY_STRING;
      var libraryStateString = cryptoObj.base64Decode(libraryState);
      var libraryStateObj = JSON.parse(libraryStateString);
      return {
        userRequestState: !StringUtils.isEmpty(userState) ? userState : Constants.EMPTY_STRING,
        libraryState: libraryStateObj
      };
    } catch (e) {
      throw ClientAuthError.createInvalidStateError(state, e);
    }
  };
  return ProtocolUtils2;
}();

// node_modules/@azure/msal-common/dist/url/UrlString.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var UrlString = function() {
  function UrlString2(url) {
    this._urlString = url;
    if (StringUtils.isEmpty(this._urlString)) {
      throw ClientConfigurationError.createUrlEmptyError();
    }
    if (StringUtils.isEmpty(this.getHash())) {
      this._urlString = UrlString2.canonicalizeUri(url);
    }
  }
  Object.defineProperty(UrlString2.prototype, "urlString", {
    get: function() {
      return this._urlString;
    },
    enumerable: false,
    configurable: true
  });
  UrlString2.canonicalizeUri = function(url) {
    if (url) {
      var lowerCaseUrl = url.toLowerCase();
      if (StringUtils.endsWith(lowerCaseUrl, "?")) {
        lowerCaseUrl = lowerCaseUrl.slice(0, -1);
      } else if (StringUtils.endsWith(lowerCaseUrl, "?/")) {
        lowerCaseUrl = lowerCaseUrl.slice(0, -2);
      }
      if (!StringUtils.endsWith(lowerCaseUrl, "/")) {
        lowerCaseUrl += "/";
      }
      return lowerCaseUrl;
    }
    return url;
  };
  UrlString2.prototype.validateAsUri = function() {
    var components;
    try {
      components = this.getUrlComponents();
    } catch (e) {
      throw ClientConfigurationError.createUrlParseError(e);
    }
    if (!components.HostNameAndPort || !components.PathSegments) {
      throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
    }
    if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
      throw ClientConfigurationError.createInsecureAuthorityUriError(this.urlString);
    }
  };
  UrlString2.appendQueryString = function(url, queryString) {
    if (StringUtils.isEmpty(queryString)) {
      return url;
    }
    return url.indexOf("?") < 0 ? url + "?" + queryString : url + "&" + queryString;
  };
  UrlString2.removeHashFromUrl = function(url) {
    return UrlString2.canonicalizeUri(url.split("#")[0]);
  };
  UrlString2.prototype.replaceTenantPath = function(tenantId) {
    var urlObject = this.getUrlComponents();
    var pathArray = urlObject.PathSegments;
    if (tenantId && (pathArray.length !== 0 && (pathArray[0] === AADAuthorityConstants.COMMON || pathArray[0] === AADAuthorityConstants.ORGANIZATIONS))) {
      pathArray[0] = tenantId;
    }
    return UrlString2.constructAuthorityUriFromObject(urlObject);
  };
  UrlString2.prototype.getHash = function() {
    return UrlString2.parseHash(this.urlString);
  };
  UrlString2.prototype.getUrlComponents = function() {
    var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
    var match = this.urlString.match(regEx);
    if (!match) {
      throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
    }
    var urlComponents = {
      Protocol: match[1],
      HostNameAndPort: match[4],
      AbsolutePath: match[5],
      QueryString: match[7]
    };
    var pathSegments = urlComponents.AbsolutePath.split("/");
    pathSegments = pathSegments.filter(function(val) {
      return val && val.length > 0;
    });
    urlComponents.PathSegments = pathSegments;
    if (!StringUtils.isEmpty(urlComponents.QueryString) && urlComponents.QueryString.endsWith("/")) {
      urlComponents.QueryString = urlComponents.QueryString.substring(0, urlComponents.QueryString.length - 1);
    }
    return urlComponents;
  };
  UrlString2.getDomainFromUrl = function(url) {
    var regEx = RegExp("^([^:/?#]+://)?([^/?#]*)");
    var match = url.match(regEx);
    if (!match) {
      throw ClientConfigurationError.createUrlParseError("Given url string: " + url);
    }
    return match[2];
  };
  UrlString2.getAbsoluteUrl = function(relativeUrl, baseUrl) {
    if (relativeUrl[0] === Constants.FORWARD_SLASH) {
      var url = new UrlString2(baseUrl);
      var baseComponents = url.getUrlComponents();
      return baseComponents.Protocol + "//" + baseComponents.HostNameAndPort + relativeUrl;
    }
    return relativeUrl;
  };
  UrlString2.parseHash = function(hashString) {
    var hashIndex1 = hashString.indexOf("#");
    var hashIndex2 = hashString.indexOf("#/");
    if (hashIndex2 > -1) {
      return hashString.substring(hashIndex2 + 2);
    } else if (hashIndex1 > -1) {
      return hashString.substring(hashIndex1 + 1);
    }
    return Constants.EMPTY_STRING;
  };
  UrlString2.parseQueryString = function(queryString) {
    var queryIndex1 = queryString.indexOf("?");
    var queryIndex2 = queryString.indexOf("/?");
    if (queryIndex2 > -1) {
      return queryString.substring(queryIndex2 + 2);
    } else if (queryIndex1 > -1) {
      return queryString.substring(queryIndex1 + 1);
    }
    return Constants.EMPTY_STRING;
  };
  UrlString2.constructAuthorityUriFromObject = function(urlObject) {
    return new UrlString2(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + urlObject.PathSegments.join("/"));
  };
  UrlString2.getDeserializedHash = function(hash) {
    if (StringUtils.isEmpty(hash)) {
      return {};
    }
    var parsedHash = UrlString2.parseHash(hash);
    var deserializedHash = StringUtils.queryStringToObject(StringUtils.isEmpty(parsedHash) ? hash : parsedHash);
    if (!deserializedHash) {
      throw ClientAuthError.createHashNotDeserializedError(JSON.stringify(deserializedHash));
    }
    return deserializedHash;
  };
  UrlString2.getDeserializedQueryString = function(query) {
    if (StringUtils.isEmpty(query)) {
      return {};
    }
    var parsedQueryString = UrlString2.parseQueryString(query);
    var deserializedQueryString = StringUtils.queryStringToObject(StringUtils.isEmpty(parsedQueryString) ? query : parsedQueryString);
    if (!deserializedQueryString) {
      throw ClientAuthError.createHashNotDeserializedError(JSON.stringify(deserializedQueryString));
    }
    return deserializedQueryString;
  };
  UrlString2.hashContainsKnownProperties = function(hash) {
    if (StringUtils.isEmpty(hash) || hash.indexOf("=") < 0) {
      return false;
    }
    var parameters = UrlString2.getDeserializedHash(hash);
    return !!(parameters.code || parameters.error_description || parameters.error || parameters.state);
  };
  return UrlString2;
}();

// node_modules/@azure/msal-common/dist/crypto/PopTokenGenerator.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var KeyLocation;
(function(KeyLocation2) {
  KeyLocation2["SW"] = "sw";
  KeyLocation2["UHW"] = "uhw";
})(KeyLocation || (KeyLocation = {}));
var PopTokenGenerator = function() {
  function PopTokenGenerator2(cryptoUtils) {
    this.cryptoUtils = cryptoUtils;
  }
  PopTokenGenerator2.prototype.generateCnf = function(request) {
    return __awaiter2(this, void 0, void 0, function() {
      var reqCnf, reqCnfString, _a;
      return __generator2(this, function(_b) {
        switch (_b.label) {
          case 0:
            return [4, this.generateKid(request)];
          case 1:
            reqCnf = _b.sent();
            reqCnfString = this.cryptoUtils.base64Encode(JSON.stringify(reqCnf));
            _a = {
              kid: reqCnf.kid,
              reqCnfString
            };
            return [4, this.cryptoUtils.hashString(reqCnfString)];
          case 2:
            return [2, (_a.reqCnfHash = _b.sent(), _a)];
        }
      });
    });
  };
  PopTokenGenerator2.prototype.generateKid = function(request) {
    return __awaiter2(this, void 0, void 0, function() {
      var kidThumbprint;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.cryptoUtils.getPublicKeyThumbprint(request)];
          case 1:
            kidThumbprint = _a.sent();
            return [2, {
              kid: kidThumbprint,
              xms_ksl: KeyLocation.SW
            }];
        }
      });
    });
  };
  PopTokenGenerator2.prototype.signPopToken = function(accessToken, keyId, request) {
    return __awaiter2(this, void 0, void 0, function() {
      return __generator2(this, function(_a) {
        return [2, this.signPayload(accessToken, keyId, request)];
      });
    });
  };
  PopTokenGenerator2.prototype.signPayload = function(payload, keyId, request, claims) {
    return __awaiter2(this, void 0, void 0, function() {
      var resourceRequestMethod, resourceRequestUri, shrClaims, shrNonce, resourceUrlString, resourceUrlComponents;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            resourceRequestMethod = request.resourceRequestMethod, resourceRequestUri = request.resourceRequestUri, shrClaims = request.shrClaims, shrNonce = request.shrNonce;
            resourceUrlString = resourceRequestUri ? new UrlString(resourceRequestUri) : void 0;
            resourceUrlComponents = resourceUrlString === null || resourceUrlString === void 0 ? void 0 : resourceUrlString.getUrlComponents();
            return [4, this.cryptoUtils.signJwt(__assign2({at: payload, ts: TimeUtils.nowSeconds(), m: resourceRequestMethod === null || resourceRequestMethod === void 0 ? void 0 : resourceRequestMethod.toUpperCase(), u: resourceUrlComponents === null || resourceUrlComponents === void 0 ? void 0 : resourceUrlComponents.HostNameAndPort, nonce: shrNonce || this.cryptoUtils.createNewGuid(), p: resourceUrlComponents === null || resourceUrlComponents === void 0 ? void 0 : resourceUrlComponents.AbsolutePath, q: (resourceUrlComponents === null || resourceUrlComponents === void 0 ? void 0 : resourceUrlComponents.QueryString) ? [[], resourceUrlComponents.QueryString] : void 0, client_claims: shrClaims || void 0}, claims), keyId, request.correlationId)];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  return PopTokenGenerator2;
}();

// node_modules/@azure/msal-common/dist/cache/entities/AppMetadataEntity.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var AppMetadataEntity = function() {
  function AppMetadataEntity2() {
  }
  AppMetadataEntity2.prototype.generateAppMetadataKey = function() {
    return AppMetadataEntity2.generateAppMetadataCacheKey(this.environment, this.clientId);
  };
  AppMetadataEntity2.generateAppMetadataCacheKey = function(environment, clientId) {
    var appMetaDataKeyArray = [
      APP_METADATA,
      environment,
      clientId
    ];
    return appMetaDataKeyArray.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
  };
  AppMetadataEntity2.createAppMetadataEntity = function(clientId, environment, familyId) {
    var appMetadata = new AppMetadataEntity2();
    appMetadata.clientId = clientId;
    appMetadata.environment = environment;
    if (familyId) {
      appMetadata.familyId = familyId;
    }
    return appMetadata;
  };
  AppMetadataEntity2.isAppMetadataEntity = function(key, entity) {
    if (!entity) {
      return false;
    }
    return key.indexOf(APP_METADATA) === 0 && entity.hasOwnProperty("clientId") && entity.hasOwnProperty("environment");
  };
  return AppMetadataEntity2;
}();

// node_modules/@azure/msal-common/dist/cache/persistence/TokenCacheContext.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var TokenCacheContext = function() {
  function TokenCacheContext2(tokenCache, hasChanged) {
    this.cache = tokenCache;
    this.hasChanged = hasChanged;
  }
  Object.defineProperty(TokenCacheContext2.prototype, "cacheHasChanged", {
    get: function() {
      return this.hasChanged;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TokenCacheContext2.prototype, "tokenCache", {
    get: function() {
      return this.cache;
    },
    enumerable: false,
    configurable: true
  });
  return TokenCacheContext2;
}();

// node_modules/@azure/msal-common/dist/response/ResponseHandler.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var ResponseHandler = function() {
  function ResponseHandler2(clientId, cacheStorage, cryptoObj, logger, serializableCache, persistencePlugin) {
    this.clientId = clientId;
    this.cacheStorage = cacheStorage;
    this.cryptoObj = cryptoObj;
    this.logger = logger;
    this.serializableCache = serializableCache;
    this.persistencePlugin = persistencePlugin;
  }
  ResponseHandler2.prototype.validateServerAuthorizationCodeResponse = function(serverResponseHash, cachedState, cryptoObj) {
    if (!serverResponseHash.state || !cachedState) {
      throw !serverResponseHash.state ? ClientAuthError.createStateNotFoundError("Server State") : ClientAuthError.createStateNotFoundError("Cached State");
    }
    if (decodeURIComponent(serverResponseHash.state) !== decodeURIComponent(cachedState)) {
      throw ClientAuthError.createStateMismatchError();
    }
    if (serverResponseHash.error || serverResponseHash.error_description || serverResponseHash.suberror) {
      if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponseHash.error, serverResponseHash.error_description, serverResponseHash.suberror)) {
        throw new InteractionRequiredAuthError(serverResponseHash.error || Constants.EMPTY_STRING, serverResponseHash.error_description, serverResponseHash.suberror);
      }
      throw new ServerError(serverResponseHash.error || Constants.EMPTY_STRING, serverResponseHash.error_description, serverResponseHash.suberror);
    }
    if (serverResponseHash.client_info) {
      buildClientInfo(serverResponseHash.client_info, cryptoObj);
    }
  };
  ResponseHandler2.prototype.validateTokenResponse = function(serverResponse) {
    if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
      if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) {
        throw new InteractionRequiredAuthError(serverResponse.error, serverResponse.error_description, serverResponse.suberror);
      }
      var errString = serverResponse.error_codes + " - [" + serverResponse.timestamp + "]: " + serverResponse.error_description + " - Correlation ID: " + serverResponse.correlation_id + " - Trace ID: " + serverResponse.trace_id;
      throw new ServerError(serverResponse.error, errString, serverResponse.suberror);
    }
  };
  ResponseHandler2.prototype.handleServerTokenResponse = function(serverTokenResponse, authority, reqTimestamp, request, authCodePayload, userAssertionHash, handlingRefreshTokenResponse, forceCacheRefreshTokenResponse, serverRequestId) {
    return __awaiter2(this, void 0, void 0, function() {
      var idTokenObj, authTime, requestStateObj, cacheRecord, cacheContext, key, account;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (serverTokenResponse.id_token) {
              idTokenObj = new AuthToken(serverTokenResponse.id_token || Constants.EMPTY_STRING, this.cryptoObj);
              if (authCodePayload && !StringUtils.isEmpty(authCodePayload.nonce)) {
                if (idTokenObj.claims.nonce !== authCodePayload.nonce) {
                  throw ClientAuthError.createNonceMismatchError();
                }
              }
              if (request.maxAge || request.maxAge === 0) {
                authTime = idTokenObj.claims.auth_time;
                if (!authTime) {
                  throw ClientAuthError.createAuthTimeNotFoundError();
                }
                AuthToken.checkMaxAge(authTime, request.maxAge);
              }
            }
            this.homeAccountIdentifier = AccountEntity.generateHomeAccountId(serverTokenResponse.client_info || Constants.EMPTY_STRING, authority.authorityType, this.logger, this.cryptoObj, idTokenObj);
            if (!!authCodePayload && !!authCodePayload.state) {
              requestStateObj = ProtocolUtils.parseRequestState(this.cryptoObj, authCodePayload.state);
            }
            serverTokenResponse.key_id = serverTokenResponse.key_id || request.sshKid || void 0;
            cacheRecord = this.generateCacheRecord(serverTokenResponse, authority, reqTimestamp, request, idTokenObj, userAssertionHash, authCodePayload);
            _a.label = 1;
          case 1:
            _a.trys.push([1, , 5, 8]);
            if (!(this.persistencePlugin && this.serializableCache))
              return [3, 3];
            this.logger.verbose("Persistence enabled, calling beforeCacheAccess");
            cacheContext = new TokenCacheContext(this.serializableCache, true);
            return [4, this.persistencePlugin.beforeCacheAccess(cacheContext)];
          case 2:
            _a.sent();
            _a.label = 3;
          case 3:
            if (handlingRefreshTokenResponse && !forceCacheRefreshTokenResponse && cacheRecord.account) {
              key = cacheRecord.account.generateAccountKey();
              account = this.cacheStorage.getAccount(key);
              if (!account) {
                this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache");
                return [2, ResponseHandler2.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, request, idTokenObj, requestStateObj, void 0, serverRequestId)];
              }
            }
            return [4, this.cacheStorage.saveCacheRecord(cacheRecord)];
          case 4:
            _a.sent();
            return [3, 8];
          case 5:
            if (!(this.persistencePlugin && this.serializableCache && cacheContext))
              return [3, 7];
            this.logger.verbose("Persistence enabled, calling afterCacheAccess");
            return [4, this.persistencePlugin.afterCacheAccess(cacheContext)];
          case 6:
            _a.sent();
            _a.label = 7;
          case 7:
            return [7];
          case 8:
            return [2, ResponseHandler2.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, request, idTokenObj, requestStateObj, serverTokenResponse.spa_code, serverRequestId)];
        }
      });
    });
  };
  ResponseHandler2.prototype.generateCacheRecord = function(serverTokenResponse, authority, reqTimestamp, request, idTokenObj, userAssertionHash, authCodePayload) {
    var env = authority.getPreferredCache();
    if (StringUtils.isEmpty(env)) {
      throw ClientAuthError.createInvalidCacheEnvironmentError();
    }
    var cachedIdToken;
    var cachedAccount;
    if (!StringUtils.isEmpty(serverTokenResponse.id_token) && !!idTokenObj) {
      cachedIdToken = IdTokenEntity.createIdTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.id_token || Constants.EMPTY_STRING, this.clientId, idTokenObj.claims.tid || Constants.EMPTY_STRING);
      cachedAccount = this.generateAccountEntity(serverTokenResponse, idTokenObj, authority, authCodePayload);
    }
    var cachedAccessToken = null;
    if (!StringUtils.isEmpty(serverTokenResponse.access_token)) {
      var responseScopes = serverTokenResponse.scope ? ScopeSet.fromString(serverTokenResponse.scope) : new ScopeSet(request.scopes || []);
      var expiresIn = (typeof serverTokenResponse.expires_in === "string" ? parseInt(serverTokenResponse.expires_in, 10) : serverTokenResponse.expires_in) || 0;
      var extExpiresIn = (typeof serverTokenResponse.ext_expires_in === "string" ? parseInt(serverTokenResponse.ext_expires_in, 10) : serverTokenResponse.ext_expires_in) || 0;
      var refreshIn = (typeof serverTokenResponse.refresh_in === "string" ? parseInt(serverTokenResponse.refresh_in, 10) : serverTokenResponse.refresh_in) || void 0;
      var tokenExpirationSeconds = reqTimestamp + expiresIn;
      var extendedTokenExpirationSeconds = tokenExpirationSeconds + extExpiresIn;
      var refreshOnSeconds = refreshIn && refreshIn > 0 ? reqTimestamp + refreshIn : void 0;
      cachedAccessToken = AccessTokenEntity.createAccessTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.access_token || Constants.EMPTY_STRING, this.clientId, idTokenObj ? idTokenObj.claims.tid || Constants.EMPTY_STRING : authority.tenant, responseScopes.printScopes(), tokenExpirationSeconds, extendedTokenExpirationSeconds, this.cryptoObj, refreshOnSeconds, serverTokenResponse.token_type, userAssertionHash, serverTokenResponse.key_id, request.claims, request.requestedClaimsHash);
    }
    var cachedRefreshToken = null;
    if (!StringUtils.isEmpty(serverTokenResponse.refresh_token)) {
      cachedRefreshToken = RefreshTokenEntity.createRefreshTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.refresh_token || Constants.EMPTY_STRING, this.clientId, serverTokenResponse.foci, userAssertionHash);
    }
    var cachedAppMetadata = null;
    if (!StringUtils.isEmpty(serverTokenResponse.foci)) {
      cachedAppMetadata = AppMetadataEntity.createAppMetadataEntity(this.clientId, env, serverTokenResponse.foci);
    }
    return new CacheRecord(cachedAccount, cachedIdToken, cachedAccessToken, cachedRefreshToken, cachedAppMetadata);
  };
  ResponseHandler2.prototype.generateAccountEntity = function(serverTokenResponse, idToken, authority, authCodePayload) {
    var authorityType = authority.authorityType;
    var cloudGraphHostName = authCodePayload ? authCodePayload.cloud_graph_host_name : Constants.EMPTY_STRING;
    var msGraphhost = authCodePayload ? authCodePayload.msgraph_host : Constants.EMPTY_STRING;
    if (authorityType === AuthorityType.Adfs) {
      this.logger.verbose("Authority type is ADFS, creating ADFS account");
      return AccountEntity.createGenericAccount(this.homeAccountIdentifier, idToken, authority, cloudGraphHostName, msGraphhost);
    }
    if (StringUtils.isEmpty(serverTokenResponse.client_info) && authority.protocolMode === "AAD") {
      throw ClientAuthError.createClientInfoEmptyError();
    }
    return serverTokenResponse.client_info ? AccountEntity.createAccount(serverTokenResponse.client_info, this.homeAccountIdentifier, idToken, authority, cloudGraphHostName, msGraphhost) : AccountEntity.createGenericAccount(this.homeAccountIdentifier, idToken, authority, cloudGraphHostName, msGraphhost);
  };
  ResponseHandler2.generateAuthenticationResult = function(cryptoObj, authority, cacheRecord, fromTokenCache, request, idTokenObj, requestState, code, requestId) {
    var _a, _b, _c;
    return __awaiter2(this, void 0, void 0, function() {
      var accessToken, responseScopes, expiresOn, extExpiresOn, familyId, popTokenGenerator, _d, secret, keyId, uid, tid;
      return __generator2(this, function(_e) {
        switch (_e.label) {
          case 0:
            accessToken = Constants.EMPTY_STRING;
            responseScopes = [];
            expiresOn = null;
            familyId = Constants.EMPTY_STRING;
            if (!cacheRecord.accessToken)
              return [3, 4];
            if (!(cacheRecord.accessToken.tokenType === AuthenticationScheme.POP))
              return [3, 2];
            popTokenGenerator = new PopTokenGenerator(cryptoObj);
            _d = cacheRecord.accessToken, secret = _d.secret, keyId = _d.keyId;
            if (!keyId) {
              throw ClientAuthError.createKeyIdMissingError();
            }
            return [4, popTokenGenerator.signPopToken(secret, keyId, request)];
          case 1:
            accessToken = _e.sent();
            return [3, 3];
          case 2:
            accessToken = cacheRecord.accessToken.secret;
            _e.label = 3;
          case 3:
            responseScopes = ScopeSet.fromString(cacheRecord.accessToken.target).asArray();
            expiresOn = new Date(Number(cacheRecord.accessToken.expiresOn) * 1e3);
            extExpiresOn = new Date(Number(cacheRecord.accessToken.extendedExpiresOn) * 1e3);
            _e.label = 4;
          case 4:
            if (cacheRecord.appMetadata) {
              familyId = cacheRecord.appMetadata.familyId === THE_FAMILY_ID ? THE_FAMILY_ID : Constants.EMPTY_STRING;
            }
            uid = (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.oid) || (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.sub) || Constants.EMPTY_STRING;
            tid = (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.tid) || Constants.EMPTY_STRING;
            return [2, {
              authority: authority.canonicalAuthority,
              uniqueId: uid,
              tenantId: tid,
              scopes: responseScopes,
              account: cacheRecord.account ? cacheRecord.account.getAccountInfo() : null,
              idToken: idTokenObj ? idTokenObj.rawToken : Constants.EMPTY_STRING,
              idTokenClaims: idTokenObj ? idTokenObj.claims : {},
              accessToken,
              fromCache: fromTokenCache,
              expiresOn,
              correlationId: request.correlationId,
              requestId: requestId || Constants.EMPTY_STRING,
              extExpiresOn,
              familyId,
              tokenType: ((_a = cacheRecord.accessToken) === null || _a === void 0 ? void 0 : _a.tokenType) || Constants.EMPTY_STRING,
              state: requestState ? requestState.userRequestState : Constants.EMPTY_STRING,
              cloudGraphHostName: ((_b = cacheRecord.account) === null || _b === void 0 ? void 0 : _b.cloudGraphHostName) || Constants.EMPTY_STRING,
              msGraphHost: ((_c = cacheRecord.account) === null || _c === void 0 ? void 0 : _c.msGraphHost) || Constants.EMPTY_STRING,
              code,
              fromNativeBroker: false
            }];
        }
      });
    });
  };
  return ResponseHandler2;
}();

// node_modules/@azure/msal-common/dist/client/AuthorizationCodeClient.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var AuthorizationCodeClient = function(_super) {
  __extends2(AuthorizationCodeClient2, _super);
  function AuthorizationCodeClient2(configuration) {
    var _this = _super.call(this, configuration) || this;
    _this.includeRedirectUri = true;
    return _this;
  }
  AuthorizationCodeClient2.prototype.getAuthCodeUrl = function(request) {
    return __awaiter2(this, void 0, void 0, function() {
      var queryString;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.createAuthCodeUrlQueryString(request)];
          case 1:
            queryString = _a.sent();
            return [2, UrlString.appendQueryString(this.authority.authorizationEndpoint, queryString)];
        }
      });
    });
  };
  AuthorizationCodeClient2.prototype.acquireToken = function(request, authCodePayload) {
    var _a;
    return __awaiter2(this, void 0, void 0, function() {
      var reqTimestamp, response, requestId, responseHandler;
      return __generator2(this, function(_b) {
        switch (_b.label) {
          case 0:
            this.logger.info("in acquireToken call");
            if (!request || StringUtils.isEmpty(request.code)) {
              throw ClientAuthError.createTokenRequestCannotBeMadeError();
            }
            reqTimestamp = TimeUtils.nowSeconds();
            return [4, this.executeTokenRequest(this.authority, request)];
          case 1:
            response = _b.sent();
            requestId = (_a = response.headers) === null || _a === void 0 ? void 0 : _a[HeaderNames.X_MS_REQUEST_ID];
            responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
            responseHandler.validateTokenResponse(response.body);
            return [4, responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request, authCodePayload, void 0, void 0, void 0, requestId)];
          case 2:
            return [2, _b.sent()];
        }
      });
    });
  };
  AuthorizationCodeClient2.prototype.handleFragmentResponse = function(hashFragment, cachedState) {
    var responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null);
    var hashUrlString = new UrlString(hashFragment);
    var serverParams = UrlString.getDeserializedHash(hashUrlString.getHash());
    responseHandler.validateServerAuthorizationCodeResponse(serverParams, cachedState, this.cryptoUtils);
    if (!serverParams.code) {
      throw ClientAuthError.createNoAuthCodeInServerResponseError();
    }
    return __assign2(__assign2({}, serverParams), {
      code: serverParams.code
    });
  };
  AuthorizationCodeClient2.prototype.getLogoutUri = function(logoutRequest) {
    if (!logoutRequest) {
      throw ClientConfigurationError.createEmptyLogoutRequestError();
    }
    var queryString = this.createLogoutUrlQueryString(logoutRequest);
    return UrlString.appendQueryString(this.authority.endSessionEndpoint, queryString);
  };
  AuthorizationCodeClient2.prototype.executeTokenRequest = function(authority, request) {
    return __awaiter2(this, void 0, void 0, function() {
      var thumbprint, requestBody, queryParameters, ccsCredential, clientInfo, headers, endpoint;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            thumbprint = {
              clientId: this.config.authOptions.clientId,
              authority: authority.canonicalAuthority,
              scopes: request.scopes,
              claims: request.claims,
              authenticationScheme: request.authenticationScheme,
              resourceRequestMethod: request.resourceRequestMethod,
              resourceRequestUri: request.resourceRequestUri,
              shrClaims: request.shrClaims,
              sshKid: request.sshKid
            };
            return [4, this.createTokenRequestBody(request)];
          case 1:
            requestBody = _a.sent();
            queryParameters = this.createTokenQueryParameters(request);
            ccsCredential = void 0;
            if (request.clientInfo) {
              try {
                clientInfo = buildClientInfo(request.clientInfo, this.cryptoUtils);
                ccsCredential = {
                  credential: "" + clientInfo.uid + Separators.CLIENT_INFO_SEPARATOR + clientInfo.utid,
                  type: CcsCredentialType.HOME_ACCOUNT_ID
                };
              } catch (e) {
                this.logger.verbose("Could not parse client info for CCS Header: " + e);
              }
            }
            headers = this.createTokenRequestHeaders(ccsCredential || request.ccsCredential);
            endpoint = StringUtils.isEmpty(queryParameters) ? authority.tokenEndpoint : authority.tokenEndpoint + "?" + queryParameters;
            return [2, this.executePostToTokenEndpoint(endpoint, requestBody, headers, thumbprint)];
        }
      });
    });
  };
  AuthorizationCodeClient2.prototype.createTokenQueryParameters = function(request) {
    var parameterBuilder = new RequestParameterBuilder();
    if (request.tokenQueryParameters) {
      parameterBuilder.addExtraQueryParameters(request.tokenQueryParameters);
    }
    return parameterBuilder.createQueryString();
  };
  AuthorizationCodeClient2.prototype.createTokenRequestBody = function(request) {
    return __awaiter2(this, void 0, void 0, function() {
      var parameterBuilder, clientAssertion, popTokenGenerator, reqCnfData, correlationId, ccsCred, clientInfo, clientInfo;
      var _a;
      return __generator2(this, function(_b) {
        switch (_b.label) {
          case 0:
            parameterBuilder = new RequestParameterBuilder();
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            if (!this.includeRedirectUri) {
              RequestValidator.validateRedirectUri(request.redirectUri);
            } else {
              parameterBuilder.addRedirectUri(request.redirectUri);
            }
            parameterBuilder.addScopes(request.scopes);
            parameterBuilder.addAuthorizationCode(request.code);
            parameterBuilder.addLibraryInfo(this.config.libraryInfo);
            parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
            parameterBuilder.addThrottling();
            if (this.serverTelemetryManager) {
              parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
            }
            if (request.codeVerifier) {
              parameterBuilder.addCodeVerifier(request.codeVerifier);
            }
            if (this.config.clientCredentials.clientSecret) {
              parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
            }
            if (this.config.clientCredentials.clientAssertion) {
              clientAssertion = this.config.clientCredentials.clientAssertion;
              parameterBuilder.addClientAssertion(clientAssertion.assertion);
              parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
            }
            parameterBuilder.addGrantType(GrantType.AUTHORIZATION_CODE_GRANT);
            parameterBuilder.addClientInfo();
            if (!(request.authenticationScheme === AuthenticationScheme.POP))
              return [3, 2];
            popTokenGenerator = new PopTokenGenerator(this.cryptoUtils);
            return [4, popTokenGenerator.generateCnf(request)];
          case 1:
            reqCnfData = _b.sent();
            parameterBuilder.addPopToken(reqCnfData.reqCnfString);
            return [3, 3];
          case 2:
            if (request.authenticationScheme === AuthenticationScheme.SSH) {
              if (request.sshJwk) {
                parameterBuilder.addSshJwk(request.sshJwk);
              } else {
                throw ClientConfigurationError.createMissingSshJwkError();
              }
            }
            _b.label = 3;
          case 3:
            correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
            parameterBuilder.addCorrelationId(correlationId);
            if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
              parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
            }
            ccsCred = void 0;
            if (request.clientInfo) {
              try {
                clientInfo = buildClientInfo(request.clientInfo, this.cryptoUtils);
                ccsCred = {
                  credential: "" + clientInfo.uid + Separators.CLIENT_INFO_SEPARATOR + clientInfo.utid,
                  type: CcsCredentialType.HOME_ACCOUNT_ID
                };
              } catch (e) {
                this.logger.verbose("Could not parse client info for CCS Header: " + e);
              }
            } else {
              ccsCred = request.ccsCredential;
            }
            if (this.config.systemOptions.preventCorsPreflight && ccsCred) {
              switch (ccsCred.type) {
                case CcsCredentialType.HOME_ACCOUNT_ID:
                  try {
                    clientInfo = buildClientInfoFromHomeAccountId(ccsCred.credential);
                    parameterBuilder.addCcsOid(clientInfo);
                  } catch (e) {
                    this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
                  }
                  break;
                case CcsCredentialType.UPN:
                  parameterBuilder.addCcsUpn(ccsCred.credential);
                  break;
              }
            }
            if (request.tokenBodyParameters) {
              parameterBuilder.addExtraQueryParameters(request.tokenBodyParameters);
            }
            if (request.enableSpaAuthorizationCode && (!request.tokenBodyParameters || !request.tokenBodyParameters[AADServerParamKeys.RETURN_SPA_CODE])) {
              parameterBuilder.addExtraQueryParameters((_a = {}, _a[AADServerParamKeys.RETURN_SPA_CODE] = "1", _a));
            }
            return [2, parameterBuilder.createQueryString()];
        }
      });
    });
  };
  AuthorizationCodeClient2.prototype.createAuthCodeUrlQueryString = function(request) {
    return __awaiter2(this, void 0, void 0, function() {
      var parameterBuilder, requestScopes, correlationId, accountSid, accountLoginHintClaim, clientInfo, clientInfo, clientInfo, popTokenGenerator, reqCnfData;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            parameterBuilder = new RequestParameterBuilder();
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            requestScopes = __spreadArrays(request.scopes || [], request.extraScopesToConsent || []);
            parameterBuilder.addScopes(requestScopes);
            parameterBuilder.addRedirectUri(request.redirectUri);
            correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
            parameterBuilder.addCorrelationId(correlationId);
            parameterBuilder.addResponseMode(request.responseMode);
            parameterBuilder.addResponseTypeCode();
            parameterBuilder.addLibraryInfo(this.config.libraryInfo);
            parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
            parameterBuilder.addClientInfo();
            if (request.codeChallenge && request.codeChallengeMethod) {
              parameterBuilder.addCodeChallengeParams(request.codeChallenge, request.codeChallengeMethod);
            }
            if (request.prompt) {
              parameterBuilder.addPrompt(request.prompt);
            }
            if (request.domainHint) {
              parameterBuilder.addDomainHint(request.domainHint);
            }
            if (request.prompt !== PromptValue.SELECT_ACCOUNT) {
              if (request.sid && request.prompt === PromptValue.NONE) {
                this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request");
                parameterBuilder.addSid(request.sid);
              } else if (request.account) {
                accountSid = this.extractAccountSid(request.account);
                accountLoginHintClaim = this.extractLoginHint(request.account);
                if (accountLoginHintClaim) {
                  this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account");
                  parameterBuilder.addLoginHint(accountLoginHintClaim);
                  try {
                    clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
                    parameterBuilder.addCcsOid(clientInfo);
                  } catch (e) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                  }
                } else if (accountSid && request.prompt === PromptValue.NONE) {
                  this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account");
                  parameterBuilder.addSid(accountSid);
                  try {
                    clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
                    parameterBuilder.addCcsOid(clientInfo);
                  } catch (e) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                  }
                } else if (request.loginHint) {
                  this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request");
                  parameterBuilder.addLoginHint(request.loginHint);
                  parameterBuilder.addCcsUpn(request.loginHint);
                } else if (request.account.username) {
                  this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account");
                  parameterBuilder.addLoginHint(request.account.username);
                  try {
                    clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
                    parameterBuilder.addCcsOid(clientInfo);
                  } catch (e) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                  }
                }
              } else if (request.loginHint) {
                this.logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request");
                parameterBuilder.addLoginHint(request.loginHint);
                parameterBuilder.addCcsUpn(request.loginHint);
              }
            } else {
              this.logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
            }
            if (request.nonce) {
              parameterBuilder.addNonce(request.nonce);
            }
            if (request.state) {
              parameterBuilder.addState(request.state);
            }
            if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
              parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
            }
            if (request.extraQueryParameters) {
              parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
            }
            if (!request.nativeBroker)
              return [3, 2];
            parameterBuilder.addNativeBroker();
            if (!(request.authenticationScheme === AuthenticationScheme.POP))
              return [3, 2];
            popTokenGenerator = new PopTokenGenerator(this.cryptoUtils);
            return [4, popTokenGenerator.generateCnf(request)];
          case 1:
            reqCnfData = _a.sent();
            parameterBuilder.addPopToken(reqCnfData.reqCnfHash);
            _a.label = 2;
          case 2:
            return [2, parameterBuilder.createQueryString()];
        }
      });
    });
  };
  AuthorizationCodeClient2.prototype.createLogoutUrlQueryString = function(request) {
    var parameterBuilder = new RequestParameterBuilder();
    if (request.postLogoutRedirectUri) {
      parameterBuilder.addPostLogoutRedirectUri(request.postLogoutRedirectUri);
    }
    if (request.correlationId) {
      parameterBuilder.addCorrelationId(request.correlationId);
    }
    if (request.idTokenHint) {
      parameterBuilder.addIdTokenHint(request.idTokenHint);
    }
    if (request.state) {
      parameterBuilder.addState(request.state);
    }
    if (request.logoutHint) {
      parameterBuilder.addLogoutHint(request.logoutHint);
    }
    if (request.extraQueryParameters) {
      parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
    }
    return parameterBuilder.createQueryString();
  };
  AuthorizationCodeClient2.prototype.extractAccountSid = function(account) {
    var _a;
    return ((_a = account.idTokenClaims) === null || _a === void 0 ? void 0 : _a.sid) || null;
  };
  AuthorizationCodeClient2.prototype.extractLoginHint = function(account) {
    var _a;
    return ((_a = account.idTokenClaims) === null || _a === void 0 ? void 0 : _a.login_hint) || null;
  };
  return AuthorizationCodeClient2;
}(BaseClient);

// node_modules/@azure/msal-common/dist/telemetry/performance/PerformanceEvent.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var PerformanceEvents;
(function(PerformanceEvents2) {
  PerformanceEvents2["AcquireTokenByCode"] = "acquireTokenByCode";
  PerformanceEvents2["AcquireTokenByRefreshToken"] = "acquireTokenByRefreshToken";
  PerformanceEvents2["AcquireTokenSilent"] = "acquireTokenSilent";
  PerformanceEvents2["AcquireTokenSilentAsync"] = "acquireTokenSilentAsync";
  PerformanceEvents2["AcquireTokenPopup"] = "acquireTokenPopup";
  PerformanceEvents2["CryptoOptsGetPublicKeyThumbprint"] = "cryptoOptsGetPublicKeyThumbprint";
  PerformanceEvents2["CryptoOptsSignJwt"] = "cryptoOptsSignJwt";
  PerformanceEvents2["SilentCacheClientAcquireToken"] = "silentCacheClientAcquireToken";
  PerformanceEvents2["SilentIframeClientAcquireToken"] = "silentIframeClientAcquireToken";
  PerformanceEvents2["SilentRefreshClientAcquireToken"] = "silentRefreshClientAcquireToken";
  PerformanceEvents2["SsoSilent"] = "ssoSilent";
  PerformanceEvents2["StandardInteractionClientGetDiscoveredAuthority"] = "standardInteractionClientGetDiscoveredAuthority";
  PerformanceEvents2["FetchAccountIdWithNativeBroker"] = "fetchAccountIdWithNativeBroker";
  PerformanceEvents2["NativeInteractionClientAcquireToken"] = "nativeInteractionClientAcquireToken";
  PerformanceEvents2["BaseClientCreateTokenRequestHeaders"] = "baseClientCreateTokenRequestHeaders";
  PerformanceEvents2["BrokerHandhshake"] = "brokerHandshake";
  PerformanceEvents2["AcquireTokenByRefreshTokenInBroker"] = "acquireTokenByRefreshTokenInBroker";
  PerformanceEvents2["AcquireTokenByBroker"] = "acquireTokenByBroker";
  PerformanceEvents2["RefreshTokenClientExecuteTokenRequest"] = "refreshTokenClientExecuteTokenRequest";
  PerformanceEvents2["RefreshTokenClientAcquireToken"] = "refreshTokenClientAcquireToken";
  PerformanceEvents2["RefreshTokenClientAcquireTokenWithCachedRefreshToken"] = "refreshTokenClientAcquireTokenWithCachedRefreshToken";
})(PerformanceEvents || (PerformanceEvents = {}));
var PerformanceEventStatus;
(function(PerformanceEventStatus2) {
  PerformanceEventStatus2[PerformanceEventStatus2["NotStarted"] = 0] = "NotStarted";
  PerformanceEventStatus2[PerformanceEventStatus2["InProgress"] = 1] = "InProgress";
  PerformanceEventStatus2[PerformanceEventStatus2["Completed"] = 2] = "Completed";
})(PerformanceEventStatus || (PerformanceEventStatus = {}));

// node_modules/@azure/msal-common/dist/client/RefreshTokenClient.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var RefreshTokenClient = function(_super) {
  __extends2(RefreshTokenClient2, _super);
  function RefreshTokenClient2(configuration, performanceClient) {
    return _super.call(this, configuration, performanceClient) || this;
  }
  RefreshTokenClient2.prototype.acquireToken = function(request) {
    var _a, _b, _c;
    return __awaiter2(this, void 0, void 0, function() {
      var atsMeasurement, reqTimestamp, response, requestId, responseHandler;
      var _this = this;
      return __generator2(this, function(_d) {
        switch (_d.label) {
          case 0:
            atsMeasurement = (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.startMeasurement(PerformanceEvents.RefreshTokenClientAcquireToken, request.correlationId);
            this.logger.verbose("RefreshTokenClientAcquireToken called", request.correlationId);
            reqTimestamp = TimeUtils.nowSeconds();
            return [4, this.executeTokenRequest(request, this.authority)];
          case 1:
            response = _d.sent();
            atsMeasurement === null || atsMeasurement === void 0 ? void 0 : atsMeasurement.addStaticFields({
              refreshTokenSize: ((_b = response.body.refresh_token) === null || _b === void 0 ? void 0 : _b.length) || 0
            });
            requestId = (_c = response.headers) === null || _c === void 0 ? void 0 : _c[HeaderNames.X_MS_REQUEST_ID];
            responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
            responseHandler.validateTokenResponse(response.body);
            return [2, responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request, void 0, void 0, true, request.forceCache, requestId).then(function(result) {
              atsMeasurement === null || atsMeasurement === void 0 ? void 0 : atsMeasurement.endMeasurement({
                success: true
              });
              return result;
            }).catch(function(error) {
              _this.logger.verbose("Error in fetching refresh token", request.correlationId);
              atsMeasurement === null || atsMeasurement === void 0 ? void 0 : atsMeasurement.endMeasurement({
                errorCode: error.errorCode,
                subErrorCode: error.subError,
                success: false
              });
              throw error;
            })];
        }
      });
    });
  };
  RefreshTokenClient2.prototype.acquireTokenByRefreshToken = function(request) {
    return __awaiter2(this, void 0, void 0, function() {
      var isFOCI, noFamilyRTInCache, clientMismatchErrorWithFamilyRT;
      return __generator2(this, function(_a) {
        if (!request) {
          throw ClientConfigurationError.createEmptyTokenRequestError();
        }
        if (!request.account) {
          throw ClientAuthError.createNoAccountInSilentRequestError();
        }
        isFOCI = this.cacheManager.isAppMetadataFOCI(request.account.environment, this.config.authOptions.clientId);
        if (isFOCI) {
          try {
            return [2, this.acquireTokenWithCachedRefreshToken(request, true)];
          } catch (e) {
            noFamilyRTInCache = e instanceof InteractionRequiredAuthError && e.errorCode === InteractionRequiredAuthErrorMessage.noTokensFoundError.code;
            clientMismatchErrorWithFamilyRT = e instanceof ServerError && e.errorCode === Errors.INVALID_GRANT_ERROR && e.subError === Errors.CLIENT_MISMATCH_ERROR;
            if (noFamilyRTInCache || clientMismatchErrorWithFamilyRT) {
              return [2, this.acquireTokenWithCachedRefreshToken(request, false)];
            } else {
              throw e;
            }
          }
        }
        return [2, this.acquireTokenWithCachedRefreshToken(request, false)];
      });
    });
  };
  RefreshTokenClient2.prototype.acquireTokenWithCachedRefreshToken = function(request, foci) {
    var _a;
    return __awaiter2(this, void 0, void 0, function() {
      var atsMeasurement, refreshToken, refreshTokenRequest;
      return __generator2(this, function(_b) {
        atsMeasurement = (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.startMeasurement(PerformanceEvents.RefreshTokenClientAcquireTokenWithCachedRefreshToken, request.correlationId);
        this.logger.verbose("RefreshTokenClientAcquireTokenWithCachedRefreshToken called", request.correlationId);
        refreshToken = this.cacheManager.readRefreshTokenFromCache(this.config.authOptions.clientId, request.account, foci);
        if (!refreshToken) {
          atsMeasurement === null || atsMeasurement === void 0 ? void 0 : atsMeasurement.discardMeasurement();
          throw InteractionRequiredAuthError.createNoTokensFoundError();
        }
        atsMeasurement === null || atsMeasurement === void 0 ? void 0 : atsMeasurement.endMeasurement({
          success: true
        });
        refreshTokenRequest = __assign2(__assign2({}, request), {refreshToken: refreshToken.secret, authenticationScheme: request.authenticationScheme || AuthenticationScheme.BEARER, ccsCredential: {
          credential: request.account.homeAccountId,
          type: CcsCredentialType.HOME_ACCOUNT_ID
        }});
        return [2, this.acquireToken(refreshTokenRequest)];
      });
    });
  };
  RefreshTokenClient2.prototype.executeTokenRequest = function(request, authority) {
    var _a;
    return __awaiter2(this, void 0, void 0, function() {
      var acquireTokenMeasurement, requestBody, queryParameters, headers, thumbprint, endpoint;
      return __generator2(this, function(_b) {
        switch (_b.label) {
          case 0:
            acquireTokenMeasurement = (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.startMeasurement(PerformanceEvents.RefreshTokenClientExecuteTokenRequest, request.correlationId);
            return [4, this.createTokenRequestBody(request)];
          case 1:
            requestBody = _b.sent();
            queryParameters = this.createTokenQueryParameters(request);
            headers = this.createTokenRequestHeaders(request.ccsCredential);
            thumbprint = {
              clientId: this.config.authOptions.clientId,
              authority: authority.canonicalAuthority,
              scopes: request.scopes,
              claims: request.claims,
              authenticationScheme: request.authenticationScheme,
              resourceRequestMethod: request.resourceRequestMethod,
              resourceRequestUri: request.resourceRequestUri,
              shrClaims: request.shrClaims,
              sshKid: request.sshKid
            };
            endpoint = UrlString.appendQueryString(authority.tokenEndpoint, queryParameters);
            return [2, this.executePostToTokenEndpoint(endpoint, requestBody, headers, thumbprint).then(function(result) {
              acquireTokenMeasurement === null || acquireTokenMeasurement === void 0 ? void 0 : acquireTokenMeasurement.endMeasurement({
                success: true
              });
              return result;
            }).catch(function(error) {
              acquireTokenMeasurement === null || acquireTokenMeasurement === void 0 ? void 0 : acquireTokenMeasurement.endMeasurement({
                success: false
              });
              throw error;
            })];
        }
      });
    });
  };
  RefreshTokenClient2.prototype.createTokenQueryParameters = function(request) {
    var parameterBuilder = new RequestParameterBuilder();
    if (request.tokenQueryParameters) {
      parameterBuilder.addExtraQueryParameters(request.tokenQueryParameters);
    }
    return parameterBuilder.createQueryString();
  };
  RefreshTokenClient2.prototype.createTokenRequestBody = function(request) {
    var _a;
    return __awaiter2(this, void 0, void 0, function() {
      var correlationId, acquireTokenMeasurement, parameterBuilder, clientAssertion, popTokenGenerator, reqCnfData, clientInfo;
      return __generator2(this, function(_b) {
        switch (_b.label) {
          case 0:
            correlationId = request.correlationId;
            acquireTokenMeasurement = (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.startMeasurement(PerformanceEvents.BaseClientCreateTokenRequestHeaders, correlationId);
            parameterBuilder = new RequestParameterBuilder();
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            parameterBuilder.addScopes(request.scopes);
            parameterBuilder.addGrantType(GrantType.REFRESH_TOKEN_GRANT);
            parameterBuilder.addClientInfo();
            parameterBuilder.addLibraryInfo(this.config.libraryInfo);
            parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
            parameterBuilder.addThrottling();
            if (this.serverTelemetryManager) {
              parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
            }
            parameterBuilder.addCorrelationId(correlationId);
            parameterBuilder.addRefreshToken(request.refreshToken);
            if (this.config.clientCredentials.clientSecret) {
              parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
            }
            if (this.config.clientCredentials.clientAssertion) {
              clientAssertion = this.config.clientCredentials.clientAssertion;
              parameterBuilder.addClientAssertion(clientAssertion.assertion);
              parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
            }
            if (!(request.authenticationScheme === AuthenticationScheme.POP))
              return [3, 2];
            popTokenGenerator = new PopTokenGenerator(this.cryptoUtils);
            return [4, popTokenGenerator.generateCnf(request)];
          case 1:
            reqCnfData = _b.sent();
            parameterBuilder.addPopToken(reqCnfData.reqCnfString);
            return [3, 3];
          case 2:
            if (request.authenticationScheme === AuthenticationScheme.SSH) {
              if (request.sshJwk) {
                parameterBuilder.addSshJwk(request.sshJwk);
              } else {
                acquireTokenMeasurement === null || acquireTokenMeasurement === void 0 ? void 0 : acquireTokenMeasurement.endMeasurement({
                  success: false
                });
                throw ClientConfigurationError.createMissingSshJwkError();
              }
            }
            _b.label = 3;
          case 3:
            if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
              parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
            }
            if (this.config.systemOptions.preventCorsPreflight && request.ccsCredential) {
              switch (request.ccsCredential.type) {
                case CcsCredentialType.HOME_ACCOUNT_ID:
                  try {
                    clientInfo = buildClientInfoFromHomeAccountId(request.ccsCredential.credential);
                    parameterBuilder.addCcsOid(clientInfo);
                  } catch (e) {
                    this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
                  }
                  break;
                case CcsCredentialType.UPN:
                  parameterBuilder.addCcsUpn(request.ccsCredential.credential);
                  break;
              }
            }
            acquireTokenMeasurement === null || acquireTokenMeasurement === void 0 ? void 0 : acquireTokenMeasurement.endMeasurement({
              success: true
            });
            return [2, parameterBuilder.createQueryString()];
        }
      });
    });
  };
  return RefreshTokenClient2;
}(BaseClient);

// node_modules/@azure/msal-common/dist/client/SilentFlowClient.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var SilentFlowClient = function(_super) {
  __extends2(SilentFlowClient2, _super);
  function SilentFlowClient2(configuration, performanceClient) {
    return _super.call(this, configuration, performanceClient) || this;
  }
  SilentFlowClient2.prototype.acquireToken = function(request) {
    return __awaiter2(this, void 0, void 0, function() {
      var e_1, refreshTokenClient;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4, this.acquireCachedToken(request)];
          case 1:
            return [2, _a.sent()];
          case 2:
            e_1 = _a.sent();
            if (e_1 instanceof ClientAuthError && e_1.errorCode === ClientAuthErrorMessage.tokenRefreshRequired.code) {
              refreshTokenClient = new RefreshTokenClient(this.config, this.performanceClient);
              return [2, refreshTokenClient.acquireTokenByRefreshToken(request)];
            } else {
              throw e_1;
            }
          case 3:
            return [2];
        }
      });
    });
  };
  SilentFlowClient2.prototype.acquireCachedToken = function(request) {
    var _a, _b, _c, _d;
    return __awaiter2(this, void 0, void 0, function() {
      var environment, cacheRecord;
      return __generator2(this, function(_e) {
        switch (_e.label) {
          case 0:
            if (!request) {
              throw ClientConfigurationError.createEmptyTokenRequestError();
            }
            if (request.forceRefresh) {
              (_a = this.serverTelemetryManager) === null || _a === void 0 ? void 0 : _a.setCacheOutcome(CacheOutcome.FORCE_REFRESH);
              this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because forceRefresh is true.");
              throw ClientAuthError.createRefreshRequiredError();
            }
            if (!request.account) {
              throw ClientAuthError.createNoAccountInSilentRequestError();
            }
            environment = request.authority || this.authority.getPreferredCache();
            cacheRecord = this.cacheManager.readCacheRecord(request.account, this.config.authOptions.clientId, request, environment);
            if (!cacheRecord.accessToken) {
              (_b = this.serverTelemetryManager) === null || _b === void 0 ? void 0 : _b.setCacheOutcome(CacheOutcome.NO_CACHED_ACCESS_TOKEN);
              this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties.");
              throw ClientAuthError.createRefreshRequiredError();
            } else if (TimeUtils.wasClockTurnedBack(cacheRecord.accessToken.cachedAt) || TimeUtils.isTokenExpired(cacheRecord.accessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
              (_c = this.serverTelemetryManager) === null || _c === void 0 ? void 0 : _c.setCacheOutcome(CacheOutcome.CACHED_ACCESS_TOKEN_EXPIRED);
              this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token is expired or will expire within " + this.config.systemOptions.tokenRenewalOffsetSeconds + " seconds.");
              throw ClientAuthError.createRefreshRequiredError();
            } else if (cacheRecord.accessToken.refreshOn && TimeUtils.isTokenExpired(cacheRecord.accessToken.refreshOn, 0)) {
              (_d = this.serverTelemetryManager) === null || _d === void 0 ? void 0 : _d.setCacheOutcome(CacheOutcome.REFRESH_CACHED_ACCESS_TOKEN);
              this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'.");
              throw ClientAuthError.createRefreshRequiredError();
            }
            if (this.config.serverTelemetryManager) {
              this.config.serverTelemetryManager.incrementCacheHits();
            }
            return [4, this.generateResultFromCacheRecord(cacheRecord, request)];
          case 1:
            return [2, _e.sent()];
        }
      });
    });
  };
  SilentFlowClient2.prototype.generateResultFromCacheRecord = function(cacheRecord, request) {
    return __awaiter2(this, void 0, void 0, function() {
      var idTokenObj, authTime;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (cacheRecord.idToken) {
              idTokenObj = new AuthToken(cacheRecord.idToken.secret, this.config.cryptoInterface);
            }
            if (request.maxAge || request.maxAge === 0) {
              authTime = idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.auth_time;
              if (!authTime) {
                throw ClientAuthError.createAuthTimeNotFoundError();
              }
              AuthToken.checkMaxAge(authTime, request.maxAge);
            }
            return [4, ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, cacheRecord, true, request, idTokenObj)];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  return SilentFlowClient2;
}(BaseClient);

// node_modules/@azure/msal-common/dist/authority/OpenIdConfigResponse.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
function isOpenIdConfigResponse(response) {
  return response.hasOwnProperty("authorization_endpoint") && response.hasOwnProperty("token_endpoint") && response.hasOwnProperty("issuer") && response.hasOwnProperty("jwks_uri");
}

// node_modules/@azure/msal-common/dist/authority/AuthorityMetadata.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var rawMetdataJSON = {endpointMetadata: {"https://login.microsoftonline.com/common/": {token_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: false, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/devicecode", http_logout_supported: true, frontchannel_logout_supported: true, end_session_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net"}, "https://login.chinacloudapi.cn/common/": {token_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: false, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/devicecode", http_logout_supported: true, frontchannel_logout_supported: true, end_session_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/common/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn"}, "https://login.microsoftonline.us/common/": {token_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: false, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/devicecode", http_logout_supported: true, frontchannel_logout_supported: true, end_session_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net"}, "https://login.microsoftonline.com/consumers/": {token_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: false, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode", http_logout_supported: true, frontchannel_logout_supported: true, end_session_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net"}, "https://login.chinacloudapi.cn/consumers/": {token_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: false, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/devicecode", http_logout_supported: true, frontchannel_logout_supported: true, end_session_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn"}, "https://login.microsoftonline.us/consumers/": {token_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: false, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/devicecode", http_logout_supported: true, frontchannel_logout_supported: true, end_session_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net"}, "https://login.microsoftonline.com/organizations/": {token_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: false, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode", http_logout_supported: true, frontchannel_logout_supported: true, end_session_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net"}, "https://login.chinacloudapi.cn/organizations/": {token_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: false, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/devicecode", http_logout_supported: true, frontchannel_logout_supported: true, end_session_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn"}, "https://login.microsoftonline.us/organizations/": {token_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: false, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/devicecode", http_logout_supported: true, frontchannel_logout_supported: true, end_session_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net"}}, instanceDiscoveryMetadata: {"https://login.microsoftonline.com/common/": {tenant_discovery_endpoint: "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"]}, {preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"]}, {preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"]}, {preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"]}, {preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"]}]}, "https://login.chinacloudapi.cn/common/": {tenant_discovery_endpoint: "https://login.chinacloudapi.cn/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"]}, {preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"]}, {preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"]}, {preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"]}, {preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"]}]}, "https://login.microsoftonline.us/common/": {tenant_discovery_endpoint: "https://login.microsoftonline.us/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"]}, {preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"]}, {preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"]}, {preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"]}, {preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"]}]}, "https://login.microsoftonline.com/consumers/": {tenant_discovery_endpoint: "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"]}, {preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"]}, {preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"]}, {preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"]}, {preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"]}]}, "https://login.chinacloudapi.cn/consumers/": {tenant_discovery_endpoint: "https://login.chinacloudapi.cn/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"]}, {preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"]}, {preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"]}, {preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"]}, {preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"]}]}, "https://login.microsoftonline.us/consumers/": {tenant_discovery_endpoint: "https://login.microsoftonline.us/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"]}, {preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"]}, {preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"]}, {preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"]}, {preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"]}]}, "https://login.microsoftonline.com/organizations/": {tenant_discovery_endpoint: "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"]}, {preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"]}, {preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"]}, {preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"]}, {preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"]}]}, "https://login.chinacloudapi.cn/organizations/": {tenant_discovery_endpoint: "https://login.chinacloudapi.cn/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"]}, {preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"]}, {preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"]}, {preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"]}, {preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"]}]}, "https://login.microsoftonline.us/organizations/": {tenant_discovery_endpoint: "https://login.microsoftonline.us/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"]}, {preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"]}, {preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"]}, {preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"]}, {preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"]}]}}};
var EndpointMetadata = rawMetdataJSON.endpointMetadata;
var InstanceDiscoveryMetadata = rawMetdataJSON.instanceDiscoveryMetadata;

// node_modules/@azure/msal-common/dist/authority/ProtocolMode.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var ProtocolMode;
(function(ProtocolMode2) {
  ProtocolMode2["AAD"] = "AAD";
  ProtocolMode2["OIDC"] = "OIDC";
})(ProtocolMode || (ProtocolMode = {}));

// node_modules/@azure/msal-common/dist/cache/entities/AuthorityMetadataEntity.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var AuthorityMetadataEntity = function() {
  function AuthorityMetadataEntity2() {
    this.expiresAt = TimeUtils.nowSeconds() + AUTHORITY_METADATA_CONSTANTS.REFRESH_TIME_SECONDS;
  }
  AuthorityMetadataEntity2.prototype.updateCloudDiscoveryMetadata = function(metadata, fromNetwork) {
    this.aliases = metadata.aliases;
    this.preferred_cache = metadata.preferred_cache;
    this.preferred_network = metadata.preferred_network;
    this.aliasesFromNetwork = fromNetwork;
  };
  AuthorityMetadataEntity2.prototype.updateEndpointMetadata = function(metadata, fromNetwork) {
    this.authorization_endpoint = metadata.authorization_endpoint;
    this.token_endpoint = metadata.token_endpoint;
    this.end_session_endpoint = metadata.end_session_endpoint;
    this.issuer = metadata.issuer;
    this.endpointsFromNetwork = fromNetwork;
    this.jwks_uri = metadata.jwks_uri;
  };
  AuthorityMetadataEntity2.prototype.updateCanonicalAuthority = function(authority) {
    this.canonical_authority = authority;
  };
  AuthorityMetadataEntity2.prototype.resetExpiresAt = function() {
    this.expiresAt = TimeUtils.nowSeconds() + AUTHORITY_METADATA_CONSTANTS.REFRESH_TIME_SECONDS;
  };
  AuthorityMetadataEntity2.prototype.isExpired = function() {
    return this.expiresAt <= TimeUtils.nowSeconds();
  };
  AuthorityMetadataEntity2.isAuthorityMetadataEntity = function(key, entity) {
    if (!entity) {
      return false;
    }
    return key.indexOf(AUTHORITY_METADATA_CONSTANTS.CACHE_KEY) === 0 && entity.hasOwnProperty("aliases") && entity.hasOwnProperty("preferred_cache") && entity.hasOwnProperty("preferred_network") && entity.hasOwnProperty("canonical_authority") && entity.hasOwnProperty("authorization_endpoint") && entity.hasOwnProperty("token_endpoint") && entity.hasOwnProperty("issuer") && entity.hasOwnProperty("aliasesFromNetwork") && entity.hasOwnProperty("endpointsFromNetwork") && entity.hasOwnProperty("expiresAt") && entity.hasOwnProperty("jwks_uri");
  };
  return AuthorityMetadataEntity2;
}();

// node_modules/@azure/msal-common/dist/authority/CloudInstanceDiscoveryResponse.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
function isCloudInstanceDiscoveryResponse(response) {
  return response.hasOwnProperty("tenant_discovery_endpoint") && response.hasOwnProperty("metadata");
}

// node_modules/@azure/msal-common/dist/authority/CloudInstanceDiscoveryErrorResponse.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
function isCloudInstanceDiscoveryErrorResponse(response) {
  return response.hasOwnProperty("error") && response.hasOwnProperty("error_description");
}

// node_modules/@azure/msal-common/dist/authority/RegionDiscovery.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var RegionDiscovery = function() {
  function RegionDiscovery2(networkInterface) {
    this.networkInterface = networkInterface;
  }
  RegionDiscovery2.prototype.detectRegion = function(environmentRegion, regionDiscoveryMetadata, proxyUrl) {
    return __awaiter2(this, void 0, void 0, function() {
      var autodetectedRegionName, options, localIMDSVersionResponse, currentIMDSVersion, currentIMDSVersionResponse;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            autodetectedRegionName = environmentRegion;
            if (!!autodetectedRegionName)
              return [3, 8];
            options = RegionDiscovery2.IMDS_OPTIONS;
            if (proxyUrl) {
              options.proxyUrl = proxyUrl;
            }
            _a.label = 1;
          case 1:
            _a.trys.push([1, 6, , 7]);
            return [4, this.getRegionFromIMDS(Constants.IMDS_VERSION, options)];
          case 2:
            localIMDSVersionResponse = _a.sent();
            if (localIMDSVersionResponse.status === ResponseCodes.httpSuccess) {
              autodetectedRegionName = localIMDSVersionResponse.body;
              regionDiscoveryMetadata.region_source = RegionDiscoverySources.IMDS;
            }
            if (!(localIMDSVersionResponse.status === ResponseCodes.httpBadRequest))
              return [3, 5];
            return [4, this.getCurrentVersion(options)];
          case 3:
            currentIMDSVersion = _a.sent();
            if (!currentIMDSVersion) {
              regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
              return [2, null];
            }
            return [4, this.getRegionFromIMDS(currentIMDSVersion, options)];
          case 4:
            currentIMDSVersionResponse = _a.sent();
            if (currentIMDSVersionResponse.status === ResponseCodes.httpSuccess) {
              autodetectedRegionName = currentIMDSVersionResponse.body;
              regionDiscoveryMetadata.region_source = RegionDiscoverySources.IMDS;
            }
            _a.label = 5;
          case 5:
            return [3, 7];
          case 6:
            _a.sent();
            regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
            return [2, null];
          case 7:
            return [3, 9];
          case 8:
            regionDiscoveryMetadata.region_source = RegionDiscoverySources.ENVIRONMENT_VARIABLE;
            _a.label = 9;
          case 9:
            if (!autodetectedRegionName) {
              regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
            }
            return [2, autodetectedRegionName || null];
        }
      });
    });
  };
  RegionDiscovery2.prototype.getRegionFromIMDS = function(version3, options) {
    return __awaiter2(this, void 0, void 0, function() {
      return __generator2(this, function(_a) {
        return [2, this.networkInterface.sendGetRequestAsync(Constants.IMDS_ENDPOINT + "?api-version=" + version3 + "&format=text", options, Constants.IMDS_TIMEOUT)];
      });
    });
  };
  RegionDiscovery2.prototype.getCurrentVersion = function(options) {
    return __awaiter2(this, void 0, void 0, function() {
      var response;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4, this.networkInterface.sendGetRequestAsync(Constants.IMDS_ENDPOINT + "?format=json", options)];
          case 1:
            response = _a.sent();
            if (response.status === ResponseCodes.httpBadRequest && response.body && response.body["newest-versions"] && response.body["newest-versions"].length > 0) {
              return [2, response.body["newest-versions"][0]];
            }
            return [2, null];
          case 2:
            _a.sent();
            return [2, null];
          case 3:
            return [2];
        }
      });
    });
  };
  RegionDiscovery2.IMDS_OPTIONS = {
    headers: {
      Metadata: "true"
    }
  };
  return RegionDiscovery2;
}();

// node_modules/@azure/msal-common/dist/authority/Authority.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var Authority = function() {
  function Authority2(authority, networkInterface, cacheManager, authorityOptions, logger, proxyUrl) {
    this.canonicalAuthority = authority;
    this._canonicalAuthority.validateAsUri();
    this.networkInterface = networkInterface;
    this.cacheManager = cacheManager;
    this.authorityOptions = authorityOptions;
    this.regionDiscovery = new RegionDiscovery(networkInterface);
    this.regionDiscoveryMetadata = {region_used: void 0, region_source: void 0, region_outcome: void 0};
    this.proxyUrl = proxyUrl || Constants.EMPTY_STRING;
    this.logger = logger;
  }
  Object.defineProperty(Authority2.prototype, "authorityType", {
    get: function() {
      var pathSegments = this.canonicalAuthorityUrlComponents.PathSegments;
      if (pathSegments.length) {
        switch (pathSegments[0].toLowerCase()) {
          case Constants.ADFS:
            return AuthorityType.Adfs;
          case Constants.DSTS:
            return AuthorityType.Dsts;
        }
      }
      return AuthorityType.Default;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Authority2.prototype, "protocolMode", {
    get: function() {
      return this.authorityOptions.protocolMode;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Authority2.prototype, "options", {
    get: function() {
      return this.authorityOptions;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Authority2.prototype, "canonicalAuthority", {
    get: function() {
      return this._canonicalAuthority.urlString;
    },
    set: function(url) {
      this._canonicalAuthority = new UrlString(url);
      this._canonicalAuthority.validateAsUri();
      this._canonicalAuthorityUrlComponents = null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Authority2.prototype, "canonicalAuthorityUrlComponents", {
    get: function() {
      if (!this._canonicalAuthorityUrlComponents) {
        this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
      }
      return this._canonicalAuthorityUrlComponents;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Authority2.prototype, "hostnameAndPort", {
    get: function() {
      return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Authority2.prototype, "tenant", {
    get: function() {
      return this.canonicalAuthorityUrlComponents.PathSegments[0];
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Authority2.prototype, "authorizationEndpoint", {
    get: function() {
      if (this.discoveryComplete()) {
        var endpoint = this.replacePath(this.metadata.authorization_endpoint);
        return this.replaceTenant(endpoint);
      } else {
        throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Authority2.prototype, "tokenEndpoint", {
    get: function() {
      if (this.discoveryComplete()) {
        var endpoint = this.replacePath(this.metadata.token_endpoint);
        return this.replaceTenant(endpoint);
      } else {
        throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Authority2.prototype, "deviceCodeEndpoint", {
    get: function() {
      if (this.discoveryComplete()) {
        var endpoint = this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
        return this.replaceTenant(endpoint);
      } else {
        throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Authority2.prototype, "endSessionEndpoint", {
    get: function() {
      if (this.discoveryComplete()) {
        if (!this.metadata.end_session_endpoint) {
          throw ClientAuthError.createLogoutNotSupportedError();
        }
        var endpoint = this.replacePath(this.metadata.end_session_endpoint);
        return this.replaceTenant(endpoint);
      } else {
        throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Authority2.prototype, "selfSignedJwtAudience", {
    get: function() {
      if (this.discoveryComplete()) {
        var endpoint = this.replacePath(this.metadata.issuer);
        return this.replaceTenant(endpoint);
      } else {
        throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Authority2.prototype, "jwksUri", {
    get: function() {
      if (this.discoveryComplete()) {
        var endpoint = this.replacePath(this.metadata.jwks_uri);
        return this.replaceTenant(endpoint);
      } else {
        throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      }
    },
    enumerable: false,
    configurable: true
  });
  Authority2.prototype.replaceTenant = function(urlString) {
    return urlString.replace(/{tenant}|{tenantid}/g, this.tenant);
  };
  Authority2.prototype.replacePath = function(urlString) {
    var endpoint = urlString;
    var cachedAuthorityUrl = new UrlString(this.metadata.canonical_authority);
    var cachedAuthorityParts = cachedAuthorityUrl.getUrlComponents().PathSegments;
    var currentAuthorityParts = this.canonicalAuthorityUrlComponents.PathSegments;
    currentAuthorityParts.forEach(function(currentPart, index) {
      var cachedPart = cachedAuthorityParts[index];
      if (currentPart !== cachedPart) {
        endpoint = endpoint.replace("/" + cachedPart + "/", "/" + currentPart + "/");
      }
    });
    return endpoint;
  };
  Object.defineProperty(Authority2.prototype, "defaultOpenIdConfigurationEndpoint", {
    get: function() {
      if (this.authorityType === AuthorityType.Adfs || this.authorityType === AuthorityType.Dsts || this.protocolMode === ProtocolMode.OIDC) {
        return this.canonicalAuthority + ".well-known/openid-configuration";
      }
      return this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
    },
    enumerable: false,
    configurable: true
  });
  Authority2.prototype.discoveryComplete = function() {
    return !!this.metadata;
  };
  Authority2.prototype.resolveEndpointsAsync = function() {
    return __awaiter2(this, void 0, void 0, function() {
      var metadataEntity, cloudDiscoverySource, endpointSource, cacheKey;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            metadataEntity = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort);
            if (!metadataEntity) {
              metadataEntity = new AuthorityMetadataEntity();
              metadataEntity.updateCanonicalAuthority(this.canonicalAuthority);
            }
            return [4, this.updateCloudDiscoveryMetadata(metadataEntity)];
          case 1:
            cloudDiscoverySource = _a.sent();
            this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, metadataEntity.preferred_network);
            return [4, this.updateEndpointMetadata(metadataEntity)];
          case 2:
            endpointSource = _a.sent();
            if (cloudDiscoverySource !== AuthorityMetadataSource.CACHE && endpointSource !== AuthorityMetadataSource.CACHE) {
              metadataEntity.resetExpiresAt();
              metadataEntity.updateCanonicalAuthority(this.canonicalAuthority);
            }
            cacheKey = this.cacheManager.generateAuthorityMetadataCacheKey(metadataEntity.preferred_cache);
            this.cacheManager.setAuthorityMetadata(cacheKey, metadataEntity);
            this.metadata = metadataEntity;
            return [2];
        }
      });
    });
  };
  Authority2.prototype.updateEndpointMetadata = function(metadataEntity) {
    var _a, _b;
    return __awaiter2(this, void 0, void 0, function() {
      var metadata, harcodedMetadata;
      return __generator2(this, function(_c) {
        switch (_c.label) {
          case 0:
            metadata = this.getEndpointMetadataFromConfig();
            if (metadata) {
              metadataEntity.updateEndpointMetadata(metadata, false);
              return [2, AuthorityMetadataSource.CONFIG];
            }
            if (this.isAuthoritySameType(metadataEntity) && metadataEntity.endpointsFromNetwork && !metadataEntity.isExpired()) {
              return [2, AuthorityMetadataSource.CACHE];
            }
            harcodedMetadata = this.getEndpointMetadataFromHardcodedValues();
            return [4, this.getEndpointMetadataFromNetwork()];
          case 1:
            metadata = _c.sent();
            if (!metadata)
              return [3, 4];
            if (!((_a = this.authorityOptions.azureRegionConfiguration) === null || _a === void 0 ? void 0 : _a.azureRegion))
              return [3, 3];
            return [4, this.updateMetadataWithRegionalInformation(metadata)];
          case 2:
            metadata = _c.sent();
            _c.label = 3;
          case 3:
            metadataEntity.updateEndpointMetadata(metadata, true);
            return [2, AuthorityMetadataSource.NETWORK];
          case 4:
            if (!(harcodedMetadata && !this.authorityOptions.skipAuthorityMetadataCache))
              return [3, 7];
            if (!((_b = this.authorityOptions.azureRegionConfiguration) === null || _b === void 0 ? void 0 : _b.azureRegion))
              return [3, 6];
            return [4, this.updateMetadataWithRegionalInformation(harcodedMetadata)];
          case 5:
            harcodedMetadata = _c.sent();
            _c.label = 6;
          case 6:
            metadataEntity.updateEndpointMetadata(harcodedMetadata, false);
            return [2, AuthorityMetadataSource.HARDCODED_VALUES];
          case 7:
            throw ClientAuthError.createUnableToGetOpenidConfigError(this.defaultOpenIdConfigurationEndpoint);
        }
      });
    });
  };
  Authority2.prototype.isAuthoritySameType = function(metadataEntity) {
    var cachedAuthorityUrl = new UrlString(metadataEntity.canonical_authority);
    var cachedParts = cachedAuthorityUrl.getUrlComponents().PathSegments;
    return cachedParts.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
  };
  Authority2.prototype.getEndpointMetadataFromConfig = function() {
    if (this.authorityOptions.authorityMetadata) {
      try {
        return JSON.parse(this.authorityOptions.authorityMetadata);
      } catch (e) {
        throw ClientConfigurationError.createInvalidAuthorityMetadataError();
      }
    }
    return null;
  };
  Authority2.prototype.getEndpointMetadataFromNetwork = function() {
    return __awaiter2(this, void 0, void 0, function() {
      var options, response;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            options = {};
            if (this.proxyUrl) {
              options.proxyUrl = this.proxyUrl;
            }
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            return [4, this.networkInterface.sendGetRequestAsync(this.defaultOpenIdConfigurationEndpoint, options)];
          case 2:
            response = _a.sent();
            return [2, isOpenIdConfigResponse(response.body) ? response.body : null];
          case 3:
            _a.sent();
            return [2, null];
          case 4:
            return [2];
        }
      });
    });
  };
  Authority2.prototype.getEndpointMetadataFromHardcodedValues = function() {
    if (this.canonicalAuthority in EndpointMetadata) {
      return EndpointMetadata[this.canonicalAuthority];
    }
    return null;
  };
  Authority2.prototype.updateMetadataWithRegionalInformation = function(metadata) {
    var _a, _b, _c, _d, _e;
    return __awaiter2(this, void 0, void 0, function() {
      var autodetectedRegionName, azureRegion;
      return __generator2(this, function(_f) {
        switch (_f.label) {
          case 0:
            return [4, this.regionDiscovery.detectRegion((_a = this.authorityOptions.azureRegionConfiguration) === null || _a === void 0 ? void 0 : _a.environmentRegion, this.regionDiscoveryMetadata, this.proxyUrl)];
          case 1:
            autodetectedRegionName = _f.sent();
            azureRegion = ((_b = this.authorityOptions.azureRegionConfiguration) === null || _b === void 0 ? void 0 : _b.azureRegion) === Constants.AZURE_REGION_AUTO_DISCOVER_FLAG ? autodetectedRegionName : (_c = this.authorityOptions.azureRegionConfiguration) === null || _c === void 0 ? void 0 : _c.azureRegion;
            if (((_d = this.authorityOptions.azureRegionConfiguration) === null || _d === void 0 ? void 0 : _d.azureRegion) === Constants.AZURE_REGION_AUTO_DISCOVER_FLAG) {
              this.regionDiscoveryMetadata.region_outcome = autodetectedRegionName ? RegionDiscoveryOutcomes.AUTO_DETECTION_REQUESTED_SUCCESSFUL : RegionDiscoveryOutcomes.AUTO_DETECTION_REQUESTED_FAILED;
            } else {
              if (autodetectedRegionName) {
                this.regionDiscoveryMetadata.region_outcome = ((_e = this.authorityOptions.azureRegionConfiguration) === null || _e === void 0 ? void 0 : _e.azureRegion) === autodetectedRegionName ? RegionDiscoveryOutcomes.CONFIGURED_MATCHES_DETECTED : RegionDiscoveryOutcomes.CONFIGURED_NOT_DETECTED;
              } else {
                this.regionDiscoveryMetadata.region_outcome = RegionDiscoveryOutcomes.CONFIGURED_NO_AUTO_DETECTION;
              }
            }
            if (azureRegion) {
              this.regionDiscoveryMetadata.region_used = azureRegion;
              return [2, Authority2.replaceWithRegionalInformation(metadata, azureRegion)];
            }
            return [2, metadata];
        }
      });
    });
  };
  Authority2.prototype.updateCloudDiscoveryMetadata = function(metadataEntity) {
    return __awaiter2(this, void 0, void 0, function() {
      var metadata, metadataEntityExpired, harcodedMetadata;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.logger.verbose("Attempting to get cloud discovery metadata in the config");
            this.logger.verbosePii("Known Authorities: " + (this.authorityOptions.knownAuthorities || Constants.NOT_APPLICABLE));
            this.logger.verbosePii("Authority Metadata: " + (this.authorityOptions.authorityMetadata || Constants.NOT_APPLICABLE));
            this.logger.verbosePii("Canonical Authority: " + (metadataEntity.canonical_authority || Constants.NOT_APPLICABLE));
            metadata = this.getCloudDiscoveryMetadataFromConfig();
            if (metadata) {
              this.logger.verbose("Found cloud discovery metadata in the config.");
              metadataEntity.updateCloudDiscoveryMetadata(metadata, false);
              return [2, AuthorityMetadataSource.CONFIG];
            }
            this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the cache.");
            metadataEntityExpired = metadataEntity.isExpired();
            if (this.isAuthoritySameType(metadataEntity) && metadataEntity.aliasesFromNetwork && !metadataEntityExpired) {
              this.logger.verbose("Found metadata in the cache.");
              return [2, AuthorityMetadataSource.CACHE];
            } else if (metadataEntityExpired) {
              this.logger.verbose("The metadata entity is expired.");
            }
            this.logger.verbose("Did not find cloud discovery metadata in the cache... Attempting to get cloud discovery metadata from the network.");
            return [4, this.getCloudDiscoveryMetadataFromNetwork()];
          case 1:
            metadata = _a.sent();
            if (metadata) {
              this.logger.verbose("cloud discovery metadata was successfully returned from getCloudDiscoveryMetadataFromNetwork()");
              metadataEntity.updateCloudDiscoveryMetadata(metadata, true);
              return [2, AuthorityMetadataSource.NETWORK];
            }
            this.logger.verbose("Did not find cloud discovery metadata from the network... Attempting to get cloud discovery metadata from hardcoded values.");
            harcodedMetadata = this.getCloudDiscoveryMetadataFromHarcodedValues();
            if (harcodedMetadata && !this.options.skipAuthorityMetadataCache) {
              this.logger.verbose("Found cloud discovery metadata from hardcoded values.");
              metadataEntity.updateCloudDiscoveryMetadata(harcodedMetadata, false);
              return [2, AuthorityMetadataSource.HARDCODED_VALUES];
            }
            this.logger.error("Did not find cloud discovery metadata from hardcoded values... Metadata could not be obtained from config, cache, network or hardcoded values. Throwing Untrusted Authority Error.");
            throw ClientConfigurationError.createUntrustedAuthorityError();
        }
      });
    });
  };
  Authority2.prototype.getCloudDiscoveryMetadataFromConfig = function() {
    if (this.authorityOptions.cloudDiscoveryMetadata) {
      this.logger.verbose("The cloud discovery metadata has been provided as a network response, in the config.");
      try {
        this.logger.verbose("Attempting to parse the cloud discovery metadata.");
        var parsedResponse = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata);
        var metadata = Authority2.getCloudDiscoveryMetadataFromNetworkResponse(parsedResponse.metadata, this.hostnameAndPort);
        this.logger.verbose("Parsed the cloud discovery metadata.");
        if (metadata) {
          this.logger.verbose("There is returnable metadata attached to the parsed cloud discovery metadata.");
          return metadata;
        } else {
          this.logger.verbose("There is no metadata attached to the parsed cloud discovery metadata.");
        }
      } catch (e) {
        this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error.");
        throw ClientConfigurationError.createInvalidCloudDiscoveryMetadataError();
      }
    }
    if (this.isInKnownAuthorities()) {
      this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host.");
      return Authority2.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    }
    return null;
  };
  Authority2.prototype.getCloudDiscoveryMetadataFromNetwork = function() {
    return __awaiter2(this, void 0, void 0, function() {
      var instanceDiscoveryEndpoint, options, match, response, typedResponseBody, metadata, error_1, typedError;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            instanceDiscoveryEndpoint = "" + Constants.AAD_INSTANCE_DISCOVERY_ENDPT + this.canonicalAuthority + "oauth2/v2.0/authorize";
            options = {};
            if (this.proxyUrl) {
              options.proxyUrl = this.proxyUrl;
            }
            match = null;
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            return [4, this.networkInterface.sendGetRequestAsync(instanceDiscoveryEndpoint, options)];
          case 2:
            response = _a.sent();
            typedResponseBody = void 0;
            metadata = void 0;
            if (isCloudInstanceDiscoveryResponse(response.body)) {
              typedResponseBody = response.body;
              metadata = typedResponseBody.metadata;
              this.logger.verbosePii("tenant_discovery_endpoint is: " + typedResponseBody.tenant_discovery_endpoint);
            } else if (isCloudInstanceDiscoveryErrorResponse(response.body)) {
              this.logger.warning("A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: " + response.status);
              typedResponseBody = response.body;
              if (typedResponseBody.error === Constants.INVALID_INSTANCE) {
                this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance.");
                return [2, null];
              }
              this.logger.warning("The CloudInstanceDiscoveryErrorResponse error is " + typedResponseBody.error);
              this.logger.warning("The CloudInstanceDiscoveryErrorResponse error description is " + typedResponseBody.error_description);
              this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []");
              metadata = [];
            } else {
              this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse");
              return [2, null];
            }
            this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request.");
            match = Authority2.getCloudDiscoveryMetadataFromNetworkResponse(metadata, this.hostnameAndPort);
            return [3, 4];
          case 3:
            error_1 = _a.sent();
            if (error_1 instanceof AuthError) {
              this.logger.error("There was a network error while attempting to get the cloud discovery instance metadata.\nError: " + error_1.errorCode + "\nError Description: " + error_1.errorMessage);
            } else {
              typedError = error_1;
              this.logger.error("A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.\nError: " + typedError.name + "\nError Description: " + typedError.message);
            }
            return [2, null];
          case 4:
            if (!match) {
              this.logger.warning("The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request.");
              this.logger.verbose("Creating custom Authority for custom domain scenario.");
              match = Authority2.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
            }
            return [2, match];
        }
      });
    });
  };
  Authority2.prototype.getCloudDiscoveryMetadataFromHarcodedValues = function() {
    if (this.canonicalAuthority in InstanceDiscoveryMetadata) {
      return InstanceDiscoveryMetadata[this.canonicalAuthority];
    }
    return null;
  };
  Authority2.prototype.isInKnownAuthorities = function() {
    var _this = this;
    var matches = this.authorityOptions.knownAuthorities.filter(function(authority) {
      return UrlString.getDomainFromUrl(authority).toLowerCase() === _this.hostnameAndPort;
    });
    return matches.length > 0;
  };
  Authority2.generateAuthority = function(authorityString, azureCloudOptions) {
    var authorityAzureCloudInstance;
    if (azureCloudOptions && azureCloudOptions.azureCloudInstance !== AzureCloudInstance.None) {
      var tenant = azureCloudOptions.tenant ? azureCloudOptions.tenant : Constants.DEFAULT_COMMON_TENANT;
      authorityAzureCloudInstance = azureCloudOptions.azureCloudInstance + "/" + tenant + "/";
    }
    return authorityAzureCloudInstance ? authorityAzureCloudInstance : authorityString;
  };
  Authority2.createCloudDiscoveryMetadataFromHost = function(host) {
    return {
      preferred_network: host,
      preferred_cache: host,
      aliases: [host]
    };
  };
  Authority2.getCloudDiscoveryMetadataFromNetworkResponse = function(response, authority) {
    for (var i = 0; i < response.length; i++) {
      var metadata = response[i];
      if (metadata.aliases.indexOf(authority) > -1) {
        return metadata;
      }
    }
    return null;
  };
  Authority2.prototype.getPreferredCache = function() {
    if (this.discoveryComplete()) {
      return this.metadata.preferred_cache;
    } else {
      throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
    }
  };
  Authority2.prototype.isAlias = function(host) {
    return this.metadata.aliases.indexOf(host) > -1;
  };
  Authority2.isPublicCloudAuthority = function(host) {
    return Constants.KNOWN_PUBLIC_CLOUDS.indexOf(host) >= 0;
  };
  Authority2.buildRegionalAuthorityString = function(host, region, queryString) {
    var authorityUrlInstance = new UrlString(host);
    authorityUrlInstance.validateAsUri();
    var authorityUrlParts = authorityUrlInstance.getUrlComponents();
    var hostNameAndPort = region + "." + authorityUrlParts.HostNameAndPort;
    if (this.isPublicCloudAuthority(authorityUrlParts.HostNameAndPort)) {
      hostNameAndPort = region + "." + Constants.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX;
    }
    var url = UrlString.constructAuthorityUriFromObject(__assign2(__assign2({}, authorityUrlInstance.getUrlComponents()), {HostNameAndPort: hostNameAndPort})).urlString;
    if (queryString)
      return url + "?" + queryString;
    return url;
  };
  Authority2.replaceWithRegionalInformation = function(metadata, azureRegion) {
    metadata.authorization_endpoint = Authority2.buildRegionalAuthorityString(metadata.authorization_endpoint, azureRegion);
    metadata.token_endpoint = Authority2.buildRegionalAuthorityString(metadata.token_endpoint, azureRegion, Constants.REGIONAL_AUTH_NON_MSI_QUERY_STRING);
    if (metadata.end_session_endpoint) {
      metadata.end_session_endpoint = Authority2.buildRegionalAuthorityString(metadata.end_session_endpoint, azureRegion);
    }
    return metadata;
  };
  return Authority2;
}();

// node_modules/@azure/msal-common/dist/authority/AuthorityFactory.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var AuthorityFactory = function() {
  function AuthorityFactory2() {
  }
  AuthorityFactory2.createDiscoveredInstance = function(authorityUri, networkClient, cacheManager, authorityOptions, logger, proxyUrl) {
    return __awaiter2(this, void 0, void 0, function() {
      var acquireTokenAuthority, e_1;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            acquireTokenAuthority = AuthorityFactory2.createInstance(authorityUri, networkClient, cacheManager, authorityOptions, logger, proxyUrl);
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            return [4, acquireTokenAuthority.resolveEndpointsAsync()];
          case 2:
            _a.sent();
            return [2, acquireTokenAuthority];
          case 3:
            e_1 = _a.sent();
            throw ClientAuthError.createEndpointDiscoveryIncompleteError(e_1);
          case 4:
            return [2];
        }
      });
    });
  };
  AuthorityFactory2.createInstance = function(authorityUrl, networkInterface, cacheManager, authorityOptions, logger, proxyUrl) {
    if (StringUtils.isEmpty(authorityUrl)) {
      throw ClientConfigurationError.createUrlEmptyError();
    }
    return new Authority(authorityUrl, networkInterface, cacheManager, authorityOptions, logger, proxyUrl);
  };
  return AuthorityFactory2;
}();

// node_modules/@azure/msal-common/dist/cache/entities/ServerTelemetryEntity.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var ServerTelemetryEntity = function() {
  function ServerTelemetryEntity2() {
    this.failedRequests = [];
    this.errors = [];
    this.cacheHits = 0;
  }
  ServerTelemetryEntity2.isServerTelemetryEntity = function(key, entity) {
    var validateKey = key.indexOf(SERVER_TELEM_CONSTANTS.CACHE_KEY) === 0;
    var validateEntity = true;
    if (entity) {
      validateEntity = entity.hasOwnProperty("failedRequests") && entity.hasOwnProperty("errors") && entity.hasOwnProperty("cacheHits");
    }
    return validateKey && validateEntity;
  };
  return ServerTelemetryEntity2;
}();

// node_modules/@azure/msal-common/dist/cache/entities/ThrottlingEntity.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var ThrottlingEntity = function() {
  function ThrottlingEntity2() {
  }
  ThrottlingEntity2.isThrottlingEntity = function(key, entity) {
    var validateKey = false;
    if (key) {
      validateKey = key.indexOf(ThrottlingConstants.THROTTLING_PREFIX) === 0;
    }
    var validateEntity = true;
    if (entity) {
      validateEntity = entity.hasOwnProperty("throttleTime");
    }
    return validateKey && validateEntity;
  };
  return ThrottlingEntity2;
}();

// node_modules/@azure/msal-common/dist/network/INetworkModule.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var StubbedNetworkModule = {
  sendGetRequestAsync: function() {
    var notImplErr = "Network interface - sendGetRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(AuthError.createUnexpectedError(notImplErr));
  },
  sendPostRequestAsync: function() {
    var notImplErr = "Network interface - sendPostRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(AuthError.createUnexpectedError(notImplErr));
  }
};

// node_modules/@azure/msal-common/dist/error/JoseHeaderError.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var JoseHeaderErrorMessage = {
  missingKidError: {
    code: "missing_kid_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires a keyId to be configured as the 'kid' header claim. No 'kid' value was provided."
  },
  missingAlgError: {
    code: "missing_alg_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires an algorithm to be specified as the 'alg' header claim. No 'alg' value was provided."
  }
};
var JoseHeaderError = function(_super) {
  __extends2(JoseHeaderError2, _super);
  function JoseHeaderError2(errorCode, errorMessage) {
    var _this = _super.call(this, errorCode, errorMessage) || this;
    _this.name = "JoseHeaderError";
    Object.setPrototypeOf(_this, JoseHeaderError2.prototype);
    return _this;
  }
  JoseHeaderError2.createMissingKidError = function() {
    return new JoseHeaderError2(JoseHeaderErrorMessage.missingKidError.code, JoseHeaderErrorMessage.missingKidError.desc);
  };
  JoseHeaderError2.createMissingAlgError = function() {
    return new JoseHeaderError2(JoseHeaderErrorMessage.missingAlgError.code, JoseHeaderErrorMessage.missingAlgError.desc);
  };
  return JoseHeaderError2;
}(AuthError);

// node_modules/@azure/msal-common/dist/crypto/JoseHeader.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var JoseHeader = function() {
  function JoseHeader2(options) {
    this.typ = options.typ;
    this.alg = options.alg;
    this.kid = options.kid;
  }
  JoseHeader2.getShrHeaderString = function(shrHeaderOptions) {
    if (!shrHeaderOptions.kid) {
      throw JoseHeaderError.createMissingKidError();
    }
    if (!shrHeaderOptions.alg) {
      throw JoseHeaderError.createMissingAlgError();
    }
    var shrHeader = new JoseHeader2({
      typ: shrHeaderOptions.typ || JsonTypes.Jwt,
      kid: shrHeaderOptions.kid,
      alg: shrHeaderOptions.alg
    });
    return JSON.stringify(shrHeader);
  };
  return JoseHeader2;
}();

// node_modules/@azure/msal-common/dist/request/AuthenticationHeaderParser.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var AuthenticationHeaderParser = function() {
  function AuthenticationHeaderParser2(headers) {
    this.headers = headers;
  }
  AuthenticationHeaderParser2.prototype.getShrNonce = function() {
    var authenticationInfo = this.headers[HeaderNames.AuthenticationInfo];
    if (authenticationInfo) {
      var authenticationInfoChallenges = this.parseChallenges(authenticationInfo);
      if (authenticationInfoChallenges.nextnonce) {
        return authenticationInfoChallenges.nextnonce;
      }
      throw ClientConfigurationError.createInvalidAuthenticationHeaderError(HeaderNames.AuthenticationInfo, "nextnonce challenge is missing.");
    }
    var wwwAuthenticate = this.headers[HeaderNames.WWWAuthenticate];
    if (wwwAuthenticate) {
      var wwwAuthenticateChallenges = this.parseChallenges(wwwAuthenticate);
      if (wwwAuthenticateChallenges.nonce) {
        return wwwAuthenticateChallenges.nonce;
      }
      throw ClientConfigurationError.createInvalidAuthenticationHeaderError(HeaderNames.WWWAuthenticate, "nonce challenge is missing.");
    }
    throw ClientConfigurationError.createMissingNonceAuthenticationHeadersError();
  };
  AuthenticationHeaderParser2.prototype.parseChallenges = function(header) {
    var schemeSeparator = header.indexOf(" ");
    var challenges = header.substr(schemeSeparator + 1).split(",");
    var challengeMap = {};
    challenges.forEach(function(challenge) {
      var _a = challenge.split("="), key = _a[0], value = _a[1];
      challengeMap[key] = unescape(value.replace(/['"]+/g, Constants.EMPTY_STRING));
    });
    return challengeMap;
  };
  return AuthenticationHeaderParser2;
}();

// node_modules/@azure/msal-common/dist/telemetry/server/ServerTelemetryManager.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var ServerTelemetryManager = function() {
  function ServerTelemetryManager2(telemetryRequest, cacheManager) {
    this.cacheOutcome = CacheOutcome.NO_CACHE_HIT;
    this.cacheManager = cacheManager;
    this.apiId = telemetryRequest.apiId;
    this.correlationId = telemetryRequest.correlationId;
    this.wrapperSKU = telemetryRequest.wrapperSKU || Constants.EMPTY_STRING;
    this.wrapperVer = telemetryRequest.wrapperVer || Constants.EMPTY_STRING;
    this.telemetryCacheKey = SERVER_TELEM_CONSTANTS.CACHE_KEY + Separators.CACHE_KEY_SEPARATOR + telemetryRequest.clientId;
  }
  ServerTelemetryManager2.prototype.generateCurrentRequestHeaderValue = function() {
    var request = "" + this.apiId + SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR + this.cacheOutcome;
    var platformFields = [this.wrapperSKU, this.wrapperVer].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
    var regionDiscoveryFields = this.getRegionDiscoveryFields();
    var requestWithRegionDiscoveryFields = [request, regionDiscoveryFields].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
    return [SERVER_TELEM_CONSTANTS.SCHEMA_VERSION, requestWithRegionDiscoveryFields, platformFields].join(SERVER_TELEM_CONSTANTS.CATEGORY_SEPARATOR);
  };
  ServerTelemetryManager2.prototype.generateLastRequestHeaderValue = function() {
    var lastRequests = this.getLastRequests();
    var maxErrors = ServerTelemetryManager2.maxErrorsToSend(lastRequests);
    var failedRequests = lastRequests.failedRequests.slice(0, 2 * maxErrors).join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
    var errors = lastRequests.errors.slice(0, maxErrors).join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
    var errorCount = lastRequests.errors.length;
    var overflow = maxErrors < errorCount ? SERVER_TELEM_CONSTANTS.OVERFLOW_TRUE : SERVER_TELEM_CONSTANTS.OVERFLOW_FALSE;
    var platformFields = [errorCount, overflow].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
    return [SERVER_TELEM_CONSTANTS.SCHEMA_VERSION, lastRequests.cacheHits, failedRequests, errors, platformFields].join(SERVER_TELEM_CONSTANTS.CATEGORY_SEPARATOR);
  };
  ServerTelemetryManager2.prototype.cacheFailedRequest = function(error) {
    var lastRequests = this.getLastRequests();
    if (lastRequests.errors.length >= SERVER_TELEM_CONSTANTS.MAX_CACHED_ERRORS) {
      lastRequests.failedRequests.shift();
      lastRequests.failedRequests.shift();
      lastRequests.errors.shift();
    }
    lastRequests.failedRequests.push(this.apiId, this.correlationId);
    if (!StringUtils.isEmpty(error.subError)) {
      lastRequests.errors.push(error.subError);
    } else if (!StringUtils.isEmpty(error.errorCode)) {
      lastRequests.errors.push(error.errorCode);
    } else if (!!error && error.toString()) {
      lastRequests.errors.push(error.toString());
    } else {
      lastRequests.errors.push(SERVER_TELEM_CONSTANTS.UNKNOWN_ERROR);
    }
    this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests);
    return;
  };
  ServerTelemetryManager2.prototype.incrementCacheHits = function() {
    var lastRequests = this.getLastRequests();
    lastRequests.cacheHits += 1;
    this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests);
    return lastRequests.cacheHits;
  };
  ServerTelemetryManager2.prototype.getLastRequests = function() {
    var initialValue = new ServerTelemetryEntity();
    var lastRequests = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
    return lastRequests || initialValue;
  };
  ServerTelemetryManager2.prototype.clearTelemetryCache = function() {
    var lastRequests = this.getLastRequests();
    var numErrorsFlushed = ServerTelemetryManager2.maxErrorsToSend(lastRequests);
    var errorCount = lastRequests.errors.length;
    if (numErrorsFlushed === errorCount) {
      this.cacheManager.removeItem(this.telemetryCacheKey);
    } else {
      var serverTelemEntity = new ServerTelemetryEntity();
      serverTelemEntity.failedRequests = lastRequests.failedRequests.slice(numErrorsFlushed * 2);
      serverTelemEntity.errors = lastRequests.errors.slice(numErrorsFlushed);
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, serverTelemEntity);
    }
  };
  ServerTelemetryManager2.maxErrorsToSend = function(serverTelemetryEntity) {
    var i;
    var maxErrors = 0;
    var dataSize = 0;
    var errorCount = serverTelemetryEntity.errors.length;
    for (i = 0; i < errorCount; i++) {
      var apiId = serverTelemetryEntity.failedRequests[2 * i] || Constants.EMPTY_STRING;
      var correlationId = serverTelemetryEntity.failedRequests[2 * i + 1] || Constants.EMPTY_STRING;
      var errorCode = serverTelemetryEntity.errors[i] || Constants.EMPTY_STRING;
      dataSize += apiId.toString().length + correlationId.toString().length + errorCode.length + 3;
      if (dataSize < SERVER_TELEM_CONSTANTS.MAX_LAST_HEADER_BYTES) {
        maxErrors += 1;
      } else {
        break;
      }
    }
    return maxErrors;
  };
  ServerTelemetryManager2.prototype.getRegionDiscoveryFields = function() {
    var regionDiscoveryFields = [];
    regionDiscoveryFields.push(this.regionUsed || Constants.EMPTY_STRING);
    regionDiscoveryFields.push(this.regionSource || Constants.EMPTY_STRING);
    regionDiscoveryFields.push(this.regionOutcome || Constants.EMPTY_STRING);
    return regionDiscoveryFields.join(",");
  };
  ServerTelemetryManager2.prototype.updateRegionDiscoveryMetadata = function(regionDiscoveryMetadata) {
    this.regionUsed = regionDiscoveryMetadata.region_used;
    this.regionSource = regionDiscoveryMetadata.region_source;
    this.regionOutcome = regionDiscoveryMetadata.region_outcome;
  };
  ServerTelemetryManager2.prototype.setCacheOutcome = function(cacheOutcome) {
    this.cacheOutcome = cacheOutcome;
  };
  return ServerTelemetryManager2;
}();

// node_modules/@azure/msal-common/dist/telemetry/performance/PerformanceClient.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var PerformanceClient = function() {
  function PerformanceClient2(clientId, authority, logger, libraryName, libraryVersion, applicationTelemetry) {
    this.authority = authority;
    this.libraryName = libraryName;
    this.libraryVersion = libraryVersion;
    this.applicationTelemetry = applicationTelemetry;
    this.clientId = clientId;
    this.logger = logger;
    this.callbacks = new Map();
    this.eventsByCorrelationId = new Map();
    this.staticFieldsByCorrelationId = new Map();
    this.measurementsById = new Map();
  }
  PerformanceClient2.prototype.startMeasurement = function(measureName, correlationId) {
    var _this = this;
    var _a, _b;
    var eventCorrelationId = correlationId || this.generateId();
    if (!correlationId) {
      this.logger.info("PerformanceClient: No correlation id provided for " + measureName + ", generating", eventCorrelationId);
    }
    this.logger.trace("PerformanceClient: Performance measurement started for " + measureName, eventCorrelationId);
    var performanceMeasurement = this.startPerformanceMeasuremeant(measureName, eventCorrelationId);
    performanceMeasurement.startMeasurement();
    var inProgressEvent = {
      eventId: this.generateId(),
      status: PerformanceEventStatus.InProgress,
      authority: this.authority,
      libraryName: this.libraryName,
      libraryVersion: this.libraryVersion,
      clientId: this.clientId,
      name: measureName,
      startTimeMs: Date.now(),
      correlationId: eventCorrelationId
    };
    this.cacheEventByCorrelationId(inProgressEvent);
    var staticFields = {
      appName: (_a = this.applicationTelemetry) === null || _a === void 0 ? void 0 : _a.appName,
      appVersion: (_b = this.applicationTelemetry) === null || _b === void 0 ? void 0 : _b.appVersion
    };
    this.addStaticFields(staticFields, eventCorrelationId);
    this.cacheMeasurement(inProgressEvent, performanceMeasurement);
    return {
      endMeasurement: function(event) {
        var completedEvent = _this.endMeasurement(__assign2(__assign2({}, inProgressEvent), event));
        if (completedEvent) {
          _this.cacheEventByCorrelationId(completedEvent);
        }
        return completedEvent;
      },
      flushMeasurement: function() {
        return _this.flushMeasurements(inProgressEvent.name, inProgressEvent.correlationId);
      },
      discardMeasurement: function() {
        return _this.discardMeasurements(inProgressEvent.correlationId);
      },
      addStaticFields: function(fields) {
        return _this.addStaticFields(fields, inProgressEvent.correlationId);
      },
      measurement: performanceMeasurement,
      event: inProgressEvent
    };
  };
  PerformanceClient2.prototype.endMeasurement = function(event) {
    var performanceMeasurement = this.measurementsById.get(event.eventId);
    if (performanceMeasurement) {
      this.measurementsById.delete(event.eventId);
      performanceMeasurement.endMeasurement();
      var durationMs = performanceMeasurement.flushMeasurement();
      if (durationMs !== null) {
        this.logger.trace("PerformanceClient: Performance measurement ended for " + event.name + ": " + durationMs + " ms", event.correlationId);
        var completedEvent = __assign2(__assign2({
          durationMs: Math.round(durationMs)
        }, event), {status: PerformanceEventStatus.Completed});
        return completedEvent;
      } else {
        this.logger.trace("PerformanceClient: Performance measurement not taken", event.correlationId);
      }
    } else {
      this.logger.trace("PerformanceClient: Measurement not found for " + event.eventId, event.correlationId);
    }
    return null;
  };
  PerformanceClient2.prototype.addStaticFields = function(fields, correlationId) {
    var existingStaticFields = this.staticFieldsByCorrelationId.get(correlationId);
    if (existingStaticFields) {
      this.logger.trace("PerformanceClient: Updating static fields");
      this.staticFieldsByCorrelationId.set(correlationId, __assign2(__assign2({}, existingStaticFields), fields));
    } else {
      this.logger.trace("PerformanceClient: Adding static fields");
      this.staticFieldsByCorrelationId.set(correlationId, fields);
    }
  };
  PerformanceClient2.prototype.cacheEventByCorrelationId = function(event) {
    var existingEvents = this.eventsByCorrelationId.get(event.correlationId);
    if (existingEvents) {
      this.logger.trace("PerformanceClient: Performance measurement for " + event.name + " added/updated", event.correlationId);
      existingEvents.set(event.eventId, event);
    } else {
      this.logger.trace("PerformanceClient: Performance measurement for " + event.name + " started", event.correlationId);
      this.eventsByCorrelationId.set(event.correlationId, new Map().set(event.eventId, event));
    }
  };
  PerformanceClient2.prototype.cacheMeasurement = function(event, measurement) {
    this.measurementsById.set(event.eventId, measurement);
  };
  PerformanceClient2.prototype.flushMeasurements = function(measureName, correlationId) {
    var _this = this;
    this.logger.trace("PerformanceClient: Performance measurements flushed for " + measureName, correlationId);
    var eventsForCorrelationId = this.eventsByCorrelationId.get(correlationId);
    if (eventsForCorrelationId) {
      this.discardMeasurements(correlationId);
      var completedEvents_1 = [];
      eventsForCorrelationId.forEach(function(event) {
        if (event.name !== measureName && event.status !== PerformanceEventStatus.Completed) {
          _this.logger.trace("PerformanceClient: Incomplete submeasurement " + event.name + " found for " + measureName, correlationId);
          var completedEvent = _this.endMeasurement(event);
          if (completedEvent) {
            completedEvents_1.push(completedEvent);
          }
        }
        completedEvents_1.push(event);
      });
      var sortedCompletedEvents = completedEvents_1.sort(function(eventA, eventB) {
        return eventA.startTimeMs - eventB.startTimeMs;
      });
      var topLevelEvents = sortedCompletedEvents.filter(function(event) {
        return event.name === measureName && event.status === PerformanceEventStatus.Completed;
      });
      if (topLevelEvents.length > 0) {
        if (topLevelEvents.length > 1) {
          this.logger.verbose("PerformanceClient: Multiple distinct top-level performance events found, using the first", correlationId);
        }
        var topLevelEvent = topLevelEvents[0];
        this.logger.verbose("PerformanceClient: Measurement found for " + measureName, correlationId);
        var eventToEmit = sortedCompletedEvents.reduce(function(previous, current) {
          if (current.name !== measureName) {
            _this.logger.trace("PerformanceClient: Complete submeasurement found for " + current.name, correlationId);
            var subMeasurementName = current.name + "DurationMs";
            if (!previous[subMeasurementName]) {
              previous[subMeasurementName] = current.durationMs;
            } else {
              _this.logger.verbose("PerformanceClient: Submeasurement for " + measureName + " already exists for " + current.name + ", ignoring", correlationId);
            }
          }
          return previous;
        }, topLevelEvent);
        var staticFields = this.staticFieldsByCorrelationId.get(correlationId);
        var finalEvent = __assign2(__assign2({}, eventToEmit), staticFields);
        this.emitEvents([finalEvent], eventToEmit.correlationId);
      } else {
        this.logger.verbose("PerformanceClient: No completed top-level measurements found for " + measureName, correlationId);
      }
    } else {
      this.logger.verbose("PerformanceClient: No measurements found", correlationId);
    }
  };
  PerformanceClient2.prototype.discardMeasurements = function(correlationId) {
    this.logger.trace("PerformanceClient: Performance measurements discarded", correlationId);
    this.eventsByCorrelationId.delete(correlationId);
  };
  PerformanceClient2.prototype.addPerformanceCallback = function(callback) {
    var callbackId = this.generateId();
    this.callbacks.set(callbackId, callback);
    this.logger.verbose("PerformanceClient: Performance callback registered with id: " + callbackId);
    return callbackId;
  };
  PerformanceClient2.prototype.removePerformanceCallback = function(callbackId) {
    var result = this.callbacks.delete(callbackId);
    if (result) {
      this.logger.verbose("PerformanceClient: Performance callback " + callbackId + " removed.");
    } else {
      this.logger.verbose("PerformanceClient: Performance callback " + callbackId + " not removed.");
    }
    return result;
  };
  PerformanceClient2.prototype.emitEvents = function(events, correlationId) {
    var _this = this;
    this.logger.verbose("PerformanceClient: Emitting performance events", correlationId);
    this.callbacks.forEach(function(callback, callbackId) {
      _this.logger.trace("PerformanceClient: Emitting event to callback " + callbackId, correlationId);
      callback.apply(null, [events]);
    });
  };
  return PerformanceClient2;
}();

// node_modules/@azure/msal-common/dist/telemetry/performance/StubPerformanceClient.js
/*! @azure/msal-common v9.0.1 2022-12-07 */
"use strict";
var StubPerformanceMeasurement = function() {
  function StubPerformanceMeasurement2() {
  }
  StubPerformanceMeasurement2.prototype.startMeasurement = function() {
  };
  StubPerformanceMeasurement2.prototype.endMeasurement = function() {
  };
  StubPerformanceMeasurement2.prototype.flushMeasurement = function() {
    return null;
  };
  return StubPerformanceMeasurement2;
}();
var StubPerformanceClient = function(_super) {
  __extends2(StubPerformanceClient2, _super);
  function StubPerformanceClient2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  StubPerformanceClient2.prototype.generateId = function() {
    return "callback-id";
  };
  StubPerformanceClient2.prototype.startPerformanceMeasuremeant = function() {
    return new StubPerformanceMeasurement();
  };
  return StubPerformanceClient2;
}(PerformanceClient);

// node_modules/@azure/msal-browser/dist/error/BrowserAuthError.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var BrowserAuthErrorMessage = {
  pkceNotGenerated: {
    code: "pkce_not_created",
    desc: "The PKCE code challenge and verifier could not be generated."
  },
  cryptoDoesNotExist: {
    code: "crypto_nonexistent",
    desc: "The crypto object or function is not available."
  },
  httpMethodNotImplementedError: {
    code: "http_method_not_implemented",
    desc: "The HTTP method given has not been implemented in this library."
  },
  emptyNavigateUriError: {
    code: "empty_navigate_uri",
    desc: "Navigation URI is empty. Please check stack trace for more info."
  },
  hashEmptyError: {
    code: "hash_empty_error",
    desc: "Hash value cannot be processed because it is empty. Please verify that your redirectUri is not clearing the hash. For more visit: aka.ms/msaljs/browser-errors."
  },
  hashDoesNotContainStateError: {
    code: "no_state_in_hash",
    desc: "Hash does not contain state. Please verify that the request originated from msal."
  },
  hashDoesNotContainKnownPropertiesError: {
    code: "hash_does_not_contain_known_properties",
    desc: "Hash does not contain known properites. Please verify that your redirectUri is not changing the hash. For more visit: aka.ms/msaljs/browser-errors."
  },
  unableToParseStateError: {
    code: "unable_to_parse_state",
    desc: "Unable to parse state. Please verify that the request originated from msal."
  },
  stateInteractionTypeMismatchError: {
    code: "state_interaction_type_mismatch",
    desc: "Hash contains state but the interaction type does not match the caller."
  },
  interactionInProgress: {
    code: "interaction_in_progress",
    desc: "Interaction is currently in progress. Please ensure that this interaction has been completed before calling an interactive API.  For more visit: aka.ms/msaljs/browser-errors."
  },
  popupWindowError: {
    code: "popup_window_error",
    desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
  },
  emptyWindowError: {
    code: "empty_window_error",
    desc: "window.open returned null or undefined window object."
  },
  userCancelledError: {
    code: "user_cancelled",
    desc: "User cancelled the flow."
  },
  monitorPopupTimeoutError: {
    code: "monitor_window_timeout",
    desc: "Token acquisition in popup failed due to timeout. For more visit: aka.ms/msaljs/browser-errors."
  },
  monitorIframeTimeoutError: {
    code: "monitor_window_timeout",
    desc: "Token acquisition in iframe failed due to timeout. For more visit: aka.ms/msaljs/browser-errors."
  },
  redirectInIframeError: {
    code: "redirect_in_iframe",
    desc: "Redirects are not supported for iframed or brokered applications. Please ensure you are using MSAL.js in a top frame of the window if using the redirect APIs, or use the popup APIs."
  },
  blockTokenRequestsInHiddenIframeError: {
    code: "block_iframe_reload",
    desc: "Request was blocked inside an iframe because MSAL detected an authentication response. For more visit: aka.ms/msaljs/browser-errors"
  },
  blockAcquireTokenInPopupsError: {
    code: "block_nested_popups",
    desc: "Request was blocked inside a popup because MSAL detected it was running in a popup."
  },
  iframeClosedPrematurelyError: {
    code: "iframe_closed_prematurely",
    desc: "The iframe being monitored was closed prematurely."
  },
  silentLogoutUnsupportedError: {
    code: "silent_logout_unsupported",
    desc: "Silent logout not supported. Please call logoutRedirect or logoutPopup instead."
  },
  noAccountError: {
    code: "no_account_error",
    desc: "No account object provided to acquireTokenSilent and no active account has been set. Please call setActiveAccount or provide an account on the request."
  },
  silentPromptValueError: {
    code: "silent_prompt_value_error",
    desc: "The value given for the prompt value is not valid for silent requests - must be set to 'none' or 'no_session'."
  },
  noTokenRequestCacheError: {
    code: "no_token_request_cache_error",
    desc: "No token request found in cache."
  },
  unableToParseTokenRequestCacheError: {
    code: "unable_to_parse_token_request_cache_error",
    desc: "The cached token request could not be parsed."
  },
  noCachedAuthorityError: {
    code: "no_cached_authority_error",
    desc: "No cached authority found."
  },
  authRequestNotSet: {
    code: "auth_request_not_set_error",
    desc: "Auth Request not set. Please ensure initiateAuthRequest was called from the InteractionHandler"
  },
  invalidCacheType: {
    code: "invalid_cache_type",
    desc: "Invalid cache type"
  },
  notInBrowserEnvironment: {
    code: "non_browser_environment",
    desc: "Login and token requests are not supported in non-browser environments."
  },
  databaseNotOpen: {
    code: "database_not_open",
    desc: "Database is not open!"
  },
  noNetworkConnectivity: {
    code: "no_network_connectivity",
    desc: "No network connectivity. Check your internet connection."
  },
  postRequestFailed: {
    code: "post_request_failed",
    desc: "Network request failed: If the browser threw a CORS error, check that the redirectUri is registered in the Azure App Portal as type 'SPA'"
  },
  getRequestFailed: {
    code: "get_request_failed",
    desc: "Network request failed. Please check the network trace to determine root cause."
  },
  failedToParseNetworkResponse: {
    code: "failed_to_parse_response",
    desc: "Failed to parse network response. Check network trace."
  },
  unableToLoadTokenError: {
    code: "unable_to_load_token",
    desc: "Error loading token to cache."
  },
  signingKeyNotFoundInStorage: {
    code: "crypto_key_not_found",
    desc: "Cryptographic Key or Keypair not found in browser storage."
  },
  authCodeRequired: {
    code: "auth_code_required",
    desc: "An authorization code must be provided (as the `code` property on the request) to this flow."
  },
  authCodeOrNativeAccountRequired: {
    code: "auth_code_or_nativeAccountId_required",
    desc: "An authorization code or nativeAccountId must be provided to this flow."
  },
  databaseUnavailable: {
    code: "database_unavailable",
    desc: "IndexedDB, which is required for persistent cryptographic key storage, is unavailable. This may be caused by browser privacy features which block persistent storage in third-party contexts."
  },
  unableToAcquireTokenFromNativePlatform: {
    code: "unable_to_acquire_token_from_native_platform",
    desc: "Unable to acquire token from native platform. For a list of possible reasons visit aka.ms/msaljs/browser-errors."
  },
  nativeHandshakeTimeout: {
    code: "native_handshake_timeout",
    desc: "Timed out while attempting to establish connection to browser extension"
  },
  nativeExtensionNotInstalled: {
    code: "native_extension_not_installed",
    desc: "Native extension is not installed. If you think this is a mistake call the initialize function."
  },
  nativeConnectionNotEstablished: {
    code: "native_connection_not_established",
    desc: "Connection to native platform has not been established. Please install a compatible browser extension and run initialize(). For more please visit aka.ms/msaljs/browser-errors."
  },
  nativeBrokerCalledBeforeInitialize: {
    code: "native_broker_called_before_initialize",
    desc: "You must call and await the initialize function before attempting to call any other MSAL API when native brokering is enabled. For more please visit aka.ms/msaljs/browser-errors."
  },
  nativePromptNotSupported: {
    code: "native_prompt_not_supported",
    desc: "The provided prompt is not supported by the native platform. This request should be routed to the web based flow."
  }
};
var BrowserAuthError = function(_super) {
  __extends(BrowserAuthError2, _super);
  function BrowserAuthError2(errorCode, errorMessage) {
    var _this = _super.call(this, errorCode, errorMessage) || this;
    Object.setPrototypeOf(_this, BrowserAuthError2.prototype);
    _this.name = "BrowserAuthError";
    return _this;
  }
  BrowserAuthError2.createPkceNotGeneratedError = function(errDetail) {
    return new BrowserAuthError2(BrowserAuthErrorMessage.pkceNotGenerated.code, BrowserAuthErrorMessage.pkceNotGenerated.desc + " Detail:" + errDetail);
  };
  BrowserAuthError2.createCryptoNotAvailableError = function(errDetail) {
    return new BrowserAuthError2(BrowserAuthErrorMessage.cryptoDoesNotExist.code, BrowserAuthErrorMessage.cryptoDoesNotExist.desc + " Detail:" + errDetail);
  };
  BrowserAuthError2.createHttpMethodNotImplementedError = function(method) {
    return new BrowserAuthError2(BrowserAuthErrorMessage.httpMethodNotImplementedError.code, BrowserAuthErrorMessage.httpMethodNotImplementedError.desc + " Given Method: " + method);
  };
  BrowserAuthError2.createEmptyNavigationUriError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.emptyNavigateUriError.code, BrowserAuthErrorMessage.emptyNavigateUriError.desc);
  };
  BrowserAuthError2.createEmptyHashError = function(hashValue) {
    return new BrowserAuthError2(BrowserAuthErrorMessage.hashEmptyError.code, BrowserAuthErrorMessage.hashEmptyError.desc + " Given Url: " + hashValue);
  };
  BrowserAuthError2.createHashDoesNotContainStateError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.hashDoesNotContainStateError.code, BrowserAuthErrorMessage.hashDoesNotContainStateError.desc);
  };
  BrowserAuthError2.createHashDoesNotContainKnownPropertiesError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.hashDoesNotContainKnownPropertiesError.code, BrowserAuthErrorMessage.hashDoesNotContainKnownPropertiesError.desc);
  };
  BrowserAuthError2.createUnableToParseStateError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.unableToParseStateError.code, BrowserAuthErrorMessage.unableToParseStateError.desc);
  };
  BrowserAuthError2.createStateInteractionTypeMismatchError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.stateInteractionTypeMismatchError.code, BrowserAuthErrorMessage.stateInteractionTypeMismatchError.desc);
  };
  BrowserAuthError2.createInteractionInProgressError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.interactionInProgress.code, BrowserAuthErrorMessage.interactionInProgress.desc);
  };
  BrowserAuthError2.createPopupWindowError = function(errDetail) {
    var errorMessage = BrowserAuthErrorMessage.popupWindowError.desc;
    errorMessage = !StringUtils.isEmpty(errDetail) ? errorMessage + " Details: " + errDetail : errorMessage;
    return new BrowserAuthError2(BrowserAuthErrorMessage.popupWindowError.code, errorMessage);
  };
  BrowserAuthError2.createEmptyWindowCreatedError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.emptyWindowError.code, BrowserAuthErrorMessage.emptyWindowError.desc);
  };
  BrowserAuthError2.createUserCancelledError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.userCancelledError.code, BrowserAuthErrorMessage.userCancelledError.desc);
  };
  BrowserAuthError2.createMonitorPopupTimeoutError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.monitorPopupTimeoutError.code, BrowserAuthErrorMessage.monitorPopupTimeoutError.desc);
  };
  BrowserAuthError2.createMonitorIframeTimeoutError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.monitorIframeTimeoutError.code, BrowserAuthErrorMessage.monitorIframeTimeoutError.desc);
  };
  BrowserAuthError2.createRedirectInIframeError = function(windowParentCheck) {
    return new BrowserAuthError2(BrowserAuthErrorMessage.redirectInIframeError.code, BrowserAuthErrorMessage.redirectInIframeError.desc + " (window.parent !== window) => " + windowParentCheck);
  };
  BrowserAuthError2.createBlockReloadInHiddenIframeError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.blockTokenRequestsInHiddenIframeError.code, BrowserAuthErrorMessage.blockTokenRequestsInHiddenIframeError.desc);
  };
  BrowserAuthError2.createBlockAcquireTokenInPopupsError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.blockAcquireTokenInPopupsError.code, BrowserAuthErrorMessage.blockAcquireTokenInPopupsError.desc);
  };
  BrowserAuthError2.createIframeClosedPrematurelyError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.iframeClosedPrematurelyError.code, BrowserAuthErrorMessage.iframeClosedPrematurelyError.desc);
  };
  BrowserAuthError2.createSilentLogoutUnsupportedError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.silentLogoutUnsupportedError.code, BrowserAuthErrorMessage.silentLogoutUnsupportedError.desc);
  };
  BrowserAuthError2.createNoAccountError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.noAccountError.code, BrowserAuthErrorMessage.noAccountError.desc);
  };
  BrowserAuthError2.createSilentPromptValueError = function(givenPrompt) {
    return new BrowserAuthError2(BrowserAuthErrorMessage.silentPromptValueError.code, BrowserAuthErrorMessage.silentPromptValueError.desc + " Given value: " + givenPrompt);
  };
  BrowserAuthError2.createUnableToParseTokenRequestCacheError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.unableToParseTokenRequestCacheError.code, BrowserAuthErrorMessage.unableToParseTokenRequestCacheError.desc);
  };
  BrowserAuthError2.createNoTokenRequestCacheError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.noTokenRequestCacheError.code, BrowserAuthErrorMessage.noTokenRequestCacheError.desc);
  };
  BrowserAuthError2.createAuthRequestNotSetError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.authRequestNotSet.code, BrowserAuthErrorMessage.authRequestNotSet.desc);
  };
  BrowserAuthError2.createNoCachedAuthorityError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.noCachedAuthorityError.code, BrowserAuthErrorMessage.noCachedAuthorityError.desc);
  };
  BrowserAuthError2.createInvalidCacheTypeError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.invalidCacheType.code, "" + BrowserAuthErrorMessage.invalidCacheType.desc);
  };
  BrowserAuthError2.createNonBrowserEnvironmentError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.notInBrowserEnvironment.code, BrowserAuthErrorMessage.notInBrowserEnvironment.desc);
  };
  BrowserAuthError2.createDatabaseNotOpenError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.databaseNotOpen.code, BrowserAuthErrorMessage.databaseNotOpen.desc);
  };
  BrowserAuthError2.createNoNetworkConnectivityError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.noNetworkConnectivity.code, BrowserAuthErrorMessage.noNetworkConnectivity.desc);
  };
  BrowserAuthError2.createPostRequestFailedError = function(errorDesc, endpoint) {
    return new BrowserAuthError2(BrowserAuthErrorMessage.postRequestFailed.code, BrowserAuthErrorMessage.postRequestFailed.desc + " | Network client threw: " + errorDesc + " | Attempted to reach: " + endpoint.split("?")[0]);
  };
  BrowserAuthError2.createGetRequestFailedError = function(errorDesc, endpoint) {
    return new BrowserAuthError2(BrowserAuthErrorMessage.getRequestFailed.code, BrowserAuthErrorMessage.getRequestFailed.desc + " | Network client threw: " + errorDesc + " | Attempted to reach: " + endpoint.split("?")[0]);
  };
  BrowserAuthError2.createFailedToParseNetworkResponseError = function(endpoint) {
    return new BrowserAuthError2(BrowserAuthErrorMessage.failedToParseNetworkResponse.code, BrowserAuthErrorMessage.failedToParseNetworkResponse.desc + " | Attempted to reach: " + endpoint.split("?")[0]);
  };
  BrowserAuthError2.createUnableToLoadTokenError = function(errorDetail) {
    return new BrowserAuthError2(BrowserAuthErrorMessage.unableToLoadTokenError.code, BrowserAuthErrorMessage.unableToLoadTokenError.desc + " | " + errorDetail);
  };
  BrowserAuthError2.createSigningKeyNotFoundInStorageError = function(keyId) {
    return new BrowserAuthError2(BrowserAuthErrorMessage.signingKeyNotFoundInStorage.code, BrowserAuthErrorMessage.signingKeyNotFoundInStorage.desc + " | No match found for KeyId: " + keyId);
  };
  BrowserAuthError2.createAuthCodeRequiredError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.authCodeRequired.code, BrowserAuthErrorMessage.authCodeRequired.desc);
  };
  BrowserAuthError2.createAuthCodeOrNativeAccountIdRequiredError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.authCodeOrNativeAccountRequired.code, BrowserAuthErrorMessage.authCodeOrNativeAccountRequired.desc);
  };
  BrowserAuthError2.createDatabaseUnavailableError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.databaseUnavailable.code, BrowserAuthErrorMessage.databaseUnavailable.desc);
  };
  BrowserAuthError2.createUnableToAcquireTokenFromNativePlatformError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.unableToAcquireTokenFromNativePlatform.code, BrowserAuthErrorMessage.unableToAcquireTokenFromNativePlatform.desc);
  };
  BrowserAuthError2.createNativeHandshakeTimeoutError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.nativeHandshakeTimeout.code, BrowserAuthErrorMessage.nativeHandshakeTimeout.desc);
  };
  BrowserAuthError2.createNativeExtensionNotInstalledError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.nativeExtensionNotInstalled.code, BrowserAuthErrorMessage.nativeExtensionNotInstalled.desc);
  };
  BrowserAuthError2.createNativeConnectionNotEstablishedError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.nativeConnectionNotEstablished.code, BrowserAuthErrorMessage.nativeConnectionNotEstablished.desc);
  };
  BrowserAuthError2.createNativeBrokerCalledBeforeInitialize = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.nativeBrokerCalledBeforeInitialize.code, BrowserAuthErrorMessage.nativeBrokerCalledBeforeInitialize.desc);
  };
  BrowserAuthError2.createNativePromptParameterNotSupportedError = function() {
    return new BrowserAuthError2(BrowserAuthErrorMessage.nativePromptNotSupported.code, BrowserAuthErrorMessage.nativePromptNotSupported.desc);
  };
  return BrowserAuthError2;
}(AuthError);

// node_modules/@azure/msal-browser/dist/utils/BrowserConstants.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var BrowserConstants = {
  INTERACTION_IN_PROGRESS_VALUE: "interaction_in_progress",
  INVALID_GRANT_ERROR: "invalid_grant",
  POPUP_WIDTH: 483,
  POPUP_HEIGHT: 600,
  POPUP_NAME_PREFIX: "msal",
  DEFAULT_POLL_INTERVAL_MS: 30,
  MSAL_SKU: "msal.js.browser"
};
var NativeConstants = {
  CHANNEL_ID: "53ee284d-920a-4b59-9d30-a60315b26836",
  PREFERRED_EXTENSION_ID: "ppnbnpeolgkicgegkbkbjmhlideopiji",
  MATS_TELEMETRY: "MATS"
};
var NativeExtensionMethod;
(function(NativeExtensionMethod2) {
  NativeExtensionMethod2["HandshakeRequest"] = "Handshake";
  NativeExtensionMethod2["HandshakeResponse"] = "HandshakeResponse";
  NativeExtensionMethod2["GetToken"] = "GetToken";
  NativeExtensionMethod2["Response"] = "Response";
})(NativeExtensionMethod || (NativeExtensionMethod = {}));
var BrowserCacheLocation;
(function(BrowserCacheLocation2) {
  BrowserCacheLocation2["LocalStorage"] = "localStorage";
  BrowserCacheLocation2["SessionStorage"] = "sessionStorage";
  BrowserCacheLocation2["MemoryStorage"] = "memoryStorage";
})(BrowserCacheLocation || (BrowserCacheLocation = {}));
var HTTP_REQUEST_TYPE;
(function(HTTP_REQUEST_TYPE2) {
  HTTP_REQUEST_TYPE2["GET"] = "GET";
  HTTP_REQUEST_TYPE2["POST"] = "POST";
})(HTTP_REQUEST_TYPE || (HTTP_REQUEST_TYPE = {}));
var TemporaryCacheKeys;
(function(TemporaryCacheKeys2) {
  TemporaryCacheKeys2["AUTHORITY"] = "authority";
  TemporaryCacheKeys2["ACQUIRE_TOKEN_ACCOUNT"] = "acquireToken.account";
  TemporaryCacheKeys2["SESSION_STATE"] = "session.state";
  TemporaryCacheKeys2["REQUEST_STATE"] = "request.state";
  TemporaryCacheKeys2["NONCE_IDTOKEN"] = "nonce.id_token";
  TemporaryCacheKeys2["ORIGIN_URI"] = "request.origin";
  TemporaryCacheKeys2["RENEW_STATUS"] = "token.renew.status";
  TemporaryCacheKeys2["URL_HASH"] = "urlHash";
  TemporaryCacheKeys2["REQUEST_PARAMS"] = "request.params";
  TemporaryCacheKeys2["SCOPES"] = "scopes";
  TemporaryCacheKeys2["INTERACTION_STATUS_KEY"] = "interaction.status";
  TemporaryCacheKeys2["CCS_CREDENTIAL"] = "ccs.credential";
  TemporaryCacheKeys2["CORRELATION_ID"] = "request.correlationId";
  TemporaryCacheKeys2["NATIVE_REQUEST"] = "request.native";
  TemporaryCacheKeys2["REDIRECT_CONTEXT"] = "request.redirect.context";
})(TemporaryCacheKeys || (TemporaryCacheKeys = {}));
var InMemoryCacheKeys;
(function(InMemoryCacheKeys2) {
  InMemoryCacheKeys2["WRAPPER_SKU"] = "wrapper.sku";
  InMemoryCacheKeys2["WRAPPER_VER"] = "wrapper.version";
})(InMemoryCacheKeys || (InMemoryCacheKeys = {}));
var ApiId;
(function(ApiId2) {
  ApiId2[ApiId2["acquireTokenRedirect"] = 861] = "acquireTokenRedirect";
  ApiId2[ApiId2["acquireTokenPopup"] = 862] = "acquireTokenPopup";
  ApiId2[ApiId2["ssoSilent"] = 863] = "ssoSilent";
  ApiId2[ApiId2["acquireTokenSilent_authCode"] = 864] = "acquireTokenSilent_authCode";
  ApiId2[ApiId2["handleRedirectPromise"] = 865] = "handleRedirectPromise";
  ApiId2[ApiId2["acquireTokenByCode"] = 866] = "acquireTokenByCode";
  ApiId2[ApiId2["acquireTokenSilent_silentFlow"] = 61] = "acquireTokenSilent_silentFlow";
  ApiId2[ApiId2["logout"] = 961] = "logout";
  ApiId2[ApiId2["logoutPopup"] = 962] = "logoutPopup";
})(ApiId || (ApiId = {}));
var InteractionType;
(function(InteractionType2) {
  InteractionType2["Redirect"] = "redirect";
  InteractionType2["Popup"] = "popup";
  InteractionType2["Silent"] = "silent";
  InteractionType2["None"] = "none";
})(InteractionType || (InteractionType = {}));
var InteractionStatus;
(function(InteractionStatus2) {
  InteractionStatus2["Startup"] = "startup";
  InteractionStatus2["Login"] = "login";
  InteractionStatus2["Logout"] = "logout";
  InteractionStatus2["AcquireToken"] = "acquireToken";
  InteractionStatus2["SsoSilent"] = "ssoSilent";
  InteractionStatus2["HandleRedirect"] = "handleRedirect";
  InteractionStatus2["None"] = "none";
})(InteractionStatus || (InteractionStatus = {}));
var DEFAULT_REQUEST = {
  scopes: OIDC_DEFAULT_SCOPES
};
var KEY_FORMAT_JWK = "jwk";
var WrapperSKU;
(function(WrapperSKU2) {
  WrapperSKU2["React"] = "@azure/msal-react";
  WrapperSKU2["Angular"] = "@azure/msal-angular";
})(WrapperSKU || (WrapperSKU = {}));
var DB_NAME = "msal.db";
var DB_VERSION = 1;
var DB_TABLE_NAME = DB_NAME + ".keys";
var CacheLookupPolicy;
(function(CacheLookupPolicy2) {
  CacheLookupPolicy2[CacheLookupPolicy2["Default"] = 0] = "Default";
  CacheLookupPolicy2[CacheLookupPolicy2["AccessToken"] = 1] = "AccessToken";
  CacheLookupPolicy2[CacheLookupPolicy2["AccessTokenAndRefreshToken"] = 2] = "AccessTokenAndRefreshToken";
  CacheLookupPolicy2[CacheLookupPolicy2["RefreshToken"] = 3] = "RefreshToken";
  CacheLookupPolicy2[CacheLookupPolicy2["RefreshTokenAndNetwork"] = 4] = "RefreshTokenAndNetwork";
  CacheLookupPolicy2[CacheLookupPolicy2["Skip"] = 5] = "Skip";
})(CacheLookupPolicy || (CacheLookupPolicy = {}));

// node_modules/@azure/msal-browser/dist/error/BrowserConfigurationAuthError.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var BrowserConfigurationAuthErrorMessage = {
  redirectUriNotSet: {
    code: "redirect_uri_empty",
    desc: "A redirect URI is required for all calls, and none has been set."
  },
  postLogoutUriNotSet: {
    code: "post_logout_uri_empty",
    desc: "A post logout redirect has not been set."
  },
  storageNotSupportedError: {
    code: "storage_not_supported",
    desc: "Given storage configuration option was not supported."
  },
  noRedirectCallbacksSet: {
    code: "no_redirect_callbacks",
    desc: "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
  },
  invalidCallbackObject: {
    code: "invalid_callback_object",
    desc: "The object passed for the callback was invalid. More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
  },
  stubPcaInstanceCalled: {
    code: "stubbed_public_client_application_called",
    desc: "Stub instance of Public Client Application was called. If using msal-react, please ensure context is not used without a provider. For more visit: aka.ms/msaljs/browser-errors"
  },
  inMemRedirectUnavailable: {
    code: "in_mem_redirect_unavailable",
    desc: "Redirect cannot be supported. In-memory storage was selected and storeAuthStateInCookie=false, which would cause the library to be unable to handle the incoming hash. If you would like to use the redirect API, please use session/localStorage or set storeAuthStateInCookie=true."
  },
  entropyNotProvided: {
    code: "entropy_not_provided",
    desc: "The available browser crypto interface requires entropy set via system.cryptoOptions.entropy configuration option."
  }
};
var BrowserConfigurationAuthError = function(_super) {
  __extends(BrowserConfigurationAuthError2, _super);
  function BrowserConfigurationAuthError2(errorCode, errorMessage) {
    var _this = _super.call(this, errorCode, errorMessage) || this;
    _this.name = "BrowserConfigurationAuthError";
    Object.setPrototypeOf(_this, BrowserConfigurationAuthError2.prototype);
    return _this;
  }
  BrowserConfigurationAuthError2.createRedirectUriEmptyError = function() {
    return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.redirectUriNotSet.code, BrowserConfigurationAuthErrorMessage.redirectUriNotSet.desc);
  };
  BrowserConfigurationAuthError2.createPostLogoutRedirectUriEmptyError = function() {
    return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.postLogoutUriNotSet.code, BrowserConfigurationAuthErrorMessage.postLogoutUriNotSet.desc);
  };
  BrowserConfigurationAuthError2.createStorageNotSupportedError = function(givenStorageLocation) {
    return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.storageNotSupportedError.code, BrowserConfigurationAuthErrorMessage.storageNotSupportedError.desc + " Given Location: " + givenStorageLocation);
  };
  BrowserConfigurationAuthError2.createRedirectCallbacksNotSetError = function() {
    return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.noRedirectCallbacksSet.code, BrowserConfigurationAuthErrorMessage.noRedirectCallbacksSet.desc);
  };
  BrowserConfigurationAuthError2.createStubPcaInstanceCalledError = function() {
    return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.stubPcaInstanceCalled.code, BrowserConfigurationAuthErrorMessage.stubPcaInstanceCalled.desc);
  };
  BrowserConfigurationAuthError2.createInMemoryRedirectUnavailableError = function() {
    return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.inMemRedirectUnavailable.code, BrowserConfigurationAuthErrorMessage.inMemRedirectUnavailable.desc);
  };
  BrowserConfigurationAuthError2.createEntropyNotProvided = function() {
    return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.entropyNotProvided.code, BrowserConfigurationAuthErrorMessage.entropyNotProvided.desc);
  };
  return BrowserConfigurationAuthError2;
}(AuthError);

// node_modules/@azure/msal-browser/dist/cache/BrowserStorage.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var BrowserStorage = function() {
  function BrowserStorage2(cacheLocation) {
    this.validateWindowStorage(cacheLocation);
    this.windowStorage = window[cacheLocation];
  }
  BrowserStorage2.prototype.validateWindowStorage = function(cacheLocation) {
    if (cacheLocation !== BrowserCacheLocation.LocalStorage && cacheLocation !== BrowserCacheLocation.SessionStorage) {
      throw BrowserConfigurationAuthError.createStorageNotSupportedError(cacheLocation);
    }
    var storageSupported = !!window[cacheLocation];
    if (!storageSupported) {
      throw BrowserConfigurationAuthError.createStorageNotSupportedError(cacheLocation);
    }
  };
  BrowserStorage2.prototype.getItem = function(key) {
    return this.windowStorage.getItem(key);
  };
  BrowserStorage2.prototype.setItem = function(key, value) {
    this.windowStorage.setItem(key, value);
  };
  BrowserStorage2.prototype.removeItem = function(key) {
    this.windowStorage.removeItem(key);
  };
  BrowserStorage2.prototype.getKeys = function() {
    return Object.keys(this.windowStorage);
  };
  BrowserStorage2.prototype.containsKey = function(key) {
    return this.windowStorage.hasOwnProperty(key);
  };
  return BrowserStorage2;
}();

// node_modules/@azure/msal-browser/dist/cache/MemoryStorage.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var MemoryStorage = function() {
  function MemoryStorage2() {
    this.cache = new Map();
  }
  MemoryStorage2.prototype.getItem = function(key) {
    return this.cache.get(key) || null;
  };
  MemoryStorage2.prototype.setItem = function(key, value) {
    this.cache.set(key, value);
  };
  MemoryStorage2.prototype.removeItem = function(key) {
    this.cache.delete(key);
  };
  MemoryStorage2.prototype.getKeys = function() {
    var cacheKeys = [];
    this.cache.forEach(function(value, key) {
      cacheKeys.push(key);
    });
    return cacheKeys;
  };
  MemoryStorage2.prototype.containsKey = function(key) {
    return this.cache.has(key);
  };
  MemoryStorage2.prototype.clear = function() {
    this.cache.clear();
  };
  return MemoryStorage2;
}();

// node_modules/@azure/msal-browser/dist/utils/BrowserProtocolUtils.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var BrowserProtocolUtils = function() {
  function BrowserProtocolUtils2() {
  }
  BrowserProtocolUtils2.extractBrowserRequestState = function(browserCrypto, state) {
    if (StringUtils.isEmpty(state)) {
      return null;
    }
    try {
      var requestStateObj = ProtocolUtils.parseRequestState(browserCrypto, state);
      return requestStateObj.libraryState.meta;
    } catch (e) {
      throw ClientAuthError.createInvalidStateError(state, e);
    }
  };
  BrowserProtocolUtils2.parseServerResponseFromHash = function(locationHash) {
    if (!locationHash) {
      return {};
    }
    var hashUrlString = new UrlString(locationHash);
    return UrlString.getDeserializedHash(hashUrlString.getHash());
  };
  return BrowserProtocolUtils2;
}();

// node_modules/@azure/msal-browser/dist/cache/BrowserCacheManager.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var BrowserCacheManager = function(_super) {
  __extends(BrowserCacheManager2, _super);
  function BrowserCacheManager2(clientId, cacheConfig, cryptoImpl, logger) {
    var _this = _super.call(this, clientId, cryptoImpl) || this;
    _this.COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1e3;
    _this.cacheConfig = cacheConfig;
    _this.logger = logger;
    _this.internalStorage = new MemoryStorage();
    _this.browserStorage = _this.setupBrowserStorage(_this.cacheConfig.cacheLocation);
    _this.temporaryCacheStorage = _this.setupTemporaryCacheStorage(_this.cacheConfig.cacheLocation);
    _this.migrateCacheEntries();
    return _this;
  }
  BrowserCacheManager2.prototype.setupBrowserStorage = function(cacheLocation) {
    switch (cacheLocation) {
      case BrowserCacheLocation.LocalStorage:
      case BrowserCacheLocation.SessionStorage:
        try {
          return new BrowserStorage(cacheLocation);
        } catch (e) {
          this.logger.verbose(e);
          break;
        }
    }
    this.cacheConfig.cacheLocation = BrowserCacheLocation.MemoryStorage;
    return new MemoryStorage();
  };
  BrowserCacheManager2.prototype.setupTemporaryCacheStorage = function(cacheLocation) {
    switch (cacheLocation) {
      case BrowserCacheLocation.LocalStorage:
      case BrowserCacheLocation.SessionStorage:
        try {
          return new BrowserStorage(BrowserCacheLocation.SessionStorage);
        } catch (e) {
          this.logger.verbose(e);
          return this.internalStorage;
        }
      case BrowserCacheLocation.MemoryStorage:
      default:
        return this.internalStorage;
    }
  };
  BrowserCacheManager2.prototype.migrateCacheEntries = function() {
    var _this = this;
    var idTokenKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ID_TOKEN;
    var clientInfoKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.CLIENT_INFO;
    var errorKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ERROR;
    var errorDescKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ERROR_DESC;
    var idTokenValue = this.browserStorage.getItem(idTokenKey);
    var clientInfoValue = this.browserStorage.getItem(clientInfoKey);
    var errorValue = this.browserStorage.getItem(errorKey);
    var errorDescValue = this.browserStorage.getItem(errorDescKey);
    var values = [idTokenValue, clientInfoValue, errorValue, errorDescValue];
    var keysToMigrate = [PersistentCacheKeys.ID_TOKEN, PersistentCacheKeys.CLIENT_INFO, PersistentCacheKeys.ERROR, PersistentCacheKeys.ERROR_DESC];
    keysToMigrate.forEach(function(cacheKey, index) {
      return _this.migrateCacheEntry(cacheKey, values[index]);
    });
  };
  BrowserCacheManager2.prototype.migrateCacheEntry = function(newKey, value) {
    if (value) {
      this.setTemporaryCache(newKey, value, true);
    }
  };
  BrowserCacheManager2.prototype.validateAndParseJson = function(jsonValue) {
    try {
      var parsedJson = JSON.parse(jsonValue);
      return parsedJson && typeof parsedJson === "object" ? parsedJson : null;
    } catch (error) {
      return null;
    }
  };
  BrowserCacheManager2.prototype.getItem = function(key) {
    return this.browserStorage.getItem(key);
  };
  BrowserCacheManager2.prototype.setItem = function(key, value) {
    this.browserStorage.setItem(key, value);
  };
  BrowserCacheManager2.prototype.getAccount = function(accountKey) {
    var account = this.getItem(accountKey);
    if (!account) {
      return null;
    }
    var parsedAccount = this.validateAndParseJson(account);
    if (!parsedAccount || !AccountEntity.isAccountEntity(parsedAccount)) {
      return null;
    }
    return CacheManager.toObject(new AccountEntity(), parsedAccount);
  };
  BrowserCacheManager2.prototype.setAccount = function(account) {
    this.logger.trace("BrowserCacheManager.setAccount called");
    var key = account.generateAccountKey();
    this.setItem(key, JSON.stringify(account));
  };
  BrowserCacheManager2.prototype.getIdTokenCredential = function(idTokenKey) {
    var value = this.getItem(idTokenKey);
    if (!value) {
      this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit");
      return null;
    }
    var parsedIdToken = this.validateAndParseJson(value);
    if (!parsedIdToken || !IdTokenEntity.isIdTokenEntity(parsedIdToken)) {
      this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit");
      return null;
    }
    this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit");
    return CacheManager.toObject(new IdTokenEntity(), parsedIdToken);
  };
  BrowserCacheManager2.prototype.setIdTokenCredential = function(idToken) {
    this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
    var idTokenKey = idToken.generateCredentialKey();
    this.setItem(idTokenKey, JSON.stringify(idToken));
  };
  BrowserCacheManager2.prototype.getAccessTokenCredential = function(accessTokenKey) {
    var value = this.getItem(accessTokenKey);
    if (!value) {
      this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit");
      return null;
    }
    var parsedAccessToken = this.validateAndParseJson(value);
    if (!parsedAccessToken || !AccessTokenEntity.isAccessTokenEntity(parsedAccessToken)) {
      this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit");
      return null;
    }
    this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit");
    return CacheManager.toObject(new AccessTokenEntity(), parsedAccessToken);
  };
  BrowserCacheManager2.prototype.setAccessTokenCredential = function(accessToken) {
    this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
    var accessTokenKey = accessToken.generateCredentialKey();
    this.setItem(accessTokenKey, JSON.stringify(accessToken));
  };
  BrowserCacheManager2.prototype.getRefreshTokenCredential = function(refreshTokenKey) {
    var value = this.getItem(refreshTokenKey);
    if (!value) {
      this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit");
      return null;
    }
    var parsedRefreshToken = this.validateAndParseJson(value);
    if (!parsedRefreshToken || !RefreshTokenEntity.isRefreshTokenEntity(parsedRefreshToken)) {
      this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit");
      return null;
    }
    this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit");
    return CacheManager.toObject(new RefreshTokenEntity(), parsedRefreshToken);
  };
  BrowserCacheManager2.prototype.setRefreshTokenCredential = function(refreshToken) {
    this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
    var refreshTokenKey = refreshToken.generateCredentialKey();
    this.setItem(refreshTokenKey, JSON.stringify(refreshToken));
  };
  BrowserCacheManager2.prototype.getAppMetadata = function(appMetadataKey) {
    var value = this.getItem(appMetadataKey);
    if (!value) {
      this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit");
      return null;
    }
    var parsedMetadata = this.validateAndParseJson(value);
    if (!parsedMetadata || !AppMetadataEntity.isAppMetadataEntity(appMetadataKey, parsedMetadata)) {
      this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit");
      return null;
    }
    this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit");
    return CacheManager.toObject(new AppMetadataEntity(), parsedMetadata);
  };
  BrowserCacheManager2.prototype.setAppMetadata = function(appMetadata) {
    this.logger.trace("BrowserCacheManager.setAppMetadata called");
    var appMetadataKey = appMetadata.generateAppMetadataKey();
    this.setItem(appMetadataKey, JSON.stringify(appMetadata));
  };
  BrowserCacheManager2.prototype.getServerTelemetry = function(serverTelemetryKey) {
    var value = this.getItem(serverTelemetryKey);
    if (!value) {
      this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit");
      return null;
    }
    var parsedMetadata = this.validateAndParseJson(value);
    if (!parsedMetadata || !ServerTelemetryEntity.isServerTelemetryEntity(serverTelemetryKey, parsedMetadata)) {
      this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit");
      return null;
    }
    this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit");
    return CacheManager.toObject(new ServerTelemetryEntity(), parsedMetadata);
  };
  BrowserCacheManager2.prototype.setServerTelemetry = function(serverTelemetryKey, serverTelemetry) {
    this.logger.trace("BrowserCacheManager.setServerTelemetry called");
    this.setItem(serverTelemetryKey, JSON.stringify(serverTelemetry));
  };
  BrowserCacheManager2.prototype.getAuthorityMetadata = function(key) {
    var value = this.internalStorage.getItem(key);
    if (!value) {
      this.logger.trace("BrowserCacheManager.getAuthorityMetadata: called, no cache hit");
      return null;
    }
    var parsedMetadata = this.validateAndParseJson(value);
    if (parsedMetadata && AuthorityMetadataEntity.isAuthorityMetadataEntity(key, parsedMetadata)) {
      this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit");
      return CacheManager.toObject(new AuthorityMetadataEntity(), parsedMetadata);
    }
    return null;
  };
  BrowserCacheManager2.prototype.getAuthorityMetadataKeys = function() {
    var _this = this;
    var allKeys = this.internalStorage.getKeys();
    return allKeys.filter(function(key) {
      return _this.isAuthorityMetadata(key);
    });
  };
  BrowserCacheManager2.prototype.setWrapperMetadata = function(wrapperSKU, wrapperVersion) {
    this.internalStorage.setItem(InMemoryCacheKeys.WRAPPER_SKU, wrapperSKU);
    this.internalStorage.setItem(InMemoryCacheKeys.WRAPPER_VER, wrapperVersion);
  };
  BrowserCacheManager2.prototype.getWrapperMetadata = function() {
    var sku = this.internalStorage.getItem(InMemoryCacheKeys.WRAPPER_SKU) || Constants.EMPTY_STRING;
    var version3 = this.internalStorage.getItem(InMemoryCacheKeys.WRAPPER_VER) || Constants.EMPTY_STRING;
    return [sku, version3];
  };
  BrowserCacheManager2.prototype.setAuthorityMetadata = function(key, entity) {
    this.logger.trace("BrowserCacheManager.setAuthorityMetadata called");
    this.internalStorage.setItem(key, JSON.stringify(entity));
  };
  BrowserCacheManager2.prototype.getActiveAccount = function() {
    var activeAccountKeyFilters = this.generateCacheKey(PersistentCacheKeys.ACTIVE_ACCOUNT_FILTERS);
    var activeAccountValueFilters = this.getItem(activeAccountKeyFilters);
    if (!activeAccountValueFilters) {
      this.logger.trace("No active account filters cache schema found, looking for legacy schema");
      var activeAccountKeyLocal = this.generateCacheKey(PersistentCacheKeys.ACTIVE_ACCOUNT);
      var activeAccountValueLocal = this.getItem(activeAccountKeyLocal);
      if (!activeAccountValueLocal) {
        this.logger.trace("No active account found");
        return null;
      }
      var activeAccount = this.getAccountInfoByFilter({localAccountId: activeAccountValueLocal})[0] || null;
      if (activeAccount) {
        this.logger.trace("Legacy active account cache schema found");
        this.logger.trace("Adding active account filters cache schema");
        this.setActiveAccount(activeAccount);
        return activeAccount;
      }
      return null;
    }
    var activeAccountValueObj = this.validateAndParseJson(activeAccountValueFilters);
    if (activeAccountValueObj) {
      this.logger.trace("Active account filters schema found");
      return this.getAccountInfoByFilter({
        homeAccountId: activeAccountValueObj.homeAccountId,
        localAccountId: activeAccountValueObj.localAccountId
      })[0] || null;
    }
    this.logger.trace("No active account found");
    return null;
  };
  BrowserCacheManager2.prototype.setActiveAccount = function(account) {
    var activeAccountKey = this.generateCacheKey(PersistentCacheKeys.ACTIVE_ACCOUNT_FILTERS);
    var activeAccountKeyLocal = this.generateCacheKey(PersistentCacheKeys.ACTIVE_ACCOUNT);
    if (account) {
      this.logger.verbose("setActiveAccount: Active account set");
      var activeAccountValue = {
        homeAccountId: account.homeAccountId,
        localAccountId: account.localAccountId
      };
      this.browserStorage.setItem(activeAccountKey, JSON.stringify(activeAccountValue));
      this.browserStorage.setItem(activeAccountKeyLocal, account.localAccountId);
    } else {
      this.logger.verbose("setActiveAccount: No account passed, active account not set");
      this.browserStorage.removeItem(activeAccountKey);
      this.browserStorage.removeItem(activeAccountKeyLocal);
    }
  };
  BrowserCacheManager2.prototype.getAccountInfoByFilter = function(accountFilter) {
    var allAccounts = this.getAllAccounts();
    return allAccounts.filter(function(accountObj) {
      if (accountFilter.username && accountFilter.username.toLowerCase() !== accountObj.username.toLowerCase()) {
        return false;
      }
      if (accountFilter.homeAccountId && accountFilter.homeAccountId !== accountObj.homeAccountId) {
        return false;
      }
      if (accountFilter.localAccountId && accountFilter.localAccountId !== accountObj.localAccountId) {
        return false;
      }
      if (accountFilter.tenantId && accountFilter.tenantId !== accountObj.tenantId) {
        return false;
      }
      if (accountFilter.environment && accountFilter.environment !== accountObj.environment) {
        return false;
      }
      return true;
    });
  };
  BrowserCacheManager2.prototype.getAccountInfoByHints = function(loginHint, sid) {
    var matchingAccounts = this.getAllAccounts().filter(function(accountInfo) {
      if (sid) {
        var accountSid = accountInfo.idTokenClaims && accountInfo.idTokenClaims["sid"];
        return sid === accountSid;
      }
      if (loginHint) {
        return loginHint === accountInfo.username;
      }
      return false;
    });
    if (matchingAccounts.length === 1) {
      return matchingAccounts[0];
    } else if (matchingAccounts.length > 1) {
      throw ClientAuthError.createMultipleMatchingAccountsInCacheError();
    }
    return null;
  };
  BrowserCacheManager2.prototype.getThrottlingCache = function(throttlingCacheKey) {
    var value = this.getItem(throttlingCacheKey);
    if (!value) {
      this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit");
      return null;
    }
    var parsedThrottlingCache = this.validateAndParseJson(value);
    if (!parsedThrottlingCache || !ThrottlingEntity.isThrottlingEntity(throttlingCacheKey, parsedThrottlingCache)) {
      this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit");
      return null;
    }
    this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit");
    return CacheManager.toObject(new ThrottlingEntity(), parsedThrottlingCache);
  };
  BrowserCacheManager2.prototype.setThrottlingCache = function(throttlingCacheKey, throttlingCache) {
    this.logger.trace("BrowserCacheManager.setThrottlingCache called");
    this.setItem(throttlingCacheKey, JSON.stringify(throttlingCache));
  };
  BrowserCacheManager2.prototype.getTemporaryCache = function(cacheKey, generateKey) {
    var key = generateKey ? this.generateCacheKey(cacheKey) : cacheKey;
    if (this.cacheConfig.storeAuthStateInCookie) {
      var itemCookie = this.getItemCookie(key);
      if (itemCookie) {
        this.logger.trace("BrowserCacheManager.getTemporaryCache: storeAuthStateInCookies set to true, retrieving from cookies");
        return itemCookie;
      }
    }
    var value = this.temporaryCacheStorage.getItem(key);
    if (!value) {
      if (this.cacheConfig.cacheLocation === BrowserCacheLocation.LocalStorage) {
        var item = this.browserStorage.getItem(key);
        if (item) {
          this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item found in local storage");
          return item;
        }
      }
      this.logger.trace("BrowserCacheManager.getTemporaryCache: No cache item found in local storage");
      return null;
    }
    this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item returned");
    return value;
  };
  BrowserCacheManager2.prototype.setTemporaryCache = function(cacheKey, value, generateKey) {
    var key = generateKey ? this.generateCacheKey(cacheKey) : cacheKey;
    this.temporaryCacheStorage.setItem(key, value);
    if (this.cacheConfig.storeAuthStateInCookie) {
      this.logger.trace("BrowserCacheManager.setTemporaryCache: storeAuthStateInCookie set to true, setting item cookie");
      this.setItemCookie(key, value);
    }
  };
  BrowserCacheManager2.prototype.removeItem = function(key) {
    this.browserStorage.removeItem(key);
    this.temporaryCacheStorage.removeItem(key);
    if (this.cacheConfig.storeAuthStateInCookie) {
      this.logger.trace("BrowserCacheManager.removeItem: storeAuthStateInCookie is true, clearing item cookie");
      this.clearItemCookie(key);
    }
    return true;
  };
  BrowserCacheManager2.prototype.containsKey = function(key) {
    return this.browserStorage.containsKey(key) || this.temporaryCacheStorage.containsKey(key);
  };
  BrowserCacheManager2.prototype.getKeys = function() {
    return __spread(this.browserStorage.getKeys(), this.temporaryCacheStorage.getKeys());
  };
  BrowserCacheManager2.prototype.clear = function() {
    return __awaiter(this, void 0, void 0, function() {
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.removeAllAccounts()];
          case 1:
            _a.sent();
            this.removeAppMetadata();
            this.getKeys().forEach(function(cacheKey) {
              if ((_this.browserStorage.containsKey(cacheKey) || _this.temporaryCacheStorage.containsKey(cacheKey)) && (cacheKey.indexOf(Constants.CACHE_PREFIX) !== -1 || cacheKey.indexOf(_this.clientId) !== -1)) {
                _this.removeItem(cacheKey);
              }
            });
            this.internalStorage.clear();
            return [2];
        }
      });
    });
  };
  BrowserCacheManager2.prototype.setItemCookie = function(cookieName, cookieValue, expires) {
    var cookieStr = encodeURIComponent(cookieName) + "=" + encodeURIComponent(cookieValue) + ";path=/;SameSite=Lax;";
    if (expires) {
      var expireTime = this.getCookieExpirationTime(expires);
      cookieStr += "expires=" + expireTime + ";";
    }
    if (this.cacheConfig.secureCookies) {
      cookieStr += "Secure;";
    }
    document.cookie = cookieStr;
  };
  BrowserCacheManager2.prototype.getItemCookie = function(cookieName) {
    var name3 = encodeURIComponent(cookieName) + "=";
    var cookieList = document.cookie.split(";");
    for (var i = 0; i < cookieList.length; i++) {
      var cookie = cookieList[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name3) === 0) {
        return decodeURIComponent(cookie.substring(name3.length, cookie.length));
      }
    }
    return Constants.EMPTY_STRING;
  };
  BrowserCacheManager2.prototype.clearMsalCookies = function() {
    var _this = this;
    var cookiePrefix = Constants.CACHE_PREFIX + "." + this.clientId;
    var cookieList = document.cookie.split(";");
    cookieList.forEach(function(cookie) {
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookiePrefix) === 0) {
        var cookieKey = cookie.split("=")[0];
        _this.clearItemCookie(cookieKey);
      }
    });
  };
  BrowserCacheManager2.prototype.clearItemCookie = function(cookieName) {
    this.setItemCookie(cookieName, Constants.EMPTY_STRING, -1);
  };
  BrowserCacheManager2.prototype.getCookieExpirationTime = function(cookieLifeDays) {
    var today = new Date();
    var expr = new Date(today.getTime() + cookieLifeDays * this.COOKIE_LIFE_MULTIPLIER);
    return expr.toUTCString();
  };
  BrowserCacheManager2.prototype.getCache = function() {
    return this.browserStorage;
  };
  BrowserCacheManager2.prototype.setCache = function() {
  };
  BrowserCacheManager2.prototype.generateCacheKey = function(key) {
    var generatedKey = this.validateAndParseJson(key);
    if (!generatedKey) {
      if (StringUtils.startsWith(key, Constants.CACHE_PREFIX) || StringUtils.startsWith(key, PersistentCacheKeys.ADAL_ID_TOKEN)) {
        return key;
      }
      return Constants.CACHE_PREFIX + "." + this.clientId + "." + key;
    }
    return JSON.stringify(key);
  };
  BrowserCacheManager2.prototype.generateAuthorityKey = function(stateString) {
    var stateId = ProtocolUtils.parseRequestState(this.cryptoImpl, stateString).libraryState.id;
    return this.generateCacheKey(TemporaryCacheKeys.AUTHORITY + "." + stateId);
  };
  BrowserCacheManager2.prototype.generateNonceKey = function(stateString) {
    var stateId = ProtocolUtils.parseRequestState(this.cryptoImpl, stateString).libraryState.id;
    return this.generateCacheKey(TemporaryCacheKeys.NONCE_IDTOKEN + "." + stateId);
  };
  BrowserCacheManager2.prototype.generateStateKey = function(stateString) {
    var stateId = ProtocolUtils.parseRequestState(this.cryptoImpl, stateString).libraryState.id;
    return this.generateCacheKey(TemporaryCacheKeys.REQUEST_STATE + "." + stateId);
  };
  BrowserCacheManager2.prototype.getCachedAuthority = function(cachedState) {
    var stateCacheKey = this.generateStateKey(cachedState);
    var state = this.getTemporaryCache(stateCacheKey);
    if (!state) {
      return null;
    }
    var authorityCacheKey = this.generateAuthorityKey(state);
    return this.getTemporaryCache(authorityCacheKey);
  };
  BrowserCacheManager2.prototype.updateCacheEntries = function(state, nonce, authorityInstance, loginHint, account) {
    this.logger.trace("BrowserCacheManager.updateCacheEntries called");
    var stateCacheKey = this.generateStateKey(state);
    this.setTemporaryCache(stateCacheKey, state, false);
    var nonceCacheKey = this.generateNonceKey(state);
    this.setTemporaryCache(nonceCacheKey, nonce, false);
    var authorityCacheKey = this.generateAuthorityKey(state);
    this.setTemporaryCache(authorityCacheKey, authorityInstance, false);
    if (account) {
      var ccsCredential = {
        credential: account.homeAccountId,
        type: CcsCredentialType.HOME_ACCOUNT_ID
      };
      this.setTemporaryCache(TemporaryCacheKeys.CCS_CREDENTIAL, JSON.stringify(ccsCredential), true);
    } else if (!StringUtils.isEmpty(loginHint)) {
      var ccsCredential = {
        credential: loginHint,
        type: CcsCredentialType.UPN
      };
      this.setTemporaryCache(TemporaryCacheKeys.CCS_CREDENTIAL, JSON.stringify(ccsCredential), true);
    }
  };
  BrowserCacheManager2.prototype.resetRequestCache = function(state) {
    var _this = this;
    this.logger.trace("BrowserCacheManager.resetRequestCache called");
    if (!StringUtils.isEmpty(state)) {
      this.getKeys().forEach(function(key) {
        if (key.indexOf(state) !== -1) {
          _this.removeItem(key);
        }
      });
    }
    if (state) {
      this.removeItem(this.generateStateKey(state));
      this.removeItem(this.generateNonceKey(state));
      this.removeItem(this.generateAuthorityKey(state));
    }
    this.removeItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS));
    this.removeItem(this.generateCacheKey(TemporaryCacheKeys.ORIGIN_URI));
    this.removeItem(this.generateCacheKey(TemporaryCacheKeys.URL_HASH));
    this.removeItem(this.generateCacheKey(TemporaryCacheKeys.CORRELATION_ID));
    this.removeItem(this.generateCacheKey(TemporaryCacheKeys.CCS_CREDENTIAL));
    this.removeItem(this.generateCacheKey(TemporaryCacheKeys.NATIVE_REQUEST));
    this.setInteractionInProgress(false);
  };
  BrowserCacheManager2.prototype.cleanRequestByState = function(stateString) {
    this.logger.trace("BrowserCacheManager.cleanRequestByState called");
    if (stateString) {
      var stateKey = this.generateStateKey(stateString);
      var cachedState = this.temporaryCacheStorage.getItem(stateKey);
      this.logger.infoPii("BrowserCacheManager.cleanRequestByState: Removing temporary cache items for state: " + cachedState);
      this.resetRequestCache(cachedState || Constants.EMPTY_STRING);
    }
    this.clearMsalCookies();
  };
  BrowserCacheManager2.prototype.cleanRequestByInteractionType = function(interactionType) {
    var _this = this;
    this.logger.trace("BrowserCacheManager.cleanRequestByInteractionType called");
    this.getKeys().forEach(function(key) {
      if (key.indexOf(TemporaryCacheKeys.REQUEST_STATE) === -1) {
        return;
      }
      var stateValue = _this.temporaryCacheStorage.getItem(key);
      if (!stateValue) {
        return;
      }
      var parsedState = BrowserProtocolUtils.extractBrowserRequestState(_this.cryptoImpl, stateValue);
      if (parsedState && parsedState.interactionType === interactionType) {
        _this.logger.infoPii("BrowserCacheManager.cleanRequestByInteractionType: Removing temporary cache items for state: " + stateValue);
        _this.resetRequestCache(stateValue);
      }
    });
    this.clearMsalCookies();
    this.setInteractionInProgress(false);
  };
  BrowserCacheManager2.prototype.cacheCodeRequest = function(authCodeRequest, browserCrypto) {
    this.logger.trace("BrowserCacheManager.cacheCodeRequest called");
    var encodedValue = browserCrypto.base64Encode(JSON.stringify(authCodeRequest));
    this.setTemporaryCache(TemporaryCacheKeys.REQUEST_PARAMS, encodedValue, true);
  };
  BrowserCacheManager2.prototype.getCachedRequest = function(state, browserCrypto) {
    this.logger.trace("BrowserCacheManager.getCachedRequest called");
    var encodedTokenRequest = this.getTemporaryCache(TemporaryCacheKeys.REQUEST_PARAMS, true);
    if (!encodedTokenRequest) {
      throw BrowserAuthError.createNoTokenRequestCacheError();
    }
    var parsedRequest = this.validateAndParseJson(browserCrypto.base64Decode(encodedTokenRequest));
    if (!parsedRequest) {
      throw BrowserAuthError.createUnableToParseTokenRequestCacheError();
    }
    this.removeItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS));
    if (StringUtils.isEmpty(parsedRequest.authority)) {
      var authorityCacheKey = this.generateAuthorityKey(state);
      var cachedAuthority = this.getTemporaryCache(authorityCacheKey);
      if (!cachedAuthority) {
        throw BrowserAuthError.createNoCachedAuthorityError();
      }
      parsedRequest.authority = cachedAuthority;
    }
    return parsedRequest;
  };
  BrowserCacheManager2.prototype.getCachedNativeRequest = function() {
    this.logger.trace("BrowserCacheManager.getCachedNativeRequest called");
    var cachedRequest = this.getTemporaryCache(TemporaryCacheKeys.NATIVE_REQUEST, true);
    if (!cachedRequest) {
      this.logger.trace("BrowserCacheManager.getCachedNativeRequest: No cached native request found");
      return null;
    }
    var parsedRequest = this.validateAndParseJson(cachedRequest);
    if (!parsedRequest) {
      this.logger.error("BrowserCacheManager.getCachedNativeRequest: Unable to parse native request");
      return null;
    }
    return parsedRequest;
  };
  BrowserCacheManager2.prototype.isInteractionInProgress = function(matchClientId) {
    var clientId = this.getInteractionInProgress();
    if (matchClientId) {
      return clientId === this.clientId;
    } else {
      return !!clientId;
    }
  };
  BrowserCacheManager2.prototype.getInteractionInProgress = function() {
    var key = Constants.CACHE_PREFIX + "." + TemporaryCacheKeys.INTERACTION_STATUS_KEY;
    return this.getTemporaryCache(key, false);
  };
  BrowserCacheManager2.prototype.setInteractionInProgress = function(inProgress) {
    var key = Constants.CACHE_PREFIX + "." + TemporaryCacheKeys.INTERACTION_STATUS_KEY;
    if (inProgress) {
      if (this.getInteractionInProgress()) {
        throw BrowserAuthError.createInteractionInProgressError();
      } else {
        this.setTemporaryCache(key, this.clientId, false);
      }
    } else if (!inProgress && this.getInteractionInProgress() === this.clientId) {
      this.removeItem(key);
    }
  };
  BrowserCacheManager2.prototype.getLegacyLoginHint = function() {
    var adalIdTokenString = this.getTemporaryCache(PersistentCacheKeys.ADAL_ID_TOKEN);
    if (adalIdTokenString) {
      this.browserStorage.removeItem(PersistentCacheKeys.ADAL_ID_TOKEN);
      this.logger.verbose("Cached ADAL id token retrieved.");
    }
    var msalIdTokenString = this.getTemporaryCache(PersistentCacheKeys.ID_TOKEN, true);
    if (msalIdTokenString) {
      this.removeItem(this.generateCacheKey(PersistentCacheKeys.ID_TOKEN));
      this.logger.verbose("Cached MSAL.js v1 id token retrieved");
    }
    var cachedIdTokenString = msalIdTokenString || adalIdTokenString;
    if (cachedIdTokenString) {
      var cachedIdToken = new AuthToken(cachedIdTokenString, this.cryptoImpl);
      if (cachedIdToken.claims && cachedIdToken.claims.preferred_username) {
        this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 preferred_username as loginHint");
        return cachedIdToken.claims.preferred_username;
      } else if (cachedIdToken.claims && cachedIdToken.claims.upn) {
        this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 upn as loginHint");
        return cachedIdToken.claims.upn;
      } else {
        this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, however, no account hint claim found. Enable preferred_username or upn id token claim to get SSO.");
      }
    }
    return null;
  };
  BrowserCacheManager2.prototype.updateCredentialCacheKey = function(currentCacheKey, credential) {
    var updatedCacheKey = credential.generateCredentialKey();
    if (currentCacheKey !== updatedCacheKey) {
      var cacheItem = this.getItem(currentCacheKey);
      if (cacheItem) {
        this.removeItem(currentCacheKey);
        this.setItem(updatedCacheKey, cacheItem);
        this.logger.verbose("Updated an outdated " + credential.credentialType + " cache key");
        return updatedCacheKey;
      } else {
        this.logger.error("Attempted to update an outdated " + credential.credentialType + " cache key but no item matching the outdated key was found in storage");
      }
    }
    return currentCacheKey;
  };
  BrowserCacheManager2.prototype.getRedirectRequestContext = function() {
    return this.getTemporaryCache(TemporaryCacheKeys.REDIRECT_CONTEXT, true);
  };
  BrowserCacheManager2.prototype.setRedirectRequestContext = function(value) {
    this.setTemporaryCache(TemporaryCacheKeys.REDIRECT_CONTEXT, value, true);
  };
  return BrowserCacheManager2;
}(CacheManager);
var DEFAULT_BROWSER_CACHE_MANAGER = function(clientId, logger) {
  var cacheOptions = {
    cacheLocation: BrowserCacheLocation.MemoryStorage,
    storeAuthStateInCookie: false,
    secureCookies: false
  };
  return new BrowserCacheManager(clientId, cacheOptions, DEFAULT_CRYPTO_IMPLEMENTATION, logger);
};

// node_modules/@azure/msal-browser/dist/packageMetadata.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var name2 = "@azure/msal-browser";
var version2 = "2.32.1";

// node_modules/@azure/msal-browser/dist/network/FetchClient.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var FetchClient = function() {
  function FetchClient2() {
  }
  FetchClient2.prototype.sendGetRequestAsync = function(url, options) {
    return __awaiter(this, void 0, void 0, function() {
      var response, e_1, _a;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 2, , 3]);
            return [4, fetch(url, {
              method: HTTP_REQUEST_TYPE.GET,
              headers: this.getFetchHeaders(options)
            })];
          case 1:
            response = _b.sent();
            return [3, 3];
          case 2:
            e_1 = _b.sent();
            if (window.navigator.onLine) {
              throw BrowserAuthError.createGetRequestFailedError(e_1, url);
            } else {
              throw BrowserAuthError.createNoNetworkConnectivityError();
            }
          case 3:
            _b.trys.push([3, 5, , 6]);
            _a = {
              headers: this.getHeaderDict(response.headers)
            };
            return [4, response.json()];
          case 4:
            return [2, (_a.body = _b.sent(), _a.status = response.status, _a)];
          case 5:
            _b.sent();
            throw BrowserAuthError.createFailedToParseNetworkResponseError(url);
          case 6:
            return [2];
        }
      });
    });
  };
  FetchClient2.prototype.sendPostRequestAsync = function(url, options) {
    return __awaiter(this, void 0, void 0, function() {
      var reqBody, response, e_3, _a;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            reqBody = options && options.body || Constants.EMPTY_STRING;
            _b.label = 1;
          case 1:
            _b.trys.push([1, 3, , 4]);
            return [4, fetch(url, {
              method: HTTP_REQUEST_TYPE.POST,
              headers: this.getFetchHeaders(options),
              body: reqBody
            })];
          case 2:
            response = _b.sent();
            return [3, 4];
          case 3:
            e_3 = _b.sent();
            if (window.navigator.onLine) {
              throw BrowserAuthError.createPostRequestFailedError(e_3, url);
            } else {
              throw BrowserAuthError.createNoNetworkConnectivityError();
            }
          case 4:
            _b.trys.push([4, 6, , 7]);
            _a = {
              headers: this.getHeaderDict(response.headers)
            };
            return [4, response.json()];
          case 5:
            return [2, (_a.body = _b.sent(), _a.status = response.status, _a)];
          case 6:
            _b.sent();
            throw BrowserAuthError.createFailedToParseNetworkResponseError(url);
          case 7:
            return [2];
        }
      });
    });
  };
  FetchClient2.prototype.getFetchHeaders = function(options) {
    var headers = new Headers();
    if (!(options && options.headers)) {
      return headers;
    }
    var optionsHeaders = options.headers;
    Object.keys(optionsHeaders).forEach(function(key) {
      headers.append(key, optionsHeaders[key]);
    });
    return headers;
  };
  FetchClient2.prototype.getHeaderDict = function(headers) {
    var headerDict = {};
    headers.forEach(function(value, key) {
      headerDict[key] = value;
    });
    return headerDict;
  };
  return FetchClient2;
}();

// node_modules/@azure/msal-browser/dist/network/XhrClient.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var XhrClient = function() {
  function XhrClient2() {
  }
  XhrClient2.prototype.sendGetRequestAsync = function(url, options) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, this.sendRequestAsync(url, HTTP_REQUEST_TYPE.GET, options)];
      });
    });
  };
  XhrClient2.prototype.sendPostRequestAsync = function(url, options) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, this.sendRequestAsync(url, HTTP_REQUEST_TYPE.POST, options)];
      });
    });
  };
  XhrClient2.prototype.sendRequestAsync = function(url, method, options) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      _this.setXhrHeaders(xhr, options);
      xhr.onload = function() {
        if (xhr.status < 200 || xhr.status >= 300) {
          if (method === HTTP_REQUEST_TYPE.POST) {
            reject(BrowserAuthError.createPostRequestFailedError("Failed with status " + xhr.status, url));
          } else {
            reject(BrowserAuthError.createGetRequestFailedError("Failed with status " + xhr.status, url));
          }
        }
        try {
          var jsonResponse = JSON.parse(xhr.responseText);
          var networkResponse = {
            headers: _this.getHeaderDict(xhr),
            body: jsonResponse,
            status: xhr.status
          };
          resolve(networkResponse);
        } catch (e) {
          reject(BrowserAuthError.createFailedToParseNetworkResponseError(url));
        }
      };
      xhr.onerror = function() {
        if (window.navigator.onLine) {
          if (method === HTTP_REQUEST_TYPE.POST) {
            reject(BrowserAuthError.createPostRequestFailedError("Failed with status " + xhr.status, url));
          } else {
            reject(BrowserAuthError.createGetRequestFailedError("Failed with status " + xhr.status, url));
          }
        } else {
          reject(BrowserAuthError.createNoNetworkConnectivityError());
        }
      };
      if (method === HTTP_REQUEST_TYPE.POST && options && options.body) {
        xhr.send(options.body);
      } else if (method === HTTP_REQUEST_TYPE.GET) {
        xhr.send();
      } else {
        throw BrowserAuthError.createHttpMethodNotImplementedError(method);
      }
    });
  };
  XhrClient2.prototype.setXhrHeaders = function(xhr, options) {
    if (options && options.headers) {
      var headers_1 = options.headers;
      Object.keys(headers_1).forEach(function(key) {
        xhr.setRequestHeader(key, headers_1[key]);
      });
    }
  };
  XhrClient2.prototype.getHeaderDict = function(xhr) {
    var headerString = xhr.getAllResponseHeaders();
    var headerArr = headerString.trim().split(/[\r\n]+/);
    var headerDict = {};
    headerArr.forEach(function(value) {
      var parts = value.split(": ");
      var headerName = parts.shift();
      var headerVal = parts.join(": ");
      if (headerName && headerVal) {
        headerDict[headerName] = headerVal;
      }
    });
    return headerDict;
  };
  return XhrClient2;
}();

// node_modules/@azure/msal-browser/dist/utils/BrowserUtils.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var BrowserUtils = function() {
  function BrowserUtils2() {
  }
  BrowserUtils2.clearHash = function(contentWindow) {
    contentWindow.location.hash = Constants.EMPTY_STRING;
    if (typeof contentWindow.history.replaceState === "function") {
      contentWindow.history.replaceState(null, Constants.EMPTY_STRING, "" + contentWindow.location.origin + contentWindow.location.pathname + contentWindow.location.search);
    }
  };
  BrowserUtils2.replaceHash = function(url) {
    var urlParts = url.split("#");
    urlParts.shift();
    window.location.hash = urlParts.length > 0 ? urlParts.join("#") : Constants.EMPTY_STRING;
  };
  BrowserUtils2.isInIframe = function() {
    return window.parent !== window;
  };
  BrowserUtils2.isInPopup = function() {
    return typeof window !== "undefined" && !!window.opener && window.opener !== window && typeof window.name === "string" && window.name.indexOf(BrowserConstants.POPUP_NAME_PREFIX + ".") === 0;
  };
  BrowserUtils2.getCurrentUri = function() {
    return window.location.href.split("?")[0].split("#")[0];
  };
  BrowserUtils2.getHomepage = function() {
    var currentUrl = new UrlString(window.location.href);
    var urlComponents = currentUrl.getUrlComponents();
    return urlComponents.Protocol + "//" + urlComponents.HostNameAndPort + "/";
  };
  BrowserUtils2.getBrowserNetworkClient = function() {
    if (window.fetch && window.Headers) {
      return new FetchClient();
    } else {
      return new XhrClient();
    }
  };
  BrowserUtils2.blockReloadInHiddenIframes = function() {
    var isResponseHash = UrlString.hashContainsKnownProperties(window.location.hash);
    if (isResponseHash && BrowserUtils2.isInIframe()) {
      throw BrowserAuthError.createBlockReloadInHiddenIframeError();
    }
  };
  BrowserUtils2.blockRedirectInIframe = function(interactionType, allowRedirectInIframe) {
    var isIframedApp = BrowserUtils2.isInIframe();
    if (interactionType === InteractionType.Redirect && isIframedApp && !allowRedirectInIframe) {
      throw BrowserAuthError.createRedirectInIframeError(isIframedApp);
    }
  };
  BrowserUtils2.blockAcquireTokenInPopups = function() {
    if (BrowserUtils2.isInPopup()) {
      throw BrowserAuthError.createBlockAcquireTokenInPopupsError();
    }
  };
  BrowserUtils2.blockNonBrowserEnvironment = function(isBrowserEnvironment) {
    if (!isBrowserEnvironment) {
      throw BrowserAuthError.createNonBrowserEnvironmentError();
    }
  };
  BrowserUtils2.blockNativeBrokerCalledBeforeInitialized = function(allowNativeBroker, initialized) {
    if (allowNativeBroker && !initialized) {
      throw BrowserAuthError.createNativeBrokerCalledBeforeInitialize();
    }
  };
  BrowserUtils2.detectIEOrEdge = function() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    var msie11 = ua.indexOf("Trident/");
    var msedge = ua.indexOf("Edge/");
    var isIE = msie > 0 || msie11 > 0;
    var isEdge = msedge > 0;
    return isIE || isEdge;
  };
  return BrowserUtils2;
}();

// node_modules/@azure/msal-browser/dist/interaction_client/BaseInteractionClient.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var BaseInteractionClient = function() {
  function BaseInteractionClient2(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId) {
    this.config = config;
    this.browserStorage = storageImpl;
    this.browserCrypto = browserCrypto;
    this.networkClient = this.config.system.networkClient;
    this.eventHandler = eventHandler;
    this.navigationClient = navigationClient;
    this.nativeMessageHandler = nativeMessageHandler;
    this.correlationId = correlationId || this.browserCrypto.createNewGuid();
    this.logger = logger.clone(BrowserConstants.MSAL_SKU, version2, this.correlationId);
    this.performanceClient = performanceClient;
  }
  BaseInteractionClient2.prototype.clearCacheOnLogout = function(account) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!account)
              return [3, 5];
            if (AccountEntity.accountInfoIsEqual(account, this.browserStorage.getActiveAccount(), false)) {
              this.logger.verbose("Setting active account to null");
              this.browserStorage.setActiveAccount(null);
            }
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            return [4, this.browserStorage.removeAccount(AccountEntity.generateAccountCacheKey(account))];
          case 2:
            _a.sent();
            this.logger.verbose("Cleared cache items belonging to the account provided in the logout request.");
            return [3, 4];
          case 3:
            _a.sent();
            this.logger.error("Account provided in logout request was not found. Local cache unchanged.");
            return [3, 4];
          case 4:
            return [3, 9];
          case 5:
            _a.trys.push([5, 8, , 9]);
            this.logger.verbose("No account provided in logout request, clearing all cache items.", this.correlationId);
            return [4, this.browserStorage.clear()];
          case 6:
            _a.sent();
            return [4, this.browserCrypto.clearKeystore()];
          case 7:
            _a.sent();
            return [3, 9];
          case 8:
            _a.sent();
            this.logger.error("Attempted to clear all MSAL cache items and failed. Local cache unchanged.");
            return [3, 9];
          case 9:
            return [2];
        }
      });
    });
  };
  BaseInteractionClient2.prototype.initializeBaseRequest = function(request) {
    return __awaiter(this, void 0, void 0, function() {
      var authority, scopes, validatedRequest, _a;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            this.logger.verbose("Initializing BaseAuthRequest");
            authority = request.authority || this.config.auth.authority;
            scopes = __spread(request && request.scopes || []);
            validatedRequest = __assign(__assign({}, request), {
              correlationId: this.correlationId,
              authority,
              scopes
            });
            if (!validatedRequest.authenticationScheme) {
              validatedRequest.authenticationScheme = AuthenticationScheme.BEARER;
              this.logger.verbose(`Authentication Scheme wasn't explicitly set in request, defaulting to "Bearer" request`);
            } else {
              if (validatedRequest.authenticationScheme === AuthenticationScheme.SSH) {
                if (!request.sshJwk) {
                  throw ClientConfigurationError.createMissingSshJwkError();
                }
                if (!request.sshKid) {
                  throw ClientConfigurationError.createMissingSshKidError();
                }
              }
              this.logger.verbose('Authentication Scheme set to "' + validatedRequest.authenticationScheme + '" as configured in Auth request');
            }
            if (!(request.claims && !StringUtils.isEmpty(request.claims)))
              return [3, 2];
            _a = validatedRequest;
            return [4, this.browserCrypto.hashString(request.claims)];
          case 1:
            _a.requestedClaimsHash = _b.sent();
            _b.label = 2;
          case 2:
            return [2, validatedRequest];
        }
      });
    });
  };
  BaseInteractionClient2.prototype.getRedirectUri = function(requestRedirectUri) {
    this.logger.verbose("getRedirectUri called");
    var redirectUri = requestRedirectUri || this.config.auth.redirectUri || BrowserUtils.getCurrentUri();
    return UrlString.getAbsoluteUrl(redirectUri, BrowserUtils.getCurrentUri());
  };
  BaseInteractionClient2.prototype.initializeServerTelemetryManager = function(apiId, forceRefresh) {
    this.logger.verbose("initializeServerTelemetryManager called");
    var telemetryPayload = {
      clientId: this.config.auth.clientId,
      correlationId: this.correlationId,
      apiId,
      forceRefresh: forceRefresh || false,
      wrapperSKU: this.browserStorage.getWrapperMetadata()[0],
      wrapperVer: this.browserStorage.getWrapperMetadata()[1]
    };
    return new ServerTelemetryManager(telemetryPayload, this.browserStorage);
  };
  BaseInteractionClient2.prototype.getDiscoveredAuthority = function(requestAuthority) {
    return __awaiter(this, void 0, void 0, function() {
      var authorityOptions;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.logger.verbose("getDiscoveredAuthority called");
            authorityOptions = {
              protocolMode: this.config.auth.protocolMode,
              knownAuthorities: this.config.auth.knownAuthorities,
              cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
              authorityMetadata: this.config.auth.authorityMetadata
            };
            if (!requestAuthority)
              return [3, 2];
            this.logger.verbose("Creating discovered authority with request authority");
            return [4, AuthorityFactory.createDiscoveredInstance(requestAuthority, this.config.system.networkClient, this.browserStorage, authorityOptions, this.logger)];
          case 1:
            return [2, _a.sent()];
          case 2:
            this.logger.verbose("Creating discovered authority with configured authority");
            return [4, AuthorityFactory.createDiscoveredInstance(this.config.auth.authority, this.config.system.networkClient, this.browserStorage, authorityOptions, this.logger)];
          case 3:
            return [2, _a.sent()];
        }
      });
    });
  };
  return BaseInteractionClient2;
}();

// node_modules/@azure/msal-browser/dist/interaction_client/StandardInteractionClient.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var StandardInteractionClient = function(_super) {
  __extends(StandardInteractionClient2, _super);
  function StandardInteractionClient2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  StandardInteractionClient2.prototype.initializeAuthorizationCodeRequest = function(request) {
    return __awaiter(this, void 0, void 0, function() {
      var generatedPkceParams, authCodeRequest;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.logger.verbose("initializeAuthorizationRequest called", request.correlationId);
            return [4, this.browserCrypto.generatePkceCodes()];
          case 1:
            generatedPkceParams = _a.sent();
            authCodeRequest = __assign(__assign({}, request), {redirectUri: request.redirectUri, code: Constants.EMPTY_STRING, codeVerifier: generatedPkceParams.verifier});
            request.codeChallenge = generatedPkceParams.challenge;
            request.codeChallengeMethod = Constants.S256_CODE_CHALLENGE_METHOD;
            return [2, authCodeRequest];
        }
      });
    });
  };
  StandardInteractionClient2.prototype.initializeLogoutRequest = function(logoutRequest) {
    this.logger.verbose("initializeLogoutRequest called", logoutRequest === null || logoutRequest === void 0 ? void 0 : logoutRequest.correlationId);
    var validLogoutRequest = __assign({correlationId: this.correlationId || this.browserCrypto.createNewGuid()}, logoutRequest);
    if (logoutRequest) {
      if (!logoutRequest.logoutHint) {
        if (logoutRequest.account) {
          var logoutHint = this.getLogoutHintFromIdTokenClaims(logoutRequest.account);
          if (logoutHint) {
            this.logger.verbose("Setting logoutHint to login_hint ID Token Claim value for the account provided");
            validLogoutRequest.logoutHint = logoutHint;
          }
        } else {
          this.logger.verbose("logoutHint was not set and account was not passed into logout request, logoutHint will not be set");
        }
      } else {
        this.logger.verbose("logoutHint has already been set in logoutRequest");
      }
    } else {
      this.logger.verbose("logoutHint will not be set since no logout request was configured");
    }
    if (!logoutRequest || logoutRequest.postLogoutRedirectUri !== null) {
      if (logoutRequest && logoutRequest.postLogoutRedirectUri) {
        this.logger.verbose("Setting postLogoutRedirectUri to uri set on logout request", validLogoutRequest.correlationId);
        validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(logoutRequest.postLogoutRedirectUri, BrowserUtils.getCurrentUri());
      } else if (this.config.auth.postLogoutRedirectUri === null) {
        this.logger.verbose("postLogoutRedirectUri configured as null and no uri set on request, not passing post logout redirect", validLogoutRequest.correlationId);
      } else if (this.config.auth.postLogoutRedirectUri) {
        this.logger.verbose("Setting postLogoutRedirectUri to configured uri", validLogoutRequest.correlationId);
        validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(this.config.auth.postLogoutRedirectUri, BrowserUtils.getCurrentUri());
      } else {
        this.logger.verbose("Setting postLogoutRedirectUri to current page", validLogoutRequest.correlationId);
        validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(BrowserUtils.getCurrentUri(), BrowserUtils.getCurrentUri());
      }
    } else {
      this.logger.verbose("postLogoutRedirectUri passed as null, not setting post logout redirect uri", validLogoutRequest.correlationId);
    }
    return validLogoutRequest;
  };
  StandardInteractionClient2.prototype.getLogoutHintFromIdTokenClaims = function(account) {
    var idTokenClaims = account.idTokenClaims;
    if (idTokenClaims) {
      if (idTokenClaims.login_hint) {
        return idTokenClaims.login_hint;
      } else {
        this.logger.verbose("The ID Token Claims tied to the provided account do not contain a login_hint claim, logoutHint will not be added to logout request");
      }
    } else {
      this.logger.verbose("The provided account does not contain ID Token Claims, logoutHint will not be added to logout request");
    }
    return null;
  };
  StandardInteractionClient2.prototype.createAuthCodeClient = function(serverTelemetryManager, authorityUrl, requestAzureCloudOptions) {
    return __awaiter(this, void 0, void 0, function() {
      var clientConfig;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.getClientConfiguration(serverTelemetryManager, authorityUrl, requestAzureCloudOptions)];
          case 1:
            clientConfig = _a.sent();
            return [2, new AuthorizationCodeClient(clientConfig)];
        }
      });
    });
  };
  StandardInteractionClient2.prototype.getClientConfiguration = function(serverTelemetryManager, requestAuthority, requestAzureCloudOptions) {
    return __awaiter(this, void 0, void 0, function() {
      var discoveredAuthority;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.logger.verbose("getClientConfiguration called", this.correlationId);
            return [4, this.getDiscoveredAuthority(requestAuthority, requestAzureCloudOptions)];
          case 1:
            discoveredAuthority = _a.sent();
            return [2, {
              authOptions: {
                clientId: this.config.auth.clientId,
                authority: discoveredAuthority,
                clientCapabilities: this.config.auth.clientCapabilities
              },
              systemOptions: {
                tokenRenewalOffsetSeconds: this.config.system.tokenRenewalOffsetSeconds,
                preventCorsPreflight: true
              },
              loggerOptions: {
                loggerCallback: this.config.system.loggerOptions.loggerCallback,
                piiLoggingEnabled: this.config.system.loggerOptions.piiLoggingEnabled,
                logLevel: this.config.system.loggerOptions.logLevel,
                correlationId: this.correlationId
              },
              cryptoInterface: this.browserCrypto,
              networkInterface: this.networkClient,
              storageInterface: this.browserStorage,
              serverTelemetryManager,
              libraryInfo: {
                sku: BrowserConstants.MSAL_SKU,
                version: version2,
                cpu: Constants.EMPTY_STRING,
                os: Constants.EMPTY_STRING
              },
              telemetry: this.config.telemetry
            }];
        }
      });
    });
  };
  StandardInteractionClient2.prototype.validateAndExtractStateFromHash = function(serverParams, interactionType, requestCorrelationId) {
    this.logger.verbose("validateAndExtractStateFromHash called", requestCorrelationId);
    if (!serverParams.state) {
      throw BrowserAuthError.createHashDoesNotContainStateError();
    }
    var platformStateObj = BrowserProtocolUtils.extractBrowserRequestState(this.browserCrypto, serverParams.state);
    if (!platformStateObj) {
      throw BrowserAuthError.createUnableToParseStateError();
    }
    if (platformStateObj.interactionType !== interactionType) {
      throw BrowserAuthError.createStateInteractionTypeMismatchError();
    }
    this.logger.verbose("Returning state from hash", requestCorrelationId);
    return serverParams.state;
  };
  StandardInteractionClient2.prototype.getDiscoveredAuthority = function(requestAuthority, requestAzureCloudOptions) {
    return __awaiter(this, void 0, void 0, function() {
      var getAuthorityMeasurement, authorityOptions, userAuthority, builtAuthority;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.logger.verbose("getDiscoveredAuthority called", this.correlationId);
            getAuthorityMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.StandardInteractionClientGetDiscoveredAuthority, this.correlationId);
            authorityOptions = {
              protocolMode: this.config.auth.protocolMode,
              knownAuthorities: this.config.auth.knownAuthorities,
              cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
              authorityMetadata: this.config.auth.authorityMetadata,
              skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
            };
            userAuthority = requestAuthority ? requestAuthority : this.config.auth.authority;
            builtAuthority = Authority.generateAuthority(userAuthority, requestAzureCloudOptions || this.config.auth.azureCloudOptions);
            this.logger.verbose("Creating discovered authority with configured authority", this.correlationId);
            return [4, AuthorityFactory.createDiscoveredInstance(builtAuthority, this.config.system.networkClient, this.browserStorage, authorityOptions, this.logger).then(function(result) {
              getAuthorityMeasurement.endMeasurement({
                success: true
              });
              return result;
            }).catch(function(error) {
              getAuthorityMeasurement.endMeasurement({
                errorCode: error.errorCode,
                subErrorCode: error.subError,
                success: false
              });
              throw error;
            })];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  StandardInteractionClient2.prototype.initializeAuthorizationRequest = function(request, interactionType) {
    return __awaiter(this, void 0, void 0, function() {
      var redirectUri, browserState, state, validatedRequest, _a, account, legacyLoginHint;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            this.logger.verbose("initializeAuthorizationRequest called", this.correlationId);
            redirectUri = this.getRedirectUri(request.redirectUri);
            browserState = {
              interactionType
            };
            state = ProtocolUtils.setRequestState(this.browserCrypto, request && request.state || Constants.EMPTY_STRING, browserState);
            _a = [{}];
            return [4, this.initializeBaseRequest(request)];
          case 1:
            validatedRequest = __assign.apply(void 0, [__assign.apply(void 0, _a.concat([_b.sent()])), {redirectUri, state, nonce: request.nonce || this.browserCrypto.createNewGuid(), responseMode: ResponseMode.FRAGMENT}]);
            account = request.account || this.browserStorage.getActiveAccount();
            if (account) {
              this.logger.verbose("Setting validated request account", this.correlationId);
              this.logger.verbosePii("Setting validated request account: " + account.homeAccountId, this.correlationId);
              validatedRequest.account = account;
            }
            if (StringUtils.isEmpty(validatedRequest.loginHint) && !account) {
              legacyLoginHint = this.browserStorage.getLegacyLoginHint();
              if (legacyLoginHint) {
                validatedRequest.loginHint = legacyLoginHint;
              }
            }
            return [2, validatedRequest];
        }
      });
    });
  };
  return StandardInteractionClient2;
}(BaseInteractionClient);

// node_modules/@azure/msal-browser/dist/interaction_handler/InteractionHandler.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var InteractionHandler = function() {
  function InteractionHandler2(authCodeModule, storageImpl, authCodeRequest, logger) {
    this.authModule = authCodeModule;
    this.browserStorage = storageImpl;
    this.authCodeRequest = authCodeRequest;
    this.logger = logger;
  }
  InteractionHandler2.prototype.handleCodeResponseFromHash = function(locationHash, state, authority, networkModule) {
    return __awaiter(this, void 0, void 0, function() {
      var stateKey, requestState, authCodeResponse;
      return __generator(this, function(_a) {
        this.logger.verbose("InteractionHandler.handleCodeResponse called");
        if (StringUtils.isEmpty(locationHash)) {
          throw BrowserAuthError.createEmptyHashError(locationHash);
        }
        stateKey = this.browserStorage.generateStateKey(state);
        requestState = this.browserStorage.getTemporaryCache(stateKey);
        if (!requestState) {
          throw ClientAuthError.createStateNotFoundError("Cached State");
        }
        try {
          authCodeResponse = this.authModule.handleFragmentResponse(locationHash, requestState);
        } catch (e) {
          if (e instanceof ServerError && e.subError === BrowserAuthErrorMessage.userCancelledError.code) {
            throw BrowserAuthError.createUserCancelledError();
          } else {
            throw e;
          }
        }
        return [2, this.handleCodeResponseFromServer(authCodeResponse, state, authority, networkModule)];
      });
    });
  };
  InteractionHandler2.prototype.handleCodeResponseFromServer = function(authCodeResponse, state, authority, networkModule, validateNonce) {
    if (validateNonce === void 0) {
      validateNonce = true;
    }
    return __awaiter(this, void 0, void 0, function() {
      var stateKey, requestState, nonceKey, cachedNonce, cachedCcsCred, tokenResponse;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.logger.trace("InteractionHandler.handleCodeResponseFromServer called");
            stateKey = this.browserStorage.generateStateKey(state);
            requestState = this.browserStorage.getTemporaryCache(stateKey);
            if (!requestState) {
              throw ClientAuthError.createStateNotFoundError("Cached State");
            }
            nonceKey = this.browserStorage.generateNonceKey(requestState);
            cachedNonce = this.browserStorage.getTemporaryCache(nonceKey);
            this.authCodeRequest.code = authCodeResponse.code;
            if (!authCodeResponse.cloud_instance_host_name)
              return [3, 2];
            return [4, this.updateTokenEndpointAuthority(authCodeResponse.cloud_instance_host_name, authority, networkModule)];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            if (validateNonce) {
              authCodeResponse.nonce = cachedNonce || void 0;
            }
            authCodeResponse.state = requestState;
            if (authCodeResponse.client_info) {
              this.authCodeRequest.clientInfo = authCodeResponse.client_info;
            } else {
              cachedCcsCred = this.checkCcsCredentials();
              if (cachedCcsCred) {
                this.authCodeRequest.ccsCredential = cachedCcsCred;
              }
            }
            return [4, this.authModule.acquireToken(this.authCodeRequest, authCodeResponse)];
          case 3:
            tokenResponse = _a.sent();
            this.browserStorage.cleanRequestByState(state);
            return [2, tokenResponse];
        }
      });
    });
  };
  InteractionHandler2.prototype.updateTokenEndpointAuthority = function(cloudInstanceHostname, authority, networkModule) {
    return __awaiter(this, void 0, void 0, function() {
      var cloudInstanceAuthorityUri, cloudInstanceAuthority;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            cloudInstanceAuthorityUri = "https://" + cloudInstanceHostname + "/" + authority.tenant + "/";
            return [4, AuthorityFactory.createDiscoveredInstance(cloudInstanceAuthorityUri, networkModule, this.browserStorage, authority.options, this.logger)];
          case 1:
            cloudInstanceAuthority = _a.sent();
            this.authModule.updateAuthority(cloudInstanceAuthority);
            return [2];
        }
      });
    });
  };
  InteractionHandler2.prototype.checkCcsCredentials = function() {
    var cachedCcsCred = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.CCS_CREDENTIAL, true);
    if (cachedCcsCred) {
      try {
        return JSON.parse(cachedCcsCred);
      } catch (e) {
        this.authModule.logger.error("Cache credential could not be parsed");
        this.authModule.logger.errorPii("Cache credential could not be parsed: " + cachedCcsCred);
      }
    }
    return null;
  };
  return InteractionHandler2;
}();

// node_modules/@azure/msal-browser/dist/interaction_handler/RedirectHandler.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var RedirectHandler = function(_super) {
  __extends(RedirectHandler2, _super);
  function RedirectHandler2(authCodeModule, storageImpl, authCodeRequest, logger, browserCrypto) {
    var _this = _super.call(this, authCodeModule, storageImpl, authCodeRequest, logger) || this;
    _this.browserCrypto = browserCrypto;
    return _this;
  }
  RedirectHandler2.prototype.initiateAuthRequest = function(requestUrl, params) {
    return __awaiter(this, void 0, void 0, function() {
      var navigationOptions, navigate;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.logger.verbose("RedirectHandler.initiateAuthRequest called");
            if (!!StringUtils.isEmpty(requestUrl))
              return [3, 7];
            if (params.redirectStartPage) {
              this.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page");
              this.browserStorage.setTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, params.redirectStartPage, true);
            }
            this.browserStorage.setTemporaryCache(TemporaryCacheKeys.CORRELATION_ID, this.authCodeRequest.correlationId, true);
            this.browserStorage.cacheCodeRequest(this.authCodeRequest, this.browserCrypto);
            this.logger.infoPii("RedirectHandler.initiateAuthRequest: Navigate to: " + requestUrl);
            navigationOptions = {
              apiId: ApiId.acquireTokenRedirect,
              timeout: params.redirectTimeout,
              noHistory: false
            };
            if (!(typeof params.onRedirectNavigate === "function"))
              return [3, 4];
            this.logger.verbose("RedirectHandler.initiateAuthRequest: Invoking onRedirectNavigate callback");
            navigate = params.onRedirectNavigate(requestUrl);
            if (!(navigate !== false))
              return [3, 2];
            this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate did not return false, navigating");
            return [4, params.navigationClient.navigateExternal(requestUrl, navigationOptions)];
          case 1:
            _a.sent();
            return [2];
          case 2:
            this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate returned false, stopping navigation");
            return [2];
          case 3:
            return [3, 6];
          case 4:
            this.logger.verbose("RedirectHandler.initiateAuthRequest: Navigating window to navigate url");
            return [4, params.navigationClient.navigateExternal(requestUrl, navigationOptions)];
          case 5:
            _a.sent();
            return [2];
          case 6:
            return [3, 8];
          case 7:
            this.logger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty");
            throw BrowserAuthError.createEmptyNavigationUriError();
          case 8:
            return [2];
        }
      });
    });
  };
  RedirectHandler2.prototype.handleCodeResponseFromHash = function(locationHash, state, authority, networkModule) {
    return __awaiter(this, void 0, void 0, function() {
      var stateKey, requestState, authCodeResponse, nonceKey, cachedNonce, cachedCcsCred, tokenResponse;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.logger.verbose("RedirectHandler.handleCodeResponse called");
            if (StringUtils.isEmpty(locationHash)) {
              throw BrowserAuthError.createEmptyHashError(locationHash);
            }
            this.browserStorage.setInteractionInProgress(false);
            stateKey = this.browserStorage.generateStateKey(state);
            requestState = this.browserStorage.getTemporaryCache(stateKey);
            if (!requestState) {
              throw ClientAuthError.createStateNotFoundError("Cached State");
            }
            try {
              authCodeResponse = this.authModule.handleFragmentResponse(locationHash, requestState);
            } catch (e) {
              if (e instanceof ServerError && e.subError === BrowserAuthErrorMessage.userCancelledError.code) {
                throw BrowserAuthError.createUserCancelledError();
              } else {
                throw e;
              }
            }
            nonceKey = this.browserStorage.generateNonceKey(requestState);
            cachedNonce = this.browserStorage.getTemporaryCache(nonceKey);
            this.authCodeRequest.code = authCodeResponse.code;
            if (!authCodeResponse.cloud_instance_host_name)
              return [3, 2];
            return [4, this.updateTokenEndpointAuthority(authCodeResponse.cloud_instance_host_name, authority, networkModule)];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            authCodeResponse.nonce = cachedNonce || void 0;
            authCodeResponse.state = requestState;
            if (authCodeResponse.client_info) {
              this.authCodeRequest.clientInfo = authCodeResponse.client_info;
            } else {
              cachedCcsCred = this.checkCcsCredentials();
              if (cachedCcsCred) {
                this.authCodeRequest.ccsCredential = cachedCcsCred;
              }
            }
            return [4, this.authModule.acquireToken(this.authCodeRequest, authCodeResponse)];
          case 3:
            tokenResponse = _a.sent();
            this.browserStorage.cleanRequestByState(state);
            return [2, tokenResponse];
        }
      });
    });
  };
  return RedirectHandler2;
}(InteractionHandler);

// node_modules/@azure/msal-browser/dist/event/EventType.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var EventType;
(function(EventType2) {
  EventType2["INITIALIZE_START"] = "msal:initializeStart";
  EventType2["INITIALIZE_END"] = "msal:initializeEnd";
  EventType2["ACCOUNT_ADDED"] = "msal:accountAdded";
  EventType2["ACCOUNT_REMOVED"] = "msal:accountRemoved";
  EventType2["LOGIN_START"] = "msal:loginStart";
  EventType2["LOGIN_SUCCESS"] = "msal:loginSuccess";
  EventType2["LOGIN_FAILURE"] = "msal:loginFailure";
  EventType2["ACQUIRE_TOKEN_START"] = "msal:acquireTokenStart";
  EventType2["ACQUIRE_TOKEN_SUCCESS"] = "msal:acquireTokenSuccess";
  EventType2["ACQUIRE_TOKEN_FAILURE"] = "msal:acquireTokenFailure";
  EventType2["ACQUIRE_TOKEN_NETWORK_START"] = "msal:acquireTokenFromNetworkStart";
  EventType2["SSO_SILENT_START"] = "msal:ssoSilentStart";
  EventType2["SSO_SILENT_SUCCESS"] = "msal:ssoSilentSuccess";
  EventType2["SSO_SILENT_FAILURE"] = "msal:ssoSilentFailure";
  EventType2["ACQUIRE_TOKEN_BY_CODE_START"] = "msal:acquireTokenByCodeStart";
  EventType2["ACQUIRE_TOKEN_BY_CODE_SUCCESS"] = "msal:acquireTokenByCodeSuccess";
  EventType2["ACQUIRE_TOKEN_BY_CODE_FAILURE"] = "msal:acquireTokenByCodeFailure";
  EventType2["HANDLE_REDIRECT_START"] = "msal:handleRedirectStart";
  EventType2["HANDLE_REDIRECT_END"] = "msal:handleRedirectEnd";
  EventType2["POPUP_OPENED"] = "msal:popupOpened";
  EventType2["LOGOUT_START"] = "msal:logoutStart";
  EventType2["LOGOUT_SUCCESS"] = "msal:logoutSuccess";
  EventType2["LOGOUT_FAILURE"] = "msal:logoutFailure";
  EventType2["LOGOUT_END"] = "msal:logoutEnd";
})(EventType || (EventType = {}));

// node_modules/@azure/msal-browser/dist/error/NativeAuthError.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var NativeStatusCode;
(function(NativeStatusCode2) {
  NativeStatusCode2["USER_INTERACTION_REQUIRED"] = "USER_INTERACTION_REQUIRED";
  NativeStatusCode2["USER_CANCEL"] = "USER_CANCEL";
  NativeStatusCode2["NO_NETWORK"] = "NO_NETWORK";
  NativeStatusCode2["TRANSIENT_ERROR"] = "TRANSIENT_ERROR";
  NativeStatusCode2["PERSISTENT_ERROR"] = "PERSISTENT_ERROR";
  NativeStatusCode2["DISABLED"] = "DISABLED";
  NativeStatusCode2["ACCOUNT_UNAVAILABLE"] = "ACCOUNT_UNAVAILABLE";
})(NativeStatusCode || (NativeStatusCode = {}));
var NativeAuthErrorMessage = {
  extensionError: {
    code: "ContentError"
  },
  userSwitch: {
    code: "user_switch",
    desc: "User attempted to switch accounts in the native broker, which is not allowed. All new accounts must sign-in through the standard web flow first, please try again."
  },
  tokensNotFoundInCache: {
    code: "tokens_not_found_in_internal_memory_cache",
    desc: "Tokens not cached in MSAL JS internal memory, please make the WAM request"
  }
};
var NativeAuthError = function(_super) {
  __extends(NativeAuthError2, _super);
  function NativeAuthError2(errorCode, description, ext) {
    var _this = _super.call(this, errorCode, description) || this;
    Object.setPrototypeOf(_this, NativeAuthError2.prototype);
    _this.name = "NativeAuthError";
    _this.ext = ext;
    return _this;
  }
  NativeAuthError2.prototype.isFatal = function() {
    if (this.ext && this.ext.status && (this.ext.status === NativeStatusCode.PERSISTENT_ERROR || this.ext.status === NativeStatusCode.DISABLED)) {
      return true;
    }
    switch (this.errorCode) {
      case NativeAuthErrorMessage.extensionError.code:
        return true;
      default:
        return false;
    }
  };
  NativeAuthError2.createError = function(code, description, ext) {
    if (ext && ext.status) {
      switch (ext.status) {
        case NativeStatusCode.ACCOUNT_UNAVAILABLE:
          return InteractionRequiredAuthError.createNativeAccountUnavailableError();
        case NativeStatusCode.USER_INTERACTION_REQUIRED:
          return new InteractionRequiredAuthError(code, description);
        case NativeStatusCode.USER_CANCEL:
          return BrowserAuthError.createUserCancelledError();
        case NativeStatusCode.NO_NETWORK:
          return BrowserAuthError.createNoNetworkConnectivityError();
      }
    }
    return new NativeAuthError2(code, description, ext);
  };
  NativeAuthError2.createUserSwitchError = function() {
    return new NativeAuthError2(NativeAuthErrorMessage.userSwitch.code, NativeAuthErrorMessage.userSwitch.desc);
  };
  NativeAuthError2.createTokensNotFoundInCacheError = function() {
    return new NativeAuthError2(NativeAuthErrorMessage.tokensNotFoundInCache.code, NativeAuthErrorMessage.tokensNotFoundInCache.desc);
  };
  return NativeAuthError2;
}(AuthError);

// node_modules/@azure/msal-browser/dist/interaction_client/SilentCacheClient.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var SilentCacheClient = function(_super) {
  __extends(SilentCacheClient2, _super);
  function SilentCacheClient2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  SilentCacheClient2.prototype.acquireToken = function(silentRequest) {
    return __awaiter(this, void 0, void 0, function() {
      var acquireTokenMeasurement, serverTelemetryManager, silentAuthClient, cachedToken, error_1;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            acquireTokenMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.SilentCacheClientAcquireToken, silentRequest.correlationId);
            serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenSilent_silentFlow);
            return [4, this.createSilentFlowClient(serverTelemetryManager, silentRequest.authority, silentRequest.azureCloudOptions)];
          case 1:
            silentAuthClient = _a.sent();
            this.logger.verbose("Silent auth client created");
            _a.label = 2;
          case 2:
            _a.trys.push([2, 4, , 5]);
            return [4, silentAuthClient.acquireCachedToken(silentRequest)];
          case 3:
            cachedToken = _a.sent();
            acquireTokenMeasurement.endMeasurement({
              success: true,
              fromCache: true
            });
            return [2, cachedToken];
          case 4:
            error_1 = _a.sent();
            if (error_1 instanceof BrowserAuthError && error_1.errorCode === BrowserAuthErrorMessage.signingKeyNotFoundInStorage.code) {
              this.logger.verbose("Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair.");
            }
            acquireTokenMeasurement.endMeasurement({
              errorCode: error_1 instanceof AuthError && error_1.errorCode || void 0,
              subErrorCode: error_1 instanceof AuthError && error_1.subError || void 0,
              success: false
            });
            throw error_1;
          case 5:
            return [2];
        }
      });
    });
  };
  SilentCacheClient2.prototype.logout = function() {
    return Promise.reject(BrowserAuthError.createSilentLogoutUnsupportedError());
  };
  SilentCacheClient2.prototype.createSilentFlowClient = function(serverTelemetryManager, authorityUrl, azureCloudOptions) {
    return __awaiter(this, void 0, void 0, function() {
      var clientConfig;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.getClientConfiguration(serverTelemetryManager, authorityUrl, azureCloudOptions)];
          case 1:
            clientConfig = _a.sent();
            return [2, new SilentFlowClient(clientConfig, this.performanceClient)];
        }
      });
    });
  };
  SilentCacheClient2.prototype.initializeSilentRequest = function(request, account) {
    return __awaiter(this, void 0, void 0, function() {
      var _a;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            _a = [__assign({}, request)];
            return [4, this.initializeBaseRequest(request)];
          case 1:
            return [2, __assign.apply(void 0, [__assign.apply(void 0, _a.concat([_b.sent()])), {account, forceRefresh: request.forceRefresh || false}])];
        }
      });
    });
  };
  return SilentCacheClient2;
}(StandardInteractionClient);

// node_modules/@azure/msal-browser/dist/interaction_client/NativeInteractionClient.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var NativeInteractionClient = function(_super) {
  __extends(NativeInteractionClient2, _super);
  function NativeInteractionClient2(config, browserStorage, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, provider, accountId, nativeStorageImpl, correlationId) {
    var _this = _super.call(this, config, browserStorage, browserCrypto, logger, eventHandler, navigationClient, performanceClient, provider, correlationId) || this;
    _this.apiId = apiId;
    _this.accountId = accountId;
    _this.nativeMessageHandler = provider;
    _this.nativeStorageManager = nativeStorageImpl;
    _this.silentCacheClient = new SilentCacheClient(config, _this.nativeStorageManager, browserCrypto, logger, eventHandler, navigationClient, performanceClient, provider, correlationId);
    return _this;
  }
  NativeInteractionClient2.prototype.acquireToken = function(request) {
    return __awaiter(this, void 0, void 0, function() {
      var nativeATMeasurement, reqTimestamp, nativeRequest, result, messageBody, response, validatedResponse;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.logger.trace("NativeInteractionClient - acquireToken called.");
            nativeATMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.NativeInteractionClientAcquireToken, request.correlationId);
            reqTimestamp = TimeUtils.nowSeconds();
            return [4, this.initializeNativeRequest(request)];
          case 1:
            nativeRequest = _a.sent();
            _a.label = 2;
          case 2:
            _a.trys.push([2, 4, , 5]);
            return [4, this.acquireTokensFromCache(this.accountId, nativeRequest)];
          case 3:
            result = _a.sent();
            nativeATMeasurement.endMeasurement({
              success: true,
              isNativeBroker: false,
              fromCache: true
            });
            return [2, result];
          case 4:
            _a.sent();
            this.logger.info("MSAL internal Cache does not contain tokens, proceed to make a native call");
            return [3, 5];
          case 5:
            messageBody = {
              method: NativeExtensionMethod.GetToken,
              request: nativeRequest
            };
            return [4, this.nativeMessageHandler.sendMessage(messageBody)];
          case 6:
            response = _a.sent();
            validatedResponse = this.validateNativeResponse(response);
            return [2, this.handleNativeResponse(validatedResponse, nativeRequest, reqTimestamp).then(function(result2) {
              nativeATMeasurement.endMeasurement({
                success: true,
                isNativeBroker: true,
                requestId: result2.requestId
              });
              return result2;
            }).catch(function(error) {
              nativeATMeasurement.endMeasurement({
                success: false,
                errorCode: error.errorCode,
                subErrorCode: error.subError,
                isNativeBroker: true
              });
              throw error;
            })];
        }
      });
    });
  };
  NativeInteractionClient2.prototype.createSilentCacheRequest = function(request, cachedAccount) {
    return {
      authority: request.authority,
      correlationId: this.correlationId,
      scopes: ScopeSet.fromString(request.scope).asArray(),
      account: cachedAccount,
      forceRefresh: false
    };
  };
  NativeInteractionClient2.prototype.acquireTokensFromCache = function(nativeAccountId, request) {
    return __awaiter(this, void 0, void 0, function() {
      var accountEntity, account, silentRequest, result, e_2;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            accountEntity = this.browserStorage.readAccountFromCacheWithNativeAccountId(nativeAccountId);
            if (!accountEntity) {
              throw ClientAuthError.createNoAccountFoundError();
            }
            account = accountEntity.getAccountInfo();
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            silentRequest = this.createSilentCacheRequest(request, account);
            return [4, this.silentCacheClient.acquireToken(silentRequest)];
          case 2:
            result = _a.sent();
            return [2, result];
          case 3:
            e_2 = _a.sent();
            throw e_2;
          case 4:
            return [2];
        }
      });
    });
  };
  NativeInteractionClient2.prototype.acquireTokenRedirect = function(request) {
    return __awaiter(this, void 0, void 0, function() {
      var nativeRequest, messageBody, response, e_3, navigationOptions, redirectUri;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.logger.trace("NativeInteractionClient - acquireTokenRedirect called.");
            return [4, this.initializeNativeRequest(request)];
          case 1:
            nativeRequest = _a.sent();
            messageBody = {
              method: NativeExtensionMethod.GetToken,
              request: nativeRequest
            };
            _a.label = 2;
          case 2:
            _a.trys.push([2, 4, , 5]);
            return [4, this.nativeMessageHandler.sendMessage(messageBody)];
          case 3:
            response = _a.sent();
            this.validateNativeResponse(response);
            return [3, 5];
          case 4:
            e_3 = _a.sent();
            if (e_3 instanceof NativeAuthError && e_3.isFatal()) {
              throw e_3;
            }
            return [3, 5];
          case 5:
            this.browserStorage.setTemporaryCache(TemporaryCacheKeys.NATIVE_REQUEST, JSON.stringify(nativeRequest), true);
            navigationOptions = {
              apiId: ApiId.acquireTokenRedirect,
              timeout: this.config.system.redirectNavigationTimeout,
              noHistory: false
            };
            redirectUri = this.config.auth.navigateToLoginRequestUrl ? window.location.href : this.getRedirectUri(request.redirectUri);
            return [4, this.navigationClient.navigateExternal(redirectUri, navigationOptions)];
          case 6:
            _a.sent();
            return [2];
        }
      });
    });
  };
  NativeInteractionClient2.prototype.handleRedirectPromise = function() {
    return __awaiter(this, void 0, void 0, function() {
      var cachedRequest, prompt, request, messageBody, reqTimestamp, response, result, e_4;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.logger.trace("NativeInteractionClient - handleRedirectPromise called.");
            if (!this.browserStorage.isInteractionInProgress(true)) {
              this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null.");
              return [2, null];
            }
            cachedRequest = this.browserStorage.getCachedNativeRequest();
            if (!cachedRequest) {
              this.logger.verbose("NativeInteractionClient - handleRedirectPromise called but there is no cached request, returning null.");
              return [2, null];
            }
            prompt = cachedRequest.prompt, request = __rest(cachedRequest, ["prompt"]);
            if (prompt) {
              this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window.");
            }
            this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.NATIVE_REQUEST));
            messageBody = {
              method: NativeExtensionMethod.GetToken,
              request
            };
            reqTimestamp = TimeUtils.nowSeconds();
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            this.logger.verbose("NativeInteractionClient - handleRedirectPromise sending message to native broker.");
            return [4, this.nativeMessageHandler.sendMessage(messageBody)];
          case 2:
            response = _a.sent();
            this.validateNativeResponse(response);
            result = this.handleNativeResponse(response, request, reqTimestamp);
            this.browserStorage.setInteractionInProgress(false);
            return [2, result];
          case 3:
            e_4 = _a.sent();
            this.browserStorage.setInteractionInProgress(false);
            throw e_4;
          case 4:
            return [2];
        }
      });
    });
  };
  NativeInteractionClient2.prototype.logout = function() {
    this.logger.trace("NativeInteractionClient - logout called.");
    return Promise.reject("Logout not implemented yet");
  };
  NativeInteractionClient2.prototype.handleNativeResponse = function(response, request, reqTimestamp) {
    return __awaiter(this, void 0, void 0, function() {
      var mats, idTokenObj, authority, authorityPreferredCache, homeAccountIdentifier, accountEntity, responseScopes, accountProperties, uid, tid, responseAccessToken, responseTokenType, _a, popTokenGenerator, shrParameters, result, idTokenEntity, expiresIn, tokenExpirationSeconds, accessTokenEntity;
      var _this = this;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            this.logger.trace("NativeInteractionClient - handleNativeResponse called.");
            mats = this.getMATSFromResponse(response);
            this.performanceClient.addStaticFields({
              extensionId: this.nativeMessageHandler.getExtensionId(),
              extensionVersion: this.nativeMessageHandler.getExtensionVersion(),
              matsBrokerVersion: mats ? mats.broker_version : void 0,
              matsAccountJoinOnStart: mats ? mats.account_join_on_start : void 0,
              matsAccountJoinOnEnd: mats ? mats.account_join_on_end : void 0,
              matsDeviceJoin: mats ? mats.device_join : void 0,
              matsPromptBehavior: mats ? mats.prompt_behavior : void 0,
              matsApiErrorCode: mats ? mats.api_error_code : void 0,
              matsUiVisible: mats ? mats.ui_visible : void 0,
              matsSilentCode: mats ? mats.silent_code : void 0,
              matsSilentBiSubCode: mats ? mats.silent_bi_sub_code : void 0,
              matsSilentMessage: mats ? mats.silent_message : void 0,
              matsSilentStatus: mats ? mats.silent_status : void 0,
              matsHttpStatus: mats ? mats.http_status : void 0,
              matsHttpEventCount: mats ? mats.http_event_count : void 0
            }, this.correlationId);
            if (response.account.id !== request.accountId) {
              throw NativeAuthError.createUserSwitchError();
            }
            idTokenObj = new AuthToken(response.id_token || Constants.EMPTY_STRING, this.browserCrypto);
            return [4, this.getDiscoveredAuthority(request.authority)];
          case 1:
            authority = _b.sent();
            authorityPreferredCache = authority.getPreferredCache();
            homeAccountIdentifier = AccountEntity.generateHomeAccountId(response.client_info || Constants.EMPTY_STRING, AuthorityType.Default, this.logger, this.browserCrypto, idTokenObj);
            accountEntity = AccountEntity.createAccount(response.client_info, homeAccountIdentifier, idTokenObj, void 0, void 0, void 0, authorityPreferredCache, response.account.id);
            this.browserStorage.setAccount(accountEntity);
            responseScopes = response.scope ? ScopeSet.fromString(response.scope) : ScopeSet.fromString(request.scope);
            accountProperties = response.account.properties || {};
            uid = accountProperties["UID"] || idTokenObj.claims.oid || idTokenObj.claims.sub || Constants.EMPTY_STRING;
            tid = accountProperties["TenantId"] || idTokenObj.claims.tid || Constants.EMPTY_STRING;
            responseTokenType = AuthenticationScheme.BEARER;
            _a = request.tokenType;
            switch (_a) {
              case AuthenticationScheme.POP:
                return [3, 2];
            }
            return [3, 4];
          case 2:
            responseTokenType = AuthenticationScheme.POP;
            if (response.shr) {
              this.logger.trace("handleNativeServerResponse: SHR is enabled in native layer");
              responseAccessToken = response.shr;
              return [3, 5];
            }
            popTokenGenerator = new PopTokenGenerator(this.browserCrypto);
            shrParameters = {
              resourceRequestMethod: request.resourceRequestMethod,
              resourceRequestUri: request.resourceRequestUri,
              shrClaims: request.shrClaims,
              shrNonce: request.shrNonce
            };
            if (!request.keyId) {
              throw ClientAuthError.createKeyIdMissingError();
            }
            return [4, popTokenGenerator.signPopToken(response.access_token, request.keyId, shrParameters)];
          case 3:
            responseAccessToken = _b.sent();
            return [3, 5];
          case 4:
            {
              responseAccessToken = response.access_token;
            }
            _b.label = 5;
          case 5:
            result = {
              authority: authority.canonicalAuthority,
              uniqueId: uid,
              tenantId: tid,
              scopes: responseScopes.asArray(),
              account: accountEntity.getAccountInfo(),
              idToken: response.id_token,
              idTokenClaims: idTokenObj.claims,
              accessToken: responseAccessToken,
              fromCache: mats ? this.isResponseFromCache(mats) : false,
              expiresOn: new Date(Number(reqTimestamp + response.expires_in) * 1e3),
              tokenType: responseTokenType,
              correlationId: this.correlationId,
              state: response.state,
              fromNativeBroker: true
            };
            idTokenEntity = IdTokenEntity.createIdTokenEntity(homeAccountIdentifier, request.authority, response.id_token || Constants.EMPTY_STRING, request.clientId, idTokenObj.claims.tid || Constants.EMPTY_STRING);
            this.nativeStorageManager.setIdTokenCredential(idTokenEntity);
            expiresIn = responseTokenType === AuthenticationScheme.POP ? Constants.SHR_NONCE_VALIDITY : (typeof response.expires_in === "string" ? parseInt(response.expires_in, 10) : response.expires_in) || 0;
            tokenExpirationSeconds = reqTimestamp + expiresIn;
            accessTokenEntity = AccessTokenEntity.createAccessTokenEntity(homeAccountIdentifier, request.authority, responseAccessToken, request.clientId, tid, responseScopes.printScopes(), tokenExpirationSeconds, 0, this.browserCrypto);
            this.nativeStorageManager.setAccessTokenCredential(accessTokenEntity);
            this.browserStorage.removeAccountContext(accountEntity).catch(function(e) {
              _this.logger.error("Error occurred while removing account context from browser storage. " + e);
            });
            return [2, result];
        }
      });
    });
  };
  NativeInteractionClient2.prototype.validateNativeResponse = function(response) {
    if (response.hasOwnProperty("access_token") && response.hasOwnProperty("id_token") && response.hasOwnProperty("client_info") && response.hasOwnProperty("account") && response.hasOwnProperty("scope") && response.hasOwnProperty("expires_in")) {
      return response;
    } else {
      throw NativeAuthError.createUnexpectedError("Response missing expected properties.");
    }
  };
  NativeInteractionClient2.prototype.getMATSFromResponse = function(response) {
    if (response.properties.MATS) {
      try {
        return JSON.parse(response.properties.MATS);
      } catch (e) {
        this.logger.error("NativeInteractionClient - Error parsing MATS telemetry, returning null instead");
      }
    }
    return null;
  };
  NativeInteractionClient2.prototype.isResponseFromCache = function(mats) {
    if (typeof mats.is_cached === "undefined") {
      this.logger.verbose("NativeInteractionClient - MATS telemetry does not contain field indicating if response was served from cache. Returning false.");
      return false;
    }
    return !!mats.is_cached;
  };
  NativeInteractionClient2.prototype.initializeNativeRequest = function(request) {
    return __awaiter(this, void 0, void 0, function() {
      var authority, canonicalAuthority, scopes, remainingProperties, scopeSet, getPrompt, validatedRequest, shrParameters, popTokenGenerator, reqCnfData;
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.logger.trace("NativeInteractionClient - initializeNativeRequest called");
            authority = request.authority || this.config.auth.authority;
            canonicalAuthority = new UrlString(authority);
            canonicalAuthority.validateAsUri();
            scopes = request.scopes, remainingProperties = __rest(request, ["scopes"]);
            scopeSet = new ScopeSet(scopes || []);
            scopeSet.appendScopes(OIDC_DEFAULT_SCOPES);
            getPrompt = function() {
              switch (_this.apiId) {
                case ApiId.ssoSilent:
                case ApiId.acquireTokenSilent_silentFlow:
                  _this.logger.trace("initializeNativeRequest: silent request sets prompt to none");
                  return PromptValue.NONE;
              }
              if (!request.prompt) {
                _this.logger.trace("initializeNativeRequest: prompt was not provided");
                return void 0;
              }
              switch (request.prompt) {
                case PromptValue.NONE:
                case PromptValue.CONSENT:
                case PromptValue.LOGIN:
                  _this.logger.trace("initializeNativeRequest: prompt is compatible with native flow");
                  return request.prompt;
                default:
                  _this.logger.trace("initializeNativeRequest: prompt = " + request.prompt + " is not compatible with native flow");
                  throw BrowserAuthError.createNativePromptParameterNotSupportedError();
              }
            };
            validatedRequest = __assign(__assign({}, remainingProperties), {
              accountId: this.accountId,
              clientId: this.config.auth.clientId,
              authority: canonicalAuthority.urlString,
              scope: scopeSet.printScopes(),
              redirectUri: this.getRedirectUri(request.redirectUri),
              prompt: getPrompt(),
              correlationId: this.correlationId,
              tokenType: request.authenticationScheme,
              windowTitleSubstring: document.title,
              extraParameters: __assign(__assign(__assign({}, request.extraQueryParameters), request.tokenQueryParameters), {telemetry: NativeConstants.MATS_TELEMETRY}),
              extendedExpiryToken: false
            });
            if (!(request.authenticationScheme === AuthenticationScheme.POP))
              return [3, 2];
            shrParameters = {
              resourceRequestUri: request.resourceRequestUri,
              resourceRequestMethod: request.resourceRequestMethod,
              shrClaims: request.shrClaims,
              shrNonce: request.shrNonce
            };
            popTokenGenerator = new PopTokenGenerator(this.browserCrypto);
            return [4, popTokenGenerator.generateCnf(shrParameters)];
          case 1:
            reqCnfData = _a.sent();
            validatedRequest.reqCnf = reqCnfData.reqCnfHash;
            validatedRequest.keyId = reqCnfData.kid;
            _a.label = 2;
          case 2:
            return [2, validatedRequest];
        }
      });
    });
  };
  return NativeInteractionClient2;
}(BaseInteractionClient);

// node_modules/@azure/msal-browser/dist/broker/nativeBroker/NativeMessageHandler.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var NativeMessageHandler = function() {
  function NativeMessageHandler2(logger, handshakeTimeoutMs, extensionId) {
    this.logger = logger;
    this.handshakeTimeoutMs = handshakeTimeoutMs;
    this.extensionId = extensionId;
    this.resolvers = new Map();
    this.handshakeResolvers = new Map();
    this.responseId = 0;
    this.messageChannel = new MessageChannel();
    this.windowListener = this.onWindowMessage.bind(this);
  }
  NativeMessageHandler2.prototype.sendMessage = function(body) {
    return __awaiter(this, void 0, void 0, function() {
      var req;
      var _this = this;
      return __generator(this, function(_a) {
        this.logger.trace("NativeMessageHandler - sendMessage called.");
        req = {
          channel: NativeConstants.CHANNEL_ID,
          extensionId: this.extensionId,
          responseId: this.responseId++,
          body
        };
        this.logger.trace("NativeMessageHandler - Sending request to browser extension");
        this.logger.tracePii("NativeMessageHandler - Sending request to browser extension: " + JSON.stringify(req));
        this.messageChannel.port1.postMessage(req);
        return [2, new Promise(function(resolve, reject) {
          _this.resolvers.set(req.responseId, {resolve, reject});
        })];
      });
    });
  };
  NativeMessageHandler2.createProvider = function(logger, handshakeTimeoutMs) {
    return __awaiter(this, void 0, void 0, function() {
      var preferredProvider, backupProvider;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            logger.trace("NativeMessageHandler - createProvider called.");
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 5]);
            preferredProvider = new NativeMessageHandler2(logger, handshakeTimeoutMs, NativeConstants.PREFERRED_EXTENSION_ID);
            return [4, preferredProvider.sendHandshakeRequest()];
          case 2:
            _a.sent();
            return [2, preferredProvider];
          case 3:
            _a.sent();
            backupProvider = new NativeMessageHandler2(logger, handshakeTimeoutMs);
            return [4, backupProvider.sendHandshakeRequest()];
          case 4:
            _a.sent();
            return [2, backupProvider];
          case 5:
            return [2];
        }
      });
    });
  };
  NativeMessageHandler2.prototype.sendHandshakeRequest = function() {
    return __awaiter(this, void 0, void 0, function() {
      var req;
      var _this = this;
      return __generator(this, function(_a) {
        this.logger.trace("NativeMessageHandler - sendHandshakeRequest called.");
        window.addEventListener("message", this.windowListener, false);
        req = {
          channel: NativeConstants.CHANNEL_ID,
          extensionId: this.extensionId,
          responseId: this.responseId++,
          body: {
            method: NativeExtensionMethod.HandshakeRequest
          }
        };
        this.messageChannel.port1.onmessage = function(event) {
          _this.onChannelMessage(event);
        };
        window.postMessage(req, window.origin, [this.messageChannel.port2]);
        return [2, new Promise(function(resolve, reject) {
          _this.handshakeResolvers.set(req.responseId, {resolve, reject});
          _this.timeoutId = window.setTimeout(function() {
            window.removeEventListener("message", _this.windowListener, false);
            _this.messageChannel.port1.close();
            _this.messageChannel.port2.close();
            reject(BrowserAuthError.createNativeHandshakeTimeoutError());
            _this.handshakeResolvers.delete(req.responseId);
          }, _this.handshakeTimeoutMs);
        })];
      });
    });
  };
  NativeMessageHandler2.prototype.onWindowMessage = function(event) {
    this.logger.trace("NativeMessageHandler - onWindowMessage called");
    if (event.source !== window) {
      return;
    }
    var request = event.data;
    if (!request.channel || request.channel !== NativeConstants.CHANNEL_ID) {
      return;
    }
    if (request.extensionId && request.extensionId !== this.extensionId) {
      return;
    }
    if (request.body.method === NativeExtensionMethod.HandshakeRequest) {
      this.logger.verbose(request.extensionId ? "Extension with id: " + request.extensionId + " not installed" : "No extension installed");
      clearTimeout(this.timeoutId);
      this.messageChannel.port1.close();
      this.messageChannel.port2.close();
      window.removeEventListener("message", this.windowListener, false);
      var handshakeResolver = this.handshakeResolvers.get(request.responseId);
      if (handshakeResolver) {
        handshakeResolver.reject(BrowserAuthError.createNativeExtensionNotInstalledError());
      }
    }
  };
  NativeMessageHandler2.prototype.onChannelMessage = function(event) {
    this.logger.trace("NativeMessageHandler - onChannelMessage called.");
    var request = event.data;
    var resolver = this.resolvers.get(request.responseId);
    var handshakeResolver = this.handshakeResolvers.get(request.responseId);
    try {
      var method = request.body.method;
      if (method === NativeExtensionMethod.Response) {
        if (!resolver) {
          return;
        }
        var response = request.body.response;
        this.logger.trace("NativeMessageHandler - Received response from browser extension");
        this.logger.tracePii("NativeMessageHandler - Received response from browser extension: " + JSON.stringify(response));
        if (response.status !== "Success") {
          resolver.reject(NativeAuthError.createError(response.code, response.description, response.ext));
        } else if (response.result) {
          if (response.result["code"] && response.result["description"]) {
            resolver.reject(NativeAuthError.createError(response.result["code"], response.result["description"], response.result["ext"]));
          } else {
            resolver.resolve(response.result);
          }
        } else {
          throw AuthError.createUnexpectedError("Event does not contain result.");
        }
        this.resolvers.delete(request.responseId);
      } else if (method === NativeExtensionMethod.HandshakeResponse) {
        if (!handshakeResolver) {
          return;
        }
        clearTimeout(this.timeoutId);
        window.removeEventListener("message", this.windowListener, false);
        this.extensionId = request.extensionId;
        this.extensionVersion = request.body.version;
        this.logger.verbose("NativeMessageHandler - Received HandshakeResponse from extension: " + this.extensionId);
        handshakeResolver.resolve();
        this.handshakeResolvers.delete(request.responseId);
      }
    } catch (err) {
      this.logger.error("Error parsing response from WAM Extension");
      this.logger.errorPii("Error parsing response from WAM Extension: " + err.toString());
      this.logger.errorPii("Unable to parse " + event);
      if (resolver) {
        resolver.reject(err);
      } else if (handshakeResolver) {
        handshakeResolver.reject(err);
      }
    }
  };
  NativeMessageHandler2.prototype.getExtensionId = function() {
    return this.extensionId;
  };
  NativeMessageHandler2.prototype.getExtensionVersion = function() {
    return this.extensionVersion;
  };
  NativeMessageHandler2.isNativeAvailable = function(config, logger, nativeExtensionProvider, authenticationScheme) {
    logger.trace("isNativeAvailable called");
    if (!config.system.allowNativeBroker) {
      logger.trace("isNativeAvailable: allowNativeBroker is not enabled, returning false");
      return false;
    }
    if (!nativeExtensionProvider) {
      logger.trace("isNativeAvailable: WAM extension provider is not initialized, returning false");
      return false;
    }
    if (authenticationScheme) {
      switch (authenticationScheme) {
        case AuthenticationScheme.BEARER:
        case AuthenticationScheme.POP:
          logger.trace("isNativeAvailable: authenticationScheme is supported, returning true");
          return true;
        default:
          logger.trace("isNativeAvailable: authenticationScheme is not supported, returning false");
          return false;
      }
    }
    return true;
  };
  return NativeMessageHandler2;
}();

// node_modules/@azure/msal-browser/dist/interaction_client/RedirectClient.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var RedirectClient = function(_super) {
  __extends(RedirectClient2, _super);
  function RedirectClient2(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeStorageImpl, nativeMessageHandler, correlationId) {
    var _this = _super.call(this, config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId) || this;
    _this.nativeStorage = nativeStorageImpl;
    return _this;
  }
  RedirectClient2.prototype.acquireToken = function(request) {
    return __awaiter(this, void 0, void 0, function() {
      var validRequest, serverTelemetryManager, handleBackButton, authCodeRequest, authClient, interactionHandler, navigateUrl, redirectStartPage, e_1;
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.initializeAuthorizationRequest(request, InteractionType.Redirect)];
          case 1:
            validRequest = _a.sent();
            this.browserStorage.updateCacheEntries(validRequest.state, validRequest.nonce, validRequest.authority, validRequest.loginHint || Constants.EMPTY_STRING, validRequest.account || null);
            serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenRedirect);
            handleBackButton = function(event) {
              if (event.persisted) {
                _this.logger.verbose("Page was restored from back/forward cache. Clearing temporary cache.");
                _this.browserStorage.cleanRequestByState(validRequest.state);
              }
            };
            _a.label = 2;
          case 2:
            _a.trys.push([2, 7, , 8]);
            return [4, this.initializeAuthorizationCodeRequest(validRequest)];
          case 3:
            authCodeRequest = _a.sent();
            return [4, this.createAuthCodeClient(serverTelemetryManager, validRequest.authority, validRequest.azureCloudOptions)];
          case 4:
            authClient = _a.sent();
            this.logger.verbose("Auth code client created");
            interactionHandler = new RedirectHandler(authClient, this.browserStorage, authCodeRequest, this.logger, this.browserCrypto);
            return [4, authClient.getAuthCodeUrl(__assign(__assign({}, validRequest), {nativeBroker: NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, request.authenticationScheme)}))];
          case 5:
            navigateUrl = _a.sent();
            redirectStartPage = this.getRedirectStartPage(request.redirectStartPage);
            this.logger.verbosePii("Redirect start page: " + redirectStartPage);
            window.addEventListener("pageshow", handleBackButton);
            return [4, interactionHandler.initiateAuthRequest(navigateUrl, {
              navigationClient: this.navigationClient,
              redirectTimeout: this.config.system.redirectNavigationTimeout,
              redirectStartPage,
              onRedirectNavigate: request.onRedirectNavigate
            })];
          case 6:
            return [2, _a.sent()];
          case 7:
            e_1 = _a.sent();
            if (e_1 instanceof AuthError) {
              e_1.setCorrelationId(this.correlationId);
            }
            window.removeEventListener("pageshow", handleBackButton);
            serverTelemetryManager.cacheFailedRequest(e_1);
            this.browserStorage.cleanRequestByState(validRequest.state);
            throw e_1;
          case 8:
            return [2];
        }
      });
    });
  };
  RedirectClient2.prototype.handleRedirectPromise = function(hash) {
    return __awaiter(this, void 0, void 0, function() {
      var serverTelemetryManager, responseHash, state, serverParams, loginRequestUrl, loginRequestUrlNormalized, currentUrlNormalized, handleHashResult, navigationOptions, processHashOnRedirect, homepage, e_2;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.handleRedirectPromise);
            _a.label = 1;
          case 1:
            _a.trys.push([1, 10, , 11]);
            if (!this.browserStorage.isInteractionInProgress(true)) {
              this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null.");
              return [2, null];
            }
            responseHash = this.getRedirectResponseHash(hash || window.location.hash);
            if (!responseHash) {
              this.logger.info("handleRedirectPromise did not detect a response hash as a result of a redirect. Cleaning temporary cache.");
              this.browserStorage.cleanRequestByInteractionType(InteractionType.Redirect);
              return [2, null];
            }
            state = void 0;
            try {
              serverParams = UrlString.getDeserializedHash(responseHash);
              state = this.validateAndExtractStateFromHash(serverParams, InteractionType.Redirect);
              this.logger.verbose("State extracted from hash");
            } catch (e) {
              this.logger.info("handleRedirectPromise was unable to extract state due to: " + e);
              this.browserStorage.cleanRequestByInteractionType(InteractionType.Redirect);
              return [2, null];
            }
            loginRequestUrl = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, true) || Constants.EMPTY_STRING;
            loginRequestUrlNormalized = UrlString.removeHashFromUrl(loginRequestUrl);
            currentUrlNormalized = UrlString.removeHashFromUrl(window.location.href);
            if (!(loginRequestUrlNormalized === currentUrlNormalized && this.config.auth.navigateToLoginRequestUrl))
              return [3, 3];
            this.logger.verbose("Current page is loginRequestUrl, handling hash");
            return [4, this.handleHash(responseHash, state, serverTelemetryManager)];
          case 2:
            handleHashResult = _a.sent();
            if (loginRequestUrl.indexOf("#") > -1) {
              BrowserUtils.replaceHash(loginRequestUrl);
            }
            return [2, handleHashResult];
          case 3:
            if (!!this.config.auth.navigateToLoginRequestUrl)
              return [3, 4];
            this.logger.verbose("NavigateToLoginRequestUrl set to false, handling hash");
            return [2, this.handleHash(responseHash, state, serverTelemetryManager)];
          case 4:
            if (!(!BrowserUtils.isInIframe() || this.config.system.allowRedirectInIframe))
              return [3, 9];
            this.browserStorage.setTemporaryCache(TemporaryCacheKeys.URL_HASH, responseHash, true);
            navigationOptions = {
              apiId: ApiId.handleRedirectPromise,
              timeout: this.config.system.redirectNavigationTimeout,
              noHistory: true
            };
            processHashOnRedirect = true;
            if (!(!loginRequestUrl || loginRequestUrl === "null"))
              return [3, 6];
            homepage = BrowserUtils.getHomepage();
            this.browserStorage.setTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, homepage, true);
            this.logger.warning("Unable to get valid login request url from cache, redirecting to home page");
            return [4, this.navigationClient.navigateInternal(homepage, navigationOptions)];
          case 5:
            processHashOnRedirect = _a.sent();
            return [3, 8];
          case 6:
            this.logger.verbose("Navigating to loginRequestUrl: " + loginRequestUrl);
            return [4, this.navigationClient.navigateInternal(loginRequestUrl, navigationOptions)];
          case 7:
            processHashOnRedirect = _a.sent();
            _a.label = 8;
          case 8:
            if (!processHashOnRedirect) {
              return [2, this.handleHash(responseHash, state, serverTelemetryManager)];
            }
            _a.label = 9;
          case 9:
            return [2, null];
          case 10:
            e_2 = _a.sent();
            if (e_2 instanceof AuthError) {
              e_2.setCorrelationId(this.correlationId);
            }
            serverTelemetryManager.cacheFailedRequest(e_2);
            this.browserStorage.cleanRequestByInteractionType(InteractionType.Redirect);
            throw e_2;
          case 11:
            return [2];
        }
      });
    });
  };
  RedirectClient2.prototype.getRedirectResponseHash = function(hash) {
    this.logger.verbose("getRedirectResponseHash called");
    var isResponseHash = UrlString.hashContainsKnownProperties(hash);
    if (isResponseHash) {
      BrowserUtils.clearHash(window);
      this.logger.verbose("Hash contains known properties, returning response hash");
      return hash;
    }
    var cachedHash = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.URL_HASH, true);
    this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.URL_HASH));
    this.logger.verbose("Hash does not contain known properties, returning cached hash");
    return cachedHash;
  };
  RedirectClient2.prototype.handleHash = function(hash, state, serverTelemetryManager) {
    return __awaiter(this, void 0, void 0, function() {
      var cachedRequest, serverParams, nativeInteractionClient, userRequestState, currentAuthority, authClient, interactionHandler;
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            cachedRequest = this.browserStorage.getCachedRequest(state, this.browserCrypto);
            this.logger.verbose("handleHash called, retrieved cached request");
            serverParams = UrlString.getDeserializedHash(hash);
            if (serverParams.accountId) {
              this.logger.verbose("Account id found in hash, calling WAM for token");
              if (!this.nativeMessageHandler) {
                throw BrowserAuthError.createNativeConnectionNotEstablishedError();
              }
              nativeInteractionClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, serverParams.accountId, this.browserStorage, cachedRequest.correlationId);
              userRequestState = ProtocolUtils.parseRequestState(this.browserCrypto, state).userRequestState;
              return [2, nativeInteractionClient.acquireToken(__assign(__assign({}, cachedRequest), {
                state: userRequestState,
                prompt: void 0
              })).finally(function() {
                _this.browserStorage.cleanRequestByState(state);
              })];
            }
            currentAuthority = this.browserStorage.getCachedAuthority(state);
            if (!currentAuthority) {
              throw BrowserAuthError.createNoCachedAuthorityError();
            }
            return [4, this.createAuthCodeClient(serverTelemetryManager, currentAuthority)];
          case 1:
            authClient = _a.sent();
            this.logger.verbose("Auth code client created");
            ThrottlingUtils.removeThrottle(this.browserStorage, this.config.auth.clientId, cachedRequest);
            interactionHandler = new RedirectHandler(authClient, this.browserStorage, cachedRequest, this.logger, this.browserCrypto);
            return [4, interactionHandler.handleCodeResponseFromHash(hash, state, authClient.authority, this.networkClient)];
          case 2:
            return [2, _a.sent()];
        }
      });
    });
  };
  RedirectClient2.prototype.logout = function(logoutRequest) {
    return __awaiter(this, void 0, void 0, function() {
      var validLogoutRequest, serverTelemetryManager, navigationOptions, authClient, logoutUri, navigate, e_3;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.logger.verbose("logoutRedirect called");
            validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
            serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.logout);
            _a.label = 1;
          case 1:
            _a.trys.push([1, 10, , 11]);
            this.eventHandler.emitEvent(EventType.LOGOUT_START, InteractionType.Redirect, logoutRequest);
            return [4, this.clearCacheOnLogout(validLogoutRequest.account)];
          case 2:
            _a.sent();
            navigationOptions = {
              apiId: ApiId.logout,
              timeout: this.config.system.redirectNavigationTimeout,
              noHistory: false
            };
            return [4, this.createAuthCodeClient(serverTelemetryManager, logoutRequest && logoutRequest.authority)];
          case 3:
            authClient = _a.sent();
            this.logger.verbose("Auth code client created");
            logoutUri = authClient.getLogoutUri(validLogoutRequest);
            this.eventHandler.emitEvent(EventType.LOGOUT_SUCCESS, InteractionType.Redirect, validLogoutRequest);
            if (!(logoutRequest && typeof logoutRequest.onRedirectNavigate === "function"))
              return [3, 7];
            navigate = logoutRequest.onRedirectNavigate(logoutUri);
            if (!(navigate !== false))
              return [3, 5];
            this.logger.verbose("Logout onRedirectNavigate did not return false, navigating");
            if (!this.browserStorage.getInteractionInProgress()) {
              this.browserStorage.setInteractionInProgress(true);
            }
            return [4, this.navigationClient.navigateExternal(logoutUri, navigationOptions)];
          case 4:
            _a.sent();
            return [2];
          case 5:
            this.browserStorage.setInteractionInProgress(false);
            this.logger.verbose("Logout onRedirectNavigate returned false, stopping navigation");
            _a.label = 6;
          case 6:
            return [3, 9];
          case 7:
            if (!this.browserStorage.getInteractionInProgress()) {
              this.browserStorage.setInteractionInProgress(true);
            }
            return [4, this.navigationClient.navigateExternal(logoutUri, navigationOptions)];
          case 8:
            _a.sent();
            return [2];
          case 9:
            return [3, 11];
          case 10:
            e_3 = _a.sent();
            if (e_3 instanceof AuthError) {
              e_3.setCorrelationId(this.correlationId);
            }
            serverTelemetryManager.cacheFailedRequest(e_3);
            this.eventHandler.emitEvent(EventType.LOGOUT_FAILURE, InteractionType.Redirect, null, e_3);
            this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Redirect);
            throw e_3;
          case 11:
            this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Redirect);
            return [2];
        }
      });
    });
  };
  RedirectClient2.prototype.getRedirectStartPage = function(requestStartPage) {
    var redirectStartPage = requestStartPage || window.location.href;
    return UrlString.getAbsoluteUrl(redirectStartPage, BrowserUtils.getCurrentUri());
  };
  return RedirectClient2;
}(StandardInteractionClient);

// node_modules/@azure/msal-browser/dist/interaction_client/PopupClient.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var PopupClient = function(_super) {
  __extends(PopupClient2, _super);
  function PopupClient2(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeStorageImpl, nativeMessageHandler, correlationId) {
    var _this = _super.call(this, config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId) || this;
    _this.unloadWindow = _this.unloadWindow.bind(_this);
    _this.nativeStorage = nativeStorageImpl;
    return _this;
  }
  PopupClient2.prototype.acquireToken = function(request) {
    try {
      var popupName = this.generatePopupName(request.scopes || OIDC_DEFAULT_SCOPES, request.authority || this.config.auth.authority);
      var popupWindowAttributes = request.popupWindowAttributes || {};
      if (this.config.system.asyncPopups) {
        this.logger.verbose("asyncPopups set to true, acquiring token");
        return this.acquireTokenPopupAsync(request, popupName, popupWindowAttributes);
      } else {
        this.logger.verbose("asyncPopup set to false, opening popup before acquiring token");
        var popup = this.openSizedPopup("about:blank", popupName, popupWindowAttributes);
        return this.acquireTokenPopupAsync(request, popupName, popupWindowAttributes, popup);
      }
    } catch (e) {
      return Promise.reject(e);
    }
  };
  PopupClient2.prototype.logout = function(logoutRequest) {
    try {
      this.logger.verbose("logoutPopup called");
      var validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
      var popupName = this.generateLogoutPopupName(validLogoutRequest);
      var authority = logoutRequest && logoutRequest.authority;
      var mainWindowRedirectUri = logoutRequest && logoutRequest.mainWindowRedirectUri;
      var popupWindowAttributes = (logoutRequest === null || logoutRequest === void 0 ? void 0 : logoutRequest.popupWindowAttributes) || {};
      if (this.config.system.asyncPopups) {
        this.logger.verbose("asyncPopups set to true");
        return this.logoutPopupAsync(validLogoutRequest, popupName, popupWindowAttributes, authority, void 0, mainWindowRedirectUri);
      } else {
        this.logger.verbose("asyncPopup set to false, opening popup");
        var popup = this.openSizedPopup("about:blank", popupName, popupWindowAttributes);
        return this.logoutPopupAsync(validLogoutRequest, popupName, popupWindowAttributes, authority, popup, mainWindowRedirectUri);
      }
    } catch (e) {
      return Promise.reject(e);
    }
  };
  PopupClient2.prototype.acquireTokenPopupAsync = function(request, popupName, popupWindowAttributes, popup) {
    return __awaiter(this, void 0, void 0, function() {
      var serverTelemetryManager, validRequest, authCodeRequest, authClient, isNativeBroker, fetchNativeAccountIdMeasurement, navigateUrl, interactionHandler, popupParameters, popupWindow, hash, serverParams, state_1, nativeInteractionClient, userRequestState, result, e_1;
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.logger.verbose("acquireTokenPopupAsync called");
            serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenPopup);
            return [4, this.initializeAuthorizationRequest(request, InteractionType.Popup)];
          case 1:
            validRequest = _a.sent();
            this.browserStorage.updateCacheEntries(validRequest.state, validRequest.nonce, validRequest.authority, validRequest.loginHint || Constants.EMPTY_STRING, validRequest.account || null);
            _a.label = 2;
          case 2:
            _a.trys.push([2, 8, , 9]);
            return [4, this.initializeAuthorizationCodeRequest(validRequest)];
          case 3:
            authCodeRequest = _a.sent();
            return [4, this.createAuthCodeClient(serverTelemetryManager, validRequest.authority, validRequest.azureCloudOptions)];
          case 4:
            authClient = _a.sent();
            this.logger.verbose("Auth code client created");
            isNativeBroker = NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, request.authenticationScheme);
            fetchNativeAccountIdMeasurement = void 0;
            if (isNativeBroker) {
              fetchNativeAccountIdMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.FetchAccountIdWithNativeBroker, request.correlationId);
            }
            return [4, authClient.getAuthCodeUrl(__assign(__assign({}, validRequest), {nativeBroker: isNativeBroker}))];
          case 5:
            navigateUrl = _a.sent();
            interactionHandler = new InteractionHandler(authClient, this.browserStorage, authCodeRequest, this.logger);
            popupParameters = {
              popup,
              popupName,
              popupWindowAttributes
            };
            popupWindow = this.initiateAuthRequest(navigateUrl, popupParameters);
            this.eventHandler.emitEvent(EventType.POPUP_OPENED, InteractionType.Popup, {popupWindow}, null);
            return [4, this.monitorPopupForHash(popupWindow)];
          case 6:
            hash = _a.sent();
            serverParams = UrlString.getDeserializedHash(hash);
            state_1 = this.validateAndExtractStateFromHash(serverParams, InteractionType.Popup, validRequest.correlationId);
            ThrottlingUtils.removeThrottle(this.browserStorage, this.config.auth.clientId, authCodeRequest);
            if (serverParams.accountId) {
              this.logger.verbose("Account id found in hash, calling WAM for token");
              if (fetchNativeAccountIdMeasurement) {
                fetchNativeAccountIdMeasurement.endMeasurement({
                  success: true,
                  isNativeBroker: true
                });
              }
              if (!this.nativeMessageHandler) {
                throw BrowserAuthError.createNativeConnectionNotEstablishedError();
              }
              nativeInteractionClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, serverParams.accountId, this.nativeStorage, validRequest.correlationId);
              userRequestState = ProtocolUtils.parseRequestState(this.browserCrypto, state_1).userRequestState;
              return [2, nativeInteractionClient.acquireToken(__assign(__assign({}, validRequest), {
                state: userRequestState,
                prompt: void 0
              })).finally(function() {
                _this.browserStorage.cleanRequestByState(state_1);
              })];
            }
            return [4, interactionHandler.handleCodeResponseFromHash(hash, state_1, authClient.authority, this.networkClient)];
          case 7:
            result = _a.sent();
            return [2, result];
          case 8:
            e_1 = _a.sent();
            if (popup) {
              popup.close();
            }
            if (e_1 instanceof AuthError) {
              e_1.setCorrelationId(this.correlationId);
            }
            serverTelemetryManager.cacheFailedRequest(e_1);
            this.browserStorage.cleanRequestByState(validRequest.state);
            throw e_1;
          case 9:
            return [2];
        }
      });
    });
  };
  PopupClient2.prototype.logoutPopupAsync = function(validRequest, popupName, popupWindowAttributes, requestAuthority, popup, mainWindowRedirectUri) {
    return __awaiter(this, void 0, void 0, function() {
      var serverTelemetryManager, authClient, logoutUri, popupWindow, navigationOptions, absoluteUrl, e_2;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.logger.verbose("logoutPopupAsync called");
            this.eventHandler.emitEvent(EventType.LOGOUT_START, InteractionType.Popup, validRequest);
            serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.logoutPopup);
            _a.label = 1;
          case 1:
            _a.trys.push([1, 5, , 6]);
            return [4, this.clearCacheOnLogout(validRequest.account)];
          case 2:
            _a.sent();
            return [4, this.createAuthCodeClient(serverTelemetryManager, requestAuthority)];
          case 3:
            authClient = _a.sent();
            this.logger.verbose("Auth code client created");
            logoutUri = authClient.getLogoutUri(validRequest);
            this.eventHandler.emitEvent(EventType.LOGOUT_SUCCESS, InteractionType.Popup, validRequest);
            popupWindow = this.openPopup(logoutUri, {popupName, popupWindowAttributes, popup});
            this.eventHandler.emitEvent(EventType.POPUP_OPENED, InteractionType.Popup, {popupWindow}, null);
            return [4, this.waitForLogoutPopup(popupWindow)];
          case 4:
            _a.sent();
            if (mainWindowRedirectUri) {
              navigationOptions = {
                apiId: ApiId.logoutPopup,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: false
              };
              absoluteUrl = UrlString.getAbsoluteUrl(mainWindowRedirectUri, BrowserUtils.getCurrentUri());
              this.logger.verbose("Redirecting main window to url specified in the request");
              this.logger.verbosePii("Redirecting main window to: " + absoluteUrl);
              this.navigationClient.navigateInternal(absoluteUrl, navigationOptions);
            } else {
              this.logger.verbose("No main window navigation requested");
            }
            return [3, 6];
          case 5:
            e_2 = _a.sent();
            if (popup) {
              popup.close();
            }
            if (e_2 instanceof AuthError) {
              e_2.setCorrelationId(this.correlationId);
            }
            this.browserStorage.setInteractionInProgress(false);
            this.eventHandler.emitEvent(EventType.LOGOUT_FAILURE, InteractionType.Popup, null, e_2);
            this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Popup);
            serverTelemetryManager.cacheFailedRequest(e_2);
            throw e_2;
          case 6:
            this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Popup);
            return [2];
        }
      });
    });
  };
  PopupClient2.prototype.initiateAuthRequest = function(requestUrl, params) {
    if (!StringUtils.isEmpty(requestUrl)) {
      this.logger.infoPii("Navigate to: " + requestUrl);
      return this.openPopup(requestUrl, params);
    } else {
      this.logger.error("Navigate url is empty");
      throw BrowserAuthError.createEmptyNavigationUriError();
    }
  };
  PopupClient2.prototype.monitorPopupForHash = function(popupWindow) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      var maxTicks = _this.config.system.windowHashTimeout / _this.config.system.pollIntervalMilliseconds;
      var ticks = 0;
      _this.logger.verbose("PopupHandler.monitorPopupForHash - polling started");
      var intervalId = setInterval(function() {
        if (popupWindow.closed) {
          _this.logger.error("PopupHandler.monitorPopupForHash - window closed");
          _this.cleanPopup();
          clearInterval(intervalId);
          reject(BrowserAuthError.createUserCancelledError());
          return;
        }
        var href = Constants.EMPTY_STRING;
        var hash = Constants.EMPTY_STRING;
        try {
          href = popupWindow.location.href;
          hash = popupWindow.location.hash;
        } catch (e) {
        }
        if (StringUtils.isEmpty(href) || href === "about:blank") {
          return;
        }
        _this.logger.verbose("PopupHandler.monitorPopupForHash - popup window is on same origin as caller");
        ticks++;
        if (hash) {
          _this.logger.verbose("PopupHandler.monitorPopupForHash - found hash in url");
          clearInterval(intervalId);
          _this.cleanPopup(popupWindow);
          if (UrlString.hashContainsKnownProperties(hash)) {
            _this.logger.verbose("PopupHandler.monitorPopupForHash - hash contains known properties, returning.");
            resolve(hash);
          } else {
            _this.logger.error("PopupHandler.monitorPopupForHash - found hash in url but it does not contain known properties. Check that your router is not changing the hash prematurely.");
            _this.logger.errorPii("PopupHandler.monitorPopupForHash - hash found: " + hash);
            reject(BrowserAuthError.createHashDoesNotContainKnownPropertiesError());
          }
        } else if (ticks > maxTicks) {
          _this.logger.error("PopupHandler.monitorPopupForHash - unable to find hash in url, timing out");
          clearInterval(intervalId);
          reject(BrowserAuthError.createMonitorPopupTimeoutError());
        }
      }, _this.config.system.pollIntervalMilliseconds);
    });
  };
  PopupClient2.prototype.waitForLogoutPopup = function(popupWindow) {
    var _this = this;
    return new Promise(function(resolve) {
      _this.logger.verbose("PopupHandler.waitForLogoutPopup - polling started");
      var intervalId = setInterval(function() {
        if (popupWindow.closed) {
          _this.logger.error("PopupHandler.waitForLogoutPopup - window closed");
          _this.cleanPopup();
          clearInterval(intervalId);
          resolve();
        }
        var href = Constants.EMPTY_STRING;
        try {
          href = popupWindow.location.href;
        } catch (e) {
        }
        if (StringUtils.isEmpty(href) || href === "about:blank") {
          return;
        }
        _this.logger.verbose("PopupHandler.waitForLogoutPopup - popup window is on same origin as caller, closing.");
        clearInterval(intervalId);
        _this.cleanPopup(popupWindow);
        resolve();
      }, _this.config.system.pollIntervalMilliseconds);
    });
  };
  PopupClient2.prototype.openPopup = function(urlNavigate, popupParams) {
    try {
      var popupWindow = void 0;
      if (popupParams.popup) {
        popupWindow = popupParams.popup;
        this.logger.verbosePii("Navigating popup window to: " + urlNavigate);
        popupWindow.location.assign(urlNavigate);
      } else if (typeof popupParams.popup === "undefined") {
        this.logger.verbosePii("Opening popup window to: " + urlNavigate);
        popupWindow = this.openSizedPopup(urlNavigate, popupParams.popupName, popupParams.popupWindowAttributes);
      }
      if (!popupWindow) {
        throw BrowserAuthError.createEmptyWindowCreatedError();
      }
      if (popupWindow.focus) {
        popupWindow.focus();
      }
      this.currentWindow = popupWindow;
      window.addEventListener("beforeunload", this.unloadWindow);
      return popupWindow;
    } catch (e) {
      this.logger.error("error opening popup " + e.message);
      this.browserStorage.setInteractionInProgress(false);
      throw BrowserAuthError.createPopupWindowError(e.toString());
    }
  };
  PopupClient2.prototype.openSizedPopup = function(urlNavigate, popupName, popupWindowAttributes) {
    var _a, _b, _c, _d;
    var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
    var winTop = window.screenTop ? window.screenTop : window.screenY;
    var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var width = (_a = popupWindowAttributes.popupSize) === null || _a === void 0 ? void 0 : _a.width;
    var height = (_b = popupWindowAttributes.popupSize) === null || _b === void 0 ? void 0 : _b.height;
    var top = (_c = popupWindowAttributes.popupPosition) === null || _c === void 0 ? void 0 : _c.top;
    var left = (_d = popupWindowAttributes.popupPosition) === null || _d === void 0 ? void 0 : _d.left;
    if (!width || width < 0 || width > winWidth) {
      this.logger.verbose("Default popup window width used. Window width not configured or invalid.");
      width = BrowserConstants.POPUP_WIDTH;
    }
    if (!height || height < 0 || height > winHeight) {
      this.logger.verbose("Default popup window height used. Window height not configured or invalid.");
      height = BrowserConstants.POPUP_HEIGHT;
    }
    if (!top || top < 0 || top > winHeight) {
      this.logger.verbose("Default popup window top position used. Window top not configured or invalid.");
      top = Math.max(0, winHeight / 2 - BrowserConstants.POPUP_HEIGHT / 2 + winTop);
    }
    if (!left || left < 0 || left > winWidth) {
      this.logger.verbose("Default popup window left position used. Window left not configured or invalid.");
      left = Math.max(0, winWidth / 2 - BrowserConstants.POPUP_WIDTH / 2 + winLeft);
    }
    return window.open(urlNavigate, popupName, "width=" + width + ", height=" + height + ", top=" + top + ", left=" + left + ", scrollbars=yes");
  };
  PopupClient2.prototype.unloadWindow = function(e) {
    this.browserStorage.cleanRequestByInteractionType(InteractionType.Popup);
    if (this.currentWindow) {
      this.currentWindow.close();
    }
    e.preventDefault();
  };
  PopupClient2.prototype.cleanPopup = function(popupWindow) {
    if (popupWindow) {
      popupWindow.close();
    }
    window.removeEventListener("beforeunload", this.unloadWindow);
    this.browserStorage.setInteractionInProgress(false);
  };
  PopupClient2.prototype.generatePopupName = function(scopes, authority) {
    return BrowserConstants.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + scopes.join("-") + "." + authority + "." + this.correlationId;
  };
  PopupClient2.prototype.generateLogoutPopupName = function(request) {
    var homeAccountId = request.account && request.account.homeAccountId;
    return BrowserConstants.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + homeAccountId + "." + this.correlationId;
  };
  return PopupClient2;
}(StandardInteractionClient);

// node_modules/@azure/msal-browser/dist/navigation/NavigationClient.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var NavigationClient = function() {
  function NavigationClient2() {
  }
  NavigationClient2.prototype.navigateInternal = function(url, options) {
    return NavigationClient2.defaultNavigateWindow(url, options);
  };
  NavigationClient2.prototype.navigateExternal = function(url, options) {
    return NavigationClient2.defaultNavigateWindow(url, options);
  };
  NavigationClient2.defaultNavigateWindow = function(url, options) {
    if (options.noHistory) {
      window.location.replace(url);
    } else {
      window.location.assign(url);
    }
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(true);
      }, options.timeout);
    });
  };
  return NavigationClient2;
}();

// node_modules/@azure/msal-browser/dist/config/Configuration.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var DEFAULT_POPUP_TIMEOUT_MS = 6e4;
var DEFAULT_IFRAME_TIMEOUT_MS = 6e3;
var DEFAULT_REDIRECT_TIMEOUT_MS = 3e4;
var DEFAULT_NATIVE_BROKER_HANDSHAKE_TIMEOUT_MS = 2e3;
function buildConfiguration(_a, isBrowserEnvironment) {
  var userInputAuth = _a.auth, userInputCache = _a.cache, userInputSystem = _a.system, userInputTelemetry = _a.telemetry;
  var DEFAULT_AUTH_OPTIONS = {
    clientId: Constants.EMPTY_STRING,
    authority: "" + Constants.DEFAULT_AUTHORITY,
    knownAuthorities: [],
    cloudDiscoveryMetadata: Constants.EMPTY_STRING,
    authorityMetadata: Constants.EMPTY_STRING,
    redirectUri: Constants.EMPTY_STRING,
    postLogoutRedirectUri: Constants.EMPTY_STRING,
    navigateToLoginRequestUrl: true,
    clientCapabilities: [],
    protocolMode: ProtocolMode.AAD,
    azureCloudOptions: {
      azureCloudInstance: AzureCloudInstance.None,
      tenant: Constants.EMPTY_STRING
    },
    skipAuthorityMetadataCache: false
  };
  var DEFAULT_CACHE_OPTIONS = {
    cacheLocation: BrowserCacheLocation.SessionStorage,
    storeAuthStateInCookie: false,
    secureCookies: false
  };
  var DEFAULT_LOGGER_OPTIONS = {
    loggerCallback: function() {
    },
    logLevel: LogLevel.Info,
    piiLoggingEnabled: false
  };
  var DEFAULT_BROWSER_SYSTEM_OPTIONS = __assign(__assign({}, DEFAULT_SYSTEM_OPTIONS), {
    loggerOptions: DEFAULT_LOGGER_OPTIONS,
    networkClient: isBrowserEnvironment ? BrowserUtils.getBrowserNetworkClient() : StubbedNetworkModule,
    navigationClient: new NavigationClient(),
    loadFrameTimeout: 0,
    windowHashTimeout: (userInputSystem === null || userInputSystem === void 0 ? void 0 : userInputSystem.loadFrameTimeout) || DEFAULT_POPUP_TIMEOUT_MS,
    iframeHashTimeout: (userInputSystem === null || userInputSystem === void 0 ? void 0 : userInputSystem.loadFrameTimeout) || DEFAULT_IFRAME_TIMEOUT_MS,
    navigateFrameWait: isBrowserEnvironment && BrowserUtils.detectIEOrEdge() ? 500 : 0,
    redirectNavigationTimeout: DEFAULT_REDIRECT_TIMEOUT_MS,
    asyncPopups: false,
    allowRedirectInIframe: false,
    allowNativeBroker: false,
    nativeBrokerHandshakeTimeout: (userInputSystem === null || userInputSystem === void 0 ? void 0 : userInputSystem.nativeBrokerHandshakeTimeout) || DEFAULT_NATIVE_BROKER_HANDSHAKE_TIMEOUT_MS,
    pollIntervalMilliseconds: BrowserConstants.DEFAULT_POLL_INTERVAL_MS,
    cryptoOptions: {
      useMsrCrypto: false,
      entropy: void 0
    }
  });
  var DEFAULT_TELEMETRY_OPTIONS2 = {
    application: {
      appName: Constants.EMPTY_STRING,
      appVersion: Constants.EMPTY_STRING
    }
  };
  var overlayedConfig = {
    auth: __assign(__assign({}, DEFAULT_AUTH_OPTIONS), userInputAuth),
    cache: __assign(__assign({}, DEFAULT_CACHE_OPTIONS), userInputCache),
    system: __assign(__assign({}, DEFAULT_BROWSER_SYSTEM_OPTIONS), userInputSystem),
    telemetry: __assign(__assign({}, DEFAULT_TELEMETRY_OPTIONS2), userInputTelemetry)
  };
  return overlayedConfig;
}

// node_modules/@azure/msal-browser/dist/interaction_handler/SilentHandler.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var SilentHandler = function(_super) {
  __extends(SilentHandler2, _super);
  function SilentHandler2(authCodeModule, storageImpl, authCodeRequest, logger, systemOptions) {
    var _this = _super.call(this, authCodeModule, storageImpl, authCodeRequest, logger) || this;
    _this.navigateFrameWait = systemOptions.navigateFrameWait;
    _this.pollIntervalMilliseconds = systemOptions.pollIntervalMilliseconds;
    return _this;
  }
  SilentHandler2.prototype.initiateAuthRequest = function(requestUrl) {
    return __awaiter(this, void 0, void 0, function() {
      var _a;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            if (StringUtils.isEmpty(requestUrl)) {
              this.logger.info("Navigate url is empty");
              throw BrowserAuthError.createEmptyNavigationUriError();
            }
            if (!this.navigateFrameWait)
              return [3, 2];
            return [4, this.loadFrame(requestUrl)];
          case 1:
            _a = _b.sent();
            return [3, 3];
          case 2:
            _a = this.loadFrameSync(requestUrl);
            _b.label = 3;
          case 3:
            return [2, _a];
        }
      });
    });
  };
  SilentHandler2.prototype.monitorIframeForHash = function(iframe, timeout) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (timeout < DEFAULT_IFRAME_TIMEOUT_MS) {
        _this.logger.warning("system.loadFrameTimeout or system.iframeHashTimeout set to lower (" + timeout + "ms) than the default (" + DEFAULT_IFRAME_TIMEOUT_MS + "ms). This may result in timeouts.");
      }
      var nowMark = window.performance.now();
      var timeoutMark = nowMark + timeout;
      var intervalId = setInterval(function() {
        if (window.performance.now() > timeoutMark) {
          _this.removeHiddenIframe(iframe);
          clearInterval(intervalId);
          reject(BrowserAuthError.createMonitorIframeTimeoutError());
          return;
        }
        var href = Constants.EMPTY_STRING;
        var contentWindow = iframe.contentWindow;
        try {
          href = contentWindow ? contentWindow.location.href : Constants.EMPTY_STRING;
        } catch (e) {
        }
        if (StringUtils.isEmpty(href)) {
          return;
        }
        var contentHash = contentWindow ? contentWindow.location.hash : Constants.EMPTY_STRING;
        if (UrlString.hashContainsKnownProperties(contentHash)) {
          _this.removeHiddenIframe(iframe);
          clearInterval(intervalId);
          resolve(contentHash);
          return;
        }
      }, _this.pollIntervalMilliseconds);
    });
  };
  SilentHandler2.prototype.loadFrame = function(urlNavigate) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      var frameHandle = _this.createHiddenIframe();
      setTimeout(function() {
        if (!frameHandle) {
          reject("Unable to load iframe");
          return;
        }
        frameHandle.src = urlNavigate;
        resolve(frameHandle);
      }, _this.navigateFrameWait);
    });
  };
  SilentHandler2.prototype.loadFrameSync = function(urlNavigate) {
    var frameHandle = this.createHiddenIframe();
    frameHandle.src = urlNavigate;
    return frameHandle;
  };
  SilentHandler2.prototype.createHiddenIframe = function() {
    var authFrame = document.createElement("iframe");
    authFrame.style.visibility = "hidden";
    authFrame.style.position = "absolute";
    authFrame.style.width = authFrame.style.height = "0";
    authFrame.style.border = "0";
    authFrame.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
    document.getElementsByTagName("body")[0].appendChild(authFrame);
    return authFrame;
  };
  SilentHandler2.prototype.removeHiddenIframe = function(iframe) {
    if (document.body === iframe.parentNode) {
      document.body.removeChild(iframe);
    }
  };
  return SilentHandler2;
}(InteractionHandler);

// node_modules/@azure/msal-browser/dist/interaction_client/SilentIframeClient.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var SilentIframeClient = function(_super) {
  __extends(SilentIframeClient2, _super);
  function SilentIframeClient2(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, nativeStorageImpl, nativeMessageHandler, correlationId) {
    var _this = _super.call(this, config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId) || this;
    _this.apiId = apiId;
    _this.nativeStorage = nativeStorageImpl;
    return _this;
  }
  SilentIframeClient2.prototype.acquireToken = function(request) {
    return __awaiter(this, void 0, void 0, function() {
      var acquireTokenMeasurement, silentRequest, serverTelemetryManager, authClient, e_1;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.logger.verbose("acquireTokenByIframe called");
            acquireTokenMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.SilentIframeClientAcquireToken, request.correlationId);
            if (StringUtils.isEmpty(request.loginHint) && StringUtils.isEmpty(request.sid) && (!request.account || StringUtils.isEmpty(request.account.username))) {
              this.logger.warning("No user hint provided. The authorization server may need more information to complete this request.");
            }
            if (request.prompt && request.prompt !== PromptValue.NONE && request.prompt !== PromptValue.NO_SESSION) {
              acquireTokenMeasurement.endMeasurement({
                success: false
              });
              throw BrowserAuthError.createSilentPromptValueError(request.prompt);
            }
            return [4, this.initializeAuthorizationRequest(__assign(__assign({}, request), {prompt: request.prompt || PromptValue.NONE}), InteractionType.Silent)];
          case 1:
            silentRequest = _a.sent();
            this.browserStorage.updateCacheEntries(silentRequest.state, silentRequest.nonce, silentRequest.authority, silentRequest.loginHint || Constants.EMPTY_STRING, silentRequest.account || null);
            serverTelemetryManager = this.initializeServerTelemetryManager(this.apiId);
            _a.label = 2;
          case 2:
            _a.trys.push([2, 5, , 6]);
            return [4, this.createAuthCodeClient(serverTelemetryManager, silentRequest.authority, silentRequest.azureCloudOptions)];
          case 3:
            authClient = _a.sent();
            this.logger.verbose("Auth code client created");
            return [4, this.silentTokenHelper(authClient, silentRequest).then(function(result) {
              acquireTokenMeasurement.endMeasurement({
                success: true,
                fromCache: false,
                requestId: result.requestId
              });
              return result;
            })];
          case 4:
            return [2, _a.sent()];
          case 5:
            e_1 = _a.sent();
            if (e_1 instanceof AuthError) {
              e_1.setCorrelationId(this.correlationId);
            }
            serverTelemetryManager.cacheFailedRequest(e_1);
            this.browserStorage.cleanRequestByState(silentRequest.state);
            acquireTokenMeasurement.endMeasurement({
              errorCode: e_1 instanceof AuthError && e_1.errorCode || void 0,
              subErrorCode: e_1 instanceof AuthError && e_1.subError || void 0,
              success: false
            });
            throw e_1;
          case 6:
            return [2];
        }
      });
    });
  };
  SilentIframeClient2.prototype.logout = function() {
    return Promise.reject(BrowserAuthError.createSilentLogoutUnsupportedError());
  };
  SilentIframeClient2.prototype.silentTokenHelper = function(authClient, silentRequest) {
    return __awaiter(this, void 0, void 0, function() {
      var authCodeRequest, navigateUrl, silentHandler, msalFrame, hash, serverParams, state, nativeInteractionClient, userRequestState;
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.initializeAuthorizationCodeRequest(silentRequest)];
          case 1:
            authCodeRequest = _a.sent();
            return [4, authClient.getAuthCodeUrl(__assign(__assign({}, silentRequest), {nativeBroker: NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, silentRequest.authenticationScheme)}))];
          case 2:
            navigateUrl = _a.sent();
            silentHandler = new SilentHandler(authClient, this.browserStorage, authCodeRequest, this.logger, this.config.system);
            return [4, silentHandler.initiateAuthRequest(navigateUrl)];
          case 3:
            msalFrame = _a.sent();
            return [4, silentHandler.monitorIframeForHash(msalFrame, this.config.system.iframeHashTimeout)];
          case 4:
            hash = _a.sent();
            serverParams = UrlString.getDeserializedHash(hash);
            state = this.validateAndExtractStateFromHash(serverParams, InteractionType.Silent, authCodeRequest.correlationId);
            if (serverParams.accountId) {
              this.logger.verbose("Account id found in hash, calling WAM for token");
              if (!this.nativeMessageHandler) {
                throw BrowserAuthError.createNativeConnectionNotEstablishedError();
              }
              nativeInteractionClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, serverParams.accountId, this.browserStorage, this.correlationId);
              userRequestState = ProtocolUtils.parseRequestState(this.browserCrypto, state).userRequestState;
              return [2, nativeInteractionClient.acquireToken(__assign(__assign({}, silentRequest), {state: userRequestState, prompt: silentRequest.prompt || PromptValue.NONE})).finally(function() {
                _this.browserStorage.cleanRequestByState(state);
              })];
            }
            return [2, silentHandler.handleCodeResponseFromHash(hash, state, authClient.authority, this.networkClient)];
        }
      });
    });
  };
  return SilentIframeClient2;
}(StandardInteractionClient);

// node_modules/@azure/msal-browser/dist/interaction_client/SilentRefreshClient.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var SilentRefreshClient = function(_super) {
  __extends(SilentRefreshClient2, _super);
  function SilentRefreshClient2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  SilentRefreshClient2.prototype.acquireToken = function(request) {
    return __awaiter(this, void 0, void 0, function() {
      var silentRequest, _a, acquireTokenMeasurement, serverTelemetryManager, refreshTokenClient;
      var _this = this;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            _a = [__assign({}, request)];
            return [4, this.initializeBaseRequest(request)];
          case 1:
            silentRequest = __assign.apply(void 0, _a.concat([_b.sent()]));
            acquireTokenMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.SilentRefreshClientAcquireToken, silentRequest.correlationId);
            serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenSilent_silentFlow);
            return [4, this.createRefreshTokenClient(serverTelemetryManager, silentRequest.authority, silentRequest.azureCloudOptions)];
          case 2:
            refreshTokenClient = _b.sent();
            this.logger.verbose("Refresh token client created");
            return [2, refreshTokenClient.acquireTokenByRefreshToken(silentRequest).then(function(result) {
              acquireTokenMeasurement.endMeasurement({
                success: true,
                fromCache: result.fromCache,
                requestId: result.requestId
              });
              return result;
            }).catch(function(e) {
              if (e instanceof AuthError) {
                e.setCorrelationId(_this.correlationId);
              }
              serverTelemetryManager.cacheFailedRequest(e);
              acquireTokenMeasurement.endMeasurement({
                errorCode: e.errorCode,
                subErrorCode: e.subError,
                success: false
              });
              throw e;
            })];
        }
      });
    });
  };
  SilentRefreshClient2.prototype.logout = function() {
    return Promise.reject(BrowserAuthError.createSilentLogoutUnsupportedError());
  };
  SilentRefreshClient2.prototype.createRefreshTokenClient = function(serverTelemetryManager, authorityUrl, azureCloudOptions) {
    return __awaiter(this, void 0, void 0, function() {
      var clientConfig;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.getClientConfiguration(serverTelemetryManager, authorityUrl, azureCloudOptions)];
          case 1:
            clientConfig = _a.sent();
            return [2, new RefreshTokenClient(clientConfig, this.performanceClient)];
        }
      });
    });
  };
  return SilentRefreshClient2;
}(StandardInteractionClient);

// node_modules/@azure/msal-browser/dist/event/EventHandler.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var EventHandler = function() {
  function EventHandler2(logger, browserCrypto) {
    this.eventCallbacks = new Map();
    this.logger = logger;
    this.browserCrypto = browserCrypto;
    this.listeningToStorageEvents = false;
    this.handleAccountCacheChange = this.handleAccountCacheChange.bind(this);
  }
  EventHandler2.prototype.addEventCallback = function(callback) {
    if (typeof window !== "undefined") {
      var callbackId = this.browserCrypto.createNewGuid();
      this.eventCallbacks.set(callbackId, callback);
      this.logger.verbose("Event callback registered with id: " + callbackId);
      return callbackId;
    }
    return null;
  };
  EventHandler2.prototype.removeEventCallback = function(callbackId) {
    this.eventCallbacks.delete(callbackId);
    this.logger.verbose("Event callback " + callbackId + " removed.");
  };
  EventHandler2.prototype.enableAccountStorageEvents = function() {
    if (typeof window === "undefined") {
      return;
    }
    if (!this.listeningToStorageEvents) {
      this.logger.verbose("Adding account storage listener.");
      this.listeningToStorageEvents = true;
      window.addEventListener("storage", this.handleAccountCacheChange);
    } else {
      this.logger.verbose("Account storage listener already registered.");
    }
  };
  EventHandler2.prototype.disableAccountStorageEvents = function() {
    if (typeof window === "undefined") {
      return;
    }
    if (this.listeningToStorageEvents) {
      this.logger.verbose("Removing account storage listener.");
      window.removeEventListener("storage", this.handleAccountCacheChange);
      this.listeningToStorageEvents = false;
    } else {
      this.logger.verbose("No account storage listener registered.");
    }
  };
  EventHandler2.prototype.emitEvent = function(eventType, interactionType, payload, error) {
    var _this = this;
    if (typeof window !== "undefined") {
      var message_1 = {
        eventType,
        interactionType: interactionType || null,
        payload: payload || null,
        error: error || null,
        timestamp: Date.now()
      };
      this.logger.info("Emitting event: " + eventType);
      this.eventCallbacks.forEach(function(callback, callbackId) {
        _this.logger.verbose("Emitting event to callback " + callbackId + ": " + eventType);
        callback.apply(null, [message_1]);
      });
    }
  };
  EventHandler2.prototype.handleAccountCacheChange = function(e) {
    try {
      var cacheValue = e.newValue || e.oldValue;
      if (!cacheValue) {
        return;
      }
      var parsedValue = JSON.parse(cacheValue);
      if (typeof parsedValue !== "object" || !AccountEntity.isAccountEntity(parsedValue)) {
        return;
      }
      var accountEntity = CacheManager.toObject(new AccountEntity(), parsedValue);
      var accountInfo = accountEntity.getAccountInfo();
      if (!e.oldValue && e.newValue) {
        this.logger.info("Account was added to cache in a different window");
        this.emitEvent(EventType.ACCOUNT_ADDED, void 0, accountInfo);
      } else if (!e.newValue && e.oldValue) {
        this.logger.info("Account was removed from cache in a different window");
        this.emitEvent(EventType.ACCOUNT_REMOVED, void 0, accountInfo);
      }
    } catch (e2) {
      return;
    }
  };
  return EventHandler2;
}();

// node_modules/@azure/msal-browser/dist/internals.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";

// node_modules/@azure/msal-browser/dist/utils/MathUtils.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var MathUtils = function() {
  function MathUtils2() {
  }
  MathUtils2.decimalToHex = function(num) {
    var hex = num.toString(16);
    while (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };
  return MathUtils2;
}();

// node_modules/@azure/msal-browser/dist/crypto/GuidGenerator.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var GuidGenerator = function() {
  function GuidGenerator2(cryptoObj) {
    this.cryptoObj = cryptoObj;
  }
  GuidGenerator2.prototype.generateGuid = function() {
    try {
      var buffer = new Uint8Array(16);
      this.cryptoObj.getRandomValues(buffer);
      buffer[6] |= 64;
      buffer[6] &= 79;
      buffer[8] |= 128;
      buffer[8] &= 191;
      return MathUtils.decimalToHex(buffer[0]) + MathUtils.decimalToHex(buffer[1]) + MathUtils.decimalToHex(buffer[2]) + MathUtils.decimalToHex(buffer[3]) + "-" + MathUtils.decimalToHex(buffer[4]) + MathUtils.decimalToHex(buffer[5]) + "-" + MathUtils.decimalToHex(buffer[6]) + MathUtils.decimalToHex(buffer[7]) + "-" + MathUtils.decimalToHex(buffer[8]) + MathUtils.decimalToHex(buffer[9]) + "-" + MathUtils.decimalToHex(buffer[10]) + MathUtils.decimalToHex(buffer[11]) + MathUtils.decimalToHex(buffer[12]) + MathUtils.decimalToHex(buffer[13]) + MathUtils.decimalToHex(buffer[14]) + MathUtils.decimalToHex(buffer[15]);
    } catch (err) {
      var guidHolder = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
      var hex = "0123456789abcdef";
      var r = 0;
      var guidResponse = Constants.EMPTY_STRING;
      for (var i = 0; i < 36; i++) {
        if (guidHolder[i] !== "-" && guidHolder[i] !== "4") {
          r = Math.random() * 16 | 0;
        }
        if (guidHolder[i] === "x") {
          guidResponse += hex[r];
        } else if (guidHolder[i] === "y") {
          r &= 3;
          r |= 8;
          guidResponse += hex[r];
        } else {
          guidResponse += guidHolder[i];
        }
      }
      return guidResponse;
    }
  };
  GuidGenerator2.prototype.isGuid = function(guid) {
    var regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return regexGuid.test(guid);
  };
  return GuidGenerator2;
}();

// node_modules/@azure/msal-browser/dist/utils/BrowserStringUtils.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var BrowserStringUtils = function() {
  function BrowserStringUtils2() {
  }
  BrowserStringUtils2.stringToUtf8Arr = function(sDOMStr) {
    var nChr;
    var nArrLen = 0;
    var nStrLen = sDOMStr.length;
    for (var nMapIdx = 0; nMapIdx < nStrLen; nMapIdx++) {
      nChr = sDOMStr.charCodeAt(nMapIdx);
      nArrLen += nChr < 128 ? 1 : nChr < 2048 ? 2 : nChr < 65536 ? 3 : nChr < 2097152 ? 4 : nChr < 67108864 ? 5 : 6;
    }
    var aBytes = new Uint8Array(nArrLen);
    for (var nIdx = 0, nChrIdx = 0; nIdx < nArrLen; nChrIdx++) {
      nChr = sDOMStr.charCodeAt(nChrIdx);
      if (nChr < 128) {
        aBytes[nIdx++] = nChr;
      } else if (nChr < 2048) {
        aBytes[nIdx++] = 192 + (nChr >>> 6);
        aBytes[nIdx++] = 128 + (nChr & 63);
      } else if (nChr < 65536) {
        aBytes[nIdx++] = 224 + (nChr >>> 12);
        aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
        aBytes[nIdx++] = 128 + (nChr & 63);
      } else if (nChr < 2097152) {
        aBytes[nIdx++] = 240 + (nChr >>> 18);
        aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
        aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
        aBytes[nIdx++] = 128 + (nChr & 63);
      } else if (nChr < 67108864) {
        aBytes[nIdx++] = 248 + (nChr >>> 24);
        aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
        aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
        aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
        aBytes[nIdx++] = 128 + (nChr & 63);
      } else {
        aBytes[nIdx++] = 252 + (nChr >>> 30);
        aBytes[nIdx++] = 128 + (nChr >>> 24 & 63);
        aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
        aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
        aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
        aBytes[nIdx++] = 128 + (nChr & 63);
      }
    }
    return aBytes;
  };
  BrowserStringUtils2.stringToArrayBuffer = function(dataString) {
    var data = new ArrayBuffer(dataString.length);
    var dataView = new Uint8Array(data);
    for (var i = 0; i < dataString.length; i++) {
      dataView[i] = dataString.charCodeAt(i);
    }
    return data;
  };
  BrowserStringUtils2.utf8ArrToString = function(aBytes) {
    var sView = Constants.EMPTY_STRING;
    for (var nPart = void 0, nLen = aBytes.length, nIdx = 0; nIdx < nLen; nIdx++) {
      nPart = aBytes[nIdx];
      sView += String.fromCharCode(nPart > 251 && nPart < 254 && nIdx + 5 < nLen ? (nPart - 252) * 1073741824 + (aBytes[++nIdx] - 128 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128 : nPart > 247 && nPart < 252 && nIdx + 4 < nLen ? (nPart - 248 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128 : nPart > 239 && nPart < 248 && nIdx + 3 < nLen ? (nPart - 240 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128 : nPart > 223 && nPart < 240 && nIdx + 2 < nLen ? (nPart - 224 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128 : nPart > 191 && nPart < 224 && nIdx + 1 < nLen ? (nPart - 192 << 6) + aBytes[++nIdx] - 128 : nPart);
    }
    return sView;
  };
  BrowserStringUtils2.getSortedObjectString = function(obj) {
    return JSON.stringify(obj, Object.keys(obj).sort());
  };
  return BrowserStringUtils2;
}();

// node_modules/@azure/msal-browser/dist/encode/Base64Encode.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var Base64Encode = function() {
  function Base64Encode2() {
  }
  Base64Encode2.prototype.urlEncode = function(input) {
    return encodeURIComponent(this.encode(input).replace(/=/g, Constants.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_"));
  };
  Base64Encode2.prototype.urlEncodeArr = function(inputArr) {
    return this.base64EncArr(inputArr).replace(/=/g, Constants.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_");
  };
  Base64Encode2.prototype.encode = function(input) {
    var inputUtf8Arr = BrowserStringUtils.stringToUtf8Arr(input);
    return this.base64EncArr(inputUtf8Arr);
  };
  Base64Encode2.prototype.base64EncArr = function(aBytes) {
    var eqLen = (3 - aBytes.length % 3) % 3;
    var sB64Enc = Constants.EMPTY_STRING;
    for (var nMod3 = void 0, nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
      nMod3 = nIdx % 3;
      nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
      if (nMod3 === 2 || aBytes.length - nIdx === 1) {
        sB64Enc += String.fromCharCode(this.uint6ToB64(nUint24 >>> 18 & 63), this.uint6ToB64(nUint24 >>> 12 & 63), this.uint6ToB64(nUint24 >>> 6 & 63), this.uint6ToB64(nUint24 & 63));
        nUint24 = 0;
      }
    }
    return eqLen === 0 ? sB64Enc : sB64Enc.substring(0, sB64Enc.length - eqLen) + (eqLen === 1 ? "=" : "==");
  };
  Base64Encode2.prototype.uint6ToB64 = function(nUint6) {
    return nUint6 < 26 ? nUint6 + 65 : nUint6 < 52 ? nUint6 + 71 : nUint6 < 62 ? nUint6 - 4 : nUint6 === 62 ? 43 : nUint6 === 63 ? 47 : 65;
  };
  return Base64Encode2;
}();

// node_modules/@azure/msal-browser/dist/encode/Base64Decode.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var Base64Decode = function() {
  function Base64Decode2() {
  }
  Base64Decode2.prototype.decode = function(input) {
    var encodedString = input.replace(/-/g, "+").replace(/_/g, "/");
    switch (encodedString.length % 4) {
      case 0:
        break;
      case 2:
        encodedString += "==";
        break;
      case 3:
        encodedString += "=";
        break;
      default:
        throw new Error("Invalid base64 string");
    }
    var inputUtf8Arr = this.base64DecToArr(encodedString);
    return BrowserStringUtils.utf8ArrToString(inputUtf8Arr);
  };
  Base64Decode2.prototype.base64DecToArr = function(base64String, nBlockSize) {
    var sB64Enc = base64String.replace(/[^A-Za-z0-9\+\/]/g, Constants.EMPTY_STRING);
    var nInLen = sB64Enc.length;
    var nOutLen = nBlockSize ? Math.ceil((nInLen * 3 + 1 >>> 2) / nBlockSize) * nBlockSize : nInLen * 3 + 1 >>> 2;
    var aBytes = new Uint8Array(nOutLen);
    for (var nMod3 = void 0, nMod4 = void 0, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
      nMod4 = nInIdx & 3;
      nUint24 |= this.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
      if (nMod4 === 3 || nInLen - nInIdx === 1) {
        for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
          aBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
        }
        nUint24 = 0;
      }
    }
    return aBytes;
  };
  Base64Decode2.prototype.b64ToUint6 = function(charNum) {
    return charNum > 64 && charNum < 91 ? charNum - 65 : charNum > 96 && charNum < 123 ? charNum - 71 : charNum > 47 && charNum < 58 ? charNum + 4 : charNum === 43 ? 62 : charNum === 47 ? 63 : 0;
  };
  return Base64Decode2;
}();

// node_modules/@azure/msal-browser/dist/crypto/PkceGenerator.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var RANDOM_BYTE_ARR_LENGTH = 32;
var PkceGenerator = function() {
  function PkceGenerator2(cryptoObj) {
    this.base64Encode = new Base64Encode();
    this.cryptoObj = cryptoObj;
  }
  PkceGenerator2.prototype.generateCodes = function() {
    return __awaiter(this, void 0, void 0, function() {
      var codeVerifier, codeChallenge;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            codeVerifier = this.generateCodeVerifier();
            return [4, this.generateCodeChallengeFromVerifier(codeVerifier)];
          case 1:
            codeChallenge = _a.sent();
            return [2, {
              verifier: codeVerifier,
              challenge: codeChallenge
            }];
        }
      });
    });
  };
  PkceGenerator2.prototype.generateCodeVerifier = function() {
    try {
      var buffer = new Uint8Array(RANDOM_BYTE_ARR_LENGTH);
      this.cryptoObj.getRandomValues(buffer);
      var pkceCodeVerifierB64 = this.base64Encode.urlEncodeArr(buffer);
      return pkceCodeVerifierB64;
    } catch (e) {
      throw BrowserAuthError.createPkceNotGeneratedError(e);
    }
  };
  PkceGenerator2.prototype.generateCodeChallengeFromVerifier = function(pkceCodeVerifier) {
    return __awaiter(this, void 0, void 0, function() {
      var pkceHashedCodeVerifier, e_1;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4, this.cryptoObj.sha256Digest(pkceCodeVerifier)];
          case 1:
            pkceHashedCodeVerifier = _a.sent();
            return [2, this.base64Encode.urlEncodeArr(new Uint8Array(pkceHashedCodeVerifier))];
          case 2:
            e_1 = _a.sent();
            throw BrowserAuthError.createPkceNotGeneratedError(e_1);
          case 3:
            return [2];
        }
      });
    });
  };
  return PkceGenerator2;
}();

// node_modules/@azure/msal-browser/dist/crypto/ModernBrowserCrypto.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var ModernBrowserCrypto = function() {
  function ModernBrowserCrypto2() {
  }
  ModernBrowserCrypto2.prototype.getRandomValues = function(dataBuffer) {
    return window.crypto.getRandomValues(dataBuffer);
  };
  ModernBrowserCrypto2.prototype.generateKey = function(algorithm, extractable, keyUsages) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, window.crypto.subtle.generateKey(algorithm, extractable, keyUsages)];
      });
    });
  };
  ModernBrowserCrypto2.prototype.exportKey = function(key) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, window.crypto.subtle.exportKey(KEY_FORMAT_JWK, key)];
      });
    });
  };
  ModernBrowserCrypto2.prototype.importKey = function(keyData, algorithm, extractable, keyUsages) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, window.crypto.subtle.importKey(KEY_FORMAT_JWK, keyData, algorithm, extractable, keyUsages)];
      });
    });
  };
  ModernBrowserCrypto2.prototype.sign = function(algorithm, key, data) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, window.crypto.subtle.sign(algorithm, key, data)];
      });
    });
  };
  ModernBrowserCrypto2.prototype.digest = function(algorithm, data) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, window.crypto.subtle.digest(algorithm, data)];
      });
    });
  };
  return ModernBrowserCrypto2;
}();

// node_modules/@azure/msal-browser/dist/crypto/MsrBrowserCrypto.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var MsrBrowserCrypto = function() {
  function MsrBrowserCrypto2() {
  }
  MsrBrowserCrypto2.prototype.initPrng = function(entropy) {
    return window.msrCrypto.initPrng(__spread(entropy));
  };
  MsrBrowserCrypto2.prototype.getRandomValues = function(dataBuffer) {
    return window.msrCrypto.getRandomValues(dataBuffer);
  };
  MsrBrowserCrypto2.prototype.generateKey = function(algorithm, extractable, keyUsages) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, window.msrCrypto.subtle.generateKey(algorithm, extractable, keyUsages)];
      });
    });
  };
  MsrBrowserCrypto2.prototype.exportKey = function(key) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, window.msrCrypto.subtle.exportKey(KEY_FORMAT_JWK, key)];
      });
    });
  };
  MsrBrowserCrypto2.prototype.importKey = function(keyData, algorithm, extractable, keyUsages) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, window.msrCrypto.subtle.importKey(KEY_FORMAT_JWK, keyData, algorithm, extractable, keyUsages)];
      });
    });
  };
  MsrBrowserCrypto2.prototype.sign = function(algorithm, key, data) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, window.msrCrypto.subtle.sign(algorithm, key, data)];
      });
    });
  };
  MsrBrowserCrypto2.prototype.digest = function(algorithm, data) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, window.msrCrypto.subtle.digest(algorithm, data)];
      });
    });
  };
  return MsrBrowserCrypto2;
}();

// node_modules/@azure/msal-browser/dist/crypto/MsBrowserCrypto.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var MsBrowserCrypto = function() {
  function MsBrowserCrypto2() {
  }
  MsBrowserCrypto2.prototype.getRandomValues = function(dataBuffer) {
    return window["msCrypto"].getRandomValues(dataBuffer);
  };
  MsBrowserCrypto2.prototype.generateKey = function(algorithm, extractable, keyUsages) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, new Promise(function(resolve, reject) {
          var msGenerateKey = window["msCrypto"].subtle.generateKey(algorithm, extractable, keyUsages);
          msGenerateKey.addEventListener("complete", function(e) {
            resolve(e.target.result);
          });
          msGenerateKey.addEventListener("error", function(error) {
            reject(error);
          });
        })];
      });
    });
  };
  MsBrowserCrypto2.prototype.exportKey = function(key) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, new Promise(function(resolve, reject) {
          var msExportKey = window["msCrypto"].subtle.exportKey(KEY_FORMAT_JWK, key);
          msExportKey.addEventListener("complete", function(e) {
            var resultBuffer = e.target.result;
            var resultString = BrowserStringUtils.utf8ArrToString(new Uint8Array(resultBuffer)).replace(/\r/g, Constants.EMPTY_STRING).replace(/\n/g, Constants.EMPTY_STRING).replace(/\t/g, Constants.EMPTY_STRING).split(" ").join(Constants.EMPTY_STRING).replace("\0", Constants.EMPTY_STRING);
            try {
              resolve(JSON.parse(resultString));
            } catch (e2) {
              reject(e2);
            }
          });
          msExportKey.addEventListener("error", function(error) {
            reject(error);
          });
        })];
      });
    });
  };
  MsBrowserCrypto2.prototype.importKey = function(keyData, algorithm, extractable, keyUsages) {
    return __awaiter(this, void 0, void 0, function() {
      var keyString, keyBuffer;
      return __generator(this, function(_a) {
        keyString = BrowserStringUtils.getSortedObjectString(keyData);
        keyBuffer = BrowserStringUtils.stringToArrayBuffer(keyString);
        return [2, new Promise(function(resolve, reject) {
          var msImportKey = window["msCrypto"].subtle.importKey(KEY_FORMAT_JWK, keyBuffer, algorithm, extractable, keyUsages);
          msImportKey.addEventListener("complete", function(e) {
            resolve(e.target.result);
          });
          msImportKey.addEventListener("error", function(error) {
            reject(error);
          });
        })];
      });
    });
  };
  MsBrowserCrypto2.prototype.sign = function(algorithm, key, data) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, new Promise(function(resolve, reject) {
          var msSign = window["msCrypto"].subtle.sign(algorithm, key, data);
          msSign.addEventListener("complete", function(e) {
            resolve(e.target.result);
          });
          msSign.addEventListener("error", function(error) {
            reject(error);
          });
        })];
      });
    });
  };
  MsBrowserCrypto2.prototype.digest = function(algorithm, data) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, new Promise(function(resolve, reject) {
          var digestOperation = window["msCrypto"].subtle.digest(algorithm, data.buffer);
          digestOperation.addEventListener("complete", function(e) {
            resolve(e.target.result);
          });
          digestOperation.addEventListener("error", function(error) {
            reject(error);
          });
        })];
      });
    });
  };
  return MsBrowserCrypto2;
}();

// node_modules/@azure/msal-browser/dist/crypto/BrowserCrypto.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var PKCS1_V15_KEYGEN_ALG = "RSASSA-PKCS1-v1_5";
var S256_HASH_ALG = "SHA-256";
var MODULUS_LENGTH = 2048;
var PUBLIC_EXPONENT = new Uint8Array([1, 0, 1]);
var BrowserCrypto = function() {
  function BrowserCrypto2(logger, cryptoOptions) {
    var _a, _b;
    this.logger = logger;
    this.cryptoOptions = cryptoOptions;
    if (this.hasBrowserCrypto()) {
      this.logger.verbose("BrowserCrypto: modern crypto interface available");
      this.subtleCrypto = new ModernBrowserCrypto();
    } else if (this.hasIECrypto()) {
      this.logger.verbose("BrowserCrypto: MS crypto interface available");
      this.subtleCrypto = new MsBrowserCrypto();
    } else if (this.hasMsrCrypto() && ((_a = this.cryptoOptions) === null || _a === void 0 ? void 0 : _a.useMsrCrypto)) {
      this.logger.verbose("BrowserCrypto: MSR crypto interface available");
      this.subtleCrypto = new MsrBrowserCrypto();
    } else {
      if (this.hasMsrCrypto()) {
        this.logger.info("BrowserCrypto: MSR Crypto interface available but system.cryptoOptions.useMsrCrypto not enabled");
      }
      this.logger.error("BrowserCrypto: No crypto interfaces available.");
      throw BrowserAuthError.createCryptoNotAvailableError("Browser crypto, msCrypto, or msrCrypto interfaces not available.");
    }
    if (this.subtleCrypto.initPrng) {
      this.logger.verbose("BrowserCrypto: Interface requires entropy");
      if (!((_b = this.cryptoOptions) === null || _b === void 0 ? void 0 : _b.entropy)) {
        this.logger.error("BrowserCrypto: Interface requires entropy but none provided.");
        throw BrowserConfigurationAuthError.createEntropyNotProvided();
      }
      this.logger.verbose("BrowserCrypto: Entropy provided");
      this.subtleCrypto.initPrng(this.cryptoOptions.entropy);
    }
    this.keygenAlgorithmOptions = {
      name: PKCS1_V15_KEYGEN_ALG,
      hash: S256_HASH_ALG,
      modulusLength: MODULUS_LENGTH,
      publicExponent: PUBLIC_EXPONENT
    };
  }
  BrowserCrypto2.prototype.hasIECrypto = function() {
    return "msCrypto" in window;
  };
  BrowserCrypto2.prototype.hasBrowserCrypto = function() {
    return "crypto" in window;
  };
  BrowserCrypto2.prototype.hasMsrCrypto = function() {
    return "msrCrypto" in window;
  };
  BrowserCrypto2.prototype.sha256Digest = function(dataString) {
    return __awaiter(this, void 0, void 0, function() {
      var data;
      return __generator(this, function(_a) {
        data = BrowserStringUtils.stringToUtf8Arr(dataString);
        return [2, this.subtleCrypto.digest({name: S256_HASH_ALG}, data)];
      });
    });
  };
  BrowserCrypto2.prototype.getRandomValues = function(dataBuffer) {
    return this.subtleCrypto.getRandomValues(dataBuffer);
  };
  BrowserCrypto2.prototype.generateKeyPair = function(extractable, usages) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, this.subtleCrypto.generateKey(this.keygenAlgorithmOptions, extractable, usages)];
      });
    });
  };
  BrowserCrypto2.prototype.exportJwk = function(key) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, this.subtleCrypto.exportKey(key)];
      });
    });
  };
  BrowserCrypto2.prototype.importJwk = function(key, extractable, usages) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, this.subtleCrypto.importKey(key, this.keygenAlgorithmOptions, extractable, usages)];
      });
    });
  };
  BrowserCrypto2.prototype.sign = function(key, data) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, this.subtleCrypto.sign(this.keygenAlgorithmOptions, key, data)];
      });
    });
  };
  return BrowserCrypto2;
}();

// node_modules/@azure/msal-browser/dist/cache/DatabaseStorage.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var DatabaseStorage = function() {
  function DatabaseStorage2() {
    this.dbName = DB_NAME;
    this.version = DB_VERSION;
    this.tableName = DB_TABLE_NAME;
    this.dbOpen = false;
  }
  DatabaseStorage2.prototype.open = function() {
    return __awaiter(this, void 0, void 0, function() {
      var _this = this;
      return __generator(this, function(_a) {
        return [2, new Promise(function(resolve, reject) {
          var openDB = window.indexedDB.open(_this.dbName, _this.version);
          openDB.addEventListener("upgradeneeded", function(e) {
            var event = e;
            event.target.result.createObjectStore(_this.tableName);
          });
          openDB.addEventListener("success", function(e) {
            var event = e;
            _this.db = event.target.result;
            _this.dbOpen = true;
            resolve();
          });
          openDB.addEventListener("error", function() {
            return reject(BrowserAuthError.createDatabaseUnavailableError());
          });
        })];
      });
    });
  };
  DatabaseStorage2.prototype.closeConnection = function() {
    var db = this.db;
    if (db && this.dbOpen) {
      db.close();
      this.dbOpen = false;
    }
  };
  DatabaseStorage2.prototype.validateDbIsOpen = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!!this.dbOpen)
              return [3, 2];
            return [4, this.open()];
          case 1:
            return [2, _a.sent()];
          case 2:
            return [2];
        }
      });
    });
  };
  DatabaseStorage2.prototype.getItem = function(key) {
    return __awaiter(this, void 0, void 0, function() {
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.validateDbIsOpen()];
          case 1:
            _a.sent();
            return [2, new Promise(function(resolve, reject) {
              if (!_this.db) {
                return reject(BrowserAuthError.createDatabaseNotOpenError());
              }
              var transaction = _this.db.transaction([_this.tableName], "readonly");
              var objectStore = transaction.objectStore(_this.tableName);
              var dbGet = objectStore.get(key);
              dbGet.addEventListener("success", function(e) {
                var event = e;
                _this.closeConnection();
                resolve(event.target.result);
              });
              dbGet.addEventListener("error", function(e) {
                _this.closeConnection();
                reject(e);
              });
            })];
        }
      });
    });
  };
  DatabaseStorage2.prototype.setItem = function(key, payload) {
    return __awaiter(this, void 0, void 0, function() {
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.validateDbIsOpen()];
          case 1:
            _a.sent();
            return [2, new Promise(function(resolve, reject) {
              if (!_this.db) {
                return reject(BrowserAuthError.createDatabaseNotOpenError());
              }
              var transaction = _this.db.transaction([_this.tableName], "readwrite");
              var objectStore = transaction.objectStore(_this.tableName);
              var dbPut = objectStore.put(payload, key);
              dbPut.addEventListener("success", function() {
                _this.closeConnection();
                resolve();
              });
              dbPut.addEventListener("error", function(e) {
                _this.closeConnection();
                reject(e);
              });
            })];
        }
      });
    });
  };
  DatabaseStorage2.prototype.removeItem = function(key) {
    return __awaiter(this, void 0, void 0, function() {
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.validateDbIsOpen()];
          case 1:
            _a.sent();
            return [2, new Promise(function(resolve, reject) {
              if (!_this.db) {
                return reject(BrowserAuthError.createDatabaseNotOpenError());
              }
              var transaction = _this.db.transaction([_this.tableName], "readwrite");
              var objectStore = transaction.objectStore(_this.tableName);
              var dbDelete = objectStore.delete(key);
              dbDelete.addEventListener("success", function() {
                _this.closeConnection();
                resolve();
              });
              dbDelete.addEventListener("error", function(e) {
                _this.closeConnection();
                reject(e);
              });
            })];
        }
      });
    });
  };
  DatabaseStorage2.prototype.getKeys = function() {
    return __awaiter(this, void 0, void 0, function() {
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.validateDbIsOpen()];
          case 1:
            _a.sent();
            return [2, new Promise(function(resolve, reject) {
              if (!_this.db) {
                return reject(BrowserAuthError.createDatabaseNotOpenError());
              }
              var transaction = _this.db.transaction([_this.tableName], "readonly");
              var objectStore = transaction.objectStore(_this.tableName);
              var dbGetKeys = objectStore.getAllKeys();
              dbGetKeys.addEventListener("success", function(e) {
                var event = e;
                _this.closeConnection();
                resolve(event.target.result);
              });
              dbGetKeys.addEventListener("error", function(e) {
                _this.closeConnection();
                reject(e);
              });
            })];
        }
      });
    });
  };
  DatabaseStorage2.prototype.containsKey = function(key) {
    return __awaiter(this, void 0, void 0, function() {
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.validateDbIsOpen()];
          case 1:
            _a.sent();
            return [2, new Promise(function(resolve, reject) {
              if (!_this.db) {
                return reject(BrowserAuthError.createDatabaseNotOpenError());
              }
              var transaction = _this.db.transaction([_this.tableName], "readonly");
              var objectStore = transaction.objectStore(_this.tableName);
              var dbContainsKey = objectStore.count(key);
              dbContainsKey.addEventListener("success", function(e) {
                var event = e;
                _this.closeConnection();
                resolve(event.target.result === 1);
              });
              dbContainsKey.addEventListener("error", function(e) {
                _this.closeConnection();
                reject(e);
              });
            })];
        }
      });
    });
  };
  DatabaseStorage2.prototype.deleteDatabase = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        if (this.db && this.dbOpen) {
          this.closeConnection();
        }
        return [2, new Promise(function(resolve, reject) {
          var deleteDbRequest = window.indexedDB.deleteDatabase(DB_NAME);
          deleteDbRequest.addEventListener("success", function() {
            return resolve(true);
          });
          deleteDbRequest.addEventListener("blocked", function() {
            return resolve(true);
          });
          deleteDbRequest.addEventListener("error", function() {
            return reject(false);
          });
        })];
      });
    });
  };
  return DatabaseStorage2;
}();

// node_modules/@azure/msal-browser/dist/cache/AsyncMemoryStorage.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var AsyncMemoryStorage = function() {
  function AsyncMemoryStorage2(logger, storeName) {
    this.inMemoryCache = new MemoryStorage();
    this.indexedDBCache = new DatabaseStorage();
    this.logger = logger;
    this.storeName = storeName;
  }
  AsyncMemoryStorage2.prototype.handleDatabaseAccessError = function(error) {
    if (error instanceof BrowserAuthError && error.errorCode === BrowserAuthErrorMessage.databaseUnavailable.code) {
      this.logger.error("Could not access persistent storage. This may be caused by browser privacy features which block persistent storage in third-party contexts.");
    } else {
      throw error;
    }
  };
  AsyncMemoryStorage2.prototype.getItem = function(key) {
    return __awaiter(this, void 0, void 0, function() {
      var item, e_1;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            item = this.inMemoryCache.getItem(key);
            if (!!item)
              return [3, 4];
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            this.logger.verbose("Queried item not found in in-memory cache, now querying persistent storage.");
            return [4, this.indexedDBCache.getItem(key)];
          case 2:
            return [2, _a.sent()];
          case 3:
            e_1 = _a.sent();
            this.handleDatabaseAccessError(e_1);
            return [3, 4];
          case 4:
            return [2, item];
        }
      });
    });
  };
  AsyncMemoryStorage2.prototype.setItem = function(key, value) {
    return __awaiter(this, void 0, void 0, function() {
      var e_2;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.inMemoryCache.setItem(key, value);
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            return [4, this.indexedDBCache.setItem(key, value)];
          case 2:
            _a.sent();
            return [3, 4];
          case 3:
            e_2 = _a.sent();
            this.handleDatabaseAccessError(e_2);
            return [3, 4];
          case 4:
            return [2];
        }
      });
    });
  };
  AsyncMemoryStorage2.prototype.removeItem = function(key) {
    return __awaiter(this, void 0, void 0, function() {
      var e_3;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.inMemoryCache.removeItem(key);
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            return [4, this.indexedDBCache.removeItem(key)];
          case 2:
            _a.sent();
            return [3, 4];
          case 3:
            e_3 = _a.sent();
            this.handleDatabaseAccessError(e_3);
            return [3, 4];
          case 4:
            return [2];
        }
      });
    });
  };
  AsyncMemoryStorage2.prototype.getKeys = function() {
    return __awaiter(this, void 0, void 0, function() {
      var cacheKeys, e_4;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            cacheKeys = this.inMemoryCache.getKeys();
            if (!(cacheKeys.length === 0))
              return [3, 4];
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            this.logger.verbose("In-memory cache is empty, now querying persistent storage.");
            return [4, this.indexedDBCache.getKeys()];
          case 2:
            return [2, _a.sent()];
          case 3:
            e_4 = _a.sent();
            this.handleDatabaseAccessError(e_4);
            return [3, 4];
          case 4:
            return [2, cacheKeys];
        }
      });
    });
  };
  AsyncMemoryStorage2.prototype.containsKey = function(key) {
    return __awaiter(this, void 0, void 0, function() {
      var containsKey, e_5;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            containsKey = this.inMemoryCache.containsKey(key);
            if (!!containsKey)
              return [3, 4];
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            this.logger.verbose("Key not found in in-memory cache, now querying persistent storage.");
            return [4, this.indexedDBCache.containsKey(key)];
          case 2:
            return [2, _a.sent()];
          case 3:
            e_5 = _a.sent();
            this.handleDatabaseAccessError(e_5);
            return [3, 4];
          case 4:
            return [2, containsKey];
        }
      });
    });
  };
  AsyncMemoryStorage2.prototype.clearInMemory = function() {
    this.logger.verbose("Deleting in-memory keystore " + this.storeName);
    this.inMemoryCache.clear();
    this.logger.verbose("In-memory keystore " + this.storeName + " deleted");
  };
  AsyncMemoryStorage2.prototype.clearPersistent = function() {
    return __awaiter(this, void 0, void 0, function() {
      var dbDeleted, e_6;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            this.logger.verbose("Deleting persistent keystore");
            return [4, this.indexedDBCache.deleteDatabase()];
          case 1:
            dbDeleted = _a.sent();
            if (dbDeleted) {
              this.logger.verbose("Persistent keystore deleted");
            }
            return [2, dbDeleted];
          case 2:
            e_6 = _a.sent();
            this.handleDatabaseAccessError(e_6);
            return [2, false];
          case 3:
            return [2];
        }
      });
    });
  };
  return AsyncMemoryStorage2;
}();

// node_modules/@azure/msal-browser/dist/cache/CryptoKeyStore.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var CryptoKeyStoreNames;
(function(CryptoKeyStoreNames2) {
  CryptoKeyStoreNames2["asymmetricKeys"] = "asymmetricKeys";
  CryptoKeyStoreNames2["symmetricKeys"] = "symmetricKeys";
})(CryptoKeyStoreNames || (CryptoKeyStoreNames = {}));
var CryptoKeyStore = function() {
  function CryptoKeyStore2(logger) {
    this.logger = logger;
    this.asymmetricKeys = new AsyncMemoryStorage(this.logger, CryptoKeyStoreNames.asymmetricKeys);
    this.symmetricKeys = new AsyncMemoryStorage(this.logger, CryptoKeyStoreNames.symmetricKeys);
  }
  CryptoKeyStore2.prototype.clear = function() {
    return __awaiter(this, void 0, void 0, function() {
      var e_1;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.asymmetricKeys.clearInMemory();
            this.symmetricKeys.clearInMemory();
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            return [4, this.asymmetricKeys.clearPersistent()];
          case 2:
            _a.sent();
            return [2, true];
          case 3:
            e_1 = _a.sent();
            if (e_1 instanceof Error) {
              this.logger.error("Clearing keystore failed with error: " + e_1.message);
            } else {
              this.logger.error("Clearing keystore failed with unknown error");
            }
            return [2, false];
          case 4:
            return [2];
        }
      });
    });
  };
  return CryptoKeyStore2;
}();

// node_modules/@azure/msal-browser/dist/crypto/CryptoOps.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var CryptoOps = function() {
  function CryptoOps2(logger, performanceClient, cryptoConfig) {
    this.logger = logger;
    this.browserCrypto = new BrowserCrypto(this.logger, cryptoConfig);
    this.b64Encode = new Base64Encode();
    this.b64Decode = new Base64Decode();
    this.guidGenerator = new GuidGenerator(this.browserCrypto);
    this.pkceGenerator = new PkceGenerator(this.browserCrypto);
    this.cache = new CryptoKeyStore(this.logger);
    this.performanceClient = performanceClient;
  }
  CryptoOps2.prototype.createNewGuid = function() {
    return this.guidGenerator.generateGuid();
  };
  CryptoOps2.prototype.base64Encode = function(input) {
    return this.b64Encode.encode(input);
  };
  CryptoOps2.prototype.base64Decode = function(input) {
    return this.b64Decode.decode(input);
  };
  CryptoOps2.prototype.generatePkceCodes = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, this.pkceGenerator.generateCodes()];
      });
    });
  };
  CryptoOps2.prototype.getPublicKeyThumbprint = function(request) {
    var _a;
    return __awaiter(this, void 0, void 0, function() {
      var publicKeyThumbMeasurement, keyPair, publicKeyJwk, pubKeyThumprintObj, publicJwkString, publicJwkHash, privateKeyJwk, unextractablePrivateKey;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            publicKeyThumbMeasurement = (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.startMeasurement(PerformanceEvents.CryptoOptsGetPublicKeyThumbprint, request.correlationId);
            return [4, this.browserCrypto.generateKeyPair(CryptoOps2.EXTRACTABLE, CryptoOps2.POP_KEY_USAGES)];
          case 1:
            keyPair = _b.sent();
            return [4, this.browserCrypto.exportJwk(keyPair.publicKey)];
          case 2:
            publicKeyJwk = _b.sent();
            pubKeyThumprintObj = {
              e: publicKeyJwk.e,
              kty: publicKeyJwk.kty,
              n: publicKeyJwk.n
            };
            publicJwkString = BrowserStringUtils.getSortedObjectString(pubKeyThumprintObj);
            return [4, this.hashString(publicJwkString)];
          case 3:
            publicJwkHash = _b.sent();
            return [4, this.browserCrypto.exportJwk(keyPair.privateKey)];
          case 4:
            privateKeyJwk = _b.sent();
            return [4, this.browserCrypto.importJwk(privateKeyJwk, false, ["sign"])];
          case 5:
            unextractablePrivateKey = _b.sent();
            return [4, this.cache.asymmetricKeys.setItem(publicJwkHash, {
              privateKey: unextractablePrivateKey,
              publicKey: keyPair.publicKey,
              requestMethod: request.resourceRequestMethod,
              requestUri: request.resourceRequestUri
            })];
          case 6:
            _b.sent();
            if (publicKeyThumbMeasurement) {
              publicKeyThumbMeasurement.endMeasurement({
                success: true
              });
            }
            return [2, publicJwkHash];
        }
      });
    });
  };
  CryptoOps2.prototype.removeTokenBindingKey = function(kid) {
    return __awaiter(this, void 0, void 0, function() {
      var keyFound;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.cache.asymmetricKeys.removeItem(kid)];
          case 1:
            _a.sent();
            return [4, this.cache.asymmetricKeys.containsKey(kid)];
          case 2:
            keyFound = _a.sent();
            return [2, !keyFound];
        }
      });
    });
  };
  CryptoOps2.prototype.clearKeystore = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.cache.clear()];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  CryptoOps2.prototype.signJwt = function(payload, kid, correlationId) {
    var _a;
    return __awaiter(this, void 0, void 0, function() {
      var signJwtMeasurement, cachedKeyPair, publicKeyJwk, publicKeyJwkString, encodedKeyIdThumbprint, shrHeader, encodedShrHeader, encodedPayload, tokenString, tokenBuffer, signatureBuffer, encodedSignature, signedJwt;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            signJwtMeasurement = (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.startMeasurement(PerformanceEvents.CryptoOptsSignJwt, correlationId);
            return [4, this.cache.asymmetricKeys.getItem(kid)];
          case 1:
            cachedKeyPair = _b.sent();
            if (!cachedKeyPair) {
              throw BrowserAuthError.createSigningKeyNotFoundInStorageError(kid);
            }
            return [4, this.browserCrypto.exportJwk(cachedKeyPair.publicKey)];
          case 2:
            publicKeyJwk = _b.sent();
            publicKeyJwkString = BrowserStringUtils.getSortedObjectString(publicKeyJwk);
            encodedKeyIdThumbprint = this.b64Encode.urlEncode(JSON.stringify({kid}));
            shrHeader = JoseHeader.getShrHeaderString({kid: encodedKeyIdThumbprint, alg: publicKeyJwk.alg});
            encodedShrHeader = this.b64Encode.urlEncode(shrHeader);
            payload.cnf = {
              jwk: JSON.parse(publicKeyJwkString)
            };
            encodedPayload = this.b64Encode.urlEncode(JSON.stringify(payload));
            tokenString = encodedShrHeader + "." + encodedPayload;
            tokenBuffer = BrowserStringUtils.stringToArrayBuffer(tokenString);
            return [4, this.browserCrypto.sign(cachedKeyPair.privateKey, tokenBuffer)];
          case 3:
            signatureBuffer = _b.sent();
            encodedSignature = this.b64Encode.urlEncodeArr(new Uint8Array(signatureBuffer));
            signedJwt = tokenString + "." + encodedSignature;
            if (signJwtMeasurement) {
              signJwtMeasurement.endMeasurement({
                success: true
              });
            }
            return [2, signedJwt];
        }
      });
    });
  };
  CryptoOps2.prototype.hashString = function(plainText) {
    return __awaiter(this, void 0, void 0, function() {
      var hashBuffer, hashBytes;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.browserCrypto.sha256Digest(plainText)];
          case 1:
            hashBuffer = _a.sent();
            hashBytes = new Uint8Array(hashBuffer);
            return [2, this.b64Encode.urlEncodeArr(hashBytes)];
        }
      });
    });
  };
  CryptoOps2.POP_KEY_USAGES = ["sign", "verify"];
  CryptoOps2.EXTRACTABLE = true;
  return CryptoOps2;
}();

// node_modules/@azure/msal-browser/dist/cache/TokenCache.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var TokenCache = function() {
  function TokenCache2(configuration, storage, logger, cryptoObj) {
    this.isBrowserEnvironment = typeof window !== "undefined";
    this.config = configuration;
    this.storage = storage;
    this.logger = logger;
    this.cryptoObj = cryptoObj;
  }
  TokenCache2.prototype.loadExternalTokens = function(request, response, options) {
    this.logger.info("TokenCache - loadExternalTokens called");
    if (!response.id_token) {
      throw BrowserAuthError.createUnableToLoadTokenError("Please ensure server response includes id token.");
    }
    var idToken = new AuthToken(response.id_token, this.cryptoObj);
    var cacheRecord;
    var authority;
    if (request.account) {
      var cacheRecordAccount = this.loadAccount(idToken, request.account.environment, void 0, void 0, request.account.homeAccountId);
      cacheRecord = new CacheRecord(cacheRecordAccount, this.loadIdToken(idToken, cacheRecordAccount.homeAccountId, request.account.environment, request.account.tenantId), this.loadAccessToken(request, response, cacheRecordAccount.homeAccountId, request.account.environment, request.account.tenantId, options), this.loadRefreshToken(request, response, cacheRecordAccount.homeAccountId, request.account.environment));
    } else if (request.authority) {
      var authorityUrl = Authority.generateAuthority(request.authority, request.azureCloudOptions);
      var authorityOptions = {
        protocolMode: this.config.auth.protocolMode,
        knownAuthorities: this.config.auth.knownAuthorities,
        cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
        authorityMetadata: this.config.auth.authorityMetadata,
        skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
      };
      authority = new Authority(authorityUrl, this.config.system.networkClient, this.storage, authorityOptions, this.logger);
      if (options.clientInfo) {
        this.logger.trace("TokenCache - homeAccountId from options");
        var cacheRecordAccount = this.loadAccount(idToken, authority.hostnameAndPort, options.clientInfo, authority.authorityType);
        cacheRecord = new CacheRecord(cacheRecordAccount, this.loadIdToken(idToken, cacheRecordAccount.homeAccountId, authority.hostnameAndPort, authority.tenant), this.loadAccessToken(request, response, cacheRecordAccount.homeAccountId, authority.hostnameAndPort, authority.tenant, options), this.loadRefreshToken(request, response, cacheRecordAccount.homeAccountId, authority.hostnameAndPort));
      } else if (response.client_info) {
        this.logger.trace("TokenCache - homeAccountId from response");
        var cacheRecordAccount = this.loadAccount(idToken, authority.hostnameAndPort, response.client_info, authority.authorityType);
        cacheRecord = new CacheRecord(cacheRecordAccount, this.loadIdToken(idToken, cacheRecordAccount.homeAccountId, authority.hostnameAndPort, authority.tenant), this.loadAccessToken(request, response, cacheRecordAccount.homeAccountId, authority.hostnameAndPort, authority.tenant, options), this.loadRefreshToken(request, response, cacheRecordAccount.homeAccountId, authority.hostnameAndPort));
      } else {
        throw BrowserAuthError.createUnableToLoadTokenError("Please provide clientInfo in the response or options.");
      }
    } else {
      throw BrowserAuthError.createUnableToLoadTokenError("Please provide a request with an account or a request with authority.");
    }
    return this.generateAuthenticationResult(request, idToken, cacheRecord, authority);
  };
  TokenCache2.prototype.loadAccount = function(idToken, environment, clientInfo, authorityType, requestHomeAccountId) {
    var homeAccountId;
    if (requestHomeAccountId) {
      homeAccountId = requestHomeAccountId;
    } else if (authorityType !== void 0 && clientInfo) {
      homeAccountId = AccountEntity.generateHomeAccountId(clientInfo, authorityType, this.logger, this.cryptoObj, idToken);
    }
    if (!homeAccountId) {
      throw BrowserAuthError.createUnableToLoadTokenError("Unexpected missing homeAccountId");
    }
    var accountEntity = clientInfo ? AccountEntity.createAccount(clientInfo, homeAccountId, idToken, void 0, void 0, void 0, environment) : AccountEntity.createGenericAccount(homeAccountId, idToken, void 0, void 0, void 0, environment);
    if (this.isBrowserEnvironment) {
      this.logger.verbose("TokenCache - loading account");
      this.storage.setAccount(accountEntity);
      return accountEntity;
    } else {
      throw BrowserAuthError.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }
  };
  TokenCache2.prototype.loadIdToken = function(idToken, homeAccountId, environment, tenantId) {
    var idTokenEntity = IdTokenEntity.createIdTokenEntity(homeAccountId, environment, idToken.rawToken, this.config.auth.clientId, tenantId);
    if (this.isBrowserEnvironment) {
      this.logger.verbose("TokenCache - loading id token");
      this.storage.setIdTokenCredential(idTokenEntity);
      return idTokenEntity;
    } else {
      throw BrowserAuthError.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }
  };
  TokenCache2.prototype.loadAccessToken = function(request, response, homeAccountId, environment, tenantId, options) {
    if (!response.access_token) {
      this.logger.verbose("TokenCache - No access token provided for caching");
      return null;
    }
    if (!response.expires_in) {
      throw BrowserAuthError.createUnableToLoadTokenError("Please ensure server response includes expires_in value.");
    }
    if (!options.extendedExpiresOn) {
      throw BrowserAuthError.createUnableToLoadTokenError("Please provide an extendedExpiresOn value in the options.");
    }
    var scopes = new ScopeSet(request.scopes).printScopes();
    var expiresOn = options.expiresOn || response.expires_in + new Date().getTime() / 1e3;
    var extendedExpiresOn = options.extendedExpiresOn;
    var accessTokenEntity = AccessTokenEntity.createAccessTokenEntity(homeAccountId, environment, response.access_token, this.config.auth.clientId, tenantId, scopes, expiresOn, extendedExpiresOn, this.cryptoObj);
    if (this.isBrowserEnvironment) {
      this.logger.verbose("TokenCache - loading access token");
      this.storage.setAccessTokenCredential(accessTokenEntity);
      return accessTokenEntity;
    } else {
      throw BrowserAuthError.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }
  };
  TokenCache2.prototype.loadRefreshToken = function(request, response, homeAccountId, environment) {
    if (!response.refresh_token) {
      this.logger.verbose("TokenCache - No refresh token provided for caching");
      return null;
    }
    var refreshTokenEntity = RefreshTokenEntity.createRefreshTokenEntity(homeAccountId, environment, response.refresh_token, this.config.auth.clientId);
    if (this.isBrowserEnvironment) {
      this.logger.verbose("TokenCache - loading refresh token");
      this.storage.setRefreshTokenCredential(refreshTokenEntity);
      return refreshTokenEntity;
    } else {
      throw BrowserAuthError.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }
  };
  TokenCache2.prototype.generateAuthenticationResult = function(request, idTokenObj, cacheRecord, authority) {
    var _a, _b, _c;
    var accessToken = Constants.EMPTY_STRING;
    var responseScopes = [];
    var expiresOn = null;
    var extExpiresOn;
    if (cacheRecord === null || cacheRecord === void 0 ? void 0 : cacheRecord.accessToken) {
      accessToken = cacheRecord.accessToken.secret;
      responseScopes = ScopeSet.fromString(cacheRecord.accessToken.target).asArray();
      expiresOn = new Date(Number(cacheRecord.accessToken.expiresOn) * 1e3);
      extExpiresOn = new Date(Number(cacheRecord.accessToken.extendedExpiresOn) * 1e3);
    }
    var uid = (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.oid) || (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.sub) || Constants.EMPTY_STRING;
    var tid = (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.tid) || Constants.EMPTY_STRING;
    return {
      authority: authority ? authority.canonicalAuthority : Constants.EMPTY_STRING,
      uniqueId: uid,
      tenantId: tid,
      scopes: responseScopes,
      account: (cacheRecord === null || cacheRecord === void 0 ? void 0 : cacheRecord.account) ? cacheRecord.account.getAccountInfo() : null,
      idToken: idTokenObj ? idTokenObj.rawToken : Constants.EMPTY_STRING,
      idTokenClaims: idTokenObj ? idTokenObj.claims : {},
      accessToken,
      fromCache: true,
      expiresOn,
      correlationId: request.correlationId || Constants.EMPTY_STRING,
      requestId: Constants.EMPTY_STRING,
      extExpiresOn,
      familyId: Constants.EMPTY_STRING,
      tokenType: ((_a = cacheRecord === null || cacheRecord === void 0 ? void 0 : cacheRecord.accessToken) === null || _a === void 0 ? void 0 : _a.tokenType) || Constants.EMPTY_STRING,
      state: Constants.EMPTY_STRING,
      cloudGraphHostName: ((_b = cacheRecord === null || cacheRecord === void 0 ? void 0 : cacheRecord.account) === null || _b === void 0 ? void 0 : _b.cloudGraphHostName) || Constants.EMPTY_STRING,
      msGraphHost: ((_c = cacheRecord === null || cacheRecord === void 0 ? void 0 : cacheRecord.account) === null || _c === void 0 ? void 0 : _c.msGraphHost) || Constants.EMPTY_STRING,
      code: void 0,
      fromNativeBroker: false
    };
  };
  return TokenCache2;
}();

// node_modules/@azure/msal-browser/dist/interaction_client/HybridSpaAuthorizationCodeClient.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var HybridSpaAuthorizationCodeClient = function(_super) {
  __extends(HybridSpaAuthorizationCodeClient2, _super);
  function HybridSpaAuthorizationCodeClient2(config) {
    var _this = _super.call(this, config) || this;
    _this.includeRedirectUri = false;
    return _this;
  }
  return HybridSpaAuthorizationCodeClient2;
}(AuthorizationCodeClient);

// node_modules/@azure/msal-browser/dist/interaction_client/SilentAuthCodeClient.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var SilentAuthCodeClient = function(_super) {
  __extends(SilentAuthCodeClient2, _super);
  function SilentAuthCodeClient2(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, nativeMessageHandler, correlationId) {
    var _this = _super.call(this, config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId) || this;
    _this.apiId = apiId;
    return _this;
  }
  SilentAuthCodeClient2.prototype.acquireToken = function(request) {
    return __awaiter(this, void 0, void 0, function() {
      var silentRequest, serverTelemetryManager, authCodeRequest, clientConfig, authClient, silentHandler, e_1;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.logger.trace("SilentAuthCodeClient.acquireToken called");
            if (!request.code) {
              throw BrowserAuthError.createAuthCodeRequiredError();
            }
            return [4, this.initializeAuthorizationRequest(request, InteractionType.Silent)];
          case 1:
            silentRequest = _a.sent();
            this.browserStorage.updateCacheEntries(silentRequest.state, silentRequest.nonce, silentRequest.authority, silentRequest.loginHint || Constants.EMPTY_STRING, silentRequest.account || null);
            serverTelemetryManager = this.initializeServerTelemetryManager(this.apiId);
            _a.label = 2;
          case 2:
            _a.trys.push([2, 4, , 5]);
            authCodeRequest = __assign(__assign({}, silentRequest), {code: request.code});
            return [4, this.getClientConfiguration(serverTelemetryManager, silentRequest.authority)];
          case 3:
            clientConfig = _a.sent();
            authClient = new HybridSpaAuthorizationCodeClient(clientConfig);
            this.logger.verbose("Auth code client created");
            silentHandler = new SilentHandler(authClient, this.browserStorage, authCodeRequest, this.logger, this.config.system);
            return [2, silentHandler.handleCodeResponseFromServer({
              code: request.code,
              msgraph_host: request.msGraphHost,
              cloud_graph_host_name: request.cloudGraphHostName,
              cloud_instance_host_name: request.cloudInstanceHostName
            }, silentRequest.state, authClient.authority, this.networkClient, false)];
          case 4:
            e_1 = _a.sent();
            if (e_1 instanceof AuthError) {
              e_1.setCorrelationId(this.correlationId);
            }
            serverTelemetryManager.cacheFailedRequest(e_1);
            this.browserStorage.cleanRequestByState(silentRequest.state);
            throw e_1;
          case 5:
            return [2];
        }
      });
    });
  };
  SilentAuthCodeClient2.prototype.logout = function() {
    return Promise.reject(BrowserAuthError.createSilentLogoutUnsupportedError());
  };
  return SilentAuthCodeClient2;
}(StandardInteractionClient);

// node_modules/@azure/msal-browser/dist/telemetry/BrowserPerformanceMeasurement.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var BrowserPerformanceMeasurement = function() {
  function BrowserPerformanceMeasurement2(name3, correlationId) {
    this.correlationId = correlationId;
    this.measureName = "msal.measure." + name3 + "." + this.correlationId;
    this.startMark = "msal.start." + name3 + "." + this.correlationId;
    this.endMark = "msal.end." + name3 + "." + this.correlationId;
  }
  BrowserPerformanceMeasurement2.supportsBrowserPerformance = function() {
    return typeof window !== "undefined" && typeof window.performance !== "undefined" && typeof window.performance.mark === "function" && typeof window.performance.measure === "function" && typeof window.performance.clearMarks === "function" && typeof window.performance.clearMeasures === "function" && typeof window.performance.getEntriesByName === "function";
  };
  BrowserPerformanceMeasurement2.prototype.startMeasurement = function() {
    if (BrowserPerformanceMeasurement2.supportsBrowserPerformance()) {
      try {
        window.performance.mark(this.startMark);
      } catch (e) {
      }
    }
  };
  BrowserPerformanceMeasurement2.prototype.endMeasurement = function() {
    if (BrowserPerformanceMeasurement2.supportsBrowserPerformance()) {
      try {
        window.performance.mark(this.endMark);
        window.performance.measure(this.measureName, this.startMark, this.endMark);
      } catch (e) {
      }
    }
  };
  BrowserPerformanceMeasurement2.prototype.flushMeasurement = function() {
    if (BrowserPerformanceMeasurement2.supportsBrowserPerformance()) {
      try {
        var entriesForMeasurement = window.performance.getEntriesByName(this.measureName, "measure");
        if (entriesForMeasurement.length > 0) {
          var durationMs = entriesForMeasurement[0].duration;
          window.performance.clearMeasures(this.measureName);
          window.performance.clearMarks(this.startMark);
          window.performance.clearMarks(this.endMark);
          return durationMs;
        }
      } catch (e) {
      }
    }
    return null;
  };
  return BrowserPerformanceMeasurement2;
}();

// node_modules/@azure/msal-browser/dist/telemetry/BrowserPerformanceClient.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var BrowserPerformanceClient = function(_super) {
  __extends(BrowserPerformanceClient2, _super);
  function BrowserPerformanceClient2(clientId, authority, logger, libraryName, libraryVersion, applicationTelemetry, cryptoOptions) {
    var _this = _super.call(this, clientId, authority, logger, libraryName, libraryVersion, applicationTelemetry) || this;
    _this.browserCrypto = new BrowserCrypto(_this.logger, cryptoOptions);
    _this.guidGenerator = new GuidGenerator(_this.browserCrypto);
    return _this;
  }
  BrowserPerformanceClient2.prototype.startPerformanceMeasuremeant = function(measureName, correlationId) {
    return new BrowserPerformanceMeasurement(measureName, correlationId);
  };
  BrowserPerformanceClient2.prototype.generateId = function() {
    return this.guidGenerator.generateGuid();
  };
  BrowserPerformanceClient2.prototype.getPageVisibility = function() {
    var _a;
    return ((_a = document.visibilityState) === null || _a === void 0 ? void 0 : _a.toString()) || null;
  };
  BrowserPerformanceClient2.prototype.startMeasurement = function(measureName, correlationId) {
    var _this = this;
    var startPageVisibility = this.getPageVisibility();
    var inProgressEvent = _super.prototype.startMeasurement.call(this, measureName, correlationId);
    return __assign(__assign({}, inProgressEvent), {endMeasurement: function(event) {
      return inProgressEvent.endMeasurement(__assign({startPageVisibility, endPageVisibility: _this.getPageVisibility()}, event));
    }});
  };
  return BrowserPerformanceClient2;
}(PerformanceClient);

// node_modules/@azure/msal-browser/dist/app/ClientApplication.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var ClientApplication = function() {
  function ClientApplication2(configuration) {
    this.isBrowserEnvironment = typeof window !== "undefined";
    this.config = buildConfiguration(configuration, this.isBrowserEnvironment);
    this.initialized = false;
    this.logger = new Logger(this.config.system.loggerOptions, name2, version2);
    this.networkClient = this.config.system.networkClient;
    this.navigationClient = this.config.system.navigationClient;
    this.redirectResponse = new Map();
    this.hybridAuthCodeResponses = new Map();
    this.performanceClient = this.isBrowserEnvironment ? new BrowserPerformanceClient(this.config.auth.clientId, this.config.auth.authority, this.logger, name2, version2, this.config.telemetry.application, this.config.system.cryptoOptions) : new StubPerformanceClient(this.config.auth.clientId, this.config.auth.authority, this.logger, name2, version2, this.config.telemetry.application);
    this.browserCrypto = this.isBrowserEnvironment ? new CryptoOps(this.logger, this.performanceClient, this.config.system.cryptoOptions) : DEFAULT_CRYPTO_IMPLEMENTATION;
    this.eventHandler = new EventHandler(this.logger, this.browserCrypto);
    this.browserStorage = this.isBrowserEnvironment ? new BrowserCacheManager(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger) : DEFAULT_BROWSER_CACHE_MANAGER(this.config.auth.clientId, this.logger);
    var nativeCacheOptions = {
      cacheLocation: BrowserCacheLocation.MemoryStorage,
      storeAuthStateInCookie: false,
      secureCookies: false
    };
    this.nativeInternalStorage = new BrowserCacheManager(this.config.auth.clientId, nativeCacheOptions, this.browserCrypto, this.logger);
    this.tokenCache = new TokenCache(this.config, this.browserStorage, this.logger, this.browserCrypto);
  }
  ClientApplication2.prototype.initialize = function() {
    return __awaiter(this, void 0, void 0, function() {
      var _a, e_1;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            this.logger.trace("initialize called");
            if (this.initialized) {
              this.logger.info("initialize has already been called, exiting early.");
              return [2];
            }
            this.eventHandler.emitEvent(EventType.INITIALIZE_START);
            if (!this.config.system.allowNativeBroker)
              return [3, 4];
            _b.label = 1;
          case 1:
            _b.trys.push([1, 3, , 4]);
            _a = this;
            return [4, NativeMessageHandler.createProvider(this.logger, this.config.system.nativeBrokerHandshakeTimeout)];
          case 2:
            _a.nativeExtensionProvider = _b.sent();
            return [3, 4];
          case 3:
            e_1 = _b.sent();
            this.logger.verbose(e_1);
            return [3, 4];
          case 4:
            this.initialized = true;
            this.eventHandler.emitEvent(EventType.INITIALIZE_END);
            return [2];
        }
      });
    });
  };
  ClientApplication2.prototype.handleRedirectPromise = function(hash) {
    return __awaiter(this, void 0, void 0, function() {
      var loggedInAccounts, redirectResponseKey, response, request, redirectResponse, nativeClient, correlationId, redirectClient;
      var _this = this;
      return __generator(this, function(_a) {
        this.logger.verbose("handleRedirectPromise called");
        BrowserUtils.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized);
        loggedInAccounts = this.getAllAccounts();
        if (this.isBrowserEnvironment) {
          redirectResponseKey = hash || Constants.EMPTY_STRING;
          response = this.redirectResponse.get(redirectResponseKey);
          if (typeof response === "undefined") {
            this.eventHandler.emitEvent(EventType.HANDLE_REDIRECT_START, InteractionType.Redirect);
            this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise");
            request = this.browserStorage.getCachedNativeRequest();
            redirectResponse = void 0;
            if (request && NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !hash) {
              this.logger.trace("handleRedirectPromise - acquiring token from native platform");
              nativeClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, request.accountId, this.nativeInternalStorage, request.correlationId);
              redirectResponse = nativeClient.handleRedirectPromise();
            } else {
              this.logger.trace("handleRedirectPromise - acquiring token from web flow");
              correlationId = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.CORRELATION_ID, true) || Constants.EMPTY_STRING;
              redirectClient = this.createRedirectClient(correlationId);
              redirectResponse = redirectClient.handleRedirectPromise(hash);
            }
            response = redirectResponse.then(function(result) {
              if (result) {
                var isLoggingIn = loggedInAccounts.length < _this.getAllAccounts().length;
                if (isLoggingIn) {
                  _this.eventHandler.emitEvent(EventType.LOGIN_SUCCESS, InteractionType.Redirect, result);
                  _this.logger.verbose("handleRedirectResponse returned result, login success");
                } else {
                  _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Redirect, result);
                  _this.logger.verbose("handleRedirectResponse returned result, acquire token success");
                }
              }
              _this.eventHandler.emitEvent(EventType.HANDLE_REDIRECT_END, InteractionType.Redirect);
              return result;
            }).catch(function(e) {
              if (loggedInAccounts.length > 0) {
                _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Redirect, null, e);
              } else {
                _this.eventHandler.emitEvent(EventType.LOGIN_FAILURE, InteractionType.Redirect, null, e);
              }
              _this.eventHandler.emitEvent(EventType.HANDLE_REDIRECT_END, InteractionType.Redirect);
              throw e;
            });
            this.redirectResponse.set(redirectResponseKey, response);
          } else {
            this.logger.verbose("handleRedirectPromise has been called previously, returning the result from the first call");
          }
          return [2, response];
        }
        this.logger.verbose("handleRedirectPromise returns null, not browser environment");
        return [2, null];
      });
    });
  };
  ClientApplication2.prototype.acquireTokenRedirect = function(request) {
    return __awaiter(this, void 0, void 0, function() {
      var correlationId, isLoggedIn, result, nativeClient, redirectClient;
      var _this = this;
      return __generator(this, function(_a) {
        correlationId = this.getRequestCorrelationId(request);
        this.logger.verbose("acquireTokenRedirect called", correlationId);
        this.preflightBrowserEnvironmentCheck(InteractionType.Redirect);
        isLoggedIn = this.getAllAccounts().length > 0;
        if (isLoggedIn) {
          this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Redirect, request);
        } else {
          this.eventHandler.emitEvent(EventType.LOGIN_START, InteractionType.Redirect, request);
        }
        if (this.nativeExtensionProvider && this.canUseNative(request)) {
          nativeClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(request), this.nativeInternalStorage, request.correlationId);
          result = nativeClient.acquireTokenRedirect(request).catch(function(e) {
            if (e instanceof NativeAuthError && e.isFatal()) {
              _this.nativeExtensionProvider = void 0;
              var redirectClient2 = _this.createRedirectClient(request.correlationId);
              return redirectClient2.acquireToken(request);
            } else if (e instanceof InteractionRequiredAuthError) {
              _this.logger.verbose("acquireTokenRedirect - Resolving interaction required error thrown by native broker by falling back to web flow");
              var redirectClient2 = _this.createRedirectClient(request.correlationId);
              return redirectClient2.acquireToken(request);
            }
            _this.browserStorage.setInteractionInProgress(false);
            throw e;
          });
        } else {
          redirectClient = this.createRedirectClient(request.correlationId);
          result = redirectClient.acquireToken(request);
        }
        return [2, result.catch(function(e) {
          if (isLoggedIn) {
            _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Redirect, null, e);
          } else {
            _this.eventHandler.emitEvent(EventType.LOGIN_FAILURE, InteractionType.Redirect, null, e);
          }
          throw e;
        })];
      });
    });
  };
  ClientApplication2.prototype.acquireTokenPopup = function(request) {
    var _this = this;
    var correlationId = this.getRequestCorrelationId(request);
    var atPopupMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenPopup, correlationId);
    try {
      this.logger.verbose("acquireTokenPopup called", correlationId);
      this.preflightBrowserEnvironmentCheck(InteractionType.Popup);
    } catch (e) {
      return Promise.reject(e);
    }
    var loggedInAccounts = this.getAllAccounts();
    if (loggedInAccounts.length > 0) {
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Popup, request);
    } else {
      this.eventHandler.emitEvent(EventType.LOGIN_START, InteractionType.Popup, request);
    }
    var result;
    if (this.canUseNative(request)) {
      result = this.acquireTokenNative(request, ApiId.acquireTokenPopup).then(function(response) {
        _this.browserStorage.setInteractionInProgress(false);
        atPopupMeasurement.endMeasurement({
          success: true,
          isNativeBroker: true,
          requestId: response.requestId
        });
        atPopupMeasurement.flushMeasurement();
        return response;
      }).catch(function(e) {
        if (e instanceof NativeAuthError && e.isFatal()) {
          _this.nativeExtensionProvider = void 0;
          var popupClient2 = _this.createPopupClient(request.correlationId);
          return popupClient2.acquireToken(request);
        } else if (e instanceof InteractionRequiredAuthError) {
          _this.logger.verbose("acquireTokenPopup - Resolving interaction required error thrown by native broker by falling back to web flow");
          var popupClient2 = _this.createPopupClient(request.correlationId);
          return popupClient2.acquireToken(request);
        }
        _this.browserStorage.setInteractionInProgress(false);
        throw e;
      });
    } else {
      var popupClient = this.createPopupClient(request.correlationId);
      result = popupClient.acquireToken(request);
    }
    return result.then(function(result2) {
      var isLoggingIn = loggedInAccounts.length < _this.getAllAccounts().length;
      if (isLoggingIn) {
        _this.eventHandler.emitEvent(EventType.LOGIN_SUCCESS, InteractionType.Popup, result2);
      } else {
        _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Popup, result2);
      }
      atPopupMeasurement.addStaticFields({
        accessTokenSize: result2.accessToken.length,
        idTokenSize: result2.idToken.length
      });
      atPopupMeasurement.endMeasurement({
        success: true,
        requestId: result2.requestId
      });
      atPopupMeasurement.flushMeasurement();
      return result2;
    }).catch(function(e) {
      if (loggedInAccounts.length > 0) {
        _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Popup, null, e);
      } else {
        _this.eventHandler.emitEvent(EventType.LOGIN_FAILURE, InteractionType.Popup, null, e);
      }
      atPopupMeasurement.endMeasurement({
        errorCode: e.errorCode,
        subErrorCode: e.subError,
        success: false
      });
      atPopupMeasurement.flushMeasurement();
      return Promise.reject(e);
    });
  };
  ClientApplication2.prototype.ssoSilent = function(request) {
    return __awaiter(this, void 0, void 0, function() {
      var correlationId, validRequest, ssoSilentMeasurement, result, silentIframeClient;
      var _this = this;
      return __generator(this, function(_a) {
        correlationId = this.getRequestCorrelationId(request);
        validRequest = __assign(__assign({}, request), {
          prompt: request.prompt,
          correlationId
        });
        this.preflightBrowserEnvironmentCheck(InteractionType.Silent);
        ssoSilentMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.SsoSilent, correlationId);
        this.logger.verbose("ssoSilent called", correlationId);
        this.eventHandler.emitEvent(EventType.SSO_SILENT_START, InteractionType.Silent, validRequest);
        if (this.canUseNative(validRequest)) {
          result = this.acquireTokenNative(validRequest, ApiId.ssoSilent).catch(function(e) {
            if (e instanceof NativeAuthError && e.isFatal()) {
              _this.nativeExtensionProvider = void 0;
              var silentIframeClient2 = _this.createSilentIframeClient(validRequest.correlationId);
              return silentIframeClient2.acquireToken(validRequest);
            }
            throw e;
          });
        } else {
          silentIframeClient = this.createSilentIframeClient(validRequest.correlationId);
          result = silentIframeClient.acquireToken(validRequest);
        }
        return [2, result.then(function(response) {
          _this.eventHandler.emitEvent(EventType.SSO_SILENT_SUCCESS, InteractionType.Silent, response);
          ssoSilentMeasurement.addStaticFields({
            accessTokenSize: response.accessToken.length,
            idTokenSize: response.idToken.length
          });
          ssoSilentMeasurement.endMeasurement({
            success: true,
            isNativeBroker: response.fromNativeBroker,
            requestId: response.requestId
          });
          ssoSilentMeasurement.flushMeasurement();
          return response;
        }).catch(function(e) {
          _this.eventHandler.emitEvent(EventType.SSO_SILENT_FAILURE, InteractionType.Silent, null, e);
          ssoSilentMeasurement.endMeasurement({
            errorCode: e.errorCode,
            subErrorCode: e.subError,
            success: false
          });
          ssoSilentMeasurement.flushMeasurement();
          throw e;
        })];
      });
    });
  };
  ClientApplication2.prototype.acquireTokenByCode = function(request) {
    return __awaiter(this, void 0, void 0, function() {
      var correlationId, atbcMeasurement, hybridAuthCode_1, response;
      var _this = this;
      return __generator(this, function(_a) {
        correlationId = this.getRequestCorrelationId(request);
        this.preflightBrowserEnvironmentCheck(InteractionType.Silent);
        this.logger.trace("acquireTokenByCode called", correlationId);
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_START, InteractionType.Silent, request);
        atbcMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenByCode, request.correlationId);
        try {
          if (request.code) {
            hybridAuthCode_1 = request.code;
            response = this.hybridAuthCodeResponses.get(hybridAuthCode_1);
            if (!response) {
              this.logger.verbose("Initiating new acquireTokenByCode request", correlationId);
              response = this.acquireTokenByCodeAsync(__assign(__assign({}, request), {correlationId})).then(function(result) {
                _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_SUCCESS, InteractionType.Silent, result);
                _this.hybridAuthCodeResponses.delete(hybridAuthCode_1);
                atbcMeasurement.addStaticFields({
                  accessTokenSize: result.accessToken.length,
                  idTokenSize: result.idToken.length
                });
                atbcMeasurement.endMeasurement({
                  success: true,
                  isNativeBroker: result.fromNativeBroker,
                  requestId: result.requestId
                });
                atbcMeasurement.flushMeasurement();
                return result;
              }).catch(function(error) {
                _this.hybridAuthCodeResponses.delete(hybridAuthCode_1);
                _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_FAILURE, InteractionType.Silent, null, error);
                atbcMeasurement.endMeasurement({
                  errorCode: error.errorCode,
                  subErrorCode: error.subError,
                  success: false
                });
                atbcMeasurement.flushMeasurement();
                throw error;
              });
              this.hybridAuthCodeResponses.set(hybridAuthCode_1, response);
            } else {
              this.logger.verbose("Existing acquireTokenByCode request found", request.correlationId);
              atbcMeasurement.endMeasurement({
                success: true
              });
              atbcMeasurement.discardMeasurement();
            }
            return [2, response];
          } else if (request.nativeAccountId) {
            if (this.canUseNative(request, request.nativeAccountId)) {
              return [2, this.acquireTokenNative(request, ApiId.acquireTokenByCode, request.nativeAccountId).catch(function(e) {
                if (e instanceof NativeAuthError && e.isFatal()) {
                  _this.nativeExtensionProvider = void 0;
                }
                throw e;
              })];
            } else {
              throw BrowserAuthError.createUnableToAcquireTokenFromNativePlatformError();
            }
          } else {
            throw BrowserAuthError.createAuthCodeOrNativeAccountIdRequiredError();
          }
        } catch (e) {
          this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_FAILURE, InteractionType.Silent, null, e);
          atbcMeasurement.endMeasurement({
            errorCode: e instanceof AuthError && e.errorCode || void 0,
            subErrorCode: e instanceof AuthError && e.subError || void 0,
            success: false
          });
          throw e;
        }
        return [2];
      });
    });
  };
  ClientApplication2.prototype.acquireTokenByCodeAsync = function(request) {
    return __awaiter(this, void 0, void 0, function() {
      var silentAuthCodeClient, silentTokenResult;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.logger.trace("acquireTokenByCodeAsync called", request.correlationId);
            silentAuthCodeClient = this.createSilentAuthCodeClient(request.correlationId);
            return [4, silentAuthCodeClient.acquireToken(request)];
          case 1:
            silentTokenResult = _a.sent();
            return [2, silentTokenResult];
        }
      });
    });
  };
  ClientApplication2.prototype.acquireTokenFromCache = function(silentCacheClient, commonRequest, silentRequest) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (silentRequest.cacheLookupPolicy) {
          case CacheLookupPolicy.Default:
          case CacheLookupPolicy.AccessToken:
          case CacheLookupPolicy.AccessTokenAndRefreshToken:
            return [2, silentCacheClient.acquireToken(commonRequest)];
          default:
            throw ClientAuthError.createRefreshRequiredError();
        }
        return [2];
      });
    });
  };
  ClientApplication2.prototype.acquireTokenByRefreshToken = function(commonRequest, silentRequest) {
    return __awaiter(this, void 0, void 0, function() {
      var silentRefreshClient;
      return __generator(this, function(_a) {
        switch (silentRequest.cacheLookupPolicy) {
          case CacheLookupPolicy.Default:
          case CacheLookupPolicy.AccessTokenAndRefreshToken:
          case CacheLookupPolicy.RefreshToken:
          case CacheLookupPolicy.RefreshTokenAndNetwork:
            silentRefreshClient = this.createSilentRefreshClient(commonRequest.correlationId);
            return [2, silentRefreshClient.acquireToken(commonRequest)];
          default:
            throw ClientAuthError.createRefreshRequiredError();
        }
        return [2];
      });
    });
  };
  ClientApplication2.prototype.acquireTokenBySilentIframe = function(request) {
    return __awaiter(this, void 0, void 0, function() {
      var silentIframeClient;
      return __generator(this, function(_a) {
        silentIframeClient = this.createSilentIframeClient(request.correlationId);
        return [2, silentIframeClient.acquireToken(request)];
      });
    });
  };
  ClientApplication2.prototype.logout = function(logoutRequest) {
    return __awaiter(this, void 0, void 0, function() {
      var correlationId;
      return __generator(this, function(_a) {
        correlationId = this.getRequestCorrelationId(logoutRequest);
        this.logger.warning("logout API is deprecated and will be removed in msal-browser v3.0.0. Use logoutRedirect instead.", correlationId);
        return [2, this.logoutRedirect(__assign({correlationId}, logoutRequest))];
      });
    });
  };
  ClientApplication2.prototype.logoutRedirect = function(logoutRequest) {
    return __awaiter(this, void 0, void 0, function() {
      var correlationId, redirectClient;
      return __generator(this, function(_a) {
        correlationId = this.getRequestCorrelationId(logoutRequest);
        this.preflightBrowserEnvironmentCheck(InteractionType.Redirect);
        redirectClient = this.createRedirectClient(correlationId);
        return [2, redirectClient.logout(logoutRequest)];
      });
    });
  };
  ClientApplication2.prototype.logoutPopup = function(logoutRequest) {
    try {
      var correlationId = this.getRequestCorrelationId(logoutRequest);
      this.preflightBrowserEnvironmentCheck(InteractionType.Popup);
      var popupClient = this.createPopupClient(correlationId);
      return popupClient.logout(logoutRequest);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  ClientApplication2.prototype.getAllAccounts = function() {
    this.logger.verbose("getAllAccounts called");
    return this.isBrowserEnvironment ? this.browserStorage.getAllAccounts() : [];
  };
  ClientApplication2.prototype.getAccountByUsername = function(userName) {
    var allAccounts = this.getAllAccounts();
    if (!StringUtils.isEmpty(userName) && allAccounts && allAccounts.length) {
      this.logger.verbose("Account matching username found, returning");
      this.logger.verbosePii("Returning signed-in accounts matching username: " + userName);
      return allAccounts.filter(function(accountObj) {
        return accountObj.username.toLowerCase() === userName.toLowerCase();
      })[0] || null;
    } else {
      this.logger.verbose("getAccountByUsername: No matching account found, returning null");
      return null;
    }
  };
  ClientApplication2.prototype.getAccountByHomeId = function(homeAccountId) {
    var allAccounts = this.getAllAccounts();
    if (!StringUtils.isEmpty(homeAccountId) && allAccounts && allAccounts.length) {
      this.logger.verbose("Account matching homeAccountId found, returning");
      this.logger.verbosePii("Returning signed-in accounts matching homeAccountId: " + homeAccountId);
      return allAccounts.filter(function(accountObj) {
        return accountObj.homeAccountId === homeAccountId;
      })[0] || null;
    } else {
      this.logger.verbose("getAccountByHomeId: No matching account found, returning null");
      return null;
    }
  };
  ClientApplication2.prototype.getAccountByLocalId = function(localAccountId) {
    var allAccounts = this.getAllAccounts();
    if (!StringUtils.isEmpty(localAccountId) && allAccounts && allAccounts.length) {
      this.logger.verbose("Account matching localAccountId found, returning");
      this.logger.verbosePii("Returning signed-in accounts matching localAccountId: " + localAccountId);
      return allAccounts.filter(function(accountObj) {
        return accountObj.localAccountId === localAccountId;
      })[0] || null;
    } else {
      this.logger.verbose("getAccountByLocalId: No matching account found, returning null");
      return null;
    }
  };
  ClientApplication2.prototype.setActiveAccount = function(account) {
    this.browserStorage.setActiveAccount(account);
  };
  ClientApplication2.prototype.getActiveAccount = function() {
    return this.browserStorage.getActiveAccount();
  };
  ClientApplication2.prototype.preflightBrowserEnvironmentCheck = function(interactionType, setInteractionInProgress) {
    if (setInteractionInProgress === void 0) {
      setInteractionInProgress = true;
    }
    this.logger.verbose("preflightBrowserEnvironmentCheck started");
    BrowserUtils.blockNonBrowserEnvironment(this.isBrowserEnvironment);
    BrowserUtils.blockRedirectInIframe(interactionType, this.config.system.allowRedirectInIframe);
    BrowserUtils.blockReloadInHiddenIframes();
    BrowserUtils.blockAcquireTokenInPopups();
    BrowserUtils.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized);
    if (interactionType === InteractionType.Redirect && this.config.cache.cacheLocation === BrowserCacheLocation.MemoryStorage && !this.config.cache.storeAuthStateInCookie) {
      throw BrowserConfigurationAuthError.createInMemoryRedirectUnavailableError();
    }
    if (interactionType === InteractionType.Redirect || interactionType === InteractionType.Popup) {
      this.preflightInteractiveRequest(setInteractionInProgress);
    }
  };
  ClientApplication2.prototype.preflightInteractiveRequest = function(setInteractionInProgress) {
    this.logger.verbose("preflightInteractiveRequest called, validating app environment");
    BrowserUtils.blockReloadInHiddenIframes();
    if (setInteractionInProgress) {
      this.browserStorage.setInteractionInProgress(true);
    }
  };
  ClientApplication2.prototype.acquireTokenNative = function(request, apiId, accountId) {
    return __awaiter(this, void 0, void 0, function() {
      var nativeClient;
      return __generator(this, function(_a) {
        this.logger.trace("acquireTokenNative called");
        if (!this.nativeExtensionProvider) {
          throw BrowserAuthError.createNativeConnectionNotEstablishedError();
        }
        nativeClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, apiId, this.performanceClient, this.nativeExtensionProvider, accountId || this.getNativeAccountId(request), this.nativeInternalStorage, request.correlationId);
        return [2, nativeClient.acquireToken(request)];
      });
    });
  };
  ClientApplication2.prototype.canUseNative = function(request, accountId) {
    this.logger.trace("canUseNative called");
    if (!NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, request.authenticationScheme)) {
      this.logger.trace("canUseNative: isNativeAvailable returned false, returning false");
      return false;
    }
    if (request.prompt) {
      switch (request.prompt) {
        case PromptValue.NONE:
        case PromptValue.CONSENT:
        case PromptValue.LOGIN:
          this.logger.trace("canUseNative: prompt is compatible with native flow");
          break;
        default:
          this.logger.trace("canUseNative: prompt = " + request.prompt + " is not compatible with native flow, returning false");
          return false;
      }
    }
    if (!accountId && !this.getNativeAccountId(request)) {
      this.logger.trace("canUseNative: nativeAccountId is not available, returning false");
      return false;
    }
    return true;
  };
  ClientApplication2.prototype.getNativeAccountId = function(request) {
    var account = request.account || this.browserStorage.getAccountInfoByHints(request.loginHint, request.sid) || this.getActiveAccount();
    return account && account.nativeAccountId || "";
  };
  ClientApplication2.prototype.createPopupClient = function(correlationId) {
    return new PopupClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, correlationId);
  };
  ClientApplication2.prototype.createRedirectClient = function(correlationId) {
    return new RedirectClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, correlationId);
  };
  ClientApplication2.prototype.createSilentIframeClient = function(correlationId) {
    return new SilentIframeClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, correlationId);
  };
  ClientApplication2.prototype.createSilentCacheClient = function(correlationId) {
    return new SilentCacheClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, correlationId);
  };
  ClientApplication2.prototype.createSilentRefreshClient = function(correlationId) {
    return new SilentRefreshClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, correlationId);
  };
  ClientApplication2.prototype.createSilentAuthCodeClient = function(correlationId) {
    return new SilentAuthCodeClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, correlationId);
  };
  ClientApplication2.prototype.addEventCallback = function(callback) {
    return this.eventHandler.addEventCallback(callback);
  };
  ClientApplication2.prototype.removeEventCallback = function(callbackId) {
    this.eventHandler.removeEventCallback(callbackId);
  };
  ClientApplication2.prototype.addPerformanceCallback = function(callback) {
    return this.performanceClient.addPerformanceCallback(callback);
  };
  ClientApplication2.prototype.removePerformanceCallback = function(callbackId) {
    return this.performanceClient.removePerformanceCallback(callbackId);
  };
  ClientApplication2.prototype.enableAccountStorageEvents = function() {
    this.eventHandler.enableAccountStorageEvents();
  };
  ClientApplication2.prototype.disableAccountStorageEvents = function() {
    this.eventHandler.disableAccountStorageEvents();
  };
  ClientApplication2.prototype.getTokenCache = function() {
    return this.tokenCache;
  };
  ClientApplication2.prototype.getLogger = function() {
    return this.logger;
  };
  ClientApplication2.prototype.setLogger = function(logger) {
    this.logger = logger;
  };
  ClientApplication2.prototype.initializeWrapperLibrary = function(sku, version3) {
    this.browserStorage.setWrapperMetadata(sku, version3);
  };
  ClientApplication2.prototype.setNavigationClient = function(navigationClient) {
    this.navigationClient = navigationClient;
  };
  ClientApplication2.prototype.getConfiguration = function() {
    return this.config;
  };
  ClientApplication2.prototype.getRequestCorrelationId = function(request) {
    if (request === null || request === void 0 ? void 0 : request.correlationId) {
      return request.correlationId;
    }
    if (this.isBrowserEnvironment) {
      return this.browserCrypto.createNewGuid();
    }
    return Constants.EMPTY_STRING;
  };
  return ClientApplication2;
}();

// node_modules/@azure/msal-browser/dist/app/PublicClientApplication.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var PublicClientApplication = function(_super) {
  __extends(PublicClientApplication2, _super);
  function PublicClientApplication2(configuration) {
    var _this = _super.call(this, configuration) || this;
    _this.activeSilentTokenRequests = new Map();
    return _this;
  }
  PublicClientApplication2.prototype.loginRedirect = function(request) {
    return __awaiter(this, void 0, void 0, function() {
      var correlationId;
      return __generator(this, function(_a) {
        correlationId = this.getRequestCorrelationId(request);
        this.logger.verbose("loginRedirect called", correlationId);
        return [2, this.acquireTokenRedirect(__assign({correlationId}, request || DEFAULT_REQUEST))];
      });
    });
  };
  PublicClientApplication2.prototype.loginPopup = function(request) {
    var correlationId = this.getRequestCorrelationId(request);
    this.logger.verbose("loginPopup called", correlationId);
    return this.acquireTokenPopup(__assign({correlationId}, request || DEFAULT_REQUEST));
  };
  PublicClientApplication2.prototype.acquireTokenSilent = function(request) {
    return __awaiter(this, void 0, void 0, function() {
      var correlationId, atsMeasurement, account, thumbprint, silentRequestKey, cachedResponse, response;
      var _this = this;
      return __generator(this, function(_a) {
        correlationId = this.getRequestCorrelationId(request);
        atsMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenSilent, correlationId);
        atsMeasurement.addStaticFields({
          cacheLookupPolicy: request.cacheLookupPolicy
        });
        this.preflightBrowserEnvironmentCheck(InteractionType.Silent);
        this.logger.verbose("acquireTokenSilent called", correlationId);
        account = request.account || this.getActiveAccount();
        if (!account) {
          throw BrowserAuthError.createNoAccountError();
        }
        thumbprint = {
          clientId: this.config.auth.clientId,
          authority: request.authority || Constants.EMPTY_STRING,
          scopes: request.scopes,
          homeAccountIdentifier: account.homeAccountId,
          claims: request.claims,
          authenticationScheme: request.authenticationScheme,
          resourceRequestMethod: request.resourceRequestMethod,
          resourceRequestUri: request.resourceRequestUri,
          shrClaims: request.shrClaims,
          sshKid: request.sshKid
        };
        silentRequestKey = JSON.stringify(thumbprint);
        cachedResponse = this.activeSilentTokenRequests.get(silentRequestKey);
        if (typeof cachedResponse === "undefined") {
          this.logger.verbose("acquireTokenSilent called for the first time, storing active request", correlationId);
          response = this.acquireTokenSilentAsync(__assign(__assign({}, request), {correlationId}), account).then(function(result) {
            _this.activeSilentTokenRequests.delete(silentRequestKey);
            atsMeasurement.addStaticFields({
              accessTokenSize: result.accessToken.length,
              idTokenSize: result.idToken.length
            });
            atsMeasurement.endMeasurement({
              success: true,
              fromCache: result.fromCache,
              isNativeBroker: result.fromNativeBroker,
              requestId: result.requestId
            });
            atsMeasurement.flushMeasurement();
            return result;
          }).catch(function(error) {
            _this.activeSilentTokenRequests.delete(silentRequestKey);
            atsMeasurement.endMeasurement({
              errorCode: error.errorCode,
              subErrorCode: error.subError,
              success: false
            });
            atsMeasurement.flushMeasurement();
            throw error;
          });
          this.activeSilentTokenRequests.set(silentRequestKey, response);
          return [2, response];
        } else {
          this.logger.verbose("acquireTokenSilent has been called previously, returning the result from the first call", correlationId);
          atsMeasurement.endMeasurement({
            success: true
          });
          atsMeasurement.discardMeasurement();
          return [2, cachedResponse];
        }
      });
    });
  };
  PublicClientApplication2.prototype.acquireTokenSilentAsync = function(request, account) {
    return __awaiter(this, void 0, void 0, function() {
      var astsAsyncMeasurement, result, silentRequest, silentCacheClient, silentRequest_1, requestWithCLP_1;
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Silent, request);
            astsAsyncMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenSilentAsync, request.correlationId);
            if (!(NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, request.authenticationScheme) && account.nativeAccountId))
              return [3, 1];
            this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform");
            silentRequest = __assign(__assign({}, request), {account});
            result = this.acquireTokenNative(silentRequest, ApiId.acquireTokenSilent_silentFlow).catch(function(e) {
              return __awaiter(_this, void 0, void 0, function() {
                var silentIframeClient;
                return __generator(this, function(_a2) {
                  if (e instanceof NativeAuthError && e.isFatal()) {
                    this.logger.verbose("acquireTokenSilent - native platform unavailable, falling back to web flow");
                    this.nativeExtensionProvider = void 0;
                    silentIframeClient = this.createSilentIframeClient(request.correlationId);
                    return [2, silentIframeClient.acquireToken(request)];
                  }
                  throw e;
                });
              });
            });
            return [3, 3];
          case 1:
            this.logger.verbose("acquireTokenSilent - attempting to acquire token from web flow");
            silentCacheClient = this.createSilentCacheClient(request.correlationId);
            return [4, silentCacheClient.initializeSilentRequest(request, account)];
          case 2:
            silentRequest_1 = _a.sent();
            requestWithCLP_1 = __assign(__assign({}, request), {
              cacheLookupPolicy: request.cacheLookupPolicy || CacheLookupPolicy.Default
            });
            result = this.acquireTokenFromCache(silentCacheClient, silentRequest_1, requestWithCLP_1).catch(function(cacheError) {
              if (requestWithCLP_1.cacheLookupPolicy === CacheLookupPolicy.AccessToken) {
                throw cacheError;
              }
              BrowserUtils.blockReloadInHiddenIframes();
              _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_NETWORK_START, InteractionType.Silent, silentRequest_1);
              return _this.acquireTokenByRefreshToken(silentRequest_1, requestWithCLP_1).catch(function(refreshTokenError) {
                var isServerError = refreshTokenError instanceof ServerError;
                var isInteractionRequiredError = refreshTokenError instanceof InteractionRequiredAuthError;
                var isInvalidGrantError = refreshTokenError.errorCode === BrowserConstants.INVALID_GRANT_ERROR;
                if ((!isServerError || !isInvalidGrantError || isInteractionRequiredError || requestWithCLP_1.cacheLookupPolicy === CacheLookupPolicy.AccessTokenAndRefreshToken || requestWithCLP_1.cacheLookupPolicy === CacheLookupPolicy.RefreshToken) && requestWithCLP_1.cacheLookupPolicy !== CacheLookupPolicy.Skip) {
                  throw refreshTokenError;
                }
                _this.logger.verbose("Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.", request.correlationId);
                return _this.acquireTokenBySilentIframe(silentRequest_1);
              });
            });
            _a.label = 3;
          case 3:
            return [2, result.then(function(response) {
              _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Silent, response);
              astsAsyncMeasurement.endMeasurement({
                success: true,
                fromCache: response.fromCache,
                isNativeBroker: response.fromNativeBroker,
                requestId: response.requestId
              });
              return response;
            }).catch(function(tokenRenewalError) {
              _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Silent, null, tokenRenewalError);
              astsAsyncMeasurement.endMeasurement({
                errorCode: tokenRenewalError.errorCode,
                subErrorCode: tokenRenewalError.subError,
                success: false
              });
              throw tokenRenewalError;
            })];
        }
      });
    });
  };
  return PublicClientApplication2;
}(ClientApplication);

// node_modules/@azure/msal-browser/dist/app/IPublicClientApplication.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var stubbedPublicClientApplication = {
  initialize: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  acquireTokenPopup: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  acquireTokenRedirect: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  acquireTokenSilent: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  acquireTokenByCode: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  getAllAccounts: function() {
    return [];
  },
  getAccountByHomeId: function() {
    return null;
  },
  getAccountByUsername: function() {
    return null;
  },
  getAccountByLocalId: function() {
    return null;
  },
  handleRedirectPromise: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  loginPopup: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  loginRedirect: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  logout: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  logoutRedirect: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  logoutPopup: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  ssoSilent: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  addEventCallback: function() {
    return null;
  },
  removeEventCallback: function() {
    return;
  },
  addPerformanceCallback: function() {
    return "";
  },
  removePerformanceCallback: function() {
    return false;
  },
  enableAccountStorageEvents: function() {
    return;
  },
  disableAccountStorageEvents: function() {
    return;
  },
  getTokenCache: function() {
    throw BrowserConfigurationAuthError.createStubPcaInstanceCalledError();
  },
  getLogger: function() {
    throw BrowserConfigurationAuthError.createStubPcaInstanceCalledError();
  },
  setLogger: function() {
    return;
  },
  setActiveAccount: function() {
    return;
  },
  getActiveAccount: function() {
    return null;
  },
  initializeWrapperLibrary: function() {
    return;
  },
  setNavigationClient: function() {
    return;
  },
  getConfiguration: function() {
    throw BrowserConfigurationAuthError.createStubPcaInstanceCalledError();
  }
};

// node_modules/@azure/msal-browser/dist/event/EventMessage.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var EventMessageUtils = function() {
  function EventMessageUtils2() {
  }
  EventMessageUtils2.getInteractionStatusFromEvent = function(message, currentStatus) {
    switch (message.eventType) {
      case EventType.LOGIN_START:
        return InteractionStatus.Login;
      case EventType.SSO_SILENT_START:
        return InteractionStatus.SsoSilent;
      case EventType.ACQUIRE_TOKEN_START:
        if (message.interactionType === InteractionType.Redirect || message.interactionType === InteractionType.Popup) {
          return InteractionStatus.AcquireToken;
        }
        break;
      case EventType.HANDLE_REDIRECT_START:
        return InteractionStatus.HandleRedirect;
      case EventType.LOGOUT_START:
        return InteractionStatus.Logout;
      case EventType.SSO_SILENT_SUCCESS:
      case EventType.SSO_SILENT_FAILURE:
        if (currentStatus && currentStatus !== InteractionStatus.SsoSilent) {
          break;
        }
        return InteractionStatus.None;
      case EventType.LOGOUT_END:
        if (currentStatus && currentStatus !== InteractionStatus.Logout) {
          break;
        }
        return InteractionStatus.None;
      case EventType.HANDLE_REDIRECT_END:
        if (currentStatus && currentStatus !== InteractionStatus.HandleRedirect) {
          break;
        }
        return InteractionStatus.None;
      case EventType.LOGIN_SUCCESS:
      case EventType.LOGIN_FAILURE:
      case EventType.ACQUIRE_TOKEN_SUCCESS:
      case EventType.ACQUIRE_TOKEN_FAILURE:
        if (message.interactionType === InteractionType.Redirect || message.interactionType === InteractionType.Popup) {
          if (currentStatus && currentStatus !== InteractionStatus.Login && currentStatus !== InteractionStatus.AcquireToken) {
            break;
          }
          return InteractionStatus.None;
        }
        break;
    }
    return null;
  };
  return EventMessageUtils2;
}();

// node_modules/@azure/msal-browser/dist/crypto/SignedHttpRequest.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
var SignedHttpRequest = function() {
  function SignedHttpRequest2(shrParameters, shrOptions) {
    var loggerOptions = shrOptions && shrOptions.loggerOptions || {};
    this.logger = new Logger(loggerOptions, name2, version2);
    this.cryptoOps = new CryptoOps(this.logger);
    this.popTokenGenerator = new PopTokenGenerator(this.cryptoOps);
    this.shrParameters = shrParameters;
  }
  SignedHttpRequest2.prototype.generatePublicKeyThumbprint = function() {
    return __awaiter(this, void 0, void 0, function() {
      var kid;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.popTokenGenerator.generateKid(this.shrParameters)];
          case 1:
            kid = _a.sent().kid;
            return [2, kid];
        }
      });
    });
  };
  SignedHttpRequest2.prototype.signRequest = function(payload, publicKeyThumbprint, claims) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, this.popTokenGenerator.signPayload(payload, publicKeyThumbprint, this.shrParameters, claims)];
      });
    });
  };
  SignedHttpRequest2.prototype.removeKeys = function(publicKeyThumbprint) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.cryptoOps.removeTokenBindingKey(publicKeyThumbprint)];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  return SignedHttpRequest2;
}();

// node_modules/@azure/msal-browser/dist/index.js
/*! @azure/msal-browser v2.32.1 2022-12-07 */
"use strict";
export {
  AccountEntity,
  ApiId,
  AuthError,
  AuthErrorMessage,
  AuthenticationHeaderParser,
  AuthenticationScheme,
  AzureCloudInstance,
  BrowserAuthError,
  BrowserAuthErrorMessage,
  BrowserCacheLocation,
  BrowserConfigurationAuthError,
  BrowserConfigurationAuthErrorMessage,
  BrowserUtils,
  CacheLookupPolicy,
  ClientAuthError,
  ClientAuthErrorMessage,
  ClientConfigurationError,
  ClientConfigurationErrorMessage,
  DEFAULT_IFRAME_TIMEOUT_MS,
  EventMessageUtils,
  EventType,
  InteractionRequiredAuthError,
  InteractionRequiredAuthErrorMessage,
  InteractionStatus,
  InteractionType,
  LogLevel,
  Logger,
  NavigationClient,
  OIDC_DEFAULT_SCOPES,
  PerformanceEvents,
  ProtocolMode,
  PublicClientApplication,
  ServerError,
  SignedHttpRequest,
  StringUtils,
  UrlString,
  WrapperSKU,
  internals_exports as internals,
  stubbedPublicClientApplication,
  version2 as version
};
