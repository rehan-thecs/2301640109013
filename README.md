# 🔗 Shortly — URL Shortener & Analytics

📌 **Affordmed Full-Stack Assessment Project**  
Roll No: **2301640109013**  
Name: **Rehan**

---

## 🚀 Features

- 🌐 **Backend**
  - `POST /shortUrls` → create short URL
  - `GET /:shortcode` → redirect to original URL
  - `GET /shortUrls/:shortcode` → statistics (clicks, expiry)
  - Expiry (default **30 mins**) + optional custom shortcode
  - Tracks clicks: timestamp, referrer, IP

- 💻 **Frontend**
  - React + Material UI
  - Shorten up to **5 URLs at once**
  - Modern responsive UI
  - Stats view with click history

- 📝 **Logging Middleware**
  - `Log(stack, level, package, message)`
  - Logs sent to Affordmed:
    ```
    POST http://20.244.56.144/evaluation-service/logs
    Authorization: Bearer <access_token>
    ```

---

## ⚙️ Setup Guide

<details>
<summary>🔧 Backend Setup</summary>

```bash
cd backend
npm install
cp .env.example .env   # then fill with your creds
npm start
