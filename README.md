# 📝 Full Stack Task Manager App

This is a full-stack web application built using **React**, **Tailwind CSS**, and **DaisyUI** on the frontend, with **Node.js + MongoDB** handling user authentication and **Django + SQLite** handling task management. The app supports user authentication, task CRUD operations, and CSV export functionality.

🔗 Live Demo: https://taskmanager-psi-six.vercel.app/

---

## 🛠️ Tech Stack

* **Frontend**: React + Tailwind CSS + DaisyUI
* **Backend 1**: Node.js + **MongoDB** (User Authentication)
* **Backend 2**: Django + **SQLite** (Task Management & CSV Export)
* **Database**:

  * MongoDB (for authentication)
  * SQLite (for task storage)

---

## 🚀 Features

* ✅ User Authentication (Sign Up & Login)
* ✅ Task Manager Page: Create, Read, Update, and Delete tasks
* ✅ Export Tasks: Download tasks as an Excel (CSV) file

---

## 📂 Project Structure

```
.
├── frontend     # React frontend
├── backend1     # Node.js + MongoDB backend for authentication
└── backend2     # Django + SQLite backend for task management
```

---

## 🧑‍💻 Setup Instructions

### 1. Unzip the Repository

### 2. Frontend Setup (React + Tailwind CSS + DaisyUI)

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: [http://localhost:5173](http://localhost:5173)

---

### 3. Backend 1 Setup (Node.js + MongoDB - Authentication)

```bash
cd backend1
npm install
```

Make sure your MongoDB server is running and update the connection URI in your environment variables or config file (`.env`, `config.js`, etc.).

Then run:

```bash
node server.js
# OR (if nodemon is installed)
nodemon server.js
```

This handles user sign up and login using MongoDB for data storage.

---

### 4. Backend 2 Setup (Django + SQLite - Task Management)

```bash
cd backend2
pip install -r requirements.txt
uvicorn app.main:app --reload
```

* This backend provides REST APIs for task CRUD and CSV export.
* Uses **SQLite** (default in Django) for storing task data.
* You can view and edit the database via `db.sqlite3`.

---

## 🔑 Usage Flow

1. Visit the homepage — you'll see **Login** and **Signup** options.
2. Register a new user from the Signup page.
3. Login with your new credentials.
4. Once logged in, access the **Task Manager Page**:

   * ✅ Add new tasks
   * ✏️ Edit or delete tasks
   * 📤 Export the task list as CSV

---

## 📦 Dependencies

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* [MongoDB](https://www.mongodb.com/) (local or cloud e.g. Atlas)
* [Python 3.8+](https://www.python.org/)
* pip
* Uvicorn (included in `requirements.txt`)
* SQLite (included with Python)

---

## ⚙️ Environment Setup

### MongoDB (Node.js Authentication)

You can set your MongoDB connection string in a `.env` file like:

```
MONGO_URI=mongodb://localhost:27017/taskmanager-auth
PORT=5000
JWT_SECRET=your_jwt_secret
```

Make sure your Node.js backend reads from this `.env` file.

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).


