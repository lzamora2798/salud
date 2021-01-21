(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conamei-conamei-module"], {
    /***/
    "Hs1j":
    /*!*******************************************!*\
      !*** ./src/app/conamei/conamei.module.ts ***!
      \*******************************************/

    /*! exports provided: ConameiPageModule */

    /***/
    function Hs1j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConameiPageModule", function () {
        return ConameiPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-pinch-zoom */
      "bznP");
      /* harmony import */


      var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-pdf-viewer */
      "IkSl");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _conamei_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./conamei-routing.module */
      "fk3D");
      /* harmony import */


      var _conamei_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./conamei.page */
      "JLpe");

      var ConameiPageModule = function ConameiPageModule() {
        _classCallCheck(this, ConameiPageModule);
      };

      ConameiPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _conamei_routing_module__WEBPACK_IMPORTED_MODULE_7__["ConameiPageRoutingModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__["PdfViewerModule"], ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_4__["PinchZoomModule"]],
        declarations: [_conamei_page__WEBPACK_IMPORTED_MODULE_8__["ConameiPage"]]
      })], ConameiPageModule);
      /***/
    },

    /***/
    "JLpe":
    /*!*****************************************!*\
      !*** ./src/app/conamei/conamei.page.ts ***!
      \*****************************************/

    /*! exports provided: ConameiPage */

    /***/
    function JLpe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConameiPage", function () {
        return ConameiPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_conamei_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./conamei.page.html */
      "kvij");
      /* harmony import */


      var _conamei_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./conamei.page.scss */
      "PTgM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var ConameiPage = function ConameiPage(domSatizer) {
        _classCallCheck(this, ConameiPage);

        this.domSatizer = domSatizer;
        this.pdfSRC = "assets/pdf/conamei.pdf";
      };

      ConameiPage.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }];
      };

      ConameiPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-conamei',
        template: _raw_loader_conamei_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_conamei_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ConameiPage);
      /***/
    },

    /***/
    "PTgM":
    /*!*******************************************!*\
      !*** ./src/app/conamei/conamei.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function PTgM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmFtZWkvY29uYW1laS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "fk3D":
    /*!***************************************************!*\
      !*** ./src/app/conamei/conamei-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ConameiPageRoutingModule */

    /***/
    function fk3D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConameiPageRoutingModule", function () {
        return ConameiPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _conamei_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./conamei.page */
      "JLpe");

      var routes = [{
        path: '',
        component: _conamei_page__WEBPACK_IMPORTED_MODULE_3__["ConameiPage"]
      }];

      var ConameiPageRoutingModule = function ConameiPageRoutingModule() {
        _classCallCheck(this, ConameiPageRoutingModule);
      };

      ConameiPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConameiPageRoutingModule);
      /***/
    },

    /***/
    "kvij":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conamei/conamei.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function kvij(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar  color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>CONAMEI</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <pinch-zoom>\r\n    <pdf-viewer\r\n    [src]=\"pdfSRC\"\r\n    [fit-to-page]=\"true\"\r\n    [render-text]=\"true\"\r\n    style=\"display: block;\">\r\n    </pdf-viewer>\r\n  </pinch-zoom>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=conamei-conamei-module-es5.js.map