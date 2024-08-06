import { Storage } from '@google-cloud/storage';

export const storage = new Storage({
    projectId: 'pilkada-cloud',
    keyFilename: './pilkada-cloud-dd61ae12b7c8.json',
});

export const bucketName = 'pilkada-bucket';