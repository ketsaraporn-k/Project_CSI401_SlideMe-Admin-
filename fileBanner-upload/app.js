const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors'); // นำเข้า CORS

// สร้างแอป Express
const app = express();
const PORT = 3000;

// เปิดใช้งาน CORS
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'], // อนุญาตให้ Origin หลายพอร์ต
  methods: ['GET', 'POST'],        // ระบุวิธีที่อนุญาต
}));

// กำหนดที่เก็บไฟล์และตั้งชื่อไฟล์
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // ไฟล์จะถูกเก็บในโฟลเดอร์ uploads
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  }
});

// กำหนด middleware สำหรับอัปโหลด
const upload = multer({ storage: storage });

// สร้างโฟลเดอร์ uploads หากยังไม่มี
const fs = require('fs');
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

// สร้าง API สำหรับ upload ไฟล์
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('กรุณาอัปโหลดไฟล์');
  }
  res.status(200).json({
    message: 'อัปโหลดสำเร็จ',
    filePath: `/uploads/${req.file.filename}`
  });
});

// ทำให้โฟลเดอร์ uploads สามารถเข้าถึงได้จากภายนอก
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
