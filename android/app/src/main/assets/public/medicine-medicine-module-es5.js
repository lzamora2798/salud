(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medicine-medicine-module"], {
    /***/
    "0FM1":
    /*!*****************************************************!*\
      !*** ./src/app/medicine/medicine-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: MedicinePageRoutingModule */

    /***/
    function FM1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicinePageRoutingModule", function () {
        return MedicinePageRoutingModule;
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


      var _medicine_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./medicine.page */
      "9myA");

      var routes = [{
        path: '',
        component: _medicine_page__WEBPACK_IMPORTED_MODULE_3__["MedicinePage"]
      }];

      var MedicinePageRoutingModule = function MedicinePageRoutingModule() {
        _classCallCheck(this, MedicinePageRoutingModule);
      };

      MedicinePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MedicinePageRoutingModule);
      /***/
    },

    /***/
    "9myA":
    /*!*******************************************!*\
      !*** ./src/app/medicine/medicine.page.ts ***!
      \*******************************************/

    /*! exports provided: MedicinePage */

    /***/
    function myA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicinePage", function () {
        return MedicinePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_medicine_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./medicine.page.html */
      "duDq");
      /* harmony import */


      var _medicine_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./medicine.page.scss */
      "SeFb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_medicine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/medicine.service */
      "gHm9");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");

      var Network = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Network;

      var MedicinePage = /*#__PURE__*/function () {
        function MedicinePage(activatedRoute, medicineService, file) {
          _classCallCheck(this, MedicinePage);

          this.activatedRoute = activatedRoute;
          this.medicineService = medicineService;
          this.file = file;
          this.banderas = {
            picto: true,
            indicaciones: true,
            dosificacion: true,
            reacciones: true,
            contraindica: true,
            precauciones: true,
            interaccion: true,
            usoen: true,
            observaciones: true,
            citados: true
          };
          this.level1 = true;
          this.level2 = true;
          this.level3 = true;
        }

        _createClass(MedicinePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var state;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.record = this.activatedRoute.snapshot.paramMap.get('record');
                      _context.next = 3;
                      return Network.getStatus();

                    case 3:
                      state = _context.sent;

                      if (state.connected) {
                        this.medicineService.getDataEachMedicine(this.record).subscribe(function (res) {
                          _this.info = res;
                          _this.url = 'http://conasa.dnet.ec/admin/archivos/conasa/_pictogramas/';

                          _this.medicineService.saveEachMedicineOffline(_this.record);

                          _this.pictogramasArray = res["picto"].split("|"); //for( var i = 0; i<this.pictogramasArray.length;i++){
                          //this.medicineService.download(this.pictogramasArray[i])
                          //}

                          if (res["dosage_image"].localeCompare("")) {
                            _this.dosage_flag = true;
                          } else {
                            _this.dosage_flag = false;
                          }

                          if (res["level_1"] == 'x') _this.level1 = false;
                          if (res["level_2"] == 'x') _this.level2 = false;
                          if (res["level_3"] == 'x') _this.level3 = false;
                        }, function (error) {
                          console.log(error);
                        });
                      } else {
                        this.medicineService.getOfflinedata(this.record).then(function (res) {
                          _this.info = res;
                          _this.url = 'file:///data/user/0/com.your.app/files/';

                          _this.medicineService.saveEachMedicineOffline(_this.record);

                          _this.pictogramasArray = res["picto"].split("|");

                          if (res["dosage_image"].localeCompare("")) {
                            _this.dosage_flag = true;
                          } else {
                            _this.dosage_flag = false;
                          }

                          if (res["level_1"] == 'x') _this.level1 = false;
                          if (res["level_2"] == 'x') _this.level2 = false;
                          if (res["level_3"] == 'x') _this.level3 = false;
                          console.log(_this.info);
                        }, function (error) {
                          console.log(error);
                        });
                      }

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "clickBotonesInformativos",
          value: function clickBotonesInformativos(dato) {
            if (!this.banderas[dato]) {
              this.banderas[dato] = true;
            } else {
              this.banderas[dato] = false;
            }
          }
        }, {
          key: "retroceder",
          value: function retroceder() {
            console.log("retrocede");
          }
        }]);

        return MedicinePage;
      }();

      MedicinePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_medicine_service__WEBPACK_IMPORTED_MODULE_5__["MedicineService"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]
        }];
      };

      MedicinePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-medicine',
        template: _raw_loader_medicine_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_medicine_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MedicinePage);
      /***/
    },

    /***/
    "SeFb":
    /*!*********************************************!*\
      !*** ./src/app/medicine/medicine.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function SeFb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".col1 {\n  font-weight: bold;\n}\n\n.row1 {\n  width: 100%;\n  margin: 0 auto;\n}\n\nion-grid ion-row {\n  margin-top: -10px;\n}\n\nion-grid span {\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWNpbmUvbWVkaWNpbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBSUk7RUFDSSxpQkFBQTtBQURSOztBQUdJO0VBQ0ksZ0JBQUE7QUFEUiIsImZpbGUiOiJzcmMvYXBwL21lZGljaW5lL21lZGljaW5lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wxe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5yb3cxIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBcclxuICB9XHJcblxyXG5pb24tZ3JpZHtcclxuICAgIGlvbi1yb3d7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "duDq":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/medicine/medicine.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function duDq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button>\r\n        <ion-icon name=\"earth\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>MEDICAMENTO</ion-title>\r\n    <ion-buttons slot=\"end\"  routerLink=\"/medicamentos\">\r\n      <ion-button>\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"info\">\r\n<div class=\"general\">\r\n  <div class=\"tituloCentrado\">\r\n    <ion-label >\r\n      CONSEJO NACIONAL DE SALUD - CONASA\r\n      CUADRO NACIONAL DE MEDICAMENTOS BÁSICOS\r\n      REGISTRO TERAPÉUTICO\r\n    </ion-label>\r\n  </div>\r\n  <ion-grid >\r\n    <ion-row>\r\n      <ion-col class=\"col1\">\r\n        <span>Código ATC</span>\r\n      </ion-col>\r\n      <ion-col class=\"col2\">\r\n        <span>{{info.code}}</span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"col1\">\r\n        <span>DCI:</span>\r\n      </ion-col>\r\n      <ion-col class=\"col2\">\r\n        <span [innerHTML]=\"info.description\"></span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"col1\">\r\n        <span>Forma Farmacéutica:</span>\r\n      </ion-col>\r\n      <ion-col class=\"col2\">\r\n        <span>{{info.form}}</span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"col1\">\r\n        <span>Concentración:</span>\r\n      </ion-col>\r\n      <ion-col class=\"col2\">\r\n        <span [innerHTML]=\"info.concentration\"></span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"col1\">\r\n        <span>Nivel de Prescripción:</span>\r\n      </ion-col>\r\n      <ion-col class=\"col2\">\r\n        <span [innerHTML]=\"info.pres\" ></span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"col1\">\r\n        <span>Nivel de Atención:</span>\r\n      </ion-col>\r\n      <ion-col class=\"col2\">\r\n        <span [hidden]=\"level1\" style=\"display: inline-block; padding-right:5px;\"> I NA</span>\r\n        <span [hidden]=\"level2\" style=\"display: inline-block; padding-right:5px\"> II NA</span>\r\n        <span [hidden]=\"level3\" style=\"display: inline-block; padding-right:5px\"> III NA</span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"col1\">\r\n        <span>Via administración</span>\r\n      </ion-col>\r\n      <ion-col class=\"col2\">\r\n        <span [innerHTML]=\"info.admin\"></span>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n<ion-button expand=\"full\" color=\"tertiary\" (click)=\"clickBotonesInformativos('picto')\">PICTOGRAMAS</ion-button>\r\n<div class=\"row1\" [hidden] = \"banderas.picto\">\r\n  <ion-img  *ngFor=\"let picto of pictogramasArray\" style=\"height: 100px; width: 100px; display: inline-block;\"\r\n  [src]=\"url+ picto\"></ion-img>      \r\n</div>\r\n<ion-button expand=\"full\" color=\"tertiary\" (click)=\"clickBotonesInformativos('indicaciones')\">INDICACIONES</ion-button>\r\n<div [hidden] = \"banderas.indicaciones\">\r\n  <span [innerHTML]=\"info.indications\"></span>\r\n</div>\r\n<ion-button expand=\"full\" color=\"tertiary\" (click)=\"clickBotonesInformativos('dosificacion')\">DOSIFICACIÓN</ion-button>\r\n<div [hidden] = \"banderas.dosificacion\" >\r\n  \r\n  <div [hidden]=\"!dosage_flag\" >\r\n      <pinch-zoom>\r\n        <ion-img [src]=\"'http://conasa.dnet.ec/admin/archivos/conasa/_dosificacion/'+ info.dosage_image\"></ion-img>      \r\n      </pinch-zoom> \r\n  </div>\r\n  \r\n  \r\n  <div [hidden]=\"dosage_flag\" [innerHTML]=\"info.dosage\"></div>\r\n\r\n</div>\r\n<ion-button expand=\"full\" color=\"tertiary\"  (click)=\"clickBotonesInformativos('reacciones')\">REACCIONES ADVERSAS</ion-button>\r\n<div [hidden] = \"banderas.reacciones\">\r\n  <span [innerHTML]=\"info.adverse_reaction\"></span>\r\n</div>\r\n<ion-button expand=\"full\" color=\"tertiary\"  (click)=\"clickBotonesInformativos('contraindica')\">CONTRAINDICACIONES</ion-button>\r\n<div [hidden] = \"banderas.contraindica\">\r\n  <span [innerHTML]=\"info.contraindications\"></span>\r\n</div>\r\n<ion-button expand=\"full\" color=\"tertiary\"  (click)=\"clickBotonesInformativos('precauciones')\">PRECAUCIONES  </ion-button>\r\n<div [hidden] = \"banderas.precauciones\">\r\n  <span  [innerHTML]=\"info.precautions\"></span>\r\n</div>\r\n<ion-button expand=\"full\" color=\"tertiary\"  (click)=\"clickBotonesInformativos('interaccion')\">INTERACCIONES</ion-button>\r\n<div [hidden] = \"banderas.interaccion\">\r\n  <span  [innerHTML]=\"info.interactions\"></span>\r\n</div>\r\n<ion-button expand=\"full\" color=\"tertiary\"  (click)=\"clickBotonesInformativos('usoen')\">EMBARAZO / LACTANCIA</ion-button>\r\n<div [hidden] = \"banderas.usoen\">\r\n  <span [innerHTML]=\"info.use\"></span>\r\n</div>\r\n<ion-button expand=\"full\" color=\"tertiary\"  (click)=\"clickBotonesInformativos('observaciones')\">OBSERVACIONES</ion-button>\r\n<div [hidden] = \"banderas.observaciones\">\r\n  <span  [innerHTML]=\"info.observations\"></span>\r\n</div>\r\n<ion-button expand=\"full\" color=\"tertiary\"  (click)=\"clickBotonesInformativos('citados')\">TRABAJOS CITADOS</ion-button>\r\n<div [hidden] = \"banderas.citados\">\r\n  <span  [innerHTML]=\"info.bibliography\"></span>\r\n</div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "k72i":
    /*!*********************************************!*\
      !*** ./src/app/medicine/medicine.module.ts ***!
      \*********************************************/

    /*! exports provided: MedicinePageModule */

    /***/
    function k72i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicinePageModule", function () {
        return MedicinePageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _medicine_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./medicine-routing.module */
      "0FM1");
      /* harmony import */


      var _medicine_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./medicine.page */
      "9myA");

      var MedicinePageModule = function MedicinePageModule() {
        _classCallCheck(this, MedicinePageModule);
      };

      MedicinePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _medicine_routing_module__WEBPACK_IMPORTED_MODULE_6__["MedicinePageRoutingModule"], ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_4__["PinchZoomModule"]],
        declarations: [_medicine_page__WEBPACK_IMPORTED_MODULE_7__["MedicinePage"]]
      })], MedicinePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=medicine-medicine-module-es5.js.map