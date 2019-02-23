(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editvindata-editvindata-module"],{

/***/ "../node_modules/ngx-xml2json/fesm5/ngx-xml2json.js":
/*!**********************************************************!*\
  !*** ../node_modules/ngx-xml2json/fesm5/ngx-xml2json.js ***!
  \**********************************************************/
/*! exports provided: NgxXml2jsonService, NgxXml2jsonComponent, NgxXml2jsonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxXml2jsonService", function() { return NgxXml2jsonService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxXml2jsonComponent", function() { return NgxXml2jsonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxXml2jsonModule", function() { return NgxXml2jsonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxXml2jsonService = /** @class */ (function () {
    function NgxXml2jsonService() {
    }
    /**
     * @param {?} xml
     * @return {?}
     */
    NgxXml2jsonService.prototype.xmlToJson = /**
     * @param {?} xml
     * @return {?}
     */
    function (xml) {
        var /** @type {?} */ obj = {};
        if (xml.nodeType === 1) {
            if (xml.attributes.length > 0) {
                obj['@attributes'] = {};
                for (var /** @type {?} */ j = 0; j < xml.attributes.length; j += 1) {
                    var /** @type {?} */ attribute = xml.attributes.item(j);
                    obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
                }
            }
        }
        else if (xml.nodeType === 3) {
            obj = xml.nodeValue;
        }
        if (xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
            obj = xml.childNodes[0].nodeValue;
        }
        else if (xml.hasChildNodes()) {
            for (var /** @type {?} */ i = 0; i < xml.childNodes.length; i += 1) {
                var /** @type {?} */ item = xml.childNodes.item(i);
                var /** @type {?} */ nodeName = item.nodeName;
                if (typeof (obj[nodeName]) === 'undefined') {
                    obj[nodeName] = this.xmlToJson(item);
                }
                else {
                    if (typeof (obj[nodeName].push) === 'undefined') {
                        var /** @type {?} */ old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(this.xmlToJson(item));
                }
            }
        }
        return obj;
    };
    NgxXml2jsonService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NgxXml2jsonService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxXml2jsonService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function NgxXml2jsonService_Factory() { return new NgxXml2jsonService(); }, token: NgxXml2jsonService, providedIn: "root" });
    return NgxXml2jsonService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxXml2jsonComponent = /** @class */ (function () {
    function NgxXml2jsonComponent() {
    }
    /**
     * @return {?}
     */
    NgxXml2jsonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    NgxXml2jsonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'lib-ngx-xml2json',
                    template: "\n    <p>\n      Ngx-xml2json\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    NgxXml2jsonComponent.ctorParameters = function () { return []; };
    return NgxXml2jsonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxXml2jsonModule = /** @class */ (function () {
    function NgxXml2jsonModule() {
    }
    NgxXml2jsonModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [],
                    declarations: [NgxXml2jsonComponent],
                    exports: [NgxXml2jsonComponent]
                },] },
    ];
    return NgxXml2jsonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXhtbDJqc29uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gteG1sMmpzb24vbGliL25neC14bWwyanNvbi5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gteG1sMmpzb24vbGliL25neC14bWwyanNvbi5jb21wb25lbnQudHMiLCJuZzovL25neC14bWwyanNvbi9saWIvbmd4LXhtbDJqc29uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFhtbDJqc29uU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICB4bWxUb0pzb24oeG1sKSB7XG5cbiAgICBsZXQgb2JqID0ge307XG5cbiAgICBpZiAoeG1sLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBpZiAoeG1sLmF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBvYmpbJ0BhdHRyaWJ1dGVzJ10gPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB4bWwuYXR0cmlidXRlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IHhtbC5hdHRyaWJ1dGVzLml0ZW0oaik7XG4gICAgICAgICAgb2JqWydAYXR0cmlidXRlcyddW2F0dHJpYnV0ZS5ub2RlTmFtZV0gPSBhdHRyaWJ1dGUubm9kZVZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh4bWwubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgIG9iaiA9IHhtbC5ub2RlVmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHhtbC5oYXNDaGlsZE5vZGVzKCkgJiYgeG1sLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICYmIHhtbC5jaGlsZE5vZGVzWzBdLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICBvYmogPSB4bWwuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWU7XG4gICAgfSBlbHNlIGlmICh4bWwuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHhtbC5jaGlsZE5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB4bWwuY2hpbGROb2Rlcy5pdGVtKGkpO1xuICAgICAgICBjb25zdCBub2RlTmFtZSA9IGl0ZW0ubm9kZU5hbWU7XG4gICAgICAgIGlmICh0eXBlb2YgKG9ialtub2RlTmFtZV0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIG9ialtub2RlTmFtZV0gPSB0aGlzLnhtbFRvSnNvbihpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZW9mIChvYmpbbm9kZU5hbWVdLnB1c2gpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc3Qgb2xkID0gb2JqW25vZGVOYW1lXTtcbiAgICAgICAgICAgIG9ialtub2RlTmFtZV0gPSBbXTtcbiAgICAgICAgICAgIG9ialtub2RlTmFtZV0ucHVzaChvbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvYmpbbm9kZU5hbWVdLnB1c2godGhpcy54bWxUb0pzb24oaXRlbSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5neC14bWwyanNvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBOZ3gteG1sMmpzb25cbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmd4WG1sMmpzb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4WG1sMmpzb25Db21wb25lbnQgfSBmcm9tICcuL25neC14bWwyanNvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05neFhtbDJqc29uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW05neFhtbDJqc29uQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hYbWwyanNvbk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQU9FO0tBQWlCOzs7OztJQUVqQixzQ0FBUzs7OztJQUFULFVBQVUsR0FBRztRQUVYLHFCQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFFYixJQUFJLEdBQUcsQ0FBQyxRQUFRLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN4QixLQUFLLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2pELHFCQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO2lCQUM5RDthQUNGO1NBQ0Y7YUFBTSxJQUFJLEdBQUcsQ0FBQyxRQUFRLEtBQUssQ0FBQyxFQUFFO1lBQzdCLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtZQUMxRixHQUFHLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7U0FDbkM7YUFBTSxJQUFJLEdBQUcsQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUM5QixLQUFLLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pELHFCQUFNLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMscUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQy9CLElBQUksUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxXQUFXLEVBQUU7b0JBQzFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0QztxQkFBTTtvQkFDTCxJQUFJLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLFdBQVcsRUFBRTt3QkFDL0MscUJBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDMUIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDekI7b0JBQ0QsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQzFDO2FBQ0Y7U0FDRjtRQUNELE9BQU8sR0FBRyxDQUFDO0tBQ1o7O2dCQTFDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs2QkFKRDs7Ozs7OztBQ0FBO0lBYUU7S0FBaUI7Ozs7SUFFakIsdUNBQVE7OztJQUFSLGVBQWE7O2dCQWJkLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsNkNBSVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7K0JBVkQ7Ozs7Ozs7QUNBQTs7OztnQkFHQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNoQzs7NEJBUkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _editvindata_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editvindata.page */ "./src/app/editvindata/editvindata.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");










var EditvindataPageModule = /** @class */ (function () {
    function EditvindataPageModule() {
    }
    EditvindataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{vinData.DAT_NAME_MARKE}}\n      {{vinData.DAT_NAME_MODELL_D}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <mat-card>\n    <mat-card-content>\n      <form class=\"example-form\"  (ngSubmit)=\"test()\" [formGroup]=\"vinDataForm\" novalidate>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Fahrgestellnummer</mat-label>\n          <input matInput placeholder=\"VIN\" [formControl]=\"ANZEIGE_FAHRGESTELLNUMMER\"  >\n          <mat-hint>VIN</mat-hint>\n          <mat-error *ngIf=\"ANZEIGE_FAHRGESTELLNUMMER.hasError('required')\">\n            VIN is required.\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Kilometerstand</mat-label>\n          <input matInput placeholder=\"Kilometerstand\" [formControl]=\"ANZEIGE_KMSTAND\"    >\n          <mat-hint>KMSTAND</mat-hint>\n          <mat-error *ngIf=\"ANZEIGE_KMSTAND.hasError('required')\">\n            KMSTAND is required.\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>VIN</mat-label>\n          <input matInput placeholder=\"Erstzulassung\" [formControl]=\"ANZEIGE_EZ\"    >\n          <mat-hint>EZ</mat-hint>\n          <mat-error *ngIf=\"ANZEIGE_EZ.hasError('required')\">\n            ANZEIGE_EZ is required.\n          </mat-error>\n        </mat-form-field>\n\n\n        <div>\n          <button mat-raised-button color=\"warn\" class=\"f\" style=\"width:100%\"  type=\"submit\">Daten Senden</button>\n        </div>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</ion-content>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _services_web_mobil24_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/web-mobil24-service.service */ "./src/app/services/web-mobil24-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var STORAGE_KEY = 'my_images';
var VinObj = /** @class */ (function () {
    function VinObj(ACHSEN, ANTRIEB, DATECODE, DAT_FZA, DAT_NAME_MARKE, DAT_NAME_MODELL, DAT_NAME_MODELL_D, DAT_NAME_VARIANTE, DAT_NAME_VARIANTE_ZUSATZ, ZYLINDER, GESAMTGEWICHT, GETRIEBE, HUBRAUM, ID, KATEGORIE, KRAFTSTOFF, LEISTUNG, MARKE_ID, MARKE_NAME_D, MOTOR, NAME, RADSTAND, TUEREN, VINFARBCODE, VINFARBE, VINFARBID, VINFARBMETALLIC, ANZEIGE_BEMERKUNG, ANZEIGE_BEMERKUNG_ALL, SONDERAUSSTATTUNGEN, VINAUSSTATTUNGEN, VINSONDERAUSSTATTUNGEN, VINSONSTIGES, AUSSTATTUNGEN) {
        this.ACHSEN = ACHSEN;
        this.ANTRIEB = ANTRIEB;
        this.DATECODE = DATECODE;
        this.DAT_FZA = DAT_FZA;
        this.DAT_NAME_MARKE = DAT_NAME_MARKE;
        this.DAT_NAME_MODELL = DAT_NAME_MODELL;
        this.DAT_NAME_MODELL_D = DAT_NAME_MODELL_D;
        this.DAT_NAME_VARIANTE = DAT_NAME_VARIANTE;
        this.DAT_NAME_VARIANTE_ZUSATZ = DAT_NAME_VARIANTE_ZUSATZ;
        this.ZYLINDER = ZYLINDER;
        this.GESAMTGEWICHT = GESAMTGEWICHT;
        this.GETRIEBE = GETRIEBE;
        this.HUBRAUM = HUBRAUM;
        this.ID = ID;
        this.KATEGORIE = KATEGORIE;
        this.KRAFTSTOFF = KRAFTSTOFF;
        this.LEISTUNG = LEISTUNG;
        this.MARKE_ID = MARKE_ID;
        this.MARKE_NAME_D = MARKE_NAME_D;
        this.MOTOR = MOTOR;
        this.NAME = NAME;
        this.RADSTAND = RADSTAND;
        this.TUEREN = TUEREN;
        this.VINFARBCODE = VINFARBCODE;
        this.VINFARBE = VINFARBE;
        this.VINFARBID = VINFARBID;
        this.VINFARBMETALLIC = VINFARBMETALLIC;
        this.ANZEIGE_BEMERKUNG = ANZEIGE_BEMERKUNG;
        this.ANZEIGE_BEMERKUNG_ALL = ANZEIGE_BEMERKUNG_ALL;
        this.SONDERAUSSTATTUNGEN = SONDERAUSSTATTUNGEN;
        this.VINAUSSTATTUNGEN = VINAUSSTATTUNGEN;
        this.VINSONDERAUSSTATTUNGEN = VINSONDERAUSSTATTUNGEN;
        this.VINSONSTIGES = VINSONSTIGES;
        this.AUSSTATTUNGEN = AUSSTATTUNGEN;
    }
    return VinObj;
}());
var EditvindataPage = /** @class */ (function () {
    function EditvindataPage(webMobil24ServiceService, router, route, frmBuilder) {
        var _this = this;
        this.webMobil24ServiceService = webMobil24ServiceService;
        this.router = router;
        this.route = route;
        this.frmBuilder = frmBuilder;
        this.vinData = new VinObj('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', [], [], [], [], [], [], []);
        this.createForm();
        this.webMobil24ServiceService.fetchVinData('111')
            .then(function (res) {
            Object.assign(_this.vinData, _this.webMobil24ServiceService.vinData);
            _this.createForm();
            _this.makeView();
        }, function (msg) { return false; });
    }
    EditvindataPage.prototype.ngOnInit = function () {
        var _this = this;
        this.vinData = new VinObj('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', [], [], [], [], [], [], []);
        this.createForm();
        this.webMobil24ServiceService.fetchVinData('111')
            .then(function (res) {
            Object.assign(_this.vinData, _this.webMobil24ServiceService.vinData);
            _this.createForm();
            _this.makeView();
        }, function (msg) { return false; });
    };
    Object.defineProperty(EditvindataPage.prototype, "vinData", {
        get: function () {
            return this._vinData;
        },
        set: function (value) {
            this._vinData = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditvindataPage.prototype, "ANZEIGE_FAHRGESTELLNUMMER", {
        get: function () { return this.vinDataForm.get('ANZEIGE_FAHRGESTELLNUMMER'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditvindataPage.prototype, "ANZEIGE_KMSTAND", {
        get: function () { return this.vinDataForm.get('ANZEIGE_KMSTAND'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditvindataPage.prototype, "ANZEIGE_EZ", {
        get: function () { return this.vinDataForm.get('ANZEIGE_EZ'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditvindataPage.prototype, "VINAUSSTATTUNGEN", {
        get: function () { return this.vinDataForm.get('VINAUSSTATTUNGEN'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditvindataPage.prototype, "VINSONDERAUSSTATTUNGEN", {
        get: function () { return this.vinDataForm.get('VINSONDERAUSSTATTUNGEN'); },
        enumerable: true,
        configurable: true
    });
    EditvindataPage.prototype.createForm = function () {
        if (this.vinData.VINAUSSTATTUNGEN.length > 0) {
            var VINAUSSTATTUNGEN_vals = this.vinData.VINAUSSTATTUNGEN;
            var _VINAUSSTATTUNGEN = this.vinData.VINAUSSTATTUNGEN.map(function (c) {
                return { name: c, id: c, value: c };
            });
            var _VINSONDERAUSSTATTUNGEN = this.vinData.VINSONDERAUSSTATTUNGEN.map(function (c) {
                return { name: c, id: c, value: c };
            });
            this.vinDataForm = this.frmBuilder.group({
                ANZEIGE_FAHRGESTELLNUMMER: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                ANZEIGE_KMSTAND: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                ANZEIGE_EZ: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                VINAUSSTATTUNGEN: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"](_VINAUSSTATTUNGEN.map(function (c) { return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false); })),
                VINSONDERAUSSTATTUNGEN: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"](_VINSONDERAUSSTATTUNGEN.map(function (c) { return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false); }))
            });
        }
        else {
            var _VINAUSSTATTUNGEN = [1, 2, 3, 4].map(function (c) {
                // return { name: c , selected: false, id: c, value: c } ;
                var b = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false);
                b.setValue(c);
                return b;
            });
            var _VINSONDERAUSSTATTUNGEN = [1, 2, 3, 4].map(function (c) {
                var b = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false);
                b.setValue(c);
                return b;
            });
            this.vinDataForm = this.frmBuilder.group({
                ANZEIGE_FAHRGESTELLNUMMER: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                ANZEIGE_KMSTAND: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                ANZEIGE_EZ: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                VINAUSSTATTUNGEN: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"](_VINAUSSTATTUNGEN),
                VINSONDERAUSSTATTUNGEN: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"](_VINSONDERAUSSTATTUNGEN)
            });
        }
        console.log(this.vinDataForm);
    };
    EditvindataPage.prototype.onSubmit = function () {
        if (this.vinDataForm.valid) {
            console.log('Form Submitted!');
            this.vinDataForm.reset();
        }
    };
    EditvindataPage.prototype.makeView = function () {
        console.log(this.vinData);
    };
    EditvindataPage.prototype.test = function () {
        if (this.vinDataForm.status == "VALID") {
            this.webMobil24ServiceService.storeVehicleData(this.vinDataForm.value);
        }
    };
    EditvindataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editvindata',
            template: __webpack_require__(/*! ./editvindata.page.html */ "./src/app/editvindata/editvindata.page.html"),
            styles: [__webpack_require__(/*! ./editvindata.page.scss */ "./src/app/editvindata/editvindata.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_web_mobil24_service_service__WEBPACK_IMPORTED_MODULE_2__["WebMobil24ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EditvindataPage);
    return EditvindataPage;
}());



/***/ }),

/***/ "./src/app/services/web-mobil24-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/web-mobil24-service.service.ts ***!
  \*********************************************************/
/*! exports provided: WebMobil24ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebMobil24ServiceService", function() { return WebMobil24ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _webservicecalls_webservicecalls_tokenmanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webservicecalls/webservicecalls.tokenmanager */ "./src/app/webservicecalls/webservicecalls.tokenmanager.ts");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-xml2json */ "../node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");





var CANZEIGE_ID = /** @class */ (function () {
    function CANZEIGE_ID(ANZEIGE_ID) {
        this.ANZEIGE_ID = ANZEIGE_ID;
    }
    return CANZEIGE_ID;
}());
var VinData = /** @class */ (function () {
    function VinData() {
    }
    return VinData;
}());
var VinDataEdited = /** @class */ (function () {
    function VinDataEdited() {
    }
    return VinDataEdited;
}());
var WebMobil24ServiceService = /** @class */ (function () {
    function WebMobil24ServiceService(http, ngxXml2jsonService) {
        this.http = http;
        this.ngxXml2jsonService = ngxXml2jsonService;
    }
    WebMobil24ServiceService_1 = WebMobil24ServiceService;
    Object.defineProperty(WebMobil24ServiceService.prototype, "vinData", {
        get: function () {
            return this._vinData;
        },
        set: function (value) {
            this._vinData = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebMobil24ServiceService.prototype, "ANZEIGE_ID", {
        get: function () {
            return this._ANZEIGE_ID;
        },
        set: function (value) {
            this._ANZEIGE_ID = value;
        },
        enumerable: true,
        configurable: true
    });
    WebMobil24ServiceService.prototype.fetchVinData = function (vin) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fnGetToken(vin).then(function () { return _this.vinData; }, function () { return false; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    WebMobil24ServiceService.prototype.setToken = function (token) {
        var tm = new _webservicecalls_webservicecalls_tokenmanager__WEBPACK_IMPORTED_MODULE_3__["WebservicecallsTokenanager"]();
        tm.storeWM24OcToken(token);
        this.token = token;
    };
    WebMobil24ServiceService.prototype.fnGetToken = function (vin) {
        var _this = this;
        var that = this;
        var promiseOuter = new Promise(function (resolve, reject) {
            var tm = new _webservicecalls_webservicecalls_tokenmanager__WEBPACK_IMPORTED_MODULE_3__["WebservicecallsTokenanager"]();
            // tm.retrieve_wm24_login_datas();
            var promiseInner = tm.retrieve_wm24_login_datas().then(function (res) {
                var clog = res.wm24_dealer_login + "#" + res.token;
                var VIN = 'WBA5J71060D698498';
                var NEU = '1';
                var KundenFIN = '0';
                var _params3 = { 'clog': clog, 'VIN': VIN, 'NEU': NEU, 'KundenFIN': KundenFIN };
                var apiURL = "" + WebMobil24ServiceService_1.TOKEN_Url; // ?clog=${clog}&VIN=${VIN}&NEU=${NEU}&KundenFIN=${KundenFIN}`;
                console.log(apiURL);
                _this.http.get(apiURL, {
                    params: _params3
                })
                    .toPromise()
                    .then(function (res) {
                    tm.store_vin_data(VIN, res);
                    tm.get_vin_data(VIN)
                        .then(function (res) { return true; }, function (msg) { return false; });
                    var parser = new DOMParser();
                    var xml = parser.parseFromString(res, 'text/xml');
                    var obj = new VinData();
                    Object.assign(obj, _this.ngxXml2jsonService.xmlToJson(xml));
                    var parser2 = new DOMParser();
                    var obj2 = new VinDataEdited();
                    Object.assign(obj2, {
                        'root': {
                            ACHSEN: obj.root.ACHSEN,
                            ANTRIEB: obj.root.ANTRIEB,
                            DATECODE: obj.root.DATECODE,
                            DAT_FZA: obj.root.DAT_FZA,
                            DAT_NAME_MARKE: obj.root.DAT_NAME_MARKE,
                            DAT_NAME_MODELL: obj.root.DAT_NAME_MODELL,
                            DAT_NAME_MODELL_D: obj.root.DAT_NAME_MODELL_D,
                            DAT_NAME_VARIANTE: obj.root.DAT_NAME_VARIANTE,
                            DAT_NAME_VARIANTE_ZUSATZ: obj.root.DAT_NAME_VARIANTE_ZUSATZ,
                            ZYLINDER: obj.root.ZYLINDER,
                            GESAMTGEWICHT: obj.root.GESAMTGEWICHT,
                            GETRIEBE: obj.root.GETRIEBE,
                            HUBRAUM: obj.root.HUBRAUM,
                            ID: obj.root.ID,
                            KATEGORIE: obj.root.KATEGORIE,
                            KRAFTSTOFF: obj.root.KRAFTSTOFF,
                            LEISTUNG: obj.root.LEISTUNG,
                            MARKE_ID: obj.root.MARKE_ID,
                            MARKE_NAME_D: obj.root.MARKE_NAME_D,
                            MOTOR: obj.root.MOTOR,
                            NAME: obj.root.NAME,
                            RADSTAND: obj.root.RADSTAND,
                            TUEREN: obj.root.TUEREN,
                            VINFARBCODE: obj.root.VINFARBCODE,
                            VINFARBE: obj.root.VINFARBE,
                            VINFARBID: obj.root.VINFARBID,
                            VINFARBMETALLIC: obj.root.VINFARBMETALLIC,
                            AUSSTATTUNGEN: obj.root.AUSSTATTUNGEN.split('|'),
                            SONDERAUSSTATTUNGEN: obj.root.SONDERAUSSTATTUNGEN.split('|'),
                            VINSONDERAUSSTATTUNGEN: obj.root.VINSONDERAUSSTATTUNGEN.split('|'),
                            VINAUSSTATTUNGEN: obj.root.VINAUSSTATTUNGEN.split('|'),
                            VINSONSTIGES: obj.root.VINSONSTIGES.split('|'),
                            ANZEIGE_BEMERKUNG: obj.root.ANZEIGE_BEMERKUNG.split('|'),
                            ANZEIGE_BEMERKUNG_ALL: obj.root.ANZEIGE_BEMERKUNG_ALL.split('|'),
                        }
                    });
                    that.vinData = obj2.root;
                    _this.setToken(res);
                    resolve();
                }, function (msg) {
                    console.log(msg);
                    reject();
                });
            }, function (msg) {
                return false;
            });
        });
        return promiseOuter.then(function (res) {
            return _this.vinData;
        }, function (msg) { return false; });
    };
    WebMobil24ServiceService.prototype.storeVehicleData = function (vehicleData) {
        var _this = this;
        console.log(vehicleData);
        var promiseOuter = new Promise(function (resolve, reject) {
            var tm = new _webservicecalls_webservicecalls_tokenmanager__WEBPACK_IMPORTED_MODULE_3__["WebservicecallsTokenanager"]();
            // tm.retrieve_wm24_login_datas();
            var promiseInner = tm.retrieve_wm24_login_datas().then(function (res) {
                var clog = res.wm24_dealer_login + "%23" + res.token;
                vehicleData.clog = clog;
                var apiURL = "" + WebMobil24ServiceService_1.CREATE_AD;
                var vinDatas = _this.vinData;
                vinDatas.clog = clog;
                vinDatas.ANZEIGE_EZ = vehicleData.ANZEIGE_EZ;
                vinDatas.ANZEIGE_KMSTAND = vehicleData.ANZEIGE_KMSTAND;
                vinDatas.ANZEIGE_FAHRGESTELLNUMMER = 'WBA5J71060D698498'; // vehicleData.ANZEIGE_FAHRGESTELLNUMMER;
                vinDatas.VINAUSSTATTUNGEN = vehicleData.VINAUSSTATTUNGEN.join('|');
                vinDatas.VINSONDERAUSSTATTUNGEN = vehicleData.VINSONDERAUSSTATTUNGEN.join('|');
                vinDatas.AUSSTATTUNGEN = _this.vinData.AUSSTATTUNGEN.join('|');
                vinDatas.SONDERAUSSTATTUNGEN = _this.vinData.SONDERAUSSTATTUNGEN.join('|');
                vinDatas.VINSONSTIGES = _this.vinData.VINSONSTIGES.join('|');
                vinDatas.ANZEIGE_BEMERKUNG = _this.vinData.ANZEIGE_BEMERKUNG.join('|');
                vinDatas.ANZEIGE_BEMERKUNG_ALL = _this.vinData.ANZEIGE_BEMERKUNG_ALL.join('|');
                _this.http.post(apiURL, JSON.stringify(vinDatas))
                    .toPromise()
                    .then(function (res) {
                }, function (msg) { console.log(msg); });
            }, function (msg) {
                console.log(msg);
            });
        });
    };
    WebMobil24ServiceService.prototype.fnDetectVin = function (base64img) {
        var _this = this;
        var that = this;
        var promiseOuter = new Promise(function (resolve, reject) {
            var apiURL = "" + WebMobil24ServiceService_1.IMG_UPLOAD;
            var tm = new _webservicecalls_webservicecalls_tokenmanager__WEBPACK_IMPORTED_MODULE_3__["WebservicecallsTokenanager"]();
            // tm.retrieve_wm24_login_datas();
            var promiseInner = tm.retrieve_wm24_login_datas().then(function (res) {
                var clog = res.wm24_dealer_login + "%23" + res.token;
                var _params3 = {
                    'HAENDLER_ID': res.wm24_dealer_login + "%23" + res.token,
                    'clog': "" + res.wm24_dealer_id,
                    'ANZEIGE_ID': base64img.get('ANZEIGE_ID'),
                    'base64img': base64img.get('file')
                };
                _this.http.post(apiURL, JSON.stringify(_params3))
                    .toPromise()
                    .then(function (res) {
                    console.log(res);
                    //this.ANZEIGE_ID  =   res ;
                    resolve();
                }, function (msg) {
                    console.log(msg);
                    reject();
                });
            }, function (msg) {
                console.log(msg);
                return false;
            });
            return promiseInner;
        });
        return promiseOuter.then(function () { return _this.ANZEIGE_ID; }, function () { return false; });
    };
    var WebMobil24ServiceService_1;
    WebMobil24ServiceService.TOKEN_Url = '/web/de/secure/start/index.php';
    WebMobil24ServiceService.CREATE_AD = '/scanfin/create_ad.php';
    WebMobil24ServiceService.IMG_UPLOAD = '/scanfin/bilder_upload.php';
    WebMobil24ServiceService = WebMobil24ServiceService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_xml2json__WEBPACK_IMPORTED_MODULE_4__["NgxXml2jsonService"]])
    ], WebMobil24ServiceService);
    return WebMobil24ServiceService;
}());



/***/ })

}]);
//# sourceMappingURL=editvindata-editvindata-module.js.map