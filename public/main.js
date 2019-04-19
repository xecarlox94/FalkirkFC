(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-nav>\r\n    \r\n    <router-outlet></router-outlet>\r\n\r\n</app-main-nav>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _base_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base/main-nav/main-nav.component */ "./src/app/base/main-nav/main-nav.component.ts");
/* harmony import */ var _base_policy_modal_policy_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base/policy-modal/policy-modal.component */ "./src/app/base/policy-modal/policy-modal.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");








var AppModule = /** @class */ (function () {
    // Notification badge component in the navbar which takes a subscriber to a notification page
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _base_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_5__["MainNavComponent"],
                _base_policy_modal_policy_modal_component__WEBPACK_IMPORTED_MODULE_6__["PolicyModalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
        // Notification badge component in the navbar which takes a subscriber to a notification page
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");




var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  login works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  register works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/base/main-nav/main-nav.component.html":
/*!*******************************************************!*\
  !*** ./src/app/base/main-nav/main-nav.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav\r\n      #drawer\r\n      class=\"sidenav\" \r\n      fixedInViewport=\"false\"\r\n      [ngClass]=\"{ hidden: !( isHandset$ | async ) }\"\r\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n      [opened]=\"!(isHandset$ | async)\">\r\n    <mat-toolbar>Menu</mat-toolbar>\r\n    <mat-nav-list>\r\n      <a mat-list-item href=\"#\">Link 1</a>\r\n      <a mat-list-item href=\"#\">Link 2</a>\r\n      <a mat-list-item href=\"#\">Link 3</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <button\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span>falkirkfc-webapp</span>\r\n      <span class=\"spacer\"></span>\r\n      <span>item 1</span>\r\n      <span>item 2</span>\r\n    </mat-toolbar>\r\n    <ng-content></ng-content>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/base/main-nav/main-nav.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/base/main-nav/main-nav.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 200px; }\n\n.sidenav .mat-toolbar {\n  background: inherit; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n.hidden {\n  display: none; }\n\n.spacer {\n  flex: 1 1 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzZS9tYWluLW5hdi9DOlxcVXNlcnNcXFplIENhcmxvc1xcRG9jdW1lbnRzXFxTdHVkaW9cXEZhbGtpcmtGQ1xcZmFsa2lya2ZjLXdlYmFwcC9zcmNcXGFwcFxcYmFzZVxcbWFpbi1uYXZcXG1haW4tbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVSxFQUFBOztBQUdaO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYmFzZS9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/base/main-nav/main-nav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/base/main-nav/main-nav.component.ts ***!
  \*****************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/base/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.scss */ "./src/app/base/main-nav/main-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/base/policy-modal/policy-modal.component.html":
/*!***************************************************************!*\
  !*** ./src/app/base/policy-modal/policy-modal.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  policy-modal works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/base/policy-modal/policy-modal.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/base/policy-modal/policy-modal.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2UvcG9saWN5LW1vZGFsL3BvbGljeS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/base/policy-modal/policy-modal.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/base/policy-modal/policy-modal.component.ts ***!
  \*************************************************************/
/*! exports provided: PolicyModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyModalComponent", function() { return PolicyModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PolicyModalComponent = /** @class */ (function () {
    function PolicyModalComponent() {
    }
    PolicyModalComponent.prototype.ngOnInit = function () {
    };
    PolicyModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-policy-modal',
            template: __webpack_require__(/*! ./policy-modal.component.html */ "./src/app/base/policy-modal/policy-modal.component.html"),
            styles: [__webpack_require__(/*! ./policy-modal.component.scss */ "./src/app/base/policy-modal/policy-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PolicyModalComponent);
    return PolicyModalComponent;
}());



/***/ }),

/***/ "./src/app/core/app-routing.module.ts":
/*!********************************************!*\
  !*** ./src/app/core/app-routing.module.ts ***!
  \********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _instituition_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../instituition/about-us/about-us.component */ "./src/app/instituition/about-us/about-us.component.ts");
/* harmony import */ var _instituition_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../instituition/contact-us/contact-us.component */ "./src/app/instituition/contact-us/contact-us.component.ts");
/* harmony import */ var _instituition_cookie_policy_cookie_policy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../instituition/cookie-policy/cookie-policy.component */ "./src/app/instituition/cookie-policy/cookie-policy.component.ts");
/* harmony import */ var _instituition_frequent_questions_asked_frequent_questions_asked_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../instituition/frequent-questions-asked/frequent-questions-asked.component */ "./src/app/instituition/frequent-questions-asked/frequent-questions-asked.component.ts");









