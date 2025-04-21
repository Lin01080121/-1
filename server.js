
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());

// MongoDB 連線
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('已連線至 MongoDB'))
.catch(err => console.error('MongoDB 連線錯誤:', err));

// JWT 驗證中介層
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// 測試 API
app.get('/', (req, res) => {
    res.send('戀愛王國伺服器已啟動！');
});

app.listen(port, () => {
    console.log(`伺服器正在 http://localhost:${port} 上運行`);
});
