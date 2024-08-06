"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerConfig = void 0;
const multer_1 = require("multer");
const uuid_1 = require("uuid");
const path_1 = require("path");
exports.multerConfig = {
    storage: (0, multer_1.diskStorage)({
        destination: (0, path_1.join)(__dirname, '..', '..', 'uploads'),
        filename: (req, file, callback) => {
            const fileExtName = file.originalname.split('.').pop();
            const randomName = (0, uuid_1.v4)();
            callback(null, `${randomName}.${fileExtName}`);
        },
    }),
};
//# sourceMappingURL=multer.config.js.map