var appRoutes = [
    { path: "login", component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "register", component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: "about", component: _instituition_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"] },
    { path: "contact", component: _instituition_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsComponent"] },
    { path: "cookiesPolicy", component: _instituition_cookie_policy_cookie_policy_component__WEBPACK_IMPORTED_MODULE_7__["CookiePolicyComponent"] },
    { path: "fqa", component: _instituition_frequent_questions_asked_frequent_questions_asked_component__WEBPACK_IMPORTED_MODULE_8__["FrequentQuestionsAskedComponent"] },
    { path: "", redirectTo: "login", pathMatch: "full" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_material_design_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/material-design.module */ "./src/app/core/modules/material-design.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/core/app-routing.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _instituition_instituition_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../instituition/instituition.module */ "./src/app/instituition/instituition.module.ts");
/* harmony import */ var _subscriber_subscriber_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subscriber/subscriber.module */ "./src/app/subscriber/subscriber.module.ts");







var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _modules_material_design_module__WEBPACK_IMPORTED_MODULE_2__["MaterialDesignModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"],
                _instituition_instituition_module__WEBPACK_IMPORTED_MODULE_5__["InstituitionModule"],
                _subscriber_subscriber_module__WEBPACK_IMPORTED_MODULE_6__["SubscriberModule"]
            ],
            exports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _modules_material_design_module__WEBPACK_IMPORTED_MODULE_2__["MaterialDesignModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"],
                _instituition_instituition_module__WEBPACK_IMPORTED_MODULE_5__["InstituitionModule"],
                _subscriber_subscriber_module__WEBPACK_IMPORTED_MODULE_6__["SubscriberModule"]
            ],
            providers: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/modules/material-design.module.ts":
/*!********************************************************!*\
  !*** ./src/app/core/modules/material-design.module.ts ***!
  \********************************************************/
/*! exports provided: MaterialDesignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignModule", function() { return MaterialDesignModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialDesignModule = /** @class */ (function () {
    function MaterialDesignModule() {
    }
    MaterialDesignModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"]
            ],
            exports: [
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"]
            ]
        })
    ], MaterialDesignModule);
    return MaterialDesignModule;
}());



/***/ }),

/***/ "./src/app/instituition/about-us/about-us.component.html":
/*!***************************************************************!*\
  !*** ./src/app/instituition/about-us/about-us.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  about-us works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/instituition/about-us/about-us.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/instituition/about-us/about-us.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RpdHVpdGlvbi9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/instituition/about-us/about-us.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/instituition/about-us/about-us.component.ts ***!
  \*************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/instituition/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/instituition/about-us/about-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/instituition/contact-us/contact-us.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/instituition/contact-us/contact-us.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  contact-us works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/instituition/contact-us/contact-us.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/instituition/contact-us/contact-us.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RpdHVpdGlvbi9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/instituition/contact-us/contact-us.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/instituition/contact-us/contact-us.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/instituition/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/instituition/contact-us/contact-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/instituition/cookie-policy/cookie-policy.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/instituition/cookie-policy/cookie-policy.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  cookie-policy works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/instituition/cookie-policy/cookie-policy.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/instituition/cookie-policy/cookie-policy.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RpdHVpdGlvbi9jb29raWUtcG9saWN5L2Nvb2tpZS1wb2xpY3kuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/instituition/cookie-policy/cookie-policy.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/instituition/cookie-policy/cookie-policy.component.ts ***!
  \***********************************************************************/
/*! exports provided: CookiePolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookiePolicyComponent", function() { return CookiePolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CookiePolicyComponent = /** @class */ (function () {
    function CookiePolicyComponent() {
    }
    CookiePolicyComponent.prototype.ngOnInit = function () {
    };
    CookiePolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cookie-policy',
            template: __webpack_require__(/*! ./cookie-policy.component.html */ "./src/app/instituition/cookie-policy/cookie-policy.component.html"),
            styles: [__webpack_require__(/*! ./cookie-policy.component.scss */ "./src/app/instituition/cookie-policy/cookie-policy.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CookiePolicyComponent);
    return CookiePolicyComponent;
}());



/***/ }),

