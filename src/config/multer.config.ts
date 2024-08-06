import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { join } from 'path';

export const multerConfig = {
    storage: diskStorage({
        destination: join(__dirname, '..', '..', 'uploads'), // Adjust the path as necessary
        
        // console.log(join(__dirname, '..', '..', 'uploads'));
        filename: (req, file, callback) => {
            const fileExtName = file.originalname.split('.').pop();
            const randomName = uuidv4(); // Generate a random name for the file
            callback(null, `${randomName}.${fileExtName}`);
        },
    }),
};