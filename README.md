# 📊 SkyGeni Assessment

🔗 **Live Demo**: [SkyGeni Website](https://sygeniproject.netlify.app)

This is a **full-stack data visualization project** built with the **MERN stack** (Express + React), designed for processing, analyzing, and visualizing complex datasets. The platform supports structured data presentation with interactive charts and tables using D3.js and Material UI, making it suitable for analytical dashboards and enterprise reporting tools.


### 💡 Key Highlights:
- 📈 **Interactive Data Visualizations** using D3.js for insightful charts
- 📊 **Dynamic Tables and Cards** to display processed backend data cleanly
- 🔄 **Redux State Management** for smooth UI performance
- ⚙️ **Modular Utility Functions** in the backend for complex calculations
- 🎨 **Clean & Responsive UI** using Material UI + Tailwind CSS
- 🔐 **Environment Config Support** via dotenv and CORS


## 📌 Features
- 🧮 **Data fetching**: Fetched data using custom hooks in the frontend
- 🧠 **Data Utility Modules**: Organized logic for calculating metrics
- 🔁 **API Integration**: Robust backend routes to support frontend needs using mvc architecture
- 💻 **Component-based UI**: React components for charts, tables, and cards


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
```

## 🏗️ Setup & Installation
1. 📥 Clone the repository:
   ```sh
   git clone https://github.com/kraarush/skygeni_project.git
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


## Redux state chart
![Redux State](https://res.cloudinary.com/dhadivmz4/image/upload/v1744612555/redux_state_chart_vpt5wl.png)


## Screenshots of website
![Laptop screen](https://res.cloudinary.com/dhadivmz4/image/upload/v1744823763/laptop_screen_i7vyhv.png)
![ipad screen](https://res.cloudinary.com/dhadivmz4/image/upload/v1744823763/ipad_screen_tgxsmi.png)
![Mobile screen 1](https://res.cloudinary.com/dhadivmz4/image/upload/v1744823764/mob_screen_1_eh2ozw.png)
![Mobile screen 2](https://res.cloudinary.com/dhadivmz4/image/upload/v1744823763/mob_screen_2_eul7zj.png)