/***/ "./src/app/instituition/frequent-questions-asked/frequent-questions-asked.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/instituition/frequent-questions-asked/frequent-questions-asked.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  frequent-questions-asked works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/instituition/frequent-questions-asked/frequent-questions-asked.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/instituition/frequent-questions-asked/frequent-questions-asked.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RpdHVpdGlvbi9mcmVxdWVudC1xdWVzdGlvbnMtYXNrZWQvZnJlcXVlbnQtcXVlc3Rpb25zLWFza2VkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/instituition/frequent-questions-asked/frequent-questions-asked.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/instituition/frequent-questions-asked/frequent-questions-asked.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: FrequentQuestionsAskedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrequentQuestionsAskedComponent", function() { return FrequentQuestionsAskedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FrequentQuestionsAskedComponent = /** @class */ (function () {
    function FrequentQuestionsAskedComponent() {
    }
    FrequentQuestionsAskedComponent.prototype.ngOnInit = function () {
    };
    FrequentQuestionsAskedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-frequent-questions-asked',
            template: __webpack_require__(/*! ./frequent-questions-asked.component.html */ "./src/app/instituition/frequent-questions-asked/frequent-questions-asked.component.html"),
            styles: [__webpack_require__(/*! ./frequent-questions-asked.component.scss */ "./src/app/instituition/frequent-questions-asked/frequent-questions-asked.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FrequentQuestionsAskedComponent);
    return FrequentQuestionsAskedComponent;
}());



/***/ }),

/***/ "./src/app/instituition/instituition.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/instituition/instituition.module.ts ***!
  \*****************************************************/
/*! exports provided: InstituitionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstituitionModule", function() { return InstituitionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/instituition/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/instituition/contact-us/contact-us.component.ts");
/* harmony import */ var _cookie_policy_cookie_policy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cookie-policy/cookie-policy.component */ "./src/app/instituition/cookie-policy/cookie-policy.component.ts");
/* harmony import */ var _frequent_questions_asked_frequent_questions_asked_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./frequent-questions-asked/frequent-questions-asked.component */ "./src/app/instituition/frequent-questions-asked/frequent-questions-asked.component.ts");






var InstituitionModule = /** @class */ (function () {
    function InstituitionModule() {
    }
    InstituitionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"],
                _cookie_policy_cookie_policy_component__WEBPACK_IMPORTED_MODULE_4__["CookiePolicyComponent"],
                _frequent_questions_asked_frequent_questions_asked_component__WEBPACK_IMPORTED_MODULE_5__["FrequentQuestionsAskedComponent"]
            ]
        })
    ], InstituitionModule);
    return InstituitionModule;
}());



/***/ }),

/***/ "./src/app/subscriber/competitions/competitions.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/subscriber/competitions/competitions.module.ts ***!
  \****************************************************************/
/*! exports provided: CompetitionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionsModule", function() { return CompetitionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fixtures_fixtures_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fixtures/fixtures.component */ "./src/app/subscriber/competitions/fixtures/fixtures.component.ts");
/* harmony import */ var _league_table_league_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./league-table/league-table.component */ "./src/app/subscriber/competitions/league-table/league-table.component.ts");
/* harmony import */ var _live_feed_live_feed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./live-feed/live-feed.component */ "./src/app/subscriber/competitions/live-feed/live-feed.component.ts");
/* harmony import */ var _match_event_match_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./match-event/match-event.component */ "./src/app/subscriber/competitions/match-event/match-event.component.ts");
/* harmony import */ var _match_report_match_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./match-report/match-report.component */ "./src/app/subscriber/competitions/match-report/match-report.component.ts");







var CompetitionsModule = /** @class */ (function () {
    function CompetitionsModule() {
    }
    CompetitionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _fixtures_fixtures_component__WEBPACK_IMPORTED_MODULE_2__["FixturesComponent"],
                _league_table_league_table_component__WEBPACK_IMPORTED_MODULE_3__["LeagueTableComponent"],
                _live_feed_live_feed_component__WEBPACK_IMPORTED_MODULE_4__["LiveFeedComponent"],
                _match_event_match_event_component__WEBPACK_IMPORTED_MODULE_5__["MatchEventComponent"],
                _match_report_match_report_component__WEBPACK_IMPORTED_MODULE_6__["MatchReportComponent"]
            ]
        })
    ], CompetitionsModule);
    return CompetitionsModule;
}());



