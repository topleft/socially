"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('reflect-metadata');
var core_1 = require('@angular/core');
var angular2_meteor_auto_bootstrap_1 = require('angular2-meteor-auto-bootstrap');
var parties_ts_1 = require('../collections/parties.ts');
var parties_form_1 = require('./imports/parties-form/parties-form');
var Socially = (function () {
    function Socially() {
        this.parties = parties_ts_1.Parties.find();
    }
    Socially.prototype.removeParty = function (party) {
        parties_ts_1.Parties.remove(party._id);
    };
    Socially = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/client/app.html',
            directives: [parties_form_1.PartiesForm]
        }), 
        __metadata('design:paramtypes', [])
    ], Socially);
    return Socially;
}());
angular2_meteor_auto_bootstrap_1.bootstrap(Socially);
