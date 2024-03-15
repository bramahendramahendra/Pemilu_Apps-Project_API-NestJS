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
exports.TPS = void 0;
const kelurahan_entity_1 = require("../kelurahan/kelurahan.entity");
const typeorm_1 = require("typeorm");
let TPS = class TPS {
};
exports.TPS = TPS;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], TPS.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], TPS.prototype, "id_kelurahan", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 25, charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        nullable: true,
        default: null
    }),
    __metadata("design:type", String)
], TPS.prototype, "nama", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        nullable: true
    }),
    __metadata("design:type", String)
], TPS.prototype, "alamat", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        precision: 6,
        nullable: true,
        default: () => 'NULL',
    }),
    __metadata("design:type", Date)
], TPS.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        precision: 6,
        nullable: true,
        default: () => 'NULL',
    }),
    __metadata("design:type", Date)
], TPS.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => kelurahan_entity_1.Kelurahan, kelurahan => kelurahan.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_kelurahan' }),
    __metadata("design:type", kelurahan_entity_1.Kelurahan)
], TPS.prototype, "kelurahan", void 0);
exports.TPS = TPS = __decorate([
    (0, typeorm_1.Entity)('tps')
], TPS);
//# sourceMappingURL=tps.entity.js.map