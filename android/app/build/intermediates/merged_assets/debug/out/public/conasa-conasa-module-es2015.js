(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conasa-conasa-module"],{

/***/ "KhAp":
/*!*************************************************!*\
  !*** ./src/app/conasa/conasa-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ConasaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConasaPageRoutingModule", function() { return ConasaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _conasa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conasa.page */ "akzM");




const routes = [
    {
        path: '',
        component: _conasa_page__WEBPACK_IMPORTED_MODULE_3__["ConasaPage"]
    }
];
let ConasaPageRoutingModule = class ConasaPageRoutingModule {
};
ConasaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConasaPageRoutingModule);



/***/ }),

/***/ "OoxY":
/*!*****************************************!*\
  !*** ./src/app/conasa/conasa.module.ts ***!
  \*****************************************/
/*! exports provided: ConasaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConasaPageModule", function() { return ConasaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pinch-zoom */ "bznP");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-pdf-viewer */ "IkSl");
/* harmony import */ var _conasa_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./conasa-routing.module */ "KhAp");
/* harmony import */ var _conasa_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./conasa.page */ "akzM");









let ConasaPageModule = class ConasaPageModule {
};
ConasaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _conasa_routing_module__WEBPACK_IMPORTED_MODULE_7__["ConasaPageRoutingModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__["PdfViewerModule"],
            ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_5__["PinchZoomModule"]
        ],
        declarations: [_conasa_page__WEBPACK_IMPORTED_MODULE_8__["ConasaPage"]]
    })
], ConasaPageModule);



/***/ }),

/***/ "RtPr":
/*!*****************************************!*\
  !*** ./src/app/conasa/conasa.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmFzYS9jb25hc2EucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "V2Fq":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conasa/conasa.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar  color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>CONASA</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <pinch-zoom>\r\n    <pdf-viewer\r\n    [src]=\"pdfSRC\"\r\n    [fit-to-page]=\"true\"\r\n    [render-text]=\"true\"\r\n    style=\"display: block;\">\r\n    </pdf-viewer>\r\n  </pinch-zoom>\r\n\r\n</ion-content>");

/***/ }),

/***/ "akzM":
/*!***************************************!*\
  !*** ./src/app/conasa/conasa.page.ts ***!
  \***************************************/
/*! exports provided: ConasaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConasaPage", function() { return ConasaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_conasa_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./conasa.page.html */ "V2Fq");
/* harmony import */ var _conasa_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conasa.page.scss */ "RtPr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ConasaPage = class ConasaPage {
    constructor() {
        this.pdfSRC = "assets/pdf/directorio.pdf";
    }
};
ConasaPage.ctorParameters = () => [];
ConasaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-conasa',
        template: _raw_loader_conasa_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_conasa_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConasaPage);



/***/ })

}]);
//# sourceMappingURL=conasa-conasa-module-es2015.js.map