/***/ }),

/***/ "./src/app/subscriber/competitions/fixtures/fixtures.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/subscriber/competitions/fixtures/fixtures.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  fixtures works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/subscriber/competitions/fixtures/fixtures.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/subscriber/competitions/fixtures/fixtures.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZXIvY29tcGV0aXRpb25zL2ZpeHR1cmVzL2ZpeHR1cmVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/subscriber/competitions/fixtures/fixtures.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/subscriber/competitions/fixtures/fixtures.component.ts ***!
  \************************************************************************/
/*! exports provided: FixturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixturesComponent", function() { return FixturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FixturesComponent = /** @class */ (function () {
    function FixturesComponent() {
    }
    FixturesComponent.prototype.ngOnInit = function () {
    };
    FixturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fixtures',
            template: __webpack_require__(/*! ./fixtures.component.html */ "./src/app/subscriber/competitions/fixtures/fixtures.component.html"),
            styles: [__webpack_require__(/*! ./fixtures.component.scss */ "./src/app/subscriber/competitions/fixtures/fixtures.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FixturesComponent);
    return FixturesComponent;
}());



/***/ }),

/***/ "./src/app/subscriber/competitions/league-table/league-table.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/subscriber/competitions/league-table/league-table.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  league-table works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/subscriber/competitions/league-table/league-table.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/subscriber/competitions/league-table/league-table.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZXIvY29tcGV0aXRpb25zL2xlYWd1ZS10YWJsZS9sZWFndWUtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/subscriber/competitions/league-table/league-table.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/subscriber/competitions/league-table/league-table.component.ts ***!
  \********************************************************************************/
/*! exports provided: LeagueTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueTableComponent", function() { return LeagueTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeagueTableComponent = /** @class */ (function () {
    function LeagueTableComponent() {
    }
    LeagueTableComponent.prototype.ngOnInit = function () {
    };
    LeagueTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-league-table',
            template: __webpack_require__(/*! ./league-table.component.html */ "./src/app/subscriber/competitions/league-table/league-table.component.html"),
            styles: [__webpack_require__(/*! ./league-table.component.scss */ "./src/app/subscriber/competitions/league-table/league-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeagueTableComponent);
    return LeagueTableComponent;
}());



/***/ }),

/***/ "./src/app/subscriber/competitions/live-feed/live-feed.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/subscriber/competitions/live-feed/live-feed.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  live-feed works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/subscriber/competitions/live-feed/live-feed.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/subscriber/competitions/live-feed/live-feed.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZXIvY29tcGV0aXRpb25zL2xpdmUtZmVlZC9saXZlLWZlZWQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/subscriber/competitions/live-feed/live-feed.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/subscriber/competitions/live-feed/live-feed.component.ts ***!
  \**************************************************************************/
/*! exports provided: LiveFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveFeedComponent", function() { return LiveFeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LiveFeedComponent = /** @class */ (function () {
    function LiveFeedComponent() {
    }
    LiveFeedComponent.prototype.ngOnInit = function () {
    };
    LiveFeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-live-feed',
            template: __webpack_require__(/*! ./live-feed.component.html */ "./src/app/subscriber/competitions/live-feed/live-feed.component.html"),
            styles: [__webpack_require__(/*! ./live-feed.component.scss */ "./src/app/subscriber/competitions/live-feed/live-feed.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LiveFeedComponent);
    return LiveFeedComponent;
}());



/***/ }),

/***/ "./src/app/subscriber/competitions/match-event/match-event.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/subscriber/competitions/match-event/match-event.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  match-event works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/subscriber/competitions/match-event/match-event.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/subscriber/competitions/match-event/match-event.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZXIvY29tcGV0aXRpb25zL21hdGNoLWV2ZW50L21hdGNoLWV2ZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/subscriber/competitions/match-event/match-event.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/subscriber/competitions/match-event/match-event.component.ts ***!
  \******************************************************************************/
/*! exports provided: MatchEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchEventComponent", function() { return MatchEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MatchEventComponent = /** @class */ (function () {
    function MatchEventComponent() {
    }
    MatchEventComponent.prototype.ngOnInit = function () {
    };
    MatchEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-match-event',
            template: __webpack_require__(/*! ./match-event.component.html */ "./src/app/subscriber/competitions/match-event/match-event.component.html"),
            styles: [__webpack_require__(/*! ./match-event.component.scss */ "./src/app/subscriber/competitions/match-event/match-event.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MatchEventComponent);
    return MatchEventComponent;
}());



/***/ }),

