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
exports.CreatePartaiDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePartaiDto {
}
exports.CreatePartaiDto = CreatePartaiDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Partai XYZ',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 25),
    (0, class_validator_1.MaxLength)(25),
    __metadata("design:type", String)
], CreatePartaiDto.prototype, "nama", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/logo.jpg',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePartaiDto.prototype, "logo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'image/jpeg',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(191),
    __metadata("design:type", String)
], CreatePartaiDto.prototype, "logo_mime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2048,
        required: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreatePartaiDto.prototype, "logo_size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Description of the party',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePartaiDto.prototype, "deskripsi", void 0);
//# sourceMappingURL=create-partai.dto.js.map