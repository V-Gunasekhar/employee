

# Task Manager - Frontend (EMS)

A modern, glassmorphism-inspired Task Management dashboard built with **React** and **Vite**. This frontend communicates with a Spring Boot backend to manage tasks, filter by status, and search by title.

## 🚀 Features

* **Secure Login:** Custom authentication flow with JWT integration.
* **Task CRUD:** Create, View, Update (Status), and Delete tasks.
* **Dynamic Filtering:** Filter tasks by `TODO`, `IN_PROGRESS`, and `DONE`.
* **Live Search:** Search tasks by title in real-time.
* **Responsive UI:** Glass-card design that works on all screen sizes.

---

## 🛠️ Tech Stack

* **Framework:** React (Vite)
* **HTTP Client:** Axios
* **Styling:** Custom CSS3 (Glassmorphism)
* **Icons:** Lucide-React / Emoji UI

---

## 💻 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) installed (v16 or higher)
* Backend (Spring Boot) running on `http://localhost:8080`

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/meena-1904/TaskManager.git
cd TaskManager

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run the development server:**
```bash
npm run dev

```



The app will be running at `http://localhost:5173`.

---

## 🔑 Login Credentials (Dev Mode)

For development/testing without a full user database:

* **Username:** `admin`
* **Password:** `1234`

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Login.jsx      # Login page & Auth logic
│   └── TaskItem.jsx   # Individual task card component
├── App.jsx            # Main dashboard & API handling
├── App.css            # Styles for the entire app
└── main.jsx           # Entry point

```

---

## 🤝 Team

* **Backend:** [Meena]
* **Frontend:** [Your Name]

---

### To push this to GitHub:

Run these commands in your Git Bash:

1. `git add README.md`
2. `git commit -m "docs: added professional readme"`
3. `git push origin main`

