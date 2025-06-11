
# Full Stack Task Manager App

This is a full-stack web application built using **React**, **Tailwind CSS**, and **DaisyUI** on the frontend, with **Node.js** and **Django** handling the backend logic. It supports **user authentication**, **task management (CRUD)**, and **CSV export functionality**.

---

## 🛠️ Tech Stack

- **Frontend**: React + Tailwind CSS + DaisyUI  
- **Backend 1**: Node.js (User Authentication)  
- **Backend 2**: Django (CRUD Operations & Export to CSV)

---

## 🚀 Features

- **User Authentication** (Sign Up & Login)
- **Task Manager Page**: Create, Read, Update, and Delete tasks
- **Export Tasks**: Download tasks as an Excel (CSV) file

---

## 📂 Project Structure

```
.
├── frontend     # React frontend
├── backend1     # Node.js backend for authentication
└── backend2     # Django backend for tasks
```

---

## 🧑‍💻 Setup Instructions

### 1. unzip the Repository 


---

### 2. Frontend Setup (React + Tailwind CSS + DaisyUI)

```bash
cd frontend
npm install
npm run dev
```

The frontend will start running at [http://localhost:5173](http://localhost:5173) (default Vite port).

---

### 3. Backend 1 Setup (Node.js - Authentication)

```bash
cd backend1
npm install
node server.js
# OR (if nodemon is installed)
nodemon server.js
```

This handles user **sign up** and **login** logic.

---

### 4. Backend 2 Setup (Django - Task Management)

```bash
cd backend2
pip install -r requirements.txt
uvicorn app.main:app --reload
```

This backend provides APIs for **CRUD operations** on tasks and **CSV export**.

---

## 🔑 Usage Flow

1. **Go to the homepage** — you’ll see **Login** and **Signup** buttons.
2. **Click on Login**, and then use the **Signup** link there to register.
3. After registering, log in with your new credentials.
4. On successful login, you’ll be taken to the **Task Manager Page**.
5. You can:

   * Add new tasks
   * Edit or delete existing tasks
   * Export the task list by clicking the **Export** button (downloads a CSV file)

---

## 📦 Dependencies

Make sure you have the following installed:

* **Node.js**
* **npm**
* **Python 3.8+**
* **pip**
* **Uvicorn** (included in `requirements.txt`)

---

## 📃 License

This project is licensed under the MIT License.

---
