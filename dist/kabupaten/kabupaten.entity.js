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
exports.Kabupaten = void 0;
const provinsi_entity_1 = require("../provinsi/provinsi.entity");
const typeorm_1 = require("typeorm");
let Kabupaten = class Kabupaten {
};
exports.Kabupaten = Kabupaten;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], Kabupaten.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], Kabupaten.prototype, "id_provinsi", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 25,
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        nullable: true,
        default: null
    }),
    __metadata("design:type", String)
], Kabupaten.prototype, "nama", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        precision: 6,
        nullable: true,
        default: () => 'NULL',
    }),
    __metadata("design:type", Date)
], Kabupaten.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        precision: 6,
        nullable: true,
        default: () => 'NULL',
    }),
    __metadata("design:type", Date)
], Kabupaten.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => provinsi_entity_1.Provinsi, provinsi => provinsi.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_provinsi' }),
    __metadata("design:type", provinsi_entity_1.Provinsi)
], Kabupaten.prototype, "provinsi", void 0);
exports.Kabupaten = Kabupaten = __decorate([
    (0, typeorm_1.Entity)('kabupaten')
], Kabupaten);
//# sourceMappingURL=kabupaten.entity.js.map