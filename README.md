# GIS web app in Django

## Run the project locally
To run the whole project locally, clone this repo:
```bash
git clone https://github.com/jvelazquez-reyes/ludycom_node.git
```

Create an `.env` file in the directory `backend/config` and add the following:

```bash
PORT = 8000

DB_HOST = "127.0.0.1"
DB_USER = "your_user"
DB_PASSWORD = "your_password"
DB_PORT = 3306
DB_DATABASE = "ludycomdb"

JWT_SECRET_KEY = "dfbkjgflseiia3948943954wfsdchsgfuw#%#%"
JWT_EXPIRES = 7d
JWT_COOKIE_EXPIRES = 90
```

Create the database and tables with this script:
```bash
CREATE DATABASE IF NOT EXISTS ludycomdb;

USE ludycomdb;

CREATE TABLE user (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    password VARCHAR(10) DEFAULT NULL,
    PRIMARY KEY  (id)
);

DESCRIBE user;

INSERT INTO user values
    (1, 'Ludycom', 'test');

SELECT * FROM user;

CREATE TABLE users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    names VARCHAR(50),
    surnames VARCHAR(50),
    birthdate DATE,
    email VARCHAR(50),
    document INT(7),
    code INT(2),
    salary DECIMAL(10,2),
    status BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (id)
);

CREATE TABLE workplace (
    id INT(11) NOT NULL AUTO_INCREMENT,
    code INT(2),
    name VARCHAR(50),
    manager INT(7),
    status BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (id)
);
```

In the local folder where you cloned the project, go to `backend` directory and:

```bash
npm install
npm run dev
```

In the local folder where you cloned the project, go to `frontend` directory and:

```bash
npm install
npm start
```

Now you are in the `login` page. The credentials are:
```bash
username: Ludycom
password: test
```

Navigate in the app to perfrom CRUD operations in the `users` and `workplace` models.


## Features
- [This is the MySQL database script](https://github.com/jvelazquez-reyes/ludycom-node/blob/main/backend/db/database.sql) 
- All the routes are protected and only the authenticated user will be allowed to navigate in the app
- CRUD operations (users)
- CRUD operations (workplaces)
- User and workplaces query with pagination using [MUI X Data Grid](https://mui.com/x/react-data-grid/)
- Export Excel file of users
- Input field validation with [React Hook Form](https://www.npmjs.com/package/react-hook-form)
- Error handler
- REST API with `Express - Node.js`
- Web interface with `React.js`
- The `Urls` are the following:
  - Users
    - `http://localhost:3000/users/users-post` to create a new user`
    - `http://localhost:3000/users/all-users` to get all users`
    - `http://localhost:3000/users/users-update/id` to update a user`
    - `http://localhost:3000/users/user-delete/id` to delete a user`

  - Workplace
    - `http://localhost:3000/workplaces/workplace-post` to create a new workplace`
    - `http://localhost:3000/workplaces/all-workplaces` to get all workplaces`
    - `http://localhost:3000/workplaces/workplace-update/id` to update a workplace`
    - `http://localhost:3000/workplaces/workplace-delete/id` to delete a workplace`

- Project structure

```bash
├── Nginx
│   ├── Dockerfile
│   └── default.conf
├── README.md
├── backend
│   ├── Dockerfile
│   ├── app.js
│   ├── config
│   ├── config.js
│   ├── controller
│   │   ├── user.js
│   │   ├── users.js
│   │   └── workplace.js
│   ├── db
│   │   └── database.sql
│   ├── db.js
│   ├── middleware
│   │   ├── auth.js
│   │   ├── catchAsyncErrors.js
│   │   └── error.js
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   └── utils
│       ├── ErrorHandler.js
│       └── jwtToken.js
├── docker-compose.yml
├── frontend
│   ├── Dockerfile
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── assets
│   │   │   └── animations
│   │   │       └── loader.json
│   │   ├── components
│   │   │   ├── Layout
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Loader.jsx
│   │   │   ├── Login
│   │   │   │   └── Login.jsx
│   │   │   └── Services
│   │   │       ├── AllUsers.jsx
│   │   │       ├── AllWorkplaces.jsx
│   │   │       ├── Layout
│   │   │       │   └── SideBar.jsx
│   │   │       ├── UserPost.jsx
│   │   │       ├── UserUpdate.jsx
│   │   │       ├── WorkplacePost.jsx
│   │   │       └── WorkplaceUpdate.jsx
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── pages
│   │   │   ├── LoginPage.jsx
│   │   │   ├── UserPostPage.jsx
│   │   │   ├── UserUpdatePage.jsx
│   │   │   ├── UsersPage.jsx
│   │   │   ├── WorkplacePostPage.jsx
│   │   │   ├── WorkplaceUpdatePage.jsx
│   │   │   └── WorkplacesPage.jsx
│   │   ├── redux
│   │   │   ├── actions
│   │   │   │   ├── users.js
│   │   │   │   └── workplace.js
│   │   │   ├── reducers
│   │   │   │   ├── users.js
│   │   │   │   └── workplace.js
│   │   │   └── store.js
│   │   ├── reportWebVitals.js
│   │   ├── routes
│   │   │   ├── ProtectedRoute.js
│   │   │   └── Routes.js
│   │   ├── server.js
│   │   ├── setupTests.js
│   │   └── styles
│   │       └── styles.js
│   └── tailwind.config.js
└── setup.sql
```

## Run the project from Docker
> :warning: **This is not fully working**: Be very careful here!

Start and run the app with the following command from the root directory:

```bash
docker-compose up
```

> **Note**
> Go to issues to see the next improvements

