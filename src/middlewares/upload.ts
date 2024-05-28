import multer from 'multer';
import { Request } from 'express';

const storage = multer.diskStorage({
  destination: function (req: Request, file, cb) {
    cb(null, 'uploads/'); // Define the destination folder where files will be stored
  },
  filename: function (req: Request, file:Express.Multer.File, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = file.originalname.split('.').pop();
    cb(null, uniqueSuffix + '.' + fileExtension); // Define the file name
  },
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });

export default upload;
