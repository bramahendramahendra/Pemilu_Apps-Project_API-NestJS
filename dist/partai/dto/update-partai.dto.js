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
exports.UpdatePartaiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const create_partai_dto_1 = require("./create-partai.dto");
class UpdatePartaiDto extends (0, mapped_types_1.PartialType)(create_partai_dto_1.CreatePartaiDto) {
}
exports.UpdatePartaiDto = UpdatePartaiDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Partai XYZ',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 25),
    (0, class_validator_1.MaxLength)(25),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePartaiDto.prototype, "nama", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/logo.jpg',
        required: false,
        format: 'binary',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdatePartaiDto.prototype, "logo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Description of the party',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePartaiDto.prototype, "deskripsi", void 0);
//# sourceMappingURL=update-partai.dto.js.map