import multer from "multer";

const storage = multer.memoryStroage();
export const singleUpload = multer({ storage }).single("file");