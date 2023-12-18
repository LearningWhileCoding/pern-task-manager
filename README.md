# PERN Task Manager

This task manager is a simple app developed as a part of Laboratory IV to learn the PERN stack. It allows users to manage their tasks by creating, updating, and deleting them.


## Project Structure
```
├── backend
│   ├── database
│   │   └── init.sql
│   ├── package.json
│   ├── package-lock.json
│   └── src
│       ├── app.js
│       ├── config.js
│       ├── controllers
│       │   ├── auth.controller.js
│       │   └── tasks.controller.js
│       ├── db.js
│       ├── index.js
│       ├── libs
│       │   └── jwt.js
│       ├── middlewares
│       │   ├── auth.middleware.js
│       │   └── validate.middleware.js
│       ├── router
│       │   ├── auth.routes.js
│       │   └── tasks.routes.js
│       └── schemas
│           ├── auth.schema.js
│           └── tasks.schema.js
├── frontend
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── public
│   │   └── tm.svg
│   ├── src
│   │   ├── api
│   │   │   ├── axios.js
│   │   │   └── tasks.api.js
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   └── react.svg
│   │   ├── components
│   │   │   ├── navbar
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Navigation.jsx
│   │   │   ├── pages
│   │   │   │   ├── About.jsx
│   │   │   │   ├── FormTask.jsx
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── NotFound.jsx
│   │   │   │   ├── Profile.jsx
│   │   │   │   ├── SignIn.jsx
│   │   │   │   ├── SignUp.jsx
│   │   │   │   └── Tasks.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── ui
│   │   │       ├── Button.jsx
│   │   │       ├── Card.jsx
│   │   │       ├── Container.jsx
│   │   │       ├── Index.js
│   │   │       ├── Input.jsx
│   │   │       ├── Label.jsx
│   │   │       ├── tasks
│   │   │       │   └── TasksCard.jsx
│   │   │       └── TextArea.jsx
│   │   ├── context
│   │   │   ├── AuthContext.jsx
│   │   │   └── TasksContext.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
``````