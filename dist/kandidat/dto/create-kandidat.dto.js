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
exports.CreateKandidatDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateKandidatDto {
}
exports.CreateKandidatDto = CreateKandidatDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Brama Mahendra',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 25),
    (0, class_validator_1.MaxLength)(25),
    __metadata("design:type", String)
], CreateKandidatDto.prototype, "nama", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/photo.jpg',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateKandidatDto.prototype, "foto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'image/jpeg',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(191),
    __metadata("design:type", String)
], CreateKandidatDto.prototype, "foto_mime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2048,
        required: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateKandidatDto.prototype, "foto_size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Biography of the candidate',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateKandidatDto.prototype, "biografi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        required: true
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateKandidatDto.prototype, "id_partai", void 0);
//# sourceMappingURL=create-kandidat.dto.js.map