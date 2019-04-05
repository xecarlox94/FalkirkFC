"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("typegoose");
const player_1 = require("./player");
class Team extends typegoose_1.Typegoose {
}
__decorate([
    typegoose_1.prop({ required: true, unique: true })
], Team.prototype, "name", void 0);
__decorate([
    typegoose_1.prop({ ref: player_1.default })
], Team.prototype, "player", void 0);
exports.default = Team;
//# sourceMappingURL=team.js.map