/***/ "./src/app/subscriber/competitions/match-report/match-report.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/subscriber/competitions/match-report/match-report.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  match-report works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/subscriber/competitions/match-report/match-report.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/subscriber/competitions/match-report/match-report.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZXIvY29tcGV0aXRpb25zL21hdGNoLXJlcG9ydC9tYXRjaC1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/subscriber/competitions/match-report/match-report.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/subscriber/competitions/match-report/match-report.component.ts ***!
  \********************************************************************************/
/*! exports provided: MatchReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchReportComponent", function() { return MatchReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MatchReportComponent = /** @class */ (function () {
    function MatchReportComponent() {
    }
    MatchReportComponent.prototype.ngOnInit = function () {
    };
    MatchReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-match-report',
            template: __webpack_require__(/*! ./match-report.component.html */ "./src/app/subscriber/competitions/match-report/match-report.component.html"),
            styles: [__webpack_require__(/*! ./match-report.component.scss */ "./src/app/subscriber/competitions/match-report/match-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MatchReportComponent);
    return MatchReportComponent;
}());



/***/ }),

/***/ "./src/app/subscriber/dashboard.component.html":
/*!*****************************************************!*\
  !*** ./src/app/subscriber/dashboard.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/subscriber/dashboard.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/subscriber/dashboard.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZXIvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/subscriber/dashboard.component.ts":
/*!***************************************************!*\
  !*** ./src/app/subscriber/dashboard.component.ts ***!
  \***************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/subscriber/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/subscriber/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/subscriber/events/event-list/event-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/subscriber/events/event-list/event-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  event-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/subscriber/events/event-list/event-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/subscriber/events/event-list/event-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZXIvZXZlbnRzL2V2ZW50LWxpc3QvZXZlbnQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/subscriber/events/event-list/event-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/subscriber/events/event-list/event-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: EventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListComponent", function() { return EventListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventListComponent = /** @class */ (function () {
    function EventListComponent() {
    }
    EventListComponent.prototype.ngOnInit = function () {
    };
    EventListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-list',
            template: __webpack_require__(/*! ./event-list.component.html */ "./src/app/subscriber/events/event-list/event-list.component.html"),
            styles: [__webpack_require__(/*! ./event-list.component.scss */ "./src/app/subscriber/events/event-list/event-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventListComponent);
    return EventListComponent;
}());



/***/ }),

/***/ "./src/app/subscriber/events/event/event.component.html":
/*!**************************************************************!*\
  !*** ./src/app/subscriber/events/event/event.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  event works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/subscriber/events/event/event.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/subscriber/events/event/event.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZXIvZXZlbnRzL2V2ZW50L2V2ZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/subscriber/events/event/event.component.ts":
/*!************************************************************!*\
  !*** ./src/app/subscriber/events/event/event.component.ts ***!
  \************************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventComponent = /** @class */ (function () {
    function EventComponent() {
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    EventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/subscriber/events/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.scss */ "./src/app/subscriber/events/event/event.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/subscriber/events/events.module.ts":
/*!****************************************************!*\
  !*** ./src/app/subscriber/events/events.module.ts ***!
  \****************************************************/
/*! exports provided: EventsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsModule", function() { return EventsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event/event.component */ "./src/app/subscriber/events/event/event.component.ts");
/* harmony import */ var _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-list/event-list.component */ "./src/app/subscriber/events/event-list/event-list.component.ts");




var EventsModule = /** @class */ (function () {
    function EventsModule() {
    }
    EventsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _event_event_component__WEBPACK_IMPORTED_MODULE_2__["EventComponent"],
                _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_3__["EventListComponent"]
            ]
        })
    ], EventsModule);
    return EventsModule;
}());



/***/ }),

