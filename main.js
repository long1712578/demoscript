(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\TMT\Desktop\TMT\TDesk\angular-tailwind\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    clientInfo: {
        clientId: 'TDeskApp',
        clientSecret: '1q2w3e*'
    },
    apiUrl: {
        accountUrl: 'https://account.tpos.dev/',
        socketUrl: 'http://localhost:3000',
        chatUrl: 'https://localhost:44352/'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_sevice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth-sevice.service */ "a1ae");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AppComponent_router_outlet_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
} }
class AppComponent {
    constructor(auth, route) {
        this.auth = auth;
        this.route = route;
        this.isload = false;
    }
    // tslint:disable-next-line:typedef
    ngOnInit() {
        const that = this;
        that.auth.getProfile().subscribe(res => {
            this.isload = true;
            if (!res) {
                if (that.auth.loginIn()) {
                    that.auth.logOut();
                    this.route.navigate(['login']);
                }
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_sevice_service__WEBPACK_IMPORTED_MODULE_1__["AuthSevice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_router_outlet_0_Template, 1, 0, "router-outlet", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isload);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "WAEZ":
/*!*********************************************!*\
  !*** ./src/app/services/handleLocalSore.ts ***!
  \*********************************************/
/*! exports provided: Constant, HandleLocalStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constant", function() { return Constant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleLocalStore", function() { return HandleLocalStore; });
const Constant = {
    LOCALVARIABLENAME: {
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
        smsOtpToken: 'smsOtpToken'
    }
};
const HandleLocalStore = {
    writeaccessToken: (accessToken) => {
        localStorage.setItem(Constant.LOCALVARIABLENAME.accessToken, accessToken);
    },
    writerefreshToken: (refreshToken) => {
        localStorage.setItem(Constant.LOCALVARIABLENAME.refreshToken, refreshToken);
    },
    writesmsOtpToken: (smsOtpToken) => {
        localStorage.setItem(Constant.LOCALVARIABLENAME.smsOtpToken, smsOtpToken);
    },
    getToken() {
        return localStorage.getItem(Constant.LOCALVARIABLENAME.accessToken);
    }
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "a1ae":
/*!*************************************************!*\
  !*** ./src/app/services/auth-sevice.service.ts ***!
  \*************************************************/
/*! exports provided: AuthSevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSevice", function() { return AuthSevice; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _handleLocalSore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handleLocalSore */ "WAEZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









class AuthSevice {
    constructor(route, http) {
        this.route = route;
        this.http = http;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
        this.currentUser = null;
    }
    login(phoneNumber, password) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl.chatUrl}api/v1/users/sign-in/password`, {
            phoneNumber,
            password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((userLogin) => {
            if (userLogin) {
                console.log(userLogin);
                localStorage.setItem('currentUser', JSON.stringify(userLogin));
                _handleLocalSore__WEBPACK_IMPORTED_MODULE_5__["HandleLocalStore"].writeaccessToken(userLogin[`accessToken`]);
                _handleLocalSore__WEBPACK_IMPORTED_MODULE_5__["HandleLocalStore"].writerefreshToken(userLogin[`refreshToken`]);
                // TODO request user
            }
            else {
                this.logOut();
            }
        }));
    }
    logOut() {
        localStorage.removeItem(_handleLocalSore__WEBPACK_IMPORTED_MODULE_5__["Constant"].LOCALVARIABLENAME.accessToken);
        localStorage.removeItem(_handleLocalSore__WEBPACK_IMPORTED_MODULE_5__["Constant"].LOCALVARIABLENAME.refreshToken);
        localStorage.removeItem('currentuser');
    }
    loginIn() {
        const token = _handleLocalSore__WEBPACK_IMPORTED_MODULE_5__["HandleLocalStore"].getToken();
        return token &&
            !this.jwtHelper.isTokenExpired(token);
    }
    sentOtp(phoneNumber) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl.chatUrl}api/v1/users/sign-up/send-otpsms`, {
            phoneNumber
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            return res;
        }));
    }
    verifyOtp(phoneNumber, otpcode) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl.chatUrl}api/v1/users/sign-up/verify-otpsms`, {
            phoneNumber,
            otpcode
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            localStorage.setItem('smstoken', res[`smsOtpToken`]);
            return res;
        }));
    }
    signUp(name, email, password, phoneNumber, smsOtpToken, otpCode) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl.chatUrl}api/v1/users/sign-up`, {
            name,
            email,
            password,
            phoneNumber,
            smsOtpToken,
            otpCode
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            return res;
        }));
    }
    getProfile() {
        const that = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](obs => {
            if (that.loginIn()) {
                const accessToken = localStorage.getItem('accessToken');
                const reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    // tslint:disable-next-line:object-literal-key-quotes
                    'Authorization': `Bearer ${accessToken}`
                });
                this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl.chatUrl}api/v1/users/get-profile-user`, { headers: reqHeader }).subscribe((res) => {
                    this.currentUser = res;
                    obs.next(res);
                    obs.complete();
                }, e => {
                    this.currentUser = null;
                    obs.next(null);
                    obs.complete();
                });
            }
            else {
                this.currentUser = null;
                obs.next(null);
                obs.complete();
            }
        });
    }
    getCurrentUser() {
        return this.currentUser;
    }
}
AuthSevice.ɵfac = function AuthSevice_Factory(t) { return new (t || AuthSevice)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AuthSevice.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AuthSevice, factory: AuthSevice.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authloginservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/authloginservice.service */ "xI1t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    // { path: 'welcome',
    //     canActivate:[AuthLoginService],
    //     canLoad:[AuthLoginService] },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginModule),
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() | signup-signup-module */ "signup-signup-module").then(__webpack_require__.bind(null, /*! ./signup/signup.module */ "T9iC")).then(m => m.SignupModule),
    },
    {
        path: 'home',
        canActivate: [_services_authloginservice_service__WEBPACK_IMPORTED_MODULE_1__["AuthLoginService"]],
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~call-call-module~home-home-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomeModule),
    },
    {
        path: 'video',
        canActivate: [_services_authloginservice_service__WEBPACK_IMPORTED_MODULE_1__["AuthLoginService"]],
        loadChildren: () => Promise.all(/*! import() | call-call-module */[__webpack_require__.e("default~call-call-module~home-home-module"), __webpack_require__.e("call-call-module")]).then(__webpack_require__.bind(null, /*! ./call/call.module */ "Ftwx")).then(m => m.CallModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xI1t":
/*!******************************************************!*\
  !*** ./src/app/services/authloginservice.service.ts ***!
  \******************************************************/
/*! exports provided: AuthLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoginService", function() { return AuthLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_sevice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-sevice.service */ "a1ae");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthLoginService {
    constructor(authService, route) {
        this.authService = authService;
        this.route = route;
    }
    canLoad(route, segments) {
        return this.authService.loginIn();
    }
    canActivate(route, state) {
        if (this.authService.loginIn()) {
            return true;
        }
        else {
            this.route.navigate(['']);
            return false;
        }
    }
}
AuthLoginService.ɵfac = function AuthLoginService_Factory(t) { return new (t || AuthLoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_sevice_service__WEBPACK_IMPORTED_MODULE_1__["AuthSevice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthLoginService, factory: AuthLoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map