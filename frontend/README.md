# CollabKeys 🎯

CollabKeys is a full-stack MERN-based platform designed specifically for the **Artificial Intelligence and Data Science** department of our college. It enables students to register for technical events, access curated learning resources, and explore career paths — all in one place.

---

## ✨ Features

- 👥 Student Registration & Login
- 🔐 JWT-based Authentication (for secure access to events)
- 📅 Vertical Timeline showcasing past & upcoming events
- 🧠 Gemini AI-powered Chatbot for student queries
- 🎓 Career Paths and curated YouTube playlists
- 📚 Resources including notes, materials, and links
- 🖼️ Home page with gallery & event highlights
- 📬 Password reset via email
- 🎉 Public pages: Home, About, Career Path, Resources, Team

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- HTML, CSS
- Axios
- React Router
- React Vertical Timeline

**Backend:**
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Nodemailer / EmailJS for email services

**AI & Extras:**
- Gemini API (Google's AI) for chatbot responses

---

## 🚀 Getting Started

### 🔗 Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- npm or yarn

---

### 📁 Folder Structure

root/
├── frontend/
├── backend/
├── README.md
└── .gitignore


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/collabkeys.git
cd collabkeys

2️⃣ Backend Setup
cd backend
npm install

**Create .env file inside /backend:**
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email_service_user
EMAIL_PASS=your_email_service_password
GEMINI_API_KEY=your_gemini_api_key

then run
 node server.js

**3️⃣ Frontend Setup**
cd frontend
npm install
npm start

The React app will be available at:
👉 http://localhost:3000



