
# 👥 Employee Management System - Frontend

This is the frontend application for the Employee Management System, built using **React.js** and **Vite**. It provides a sleek, user-friendly interface to manage employee records, integrated with a Spring Boot backend API.

## 🚀 Features

* **Dashboard Overview:** View total employee counts and quick stats.
* **Employee CRUD:** * **Create:** Add new employees with validation.
* **Read:** List all employees in a searchable table.
* **Update:** Edit existing employee details.
* **Delete:** Remove records with a confirmation prompt.


* **Responsive Design:** Fully functional on desktops, tablets, and mobile devices.
* **API Integration:** Uses **Axios** for smooth communication with the backend.

---

## 🛠️ Tech Stack

* **Library:** React 18
* **Build Tool:** Vite
* **Routing:** React Router Dom
* **Styling:** CSS3 / Bootstrap (or Tailwind)
* **HTTP Client:** Axios

---

## 💻 Setup Instructions

### 1. Prerequisites

Ensure you have the following installed:

* **Node.js** (v18.0.0 or higher)
* **npm** or **yarn**

### 2. Installation

1. Clone the repository:
```bash
git clone https://github.com/V-Gunasekhar/employee.git

```


2. Navigate to the frontend directory:
```bash
cd ems-frontend

```


3. Install dependencies:
```bash
npm install

```



### 3. Running the App

Start the development server:

```bash
npm run dev

```

The application will be available at `http://localhost:5173`.

---

## 🔌 Backend Connection

The frontend is configured to communicate with the backend running at:
`http://localhost:8080/api/v1/employees`

---

## 📂 Folder Structure

```text
src/
├── components/     # Reusable UI components (Header, Footer)
├── services/       # API call logic (EmployeeService.js)
├── pages/          # Page views (ListEmployee, AddEmployee)
├── App.jsx         # Main Routing logic
└── main.jsx        # App entry point

```

---

### How to save this to GitHub:

1. Open your `README.md` file in your editor (VS Code).
2. Paste the text above and save.
3. Run these commands in Git Bash:
```bash
git add README.md
git commit -m "docs: finalize professional readme"
git push origin main

```




