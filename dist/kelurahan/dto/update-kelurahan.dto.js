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
exports.UpdateKelurahanDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_kelurahan_dto_1 = require("./create-kelurahan.dto");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateKelurahanDto extends (0, mapped_types_1.PartialType)(create_kelurahan_dto_1.CreateKelurahanDto) {
}
exports.UpdateKelurahanDto = UpdateKelurahanDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Ragunan',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 25),
    (0, class_validator_1.MaxLength)(25),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateKelurahanDto.prototype, "nama", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        required: false
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateKelurahanDto.prototype, "id_kecamatan", void 0);
//# sourceMappingURL=update-kelurahan.dto.js.map