(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editvindata-editvindata-module"],{

/***/ "./src/app/editvindata/editvindata.module.ts":
/*!***************************************************!*\
  !*** ./src/app/editvindata/editvindata.module.ts ***!
  \***************************************************/
/*! exports provided: EditvindataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditvindataPageModule", function() { return EditvindataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _editvindata_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editvindata.page */ "./src/app/editvindata/editvindata.page.ts");







var EditvindataPageModule = /** @class */ (function () {
    function EditvindataPageModule() {
    }
    EditvindataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _editvindata_page__WEBPACK_IMPORTED_MODULE_6__["EditvindataPage"]
                    }
                ])
            ],
            declarations: [_editvindata_page__WEBPACK_IMPORTED_MODULE_6__["EditvindataPage"]]
        })
    ], EditvindataPageModule);
    return EditvindataPageModule;
}());



/***/ }),

/***/ "./src/app/editvindata/editvindata.page.html":
/*!***************************************************!*\
  !*** ./src/app/editvindata/editvindata.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  Fuck You\n  <!--\n    <div *ngIf=\"selectedItem\" padding>\n      You navigated here from <b>{{selectedItem.title }}</b>\n    </div>\n  -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/editvindata/editvindata.page.scss":
/*!***************************************************!*\
  !*** ./src/app/editvindata/editvindata.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXR2aW5kYXRhL2VkaXR2aW5kYXRhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/editvindata/editvindata.page.ts":
/*!*************************************************!*\
  !*** ./src/app/editvindata/editvindata.page.ts ***!
  \*************************************************/
/*! exports provided: EditvindataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditvindataPage", function() { return EditvindataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditvindataPage = /** @class */ (function () {
    function EditvindataPage() {
        this.icons = [
            'flask',
            'wifi',
            'beer',
            'football',
            'basketball',
            'paper-plane',
            'american-football',
            'boat',
            'bluetooth',
            'build'
        ];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    EditvindataPage.prototype.ngOnInit = function () {
    };
    EditvindataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editvindata',
            template: __webpack_require__(/*! ./editvindata.page.html */ "./src/app/editvindata/editvindata.page.html"),
            styles: [__webpack_require__(/*! ./editvindata.page.scss */ "./src/app/editvindata/editvindata.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditvindataPage);
    return EditvindataPage;
}());



/***/ })

}]);
//# sourceMappingURL=editvindata-editvindata-module.js.map