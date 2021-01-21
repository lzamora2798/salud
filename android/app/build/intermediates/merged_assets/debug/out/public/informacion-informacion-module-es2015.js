(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["informacion-informacion-module"],{

/***/ "63XV":
/*!***************************************************!*\
  !*** ./src/app/informacion/informacion.module.ts ***!
  \***************************************************/
/*! exports provided: InformacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionPageModule", function() { return InformacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _informacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./informacion-routing.module */ "Ro1B");
/* harmony import */ var _informacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./informacion.page */ "oNMm");







let InformacionPageModule = class InformacionPageModule {
};
InformacionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _informacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["InformacionPageRoutingModule"]
        ],
        declarations: [_informacion_page__WEBPACK_IMPORTED_MODULE_6__["InformacionPage"]]
    })
], InformacionPageModule);



/***/ }),

/***/ "6OzM":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/informacion/informacion.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar  color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>INFORMACIÓN</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"ion-text-center\">\r\n  <img src=\"assets/logo.png\"/> \r\n  <div class=\"contenedor\">\r\n    <strong class=\"capitalize\">CONSEJO NACIONAL DE SALUD</strong>\r\n    <p>web: www.conasa.gob.ec</p>\r\n    <p>email: comunicacion@conasa.gob.ec</p>\r\n    <p>Sistema web Cuadro nacional de Medicamentos Basicos y Registro Terapeurico: conasa.dnet.ec</p>\r\n    <p>Direccion: Av. Quitumbe Ñan y Av. Amaru Ñan Plataforma Gubernamental de Desarrollo Social./ Quito - Ecuador</p>\r\n    <p>Telefono 593 - 02 3834015 ext 1002 Secretaria - 1003 Financiero - 1005 Direccion Ejecutiva</p>\r\n    <p>Quito ecuador</p>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "Ro1B":
/*!***********************************************************!*\
  !*** ./src/app/informacion/informacion-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: InformacionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionPageRoutingModule", function() { return InformacionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _informacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./informacion.page */ "oNMm");




const routes = [
    {
        path: '',
        component: _informacion_page__WEBPACK_IMPORTED_MODULE_3__["InformacionPage"]
    }
];
let InformacionPageRoutingModule = class InformacionPageRoutingModule {
};
InformacionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InformacionPageRoutingModule);



/***/ }),

/***/ "RrCv":
/*!***************************************************!*\
  !*** ./src/app/informacion/informacion.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contenedor {\n  text-align: center;\n}\n\n.p {\n  font-size: xx-small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mb3JtYWNpb24vaW5mb3JtYWNpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9pbmZvcm1hY2lvbi9pbmZvcm1hY2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVuZWRvcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnB7XHJcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xyXG59Il19 */");

/***/ }),

/***/ "oNMm":
/*!*************************************************!*\
  !*** ./src/app/informacion/informacion.page.ts ***!
  \*************************************************/
/*! exports provided: InformacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionPage", function() { return InformacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_informacion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./informacion.page.html */ "6OzM");
/* harmony import */ var _informacion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./informacion.page.scss */ "RrCv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let InformacionPage = class InformacionPage {
    constructor() { }
    ngOnInit() {
    }
};
InformacionPage.ctorParameters = () => [];
InformacionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-informacion',
        template: _raw_loader_informacion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_informacion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InformacionPage);



/***/ })

}]);
//# sourceMappingURL=informacion-informacion-module-es2015.js.map