/***/ "./src/app/subscriber/news/article/article.component.html":
/*!****************************************************************!*\
  !*** ./src/app/subscriber/news/article/article.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  article works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/subscriber/news/article/article.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/subscriber/news/article/article.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZXIvbmV3cy9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/subscriber/news/article/article.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/subscriber/news/article/article.component.ts ***!
  \**************************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/subscriber/news/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.scss */ "./src/app/subscriber/news/article/article.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/subscriber/news/news-list/news-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/subscriber/news/news-list/news-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  news-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/subscriber/news/news-list/news-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/subscriber/news/news-list/news-list.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZXIvbmV3cy9uZXdzLWxpc3QvbmV3cy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/subscriber/news/news-list/news-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/subscriber/news/news-list/news-list.component.ts ***!
  \******************************************************************/
/*! exports provided: NewsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListComponent", function() { return NewsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsListComponent = /** @class */ (function () {
    function NewsListComponent() {
    }
    NewsListComponent.prototype.ngOnInit = function () {
    };
    NewsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-list',
            template: __webpack_require__(/*! ./news-list.component.html */ "./src/app/subscriber/news/news-list/news-list.component.html"),
            styles: [__webpack_require__(/*! ./news-list.component.scss */ "./src/app/subscriber/news/news-list/news-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsListComponent);
    return NewsListComponent;
}());



/***/ }),

/***/ "./src/app/subscriber/news/news.module.ts":
/*!************************************************!*\
  !*** ./src/app/subscriber/news/news.module.ts ***!
  \************************************************/
/*! exports provided: NewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article/article.component */ "./src/app/subscriber/news/article/article.component.ts");
/* harmony import */ var _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-list/news-list.component */ "./src/app/subscriber/news/news-list/news-list.component.ts");




var NewsModule = /** @class */ (function () {
    function NewsModule() {
    }
    NewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _article_article_component__WEBPACK_IMPORTED_MODULE_2__["ArticleComponent"],
                _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_3__["NewsListComponent"]
            ]
        })
    ], NewsModule);
    return NewsModule;
}());



/***/ }),

/***/ "./src/app/subscriber/profile/profile-edit/profile-edit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/subscriber/profile/profile-edit/profile-edit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  profile-edit works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/subscriber/profile/profile-edit/profile-edit.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/subscriber/profile/profile-edit/profile-edit.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZXIvcHJvZmlsZS9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/subscriber/profile/profile-edit/profile-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/subscriber/profile/profile-edit/profile-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProfileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditComponent", function() { return ProfileEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileEditComponent = /** @class */ (function () {
    function ProfileEditComponent() {
    }
    ProfileEditComponent.prototype.ngOnInit = function () {
    };
    ProfileEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-edit',
            template: __webpack_require__(/*! ./profile-edit.component.html */ "./src/app/subscriber/profile/profile-edit/profile-edit.component.html"),
            styles: [__webpack_require__(/*! ./profile-edit.component.scss */ "./src/app/subscriber/profile/profile-edit/profile-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileEditComponent);
    return ProfileEditComponent;
}());



/***/ }),

/***/ "./src/app/subscriber/profile/profile-view/profile-view.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/subscriber/profile/profile-view/profile-view.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  profile-view works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/subscriber/profile/profile-view/profile-view.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/subscriber/profile/profile-view/profile-view.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZXIvcHJvZmlsZS9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/subscriber/profile/profile-view/profile-view.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/subscriber/profile/profile-view/profile-view.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProfileViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileViewComponent", function() { return ProfileViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileViewComponent = /** @class */ (function () {
    function ProfileViewComponent() {
    }
    ProfileViewComponent.prototype.ngOnInit = function () {
    };
    ProfileViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-view',
            template: __webpack_require__(/*! ./profile-view.component.html */ "./src/app/subscriber/profile/profile-view/profile-view.component.html"),
            styles: [__webpack_require__(/*! ./profile-view.component.scss */ "./src/app/subscriber/profile/profile-view/profile-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileViewComponent);
    return ProfileViewComponent;
}());



/***/ }),

/***/ "./src/app/subscriber/profile/profile.module.ts":
/*!******************************************************!*\
  !*** ./src/app/subscriber/profile/profile.module.ts ***!
  \******************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-view/profile-view.component */ "./src/app/subscriber/profile/profile-view/profile-view.component.ts");
/* harmony import */ var _profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-edit/profile-edit.component */ "./src/app/subscriber/profile/profile-edit/profile-edit.component.ts");




var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_2__["ProfileViewComponent"],
                _profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_3__["ProfileEditComponent"]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/subscriber/squads/player/player.component.html":
