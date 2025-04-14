# 📊 SkyGeni

🔗 **Live Demo**: [SkyGeni Website](https://sygeniproject.netlify.app)

SkyGeni is a **full-stack data visualization project** built with the **MERN stack** (Express + React), designed for processing, analyzing, and visualizing complex datasets. The platform supports structured data presentation with interactive charts and tables using D3.js and Material UI, making it suitable for analytical dashboards and enterprise reporting tools.

---

### 💡 Key Highlights:
- 📈 **Interactive Data Visualizations** using D3.js for insightful charts
- 📊 **Dynamic Tables and Cards** to display processed backend data cleanly
- 🔄 **Redux State Management** for smooth UI performance
- ⚙️ **Modular Utility Functions** in the backend for complex calculations
- 🎨 **Clean & Responsive UI** using Material UI + Tailwind CSS
- 🔐 **Environment Config Support** via dotenv and CORS

---

## 📌 Features
- 🧮 **ACV & Opportunity Data Analysis**: Fetched and calculated on demand
- 🧠 **Data Utility Modules**: Organized logic for calculating metrics
- 🔁 **API Integration**: Robust backend routes to support frontend needs
- 💻 **Component-based UI**: React components for charts, tables, and cards
- 🛠️ **Developer Friendly**: Vite-powered frontend with hot reload and ESLint

---

## 🛠️ Technologies Used

### 🎨 **Frontend**
- ⚛️ React (Vite)
- 🎯 Redux (State Management)
- 🎨 Material UI & Tailwind CSS (Styling)
- 📊 D3.js (Data Visualization)
- 📦 Vite (Frontend Build Tool)

### 🏗️ **Backend**
- 🟢 Node.js (Express.js)
- 🔄 CORS (Cross-Origin Handling)
- 🔐 dotenv (Environment Variables)
- 📈 Custom Data Calculators (Utility Modules)
- 🚀 Nodemon (Dev Server)

### 🧪 **Dev & Deployment**
- 🔄 Render (Backend Deployment)
- 🌐 Netlify (Frontend Deployment)
- 🧪 Postman (API Testing)

---

## 📂 Project Structure
```
backend/
├── controller/
│   └── data.controller.js
├── routes/
│   └── data.route.js
├── util/
│   ├── calculateAcvData.js
│   ├── calculateAcvTableData.js
│   ├── calculateOpportunityData.js
│   └── calculateOpportunityTableData.js
├── .env
├── data.js
├── index.js

frontend/
├── node_modules/
├── public/
│   └── vite.svg
├── redux/
│   ├── acvData.slice.js
│   ├── acvTable.slice.js
│   ├── loading.slice.js
│   ├── opportunity.slice.js
│   └── opportunityTable.slice.js
├── src/
│   ├── component/
│   │   ├── Card.jsx
│   │   ├── RectangleBar.jsx
│   │   └── Tablecard.jsx
│   ├── App.jsx
│   ├── CustomHook.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

---

## 🏗️ Setup & Installation
1. 📥 Clone the repository:
   ```sh
   git clone https://github.com/kraarush/OpportuneX.git
   ```
2. 📂 Navigate to the project directory:
   ```sh
   cd skygeni_project
   ```
3. 📦 Install dependencies:
   ```sh
   npm install
   ```
4. 🚀 Start the development servers:
   ```sh
   npm run dev  #to start the server of backend and frontend
   ```