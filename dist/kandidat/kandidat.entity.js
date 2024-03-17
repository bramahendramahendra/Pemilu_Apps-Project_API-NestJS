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
exports.Kandidat = void 0;
const partai_entity_1 = require("../partai/partai.entity");
const typeorm_1 = require("typeorm");
let Kandidat = class Kandidat {
};
exports.Kandidat = Kandidat;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], Kandidat.prototype, "id", void 0);
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
], Kandidat.prototype, "nama", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 2000,
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        nullable: true,
        default: null
    }),
    __metadata("design:type", String)
], Kandidat.prototype, "foto", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 191,
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        nullable: true,
        default: null
    }),
    __metadata("design:type", String)
], Kandidat.prototype, "foto_mime", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        nullable: true,
        default: null
    }),
    __metadata("design:type", Number)
], Kandidat.prototype, "foto_size", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        nullable: true,
        default: null
    }),
    __metadata("design:type", String)
], Kandidat.prototype, "biografi", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], Kandidat.prototype, "id_partai", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        precision: 6,
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP(6)'
    }),
    __metadata("design:type", Date)
], Kandidat.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        precision: 6,
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    }),
    __metadata("design:type", Date)
], Kandidat.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => partai_entity_1.Partai, partai => partai.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_partai' }),
    __metadata("design:type", partai_entity_1.Partai)
], Kandidat.prototype, "partai", void 0);
exports.Kandidat = Kandidat = __decorate([
    (0, typeorm_1.Entity)('kandidat')
], Kandidat);
//# sourceMappingURL=kandidat.entity.js.map