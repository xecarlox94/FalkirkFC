"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("typegoose");
const team_1 = require("models/squad/team");
const match_1 = require("models/match/match");
class Round extends typegoose_1.Typegoose {
}
__decorate([
    typegoose_1.prop()
], Round.prototype, "number", void 0);
__decorate([
    typegoose_1.arrayProp({ itemsRef: match_1.Match })
], Round.prototype, "matches", void 0);
exports.Round = Round;
class Competition extends typegoose_1.Typegoose {
}
__decorate([
    typegoose_1.arrayProp({ itemsRef: team_1.default })
], Competition.prototype, "teams", void 0);
__decorate([
    typegoose_1.prop({ ref: team_1.default })
], Competition.prototype, "winner", void 0);
exports.Competition = Competition;
//# sourceMappingURL=competition.js.map