# 🔐 Permission-Based System Manager (Local-First Auth Engine)

A React-based Role-Based Access Control (RBAC) system that demonstrates authentication, authorization, protected routing, lifecycle synchronization, and persistent global state using Context API and localStorage.

This project focuses purely on logic and data flow without using any CSS libraries.

---

## 🚀 Project Overview

This application simulates a permission-based dashboard where users can:

- Login with a selected role (Admin, Editor, Viewer)
- View resources based on authorization level
- Edit/Delete resources based on permissions
- Navigate through protected routes
- Maintain login state after refresh
- Sync authentication state across browser tabs

---

## 🧠 Core Concepts Implemented

### 🔑 Authentication
- Login system (no backend required)
- Global user state managed via Context API
- Persistent login using localStorage
- Rehydration of state on refresh

### 🛡 Authorization
- Role hierarchy:
  - Admin (highest)
  - Editor
  - Viewer
- Conditional rendering of:
  - Edit button (Admin + Editor)
  - Delete button (Admin only)
- Locked resources shown with 🔒 if access is restricted

### 🚪 Protected Routing
- ProtectedRoute component prevents access to dashboard without login
- RoleRoute intercepts unauthorized users attempting to access admin-only routes
- URL-based role protection using useParams

### 🔄 Lifecycle & Sync
- Simulated API fetch using setTimeout and loading states
- Cross-tab logout sync using the `storage` event listener
- Automatic logout when localStorage is cleared in another tab

### ♻️ State Management
- Immutable updates using `map()` and `filter()`
- Nested object updates inside arrays
- Reusable ResourceList component (Active vs Archived)

---

## 🏗 Project Structure
```
src/
├── components/
│ ├── ProtectedRoute.jsx
│ ├── RoleRoute.jsx
│ ├── ResourceItem.jsx
│ └── ResourceList.jsx
├── context/
│ └── AuthContext.jsx
├── data/
│ └── resources.js
├── hooks/
│ └── useFetchResources.js
├── pages/
│ ├── Login.jsx
│ ├── Dashboard.jsx
│ └── AdminResource.jsx
├── utils/
│ └── roles.js
└── App.jsx
```

---

## 🧪 How to Run Locally

```
npm install
npm run dev
```

Open in browser:

```http://localhost:5173```

## 🔍 Feature Demonstration
### Viewer
- Can view Viewer-level resources
- Cannot edit or delete
- Sees 🔒 on restricted resources

### Editor
- Can edit Editor-level resources
- Cannot delete
- Admin resources remain locked

### Admin
- Full access to all resources
- Can edit and delete

## 🧩 Tough Logic Challenges Solved

- Role-based URL interception
- Cross-tab localStorage synchronization
- Immutable nested state updates
- Persistent authentication on refresh
- Reusable list logic via props

## 🛠 Tech Stack

- React
- React Router
- Context API
- Local Storage
- JavaScript (ES6+)
- Vite

## 🎯 Learning Outcome
This project demonstrates deep understanding of:

- Authentication vs Authorization
- Role-Based Access Control (RBAC)
- React state lifecycle
- Global state management
- Route protection patterns
- Persistent state synchronization
- Immutable data handling

## 👩‍💻 Author
Nafisa Jamdar
# GitHub: 
``` https://github.com/nafisa-jamdar ```
 
