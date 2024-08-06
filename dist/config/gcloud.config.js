"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bucketName = exports.storage = void 0;
const storage_1 = require("@google-cloud/storage");
exports.storage = new storage_1.Storage({
    projectId: 'pilkada-cloud',
    keyFilename: './pilkada-cloud-dd61ae12b7c8.json',
});
exports.bucketName = 'pilkada-bucket';
//# sourceMappingURL=gcloud.config.js.map