/*!****************************************************************!*\
  !*** ./src/app/subscriber/squads/player/player.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  player works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/subscriber/squads/player/player.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/subscriber/squads/player/player.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZXIvc3F1YWRzL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/subscriber/squads/player/player.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/subscriber/squads/player/player.component.ts ***!
  \**************************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlayerComponent = /** @class */ (function () {
    function PlayerComponent() {
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/subscriber/squads/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.scss */ "./src/app/subscriber/squads/player/player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/subscriber/squads/squads.module.ts":
/*!****************************************************!*\
  !*** ./src/app/subscriber/squads/squads.module.ts ***!
  \****************************************************/
/*! exports provided: SquadsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquadsModule", function() { return SquadsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player/player.component */ "./src/app/subscriber/squads/player/player.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team/team.component */ "./src/app/subscriber/squads/team/team.component.ts");




var SquadsModule = /** @class */ (function () {
    function SquadsModule() {
    }
    SquadsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _player_player_component__WEBPACK_IMPORTED_MODULE_2__["PlayerComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_3__["TeamComponent"]
            ]
        })
    ], SquadsModule);
    return SquadsModule;
}());



/***/ }),

/***/ "./src/app/subscriber/squads/team/team.component.html":
/*!************************************************************!*\
  !*** ./src/app/subscriber/squads/team/team.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  team works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/subscriber/squads/team/team.component.scss":
/*!************************************************************!*\
  !*** ./src/app/subscriber/squads/team/team.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZXIvc3F1YWRzL3RlYW0vdGVhbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/subscriber/squads/team/team.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/subscriber/squads/team/team.component.ts ***!
  \**********************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/subscriber/squads/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.scss */ "./src/app/subscriber/squads/team/team.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/subscriber/subscriber-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/subscriber/subscriber-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SubscriberRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriberRoutingModule", function() { return SubscriberRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/subscriber/dashboard.component.ts");
/* harmony import */ var _squads_team_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./squads/team/team.component */ "./src/app/subscriber/squads/team/team.component.ts");





var subscriberRoutes = [
    {
        path: "dashboard", component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], children: [
            { path: "team", component: _squads_team_team_component__WEBPACK_IMPORTED_MODULE_4__["TeamComponent"] }
        ]
    }
];
var SubscriberRoutingModule = /** @class */ (function () {
    function SubscriberRoutingModule() {
    }
    SubscriberRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(subscriberRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], SubscriberRoutingModule);
    return SubscriberRoutingModule;
}());



/***/ }),

/***/ "./src/app/subscriber/subscriber.module.ts":
/*!*************************************************!*\
  !*** ./src/app/subscriber/subscriber.module.ts ***!
  \*************************************************/
/*! exports provided: SubscriberModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriberModule", function() { return SubscriberModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _squads_squads_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./squads/squads.module */ "./src/app/subscriber/squads/squads.module.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/subscriber/profile/profile.module.ts");
/* harmony import */ var _news_news_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news/news.module */ "./src/app/subscriber/news/news.module.ts");
/* harmony import */ var _events_events_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/events.module */ "./src/app/subscriber/events/events.module.ts");
/* harmony import */ var _competitions_competitions_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./competitions/competitions.module */ "./src/app/subscriber/competitions/competitions.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/subscriber/dashboard.component.ts");
/* harmony import */ var _subscriber_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./subscriber-routing.module */ "./src/app/subscriber/subscriber-routing.module.ts");










var SubscriberModule = /** @class */ (function () {
    // player tables with most goals, assists, own goals, yellow and red cards
    function SubscriberModule() {
    }
    SubscriberModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _squads_squads_module__WEBPACK_IMPORTED_MODULE_3__["SquadsModule"],
                _profile_profile_module__WEBPACK_IMPORTED_MODULE_4__["ProfileModule"],
                _news_news_module__WEBPACK_IMPORTED_MODULE_5__["NewsModule"],
                _events_events_module__WEBPACK_IMPORTED_MODULE_6__["EventsModule"],
                _competitions_competitions_module__WEBPACK_IMPORTED_MODULE_7__["CompetitionsModule"],
                _subscriber_routing_module__WEBPACK_IMPORTED_MODULE_9__["SubscriberRoutingModule"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]]
        })
        // player tables with most goals, assists, own goals, yellow and red cards
    ], SubscriberModule);
    return SubscriberModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ze Carlos\Documents\Studio\FalkirkFC\falkirkfc-webapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map