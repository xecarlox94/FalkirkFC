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
class MatchEvent extends typegoose_1.Typegoose {
}
exports.MatchEvent = MatchEvent;
class Match extends typegoose_1.Typegoose {
}
__decorate([
    typegoose_1.prop({ ref: team_1.default, required: true })
], Match.prototype, "home", void 0);
__decorate([
    typegoose_1.prop({ ref: team_1.default, required: true })
], Match.prototype, "away", void 0);
__decorate([
    typegoose_1.arrayProp({ itemsRef: MatchEvent })
], Match.prototype, "event", void 0);
__decorate([
    typegoose_1.prop({ required: true, min: 0, default: 0 })
], Match.prototype, "homeScore", void 0);
__decorate([
    typegoose_1.prop({ required: true, min: 0, default: 0 })
], Match.prototype, "awayScore", void 0);
__decorate([
    typegoose_1.prop({ required: true })
], Match.prototype, "time", void 0);
exports.Match = Match;
//# sourceMappingURL=match.js.map