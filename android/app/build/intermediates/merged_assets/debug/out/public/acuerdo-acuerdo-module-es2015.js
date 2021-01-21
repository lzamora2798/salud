(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["acuerdo-acuerdo-module"],{

/***/ "3JgO":
/*!***************************************************!*\
  !*** ./src/app/acuerdo/acuerdo-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AcuerdoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcuerdoPageRoutingModule", function() { return AcuerdoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _acuerdo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./acuerdo.page */ "slo9");




const routes = [
    {
        path: '',
        component: _acuerdo_page__WEBPACK_IMPORTED_MODULE_3__["AcuerdoPage"]
    }
];
let AcuerdoPageRoutingModule = class AcuerdoPageRoutingModule {
};
AcuerdoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AcuerdoPageRoutingModule);



/***/ }),

/***/ "bW+a":
/*!*******************************************!*\
  !*** ./src/app/acuerdo/acuerdo.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdWVyZG8vYWN1ZXJkby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "slo9":
/*!*****************************************!*\
  !*** ./src/app/acuerdo/acuerdo.page.ts ***!
  \*****************************************/
/*! exports provided: AcuerdoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcuerdoPage", function() { return AcuerdoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_acuerdo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./acuerdo.page.html */ "wyyq");
/* harmony import */ var _acuerdo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acuerdo.page.scss */ "bW+a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let AcuerdoPage = class AcuerdoPage {
    constructor(domSatizer) {
        this.domSatizer = domSatizer;
        this.pdfSRC = "assets/pdf/acuerdo.pdf";
    }
};
AcuerdoPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
AcuerdoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-acuerdo',
        template: _raw_loader_acuerdo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_acuerdo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AcuerdoPage);



/***/ }),

/***/ "wyyq":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/acuerdo/acuerdo.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar  color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>ACUERDO MINISTERIAL</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <pinch-zoom>\r\n    <pdf-viewer\r\n    [src]=\"pdfSRC\"\r\n    [fit-to-page]=\"true\"\r\n    [render-text]=\"true\"\r\n    style=\"display: block;\">\r\n    </pdf-viewer>\r\n  </pinch-zoom>\r\n</ion-content>");

/***/ }),

/***/ "yFqd":
/*!*******************************************!*\
  !*** ./src/app/acuerdo/acuerdo.module.ts ***!
  \*******************************************/
/*! exports provided: AcuerdoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcuerdoPageModule", function() { return AcuerdoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pinch-zoom */ "bznP");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-pdf-viewer */ "IkSl");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _acuerdo_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./acuerdo-routing.module */ "3JgO");
/* harmony import */ var _acuerdo_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./acuerdo.page */ "slo9");









let AcuerdoPageModule = class AcuerdoPageModule {
};
AcuerdoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _acuerdo_routing_module__WEBPACK_IMPORTED_MODULE_7__["AcuerdoPageRoutingModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__["PdfViewerModule"],
            ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_4__["PinchZoomModule"]
        ],
        declarations: [_acuerdo_page__WEBPACK_IMPORTED_MODULE_8__["AcuerdoPage"]]
    })
], AcuerdoPageModule);



/***/ })

}]);
//# sourceMappingURL=acuerdo-acuerdo-module-es2015.js.map