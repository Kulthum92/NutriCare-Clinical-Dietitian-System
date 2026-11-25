
# NutriCare Clinical Dietitian System

**Supporting Better Nutrition and Health Through Technology**

## 1. Project Overview

NutriCare Clinical Dietitian System is a web-based application designed to support nutrition counseling, meal planning, and appointment management.

The system aims to connect clients with nutrition-related services through a simple, accessible, and user-friendly platform.

## 2. Project Objectives

- To support nutrition counseling services.
- To provide access to meal-planning services.
- To simplify appointment requests.
- To improve communication between clients and dietitians.
- To manage appointment information through a backend server.

## 3. Main Features

- User-friendly website interface.
- Nutrition and dietitian service information.
- Appointment booking form.
- Collection of client details.
- Backend API for handling appointment requests.
- Appointment data storage using JSON files.

## 4. Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Data Storage
- JSON file-based storage.

### Development Tools
- Visual Studio Code
- GitHub

## 5. Project Structure

```text
NutriCare-Clinical-Dietitian-System/
│
├── backend/
│   └── server.js
│
├── css/
│
├── js/
│   └── script.js
│
├── index.html
├── README.md
├── package.json
├── package-lock.json
└── .gitignore
```

## 6. Backend API Endpoints

The backend provides the following API endpoints:

| HTTP Method | Endpoint | Description |
|-------------|----------|-------------|
| GET | /api/appointments | Retrieve appointment requests |
| POST | /api/appointments | Submit a new appointment request |

### Appointment Information

The appointment form collects the following information:

- Name
- Email
- Date
- Service
- Message

Submitted appointment information is stored in a JSON file.

## 7. Installation and Setup

Follow these steps to run the project locally.

### Step 1: Clone the Repository

```bash
git clone https://github.com/Kulthum92/NutriCare-Clinical-Dietitian-System.git
```

### Step 2: Open the Project Folder

```bash
cd NutriCare-Clinical-Dietitian-System
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Backend Server

```bash
node backend/server.js
```

### Step 5: Open the Application

Open the following address in your browser:

```text
http://localhost:3000
```

## 8. Project Deployment

The frontend project is published through GitHub Pages.

The backend is designed to run using Node.js and Express.js and can be deployed through a suitable hosting platform such as Render.

## 9. Future Improvements

- Integration with a permanent database such as MongoDB.
- User registration and login system.
- Dietitian and administrator dashboards.
- Improved appointment management.
- Online nutrition consultations.
- Personalized diet plans.

## 10. Author Information

**Name:** Kulthum Hija

**Program:** BSc Nutrition & Dietetics

**Project Name:** NutriCare Clinical Dietitian System

---

*NutriCare – Supporting Better Nutrition and Health Through Technology.*
