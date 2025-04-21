# 戀愛王國完整版動態網站
包含：
- 前端：client（React 架構）
- 後端：server（Node.js + MongoDB）
- 功能：登入、註冊、VIP 升級、聊天、假帳配對、條件搜尋、金流測試串接（Stripe）

## 使用方式：
1. 將 client 上傳至 GitHub，並用 Vercel 部署
2. 將 server 上傳至 Render 或 Railway，設定環境變數（Mongo URI、Stripe Key）
3. 完成部署後前端記得設定 REACT_APP_API_URL 指向你的後端網址
