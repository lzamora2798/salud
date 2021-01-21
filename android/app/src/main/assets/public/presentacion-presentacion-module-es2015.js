(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["presentacion-presentacion-module"],{

/***/ "3gUU":
/*!*****************************************************!*\
  !*** ./src/app/presentacion/presentacion.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhY2lvbi9wcmVzZW50YWNpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "GIKm":
/*!*****************************************************!*\
  !*** ./src/app/presentacion/presentacion.module.ts ***!
  \*****************************************************/
/*! exports provided: PresentacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentacionPageModule", function() { return PresentacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pinch-zoom */ "bznP");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-pdf-viewer */ "IkSl");
/* harmony import */ var _presentacion_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./presentacion-routing.module */ "Gwew");
/* harmony import */ var _presentacion_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./presentacion.page */ "epik");









let PresentacionPageModule = class PresentacionPageModule {
};
PresentacionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _presentacion_routing_module__WEBPACK_IMPORTED_MODULE_7__["PresentacionPageRoutingModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__["PdfViewerModule"],
            ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_5__["PinchZoomModule"]
        ],
        declarations: [_presentacion_page__WEBPACK_IMPORTED_MODULE_8__["PresentacionPage"]]
    })
], PresentacionPageModule);



/***/ }),

/***/ "Gwew":
/*!*************************************************************!*\
  !*** ./src/app/presentacion/presentacion-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PresentacionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentacionPageRoutingModule", function() { return PresentacionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _presentacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presentacion.page */ "epik");




const routes = [
    {
        path: '',
        component: _presentacion_page__WEBPACK_IMPORTED_MODULE_3__["PresentacionPage"]
    }
];
let PresentacionPageRoutingModule = class PresentacionPageRoutingModule {
};
PresentacionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PresentacionPageRoutingModule);



/***/ }),

/***/ "epik":
/*!***************************************************!*\
  !*** ./src/app/presentacion/presentacion.page.ts ***!
  \***************************************************/
/*! exports provided: PresentacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentacionPage", function() { return PresentacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_presentacion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./presentacion.page.html */ "iZQk");
/* harmony import */ var _presentacion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presentacion.page.scss */ "3gUU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let PresentacionPage = class PresentacionPage {
    constructor(domSatizer) {
        this.domSatizer = domSatizer;
        // cuando cambie hay que ponerle 
        this.pdfSRC = "assets/pdf/presentacion.pdf";
    }
};
PresentacionPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
PresentacionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-presentacion',
        template: _raw_loader_presentacion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_presentacion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PresentacionPage);



/***/ }),

/***/ "iZQk":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/presentacion/presentacion.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar  color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>PRESENTACIÓN</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <pinch-zoom>\r\n    <pdf-viewer\r\n    [src]=\"pdfSRC\"\r\n    [fit-to-page]=\"true\"\r\n    [render-text]=\"true\"\r\n    style=\"display: block;\">\r\n    </pdf-viewer>\r\n  </pinch-zoom>\r\n\r\n  \r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=presentacion-presentacion-module-es2015.js.map