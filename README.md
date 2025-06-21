# 🏌️‍♂️ BLW Golf Club Registration Portal

Welcome to the **BLW Golf Club** full-stack registration portal — a web-based application to register, manage, and view golf club member details. This system includes a **user dashboard**, **admin panel**, **authentication system**, and **course info display**, built using the **MERN** stack (MongoDB, Express, React, Node.js).

---

## 🚀 Features

### 👤 User
- Register with personal, family, and golf-related information
- Upload profile photo (Cloudinary integration)
- View and print own registration details
- JWT-based login with Aadhaar authentication
- Logout functionality

### 🛠️ Admin
- Secure admin login
- View all registered members
- Update or delete user information
- Separate admin dashboard

---

## 🧰 Tech Stack

| Tech          | Description                                |
|---------------|--------------------------------------------|
| React + Vite  | Frontend UI                                |
| Tailwind CSS  | Styling and layout                         |
| Node.js + Express | Backend REST APIs                    |
| MongoDB + Mongoose | Database (hosted on MongoDB Atlas) |
| JWT           | Authentication and route protection         |
| Cloudinary    | Image upload and hosting                    |
| Axios         | API calls between frontend and backend      |

---

## 📁 Folder Structure

BLW-Golf-Club/
├── client/ # React frontend
│ ├── pages/
│ ├── components/
│ └── ...
├── server/ # Node.js backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── ...
└── README.md
