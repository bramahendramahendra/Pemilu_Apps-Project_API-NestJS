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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Saksi = void 0;
const kandidat_entity_1 = require("../kandidat/kandidat.entity");
const tps_entity_1 = require("../tps/tps.entity");
const typeorm_1 = require("typeorm");
let Saksi = class Saksi {
};
exports.Saksi = Saksi;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], Saksi.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 25,
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        nullable: true
    }),
    __metadata("design:type", String)
], Saksi.prototype, "nama", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 15,
        nullable: true,
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        default: null
    }),
    __metadata("design:type", String)
], Saksi.prototype, "kontak", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], Saksi.prototype, "id_tps", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], Saksi.prototype, "id_kandidat", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        precision: 6,
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP(6)'
    }),
    __metadata("design:type", Date)
], Saksi.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        precision: 6,
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    }),
    __metadata("design:type", Date)
], Saksi.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tps_entity_1.TPS, tps => tps.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_tps' }),
    __metadata("design:type", tps_entity_1.TPS)
], Saksi.prototype, "tps", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => kandidat_entity_1.Kandidat, kandidat => kandidat.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_kandidat' }),
    __metadata("design:type", kandidat_entity_1.Kandidat)
], Saksi.prototype, "kandidat", void 0);
exports.Saksi = Saksi = __decorate([
    (0, typeorm_1.Entity)('saksi')
], Saksi);
//# sourceMappingURL=saksi.entity.js.map