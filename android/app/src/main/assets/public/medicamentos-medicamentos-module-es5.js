(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medicamentos-medicamentos-module"], {
    /***/
    "L9xR":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/medicamentos/medicamentos.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function L9xR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" color=\"secondary\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>MEDICAMENTOS</ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"recargarTodo()\">\r\n      <ion-button>\r\n        <ion-icon name=\"refresh\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" padding=\"true\">\r\n  <div class=\"general\">\r\n  <div class=\"tituloCentrado\">\r\n    <ion-label >\r\n      CONSEJO NACIONAL DE SALUD - CONASA\r\n      CUADRO NACIONAL DE MEDICAMENTOS BÁSICOS\r\n    </ion-label>\r\n  </div>\r\n  <div>\r\n    <ion-button (click)=\"mostrarFiltro()\" color=\"secondary\"><ion-icon  size=\"small\" name=\"filter\"></ion-icon></ion-button>\r\n    <ion-label > Resultado {{numeroItems}} Registros </ion-label>\r\n  </div>\r\n  <div [hidden] = \"bandera\" class=\"hidediv\">\r\n    <div>\r\n      <ion-label>Grupo Anatómico</ion-label>\r\n      <ion-item>     \r\n      <ion-button (click) =\"botonanatomico()\" color=\"danger\" style=\"padding-right:10px;\"><ion-icon size=\"small\" name=\"trash\"></ion-icon></ion-button>\r\n      <ion-select class=\"select-full-width\" [(ngModel)]=\"anatomico\" (ngModelChange)=\"determinarGrupo()\">\r\n        <ion-select-option [value]=vacio class=\"ion-text-wrap\">SELECCIONE</ion-select-option>\r\n        <ion-select-option [value]=resultado.group class=\"ion-text-wrap\"  *ngFor=\"let resultado of grupo_anatomico\">{{resultado.description}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    </div>\r\n    <div [hidden] = \"flag_terapeutico\">\r\n      <ion-label>Grupo Terapéutico</ion-label>\r\n      <ion-item>\r\n        <ion-button (click) =\"botonterapeutico()\" color=\"danger\" style=\"padding-right:10px;\"><ion-icon size=\"small\" name=\"trash\"></ion-icon></ion-button>\r\n        <ion-select class=\"select-full-width\" [(ngModel)]=\"terapeutico\" (ngModelChange)=\"determinarGrupoTerapeutico()\">\r\n          <ion-select-option [value]=vacio class=\"ion-text-wrap\">SELECCIONE</ion-select-option>\r\n          <ion-select-option [value]=resultado.subgroup class=\"ion-text-wrap\"  *ngFor=\"let resultado of grupo_terapeutico\">{{resultado.description}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </div>\r\n    <div [hidden] = \"flag_subterapeutico\">\r\n      <ion-label>Subgrupo Terapéutico</ion-label>\r\n      <ion-item>\r\n        <ion-button (click)=\"botonsubterapeutico()\" color=\"danger\" style=\"padding-right:10px;\"><ion-icon size=\"small\" name=\"trash\"></ion-icon></ion-button>\r\n        <ion-select class=\"select-full-width\" [(ngModel)]=\"subterapeutico\" (ngModelChange)=\"determinarSubGrupoTerapeutico()\">\r\n          <ion-select-option [value]=vacio class=\"ion-text-wrap\">SELECCIONE</ion-select-option>\r\n          <ion-select-option [value]=resultado.type class=\"ion-text-wrap\"  *ngFor=\"let resultado of subgrupo_terapeutico\">{{resultado.description}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </div>\r\n    <div [hidden] = \"flag_subquimicoterapeutico\">\r\n      <ion-label>Subgrupo Químico Terapéutico</ion-label>\r\n      <ion-item>\r\n        <ion-button (click)=\"botonqumicoterapeutico()\" color=\"danger\" style=\"padding-right:10px;\"><ion-icon size=\"small\" name=\"trash\"></ion-icon></ion-button>\r\n        <ion-select class=\"select-full-width\"  [(ngModel)]=\"subquimicoterapeutico\" (ngModelChange)=\"determinarSubGrupoQuimicoTerapeutico()\">\r\n          <ion-select-option [value]=vacio class=\"ion-text-wrap\">SELECCIONE</ion-select-option>\r\n          <ion-select-option [value]=resultado.subtype class=\"ion-text-wrap\"  *ngFor=\"let resultado of subgrupoquimico_terapeutico\">{{resultado.description}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </div>\r\n    <div >\r\n      <ion-label>Frecuente</ion-label>\r\n      <ion-item>\r\n        <ion-button (click)=\"botonfiltroterapeutico()\" color=\"danger\" style=\"padding-right:10px;\"><ion-icon size=\"small\" name=\"trash\"></ion-icon></ion-button>\r\n        <ion-select class=\"select-full-width\" [(ngModel)]=\"filtrofrecuente\" (ngModelChange)=\"determinarFrecuentes()\">\r\n          <ion-select-option [value]=vacio class=\"ion-text-wrap\">SELECCIONE</ion-select-option>\r\n          <ion-select-option [value]=resultado.record class=\"ion-text-wrap\"  *ngFor=\"let resultado of frecuentes\">{{resultado.label}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </div>\r\n  </div>\r\n  <ion-searchbar\r\n  [(ngModel)]=\"searchTerm\"\r\n  (ionChange)=\"setFilteredItems()\"  \r\n  placeholder=\"Buscar\">\r\n  </ion-searchbar>\r\n</div>\r\n\r\n <ion-list >\r\n   <ion-item *ngFor=\"let medicina of medicineArray\" routerLink= \"{{'/medicine/' + medicina.record}}\">\r\n      <ion-grid>\r\n        <ion-row>\r\n      <ion-label class=\"codigoLetra\">\r\n        {{medicina.code}}\r\n        <p class=\"descripLetra\" [innerHTML]=\"medicina.description\">\r\n          \r\n        </p>\r\n      </ion-label>\r\n      </ion-row>\r\n    <ion-row class=\"dosisLetra\">\r\n      <ion-col>\r\n        {{ medicina.form }}\r\n      </ion-col>\r\n      <ion-col>\r\n        <div [innerHTML]=\"medicina.concentration\"> </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    </ion-grid>\r\n   </ion-item>\r\n </ion-list>\r\n  \r\n</ion-content>";
      /***/
    },

    /***/
    "LeMC":
    /*!*****************************************************!*\
      !*** ./src/app/medicamentos/medicamentos.module.ts ***!
      \*****************************************************/

    /*! exports provided: MedicamentosPageModule */

    /***/
    function LeMC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicamentosPageModule", function () {
        return MedicamentosPageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _medicamentos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./medicamentos-routing.module */
      "QuLv");
      /* harmony import */


      var _medicamentos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./medicamentos.page */
      "v4fS");

      var MedicamentosPageModule = function MedicamentosPageModule() {
        _classCallCheck(this, MedicamentosPageModule);
      };

      MedicamentosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _medicamentos_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedicamentosPageRoutingModule"]],
        declarations: [_medicamentos_page__WEBPACK_IMPORTED_MODULE_6__["MedicamentosPage"]]
      })], MedicamentosPageModule);
      /***/
    },

    /***/
    "QuLv":
    /*!*************************************************************!*\
      !*** ./src/app/medicamentos/medicamentos-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: MedicamentosPageRoutingModule */

    /***/
    function QuLv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicamentosPageRoutingModule", function () {
        return MedicamentosPageRoutingModule;
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


      var _medicamentos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./medicamentos.page */
      "v4fS");

      var routes = [{
        path: '',
        component: _medicamentos_page__WEBPACK_IMPORTED_MODULE_3__["MedicamentosPage"]
      }];

      var MedicamentosPageRoutingModule = function MedicamentosPageRoutingModule() {
        _classCallCheck(this, MedicamentosPageRoutingModule);
      };

      MedicamentosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MedicamentosPageRoutingModule);
      /***/
    },

    /***/
    "v4fS":
    /*!***************************************************!*\
      !*** ./src/app/medicamentos/medicamentos.page.ts ***!
      \***************************************************/

    /*! exports provided: MedicamentosPage */

    /***/
    function v4fS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicamentosPage", function () {
        return MedicamentosPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_medicamentos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./medicamentos.page.html */
      "L9xR");
      /* harmony import */


      var _medicamentos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./medicamentos.page.scss */
      "vSds");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_medicine_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/medicine.service */
      "gHm9");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var Network = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Network;

      var MedicamentosPage = /*#__PURE__*/function () {
        // loadinG: any;
        function MedicamentosPage(medicineService, //private databaseService: DatabaseService,
        toastController, loadingControler) {
          _classCallCheck(this, MedicamentosPage);

          this.medicineService = medicineService;
          this.toastController = toastController;
          this.loadingControler = loadingControler;
          this.searchTerm = "";
          this.anatomico = "";
          this.terapeutico = "";
          this.subterapeutico = "";
          this.subquimicoterapeutico = "";
          this.filtrofrecuente = "";
          this.vacio = "";
          this.bandera = true;
          this.contadorBandera = 0;
          this.numeroItems = 0;
          this.isOffline = false;
          this.flag_terapeutico = true;
          this.flag_subterapeutico = true;
          this.flag_subquimicoterapeutico = true;
        }

        _createClass(MedicamentosPage, [{
          key: "showLoading",
          value: function showLoading(mensaje) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loadinG;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingControler.create({
                        message: mensaje
                      });

                    case 2:
                      loadinG = _context.sent;
                      loadinG.present();
                      return _context.abrupt("return", loadinG);

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var state, loadingG;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return Network.getStatus();

                    case 2:
                      state = _context2.sent;
                      this.networkStatus = state;
                      console.log("status:", state.connected);
                      _context2.next = 7;
                      return this.showLoading("espere...");

                    case 7:
                      loadingG = _context2.sent;

                      if (!state.connected) {
                        // enviar las alertas de las denuncias que surgan en vivo
                        this.presentToast("Modo Offline"); //this.showLoading("Espere") //mesaje del modal de esperar 

                        this.medicineService.getOfflinedata('main').then(function (data) {
                          console.log("data", data);
                          _this.medicineArrayFinal = data;

                          _this.setFilteredItems(); //if (this.medicineArrayFinal){}

                        }, function (error) {
                          console.log(error);
                        })["finally"](function () {
                          setTimeout(function () {
                            loadingG.dismiss();
                          }, 500);
                        });
                        this.capturarGrupoAnatomico();
                      } else {
                        // cuando si hay conexion online
                        this.presentToast("Modo Online"); //this.showLoading("Espere") //mesaje del modal de esperar 

                        this.medicineService.getData().subscribe(function (res) {
                          _this.medicineArrayFinal = res;

                          _this.setFilteredItems();

                          console.log(_this.medicineArray); //this.databaseService.ResiveArray(this.medicineArrayFinal)

                          if (_this.medicineArrayFinal) {
                            setTimeout(function () {
                              loadingG.dismiss();
                            }, 500);
                          }
                        }, function (error) {
                          console.log(error);
                        });
                        this.capturarGrupoAnatomico(); // estos dos filtros se ejecutan al inicio

                        this.capturarFrecuentes();
                      }

                      this.networkStatus = state;

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(texto) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: texto,
                        duration: 1000
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "mostrarFiltro",
          value: function mostrarFiltro() {
            if (this.contadorBandera == 0) {
              this.bandera = false;
              this.contadorBandera = 1;
            } else {
              this.bandera = true;
              this.contadorBandera = 0;
            }
          }
        }, {
          key: "setFilteredItems",
          value: function setFilteredItems() {
            this.medicineArray = this.filterItems(this.searchTerm, "description");
            this.numeroItems = Object.keys(this.medicineArray).length;
            console.log(this.numeroItems);
          }
        }, {
          key: "setFilteredGroup",
          value: function setFilteredGroup() {
            this.medicineArray = this.filterItems(this.anatomico, "group");
            this.numeroItems = Object.keys(this.medicineArray).length;
          }
        }, {
          key: "setFilteredsubGroup",
          value: function setFilteredsubGroup() {
            this.medicineArray = this.filterItems(this.terapeutico, "subgroup");
            this.numeroItems = Object.keys(this.medicineArray).length;
          }
        }, {
          key: "setFilteredType",
          value: function setFilteredType() {
            this.medicineArray = this.filterItems(this.subterapeutico, "type");
            this.numeroItems = Object.keys(this.medicineArray).length;
          }
        }, {
          key: "setFilteredSubType",
          value: function setFilteredSubType() {
            this.medicineArray = this.filterItems(this.subquimicoterapeutico, "subtype");
            this.numeroItems = Object.keys(this.medicineArray).length;
          }
        }, {
          key: "setFilterFrecuente",
          value: function setFilterFrecuente() {
            var _this2 = this;

            //this.medicineArray = this.filterItems(this.filtrofrecuente,"record");
            if (this.networkStatus.connected) {
              this.medicineService.getfamilyFilter(this.filtrofrecuente).subscribe(function (res) {
                _this2.medicineArray = res;
                _this2.numeroItems = Object.keys(_this2.medicineArray).length;

                _this2.medicineService.saveGrupoTerapeuticoOffline(_this2.filtrofrecuente, res);
              });
            } else {
              this.medicineService.getOfflinedata(this.filtrofrecuente).then(function (res) {
                _this2.medicineArray = res;
                _this2.numeroItems = Object.keys(_this2.medicineArray).length;
              });
            }
          }
        }, {
          key: "filterItems",
          value: function filterItems(searchTerm, clave) {
            return this.medicineArrayFinal.filter(function (item) {
              return item[clave].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });
          }
        }, {
          key: "determinarGrupo",
          value: function determinarGrupo() {
            console.log(this.anatomico);
            this.setFilteredGroup();
            this.flag_terapeutico = false;
            this.capturarGrupoTerapeutico();
          }
        }, {
          key: "determinarGrupoTerapeutico",
          value: function determinarGrupoTerapeutico() {
            console.log(this.terapeutico);
            this.setFilteredsubGroup();
            this.flag_subterapeutico = false;
            this.capturarSubGrupoTerapeutico();
          }
        }, {
          key: "determinarSubGrupoTerapeutico",
          value: function determinarSubGrupoTerapeutico() {
            console.log(this.subterapeutico);
            this.setFilteredType();
            this.flag_subquimicoterapeutico = false;
            this.capturarSubGrupoQuimicoTerapeutico();
          }
        }, {
          key: "determinarSubGrupoQuimicoTerapeutico",
          value: function determinarSubGrupoQuimicoTerapeutico() {
            console.log(this.subquimicoterapeutico);
            this.setFilteredSubType();
          }
        }, {
          key: "determinarFrecuentes",
          value: function determinarFrecuentes() {
            console.log(this.filtrofrecuente);
            this.setFilterFrecuente();
          }
        }, {
          key: "capturarGrupoAnatomico",
          value: function capturarGrupoAnatomico() {
            var _this3 = this;

            if (this.networkStatus.connected) {
              this.medicineService.getFilter1().subscribe(function (res) {
                _this3.grupo_anatomico = res;
              });
            } else {
              this.medicineService.getOfflinedata('filtro1').then(function (res) {
                _this3.grupo_anatomico = res;
              });
            }
          }
        }, {
          key: "capturarGrupoTerapeutico",
          value: function capturarGrupoTerapeutico() {
            var _this4 = this;

            if (this.networkStatus.connected) {
              this.medicineService.getFilter2(this.anatomico).subscribe(function (res) {
                _this4.grupo_terapeutico = res;

                _this4.medicineService.saveGrupoTerapeuticoOffline(_this4.anatomico, res);
              });
            } else {
              this.medicineService.getOfflinedata(this.anatomico).then(function (res) {
                _this4.grupo_terapeutico = res;
              });
            }
          }
        }, {
          key: "capturarSubGrupoTerapeutico",
          value: function capturarSubGrupoTerapeutico() {
            var _this5 = this;

            if (this.networkStatus.connected) {
              this.medicineService.getFilter3(this.terapeutico).subscribe(function (res) {
                _this5.subgrupo_terapeutico = res;

                _this5.medicineService.saveGrupoTerapeuticoOffline(_this5.terapeutico, res);
              });
            } else {
              this.medicineService.getOfflinedata(this.terapeutico).then(function (res) {
                _this5.subgrupo_terapeutico = res;
              });
            }
          }
        }, {
          key: "capturarSubGrupoQuimicoTerapeutico",
          value: function capturarSubGrupoQuimicoTerapeutico() {
            var _this6 = this;

            if (this.networkStatus.connected) {
              this.medicineService.getFilter4(this.subterapeutico).subscribe(function (res) {
                _this6.subgrupoquimico_terapeutico = res;

                _this6.medicineService.saveGrupoTerapeuticoOffline(_this6.subterapeutico, res);
              });
            } else {
              this.medicineService.getOfflinedata(this.subterapeutico).then(function (res) {
                _this6.subgrupoquimico_terapeutico = res;
              });
            }
          }
        }, {
          key: "capturarFrecuentes",
          value: function capturarFrecuentes() {
            var _this7 = this;

            this.medicineService.getFilterF().subscribe(function (res) {
              _this7.frecuentes = res;
            });
          }
        }, {
          key: "botonqumicoterapeutico",
          value: function botonqumicoterapeutico() {
            this.subquimicoterapeutico = "";
            this.setFilteredType();
          }
        }, {
          key: "botonsubterapeutico",
          value: function botonsubterapeutico() {
            this.subgrupoquimico_terapeutico = [];
            this.subterapeutico = "";
            this.botonqumicoterapeutico();
            this.setFilteredsubGroup();
          }
        }, {
          key: "botonterapeutico",
          value: function botonterapeutico() {
            this.subgrupo_terapeutico = [];
            this.subgrupoquimico_terapeutico = [];
            this.terapeutico = "";
            this.botonsubterapeutico();
            this.setFilteredGroup();
          }
        }, {
          key: "botonanatomico",
          value: function botonanatomico() {
            this.subgrupo_terapeutico = [];
            this.subgrupoquimico_terapeutico = [];
            this.grupo_terapeutico = [];
            this.anatomico = "";
            this.botonterapeutico();
            this.medicineArray = this.medicineArrayFinal;
            this.numeroItems = Object.keys(this.medicineArrayFinal).length;
          }
        }, {
          key: "botonfiltroterapeutico",
          value: function botonfiltroterapeutico() {
            this.filtrofrecuente = "";
            this.medicineArray = this.medicineArrayFinal;
            this.numeroItems = Object.keys(this.medicineArrayFinal).length;
          }
        }, {
          key: "recargarTodo",
          value: function recargarTodo() {
            this.flag_subquimicoterapeutico = true;
            this.subgrupoquimico_terapeutico = [];
            this.subquimicoterapeutico = "";
            this.flag_terapeutico = true;
            this.grupo_terapeutico = [];
            this.terapeutico = "";
            this.flag_subterapeutico = true;
            this.subgrupo_terapeutico = [];
            this.subterapeutico = "";
            this.anatomico = ""; //para la bandera de todos los filtros

            this.bandera = true;
            this.contadorBandera = 0; //fin de la bandera

            this.searchTerm = "";
            this.medicineArray = this.medicineArrayFinal;
            this.numeroItems = Object.keys(this.medicineArrayFinal).length;
          }
        }]);

        return MedicamentosPage;
      }();

      MedicamentosPage.ctorParameters = function () {
        return [{
          type: _services_medicine_service__WEBPACK_IMPORTED_MODULE_4__["MedicineService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }];
      };

      MedicamentosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-medicamentos',
        template: _raw_loader_medicamentos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_medicamentos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MedicamentosPage);
      /***/
    },

    /***/
    "vSds":
    /*!*****************************************************!*\
      !*** ./src/app/medicamentos/medicamentos.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function vSds(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dosisLetra {\n  font-size: small;\n  font-style: italic;\n}\n\n.codigoLetra {\n  font-weight: bold;\n  padding-left: 0%;\n  color: darkblue;\n}\n\n.descripLetra {\n  color: black;\n}\n\nion-select-option {\n  font-size: 5px;\n}\n\n.hidediv {\n  margin-top: 3px;\n}\n\n.hidediv ion-label {\n  font-weight: bold;\n  font-size: small;\n}\n\n.hidediv ion-select {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.mensajeoffline {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding: 5px;\n  margin-top: 50%;\n}\n\n.iconooffline {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding: 5px;\n  margin-top: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWNhbWVudG9zL21lZGljYW1lbnRvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUFJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUVSOztBQUNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ1I7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0ksZUFBQTtBQUFSOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL21lZGljYW1lbnRvcy9tZWRpY2FtZW50b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvc2lzTGV0cmF7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uY29kaWdvTGV0cmF7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbn1cclxuXHJcbi5kZXNjcmlwTGV0cmF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qtb3B0aW9ue1xyXG4gICAgZm9udC1zaXplOiA1cHg7XHJcbn1cclxuXHJcbi5oaWRlZGl2e1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTpzbWFsbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLXNlbGVjdHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG59XHJcblxyXG4ubWVuc2FqZW9mZmxpbmV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDsgICBcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MCU7XHJcbn1cclxuXHJcbi5pY29ub29mZmxpbmV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDsgICBcclxuICAgIG1hcmdpbi10b3A6IDQwJTtcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=medicamentos-medicamentos-module-es5.js.map